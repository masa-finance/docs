---
title: JS Script Installation
---

## Masa Analytics Integration Guide

:::info
This guide will walk you through integrating Masa Analytics React into your website using our JS Script and CDN with Google Tag Manager. It's designed to get you up and running quickly and smoothly.
:::

### Step 1: Track `pageViews` With Masa Analytics Tracking Script 

Copy and paste the Masa Analytics initialization script into the `<head>` section of your website's HTML. This script will load the CDN-hosted tracking code and set up basic page view tracking.

```html
<!-- Include this script in your HTML -->
<script>
  // Replace these with your specific values
  var clientId = 'YOUR_CLIENT_ID';
  var clientApp = 'YOUR_CLIENT_APP';
  var clientName = 'YOUR_CLIENT_NAME';
  var pageUrl = window.location.href;

  (function(i, s, o, g, r, a, m) {
    i['MasaAnalytics'] = i['MasaAnalytics'] || function() {
      (i['MasaAnalytics'].q = i['MasaAnalytics'].q || []).push(arguments)
    };
    i['MasaAnalytics'].clientId = clientId;
    a = s.createElement(o);
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    a.onload = function() {
      MasaAnalytics.trackPageView(clientId, clientApp, clientName, pageUrl);
      function trackPageViewForSPA() {
        var updatedPageUrl = window.location.href;
        MasaAnalytics.trackPageView(clientId, clientApp, clientName, updatedPageUrl);
      }
      window.addEventListener('popstate', trackPageViewForSPA);
    };
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', 'https://cdn.masa.finance/masa-analytics.js');
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

:::warning
We strongly recommend using the React SDK to track `connectWallet`, `login`, `mint`, and `custom` events in your React app
:::

### Step 3: Tracking `connectWallet` Event

To track the `connectWallet` event, you'll need to extract the Ethereum address from the connected wallet.

#### Using `web3.js`

```html
<script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js@1.x/dist/web3.min.js"></script>
<script>
  var web3 = new Web3(window.ethereum);

  web3.eth.getAccounts().then((accounts) => {
    var address = accounts[0];
    MasaAnalytics.trackConnectWallet(clientId, address, clientApp, clientName, "metamask");
  });
</script>
```

#### Using `ethers.js`

```html
<script src="https://cdn.ethers.io/lib/ethers-5.0.esm.min.js" type="module"></script>
<script>
  var provider = new ethers.providers.Web3Provider(window.ethereum);
  var signer = provider.getSigner();

  signer.getAddress().then((address) => {
    MasaAnalytics.trackConnectWallet(clientId, address, clientApp, clientName, "metamask");
  });
</script>
```

### Step 4: Tracking `login` Event

```javascript
// Example tracking login event
MasaAnalytics.trackLogin(clientId, address, clientApp, clientName, "metamask", "celo");
```

### Step 5: Tracking `mint` Event

```javascript
// Example tracking mint event
var mintEventData = {
  "contract_address": "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  "token_name": "Masa Green SBT",
  "ticker": "MGX-2FA",
  "token_type": "SBT",
  "client_app": clientApp,
  "client_name": clientName,
  "wallet_type": "metamask",
  "network": "celo"
};
MasaAnalytics.trackMint(clientId, address, mintEventData);
```

### Conclusion

By following this guide, you'll be able to integrate Masa Analytics into your website to track `pageView`, `connectWallet`, `login`, and `mint` events. Replace placeholders with actual values and customize tracking as needed.
```