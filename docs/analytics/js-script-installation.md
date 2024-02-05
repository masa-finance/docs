---
title: JS Script Installation
---

## Masa Analytics Integration Guide

:::info
This guide will walk you through integrating Masa Analytics React into your website using our JS Script and CDN with Google Tag Manager. It's designed to get you up and running quickly and smoothly.
:::

### Get a `client_id`

:::info
A `client_id` will be provided to you during your onboarding to Masa Analytics, please reach out to **help@masa.finance** or reach out to us on **Discord** if you need a ClientID
:::

### Step 1: Track `pageViews` With Masa Analytics Tracking Script

Copy and paste the Masa Analytics initialization script into the `<head>` section of your website's HTML. This script will load the CDN-hosted tracking code and set up basic page view tracking.

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

  window.onload = async function () {
    var page = window.location.href;

    // Track PageView event
    masaAnalytics.firePageViewEvent({ page });

    function trackPageViewForSPA() {
      var updatedPageUrl = window.location.href;
      masaAnalytics.firePageViewEvent({ page: updatedPageUrl });
    }

    // This event is triggered when the route changes in many SPAs
    window.addEventListener("popstate", trackPageViewForSPA);
  };
</script>
```

### Step 2: Google Tag Manager Integration

If you are using Google Tag Manager you do not need to do **Step 1** start from **Step 2**

1. **Go to Google Tag Manager** (GTM) and create a new tag.
2. **Choose the 'Custom HTML' tag type** and paste the Masa Analytics initialization script from Step 1.
3. **Set up triggers**:
   - **All Pages**: To track all page views.
   - **Page Views**: For tracking specific page views.
   - **History Changes**: Useful for Single Page Applications (SPAs) to track route changes.

<br/>

:::warning
We strongly recommend using the React SDK to track `connectWallet`, `elementClick`, `login`, `mint`, and `custom` events in your React app
:::

### Step 3: Tracking `elementClick` Event

To track all clicks on your website, you can add the following script to your <header></header>. Note, if you want to use this in conjunction with any other events, you will need to write an extra line of code in those functions.

```html
<script>
  masaAnalytics.trackClicks();
</script>
```

If you want to use this with other click events (like connect wallet), you would use this same script as is and in your other event functions, you would add `event.stopPropagation();` to the top of the function. For example:

```javascript
async function handleConnectWallet() {
  event.stopPropagation(); // Prevent the event from bubbling up
  console.log("handleConnectWallet");
  const address = await MA.connectMetamask(masaAnalytics);
  if (address) {
    userAddress = address; // Store the user address in the global variable
  }
}
```

### Step 4: Tracking `connectWallet` Event

To track the `connectWallet` event, you'll need to extract the Ethereum address from the connected wallet.

#### Using `web3.js`

```html
<script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js@1.x/dist/web3.min.js"></script>
<script>
  var web3 = new Web3(window.ethereum);

  web3.eth.getAccounts().then((accounts) => {
    var address = accounts[0];
    MasaAnalytics.trackConnectWallet(
      clientId,
      address,
      clientApp,
      clientName,
      "metamask"
    );
  });
</script>
```

#### Using `ethers.js`

```html
<script
  src="https://cdn.ethers.io/lib/ethers-5.0.esm.min.js"
  type="module"
></script>
<script>
  var provider = new ethers.providers.Web3Provider(window.ethereum);
  var signer = provider.getSigner();

  signer.getAddress().then((address) => {
    MasaAnalytics.trackConnectWallet(
      clientId,
      address,
      clientApp,
      clientName,
      "metamask"
    );
  });
</script>
```

### Step 5: Tracking `login` Event

```javascript
// Example tracking login event
MasaAnalytics.trackLogin(
  clientId,
  address,
  clientApp,
  clientName,
  "metamask",
  "celo"
);
```

### Step 6: Tracking `mint` Event

```javascript
// Example tracking mint event
var mintEventData = {
  contract_address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  token_name: "Masa Green SBT",
  ticker: "MGX-2FA",
  token_type: "SBT",
  client_app: clientApp,
  client_name: clientName,
  wallet_type: "metamask",
  network: "celo",
};
MasaAnalytics.trackMint(clientId, address, mintEventData);
```

### Conclusion

By following this guide, you'll be able to integrate Masa Analytics into your website to track `pageView`, `elementClick`, `connectWallet`, `login`, and `mint` events. Replace placeholders with actual values and customize tracking as needed.

```

```
