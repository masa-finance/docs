---
title: Masa's Data Journey
---

# The Data Journey at Masa

## Privacy Philosophy

One of the fundamental philosophies we've upheld since the inception of Masa is our commitment to radical user privacy and anonymity. Therefore, we intend to be radically transparent about how data is processed and stored. We comply with all relevant privacy laws and ensure that we always practice data minimization – only processing and storing data that's essential, useful, and privacy-focused. Masa does not use cookies and we never save your personal information anywhere on our servers or decentralized infrastructure – your identity is fully private and anonymous at all times. 

## Integration and Functionality

As a marketer, product manager, business intelligence analyst, or data scientist you can integrate Masa’s analytics script or SDK (npm package) quickly and easily in as little as three lines of code. If you are using the tracking script, you can simply copy and paste into a tag manager to get up and running. 

In this overview, we are going to explore in detail what happens when you integrate Masa into your project, and how Masa protects the privacy of your blockchain app or blockchain network participants.

## Anonymized Event Tracking

Let's say you've just implemented the Masa analytics script or SDK into your blockchain project. With the script or package set to gather privacy-focused web2 and web3 analytics, you get a boilerplate implementation that anonymously tracks the following Events for your app – Page Views, Wallet Interactions (wallet connected, DApp login), and Mint Events (ERC-20, SBT, NFT) – giving you a full funnel view into a user's web2 and web3 behavior. 

## Customizable Event Definition

Additionally, you can define custom events for front-end interactions, staking, liquidity provisioning, DEX trading, and many more – the limit is only your creativity. When you, or any other network participant, then interact with your DApp or blockchain network these events are tracked anonymously and privately enabling customized and delightful user experiences to be delivered to your users. 

## Data Accessibility and Usage

You can think of Masa as a private and anonymous Google Analytics and Mixpanel for web3 where user privacy isn’t compromised. The data is available through a traditional API, along with a decentralized app chain (oracle) that provides an on-chain API and resilient data storage layer that utilizes zero-knowledge encryption to preserve data on-chain. This combination goes beyond what is possible today to create a playground for data scientists and AI-engineers to build AI models that leverage private and anonymous data to power decentralized AI agents in web3. Masa is positioned to be the market leader for private and anonymous analytics and data infrastructure that bridges web2 to web3. 

## The Data Journey

Here's the complete data journey, from start to finish:

### Step 1: Loading our cookie-free script or npm package

The Masa script or SDK is loaded rapidly, typically within about 30 milliseconds.

Once the script or package is loaded, a transaction request is sent to our EU-owned servers. The request will contain details about the transaction you're conducting and the referring network node. The network node will also send our servers your IP Address and User-Agent (which contains details about the browser you're using and device type). Our technology doesn't use cookies, so you won't need an annoying cookie consent banner.

### Step 2: Establishing if you're a new participant

We need to establish uniques/transactions to your website, DApp, or blockchain network and we do this via a privacy-first unique transactions method. In summary, we keep salted SHA256 hashes that allow us to determine unique participants without creating any privacy risk.

Here's an example of the data we receive about you when you interact with a website, DApp, or blockchain network that uses Masa:

```bash
Your IP: "111.22.333.444"
Your User Agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
```

In order to preseve privacy we **do not** store your raw data (IP and User-Agent) alongside your event activity, as that wouldn't be as privacy-friendly, so we need to create a “Device Hash” that we can use to identify you on your next interaction. It is critical to note that IP addresses and User-Agent data are not stored on our servers for any period of time longer than is necessary to generate a device hash.

#### User Device Hash

We use this as a relational object that enables the association of your devices to Ethereum addresses. This is our way of anonymously identifying a participant (you, in this case) without knowing it's actually you. This allows us to collect network-level uniques. This hash sits alongside your events and is used to remove events in the event of spam. We create this hash by combining the following data:

```bash
Salt: "unique salt per client"
IP Address: "usually unique to your network"
User-Agent: "combined with your IP Address, which brings more uniqueness to the user signature hash"
Hostname: "This parameter means we can't collect activity between websites, DApps, and blockchain networks unlike cookies"
```

Note: It is important to note that your hash changes continuously and is irreversible. 

#### Ethereum Account (EOA) Association

When you login to a website, DApp, or blockchain network your EOA is automatically associated with a device hash and a unique user identity is created that represents your Masa identity in web3 – your identity will be stored on the Masa appchain as a zero-knowledge SBT that is only accessible by you and your private key – allowing sovereignty over data associated with your identity. Each time you are connected to a different account through a device, Masa associates your EOA with your Masa identity. This graph of anonymous device hashes, EOAs, and identities, enables a highly accurate measurement of actual active uses in web3 – giving full visibility into the true number of active users in web3 for the first time. All other events that are tracked are thus associated with your Masa identity through the device hash and account relationship. 

### Step 3: Saving the event

Once we've established if you're a unique participant, we're ready to store the transaction. Here's an example of everything we store in our database when we receive a transaction.

```json
{
    "id": 21759,
    "type": "pageView",
    "device_id": 1621,
    "device_hash": "669c3abcd701ec4c8ba8f341c87ac9ac330a3fec9ce8663f92476ebed54c5591",
    "user_address": "0x811fb640cDe15A9Cf4074f658a438abd02590c6B",
    "user_uuid": "38ca60a8-4e85-4cf6-aa18-d4f87becd74c",
    "timestamp": "2023-07-12T03:56:51.758Z",
    "event_data": {
        "page": "https://app.masa.finance/app/hub",
        "browser": "Chrome",
        "client_app": "SBT App",
        "client_name": "Masa"
    }
}
```

Notice that the above payload contains zero personal data. The device_hash is technically pseudo-anonymized data under GDPR, but that's only a technicality. You could not brute force a hash like this. We refer to the device_hash as practically anonymous.

### Step 4: Data analytics

From this base substrate of event data we can build a range of Google-like analytics and derivative insights that use machine learning and AI to generate outputs. This is fed through our API and will be served in a simple dashboard to users that can be customized to serve needs. 

### Step 5: Analytics have been collected without invading your digital privacy

That's it!

We just processed your interaction with your website, DApp, or blockchain network using Masa. We were able to extract information that will be useful for your business, and we preserved the privacy of your user. In order for projects to scale in web3 using analytics we don't need to invade users privacy to provide our clients with actionable and intelligent data. 

Note: The compliance we focus on for our privacy-first analytics service includes GDPR Compliance, ePrivacy (cookie law) Compliance, PECR Compliance, COPPA Compliance, and CCPA Compliance.

## Join The Masa Analytics Waitlist

We're excited to have you on board. Be one of the first to get access to Masa Analytics. Sign up now to join the early access waitlist!

[Join the Waitlist](https://www.masa.finance/)

