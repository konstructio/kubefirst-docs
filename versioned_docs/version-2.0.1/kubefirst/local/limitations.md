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

## Known issues

- Disk: During the provisioning of the local environment, the kubefirst cli bootstrap a k3d cluster which starts downloading all docker images simultaneously. So you can experience some issues related to disk performance.
- Network bandwidth: As described above, the network bandwidth could be throttled due to downloading all docker images simultaneously.

## Problematic use cases

- Conventions: you are demoing the kubefirst using the kubefirst local installation at the convention. You could suffer issues with networking, mainly if the convention facility's network is poor.
- Mobile Connection: if you use the mobile connection routed to your laptop, the downloads may spend much of your data plan and suffer from the poor mobile connection.
