---
id: protocol-staking-guide
title: Node Staking Guide
---

This guide will help you stake your Masa Node to participate in the network.

### Prerequisites

- A running Masa Node (see [Binary Installation](./protocol-binary-installation.md) or [Docker Setup](./protocol-docker-setup.md))
- [**Sepolia ETH**](https://www.alchemy.com/faucets/ethereum-sepolia) (you will need 0.01 Sepolia ETH in your node's wallet for the sepolia Masa faucet to function)

### Staking Process

1. **Get MASA tokens**

   Use the faucet to obtain Sepolia MASA tokens:

   ```bash
   make faucet
   ```

2. **Stake your node**

   Stake 1000 MASA tokens:

   ```bash
   make stake
   ```

3. **Verify staking**

   Restart your node and check the logs. You should see:

   ```
   Is Staked: true
   ```

### Next Steps

After staking, you can configure your node for various roles:

- [Twitter Scraper Configuration](./twitter-scraper-setup.md)
- [Web Scraper Configuration](./web-scraper-setup.md)
- [Discord Scraper Configuration](./discord-scraper-setup.md)
- [Telegram Scraper Configuration](./telegram-scraper-setup.md)
- [Validator Configuration](./validator-setup.md)

For more advanced options, refer to:

- [Environment Configuration Guide](./environment-configuration.md)
- [Network Configuration Guide](./network-configuration.md)
