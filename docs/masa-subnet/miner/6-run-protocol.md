---
id: 6-run-protocol
title: 6. Run Protocol Node
---

# Running a Protocol Node on Masa Subnet

## Contents

1. [Introduction](#introduction)
2. [Why Run a Scraper?](#why-run-a-scraper)
3. [Supported Scrapers](#supported-scrapers)
4. [Setup Steps](#setup-steps)
5. [Running Your Node](#running-your-node)
   - [Local Mode and Private Network Setup](#local-mode-and-private-network-setup)
   - [Verification](#verification)
6. [Advanced Configuration and Troubleshooting](#advanced-configuration-and-troubleshooting)

## Introduction

As a subnet miner, running a protocol node with data scraping capabilities is crucial for contributing valuable data to Masa Subnet 42. This guide will help you set up and configure your miner to run various data scrapers, with a particular focus on X/Twitter as our primary supported data source.

## Why Run a Scraper?

Running a scraper on your subnet miner node allows you to:

1. Contribute diverse and up-to-date data to the Masa Subnet
2. Earn rewards for providing valuable, high-quality data in **large quantities**
3. Support AI developers by supplying them with high-quality training data

:::tip
The more volume of high-quality data you provide, the more valuable your node becomes to the network!
:::

## Supported Scrapers

Currently, we support the following data scrapers:

1. X/Twitter (primary focus of the subnet)
2. Discord
3. Telegram
4. Web (general purpose)

:::info
While we support multiple scrapers, X/Twitter is our most important data source at the moment. We recommend prioritizing its setup.
:::

## Setup Steps

Follow these steps to configure your subnet miner with data scraping capabilities:

1. Install and Configure Your Masa Node:
   - [Binary Installation Guide](/docs/masa-protocol/protocol-binary-installation.md)
   - [Docker Setup Guide](/docs/masa-protocol/protocol-docker-setup.md)
2. [Stake Your Node](/docs/masa-protocol/protocol-staking-guide.md)
3. [Configure X/Twitter Scraper](/docs/masa-protocol/protocol-twitter-scraper-config.md)
4. [Configure Discord Scraper](/docs/masa-protocol/protocol-discord-scraper-config.md)
5. [Configure Telegram Scraper](/docs/masa-protocol/protocol-telegram-scraper-setup.md)
6. [Configure Web Scraper](/docs/masa-protocol/protocol-web-scraper-config.md)

:::warning
Ensure you have the necessary credentials and paid accounts (e.g., X/Twitter Pro Account) before setting up scrapers. A residential proxy is required for the X/Twitter scraper if you are running in the cloud.
:::

## Running Your Node

Once you've completed the setup steps, you can start your Masa protocol node:

### Local Mode and Private Network Setup

:::tip
We recommend running your miner with a protocol node in local mode and using it as a private bootnode to connect multiple scrapers. This setup allows you to create a private network of scrapers and scale your rewards by load balancing the data scraping across multiple nodes.
:::

To set up a private network of scrapers:

1. Configure one node as your local bootnode (this can also be a scraper).
2. Connect additional scraper nodes to this bootnode.

This configuration allows you to serve multiples of tweets and potentially earn more rewards than other miners. For example:

- Each Twitter account can serve 1.2 million tweets per month (450 every 15 minutes, due to Twitter's hard limit).
- By connecting 10 scraper nodes to one private bootnode, your miner could potentially serve 12 million tweets per month.

To connect scraper nodes to your bootnode, add the bootnode address to the `.env` file of each scraper node:

```
BOOTNODES=/ip4/192.168.1.100/udp/4001/quic-v1/p2p/16Uiu2HAm3vSUoJCwwzVtGuiQWGTtRbLoJcPsH3ZZb9N4xwn9WX7p
```

Replace the IP address, port, and peer ID with your bootnode's actual values.

:::warning
The bootnode address provided above is an example. Always use your own private bootnode address for security reasons.
:::

Verify that your node is running correctly by checking the logs for scraper confirmations and making a curl request to the bootnode's API, such as:

### Logs
```
Is TwitterScraper: true
```

Curl the node in local mode to confirm it returns X/Twitter data:
```bash
curl -X 'POST' \
  'http://localhost:8080/api/v1/data/twitter/tweets/recent' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "query": "$Masa AI",
  "count": 1
}'
```

You should receive a response similar to this:

```json
{
  "data": [
    {
      "Error": null,
      "Tweet": {
        "ConversationID": "1828797710385942907",
        "GIFs": null,
        "HTML": "<a href=\"https://twitter.com/CryptoGodJohn\">@CryptoGodJohn</a> $MASA the leading token for <a href=\"https://twitter.com/hashtag/AI\">#AI</a> and <a href=\"https://twitter.com/hashtag/Data\">#Data</a> <br><a href=\"https://twitter.com/getmasafi\">@getmasafi</a>",
        "Hashtags": [
          "AI",
          "Data"
        ],
        "ID": "1828900558452797478",
        // ... (other Tweet fields)
      }
    }
  ],
  "workerPeerId": "16Uiu2HAmSCQMh22Xmo1GMxXB73qRx3YaVqqL1UwTYn3iNvQLjPB5"
}
```

Verify that the `workerPeerId` in the response matches your node's peerID.

For more advanced configuration options and troubleshooting, refer to:
- [Environment Configuration Guide](../masa-protocol/environment-configuration.md)
- [Network Configuration Guide](../masa-protocol/network-configuration.md)
- [Troubleshooting Guide](../masa-protocol/troubleshooting.md)
