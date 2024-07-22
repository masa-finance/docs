---
id: 6-run-protocol
title: 6. Run Protocol
---

Welcome to the MASA Node Docker setup guide. This document will walk you through the process of setting up and running your own MASA node in a Docker environment. Follow these steps to get up and running quickly.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **[Docker](https://www.docker.com/products/docker-desktop)**: You'll need Docker to build and run containers. Download and install Docker for your operating system from Docker's official website.
- **[Docker Compose](https://docs.docker.com/compose/install/)**: This project uses Docker Compose to manage multi-container Docker applications. Docker Desktop for Windows and Mac includes Docker Compose. On Linux, you may need to install it separately following the instructions.
- **[Git](https://git-scm.com/downloads)**: You'll need Git to clone the MASA node repository. Download and install Git from Git's official website.

## Clone the Repository

Start by cloning the masa-node repository to your local machine. Open a terminal and run:

```bash
git clone git@github.com:masa-finance/masa-oracle.git
```

```bash
cd masa-oracle
```

## Environment Configuration

Create a `.env` file in the root of your project directory. This file will store environment variables required by the MASA node, such as `BOOTNODES` and `RPC_URL`. You can obtain these values from the project maintainers or documentation.

Example `.env` file content:

```env
BOOTNODES=/ip4/35.223.224.220/udp/4001/quic-v1/p2p/16Uiu2HAmPxXXjR1XJEwckh6q1UStheMmGaGe8fyXdeRs3SejadSa
RPC_URL=https://ethereum-sepolia.publicnode.com
ENV=test
TWITTER_USER="your_username"
TWITTER_PASS="your_password"
TWITTER_SCRAPER=True

```

**Note:** be sure to update your `TWITTER_USER` and `TWITTER_PASS` to your credentials. Also, be sure to set `ENV` to `test` to join the masa oracle testnet!

## Building the Docker Image

With Docker and Docker Compose installed and your `.env` file configured, build the Docker image using the following command:

```bash
docker-compose build
```

This command builds the Docker image based on the instructions in the provided `Dockerfile` and `docker-compose.yaml`.

## Running the MASA Node

To start the MASA node, use Docker Compose:

```bash
docker-compose up -d
```

This command starts the MASA node in a detached mode, allowing it to run in the background.

## Verifying the Node

After starting the node, you can verify it's running correctly by checking the logs:

```bash
docker-compose logs -f masa-node
```

This command displays the logs of the MASA node container. Look for any error messages or confirmations that the node is running properly.

## Accessing Generated Keys

The MASA node generates keys that are stored in the `.masa-keys/` directory in your project directory.
This directory is mapped from `/home/masa/.masa/` inside the Docker container, ensuring that your keys are safely stored on your host machine.

## Funding the Node (in order to Stake)

The node will need to be funded with `1000` tMASA tokens and `0.01` sepoliaETH. For tMASA tokens, you can use our faucet:

```bash
docker-compose run --rm masa-node /usr/bin/masa-node --faucet
```

If the faucet is empty, you can manually request tokens using our form. First, find the public key of your node in the logs:

```bash
docker-compose logs -f masa-node
```

Then, head to **[our form](https://docs.google.com/forms/d/e/1FAIpQLSc344bmJfWYcjAEyDdfKTorDsylEyNU-YppmhQNV89f90RK0w/viewform)** to request test Masa tokens on Sepolia with your nodes address.

For sepoliaETH, you can use a faucet **[like this one](https://www.alchemy.com/faucets/ethereum-sepolia).** When both transactions have settled, you can stake:

## Staking the Node

```bash
docker-compose run --build --rm masa-node /usr/bin/masa-node --stake 1000
```

## Restart your Node

Stop your running daemonized node:

```bash
docker compose down
```

Start it up again with the -d flag: (If you have changed settings you may wish to `--force-recreate`)

```bash
docker compose up --build --force-recreate -d -p 8080:8080
```

To verify the node is correctly running, you can manually interact with it by visiting **[http://localhost:8080/swagger/index.html](http://localhost:8080/swagger/index.html)**.

## Updating the Node

If you wish to update your node, pull the latest changes from the Git repository (if applicable), then rebuild and restart your Docker containers:

```bash
git pull
```

```bash
docker-compose build
```

```bash
docker-compose down
```

```bash
docker-compose up -d
```
