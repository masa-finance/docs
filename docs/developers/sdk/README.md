# Masa SDK
 / [Exports](modules.md)

## Installation

yarn  
`yarn add @masa-finance/masa-sdk --save`

nom
`npm i @masa-finance/masa-sdk --save`

### Usage

Browser:

```typescript
import { Masa } from "@masa-finance/masa-sdk";
import { ethers } from "ethers";

// with metamask
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

export const masa = new Masa({ wallet: signer });
```

Node:

```typescript
import { Masa } from "@masa-finance/masa-sdk";
import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider(
  "your blockchain rpc endpoint"
);

const wallet = new ethers.Wallet("your private key", provider);

export const masa = new Masa({ wallet });

```

### Interface

For a detailed interface description see [Masa](docs/classes/Masa.md)

### Config

| Key              | Type                             | Description                                                                           | Default Value                             |
|------------------|----------------------------------|---------------------------------------------------------------------------------------|-------------------------------------------|
| cookie           | `string`                         | Cookie value. Don't set this manually unless you know what you do!                    |                                           |
| wallet           | `ethers.Signer or ethers.Wallet` | The Wallet instance to use when interacting with the Blockchain.                      | "wallet with a random private key"        |
| apiUrl           | `string`                         | The API Endpoint of the Masa Infrastructure for `dev`, `test`, `beta` and production. | "https://dev.middleware.masa.finance/"    | 
| environment      | `string`                         | The environment to use `dev`, `test`, `beta`, `production`.                           | "dev"                                     |
| network          | `string`                         | The network name ie. "goerli".                                                        | "goerli"                                  |
| arweave.host     | `string`                         | The arweave host to use for loading metadata.                                         | "arweave.net"                             |
| arweave.port     | `number`                         | The arweave port to use for loading metadata.                                         | 443                                       |
| arweave.protocol | `string`                         | The arweave protocol to use for loading metadata.                                     | "https"                                   |
| arweave.logging  | `boolean`                        | Turn arweave logging on or off.                                                       | false                                     |

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
