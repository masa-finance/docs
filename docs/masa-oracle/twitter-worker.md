---
id: twitter-worker
title: Providing Compute for Twitter Requests
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
- Add your Twitter credentials to your node's `.env` file. This is crucial for authenticating with Twitter's API and fetching tweet data.
- Ensure your Masa Oracle Node is up and running, with network accessibility for receiving and processing requests.

## Setting Up Your Node for Twitter Requests

### Adding Twitter Credentials

1. Locate your `.env` file in your Masa Oracle Node's directory.
2. Add the following entries, replacing `YOUR_TWITTER_API_KEY` and `YOUR_TWITTER_API_SECRET` with your actual Twitter API credentials. If you have 2FA enabled set your 2FA code in `YOUR_TWITTER_2FA_CODE`. When you start your node a session is saved locally with cookies to prevent repeated logins:
```bash
#env
TWITTER_API_KEY=YOUR_TWITTER_API_KEY
TWITTER_API_SECRET=YOUR_TWITTER_API_SECRET
TWITTER_2FA_CODE="YOUR_TWITTER_2FA_CODE"
```
3. Save the `.env` file and restart your node to apply the changes.

### Verifying Node Configuration

Ensure your node is correctly configured to handle Twitter data requests by:

- Checking the node's log for successful initialization messages.
- Verifying that your Twitter API credentials are correctly loaded and authenticated.

## Operational Guidelines

As a worker, maintaining optimal performance and reliability is key. Here are some guidelines:

- **Monitor Your Node**: Regularly check your node's health and log files to identify and resolve any issues promptly.
- **Update Regularly**: Keep your node and its dependencies up to date to ensure compatibility with the latest Twitter API changes and network protocols.
- **Secure Your Credentials**: Protect your Twitter API credentials and node's access keys to prevent unauthorized access.

## Conclusion

By contributing compute resources as a worker in the Masa Oracle Node network, you're at the forefront of providing real-time Twitter data to a wide array of decentralized applications. Your participation not only supports the network's operational efficiency but also enables the development of innovative solutions that leverage social media data for insightful analysis and decision-making. Follow this guide to ensure your node is properly set up and ready to fulfill Twitter data requests effectively.