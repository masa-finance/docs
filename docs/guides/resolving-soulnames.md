---
title: Resolving Soul Names
toc_max_heading_level: 4
---

# Resolving Soul Names

A soulbound domain name is a human-readable address that resolves to a user’s wallet. It is a combination of letters, numbers, and/or emojis. The Masa Protocol has minted over 200,000 .soul (e.g. vitalik.soul) and .celo (e.g. tothe🪙.celo) domain names. Developers can integrate domain resolving of .soul and .celo names to get access to over 200,000+ unique wallets on Ethereum and Celo mainnets.

## Resolving Soul Names using Masa CLI

### Install Masa CLI

This guide covers using the Masa CLI to mint a Masa Green SBT. You can use either `yarn` or `npm` for the installation.

#### Install via yarn

```bash
yarn global add @masa-finance/masa-cli
```

#### Install via npm

```bash
npm i -g @masa-finance/masa-cli
```

### Configure Masa CLI

#### Set network

Masa supports 10 networks through its CLI and SDK. Masa Green SBT is deployed on all of the following networks:

| Network        | Flag         | Contract |
|----------------|--------------|----------|
| ETH            | --ethereum   |          |
| ETH Goerli     | --goerli     |          |
| Base Mainnet   | NA           |          |
| Base Goerli    | --basegoerli |          |
| Polygon        | --polygon    |          |
| Polygon Mumbai | --mumbai     |          |
| BNB Chain      | --bsc        |          |
| BNB Testnet    | --bsctestnet |          |
| Celo           | --celo       |          |
| Celo Alfajores | --alfajores  |          |

```bash
masa settings preset-network <network flag>
```

#### Resolve on Base Goerli

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

#### Get account information

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

### Resolve from Soul Name to Address using Masa CLI

To resolve from the given name just feed the name to the CLI. The name extension can be omitted.

```bash
$ masa soul-name resolve wawa
```

```bash
  __  __                            ____   _       ___
 |  \/  |   __ _   ___    __ _     / ___| | |     |_ _|
 | |\/| |  / _` | / __|  / _` |   | |     | |      | |
 | |  | | | (_| | \__ \ | (_| |   | |___  | |___   | |
 |_|  |_|  \__,_| |___/  \__,_|    \____| |_____| |___|

0x8ba2D360323e3cA85b94c6F7720B70aAc8D37a7a
```

### Resolve from Address to Soul Names using Masa CLI

To resolve from address to soul names the CLI offers a reverse resolve method.

```bash
$ masa soul-name resolve-reverse 0x8ba2D360323e3cA85b94c6F7720B70aAc8D37a7a
```

```bash
  __  __                            ____   _       ___
 |  \/  |   __ _   ___    __ _     / ___| | |     |_ _|
 | |\/| |  / _` | / __|  / _` |   | |     | |      | |
 | |  | | | (_| | \__ \ | (_| |   | |___  | |___   | |
 |_|  |_|  \__,_| |___/  \__,_|    \____| |_____| |___|

Soul names:

h34d🌽.base
h34d.base
wawa.base
```

## Resolving Soul Names using the Masa SDK

### Install Masa SDK

This guide covers using the Masa SDK to mint an Authority SBT (ASBT) on the Base Goerli Testnet. You can use either `yarn` or `npm` for the installation.

#### Install via yarn

```bash
yarn add @masa-finance/masa-sdk --save
```

#### Install via npm

```bash
npm i @masa-finance/masa-sdk --save
```

### Configure Masa SDK

:::info
A guide how to set up the Masa SDK can be found here: [Masa SDK](../developers/sdk/README.md#usage)
:::

### Resolve from Soul Name to Address using the Masa SDK

```typescript
const address = await masa.soulName.resolve(soulName);

if (address) {
  console.log(address);
} else {
  console.error(`${soulName} does not exist!`);
}
```

### Resolve from Address to Soul Names using Masa SDK

```typescript
const [soulNames, extension] = await Promise.all([
  // get all soul names by address
  masa.soulName.loadSoulNames(address),
  // get extension for this contract
  masa.contracts.instances.SoulNameContract.extension(),
]);

if (soulNames.length > 0) {
  console.log("Soul names:", "\n");
  soulNames.forEach((soulName: string) =>
    console.log(`${soulName}${extension}`)
  );
} else {
  console.log(`No soul names for ${address}`);
}
```