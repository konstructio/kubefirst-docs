---
title: Overview
---

`kubefirst k3d create` provisions a local [k3d kubernetes cluster](https://k3d.io) to host your cloud native environment locally.

Your k3d cluster will include:

| Application                  | Description                                                                 |
|------------------------------|-----------------------------------------------------------------------------|
| Traefik Ingress Controller   | Native k3d Ingress Controller                                               |
| Cert Manager                 | Certificate Automation Utility                                              |
| Argo CD                      | GitOps Continuous Delivery                                                  |
| Argo Workflows               | Application Continuous Integration                                          |
| GitHub Action Runner         | GitHub CI Executor                                                          |
| Vault                        | Secrets Management                                                          |
| Atlantis                     | Terraform Workflow Automation                                               |
| External Secrets             | Syncs Kubernetes secrets with Vault secrets                                 |
| Chart Museum                 | Helm Chart Registry                                                         |
| Metaphor                     | (development, staging, production) instance of sample Next.js app           |

- These apps are all managed by Argo CD and the app configurations are in the `gitops` repo's `registry/<cluster-name>` folder.

### Atlantis Example / User Creation Walkthrough

[Onboard users](./user-creation.md) by pull requesting a terraform change to your gitops repository and applying the change using atlantis.

### Deliver `metaphor` to your new Development, Staging, and Production Environments

[Build and deliver a microservice](../../explore/metaphor.md) using our example `metaphor` sample application. Making any change to the main branch of your new `metaphor` repository will build and deliver your application to your new cluster.
