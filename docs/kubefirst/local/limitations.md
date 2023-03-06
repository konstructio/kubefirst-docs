---
title: Limitations
---

# Local Limitations

## Hardware recommendation

- OS: macOS (Intel or Apple Silicon M1/M2) or Linux AMD64
- CPU: A Quad Core CPU or Apple Silicon with M1 or M2 chip
- RAM: 8 GB RAM
- HDD: 10 GB HD space (Docker images) + 5 GB HD space (minio-storage)

## Docker desktop recommendation

Allocated RAM: 5 GB
Allocated CPU: 5 Cores

## Features Limitations

<!-- TODO: 2.0 - check ngrok status with 2.0 release -->
- Ngrok: to allow Github Webhook to reach your machine without exposing them directly to the internet, we use Ngrok to create a tunnel and assign the Ngrok endpoint to Github Webhook.

We use a free tier of this service and have rate limits for data transfer and limited session duration of the tunnel. If the tunnel was closed, we didn't support the reconnect process. If you want to reconnect, you should use the Ngrok tool and update the webhook on GitHub to keep the Atlantis working.

## Known issues

- Disk: During the provisioning of the local environment, the kubefirst cli bootstrap a k3d cluster which starts downloading all docker images simultaneously. So you can experience some issues related to disk performance.
- Network bandwidth: As described above, the network bandwidth could be throttled due to downloading all docker images simultaneously.

## Problematic use cases

- Conventions: you are demoing the kubefirst using the kubefirst local installation at the convention. You could suffer issues with networking, mainly if the convention facility's network is poor.
- Mobile Connection: if you use the mobile connection routed to your laptop, the downloads may spend much of your data plan and suffer from the poor mobile connection.

## Tips

### Avoiding tools re-download

<!-- TODO: 2.0 - is this true with 2.0 release? -->
The kubefirstCLI download some tools used during cluster provisioning, for example, Terraform, Helm, and Kubectl, in versions compatible with Kubefirst and stores them in the K1 folder. If you are using Kufibefirst to demo in conferences or using poor connections (mobile, hotels) you should consider using this additional flag `--preserve-tools` for each cycle of create/destroy.

This will preserve tools downloaded and will save time and network bandwidth during cluster provisioning.
