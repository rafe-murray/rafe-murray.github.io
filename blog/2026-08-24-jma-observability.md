---
title: Setting up Obserability for Kubernetes
authors: rafe
date: 2026-08-24 20:34
tags: [k8s, observability]
---

# Setting up Observability for Kubernetes

## Our requirements

- Uses OTel
- Simple to set up and maintain
- Relatively cheap
- High enough adoption that community support exists
- Secure

## Architecture

```mermaid
---
config:
  architecture:
    randomize: false
    edgeElasticity: 0.2
---
architecture-beta
    group staging(cloud)[Staging Cluster]
    group node1(server)[Node 1] in staging
    group node2(server)[Node 2] in staging
    group node3(server)[Node 3] in staging
    group signoz(server)[Signoz] in node1
    service clickhouse(database)[ClickHouse] in signoz
    service query(server)[Query Service] in signoz
    service frontend(server)[Frontend] in signoz
    clickhouse:R -- L:query
    query:B -- T:frontend

    service otelAgent1(server)[OpenTelemetry Agent] in node1
    otelAgent1:T --> B:clickhouse
    service otelAgent2(server)[OpenTelemetry Agent] in node2
    otelAgent2:B -- T:toClickhouse
    service otelAgent3(server)[OpenTelemetry Agent] in node3
    junction toClickhouse in node3
    otelAgent3:T -- B:toClickhouse

    service otelReceiver(server)[OpenTelemetry Receiver] in node2
    otelReceiver:B --> T:clickhouse

    service app1(server)[Workloads] in node1
    app1:L --> R:otelAgent1

    service app2(server)[Workloads] in node2
    app2:B --> T:otelAgent2

    service app3(server)[Workloads] in node3
    app3:T --> B:otelAgent3

    service gtw(cloud)[Gateway] in staging
    gtw:L --> R:otelReceiver

    service otelDeployment(server)[OpenTelemetry Deployment] in node3
    service stagingK8s(cloud)[Kubernetes API Server] in staging
    otelDeployment:T --> B:stagingK8s
    otelDeployment:R -- L:toClickhouse
    toClickhouse:R --> L:clickhouse

    group prod(cloud)[Production Cluster]
    group node4(server)[Node 4] in prod
    group node5(server)[Node 5] in prod
    group node6(server)[Node 6] in prod
    service otelAgent4(server)[OpenTelemetry Agent] in node4
    service otelAgent5(server)[OpenTelemetry Agent] in node5
    service otelAgent6(server)[OpenTelemetry Agent] in node6

    service otelForwarder(server)[OpenTelemetry Forwarder] in node6
    otelForwarder:L --> R:gtw
    otelAgent6:B --> T:otelForwarder

    otelAgent5:T --> B:otelForwarder

    service otelDeployProd(server)[OpenTelemetry Deployment] in node4
    service prodK8s(cloud)[Kubernetes API Server] in prod
    junction toOtelForwarder in node4
    otelDeployProd:T -- B:toOtelForwarder
    otelAgent4:B -- T:toOtelForwarder

    toOtelForwarder:L --> R:otelForwarder
    otelDeployProd:R --> L:prodK8s

    service app4(server)[Workloads] in node4
    app4:L --> R:otelAgent4

    service app5(server)[Workloads] in node5
    app5:L --> R:otelAgent5

    service app6(server)[Workloads] in node6
    app6:L --> R:otelAgent6

```
