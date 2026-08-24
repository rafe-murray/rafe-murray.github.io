# Setting up Observability for Kubernetes

## Background

While I was working at JMA Consulting, we wanted to implement an observability system for their Kubernetes infrastructure.

## Demo code block

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: myconfig
  namespace: default
data:
  key: value
---
```

## Implementation

![](./diagrams/out/signoz.svg)
