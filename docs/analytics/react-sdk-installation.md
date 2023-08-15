---
title: Analytics React SDK Installation
---

## Masa Analytics React

Welcome to Masa Analytics React! This library offers a customizable, easy-to-use React component for connecting to Masa Analytics, all crafted in TypeScript.

:::info
This guide will walk you through integrating Masa Analytics React into your project. It's designed to get you up and running quickly and smoothly.
:::

### Features

- Seamless integration with any React application.
- Flexible event handling.
- Enhanced type safety and developer experience with TypeScript.

### Installation

To get started with Masa Analytics React, you can install the package using either npm or yarn.

#### Using npm

```bash
npm install @masa-finance/analytics-react
```

#### Using yarn

```bash
yarn add @masa-finance/analytics-react
```

:::tip
Ensure you have either npm or yarn installed in your development environment before proceeding.
:::

### Events Tracking and Usage

Masa Analytics React provides built-in support for tracking a variety of events. Below are detailed integration steps for each event type:

#### Page Visit Event

To send a page visit event:

```typescript
import { useMasaAnalyticsReact } from "@masa-finance/analytics-react";

const { firePageViewEvent } = useMasaAnalyticsReact({
  clientApp: "My App",
  clientName: "My Company Name",
});

const user_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
const page = "https://your-site.example.com/page1";
void firePageViewEvent(page, user_address);
```

#### Login Event

To send a login event:

```typescript
import { useMasaAnalyticsReact } from "@masa-finance/analytics-react";

const { fireLoginEvent } = useMasaAnalyticsReact({
  clientApp: "My App",
  clientName: "My Company Name",
});

const user_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
void fireLoginEvent(user_address);
```

#### Mint Event

To send a mint event:

```typescript
import { useMasaAnalyticsReact } from "@masa-finance/analytics-react";

const { fireMintEvent } = useMasaAnalyticsReact({
  clientApp: "My App",
  clientName: "My Company Name",
});

const user_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
const network = "goerli";
const contract_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
const token_name = "My SBT Project";
const ticker = "MSP";
const token_type = "SBT";

void fireMintEvent(
  user_address,
  network,
  contract_address,
  token_name,
  ticker,
  token_type
);
```

:::warning
Ensure you handle sensitive data, like user addresses, with care. Always prioritize user privacy and adhere to best practices for data handling.
:::