# Masa React
 / [Exports](modules.md)

<!-- TOC -->
  * [Getting Started with masa-react](#getting-started-with-masa-react)
    * [Installation](#installation)
    * [Styles](#styles)
    * [Setup Storybook](#setup-storybook)
  * [Usage ( inside MasaProvider )](#usage--inside-masaprovider-)
    * [Example for useMasa ( Connect users wallet )](#example-for-usemasa--connect-users-wallet-)
    * [Example for masa object ( Wallet is already connected here )](#example-for-masa-object--wallet-is-already-connected-here-)
    * [For some contracts you will need some pre requisites ( Scopes )](#for-some-contracts-you-will-need-some-pre-requisites--scopes-)
  * [Current useMasa shape](#current-usemasa-shape)
<!-- TOC -->

## Getting Started with masa-react

### Installation

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

### Setup Storybook

```bash
git clone https://github.com/masa-finance/masa-react.git

yarn 
yarn storybook
```

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
  Connect
  with
  Masa
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
  Show
  credit
  reports
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
  Connect
  with
  Masa
</Button>
```

## Current useMasa shape

```typescript
export interface MasaShape {
  children?: React.ReactNode;

  // masa
  masa?: Masa;
  // verbose flag
  verbose?: boolean;

  // global loading
  isLoading?: boolean;

  // global connect
  connect?: (options?: {
    scope?: string[];
    callback?: () => void
  }) => void;

  // general config
  scope?: string[];
  areScopesFullfiled?: boolean;
  company?: string;

  // provider
  provider?: Wallet | Signer;
  setProvider?: (provider?: Wallet | Signer) => void;

  // modal
  isModalOpen?: boolean;
  setModalOpen?: (val: boolean) => void;
  closeModal?: (forceCallback?: boolean) => void;
  forcedPage?: string | null;
  setForcedPage?: (page: string | null) => void;
  openMintSoulnameModal?: (callback?: () => void) => void;
  openMintMasaGreen?: (callback?: () => void) => void;
  modalSize?: {
    width: number;
    height: number
  } | null;
  useModalSize?: (size: {
    width: number;
    height: number
  }) => void;

  // wallet
  walletAddress?: string;
  isWalletLoading?: boolean;
  hasWalletAddress?: boolean;

  // identity
  identity?: {
    identityId?: BigNumber;
    address?: string;
  };
  isIdentityLoading?: boolean;
  handlePurchaseIdentity?: () => Promise<boolean | undefined>;
  handlePurchaseIdentityWithSoulname?: (
    paymentMethod: PaymentMethod,
    soulname: string,
    registrationPrice: number
  ) => Promise<boolean>;
  reloadIdentity?: () => void;

  // session
  isLoggedIn?: boolean;
  isSessionLoading?: boolean;
  handleLogin?: () => void;
  handleLogout?: (logoutCallback?: () => void) => Promise<void>;

  // credit scores
  creditScores?: {
    tokenId: BigNumber;
    tokenUri: string;
    metadata?: ICreditScore;
  }[];
  isCreditScoresLoading?: boolean;
  handleCreateCreditScore?: () => Promise<boolean | undefined>;
  reloadCreditScores?: () => void;

  // soul names
  soulnames?: SoulNameDetails[];
  isSoulnamesLoading?: boolean;
  reloadSoulnames?: () => void;

  // greens
  greens?: {
    tokenId: BigNumber;
    tokenUri: string;
    metadata?: IGreen;
  }[];
  isGreensLoading?: boolean;
  handleGenerateGreen?: (
    phoneNumber: string
  ) => Promise<GenerateGreenResult | undefined>;
  handleCreateGreen?: (
    phoneNumber: string,
    code: string
  ) => Promise<VerifyGreenResult | undefined>;
  reloadGreens?: () => void;

  // network
  currentNetwork?: Network;
  SupportedNetworks?: Partial<{ [index in NetworkName]: Network }>;
  switchNetwork?: (networkName: NetworkName) => void;
  forceNetwork?: NetworkName;
}
```
