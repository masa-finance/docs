---
title: JS Script Installation
---

## Masa Analytics Integration Guide

:::info
This guide will instruct you how to integrate Masa Analytics into your website. We’ll walk you through how to install Masa Analytics React code into your Website’s HTML or Google Tag manager using our JS Script and CDN. It's designed to get you up and running quickly and easily.
:::

### Get a `client_id`

:::info
A `client_id` will be provided to you during your Masa Analytics on-boarding. Please contact **help@masa.finance** or reach out to us at our #developers channel on **Discord** if you need a ClientID.
:::

:::info
If you’re installing Masa Analytics directly into your Website HTML follow the steps below. If you’re installing Masa Analytics into your Google Tag Manager scroll down.
:::

## Website HTML Integration

### Step 1: Install the Masa Analytics Tracking Script​

Copy and paste the Masa Analytics initialization script into the `<header>` section of your website's HTML. This script will load the CDN-hosted tracking code and set up basic page view tracking.

```html
<!-- Include this script in your HTML -->
<script
  type="application/javascript"
  src="https://cdn.jsdelivr.net/npm/@masa-finance/analytics-sdk@latest/dist/browser/masa-analytics.min.js"
></script>
<script>
  var masaAnalytics = new MA.MasaAnalytics({
    clientId: "YOUR_CLIENT_ID",
  });
</script>
```

### Step 2: Track `pageView` events

After installing the tacking script in Step 1, we can create a new script to trigger each time a user loads a page to fire pageView events. This will work in a vanilla JS environment, but you will see **React Router** and **Vue Router** examples below.

```javascript
<script>
  window.onload = function () {
    var page = window.location.href;

    // Track PageView event
    masaAnalytics.firePageViewEvent({ page: page });

    function trackPageViewForSPA() {
      var updatedPageUrl = window.location.href;
      masaAnalytics.firePageViewEvent({ page: updatedPageUrl });
    }

    // This event is triggered when the route changes in many SPAs
    window.addEventListener("popstate", trackPageViewForSPA);
  };
</script>
```

### Vue Router

You will need to firstly add this script to your `index.html`

```html
<script>
  window.trackPageViewForSPA = function () {
    console.log("Tracking page view:", window.location.href);
    var page = window.location.href;

    // Track PageView event
    masaAnalytics.firePageViewEvent({ page });
    // Here, you can invoke your tracking logic, e.g., masaAnalytics.firePageViewEvent(...)
  };
</script>
```

Secondly, you will need to update your router config file to include the `router.afterEach(())` code.

```javascript
import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/HelloWorld.vue"; // Example route component

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // other routes...
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach(() => {
  if (window.trackPageViewForSPA) {
    window.trackPageViewForSPA();
  }
});

export default router;
```

### React Router


You will need to firstly add this script to your `index.html`

```html
<script>
  window.trackPageViewForSPA = function () {
    console.log("Tracking page view:", window.location.href);
    var page = window.location.href;

    // Track PageView event
    masaAnalytics.firePageViewEvent({ page });
    // Here, you can invoke your tracking logic, e.g., masaAnalytics.firePageViewEvent(...)
  };
</script>
```
Secondly, you will need to set up a `useEffect` with `useLocation` to fire the page view tracking whenever the page changes.

```javascript
const location = useLocation();

useEffect(() => {
  // Track the initial page view
  window.trackPageViewForSPA();
}, [location]); // Re-run the effect only if the location changes
```

:::info
Please jump to Step 3 to continue installing and configuring Masa Analytics into your Website HTML.
:::

## Google Tag Manager Integration

### Step 1: Google Tag Manager Integration​

Go to Google Tag Manager (GTM) and create a new tag.
Choose the 'Custom HTML' tag type and paste the Masa Analytics initialization script.

```html
<!-- Include this script in your HTML -->
<script
  type="application/javascript"
  src="https://cdn.jsdelivr.net/npm/@masa-finance/analytics-sdk@latest/dist/browser/masa-analytics.min.js"
></script>
<script>
  var masaAnalytics = new MA.MasaAnalytics({
    clientId: "YOUR_CLIENT_ID",
  });
</script>
<script>
  window.onload = function () {
    var page = window.location.href;

    // Track PageView event
    masaAnalytics.firePageViewEvent({ page: page });

    function trackPageViewForSPA() {
      var updatedPageUrl = window.location.href;
      masaAnalytics.firePageViewEvent({ page: updatedPageUrl });
    }

    // This event is triggered when the route changes in many SPAs
    window.addEventListener("popstate", trackPageViewForSPA);
  };
</script>
```

