---
id: protocol-developer-config
title: Developer Guide
---

# Developer Guide: Accessing Masa Network Data

## Introduction

As a developer, you have two primary options for accessing data from the Masa network:

1. Run your own node and access data locally
2. Use the Developer API (requires contacting us through Discord)

This guide will walk you through both options, helping you choose the best approach for your needs.

## Option 1: Running Your Own Node

Running your own node allows you to access data directly from the Masa network. This option provides more control and potentially faster access to data.

### Steps:

1. **Install and Configure Your Node**
   - Follow our [Binary Installation Guide](/docs/masa-protocol/protocol-binary-installation.md) or [Docker Setup Guide](/docs/masa-protocol/protocol-docker-setup.md)

2. **Stake Your Node**
   - Complete the [Staking Guide](/docs/masa-protocol/protocol-staking-guide.md) to ensure your node is properly staked on the network

3. **Connect to the Main Masa Network**
   - Ensure your node is configured to connect to the main Masa network using mainnet bootnodes

4. **Access Data Locally**
   - Once your node is running and synced, you can access data through the local API endpoints at [http://localhost:8080/swagger/#/](http://localhost:8080/swagger/#/)

### Example API Request:

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

## Option 2: Developer API

If you prefer not to run your own node or need access to specific features, you can use our Developer API.
### Steps:

1. **Join Our Discord**
   - Join the official Masa Discord server: [https://discord.gg/masafinance](https://discord.gg/masafinance)

2. **Request API Access**
   - Contact our team through the designated developer channel in Discord
   - Provide information about your project and data needs

3. **Receive API Credentials**
   - Once approved, you'll receive your unique API key and endpoint information

4. **Integrate the API**
   - Use the provided documentation to integrate the Developer API into your application

### Benefits of the Developer API:
- No need to run and maintain your own node
- Access to potentially more data sources or advanced features
- Direct support from the Masa team

## Choosing the Right Option

- **Run Your Own Node** if you:
  - Need full control over your data access
  - Want to contribute to the network's decentralization
  - Have the technical resources to maintain a node

- **Use the Developer API** if you:
  - Want a simpler setup process
  - Need access to specific features not available through local nodes
  - Prefer direct support from the Masa team

## Next Steps

- For running your own node, proceed to the [Binary Installation Guide](/docs/masa-protocol/protocol-binary-installation.md)
- To use the Developer API, join our Discord and reach out in the developer channel
- Explore our [API Documentation](/docs/masa-protocol/api-documentation.md) for detailed endpoint information

If you have any questions, don't hesitate to ask in our Discord community!