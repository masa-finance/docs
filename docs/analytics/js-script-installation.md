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

After installing the tacking script in Step 1, we can create a new script to trigger each time a user loads a page to fire pageView events.

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
```

### Step 2: Set Up Triggers

**Set up triggers**:

- **All Pages**: To track all page views.
- **Page Views**: For tracking specific page views.
- **History Changes**: Useful for Single Page Applications (SPAs) to track route changes.

<br/>

:::info
We strongly recommend using the React SDK to track `connectWallet`, `trackEvent`, `login`, `mint`, and `custom` events in your React app
:::

### Step 3: Tracking `trackEvent` Event

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
      window.masaAnalytics.trackEvent({eventName: 'handleCliPluginsHeaderClick', additionalEventData: {property1: 23213, property2: 'whatever'}})
      // Add any additional logic for when the header is clicked
    }
  }
```

Empty `additionalEventData` object example

```javascript
window.masaAnalytics.trackEvent({eventName:'handleCliPluginsHeaderClick', additionalEventData: {}})
```

### Step 4: Tracking `connectWallet` Event

To track the `connectWallet` event, you'll need to extract the Ethereum address from the connected wallet. This works with the window.ethereum object out of the box. If you want to call this with a button click, you would need to make sure your button has the id of `connectWalletBtn` or else you can call this on page load. Two examples are below.

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

