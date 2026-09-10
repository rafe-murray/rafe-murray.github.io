import Angular from '../assets/tech/angular.svg';
import Bash from '../assets/tech/bash.svg';
import C from '../assets/tech/c.svg';
import CMake from '../assets/tech/cmake.svg';
import Cpp from '../assets/tech/cpp.svg';
import Docker from '../assets/tech/docker.svg';
import Github from '../assets/tech/github.svg';
import GithubWhite from '../assets/tech/github-white.svg';
import Gitlab from '../assets/tech/gitlab.svg';
import Go from '../assets/tech/go.svg';
import GoWhite from '../assets/tech/go-white.svg';
import Helm from '../assets/tech/helm-icon-color.svg';
import HelmWhite from '../assets/tech/helm-icon-white.svg';
import Java from '../assets/tech/java.svg';
import Js from '../assets/tech/js.svg';
import Kotlin from '../assets/tech/kotlin.svg';
import Kubernetes from '../assets/tech/kubernetes-icon-color.svg';
import MongoDB from '../assets/tech/mongodb.svg';
import MongoDBWhite from '../assets/tech/mongodb-white.svg';
import Mysql from '../assets/tech/mysql.svg';
import Php from '../assets/tech/php.svg';
import Postgresql from '../assets/tech/postgresql.svg';
import ProtoBuf from '../assets/tech/protobuf.svg';
import Python from '../assets/tech/python.svg';
import React from '../assets/tech/react-dark.svg';
import ReactLight from '../assets/tech/react.svg';
import Systemverilog from '../assets/tech/systemverilog.svg';
import Tailwind from '../assets/tech/tailwind.svg';
import Ts from '../assets/tech/ts.svg';
import { CourseLoad, Project, Skill, SkillKey, Workplace } from '../types';
import { a } from '../styles';
import Link from '@docusaurus/Link';

export const skillsMap = new Map<SkillKey, Skill>([
  { key: SkillKey.Angular, title: "Angular", icon: Angular },
  { key: SkillKey.Bash, title: 'Bash', icon: Bash },
  { key: SkillKey.C, title: 'C', icon: C },
  { key: SkillKey.Cpp, title: 'C++', icon: Cpp },
  { key: SkillKey.CMake, title: 'CMake', icon: CMake },
  { key: SkillKey.Docker, title: 'Docker', icon: Docker },
  { key: SkillKey.GitHub, title: "GitHub Actions", icon: Github, darkIcon: GithubWhite },
  { key: SkillKey.GitLab, title: 'GitLab CI/CD', icon: Gitlab },
  { key: SkillKey.Go, title: 'Go', icon: Go, darkIcon: GoWhite },
  { key: SkillKey.Helm, title: 'Helm', icon: Helm, darkIcon: HelmWhite },
  { key: SkillKey.Java, title: 'Java', icon: Java },
  { key: SkillKey.JavaScript, title: 'JavaScript', icon: Js },
  { key: SkillKey.Kotlin, title: 'Kotlin', icon: Kotlin },
  { key: SkillKey.Kubernetes, title: "Kubernetes", icon: Kubernetes },
  { key: SkillKey.MongoDB, title: 'MongoDB', icon: MongoDB, darkIcon: MongoDBWhite },
  { key: SkillKey.MySQL, title: 'MySQL', icon: Mysql },
  { key: SkillKey.PHP, title: 'PHP', icon: Php },
  { key: SkillKey.PostgreSQL, title: 'PostgreSQL', icon: Postgresql },
  { key: SkillKey.ProtoBuf, title: 'ProtoBuf', icon: ProtoBuf },
  { key: SkillKey.Python, title: 'Python', icon: Python },
  { key: SkillKey.React, title: 'React', icon: React, darkIcon: ReactLight },
  { key: SkillKey.SystemVerilog, title: 'SystemVerilog', icon: Systemverilog },
  { key: SkillKey.TailwindCSS, title: 'Tailwind CSS', icon: Tailwind },
  { key: SkillKey.TypeScript, title: 'TypeScript', icon: Ts },
].map((skill) => [skill.key, skill]));

