---
id: protocol-docker-setup
title: Docker Setup
---

This guide will help you set up and run a Masa Node using Docker ready for configuration and deployment.

## Prerequisites

Before you begin, ensure you have the following installed:

- [**Docker**](https://www.docker.com/products/docker-desktop)
- [**Docker Compose**](https://docs.docker.com/compose/install/)
- **Sepolia ETH** to get Sepolia MASA tokens from the faucet

:::info

Docker Desktop for Windows and Mac includes Docker Compose. On Linux, you may need to install it separately.

:::


### Clone the repository

```bash
git clone https://github.com/masa-finance/masa-oracle.git
```
```bash
cd masa-oracle
```

### Environment Configuration

Set up environment variables to connect your node to run your node in local bootnode configuration

:::info

This guide will configure your node as a **Local Bootnode**, for a list of network bootnodes, please refer to the [Bootnode Configuration](https://docs.masa.finance/masa-node/bootnode-configuration) bootnode configuration documentation.

:::

Create a `.env` file in the root directory with these essential variables:
```plaintext
# Default .env configuration

RPC_URL=https://ethereum-sepolia.publicnode.com
ENV=test
FILE_PATH=.
VALIDATOR=false
PORT=8080
```

:::info

For more .env options, see our [Environment Configuration Guide](https://docs.masa.finance/masa-node/environment-configuration).

:::

### Building the Docker Image

With Docker and Docker Compose installed and your `.env` file configured, build the Docker image using the following command:

```bash
docker-compose build
```

This command builds the Docker image based on the instructions in the provided `Dockerfile` and `docker-compose.yaml`.

### 4. Start the node

```bash
docker-compose up
```

You will see the following output:

```bash
#######################################
#     __  __    _    ____    _        #
#    |  \/  |  / \  / ___|  / \       #
#    | |\/| | / _ \ \___ \ / _ \      #
#    | |  | |/ ___ \ ___) / ___ \     #
#    |_|  |_/_/   \_\____/_/   \_\    #
#                                     #
#######################################

Multiaddress:        /ip4/192.168.1.8/udp/4001/quic-v1/p2p/16Uiu2HAmDXWNV9RXVoRsbt9z7pFSsKS2KdpN7HHFVLdFZmS7iCvo
IP Address:          /ip4/127.0.0.1/udp/4001/quic-v1
Public Key:          0x5dA36a3eB07fd1624B054b99D6417DdF2904e826
Is Staked:           false
Is Validator:        false
Is TwitterScraper:   false
Is DiscordScraper:   false
Is TelegramScraper:  false
```
:::tip

You now have a running node in **Local Bootnode** configuration

:::

## Masa Protocol Configuration
You can now configure your node to start scraping data as a worker, to fetch data from the network or to start participating in the network as a validator.

### Configure your node

#### Stake your node
:::info

The Masa Protocol currently supports staking on **Sepolia only**.

:::

After starting the node, you must stake MASA tokens to participate in the network; the node comes with a faucet to get MASA tokens you need Sepolia ETH in your wallet to get Sepolia MASA tokens from the faucet.

## Masa Protocol Configuration
You can now configure your node to start scraping data as a worker, to fetch data from the network or to start participating in the network as a validator.

### Configure your node

#### Stake your node
:::info

The Masa Protocol currently supports staking on **Sepolia only**.

:::

After starting the node, you must stake MASA tokens to participate in the network; the node comes with a faucet to get MASA tokens you need Sepolia ETH in your wallet to get Sepolia MASA tokens from the faucet.

1. Get your node's public key from the logs.
2. Send Sepolia ETH to your node's public key address.
3. Run the `make faucet` command to get Sepolia MASA:

   ```bash
   docker-compose run --rm masa-node /usr/bin/masa-node --faucet
   ```

4. Run the `make stake` command to stake your node:

   ```bash
   docker-compose run --rm masa-node /usr/bin/masa-node --stake 1000
   ```

5. Run the container in detached mode:

   ```bash
   docker-compose up -d
   ```

6. Check the logs to verify the node is running properly:

   ```bash
   docker-compose logs -f masa-node
   ```

## Accessing Your Node Keys

The node generates keys that are stored in the `/home/masa/.masa/` inside the Docker container, ensuring that your keys are safely stored on your host machine.

1. Open a shell inside the container:

   ```bash
   docker-compose exec masa-node /bin/sh
   ```

2. Navigate to the keys directory:

   ```bash
   cd /home/masa/.masa/
   ```

3. List the keys:

   ```bash
   ls -la
   ```

4. Copy the keys to your host machine:

   ```bash
   cp -r /home/masa/.masa/ /path/to/your/host/machine/
   ```

## Custom configuration

You can customize your node's configuration by modifying the `.env` file inside the Docker container. Follow these steps to make changes:

1. SSH into the running container:
   ```bash
   docker-compose exec masa-node /bin/sh
   ```

2. Navigate to the directory containing the `.env` file:
   ```bash
   cd /home/masa
   ```

3. Edit the `.env` file using a text editor like `nano` or `vi`:
   ```bash
   nano .env
   ```

4. Make your desired changes to the `.env` file. You can modify existing variables or add new ones as needed.

5. Save the changes and exit the text editor.

6. Exit the container:
   ```bash
   exit
   ```

7. Restart the container to apply the changes:
   ```bash
   docker-compose down
   docker-compose up -d
   ```

After following these steps, your node will restart with the updated configuration from the modified `.env` file.

:::tip
Remember to consult the [Environment Configuration Guide](https://docs.masa.finance/masa-node/environment-configuration) for a list of available environment variables and their purposes.
:::

## Configure a Twitter Scraper

To set up your node as a Twitter scraper, you need to add a `twitter_cookies.json` file to the container. For more information on obtaining Twitter cookies refer to our [Twitter Scraper Configuration Guide](https://docs.masa.finance/masa-node/twitter-scraper-configuration).

Follow these steps:

1. Prepare your `twitter_cookies.json` file on your local machine.

2. Copy the file into the running container:
   ```bash
   docker cp /path/to/your/twitter_cookies.json masa-node:/home/masa/.masa/twitter_cookies.json
   ```

3. SSH into the running container:
   ```bash
   docker-compose exec masa-node /bin/sh
   ```

4. Verify the file has been copied correctly:
   ```bash
   ls -l /home/masa/.masa/twitter_cookies.json
   ```

5. Ensure the file has the correct permissions:
   ```bash
   chmod 600 /home/masa/.masa/twitter_cookies.json
   ```

6. Exit the container:
   ```bash
   exit
   ```

7. Modify your `.env` file to enable Twitter scraping:
   ```bash
   docker-compose exec masa-node /bin/sh -c "echo 'TWITTER_SCRAPER=true' >> /home/masa/.env"
   ```

8. Restart the container to apply the changes:
   ```bash
   docker-compose down
   docker-compose up -d
   ```

9. Your node should now be configured as a Twitter scraper. You can verify this by checking the logs:
   ```bash
   docker-compose logs -f masa-node
   ```

10. Look for a line indicating that the Twitter scraper is active:
    ```bash
    Is TwitterScraper:   true
    ```

:::warning
Ensure that your `twitter_cookies.json` file contains valid Twitter credentials. Using invalid or expired credentials may result in the scraper failing to function properly.
:::

:::tip
For more information on obtaining Twitter cookies and the format of the `twitter_cookies.json` file, refer to our [Twitter Scraper Configuration Guide](https://docs.masa.finance/masa-node/twitter-scraper-configuration).
:::