# Masa Analytics React
 / [Exports](modules.md)

# Masa Analytics React

A customizable, easy-to-use React component for connecting to Masa Analytics, written in TypeScript.

## Features

- Easy integration with any React application
- Customizable event handling
- Written in TypeScript for better type safety and developer experience

## Events Tracking and Usage

This package provides built-in support for tracking different types of events:

- [Page Visit Event](#page-visit-event)
- [Wallet Connect Event](#wallet-connect-event)
- [Login Event](#login-event)
- [Mint Event](#mint-event)
- [Add Liquidity Event](#add-liquidity-event)
- [Remove Liquidity Event](#remove-liquidity-event)
- [Farm Event](#farm-event)
- [Swap Event](#swap-event)
- [Bridge Event](#bridge-event)
- [Trade Event](#trade-event)
- [Claim Event](#claim-event)

These events can be easily integrated into your application to gather insights about user interactions.

### Page Visit Event

`firePageViewEvent` function is provided to send a page visit event to your API. It takes the following parameters:

- `page`: A unique identifier of the page visited.
- `user_address`: The users wallet address.

#### Usage

```typescript
import { useMasaAnalyticsReact } from "@masa-finance/analytics-react";

const { firePageViewEvent } = useMasaAnalyticsReact({
  clientApp: "My App",
  clientName: "My Company Name",
});

// Track a page visit event
const user_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
const page = "https://your-site.example.com/page1";

void firePageViewEvent(page, user_address);
```

### Wallet Connect Event

`fireConnectWalletEvent` function is provided to send a wallet connect wallet event to your API. It takes the following parameters:

- `user_address`: The users wallet address.
- `connector`: The users wallet connector. e.g "metamask" "walletconnect"

#### Usage

```typescript
import { useMasaAnalyticsReact } from "@masa-finance/analytics-react";

const { fireConnectWalletEvent } =
  useMasaAnalyticsReact({
    clientApp: 'My App',
    clientName: 'My Company Name',
  });

// Track a wallet connect event
const user_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
const connector = "metamask"

void fireConnectWalletEvent({ user_address: user_address, connector: connector });
```

### Login Event

`fireLoginEvent` function is provided to send a login event to your API. It takes the following parameters:

- `user_address`: The users wallet address.

#### Usage

```typescript
import { useMasaAnalyticsReact } from "@masa-finance/analytics-react";

const { fireLoginEvent } = useMasaAnalyticsReact({
  clientApp: "My App",
  clientName: "My Company Name",
});

// Track a login event
const user_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";

void fireLoginEvent({ user_address: user_address });
```

### Mint Event

`fireMintEvent` function is provided to send a mint event to your API. It takes the following parameters:

- `user_address`: The users wallet address.
- `network`: The blockchain network of the mint operation.
- `contract_address`: The address of the contract of the mint operation.
- `token_name`: The token name of the contract of the mint operation.
- `ticker`: The ticker of the contract of the mint operation.
- `token_type`: The type of the contract of the mint operation.

#### Usage

```typescript
import { useMasaAnalyticsReact } from "@masa-finance/analytics-react";

const { fireMintEvent } = useMasaAnalyticsReact({
  clientApp: "My App",
  clientName: "My Company Name",
  clientId: '1234-5678-9012-4567'
});

// Track a mint event
const user_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
const network = "goerli";
const contract_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
const token_name = "My SBT Project";
const ticker = "MSP";
const token_type = "SBT";

void fireMintEvent({
  user_address: user_address,
  network: network,
  contract_address: contract_address,
  token_name: token_name,
  ticker: ticker,
  token_type: token_type
  });
```

### Add liquidity Event

`fireEvent` function is provided to send a custom event to your API. It takes the following parameters:

- `user_address`: The users wallet address.
- `network`: The blockchain network of the add liquidity operation.
- `contract_address`: The address of the contract of the add liquidity operation.
- `asset_amount`: The amount of the primary asset being added to the liquidity pool.
- `asset_ticker`: The ticker of the primary asset being added to the liquidiy pool.

#### Usage

```typescript
import { useMasaAnalyticsReact } from "@masa-finance/analytics-react";

const { fireEvent } = useMasaAnalyticsReact({
  clientApp: "My App",
  clientName: "My Company Name",
  clientId: '1234-5678-9012-4567'
});

// Track an add liquidity event
const user_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
const network = "goerli";
const contract_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
const asset_amount = "1.20";
const asset_ticker = "ETH";

void fireEvent( "addLiquidity" , {
  user_address: user_address,
  network: network,
  contract_address: contract_address,
  asset_amount: asset_amount,
  asset_ticker: asset_ticker
  });
```

### Remove liquidity Event

`fireEvent` function is provided to send a custom event to your API. It takes the following parameters:

- `user_address`: The users wallet address.
- `network`: The blockchain network of the add liquidity operation.
- `contract_address`: The address of the contract of the add liquidity operation.
- `asset_amount`: The amount of the primary asset being added to the liquidity pool.
- `asset_ticker`: The ticker of the primary asset being added to the liquidiy pool.

#### Usage

```typescript
import { useMasaAnalyticsReact } from "@masa-finance/analytics-react";

const { fireEvent } = useMasaAnalyticsReact({
  clientApp: "My App",
  clientName: "My Company Name",
  clientId: '1234-5678-9012-4567'
});

// Track a remove liquidity event
const user_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
const network = "goerli";
const contract_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
const asset_amount = "1.20";
const asset_ticker = "ETH";

void fireEvent( "removeLiquidity" , {
  user_address: user_address,
  network: network,
  contract_address: contract_address,
  asset_amount: asset_amount,
  asset_ticker: asset_ticker
  });
```

### Farm Event

`fireEvent` function is provided to send a custom event to your API. It takes the following parameters:

- `user_address`: The users wallet address.
- `network`: The blockchain network of the farm operation.
- `contract_address`: The address of the contract of the farm operation.
- `asset_amount`: The amount of the primary asset being added to the farming pool.
- `asset_ticker`: The ticker of the primary asset being added to the farming pool.

#### Usage

```typescript
import { useMasaAnalyticsReact } from "@masa-finance/analytics-react";

const { fireEvent } = useMasaAnalyticsReact({
  clientApp: "My App",
  clientName: "My Company Name",
  clientId: '1234-5678-9012-4567'
});

// Track a farm event
const user_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
const network = "goerli";
const contract_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
const asset_amount = "1.20";
const asset_ticker = "ETH";
void fireEvent( "farm" , {
  user_address: user_address,
  network: network,
  contract_address: contract_address,
  asset_amount: asset_amount,
  asset_ticker: asset_ticker
  });
```

### Swap Event

`fireEvent` function is provided to send a custom event to your API. It takes the following parameters:

- `user_address`: The users wallet address.
- `network`: The blockchain network of the swap operation.
- `contract_address`: The address of the contract of the swap operation.
- `asset_amount`: The amount of the primary asset being swapped.
- `asset_ticker`: The ticker of the primary asset being swapped.

#### Usage

```typescript
import { useMasaAnalyticsReact } from "@masa-finance/analytics-react";

const { fireEvent } = useMasaAnalyticsReact({
  clientApp: "My App",
  clientName: "My Company Name",
  clientId: '1234-5678-9012-4567'
});

// Track a swap event
const user_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
const network = "goerli";
const contract_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
const asset_amount = "1.20";
const asset_ticker = "ETH";

void fireEvent( "swap" , {
  user_address: user_address,
  network: network,
  contract_address: contract_address,
  asset_amount: asset_amount,
  asset_ticker: asset_ticker
  });
```

### Bridge Event

`fireEvent` function is provided to send a custom event to your API. It takes the following parameters:

- `user_address`: The users wallet address.
- `network`: The blockchain network of the bridge operation.
- `contract_address`: The address of the contract of the bridge operation.
- `asset_amount`: The amount of the primary asset being bridged.
- `asset_ticker`: The ticker of the primary asset being bridged.

#### Usage

```typescript
import { useMasaAnalyticsReact } from "@masa-finance/analytics-react";

const { fireEvent } = useMasaAnalyticsReact({
  clientApp: "My App",
  clientName: "My Company Name",
  clientId: '1234-5678-9012-4567'
});

// Track a bridge event
const user_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
const network = "goerli";
const contract_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
const asset_amount = "1.20";
const asset_ticker = "ETH";

void fireEvent( "bridge" , {
  user_address: user_address,
  network: network,
  contract_address: contract_address,
  asset_amount: asset_amount,
  asset_ticker: asset_ticker
  });
```

### Trade Event

`fireEvent` function is provided to send a custom event to your API. It takes the following parameters:

- `user_address`: The users wallet address.
- `network`: The blockchain network of the trade operation.
- `contract_address`: The address of the contract of the trade operation.
- `asset_amount`: The amount of the primary asset being traded.
- `asset_ticker`: The ticker of the primary asset being traded.

#### Usage

```typescript
import { useMasaAnalyticsReact } from "@masa-finance/analytics-react";

const { fireEvent } = useMasaAnalyticsReact({
  clientApp: "My App",
  clientName: "My Company Name",
  clientId: '1234-5678-9012-4567'
});

// Track a trade event
const user_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
const network = "goerli";
const contract_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
const asset_amount = "1.20";
const asset_ticker = "ETH";

void fireEvent( "trade" , {
  user_address: user_address,
  network: network,
  contract_address: contract_address,
  asset_amount: asset_amount,
  asset_ticker: asset_ticker
  });
```

### Claim Event

`fireEvent` function is provided to send a custom event to your API. It takes the following parameters:

- `user_address`: The users wallet address.
- `network`: The blockchain network of the claim operation.
- `contract_address`: The address of the contract of the claim operation.
- `asset_amount`: The amount of the asset being claimed.
- `asset_ticker`: The ticker of the asset being claimed.

#### Usage

```typescript
import { useMasaAnalyticsReact } from "@masa-finance/analytics-react";

const { fireEvent } = useMasaAnalyticsReact({
  clientApp: "My App",
  clientName: "My Company Name",
  clientId: '1234-5678-9012-4567'
});

// Track a claim event
const user_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
const network = "goerli";
const contract_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
const asset_amount = "1.20";
const asset_ticker = "ETH";

void fireEvent( "claim" , {
  user_address: user_address,
  network: network,
  contract_address: contract_address,
  asset_amount: asset_amount,
  asset_ticker: asset_ticker
  });
```

### Extending to Include Additional Event Data

You can extend the tracking function to collect additional event data using the `additionalEventData` field as shown in this example. In this example we want to track and log the transaction hash and the protocol fee for making the swap so we can track swap revenue in Masa Analytics. `additionalEventData` can take any information you want to add for future reference or running custom analytics with Masa. 

```typescript
import { useMasaAnalyticsReact } from "@masa-finance/analytics-react";

const { fireEvent } = useMasaAnalyticsReact({
  clientApp: "My App",
  clientName: "My Company Name",
  clientId: '1234-5678-9012-4567'
});

// Track a swap event with additional data
const user_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
const network = "goerli";
const contract_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
const asset_amount = "1.20";
const asset_ticker = "ETH";

void fireEvent( "swap" , {
  user_address: user_address,
  network: network,
  contract_address: contract_address,
  asset_amount: asset_amount,
  asset_ticker: asset_ticker,
  additionalEventData: {
    transactionHash: "0x83138032f1e7bee64fccd15bbed403f6b875c47641f6b203cd59dfa9b7cf1b4a",
    fee: "0.12",
    fee_asset: "ETH"
  }
});
```

These events can be used to monitor user interactions with your website and app, helping you make data-driven decisions and improve the user experience.

## Installation

You can install the `@masa-finance/analytics-react` package using either npm or yarn:

### Using npm

```bash
npm install @masa-finance/analytics-react
```

### Using yarn

```bash
yarn add @masa-finance/analytics-react
```

## Publishing to npm

Before publishing to npm, ensure that you have all the required dependencies installed:

```bash
npm install
```

Next, build the package:

```bash
npm run build
```

Now, you should see a `dist` folder containing the compiled JavaScript files.

To publish the package to npm, first log in to your npm account using the command line:

```bash
npm login
```

Enter your username, password, and email when prompted.

Finally, publish the package:

```bash
npm publish
```

Your package is now published to npm and can be installed and used in other projects.

## Contributing

We welcome contributions from the community! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a branch with a descriptive name related to the issue or feature you're working on.
3. Make your changes and commit them with clear and concise commit messages.
4. Create a pull request, explaining the changes you made and their purpose.

For bug reports and feature requests, please [create an issue](https://github.com/masa-finance/analytics-react/issues) on GitHub.

## License

`analytics-react` is released under the [MIT License](LICENSE).
