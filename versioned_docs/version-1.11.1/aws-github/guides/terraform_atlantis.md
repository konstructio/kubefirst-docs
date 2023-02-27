---
sidebar_position: 4
---

# Terraform and Atlantis

```terraform``` is our infrastructure as code layer and we manage our terraform workflows with ```atlantis``` automation.

## Making changes in Terraform

### Automatic plans with Atlantis

Any merge request that includes a .tf file will prompt ```atlantis``` to wake up and run your terraform plan. Atlantis will post the plan's result to your merge request as a comment within a minute or so.

Review and eventually approve the merge request.

### Apply and merge

Add the comment ```atlantis``` apply in the approved merge request. This will prompt atlantis to wake up and run your ```terraform apply```.

The apply results will be added to your pull request comments by atlantis.

If the apply is successful, your code will automatically be merged with master, your merge request will be closed, and the state lock will be removed in atlantis.

#### Managing Terraform state

The following table shows how state is stored based on your installation selection:

| State Backed                       |    AWS + GitHub    |    AWS + GitLab    |   Local + GitLab   |
|------------------------------------|:------------------:|:------------------:|:------------------:|
| AWS S3 Bucket                      |         X          |         X          |                    |
| Local - minio in cluster S3 Bucket |                    |                    |         X          |

### AWS cloud install

```shell
kubefirst cluster init -cloud aws
```

Your terraform state is stored in an s3 bucket named ```k1-state-store-xxxxxx```.

The s3 bucket implements versioning, so if your terraform state store ever gets corrupted, you can roll it back to a previous state without too much trouble.

Note that terraform at times needs to store secrets in your state store, and therefore access to this s3 bucket should be restricted to only the administrators who need it.

### Local install

kubefirst local
Your terraform state is stored in a local in cluster s3 bucket named kubefirst-state-store in minio. All minio files will be stored in $HOME/.k1/minio-storage folder.

Attention: if you k3d cluster is destroyed, the state will be destroyed also. Local destroy, will remove the state once executed.

:::tip Tips
**What is the general flow of changes using atlantis for IaC?**

- **Create a Commit and Merge Request:** The change described by terraform instructions will be created in a PR at a folder which atlantis is listening for it. Once the Change Request is created on github/gitlab, atlantis will plan it and show possible impacts of it.

- **Approve the change:** Once you are ready, someone with access will provide atlantis apply on the change request, triggering the processs of executing the plan created.

- **Change is applied by atlantis:** Atlantis will execute the terraform plan, and terraform will update shared statestore with new current state changes, change request will be merged to main, reflecting the new desired state.

**Note:** "Change Request" is "Pull Request" on Github and "Merge Request" on Gitlab.

:::

## What else can I use atlantis & terraform for?

For example, you can use your gitops repo to help track the creation of repos:

- <a href="https://github.com/kubefirst/gitops-template/blob/main/terraform/github/repos.tf">aws+github repo template</a>
- <a href="https://github.com/kubefirst/gitops-template/blob/main/terraform/gitlab/kubefirst-repos.tf">aws+gitlab repo template</a>
- <a href="https://github.com/kubefirst/gitops-template/blob/main/localhost/terraform/github/repos.tf">local+github repo template</a>

With terraform using the S3 based state store, you can add any terraform file to the gitops repo on which <a href="https://github.com/kubefirst/gitops-template/blob/main/atlantis.yaml">atlantis is listening for</a> and atlantis will try to plan and when approved to apply such plan for you.

Beyond repositories and users, atlantis allow you to have your IaC demands to be tracked by your main branch registry. Easing up the usage of terraform based workflows to update the infractruture you are operating.
