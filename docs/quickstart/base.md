---
title: 🔵 Base 
---

# Introduction

## A quick introduction to building on Base Goerli with Masa

Let’s start using Masa on the [Base Goerli Testnet](https://goerli.basescan.org/) where you will mint a Masa Green 2FA Self Sovereign SBT. Masa Green SBT is a 2FA SBT that verifies that the holder is a not bot through a phone OTP verification. The Quickstart will take you through minting a Masa Green 2FA SBT in a few easy steps. Using the Masa CLI and before you know it you will have minted a Masa Green SBT you will have verified you are not a bot!

:::tip
To complete the Quickstart you will need some **Base Goerli ETH** from a faucet such as [Coinbase](https://www.coinbase.com/faucets/base-ethereum-goerli-faucet) or [Quicknode](https://faucet.quicknode.com/base/goerli).
::: 

## Quickstart setup

Once you have some Base Goerli ETH in you wallet you will need to install the latest version of the Masa CLI. 

### Installation

```bash
npm install -g @masa-finance/masa-cli
```

```bash
  __  __                            ____   _       ___ 
 |  \/  |   __ _   ___    __ _     / ___| | |     |_ _|
 | |\/| |  / _` | / __|  / _` |   | |     | |      | | 
 | |  | | | (_| | \__ \ | (_| |   | |___  | |___   | | 
 |_|  |_|  \__,_| |___/  \__,_|    \____| |_____| |___|
                                                       
CLI: v1.8.1 Contracts: v1.4.4 SDK: v1.12.5
Arweave Endpoint: https://arweave.net:443
RPC Endpoint: https://rpc.ankr.com/eth_goerli
Network: goerli
Masa Endpoint: https://dev.middleware.masa.finance/
bash ~ %
```

:::info
[Yarn](https://developers.masa.finance/docs/developers/cli/#yarn) and [npx](https://developers.masa.finance/docs/developers/cli/#npx) are also supported, check out the instructions in the docs.
:::

### Set Base Goerli network

```bash
masa settings preset-network basegoerli
```

```bash
  __  __                            ____   _       ___ 
 |  \/  |   __ _   ___    __ _     / ___| | |     |_ _|
 | |\/| |  / _` | / __|  / _` |   | |     | |      | | 
 | |  | | | (_| | \__ \ | (_| |   | |___  | |___   | | 
 |_|  |_|  \__,_| |___/  \__,_|    \____| |_____| |___|
                                                       
Preset network 'basegoerli' set!
bash ~ %
```

:::info
The Masa CLI interacts with the Masa SDK using simple and intuitive commands that enable quick and easy development with Masa SBTs.
:::

### Get account information

```bash
masa account
```

```bash
  __  __                            ____   _       ___ 
 |  \/  |   __ _   ___    __ _     / ___| | |     |_ _|
 | |\/| |  / _` | / __|  / _` |   | |     | |      | | 
 | |  | | | (_| | \__ \ | (_| |   | |___  | |___   | | 
 |_|  |_|  \__,_| |___/  \__,_|    \____| |_____| |___|
                                                       
Address: '0xb3EAE0c0d3e09241a48485D7fDE226587A4E4461'

Network: 'basegoerli'

Logged in: false

Balances:

Native: '0.01000000'
Identity: '0'
SoulName: '0'
Green: '0'
bash ~ %
```

:::info
Transfer some Base Goerli ETH into the account address listed in the CLI.
:::

## Mint your first SBT

### Login

```bash
masa login
```

```bash
  __  __                            ____   _       ___ 
 |  \/  |   __ _   ___    __ _     / ___| | |     |_ _|
 | |\/| |  / _` | / __|  / _` |   | |     | |      | | 
 | |  | | | (_| | \__ \ | (_| |   | |___  | |___   | | 
 |_|  |_|  \__,_| |___/  \__,_|    \____| |_____| |___|
                                                       
Logging in
Signing: 
'Welcome to 🌽Masa Finance!

Login with your soulbound web3 identity to unleash the power of DeFi.

Your signature is valid till: Sat, 29 Apr 2023 20:34:09 GMT.
Challenge: fSOg1sykpKT8Pc4o0Q5yBguH9qkzDgCA'

Signature: '0xd29371c9c08e300cc526b626d760475da2388c61e2137b5a153b3d5b4c918f8e11e3b18d16bada3c9a8e7bf7cc1debb0d65f300e3930a72c4774a0e9014c64db1b'

Logged in as:
Address: '0xb3EAE0c0d3e09241a48485D7fDE226587A4E4461'
bash %
```

### Mint a Masa Green 2FA SBT

Use your phone number including the country code without spaces and dropping the zero

```bash
masa green create +12000001234
```

Enter the 2FA code sent to your phone 

```bash
  __  __                            ____   _       ___ 
 |  \/  |   __ _   ___    __ _     / ___| | |     |_ _|
 | |\/| |  / _` | / __|  / _` |   | |     | |      | | 
 | |  | | | (_| | \__ \ | (_| |   | |___  | |___   | | 
 |_|  |_|  \__,_| |___/  \__,_|    \____| |_____| |___|
                                                       
Creating Green for phone number: '+12000001234'
User ID: '00c75245-fd4a-55f9-ba99-551cfe5ddd8c'
Signer Address: '0xb3EAE0c0d3e09241a48485D7fDE226587A4E4461'
Network: 'basegoerli'

The code that has been sent to your phone number: 866469
```

### Success

Congratulations you have verified you are not a bot and now have a Masa Green SBT in your wallet!

```bash
  __  __                            ____   _       ___ 
 |  \/  |   __ _   ___    __ _     / ___| | |     |_ _|
 | |\/| |  / _` | / __|  / _` |   | |     | |      | | 
 | |  | | | (_| | \__ \ | (_| |   | |___  | |___   | | 
 |_|  |_|  \__,_| |___/  \__,_|    \____| |_____| |___|
                                                       
Creating Green for phone number: '+12000001234'
User ID: '00c75245-fd4a-55f9-ba99-551cfe5ddd8c'
Signer Address: '0xb3EAE0c0d3e09241a48485D7fDE226587A4E4461'
Network: 'basegoerli'

The code that has been sent to your phone number: 864851
Minting Green on 'basegoerli'
Waiting for transaction '0x9bb86a26955fbb840ec1ea5df6cee8d8236cd3f9ca79b230a5179885bfeb2ff7' to finalize!
Green with ID: '4' created.
Green successfully minted on 'basegoerli' with token ID: '4'
bash ~ %
```

### Verify

You can now use the CLI to verify that you have a Masa Green SBT and view its metadata

```bash
masa green list
```

```bash
  __  __                            ____   _       ___ 
 |  \/  |   __ _   ___    __ _     / ___| | |     |_ _|
 | |\/| |  / _` | / __|  / _` |   | |     | |      | | 
 | |  | | | (_| | \__ \ | (_| |   | |___  | |___   | | 
 |_|  |_|  \__,_| |___/  \__,_|    \____| |_____| |___|
                                                       
Token: 1
Token ID: 4
Metadata: {
  "name": "Masa Soulbound Green v1.0.0",
  "description": "Masa Green is a decentralized authentication solution",
  "image": "https://metadata.masa.finance/v1.0/green/green.png",
  "properties": {
    "tokenId": "4",
    "account": "0xb3EAE0c0d3e09241a48485D7fDE226587A4E4461"
  }
}
bash ~ %
```

## Whats next

You can now explore SBT use cases, guides, and developer documentation for the Masa SDK, Masa React, and Masa Identity Contracts.