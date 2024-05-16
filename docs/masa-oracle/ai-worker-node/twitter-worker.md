---
id: twitter-worker
title: Twitter Worker
---

## Introduction 

This guide is for oracle node workers who are interested in contributing compute resources to fulfill Twitter data requests within the Masa Oracle Node network. It focuses on the specific requirements, setup, and operational guidelines for workers to efficiently process Twitter data requests. By dedicating your node to handle these requests, you play a crucial role in the decentralized processing of real-time Twitter data, which is vital for applications such as sentiment analysis, trend monitoring, and more.

## Getting Started: Worker's Role in Processing Twitter Data

As a worker in the Masa Oracle Node network, your primary function is to process Twitter data requests sent by clients. This involves fetching tweets based on specified queries and returning the data to the network. Here's a brief overview of how it works:

### Worker's Workflow

1. **Initialization**: Your node, acting as a Worker, is part of a pool managed by a Manager actor. This setup ensures efficient distribution and handling of incoming Twitter data requests.

2. **Receiving Requests**: When a request for Twitter data is received, the Manager actor delegates the task to you, the Worker, based on availability and capability.

3. **Processing Requests**: You then fetch the requested tweets from Twitter using the specified criteria and prepare the data for return to the network.

## Prerequisites for Workers

To become a worker focused on Twitter data requests, you need to:

- Have your Masa Oracle Node staked as outlined in the [Staking Guide for Masa Oracle Node](staking-guide.md).
- Add your Twitter login credentials to your node's `.env` file. This is crucial for authenticating with Twitter and fetching tweet data.
- Ensure your Masa Oracle Node is up and running, with network accessibility for receiving and processing requests.

## Setting Up Your Node for Twitter Requests

### Adding Twitter Credentials

1. Locate your `.env` file in your Masa Oracle Node's directory.
2. Add the following entries, replacing `your_twitter_username` and `your_twitter_password` with your actual Twitter API credentials. If you have 2FA enabled set your 2FA code in `your_2fa_code`. You must set `TWITTER_SCRAPER=true` to start your node as a Twitter Worker. When you start your node a session is saved locally with cookies to prevent repeated logins:

```shell
#env
TWITTER_USER='your_twitter_username'
TWITTER_PASS="your_twitter_password"
TWITTER_2FA_CODE="your_2fa_code"
TWITTER_SCRAPER=true
```

3.Save the `.env` file and restart your node to apply the changes.

### Verifying Node Configuration

Ensure your node is correctly configured to handle Twitter data requests by checkint the initialization message:

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
Is Writer:              false
Is TwitterScraper:      true
Is WebScraper:          false
```

## Operational Guidelines

As a worker, maintaining optimal performance and reliability is key. Here are some guidelines:

- **Monitor Your Node**: Regularly check your node's health and log files to identify and resolve any issues promptly.
- **Update Regularly**: Keep your node and its dependencies up to date to ensure compatibility with the latest Twitter changes and network protocols.
- **Secure Your Credentials**: Protect your Twitter API credentials and node's access keys to prevent unauthorized access.

## Conclusion

By contributing compute resources as a worker in the Masa Oracle Node network, you're at the forefront of providing real-time Twitter data to a wide array of decentralized applications. Your participation not only supports the network's operational efficiency but also enables the development of innovative solutions that leverage social media data for insightful analysis and decision-making. Follow this guide to ensure your node is properly set up and ready to fulfill Twitter data requests effectively.
