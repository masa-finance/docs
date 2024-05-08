---
id: web-worker
title: Web Scraper Worker
---

## Introduction

This guide is designed for oracle node workers who are interested in contributing compute resources to fulfill web scraping data requests within the Masa Oracle Node network. It outlines the specific requirements, setup, and operational guidelines for workers to efficiently process web scraping requests. By configuring your node to handle these requests, you play a pivotal role in the decentralized extraction of data from various websites, which is essential for applications such as content aggregation, market analysis, and competitive research.

## Getting Started: Worker's Role in Processing Web Scraping Data

As a worker in the Masa Oracle Node network, your primary function is to process web scraping data requests sent by clients. This involves extracting data from websites based on specified parameters and returning the data to the network. Here's a brief overview of the workflow:

### Worker's Workflow

1. **Initialization**: Your node, acting as a Worker, joins a pool managed by a Manager actor. This ensures efficient distribution and management of incoming web scraping requests.

2. **Receiving Requests**: When a web scraping request is received, the Manager actor assigns the task to you, the Worker, based on your availability and scraping capabilities.

3. **Processing Requests**: You execute the web scraping script to collect the required data from the target website and format the data for return to the network.

## Prerequisites for Web Scraping Workers

To become a worker focused on web scraping data requests, you need to:

- Have your Masa Oracle Node staked as per the [Staking Guide for Masa Oracle Node](staking-guide.md).
- Install web scraping tools and libraries on your node.
- Ensure your Masa Oracle Node is operational, with network accessibility for receiving and processing requests.

## Setting Up Your Node for Web Scraping Requests

### Edit .env file 

1. Locate your `.env` file in your Masa Oracle Node's directory.
2. Add the following entry:

```shell
#env
WEB_SCRAPER=true
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
Is TwitterScraper:      false
Is WebScraper:          true
```

## Operational Guidelines

As a worker, maintaining optimal performance and reliability is key. Here are some guidelines:

- **Monitor Your Node**: Regularly check your node's health and log files to identify and resolve any issues promptly.
- **Update Regularly**: Keep your node and its dependencies up to date to ensure compatibility with the latest oracle node changes and network protocols.
- **Secure Your Credentials**: Protect your node's access keys to prevent unauthorized access.

## Conclusion

By contributing compute resources as a worker in the Masa Oracle Node network, you're at the forefront of providing real-time Web data to a wide array of decentralized applications. Your participation not only supports the network's operational efficiency but also enables the development of innovative solutions that leverage social media data for insightful analysis and decision-making. Follow this guide to ensure your node is properly set up and ready to fulfill Web data requests effectively.
