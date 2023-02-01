# Masa React
 - v0.22.4 / [Exports](modules.md)

---

**🌽🌽 THIS IS BETA SOFTWARE. IT COULD LEAD TO RAPID UNSCHEDULED DISASSEMBLY. If you run into problems, please open up a new issue. 🌽🌽**

---

<!-- TOC -->

* [Setup](#setup)
* [Getting Started with masa-react](#getting-started-with-masa-react)
    * [Setup](#setup)
        * [Styles](#styles)
    * [Usage ( inside MasaProvider )](#usage--inside-masaprovider-)
        * [Example for useMasa ( Connect users wallet )](#example-for-usemasa--connect-users-wallet-)
        * [Example for masa object ( Wallet is already connected here )](#example-for-masa-object--wallet-is-already-connected-here-)
        * [For some contracts you will need some pre requisites ( Scopes )](#for-some-contracts-you-will-need-some-pre-requisites--scopes-)
        * [Current useMasa shape](#current-usemasa-shape)

<!-- TOC -->

## Setup

```bash
git clone https://github.com/masa-finance/masa-react.git

yarn 
yarn storybook
```

# Getting Started with masa-react

## Setup

First install `masa-react` in your project
`yarn add @masa-finance/masa-react`

Then import and add a provider

```typescript jsx
import {
  MasaProvider
} from "@masa-finance/masa-react";

function App() {
  return (
    <MasaProvider>
      ...
    </MasaProvider>
  );
}

```

### Styles

If you want to add our styles to your project just include this line at the very top of your file right below your imports
`import "@masa-finance/masa-react/dist/style.css";`

## Usage ( inside MasaProvider )

Import `useMasa` to have access to the `masa` object, this will let you connect with the whole interface of smart contracts and tools from `masa-sdk`

### Example for useMasa ( Connect users wallet )

```typescript jsx
import {
  useMasa
} from "@masa-finance/masa-react";

const { connect } = useMasa();

const connectionCallback = () => {
  history.push('/dashboard');
}

const connectionHandler = useCallback(() => {
  connect(options)
}, [connect, options]);

<Button
  onClick={connectionHandler}>
  Connect with Masa
</Button>

```

### Example for masa object ( Wallet is already connected here )

```typescript jsx
import {
  useMasa
} from "@masa-finance/masa-react";

const { masa } = useMasa();

const askForCreditScores = useCallback(async () => {
  const creditScores = await masa?.creditScore.list();
  console.log({ creditScores })
}, [masa]);

<Button
  onClick={askForCreditScores}>
  Show credit reports
</Button>

```

### For some contracts you will need some pre requisites ( Scopes )

You can specify which scopes you want, here goes an example of requesting the connected user to have an identity

```typescript jsx
const options = {
  scope: ['identity']
}

const connectionHandler = useCallback(() => {
  connect(options)
}, [connect, options]);

<Button
  onClick={connectionHandler}>
  Connect with Masa
</Button>
```

### Current useMasa shape

```typescript jsx
interface MasaShape {
  setProvider?: (provider: any) => void;
  provider?: any;
  isModalOpen?: boolean;
  setModalOpen?: (val: boolean) => void;
  masa?: Masa;
  isConnected?: boolean;
  loading?: boolean;
  setLoading?: (val: boolean) => void;
  walletAddress?: string | null;
  identity?: any;
  loggedIn?: boolean;
  handleLogin?: () => void;
  handleLogout?: () => void;
  handlePurchaseIdentity?: () => void;
  connect?: (options?: { scope?: string[]; callback?: Function }) => void;
  closeModal?: Function;
  scope?: string[];
  company?: string;
}
```
