---
title: Telemetry
---

## Kubefirst Telemetry

Kubefirst collects data in order to optimize future releases. By collecting metrics on what type of clusters are being deployed and how they are being used, Kubefirst prioritizes the features that are being used across the majority of the user base. While we rely on this data to make improvements to the platform, you are always allowed to opt out for any reason.

### What Metrics are collected?

- cli_version:          The version of CLI being used (eg. `2.0.0`)
- cloud_provider:       The cloud environment (`k3d`|`aws`|`civo`)
- cluster_id:           The ID of the cluster being created (eg. `123ABC`)
- cluster_type:         The type of cluster being created (`mgmt`)
- domain:               The domain of the cluster being created (eg. `kubefirst.io`)
- git_provider:         Type of git provider leveraged (`github`|`gitlab`)
- kubefirst_team:       For internal use only
- kubefirst_team_info:  For internal use only
- machine_id:           An anonymized ID representing a distinct client host (eg. `123456-123abc-abc123123abc-123123`)

When installing your Kubefirst cluster through the cli, append the `--use-telemetry=false` flag to opt out of this process.
