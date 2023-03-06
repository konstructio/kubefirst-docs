---
title: Repositories
---

# GitHub Repositories

The `kubefirst k3d create` command will create a `gitops` and `metaphor` repository in your personal GitHub account as shown here.

<!-- TODO: 2.0 - new repo list - metaphor not metaphor-frontend -->
![GitHub repositories](../../../img/kubefirst/local/repos-list.png)

## Repositories

### gitops

The `gitops` repository houses all of our IAC and all our GitOps configurations. All of the infrastructure and application configuration that are installed with kubefirst were produced by some combination of Terraform and Argo CD in the `gitops` repository. You will add to this repository to extend your infrastructure or add new applications.

### metaphor

`metaphor` is a suite of demo microservice applications to demonstrate how an application can be integrated into the kubefirst platform following best practices. It is described in more details [here](../../../explore/metaphor.md).

## Management

If you need additional GitHub repositories, add a new section of Terraform code to `terraform/github/repos.tf` in your new `gitops` repository:

```terraform
# set auto_init to false if importing an existing repository
# true if it's a new repository

module "your_repo_name" {
  source = "./modules/repository"
  visibility         = "private"
  repo_name          = "your-repo-name"
  archive_on_destroy = true
  auto_init          = false
}
```

GitHub's Terraform provider give you access to [many more configuration options](https://registry.terraform.io/providers/integrations/github/latest/docs) than just these settings.

## Making Changes with Terraform

To make infrastructure and configuration changes with Terraform, simply open a pull request in the `gitops` repository. Your pull request will automatically provide plans, state locks, and applies, and even comment in the pull request itself. You'll have a simple, peer reviewable, auditable changelog of all infrastructure and configuration changes.

![Atlantis Example on GitHub](../../../img/kubefirst/local/atlantis.png)
