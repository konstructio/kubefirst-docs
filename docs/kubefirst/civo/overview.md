---
title: Overview
---

## Getting Started

You'll need to know about 4 things pretty quickly:

1. connecting to your kubernetes cluster
2. your new `gitops` repo in your github org and how to use it
3. user management with automated terraform iac
4. gitops application delivery with the `metaphor-frontend` sample app

### Connecting to your new cluster

Run this in your terminal to use the kubefirst cluster's kubeconfig

```shell
export KUBECONFIG=~/.k1/kubeconfig
```

You can then run kubectl commands against your new cluster

```shell
kubectl get namespaces
```

### Your new `gitops` repo

[GitHub repos managed as Terraform IaC](./github/repositories.md)

### User onboarding

[Onboard yourself and your team](./user-creation.md)

### Deliver `metaphor` to your new `development`, `staging`, and `production` environments

Explore gitops application delivery and platform integrations with [metaphor](./metaphor.md)
