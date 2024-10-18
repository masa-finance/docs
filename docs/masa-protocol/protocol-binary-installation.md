---
id: protocol-binary-installation
title: Protocol Binary Installation
---

This guide will help you set up and run a Masa Node using a Go Binary ready for configuration and deployment.

### Prerequisites

Before you begin, ensure you have the following installed:

- [**Go 1.22**](https://golang.org/dl/) (do not use 1.23)
- [**Yarn**](https://classic.yarnpkg.com/en/docs/install) or [**npm**](https://www.npmjs.com/get-npm) (for installing contracts)
- [**Make**](https://www.gnu.org/software/make/)
- [**Sepolia ETH**](https://www.alchemy.com/faucets/ethereum-sepolia) (you will need 0.01 Sepolia ETH in your node's wallet for the sepolia Masa faucet to function)

:::caution

You need to have **0.01 Sepolia ETH** on hand to stake sepolia Masa with your node.

:::

:::info

Only **Go 1.22** is supported for building the node: **`brew install go@1.22`**.

:::

### Clone the repository

```bash
git clone https://github.com/masa-finance/masa-oracle.git
```

```bash
cd masa-oracle
```

### Install contracts

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

### Environment Configuration

Set up environment variables to connect your node to run your node in **Local** configuration

:::info

This guide will configure your node as a **Local**, for a list of network bootnodes, please refer to the [Bootnode Configuration](https://docs.masa.finance/masa-node/bootnode-configuration) bootnode configuration documentation.

:::

Create a `.env` file in the root directory with these essential variables:

```plaintext
# Default .env configuration

RPC_URL=https://ethereum-sepolia.publicnode.com
ENV=test
FILE_PATH=.
VALIDATOR=false
PORT=8080
API_ENABLED=true
```

:::info

For more .env options, see our [Environment Configuration Guide](https://docs.masa.finance/masa-node/environment-configuration).

:::

### Build the node

```bash
make build
```

### Start the node

```bash
make run
```

You will see the following output:

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

You now have a running node in **Local Bootnode** configuration

:::

## Configure your node

You can now configure your node to start scraping data as a miner, to fetch data from the network or to start participating in the network as a validator.

### Set up a scraper: Miner Node

If you want your node to earn rewards configure it to to scrape data on the Masa Protocol.

- [Twitter Scraper Configuration](/docs/masa-protocol/protocol-twitter-scraper-setup.md)
- [Web Scraper Configuration](/docs/masa-protocol/protocol-web-scraper-setup.md)
- [Discord Scraper Configuration](/docs/masa-protocol/protocol-discord-scraper-setup.md)
- [Telegram Scraper Configuration](/docs/masa-protocol/protocol-telegram-scraper-setup.md)

:::info

You need to have **setup** your node and **staked** your node first to be able to scrape data:

:::

### Get data from the Network: Developer Node

AI developers can get data from the Masa Protocol for free by running a Masa node locally or by using our API (**coming soon**).

- [Staking Your Node](/docs/masa-protocol/protocol-staking-guide.md)
- [Developer Configuration](/docs/masa-protocol/protocol-developer-config.md)

:::info

To get data from the Masa Protocol as a developer you need to stake your node (no free leech) - **you need Sepolia ETH** to stake.

:::

### Secure the Network: Validator Node

Earn MASA rewards by securing the network:

- [Validator Configuration](/docs/masa-protocol/protocol-validator-setup.md)

### Advanced Configuration

For more detailed setup options:

- [Environment Configuration Guide](/docs/masa-protocol/protocol-environment-configuration.md)
- [Network Configuration Guide](/docs/masa-protocol/protocol-network-configuration.md)

### Troubleshooting and Support

If you encounter any issues:

- [Common Issues and Solutions](/docs/masa-protocol/protocol-troubleshooting.md)
- [Community Support](/docs/masa-protocol/protocol-community-support.md)

Choose the path that best fits your needs and follow the respective guide for detailed instructions.