export const projects = {
  secureNetworking: {
    header: "Secure Networking for Kubernetes Cluster",
    content: ["JMA Consulting wanted to ensure that their network traffic was encrypted. We implemented this with two common tools: Linkerd and ", <code>cert-manager</code>, ". ", <code>cert-manager</code>, ", along with Let's Encrypt, provided the TLS certificates for the cluster, allowing us to encrypt traffic up to our Gateway. From there we leveraged Linkerd to provide mTLS for the services within the cluster."],
    skills: [SkillKey.Kubernetes, SkillKey.Helm]
  },
  gitOps: {
    header: "GitOps System with ArgoCD",
    content: "JMA Consulting wanted to have an easy way to deploy their applications to Kubernetes while keeping a record of what was running in their cluster and avoiding configuration drift from manual changes. I was tasked with researching, evaluating, and implementing a solution. I considered a CI/CD pipeline with cron jobs, Flux CD, and ArgoCD. A GitOps solution offered significant automation benefits, so we quickly removed a CI/CD pipeline from the consideration. Since most of the team did not have much Kubernetes experience, we decided to go with ArgoCD as it has a more user-friendly interface out of the box. After deciding this I migrated all of our manually deployed helm charts to ArgoCD applications.",
    skills: [SkillKey.Kubernetes, SkillKey.Helm]
  },
  backupAndRestore: {
    header: "Kubernetes backups and restores",
    content: ["As part of JMA Consulting's migration to Kubernetes, they wanted to make sure they would have a robust distaster recover plan. Part of this was backing up and restoring user data. I was tasked with researching different tools, providing a recommendation, and implementing a disaster recovery system using the tools the team decided on. The infrastructure configuration was all stored in git and deployed with ArgoCD, so we decided to only backup user uploads (stored on PVCs) and databases. For the PVCs we used the industry-standard: Velero. For the databases, since they were all MariaDBs, we used the ", <code><Link href='https://github.com/mariadb-operator/mariadb-operator'>mariadb-operator</Link></code>, " LogicalBackup and Restore Custom Resources. We stored all the backups in S3-compatible storage, and used a Bash script to coordinate the two tools."],
    skills: [SkillKey.Kubernetes, SkillKey.Bash, SkillKey.Helm]
  },
  k8sObservability: {
    header: "Observability System for Kubernetes",
    content: "I evaluated available observability systems for Kubernetes, including Datadog, New Relic, the LGTM stack, and Signoz. At my recommendation, the team decided to use Signoz. I implemented our self-hosted setup using the OpenTelemetry Collector.",
    skills: [SkillKey.Kubernetes, SkillKey.Helm]
  },
  civicrmOperator: {
    header: "CiviCRM Operator",
    content: "I improved a Kubernetes operator for a legacy PHP application (CiviCRM) to enable automated upgrades, exposing additional fields needed for production-ready configuration such as resource requests and limits, cron jobs, and backup configuration.",
    skills: [SkillKey.Go, SkillKey.Kubernetes]
  },
  arc4Cracker: {
    header: "ARC4 Cracker",
    content: [
      "I implemented a brute force algorithm on an FPGA to crack an 8-bit ARC4 encryption key, recovering the original plaintext. The underlying assumption for this project is that a \"Decrypted\" message is made up of only ASCII characters. The hardware module sequentially tries different keys, checking if the potential plaintext is all valid ASCII. If it is, the module stores the plaintext and correct key in memory. After creating an initial implementation, I sped it up by increasing the core count to 184, replacing single-port memories with dual-port memories, and optimizing away redundant states from state machines. I also added a Synopsis Design Constraints file to increase the clock speed. These changes resulted in a roughly 100x speed increase."
    ],
    skills: ['SystemVerilog']
  },
  vgaShapes: {
    header: "VGA Bresenham Circle & Reuleaux Triangle",
    content: [
      "I implemented the ",
      <a
        className={a}
        href="https://en.wikipedia.org/wiki/Midpoint_circle_algorithm"
        target="_blank"
        rel="noreferrer"
      >
        Bresenham Circle Algorithm
      </a>,
      " to draw a circle of a specified radius, centre, and colour on a VGA screen using an FPGA. I then combined three  of these modules with some extra constraints to draw a ",
      <a
        className={a}
        href="https://en.wikipedia.org/wiki/Reuleaux_triangle"
        target="_blank"
        rel="noreferrer"
      >
        Reuleaux Triangle
      </a>,
      ", once again with a customizable diameter, centre, and colour."
    ],
    skills: ['SystemVerilog']
  },
  baccarat: {
    header: "Baccarat Simulator",
    content: "I simulated a variation of Baccarat on an FPGA, using the built-in 7-segment displays to show the dealt cards, and the LEDs to display the score and winner(s) of the hand. The user was able to step through the different phases of the hand to see it play out.",
    skills: ['SystemVerilog']
  },
  circuitSolver: {
    header: "Circuit Solver",
    content: [
      "I wrote a C++ library that solves circuits for their currents and voltages. It takes a circuit serialized using a ",
      <a
        className={a}
        href="https://protobuf.dev/"
        target="_blank"
        rel="noreferrer"
      >
        Protocol Buffer
      </a>,
      ", then converts it into an internal graph representation using an adjacency list. Next, I used ",
      <a
        className={a}
        href="https://en.wikipedia.org/wiki/Modified_nodal_analysis"
        target="_blank"
        rel="noreferrer"
      >
        Modified Nodal Analysis
      </a>,
      " to create a system of equations for the voltages. Finally, I constructed and solved a least squares problem from this set of equations using an external library for the optimization step. Once the circuit is solved, it is returned to the caller in the same Protocol Buffer format.",
    ],
    skills: ["Cpp", "CMake", "ProtoBuf"],
    github: "https://github.com/rafe-murray/circuitSolver",
  },
  aerospaceJumplist: {
    header: "Aerospace Jumplist",
    content: [
      "Created a small python script to create and manage a vim-style jumplist for ",
      <a
        className={a}
        href="https://github.com/nikitabobko/AeroSpace"
        target="_blank"
        rel="noreferrer"
      >
        Aerospace
      </a>,
      ", a tiling window manager for macOS. It allows users to go backwards and forwards through their history of workspaces by storing a history stack in the filesystem. I decided to do it this way so that the program would not need to be continuously active and could instead be run occasionally leaving state behind.",
    ],
    skills: ["Python"],
    github: "https://github.com/rafe-murray/aerospace-jumplist",
  },
  os161: {
    header: "OS/161",
    content:
      "I implemented subsystems of a teaching operating system, including synchronization primitives (locks and semaphores), file abstractions, processes, and virtual memory. Each of these systems, except for the synchronization primitives, involved writing the in-kernel syscall handlers for the associated operations.",
    skills: ["C"],
  },
  virtualFridge: {
    header: "Virtual Fridge",
    content:
      "Along with my team, I built an Android app with a Kotlin frontend, and TypeScript and MongoDB backend. We automated deployment to Azure Cloud using Docker Compose and GitHub actions. We also implemented automated testing with Jest for the backend and E2E testing for certain use-cases. The app allows users to enter food items into their fridge in two ways: they can scan a barcode on the item with their camera, in which case we look it up in a publicly available database of food products; or they can take a picture of the product, which we identifies using the Gemini API. The app then recommends recipes to use given the ingredients in the user's fridge. ",
    skills: ["TypeScript", "Kotlin", "MongoDB", "Docker", "GitHub"],
    github: "https://github.com/virtualfridge/virtualfridge",
  },
  robotCar: {
    header: "Robot Car Sign Recognition",
    content:
      "My team and I implemented the detection, classification, and reaction to a minimal set of five street signs for autonomous F1Tenth vehicles running ROS2. We used a YOLOv8 model to detect and classify the signs. It was trained on a mix of pre-labelled images and custom images we took of the physical signs we had. This way we had a large enough dataset but also the specificity we needed for our application. It was very successful, with an observed accuracy of 95% and 20ms latency in processing when running with CUDA. When running the car, it would regularly use reactive navigation algorithms we implemented (wall-following or gap-following) to drive around a closed track. When it encountered a sign, it would perform an action depending on the sign encountered.",
    // TODO: add a table with the different actions
    skills: ["Python", "Bash"],
  },
  elytraRacing: {
    header: "Elytra Racing Minecraft Mod",
    content:
      'I made a Minecraft mod using Fabric, an open-source framework for mod development in Minecraft. It adds a "booster" block that launches a player in the direction the block faces.',
    skills: ["Java"],
  },
  malloc: {
    header: "Malloc",
    content:
      "I programmed a userspace library to allocate and free variable-sized allocations. In addition to the traditional malloc/free interface, I implemented the ability to resize a previous allocation, in-place when possible, otherwise returning the new location of the block to the caller.",
    skills: ["C"],
  },
  virtualMemory: {
    header: "Virtual Memory system",
    content:
      "I created a userspace virtual memory system. It managed a contiguous block of memory passed in at initialization, as well as a file for swap space. It used a two-level page table, and supported up to 512 concurrent address spaces. It used an explicit freelist to track allocations, and a next-fit policy to determine the next allocation.",
    skills: ["C"],
  },
  shell: {
    header: "Shell",
    content:
      "I created a bare-bones version of a standard linux shell. It supported running programs either in the foreground or background, searching the PATH for executables, sending jobs to the foreground or background, listing current background jobs, and killing processes by job id.",
    skills: ["C"],
  },
  imageProcessing: {
    header: "Image Processing",
    content:
      "Implemented a variety of image processing methods on an abstract data type in Java. Simple operations included mirroring, posterizing, getting the negatinve, denoising, and weathering. More complicated ones included block painting, where rectangular sections of the image were replaced with the average pixel colour from within their bounds; image similarity, where two images were compared to each other using their cosine values; and green screening, replacing a specified background colour with another image",
    skills: ["Java"],
  },
  graphOperations: {
    header: "Graph Operations",
    content:
      "Implemented both common types of graphs: adjacency lists and adjacency matrices. Then for a weighted graph, I created methods to find the minimum cost path between two vertices, get the cost of an arbitrary path, find the diameter of the graph, find the graph's centre, list the components of a graph, and partition the graph evenly.",
    skills: ["Java"],
  },
  wikipediaServer: {
    header: "Wikipedia Server",
    content:
      "Created a server that can serve Wikipedia pages, statistics on requests, and also search for wikipedia pages. It used access tokens and session keys for authentication. It also cached its requests to Wikipedia to minimize network usage, using a custom thread-safe buffer. When shut down, it stored its collected statistics in the file system for graceful restart.",
    skills: ["Java"],
  },
  scrapers: {
    header: 'Scrapers',
    content:
      'Reimplemented Django Python scrapers of Canadian elected officials’ information on 75 websites and stored it in a database for later use by a petition service',
    skills: ['Python', 'PostgreSQL'],
    github:
      'https://github.com/search?q=org%3Aopencivicdata+is%3Apr+author%3Arafe-murray+is%3Amerged&type=pullrequests',
  },
  candidateDashboard: {
    header: 'Candidate Dashboard',
    content:
      'Developed displays of candidate information in PHP for an online educational certification system for the Construction Industry Licensing Board of Florida',
    skills: ['JavaScript', 'PHP', 'MySQL', 'Angular'],
  },
  waitlist: {
    header: 'Waitlist Functionality',
    content:
      'Created functionality using a low code framework and PHP to manage counselling waitlists and scheduling appointments for the Sexual Assault Centre of Edmonton',
    skills: ['PHP', 'MySQL'],
  },
  patchingScript: {
    header: 'Patching Script',
    content:
      'Created an internal company gitlab CI/CD pipeline on code pushes that runs my bash script to reapply patches to site files and if there are conflicts notify an administrator otherwise merge the changes to the repo without triggering the same pipeline',
    skills: ['Bash', 'GitLab'],
  },
  mechanicalClaw: {
    header: 'Mechanical Claw',
    content:
      'Wrote an Arduino C++ program to read a sensor indicating when an item was in range of a claw, and then controlled a servo motor to gradually close the claw on the item',
    skills: ['C', 'Cpp'],
  },
  ticTacToe: {
    header: 'Tic-Tac-Toe Bot',
    content:
      'Developed a bot in C to read player inputs and implements strategies to always win or draw a Tic-Tac-Toe game',
    skills: ['C'],
    github: 'https://github.com/rafe-murray/tictactoe-bot',
  },
  memorygGame: {
    header: 'Memory Game',
    content:
      'Created a game in C++ where a player would press buttons in the order that corresponding lights had randomly flashed, with each round increasing speed. Arduino button presses and light activation were simulated with TinkerCAD',
    skills: ['C', 'Cpp'],
  },
  portfolio: {
    header: 'Portfolio Website',
    content:
      'Built a responsive website showcasing personal skills and accomplishments using React and Tailwind CSS, hosted through GitHub Pages',
    skills: [
      'React',
      SkillKey.TypeScript,
      'TailwindCSS',
      'GitHub',
    ],
    github: 'https://github.com/rafe-murray/rafe-murray.github.io',
  },
} satisfies Record<string, Project>;