### Step 2: Set Up Triggers

**Set up triggers**:

- **All Pages**: To track all page views.
- **Page Views**: For tracking specific page views.
- **History Changes**: Useful for Single Page Applications (SPAs) to track route changes.

<br/>

:::info
We strongly recommend using the React SDK to track `connectWallet`, `trackCustomEvent`, `login`, `mint`, and `custom` events in your React app
:::

### Step 3: Tracking `trackCustomEvent` Event

To track specific events on your website (eg clicks or functions being called), you can add the following piece of code to the place you want to track the event. The first example is a Vue example, so you would place this in your Vue component, but this will work with any javascript framework. All that is required is the `window.masaAnalytics` object, and you must define an `eventName` at the minimum, but have the option to add `additionalEventData`. If you aren't using `additionalEventData` you must set it to an empty object. Examples are shown below

```javascript
  mounted() {
    // Access the global masaAnalytics instance
    if (window.masaAnalytics) {
      console.log('masaAnalytics is available');
      // You can now use window.masaAnalytics here
    } else {
      console.log('masaAnalytics is not defined');
    }
  },
  methods: {
    handleCliPluginsHeaderClick() {
      console.log('CLI Plugins header was clicked!');
      window.masaAnalytics.trackCustomEvent({eventName: 'handleCliPluginsHeaderClick', additionalEventData: {property1: 23213, property2: 'whatever'}})
      // Add any additional logic for when the header is clicked
    }
  }
```

Empty `additionalEventData` object example

```javascript
window.masaAnalytics.trackCustomEvent({
  eventName: "handleCliPluginsHeaderClick",
  additionalEventData: {},
});
```

### Step 4: Tracking `connectWallet` Event

To track the `connectWallet` event, you'll need to extract the Ethereum address from the connected wallet. This works with the window.ethereum object out of the box. If you want to call this with a button click, you would need to make sure your button has the id of `connectWalletBtn` or else you can call this on page load. The first two examples are demonstrations of how it can be done with Vanilla JS. The third example is a way it can be done with Vue.

```html
<script>
  document.addEventListener("DOMContentLoaded", (event) => {
    document
      .getElementById("connectWalletBtn")
      .addEventListener("click", handleConnectWallet);

    async function handleConnectWallet() {
      console.log("handleConnectWallet");
      const address = await MA.connectMetamask(masaAnalytics);
      // Handle the address
    }
  });
</script>
```

```html
<script>
  window.onload = function () {
    var page = window.location.href;

    // Track PageView event
    masaAnalytics.firePageViewEvent({ page: page });

    function trackPageViewForSPA() {
      var updatedPageUrl = window.location.href;
      masaAnalytics.firePageViewEvent({ page: updatedPageUrl });
    }

    // This event is triggered when the route changes in many SPAs
    window.addEventListener("popstate", trackPageViewForSPA);

    async function handleConnectWallet() {
      console.log("handleConnectWallet");
      const address = await MA.connectMetamask(masaAnalytics);
      // Handle the address
    }

    handleConnectWallet();
  };
</script>
```

```javascript
<script>
export default {
  name: "ConnectWalletComponent",
  mounted() {
    // Check if masaAnalytics is available
    if (window.masaAnalytics) {
      console.log("masaAnalytics is available");
      // Optionally log the masaAnalytics object and user address
      console.log(window.masaAnalytics);
      console.log(window.masaAnalytics.userAddress);
    } else {
      console.log("masaAnalytics is not defined");
    }
  },
  methods: {
    async handleConnectWallet() {
      console.log("handleConnectWallet");
      // Implement your method to connect the wallet here
      const user_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
      const wallet_type = "metamask";
      // Track the connectWallet event
      await window.masaAnalytics.fireConnectWalletEvent({
        user_address,
        wallet_type,
        additionalEventData: {
          appName: "YourAppName",
          property1: "value1",
          property2: "value2",
        },
      });
    },
  },
};
</script>
```

### Step 5: Tracking `bridge` Event

