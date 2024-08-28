---
id: protocol-binary-installation
title: Protocol Binary Installation
---

This guide will help you set up and run a Masa Node ready for configuration and deployment.

### Prerequisites

Before you begin, ensure you have the following installed:

- Go 1.22 (do not use 1.23)
- Yarn or npm (for installing contracts)
- Make (for building the binary)

:::warning

You must use Go 1.22 for building the node: `brew install go@1.22`.

:::

### 1. Clone the repository

```bash
git clone https://github.com/masa-finance/masa-oracle.git
```

### 2. Navigate to the project directory
```bash
cd masa-oracle
```

### 3. Install contract dependencies
Navigate to the contract directory:
```bash
cd contracts
```

Install dependencies using yarn or npm
```bash
yarn install
```
or
```bash
npm install
```

Return to the root directory
```bash
cd ..
```

### 4. Build the node

```bash
make build
```

### 5. Set up environment variables to connect your node to the Masa Testnet

:::info

This guide will configure your node as a **Local Bootnode**, for a list of network bootnodes, please refer to the [Bootnode Configuration](https://docs.masa.finance/masa-node/bootnode-configuration) bootnode configuration documentation.

:::

Create a `.env` file in the root directory with these essential variables:
```plaintext
# Default .env configuration

RPC_URL=https://ethereum-sepolia.publicnode.com
ENV=test
FILE_PATH=.
VALIDATOR=false
PORT=8080
```

:::info

This guide will use the default .env configuration. For a comprehensive list of other .env configuration examples, please refer to our [Environment Configuration Guide](https://docs.masa.finance/masa-node/environment-configuration).

:::

### 6. Start the node

```bash
make run
```
```bash
#######################################
#     __  __    _    ____    _        #
#    |  \/  |  / \  / ___|  / \       #
#    | |\/| | / _ \ \___ \ / _ \      #
#    | |  | |/ ___ \ ___) / ___ \     #
#    |_|  |_/_/   \_\____/_/   \_\    #
#                                     #
#######################################

Multiaddress:        /ip4/192.168.1.8/udp/4001/quic-v1/p2p/16Uiu2HAmDXWNV9RXVoRsbt9z7pFSsKS2KdpN7HHFVLdFZmS7iCvo
IP Address:          /ip4/127.0.0.1/udp/4001/quic-v1
Public Key:          0x5dA36a3eB07fd1624B054b99D6417DdF2904e826
Is Staked:           false
Is Validator:        false
Is TwitterScraper:   false
Is DiscordScraper:   false
Is TelegramScraper:  false
```
:::tip

You now have a running node in **Local Bootnode** configuration, you can now proceed to setup your node to start scraping data or to start participating in the network.

:::
## Masa Protocol Configuration
### Set Up a Data Scraper (Worker Node)
If you want your node to earn rewards configure it to to scrape data on the Masa Protocol.

- [Twitter Scraper Configuration](./twitter-scraper-setup.md)
- [Web Scraper Configuration](./web-scraper-setup.md)
- [Discord Scraper Configuration](./discord-scraper-setup.md)
- [Telegram Scraper Configuration](./telegram-scraper-setup.md)

:::info

You need to have **setup** your node and **staked** your node first to be able to scrape data:

:::

### Get data from the Network (Developer Node)
AI developers can get data from the Masa Protocol for free by running a Masa node locally or by using our API (**coming soon**).

- [Staking Your Node](./staking-guide.md)
- [Developer Playground](./validator-setup.md)

:::info

To get data from the Masa Protocol as a developer you need to stake your node (no free leech) - **you need Sepolia ETH** to stake.

:::

### Secure the Network (Validator Node)
Earn MASA rewards by securing the network:

- [Validator Configuration](./validator-setup.md)

### Advanced Configuration
For more detailed setup options:
- [Environment Configuration Guide](./environment-configuration.md)
- [Network Configuration Guide](./network-configuration.md)

### Troubleshooting and Support
If you encounter any issues:
- [Common Issues and Solutions](./troubleshooting.md)
- [Community Support Channels](./community-support.md)

Choose the path that best fits your needs and follow the respective guide for detailed instructions.