export const work: Workplace[] = [
  {
    employer: 'JMA Consulting',
    jobs: [
      {
        startDate: new Date(2025, 4),
        endDate: new Date(2025, 7),
        role: 'Junior Software Developer',
        achievements: [
          ' Created custom forms to meet client needs, allowing an industry certification board to quickly register users for exams, a white-label SAAS to update business information, and another client to import data.',
          ' Extended open-source CRM software to provide statistics on emails sent via Amazon SES, to generate and assign badges from BadgeCert to users, and to sync events between two sites.',
          ' Packaged existing software to run in Docker, installing dependencies, moving configuration to environment variables, scripting startup tasks, and minimizing image size. This allowed for easy and consistent deployment across heterogeneous hardware and software configurations.',
          ' Integrated cron jobs and update logic into a Kubernetes operator, making site updates and installations seamless, auditable, and consistent.',
          ' Researched and made recommendations to improve internal processes, including which image registry to use, tools for local containerized development, auto-unlocking encrypted disks on boot, and logging configuration. These recommendations were accepted, resulting in fewer wasted developer hours.',
        ],
      },
      {
        startDate: new Date(2024, 4),
        endDate: new Date(2024, 7),
        role: 'Junior Software Developer',
        achievements: [
          'Reimplemented Django Python scrapers of Canadian elected officials’ information on 75 websites and stored it in a database for later use by a petition service',
          'Created functionality using a low code framework and PHP to manage counselling waitlists and scheduling appointments for the Sexual Assault Centre of Edmonton',
          'Developed displays of candidate information in PHP for an online educational certification system for the Construction Industry Licensing Board of Florida',
          'Custom responsive styling of Bootstrap based theme for new company website',
          'Created an internal company gitlab CI/CD pipeline on code pushes that runs my bash script to reapply patches to site files and if there are conflicts notify an administrator otherwise merge the changes to the repo without triggering the same pipeline',
        ],
      },
      {
        startDate: new Date(2023, 6),
        endDate: new Date(2023, 7),
        role: 'Junior Software Developer',
        achievements: [
          'Developed a client management application for a software company specializing in building websites and constituent relationship management systems for nonprofits',
          'Implemented custom entities to represent contracts, servers, clients, websites',
          'Created PHP script to import Excel data into MySQL database',
          'Created form in PHP to on-board new clients and create relevant entities',
        ],
      },
    ],
  },
];

