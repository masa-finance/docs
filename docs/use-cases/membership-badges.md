---
title: Membership badges
---

# Membership badges

With Masa, you can build a membership program using non-transferable, soulbound badges. For example, a web3 gaming platform with active Discord communities can issue a membership badge to their longest-standing community members who will get perks, and access to exclusive offers, and souldrops. In this guide, we cover the steps for setting up a membership program using SBT Badges.

**Using soulbound membership badges you can**

- Mint a non-transferable, soulbound badge that represents a user’s community membership as proof-of-status. 
- Use soulbound membership badges as unique identifiers, you can give badge holders different access to perks and rewards.
- Use soulbound membership badges as unique identifiers, you can market to a specific group of users with membership badge SBTs in their wallets.

**For example:**
  - **Loyalty Program:** you can mint various tiers and types of “VIP / OG badges” to represent a user’s loyalty status in a tier-based membership program. 
  - **Ambassador Program:** you can mint various tiers and types of “contributor/moderator/ambassador badges” to represent a member’s community status
  - **Employee Program:** you can mint various membership badges to reward employees, such as “Employee #1 / #2 / #3”

:::tip
You need to have the Masa CLI installed, if you have not completed the Quickstart you can do so here
:::

## Install Masa SDK
This guide covers using the Masa SDK and Masa CLI to mint an Authority SBT (ASBT) on the Base Goerli Testnet. You can use either `yarn` or `npm` for the installation. 

### Install via yarn
```bash
yarn add @masa-finance/masa-sdk --save
```

### Install via npm
```bash
npm i @masa-finance/masa-sdk --save
```

## Deploy ASBT contract
In this guide we will use an Authority SBT that can be minted (dropped) directly to a users wallet without any user interaction with web3. 

### Deploy contract using CLI
```bash
masa deploy asbt --network basegorli 
```
 ```bash
  __  __                            ____   _       ___ 
 |  \/  |   __ _   ___    __ _     / ___| | |     |_ _|
 | |\/| |  / _` | / __|  / _` |   | |     | |      | | 
 | |  | | | (_| | \__ \ | (_| |   | |___  | |___   | | 
 |_|  |_|  \__,_| |___/  \__,_|    \____| |_____| |___|
                                                       
Deploying ASBT contract for
Signer Address: '0xb3EAE0c0d3e09241a48485D7fDE226587A4E4461'
Network: 'basegoerli'

Enter the name of the contract: 'Masa ASBT Example'
Enter the name of the SBT: 'Masa OG'
Enter the ticker of theh SBT: 'MOG'
Enter the URL for the metadata image: 'https://6ryc4y7ispmrqvo6lbfyc7hruojxjl3dvaqxqwffervrwqchnwoq.arweave.net/9HAuY-iT2RhV3lhLgXzxo5N0r2OoIXhYpSRrG0BHbZ0'
Deploying ASBT on 'basegoerli'
Waiting for transaction '0x9bb86a26955fbb840ec1ea5df6cee8d8236cd3f9ca79b230a5179885bfeb2ff7' to finalize!
ASBT sucessfully deployed on 'basegoerli' with contract address: '0x...bnv'
Now you must configure your ASBT contract! Use the command `masa deploy` to get the help menu for SBT deployments 🚀
bash ~ %
```

:::tip
You can use many of the perminant storage options available for develoeprs in web3 to save your SBT Badge metadata. For a quick guide on using Arweave go here.
:::