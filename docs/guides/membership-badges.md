---
title: SBT Membership badges
toc_max_heading_level: 4
---

# SBT Membership badges

With Masa, you can build a membership program using non-transferable, soulbound badges. For example, a web3 gaming platform with active Discord communities can issue a membership badge to their longest-standing community members who will get perks, and access to exclusive offers, and souldrops. In this guide, we cover the steps for setting up a membership program using SBT Badges.

**Using soulbound membership badges you can**

- Mint a non-transferable, soulbound badge that represents a user’s community membership as proof-of-status.
- Use soulbound membership badges as unique identifiers, you can give badge holders different access to perks and rewards.
- Use soulbound membership badges as unique identifiers, you can market to a specific group of users with membership badge SBTs in their wallets.

**For example:**
  - **Loyalty Program:** you can mint various tiers and types of “VIP / OG badges” to represent a user’s loyalty status in a tier-based membership program. 
  - **Ambassador Program:** you can mint various tiers and types of “contributor/moderator/ambassador badges” to represent a member’s community status
  - **Employee Program:** you can mint various membership badges to reward employees, such as “Employee #1 / #2 / #3”

## Create Membership badges using the Masa SDK

### Install Masa SDK

This guide covers using the Masa SDK and Masa CLI to mint an Authority SBT (ASBT) on the Base Goerli Testnet. You can use either `yarn` or `npm` for the installation.

#### Install via yarn

```bash
yarn add @masa-finance/masa-sdk --save
```

#### Install via npm

```bash
npm i @masa-finance/masa-sdk --save
```

### Configure Masa SDK

:::info
A guide how to set up the Masa SDK can be found here: [Masa SDK](../developers/sdk/README.md#usage)
:::

### Deploy SBT Badge contract

In this guide we will use an _Authority SBT_ that can be minted (dropped) directly to a users wallet without any user interaction with web3.

:::caution
You will need a *minimum of 0.10* of your testnet asset to deploy a contract. This will either be _Goerli ETH_, _Base ETH_, _Mumbai MATIC_, _Alfajores Celo_, or _Testnet BNB_.
:::

```typescript
console.log("Deploying ASBT contract\n");

const name = await readLine("Enter the name of the SBT: ");
const symbol = await readLine("Enter the ticker of the SBT: ");
const baseTokenUri = await readLine("Enter the URL for the metadata image: ");
const adminAddress = await readLine(
  `Admin address (leave empty to use: '${await masa.config.wallet.getAddress()}'): `
);

const address = await masa.sbt.deployASBT(
  name,
  symbol,
  baseTokenUri,
  adminAddress
);

if (!address) {
  console.error("Deployment failed!");
}
```

### Mint SBT Badge

It is simple to mint an SBT using the contract address from your deployment - we will use the one we just deployed `0x4d527F3eFD9dCf5fF44284FfB9fe22C6bdc2Da20` and mint an SBT Badge to the receiver `0xb3EAE0c0d3e09241a48485D7fDE226587A4E4461`.

```typescript
const { mintASBT } = await masa.sbt.connect(contractAddress);
await mintASBT(receiver);
```

## Whats next

If you’re interested in other use cases, you can dive into our guides:

- [Bot killer](./bot-killer.md)
- [Achievements](./achievement-badges.md)
- Quest
- [Soulnames](./soul-names.md)
- Credit score