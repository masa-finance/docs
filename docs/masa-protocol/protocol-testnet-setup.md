---
id: protocol-testnet-setup
title: Testnet Setup
---

This guide will help you set up your Masa Node for the testnet, which rewards miners who have configured Twitter scrapers.

### Prerequisites

- A running Masa Node (see [Binary Installation](./protocol-binary-installation.md) or [Docker Setup](./protocol-docker-setup.md))
- Configured Twitter scraper (see [Twitter Scraper Configuration](./protocol-twitter-scraper-config.md))

:::info
Ensure all prerequisites are met before proceeding with the testnet setup to avoid connectivity issues.
:::

### Testnet Configuration

1. **Set environment variables**

   Add the following testnet bootnodes configuration to your `.env` file:

   ```plaintext
   BOOTNODES=/ip4/52.6.77.89/udp/4001/quic-v1/p2p/16Uiu2HAmBcNRvvXMxyj45fCMAmTKD4bkXu92Wtv4hpzRiTQNLTsL,/ip4/3.213.117.85/udp/4001/quic-v1/p2p/16Uiu2HAm7KfNcv3QBPRjANctYjcDnUvcog26QeJnhDN9nazHz9Wi,/ip4/52.20.183.116/udp/4001/quic-v1/p2p/16Uiu2HAm9Nkz9kEMnL1YqPTtXZHQZ1E9rhquwSqKNsUViqTojLZt
   ```

   :::warning
   Do not share your `.env` file or any private keys. Keep your node's configuration secure at all times.
   :::

2. **Restart your node**

   Restart the Masa node to apply the changes.

3. **Verify configuration**

   Check the logs for confirmation of successful connection to the testnet bootnodes.

## API Configuration

:::warning
For testnet setup, the API server must be disabled. This is the default configuration, so no additional action is required if you haven't explicitly enabled the API.
:::

The API server is disabled by default for security reasons. This is the correct configuration for testnet participation. If you have previously enabled the API server, please ensure it is disabled before connecting to the testnet.

To verify that the API is disabled, check that none of the following are set:

1. The environment variable `API_ENABLED` is not set to `true`.
2. The command-line flag `--api-enabled=true` is not used when starting the application.
3. You are not using the `make run-api-enabled` command to start your node.

If you need to disable the API server, simply remove any of the above configurations that might be enabling it.

### Rewards

Participants in the testnet who have properly configured Twitter scrapers will be eligible for rewards. Details about the reward structure and distribution will be announced separately.

:::note
Stay tuned to official Masa communication channels for updates on reward distribution and eligibility criteria.
:::

### Troubleshooting

If you encounter issues connecting to the testnet:

- Verify that your `.env` file is correctly updated with the bootnode information
- Ensure your Twitter scrapers are properly configured and functioning
- Check your node logs for any error messages related to peer connections
