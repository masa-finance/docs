---
id: telegram-worker
title: Telegram Worker
---

## Introduction

This guide is for oracle node workers who are interested in contributing compute resources to fulfill Telegram data requests within the Masa Oracle Node network. It focuses on the specific requirements, setup, and operational guidelines for workers to efficiently process Telegram data requests. By dedicating your node to handle these requests, you play a crucial role in the decentralized processing of real-time Telegram data, which is vital for applications such as messaging analysis, bot interactions, and more.

## Getting Started: Worker's Role in Processing Telegram Data

As a worker in the Masa Oracle Node network, your primary function is to process Telegram data requests sent by clients. This involves interacting with the Telegram API based on specified queries and returning the data to the network. Here's a brief overview of how it works:

### Worker's Workflow

1. **Initialization**: Your node, acting as a Worker, is part of a pool managed by a Manager actor. This setup ensures efficient distribution and handling of incoming Telegram data requests.

2. **Receiving Requests**: When a request for Telegram data is received, the Manager actor delegates the task to you, the Worker, based on availability and capability.

3. **Processing Requests**: You then interact with the Telegram API using the specified criteria and prepare the data for return to the network.

## Prerequisites for Workers

To become a worker focused on Telegram data requests, you need to:

- Have your Masa Oracle Node staked as outlined in the [Staking Guide for Masa Oracle Node](staking-guide.md).
- Create a Telegram app to obtain your `app_id` and `app_hash`, and add these to your node's `.env` file.
- Ensure your Masa Oracle Node is up and running, with network accessibility for receiving and processing requests.

## Setting Up Your Node for Telegram Requests

### Creating a Telegram App

1. Go to the [Telegram applications page](https://my.telegram.org/auth).
2. Follow the instructions to create a new application.
3. Once created, you will be provided with an `app_id` and `app_hash`.

### Adding Telegram Credentials

1. Locate your `.env` file in your Masa Oracle Node's directory.
2. Add the following entries, replacing `your_app_id` and `your_app_hash` with the actual values provided by Telegram:

```shell
TELEGRAM_APP_ID='your_app_id'
TELEGRAM_APP_HASH='your_app_hash'
TELEGRAM_SCRAPER=true
```


3. Save the `.env` file and restart your node to apply the changes.

### Starting Authentication

1. Call the `/api/v1/auth/telegram/start` endpoint with your phone number.
2. You will receive a `phone_code_hash` and a code on your phone.

### Completing Authentication

1. Call the `/api/v1/auth/telegram/complete` endpoint with the code you received on your phone, your phone number, and the `phone_code_hash` from the previous step.

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
Is Validator:              false
Is TelegramScraper:      true
```

## Conclusion

By contributing compute resources as a worker in the Masa Oracle Node network, you're at the forefront of providing real-time Telegram data to a wide array of decentralized applications. Your participation not only supports the network's operational efficiency but also enables the development of innovative solutions that leverage messaging data for insightful analysis and decision-making. Follow this guide to ensure your node is properly set up and ready to fulfill Telegram data requests effectively.

