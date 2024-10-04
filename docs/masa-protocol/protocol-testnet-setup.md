---
id: protocol-testnet-setup
title: Testnet Setup
---

This guide will help you set up your Masa Node for the testnet, which rewards workers who have configured Twitter and web scrapers.

### Prerequisites

- A running Masa Node (see [Binary Installation](./protocol-binary-installation.md) or [Docker Setup](./protocol-docker-setup.md))
- Configured Twitter scraper (see [Twitter Scraper Configuration](./protocol-twitter-scraper-config.md))
- Configured Web scraper (see [Web Scraper Configuration](./protocol-web-scraper-config.md))

:::info
Ensure all prerequisites are met before proceeding with the testnet setup to avoid connectivity issues.
:::

### Testnet Configuration

1. **Set environment variables**

   Add the following bootnode configuration to your `.env` file:

   ```plaintext
   BOOTNODES=/ip4/52.6.77.89/udp/4001/quic-v1/p2p/16Uiu2HAmBcNRvvXMxyj45fCMAmTKD4bkXu92Wtv4hpzRiTQNLTsL,/ip4/157.230.212.224/udp/4001/quic-v1/p2p/16Uiu2HAkyf2FdEqxLJEuogoVtYDnDEix1ERjsZpKcNtGrFJcFDAC
   ```

   :::warning
   Do not share your `.env` file or any private keys. Keep your node's configuration secure at all times.
   :::

2. **Restart your node**

   Restart the Masa node to apply the changes.

3. **Verify configuration**

   Check the logs for confirmation of successful connection to the testnet bootnodes.

### Rewards

Participants in the testnet who have properly configured Twitter and web scrapers will be eligible for rewards. Details about the reward structure and distribution will be announced separately.

:::note
Stay tuned to official Masa communication channels for updates on reward distribution and eligibility criteria.
:::

### Troubleshooting

If you encounter issues connecting to the testnet:

- Verify that your `.env` file is correctly updated with the bootnode information
- Ensure your Twitter and web scrapers are properly configured and functioning
- Check your node logs for any error messages related to peer connections