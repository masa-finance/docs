# MASA Node Docker Setup Guide

Welcome to the MASA Node Docker setup guide. This document will walk you through the process of setting up and running your own MASA node in a Docker environment. Follow these steps to get up and running quickly.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Docker**: You'll need Docker to build and run containers. Download and install Docker for your operating system from [Docker's official website](https://www.docker.com/products/docker-desktop).
- **Docker Compose**: This project uses Docker Compose to manage multi-container Docker applications. Docker Desktop for Windows and Mac includes Docker Compose. On Linux, you may need to install it separately following the instructions [here](https://docs.docker.com/compose/install/).
- **Git** 

## Getting Started

### 1. Clone the Repository

Start by cloning the masa-node repository to your local machine. Open a terminal and run:

```bash
git clone git@github.com:masa-finance/masa-oracle.git
cd masa-oracle
```

### 2. Environment Configuration

Create a `.env` file in the root of your project directory. This file will store environment variables required by the MASA node, such as `BOOTNODES` and `RPC_URL`. You can obtain these values from the project maintainers or documentation.

Example `.env` file content:

```env
BOOTNODES=/ip4/35.223.224.220/udp/4001/quic-v1/p2p/16Uiu2HAmPxXXjR1XJEwckh6q1UStheMmGaGe8fyXdeRs3SejadSa
RPC_URL=https://ethereum-sepolia.publicnode.com	
```

### 3. Building the Docker Image

With Docker and Docker Compose installed and your `.env` file configured, build the Docker image using the following command:

```bash
docker-compose build
```

This command builds the Docker image based on the instructions in the provided `Dockerfile` and `docker-compose.yaml`.

### 4. Running the MASA Node

To start the MASA node, use Docker Compose:

```bash
docker-compose up -d
```

This command starts the MASA node in a detached mode, allowing it to run in the background.

### 5. Verifying the Node

After starting the node, you can verify it's running correctly by checking the logs:

```bash
docker-compose logs -f masa-node
```

This command displays the logs of the MASA node container. Look for any error messages or confirmations that the node is running properly.

## Accessing Generated Keys

The MASA node generates keys that are stored in the `.masa-keys/` directory in your project directory. 
This directory is mapped from `/home/masa/.masa/` inside the Docker container, ensuring that your keys are safely stored on your host machine.

## Funding the Node (in order to Stake)

Find the public key of your node in the logs:
the logs:

```bash
docker-compose logs -f masa-node
```
Send 1000 MASA and .01 sepoliaETH to the node's public key / wallet address.

When the transactions have settled, you can stake

## Staking the Node

```docker-compose run --build --rm masa-node /usr/bin/masa-node --stake 1000```

## Restart your Node

Stop your running daemonized node:

```docker compose down```

Start it up again with the -d flag: (If you have changed settings you may wish to `--force-recreate`)

```docker compose up --build --force-recreate -d```

## Updating the Node

To update your node, pull the latest changes from the Git repository (if applicable), then rebuild and restart your Docker containers:

```bash
git pull
docker-compose build
docker-compose down
docker-compose up -d
```
