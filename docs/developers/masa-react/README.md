# Masa React
 - v0.15.8 / [Exports](modules.md)

---

**🌽🌽 THIS IS BETA SOFTWARE. IT COULD LEAD TO RAPID UNSCHEDULED DISASSEMBLY. If you run into problems, please open up a new issue. 🌽🌽**

---

<!-- TOC -->

* [Setup](#setup)

<!-- TOC -->

## Setup

```
git clone https://github.com/masa-finance/masa-react.git

yarn 
yarn storybook
```

# Getting Started with masa-react

## Setup

First install `masa-react` in your project
`yarn add @masa-finance/masa-react`

Then import and add a provider

```

import { MasaProvider } from "@masa-finance/masa-react";

...

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

```
import { useMasa } from "@masa-finance/masa-react";

...

const { connect } = useMasa();

const connectionCallback = () => {
    history.push('/dashboard');
}

const connectionHandler = useCallback(() => {
    connect(options)
}, [connect, options]);

...

<Button onClick={connectionHandler}>Connect with Masa</Button>

```

### Example for masa object ( Wallet is already connected here )

```
import { useMasa } from "@masa-finance/masa-react";

...

const { masa } = useMasa();

const askForCreditReports = useCallback(() => {
    const creditReports = await masa?.creditScore.list();
    console.log({creditReports})
}, [masa]);

...

<Button onClick={askForCreditReports}>Show credit reports</Button>

```

### For some contracts you will need some pre requisites ( Scopes )
You can specify which scopes you want, here goes an example of requesting the connected user to have an identity
```

const options = {
    scope: ['identity'];
}

const connectionHandler = useCallback(() => {
    connect(options)
}, [connect, options]);

...

<Button onClick={connectionHandler}>Connect with Masa</Button>

```

### Current useMasa shape

```
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
```