export const courseLoads: CourseLoad[] = [
  {
    year: 'Second year',
    courses: [
      { code: "MATH 253", title: "Multivariable Calculus", percentageGrade: 94 },
      { code: "CPEN 281", title: "Technical Communication", percentageGrade: 81 },
      { code: "CPEN 221", title: "Software Construction I (A)", percentageGrade: 88 },
      { code: "CPEN 211", title: "Computing Systems I", percentageGrade: 94 },
      { code: "MATH 220", title: "Mathematical Proof", percentageGrade: 92 },
      { code: "ELEC 201", title: "Circuit Analysis I", percentageGrade: 85 },
      { code: "MATH 256", title: "Differential Equations", percentageGrade: 98 },
      {
        code: "CPSC 221",
        title: "Basic Algorithms and Data Structures",
        percentageGrade: 97,
      },
      {
        code: "PSYC 102",
        title:
          "Introduction to Developmental, Social, Personality, and Clinical Psychology",
        percentageGrade: 72,
      },
      { code: "CPEN 212", title: "Computing Systems II", percentageGrade: 72 },
    ],
  },
  {
    year: 'First year',
    courses: [
      { code: 'APSC 100', title: 'Introduction to Engineering I', percentageGrade: 85 },
      {
        code: 'APSC 101',
        title: 'Introduction to Engineering II',
        percentageGrade: 82,
      },
      {
        code: 'APSC 160',
        title: 'Introduction to Computation in Engineering Design',
        percentageGrade: 98,
      },
      { code: 'CHEM 154', title: 'Chemistry for Engineering', percentageGrade: 87 },
      { code: 'GERN 101', title: 'Learning German 1', percentageGrade: 94 },
      {
        code: 'MATH 100',
        title: 'Differential Calculus with Applications',
        percentageGrade: 93,
      },
      {
        code: 'MATH 101',
        title: 'Integral Calculus with Applications',
        percentageGrade: 96,
      },
      { code: 'MATH 152', title: 'Linear Systems', percentageGrade: 94 },
      {
        code: 'PHYS 157',
        title: 'Introductory Physics for Engineers I',
        percentageGrade: 91,
      },
      {
        code: 'PHYS 158',
        title: 'Introductory Physics for Engineers II',
        percentageGrade: 95,
      },
      {
        code: 'PHYS 159',
        title: 'Introductory Physics Laboratory for Engineers',
        percentageGrade: 92,
      },
      { code: 'PHYS 170', title: 'Mechanics I', percentageGrade: 97 },
      {
        code: 'WRDS 150',
        title: 'Writing and Research in the Disciplines',
        percentageGrade: 80,
      },
    ],
  },
];
