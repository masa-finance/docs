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

## Install Dependencies

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

## Create a .env file

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

# Twitter Configuration
TWITTER_SCRAPER=true
TWITTER_USERNAME=<your-twitter-username>
TWITTER_PASSWORD=<your-twitter-password>
```

Save and exit

```bash
:wq
```

## Build the node

```bash
make build
```

## Start the node

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
Is TwitterScraper:   true
Is DiscordScraper:   false
Is TelegramScraper:  false
```

## Send Sepolia ETH to your Node

Take note of your Public Key, and send at least 0.01 Sepolia ETH to the address. There are many faucets available for Sepolia ETH, but **[Alchemy](https://www.alchemy.com/faucets/ethereum-sepolia)** is a popular option.

## Close Node

```bash
cntrl + c
```

## Get MASA tokens

Use the faucet to obtain Sepolia MASA tokens.

```bash
make faucet
```

## Stake your node

```bash
make stake
```

## Run the node

```bash
pm2 start "make run" --name "protocol"
```

## View Logs

```bash
pm2 logs
```

## Interact with the node

Visit the following URL to interact with the node:

```bash
http://<digital-ocean-droplet-ip-address>:8080/swagger/#/
```