To track bridge events, such as when users transfer assets between networks, you can utilize the masaAnalytics object. This is particularly useful for applications that involve cross-chain operations or use bridge services for asset transfers. Below are examples of how to implement this tracking in both Vanilla JavaScript and Vue.js.

```html
<script>
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("bridgeButton").addEventListener("click", async () => {
      console.log("Bridge button clicked");

      // Example data - replace with actual data from your application
      const eventData = {
        network: "mainnet",
        contract_address: "0xExampleContractAddress",
        asset_amount: "100", // Example amount
        asset_ticker: "ETH", // Example asset
        user_address: "0xUserWalletAddress"
      };

      // Track the bridge event
      if (window.masaAnalytics) {
        window.masaAnalytics.fireEvent("bridge", eventData);
        console.log("Bridge event tracked:", eventData);
      } else {
        console.log("masaAnalytics is not defined");
      }
    });
  });
</script>
```

```javascript
<script>
export default {
  name: "BridgeComponent",
  methods: {
    async handleBridgeEvent() {
      console.log("Handling bridge event");

      // Example data - replace with actual data from your application
      const eventData = {
        network: "mainnet",
        contract_address: "0xExampleContractAddress",
        asset_amount: "100", // Example amount
        asset_ticker: "ETH", // Example asset
        user_address: "0xUserWalletAddress"
      };

      // Track the bridge event
      if (window.masaAnalytics) {
        window.masaAnalytics.fireEvent("bridge", eventData);
        console.log("Bridge event tracked:", eventData);
      } else {
        console.log("masaAnalytics is not defined");
      }
    }
  }
};
</script>
```
### Step 6: Tracking `mint` Event

To track a mint event in both Vanilla JavaScript and Vue.js, you'll need to adapt the approach based on the environment and how the masaAnalytics object is accessed and utilized. Below are examples for both scenarios, assuming you have the Masa Analytics SDK properly integrated into your project.

```html
<script>
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("mintButton").addEventListener("click", async () => {
      console.log("Mint button clicked");

      // Example data - replace with actual data from your application
      const user_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
      const network = "goerli";
      const contract_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
      const token_name = "My SBT Project";
      const ticker = "MSP";
      const token_type = "SBT";

      // Track the mint event
      if (window.masaAnalytics) {
        window.masaAnalytics.fireEvent("mint", {
          user_address,
          network,
          contract_address,
          token_name,
          ticker,
          token_type
        });
        console.log("Mint event tracked");
      } else {
        console.log("masaAnalytics is not defined");
      }
    });
  });
</script>
```

```javascript
<script>
export default {
  name: "MintTokenComponent",
  methods: {
    fireMintEvent() {
      const user_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
      const network = "goerli";
      const contract_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
      const token_name = "My SBT Project";
      const ticker = "MSP";
      const token_type = "SBT";

      // Assuming masaAnalytics is available globally
      if (window.masaAnalytics) {
        window.masaAnalytics.fireEvent("mint", {
          user_address,
          network,
          contract_address,
          token_name,
          ticker,
          token_type
        });
        console.log("Mint event fired");
      } else {
        console.log("masaAnalytics is not defined");
      }
    }
  }
};
</script>
```

### Step 6: Tracking `login` event

To track login events, such as when a user is logged into  your platform, you can use the masaAnalytics object directly in your JavaScript code. This example demonstrates how to set up an event listener for a login action, typically triggered by a user interaction like clicking a "Login" button.

```html
<script>
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loginButton").addEventListener("click", async () => {
      console.log("Login button clicked");

      // Example user address - replace with the actual user address obtained upon login
      const user_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";

      // Track the login event
      if (window.masaAnalytics) {
        window.masaAnalytics.fireEvent("login", { user_address });
        console.log("Login event tracked for user:", user_address);
      } else {
        console.log("masaAnalytics is not defined");
      }
    });
  });
</script>
```

```javascript
<template>
  <button @click="fireLoginEvent">Log In</button>
</template>

<script>
export default {
  name: "LoginComponent",
  methods: {
    fireLoginEvent() {
      const user_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";

      if (window.masaAnalytics) {
        window.masaAnalytics.fireEvent("login", { user_address });
        console.log("Login event fired for user:", user_address);
      } else {
        console.log("masaAnalytics is not defined");
      }
    }
  }
};
</script>
```