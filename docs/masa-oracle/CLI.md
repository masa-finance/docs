# Masa Node CLI Documentation

The Masa Node CLI is a command-line interface tool designed to interact with the Masa Oracle network. It provides users with the ability to execute various operations such as viewing network status, managing staking, and interacting with the Masa Network.

![CLI Tool Screenshot](images/cli.png)

## Getting Started

Before using the Masa Node CLI, ensure you have the necessary prerequisites installed on your system. These include Go, Docker (for Docker setups), and Git for cloning the repository.

### Installation

1 . Clone the Masa Oracle repository:

```shell
git clone https://github.com/masa-finance/masa-oracle.git
cd masa-oracle
```

2 . Build the CLI tool:

```shell
go build -v -o ./bin/masa-node-cli ./cmd/masa-node-cli
```

This command compiles the CLI tool and places the binary in the ./bin directory.

## Usage

To use the Masa Node CLI, navigate to the directory containing the compiled binary and execute it. The CLI provides a text-based user interface for interacting with the Masa network.

```shell
./bin/masa-node-cli
```

Upon launching, the CLI presents a menu with various options for interacting with the node and the network. These options include viewing the node's status, managing staking, and sending transactions.

### Key Features

Network Status: View the current status of the Masa network, including connected peers and dht synchronization status.

Staking Management: Manage your staking operations, including staking Masa tokens to participate in the network and viewing your current stake.

Transaction Management: Send and view transactions on the Masa Network.

## Configuration

The Masa Node CLI automatically loads environment variables from a .env file located in the root directory of the project. Ensure this file contains the necessary configurations, such as RPC_URL and BOOTNODES, for connecting to the Masa network.

Example .env file content:

```shell
BOOTNODES=/ip4/35.223.224.220/udp/4001/quic-v1/p2p/16Uiu2HAmPxXXjR1XJEwckh6q1UStheMmGaGe8fyXdeRs3SejadSa
RPC_URL=https://ethereum-sepolia.publicnode.com
ENV=test
```

## Advanced Usage

For advanced users, the CLI supports additional commands and options for deeper interaction with the network. Refer to the help menu within the CLI for a comprehensive list of commands and their descriptions.

```shell
./bin/masa-node-cli --help
```

This command displays a list of available commands and options for the Masa Node CLI.

## Conclusion

The Masa Node CLI is a powerful tool for interacting with the Masa Oracle network. By following the steps outlined in this documentation, users can effectively manage their nodes, participate in staking, and interact with the Masa Network.
