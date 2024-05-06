**# Masa SDK v3.36.1** • [**Docs**](globals.md)

***

# Masa SDK

<!-- TOC -->

- [Masa SDK](#masa-sdk)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Interface](#interface)
  - [Configuration](#configuration)

<!-- TOC -->

## Installation

yarn  
`yarn add @masa-finance/masa-sdk --save`

npm  
`npm i @masa-finance/masa-sdk --save`

## Usage

Browser:

```typescript
import { Masa } from "@masa-finance/masa-sdk";
import { providers } from "ethers";

// with metamask
const provider = new providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

// by default Masa SDK will assume the provider points to ethereum mainnet and
// will load contracts accordingly. If you plan to connect to a different network
// the networkName must be specified i.e. like this: networkName: "goerli"

export const masa = new Masa({
  signer,
  // networkName: "goerli",
});
```

Node:

```typescript
import { Masa } from "@masa-finance/masa-sdk";
import { providers, Wallet } from "ethers";

const provider = new providers.JsonRpcProvider("your blockchain rpc endpoint");
const wallet = new Wallet("your private key", provider);

// by default Masa SDK will assume the provider points to ethereum mainnet and
// will load contracts accordingly. If you plan to connect to a different network
// the networkName must be specified i.e. like this: networkName: "goerli"

export const masa = new Masa({
  signer: wallet,
  // networkName: "goerli",
});
```

## Interface

For a detailed interface description see [Masa](docs/classes/Masa.md)

## Configuration

| Key              | Type                             | Description                                                                           | Default Value                          |
| ---------------- | -------------------------------- | ------------------------------------------------------------------------------------- | -------------------------------------- |
| cookie           | `string`                         | Cookie value. Don't set this manually unless you know what you do!                    |                                        |
| wallet           | `ethers.Signer or ethers.Wallet` | The Wallet instance to use when interacting with the Blockchain.                      | "wallet with a random private key"     |
| apiUrl           | `string`                         | The API Endpoint of the Masa Infrastructure for `dev`, `test`, `beta` and production. | "https://dev.middleware.masa.finance/" |
| environment      | `string`                         | The environment to use `dev`, `test`, `beta`, `production`.                           | "dev"                                  |
| network          | `string`                         | The network name ie. "goerli".                                                        | "goerli"                               |
| arweave.host     | `string`                         | The arweave host to use for loading metadata.                                         | "arweave.net"                          |
| arweave.port     | `number`                         | The arweave port to use for loading metadata.                                         | 443                                    |
| arweave.protocol | `string`                         | The arweave protocol to use for loading metadata.                                     | "https"                                |
| arweave.logging  | `boolean`                        | Turn arweave logging on or off.                                                       | false                                  |

```typescript
new Masa({
  // cookie value for connecting with the backend
  cookie: "my fancy cookie",
  // wallet object is always mandatory
  wallet,
  // api endpoint to the masa infrastructure
  apiUrl: "https://middleware.masa.finance",
  // masa environment dev, test, beta, prod
  environment: "prod",
  // network name to use goerli, mainnet
  network: "goerli",
  // arweave endpoint to use
  arweave: {
    host: "arweave.net",
    port: 443,
    protocol: "https",
    logging: false,
  },
});
```
