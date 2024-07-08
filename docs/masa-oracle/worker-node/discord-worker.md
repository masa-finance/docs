---
id: discord-worker
title: Discord Worker
---

## Introduction

This guide is for oracle node workers who are interested in contributing compute resources to fulfill Discord data requests within the Masa Oracle Node network. It focuses on the specific requirements, setup, and operational guidelines for workers to efficiently process Discord data requests. By dedicating your node to handle these requests, you play a crucial role in the decentralized processing of real-time Discord data, which is essential for applications such as community engagement, user analysis, and more.

## Getting Started: Worker's Role in Processing Discord Data

As a worker in the Masa Oracle Node network, your primary function is to process Discord data requests sent by clients. This involves fetching user profiles and other relevant data based on specified criteria and returning the data to the network. Here's a brief overview of how it works:

### Worker's Workflow

1 . **Initialization**: Your node, acting as a Worker, is part of a pool managed by a Manager actor. This setup ensures efficient distribution and handling of incoming Discord data requests.

2 . **Receiving Requests**: When a request for Discord data is received, the Manager actor delegates the task to you, the Worker, based on availability and capability.

3 . **Processing Requests**: You then fetch the requested data from Discord using the specified criteria and prepare the data for return to the network.

## Prerequisites for Workers

To become a worker focused on Discord data requests, you need to:

- Have your Masa Oracle Node staked as outlined in the [Staking Guide for Masa Oracle Node](staking-guide.md).
- Add your Discord bot token to your node's `.env` file. This is crucial for authenticating with the Discord API and fetching data.
- Ensure your Masa Oracle Node is up and running, with network accessibility for receiving and processing requests.

## Retrieving Your Discord Bot Token

To start processing Discord data requests, you need to retrieve your Discord bot token, which is essential for authenticating with the Discord API. This token will allow your bot to collect data on your guild. Here's how to get your token:

1 . Go to the [Discord Developer Portal](https://discord.com/developers/applications).
2 . Log in with your Discord account credentials.
3 . Click on the "New Application" button. Give your application a name and confirm the creation.
4 . Navigate to the "Bot" tab on the left-hand side and click on "Add Bot".
5 . Confirm the creation of the bot user.
6 . Under the "TOKEN" section, click on "Copy" to get your bot token.


### Adding Discord Credentials

1 . Locate your `.env` file in your Masa Oracle Node's directory.
2 . Add the following entries, replacing `DISCORD_BOT_TOKEN` with your actual Discord bot token. You must set `DISCORD_WORKER=true` to start your node as a Discord Worker. When you start your node, ensure that it can communicate with the Discord API:

```shell
#env
DISCORD_BOT_TOKEN='your_discord_bot_token'
DISCORD_SCRAPER=true
```

3 . Save the `.env` file and restart your node to apply the changes.

### 3) Verifying Node Configuration

Ensure your node is correctly configured to handle Discord data requests by checkint the initialization message:

```bash
#######################################
#     __  __    _    ____    _        #
#    |  \/  |  / \  / ___|  / \       #
#    | |\/| | / _ \ \___ \ / _ \      #
#    | |  | |/ ___ \ ___) / ___ \     #
#    |_|  |_/_/   \_\____/_/   \_\    #
#                                     #
#######################################
Multiaddress:           /ip4/172.20.7.45/udp/4001/quic-v1/p2p/16Uiu2HAm28dTN2WVWD2y2bjzwPdym59XASDfQsSktCtejtNR9Vox
IP Address:             /ip4/127.0.0.1/udp/4001/quic-v1
Public Key:             0x065728510468A2ef48e6E8a860ff42D68Ca612ee
Is Staked:              true
Is Validator:              false
Is DiscordScraper:      true
Is WebScraper:          false
```

## Operational Guidelines

As a worker, maintaining optimal performance and reliability is key. Here are some guidelines:

- **Monitor Your Node**: Regularly check your node's health and log files to identify and resolve any issues promptly.
- **Update Regularly**: Keep your node and its dependencies up to date to ensure compatibility with the latest Twitter changes and network protocols.
- **Secure Your Credentials**: Protect your Twitter API credentials and node's access keys to prevent unauthorized access.

## Conclusion

By contributing compute resources as a worker in the Masa Oracle Node network, you're at the forefront of providing real-time Discord data to a wide array of decentralized applications. Your participation not only supports the network's operational efficiency but also enables the development of innovative solutions that leverage community data for insightful analysis and decision-making. Follow this guide to ensure your node is properly set up and ready to fulfill Discord data requests effectively.
