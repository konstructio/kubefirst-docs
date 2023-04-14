---
title: Telemetry
---

## Kubefirst Telemetry

Kubefirst collects data in order to optimize future releases. By collecting metrics on what type of clusters are being deployed and how they are being used, Kubefirst prioritizes the features that are being used across the majority of the user base. While we rely on this data to make improvements to the platform, you are always allowed to opt out for any reason.

### What Metrics are collected?

- cli_version:      The version of CLI being used (eg. `2.0.0`)
- cluster_type:     The type of cluster being created (`mgmt`)
- cloud_provider:   The cloud environment (`k3d`|`aws`|`civo`)
- git_provider:     Type of git provider leveraged (`github`|`gitlab`)
- cluster_id:       The ID of the cluster being created (eg. `123ABC`)
- domain:           The domain of the cluster being created (eg. `kubefirst.io`)
- kubefirst_team:   For internal use only

When installing your Kubefirst cluster through the cli, append the `--use-telemetry=false` flag to opt ourself out of this process.
