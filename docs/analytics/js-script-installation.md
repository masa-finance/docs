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

### Step 1: Initialize Masa Analytics Tracking Script

Copy and paste the Masa Analytics initialization script into the `<head>` section of your website's HTML. This script will load the CDN-hosted tracking code and set up basic page view tracking. Make sure to replace `YOUR_CLIENT_ID` with the client id you generate from your dashboard.

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

After following initialization in step 1, we can create a new script to trigger on page load to fire page view events.

```javascript
<script>
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

### Step 3: Google Tag Manager Integration

If you are using Google Tag Manager you do not need to do **Step 2** start from **Step 1**

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

### Step 4: Tracking `elementClick` Event

To track all clicks on your website, you can add the following script to your header. Note, if you want to use this in conjunction with any other events, you will need to write an extra line of code in those functions.

```html
<script>
  masaAnalytics.trackClicks();
</script>
```

If you want to use this with other click events (like connect wallet), you would use this same script as is and in your other event functions, you would add `event.stopPropagation();` to the top of the function. For example:

```javascript
async function handleConnectWallet() {
  event.stopPropagation(); // Prevent the event from bubbling up if using masaAnalytics.trackClicks();
  console.log("handleConnectWallet");
  const address = await MA.connectMetamask(masaAnalytics);
  if (address) {
    userAddress = address; // Store the user address in the global variable
  }
}
```

### Step 5: Tracking `connectWallet` Event

To track the `connectWallet` event, you'll need to extract the Ethereum address from the connected wallet. This works with the window.ethereum object out of the box. If you want to call this with a button click, you would need to make sure your button has the id of `connectWalletBtn` or else you can call this on page load. Two examples are below.

```html
<script>
  document.addEventListener("DOMContentLoaded", (event) => {
    document
      .getElementById("connectWalletBtn")
      .addEventListener("click", handleConnectWallet);

    async function handleConnectWallet(event) {
      if (event) event.stopPropagation();
      console.log("handleConnectWallet");
      const address = await MA.connectMetamask(masaAnalytics);
      // Handle the address
    }
  });
</script>
```

```html
<script>
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

    async function handleConnectWallet() {
      console.log("handleConnectWallet");
      const address = await MA.connectMetamask(masaAnalytics);
      // Handle the address
    }

    handleConnectWallet();
  };
</script>
```

### Combining these scripts

If you are using most of this functionality together, you also have the option to refactor all of these scripts into one as demonstrated below.

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

  masaAnalytics.trackClicks();

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

    async function handleConnectWallet() {
      console.log("handleConnectWallet");
      const address = await MA.connectMetamask(masaAnalytics);
      // Handle the address
    }

    handleConnectWallet();
  };
</script>
```

### Conclusion By following this guide, you'll be able to integrate Masa

Analytics into your website to track `pageView`, `elementClick`,
`connectWallet`, `login`, and `mint` events. Replace placeholders with actual
values and customize tracking as needed.

```

```

```

```
