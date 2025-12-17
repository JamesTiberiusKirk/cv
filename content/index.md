+++
title = "Dumitru Vulpe | Resume"
+++

[dumitru.vulpe@outlook.com](mailto:dumitru.vulpe@outlook.com) | [linkedin.com/in/dumitru-v-baaa7411a](https://www.linkedin.com/in/dumitru-v-baaa7411a) | [github.com/JamesTiberiusKirk](https://github.com/JamesTiberiusKirk)

## Bio

<!-- {{< figure class="avatar" src="/avatar.jpg" >}} -->

Senior Software Engineer focused on backend systems and cloud-native architectures. I specialise in Go and microservices on Kubernetes across AWS, GCP and Azure, primarily in fintech, insurance and SaaS. I’m comfortable owning work end-to-end: understanding requirements, designing systems, implementing services, and operating them in production with strong observability and CI/CD. Increasingly, my work centres on technical leadership: setting patterns, unblocking teams and driving reliable delivery.

## Core Skills

- **Languages & Backend**
  - Go (primary), Node.js/TypeScript, Java  
  - REST and gRPC APIs, microservices, event-driven architectures  

- **Cloud, DevOps & Infrastructure**
  - AWS, GCP, Azure  
  - Kubernetes, Docker, Terraform, AWS CDK  
  - CI/CD with GitHub Actions and GitLab CI  

- **Data & Messaging**
  - Relational: PostgreSQL, CockroachDB, MySQL/MariaDB  
  - NoSQL: MongoDB, DynamoDB  
  - Messaging: SQS, Kinesis, GCP Pub/Sub, NATS  

- **Observability & Operations**
  - Prometheus, Grafana, CloudWatch metrics and logging  
  - Production debugging, performance profiling and incident response  

- **General**
  - Linux/Unix environments, Git, Bash  
  - Agile and Kanban workflows, cross-team collaboration  

## Professional Achievements

- **Led large-scale templ migration at Aviva** – Planned and executed a migration to the templ Go library across hundreds of files in a core repository under a controlled code freeze, with custom tooling and automated diff-based testing to minimise risk. Worked closely with, and effectively led, the test team to validate changes. The migration modernised the toolchain and removed a major bottleneck, significantly improving delivery speed and long-term throughput of safe changes.  

- **Stabilised contractor-built platform at Aviva** – Joined a small, startup-style team taking over a contractor-built car insurance platform. Rewrote, refactored and rebuilt key services, introduced clearer patterns and testing, and helped turn the prototype into a maintainable, owned product codebase, reducing core production issues and improving developer efficiency.  

- **Built auditing and reporting at Form3** – Delivered a feature that records incoming payment events and requests for auditing and partner reporting, using a combination of event streams, synchronous APIs and AWS Athena queries over stored data to provide statistical views of product usage and support compliance.  

- **Prototyped dashboards and mobile management at NCR** – Developed an early statistics dashboard and a prototype mobile management app for NCR terminals, demonstrating how Docker packaging and modern deployment could support operational visibility and control. The concepts were taken into production and used by customers to better monitor and maintain their terminal estates.  

## Experience

#### Senior Software Engineer – Form3  
**Aug 2025 – Present**

- Develop payment processing software that powers highly available bank-to-bank transactions in Europe and the UK.  
- Design and maintain Go-based microservices running on multi-cloud Kubernetes clusters (AWS, GCP, Azure) in a regulated fintech environment.  
- Work with both high-throughput event-driven pipelines and critical synchronous API flows, ensuring reliable payment processing and comprehensive audit trails.  
- Delivered a feature that captures and exposes auditing and statistical reporting for incoming events and requests using AWS Athena over stored data.  
- Contribute to architecture discussions around scalability, resiliency and observability for new and existing services.  
- Presented a company-wide technical talk on an internal payment resilience proof-of-concept involving a majority of UK banks, demonstrating how a shared resilience network could improve cross-bank reliability.  

#### Full Stack Engineer (Go / Next.js) – Aviva  
**Mar 2023 – Jun 2025**

- Joined a small, startup-style team within Aviva, taking over a contractor-built codebase for the Aviva Zero green car insurance platform and turning it into a stable, maintainable product.  
- Pioneered a new technology stack using Go on AWS Lambda for backend services and Next.js for customer portals, establishing patterns for cloud infrastructure and CI/CD pipelines.  
- Led a large templating migration to the templ Go library, reformatting hundreds of files in a central repository under a coordinated code freeze. Built custom tooling and automated diff-based testing to safely run and validate the migration, working closely with QA/testing to minimise regressions.  
- Acted as one of the main Go engineers on the team, helping others learn Go idioms and standards through pairing, code reviews and example patterns.  
- Built backend flows and frontend views enabling customers to perform mid-term adjustments on their car insurance policies through tailored journeys, with appropriate validation, auditing and error handling.  
- Collaborated with product, QA and architecture teams to design, deliver and roll out features end-to-end, including monitoring and post-deployment follow-up.  

#### Backend Go Software Engineer – Redbrain  
**Oct 2022 – Jan 2023**

- Built Go microservices on GCP (GKE) to connect Shopify merchants with Google Shopping and custom ad campaigns as part of an R&D initiative that went on to become a launched, revenue-generating Shopify extension.  
- Implemented Pub/Sub-driven services and gRPC APIs backed by PostgreSQL, focusing on performance, reliability and clear error handling.  
- Contributed to improvements in deployment workflows, observability dashboards and runbooks for production support.  

#### Backend Go Software Engineer – Xiatech  
**Aug 2021 – Sep 2022**

- Worked on the XFuse SaaS “hyper-integration” data platform, connecting clients’ retail backends (inventory systems, shipment systems and bespoke internal tools) with external services.  
- Built backend components in Go on AWS Lambda, using Terraform for infrastructure as code and integrating SQS- and Kinesis-based pipelines backed by MongoDB.  
- Helped design and implement data flows for client integrations with an emphasis on robustness, idempotency and recoverability.  
- Collaborated with cross-functional teams to understand integration requirements and translate them into scalable technical solutions.  

#### Software Engineer – NCR  
**Jun 2019 – Aug 2021**

- Joined as a summer intern and continued through multiple internships and a graduate role alongside final-year university studies.  
- Built features using Angular and Ionic front-ends with Java Spring back-ends, containerised with Docker and integrated with Keycloak for authentication.  
- Prototyped a mobile management app and dashboard concepts for NCR terminals, allowing clients to better monitor and maintain their NCR terminals.  
- Prototyped and presented how a Docker-based packaging approach could contribute to the development and deployment of the application.  
- Contributed to both R&D projects and production features in an Agile environment, working with product managers and designers to deliver customer-facing functionality.  

## Personal Projects

- **Fintrack – Personal finance tracker (Go, templ, HTMX, SQLite)**  
  CLI + web app for managing accounts and transactions, built with production intent rather than as a toy. Go backend with SQLite and migrations, templ/HTMX frontend, and a small provider layer for LLM/AI integration. Focuses on clean domain modelling, predictable data migrations and a workflow that mirrors real deployment (Docker, CI-friendly layout).  

- **Recipe CMS – Full-stack recipe manager (Go, Echo, templ, HTMX, PostgreSQL)**  
  Self-hosted recipe application using Go, Echo, templ, HTMX and Tailwind, backed by PostgreSQL. Uses Docker and a custom migration tool to keep schema changes repeatable and safe, and serves as a full end-to-end example of a small content platform.  

- **Migrator – Postgres migration library and CLI (Go)**  
  Lightweight migration tool that can run as a library at app startup or as a standalone CLI in CI/CD. Designed to keep schema and data migrations explicit, versioned and easy to automate across projects.  

- **Workspacer – Tmux workspace/session manager (Go, TUI)**  
  Developer tool to manage tmux sessions and project workspaces from a terminal UI, aimed at speeding up daily development workflows and making multi-project context switching simpler.  

- **serverconfig – Homelab orchestration (Python, Bash, Docker)**  
  Repository to manage self-hosted stacks: env-driven configuration, Docker stack definitions and orchestration tooling. Early versions use Bash + Make for v0 prototyping; newer work plans to move logic into Go to automatically derive env variables and wire stacks to domains, ports, storage pools and metrics dashboards.  

## Education

**BSc (Hons) Applied Computing** – University of Dundee, 2021  

## Other Experience & Achievements

- **Hands-on automotive engineering** – Fixing, maintaining and modifying a 1997 Mazda MX-5, applying engineering and troubleshooting skills outside of software, including electrical work and mechanical upgrades.  
- **Rock and Metal Society – Founder & President, University of Dundee** – Created and ran a student society, organising events including live concerts and building and managing a committee team.  
- **School of Computing – Vice President and Class Representative** – Represented students, coordinated with staff and helped organise departmental activities and feedback loops.  
- **UK Rocketry Competitions** – Participated in UKROC and represented the UK in an international model rocketry competition, focusing on design, testing and launch operations.
