# CI/CD with GitHub Actions: A Practical Learning Journey

This repository showcases a hands-on, progressive learning journey of GitHub Actions — GitHub's powerful native CI/CD platform. Each YAML file and custom action in this repository focuses on a specific concept, ranging from basic event triggers to advanced topics like reusable workflows, custom composite/Docker/JavaScript actions, caching, artifacts, and security.

---

## 🌟 What This Project Covers

| Category | Concepts Covered |
|----------|------------------|
| 🧱 **Workflow Fundamentals** | Triggers, Events, Runners |
| ⚙️ **Control Flow** | Inputs, Outputs, Expressions, Variables |
| 📦 **Artifacts & Caching** | Job artifacts, dependency caching |
| 🧪 **Testing & Execution** | Matrix strategy, continue-on-error, concurrency |
| 🔐 **Security** | Workflow security best practices |
| 🧩 **Custom Actions** | Composite, JavaScript, and Docker-based actions |
| 🔁 **Reusable Workflows** | Call other workflows via `workflow_call` |

---

## 🗂️ Workflow Files

Each numbered file focuses on a concept:

- `01-building-blocks.yaml` — Basic `workflow_dispatch` trigger
- `04-using-actions.yaml` — Using third-party and official actions
- `07-expressions.yaml` — Evaluating expressions inside workflows
- `10-execution-flows.yaml` — Controlling job behavior and error handling
- `13-caching.yaml` — Dependency caching across jobs
- `15-matrices.yaml` — Running jobs across multiple environments
- `18-*.yaml` — Creating and using reusable workflows
- `20-workflow-security.yaml` — Implementing workflow security best practices

---

## 🧩 Custom Actions

These folders contain self-authored GitHub Actions:

| Folder | Type | Purpose |
|--------|------|---------|
| `composite-cache-deps` | Composite | Demonstrates caching dependencies using multiple steps |
| `js-dependency-update` | JavaScript | Validates and parses JSON inputs |
| `docker-ping-url` | Docker | Pings a URL endpoint and outputs result |
| `js-ca-security` | JavaScript | Simple security-focused action |
