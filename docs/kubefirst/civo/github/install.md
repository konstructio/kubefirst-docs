---
title: Install
---

# Civo Platform Installation

`kubefirst` is our command line tool that installs a fully automated platform of open source cloud native tools to your Civo cloud with a simple `kubefirst civo create` command.

![Kubefirst CIVO Cluster Diagram](../../../img/kubefirst/civo/kubefirst-cluster-create.png)

## Prerequisites

### Local Prerequisites

[Install](../../../kubefirst/overview.md#how-to-install-kubefirst-cli) the kubefirst CLI.

### GitHub Prerequesites

- A GitHub [organisation](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch).
- A new GitHub [account](https://docs.github.com/en/get-started/signing-up-for-github/signing-up-for-a-new-github-account) for your `kbot` automation user.
- A GitHub [personal access token](../../../explore/github-token.md) for your `kbot` account.

### Civo Prerequisites

For kubefirst to be able to provision your Civo cloud resources:

- A [Civo account](https://dashboard.civo.com/signup) in which you are an account owner.
- A publicly routable [DNS](https://www.civo.com/learn/configure-dns#adding-a-domain-name).
- A [Civo token](https://dashboard.civo.com/security).

## Create your new kubefirst cluster

Adjust the following command with your GitHub and Civo tokens in addition to the appropriate values for your new platform.

```shell
export GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxx
export CIVO_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
kubefirst civo create --alerts-email yourdistro@your-company.io --github-owner your-github-org --domain-name your-domain.io --cluster-name kubefirst
```

The kubefirst cli will produce a directory of utilities, a state file, and some staged platform content that can now be found in the `~/.kubefirst` and `~/.k1` folders on your local machine.

The installation process may take about 10 minutes. If you are successful you should see:

```shell
Cluster "kubefirst" is up and running!
```

If your deployment is not successful, errors and troubleshooting information will be stored in a local log file specified during the installation run.

<!-- TODO: 2.0 - above still true? -->
<!-- TODO: 2.0 - should be moved to a common page mentioning small exceptions for local, to avoir duplication -->
### Installed Applications

kubefirst implicitly contains many applications to provide starting capabilities for new users. Operational knowledge of all applications is not necessary to begin using kubefirst, but is useful to understand your cluster.

A newly created Civo kubefirst cluster contains:

- A private repo named `gitops`. The applications that you build and release on the kubefirst platform will also be registered here in the development, staging, and production folders.
- [Argo CD](https://github.com/argoproj/argo-cd) - GitOps Continuous Delivery
- [Argo Workflows](https://argoproj.github.io/argo-workflows/) - Application Continuous Integration
- [Atlantis](https://www.runatlantis.io/) - Terraform Workflow Automation
- [Cert Manager](https://cert-manager.io/) - Automated TLS Certificate Creation and Renewal
- [Chart Museum](https://github.com/helm/chartmuseum) - Helm Chart Registry
- [External DNS](https://github.com/kubernetes-sigs/external-dns) - Automated DNS Management
- [External Secrets Operator](https://external-secrets.io/) - Syncs Kubernetes secrets with Vault secrets
- [GitHub Action Runner](https://github.com/features/actions) - Self Hosted GitHub Action Runner
- [Metaphor](https://github.com/kubefirst/metaphor-frontend-template) - A sample app to demonstrate CI/CD in on Kubernetes. Contains Devlopment, Staging, and Production environments.
- [Nginx Ingress Controller](https://github.com/kubernetes/ingress-nginx) - Popular Ingress Controller to allow external access to your cluster services
- [Vault](https://github.com/hashicorp/vault) - Secrets Management, Identity Provider, OIDC Provider

## After installation

After the ~6 minute installation, your browser will launch a new tab to the [kubefirst Console](https://github.com/kubefirst/console), which will help you navigate your new suite of tools running in your new Civo cluster.
