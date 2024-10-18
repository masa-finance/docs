---
id: protocol-digital-ocean-setup
title: Digital Ocean Setup
---

This walkthrough assumes you have setup a Digital Ocean environment. If you have not, please refer to the **[Setup Guide](../masa-subnet/shared/create-environment.md)**.

## Clone our repository

Clone **[our repository](https://github.com/masa-finance/masa-oracle.git)**

```bash
git clone https://github.com/masa-finance/masa-oracle.git
```

Navigate to the root directory

```bash
cd masa-oracle
```

Get the latest release

```bash
latest_tag=$(git describe --tags `git rev-list --tags --max-count=1`)
```

Checkout the latest release

```bash
git checkout $latest_tag
```

## Install Project Dependencies

install GO, NPM, and PM2

```bash
sudo apt install -y golang
```

```bash
sudo apt install npm
```

```bash
sudo npm install -g pm2
```

## Install Contract Dependencies

Install the contract dependencies

```bash
cd contracts
```

```bash
npm install
```

Return to the root directory

```bash
cd ..
```

## Create .env file

```bash
vim .env
```

```bash
# Default Configuration
RPC_URL=https://ethereum-sepolia.publicnode.com
ENV=test
FILE_PATH=.
VALIDATOR=false
PORT=8080
```

Save and exit

```bash
:wq
```

## Build the node

Build the protocol node

```bash
make build
```

## Start the node

Start the protocol node

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

## Interact with the node

Visit the following URL to interact with the node:

```bash
http://<droplet-ip-address>:8080/swagger/#/
```

:::tip

You now have a running node in **Local Bootnode** configuration

:::

## Configure your node

You can now configure your node to start scraping data as a miner, to fetch data from the network or to start participating in the network as a validator.

### Set up a scraper: Miner Node

If you want your node to earn rewards configure it to to scrape data on the Masa Protocol.

- [Twitter Scraper Configuration](/docs/masa-protocol/protocol-twitter-scraper-config.md)
- [Web Scraper Configuration](/docs/masa-protocol/protocol-web-scraper-config.md)
- [Discord Scraper Configuration](/docs/masa-protocol/protocol-discord-scraper-config.md)
- [Telegram Scraper Configuration](/docs/masa-protocol/protocol-telegram-scraper-config.md)

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

- **Validator Configuration** (coming soon!)

### Advanced Configuration

For more detailed setup options:

- **Environment Configuration Guide** (coming soon!)
- **Network Configuration Guide** (coming soon!)

### Troubleshooting and Support

If you encounter any issues:

- **Common Issues and Solutions** (coming soon!)
- [**Community Support**](/docs/masa-subnet/validator/9-join-community.md)

Choose the path that best fits your needs and follow the respective guide for detailed instructions.
