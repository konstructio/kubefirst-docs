---
title: Overview
---

<!-- TODO: this shoul be merged with the index (kubefirst Platforms) or better organized (with content duplication removal) -->
## Install the kubefirst CLI

If you are on macOS, and have [Homebrew](https://brew.sh) installed, you can run:

```shell
brew install kubefirst/tools/kubefirst
```

To upgrade an existing kubefirst CLI to the latest version run:

```shell
brew update
brew upgrade kubefirst
```

There are other ways to install kubefirst for different operating systems, architectures, and containerized environments. See our [installation README](https://github.com/kubefirst/kubefirst/blob/main/build/README.md) for details.

## kubefirst in a Nutshell

The kubefirst CLI runs on your localhost and will create an GitLab or GitHub Kubernetes ecosystem including HashiCorp Vault, Argo CD, Argo Workflows, self-hosted runners for GitHub and GitLab, and the metaphor application to demonstrate how everything on the platform works.

- We have local (k3d), AWS, and Civo platforms available.
- The install takes about 30 minutes to execute on AWS, 6 minutes on Civo, and 5 minutes on local.
- kubefirst will create a new `gitops` and `metaphor` repository on your GitLab or GitHub account.
- All of the infrastructure as code (IAC) will be in your `gitops` repository in the `/terraform` directory. IAC workflows are fully automated with Terraform Atlantis by opening a merge or pull request against the `gitops` repository.
- All of the applications running in your Kubernetes cluster are registered in the gitops repository in the root `/registry` directory.
- The [metaphor](../explore/metaphor.md) repositories only needs an update to the main branch to deliver the example application to your new development, staging, and production environments. It will hook into your new HashiCorp Vault for secrets, demonstrate automated certs, automated DNS, and GitOps application delivery.
- Our CI/CD is powered by Argo CD, Argo Workflows, GitLab or GitHub, and HashiCorp Vault.

### Platforms Details

<!-- TODO: this is a painful table, need to redo it -->
|   | local + github | local + gitlab | aws + github | aws + gitlab | civo + github | civo + gitlab |
|:--|:--:|:--:|:--:|:--:|:--:|:--:|
|how to use | `kubefirst k3d create` | `kubefirst k3d create --git-provider gitlab` | `kubefirst aws create` | `kubefirst aws create --git-provider gitlab` | `kubefirst civo create` | `kubefirst civo create --git-provider gitlab` |
|argocd | yes | yes | yes | yes | yes | yes |
|argo workflows | yes | yes | yes | yes | yes | yes |
|vault | yes |  yes | yes, backed with DynamoDB and KMS| yes, backed with DynamoDB and KMS| yes | yes |
|atlantis | yes | yes | yes | yes | yes | yes |
|metaphor | yes | yes | yes | yes | yes | yes |
|chartmuseum | yes | yes | yes | yes |
|self-hosted runner | actions-runner-controller | gitlab-runner | actions-runner-controller | gitlab-runner | actions-runner-controller | gitlab-runner |
|HTTPS/SSL Certificates | mkcert | mkcert | let's encrypt | let's encrypt | let's encrypt | let's encrypt |
|external-secrets-operator | yes | yes | yes | yes | yes | yes |
|kubefirst console| yes | yes | yes| yes | yes | yes |
|oidc | no | no | yes | yes | yes | yes |

## Kubefirst Console

### AWS or Civo Console UI

Once you run `kubefirst <platform> create` command, a new brower tab will launch with the kubefirst Console app to provide you a launch page with access to the different services that were provisioned.

![console ui](../img/kubefirst/github/console.png)
