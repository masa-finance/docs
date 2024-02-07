# Masa Oracle: Decentralized Data Protocol 🌐

The Masa Oracle governs the access, sharing, and rewarding of private behavioral and identity data in a decentralized and private manner. The Masa Oracle Network ensures transparency and security of data sharing, while  enabling equitable compensation for nodes that participate in the Masa zk-Data Network and Marketplace.

## Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Docker Setup](#docker-setup)
- [Staking Tokens](#staking-tokens)
- [Running the Node](#running-the-node)
- [Updates & Additional Information](#updates--additional-information)

## Getting Started

### Prerequisites

Ensure these prerequisites are installed for a local setup:
- **Go**: Grab it from [Go's official site](https://golang.org/dl/).
- **Yarn**: Install it via [Yarn's official site](https://classic.yarnpkg.com/en/docs/install/).

For Docker setup, make sure you have:
- **Docker**: Download and install Docker from [Docker's official website](https://www.docker.com/products/docker-desktop).
- **Docker Compose**: Installed with Docker Desktop for Windows and Mac. On Linux, install separately as per the instructions [here](https://docs.docker.com/compose/install/).
- **Git**: Required for cloning the repository.
- For complete instructions on building, staking, and running a node with Docker, please see [here](./DOCKER.md) 

### Installation

#### Local Setup

1. Clone the repository and build the node executable:
   ```bash
   git clone https://github.com/masa-finance/masa-oracle.git
   cd masa-oracle
   go build -v -o masa-node ./cmd/masa-node
   cd contracts/ && yarn install
   ```
2. Set the RPC_URL environment variable:
   ```bash
   export RPC_URL=https://ethereum-sepolia.publicnode.com
   ```
   or edit `/Users/{USER}/.masa/masa_oracle_node.env` to set `RPC_URL`.

#### Docker Setup

1. Clone the repository:
   ```bash
   git clone git@github.com:masa-finance/masa-oracle.git
   cd masa-oracle
   ```
2. Configure environment variables in a `.env` file at the project root:
   ```env
   BOOTNODES=/ip4/35.223.224.220/udp/4001/quic-v1/p2p/16Uiu2HAmPxXXjR1XJEwckh6q1UStheMmGaGe8fyXdeRs3SejadSa
   RPC_URL=https://ethereum-sepolia.publicnode.com	
   ```
3. Build the Docker image and run the node:
   ```bash
   docker-compose build
   docker-compose up -d
   ```

## Funding the Node (in order to Stake)

Find the public key of your node in the logs:
the logs:

```bash
docker-compose logs -f masa-node
```
Send 1000 MASA and .01 sepoliaETH to the node's public key / wallet address.

When the transactions have settled, you can stake

### Staking Tokens

- For local setup, stake tokens with:
  ```bash
  ./masa-node --stake 1000
  ```
- For Docker setup, stake tokens with:
  ```bash
  docker-compose run --rm masa-node /usr/bin/masa-node --stake 1000
  ```

### Running the Node

- **Local Setup**: Connect your node to the Masa network:
  ```bash
  ./masa-node --bootnodes=/ip4/35.223.224.220/udp/4001/quic-v1/p2p/16Uiu2HAmPxXXjR1XJEwckh6q1UStheMmGaGe8fyXdeRs3SejadSa --port=4001 --udp=true --tcp=false --start=true
  ```
- **Docker Setup**: Your node will start automatically with `docker-compose up -d`. Verify it's running correctly:
  ```bash
  docker-compose logs -f masa-node
  ```

After setting up your node, its address will be displayed, indicating it's ready to connect with other Masa nodes. Follow any additional configuration steps and best practices as per your use case or network requirements.

## Updates & Additional Information

Stay tuned to the Masa Oracle repository for updates and additional details on effectively using the protocol. For Docker users, update your node by pulling the latest changes from the Git repository, then rebuild and restart your Docker containers.

