---
title: Overview
---

<div class="video-wrapper">
  <iframe width="784" height="441" src="https://www.youtube.com/embed/KEUOaNMUqOM" frameborder="0" allowfullscreen></iframe>
</div>

### Installed Applications

![GitOps Assets](../../../img/kubefirst/github/gitops-assets.png)

For details on the installed platform components see our [overview page](../../overview.md#platforms-details).

## Step 1: Console UI

Once the `kubefirst aws create` command has completed provisioning, it will open a new browser tab with the Console UI at
`http://localhost:9094` to provide you a dashboard to navigate through the different services that were provisioned.

![console ui](../../../img/common/github/console.png)

![terminal handoff](../../../img/kubefirst/getting-started/cluster-create-result.png)

These are **not your personal credentials**. These are administrator credentials that can be used if you ever need to authenticate and administer your tools if your OIDC provider ever becomes unavailable. Please protect these secrets and store them in a safe place.

## Step 2: Add Your Team (optional)

This step is meant to explore the onboarding process of a new user to your installation:

- [Explore Atlantis & Terraform to manage users](../../../explore/terraform.md#how-can-i-use-atlantis-to-add-a-new-user-on-my-github-backed-installation)

## Step 3: Deliver Metaphor to Development, Staging, and Production

Metaphor is our sample application that we use to demonstrate parts of the platform and to test CI changes.

If you visit its `/.github/workflows/main.yaml` in the metaphor repo, you'll see it's just sending some workflows to Argo in your local EKS cluster. Those workflows are also in the `metaphor` repo in the `.argo` directory.

The metaphor pipeline will:

- Publish the metaphor container to your private ECR.
- add the metaphor image to a release candidate helm chart and publish it to chartmuseum
- set the metaphor with the desired Helm chart version in the GitOps repo for development and staging
- the release stage of the pipeline will republish the chart, this time without the release candidate notation making it an officially released version and prepare the metaphor application chart for the next release version
- the officially released chart will be set as the desired Helm chart for production.

To watch this pipeline occur, make any change to the `main` branch of the `metaphor` repo. If you're not feeling creative, you can just add a newline to the README.md. Once a file in `main` is changed, navigate to metaphor's CI/CD in the GitHub Actions tab to see the workflows get submitted to Argo workflows.

You can visit the metaphor development, staging, and production apps in your browser to see the versions change and Argo CD syncs the apps. The metaphor URLs can be found in your GitOps and metaphor project `README.md` files.
