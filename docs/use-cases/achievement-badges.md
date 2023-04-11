---
title: Acheivement SBTs
---

# Achievement badges

With Masa, you can track and reward an individuals acheivements in your community by using non-transferable, soulbound Acheivement badges. For example, a web3 quest platform with active members participating in quests can issue an Acheivement SBT to the participants who were in the top 5% of the number of completed quests in a week. Having an achievment SBT would unlock priority access to future quests and grant allow list spots in partner souldrops (airdrops). In this guide, we cover the steps for launching an Acheivement SBT using Masa.

**Using Achievement SBTs you can build**

- A non-transferrable, soulbound badge that represents a user’s achievements and/or quest completions as a proof-of-participation. 
- Soulbound achievement badges can be coupled with Membership badges to create a tier-based membership system or loyalty program. 
- Using soulbound achievement badges as unique identifiers, you can reward and market to a specific group of users with achievement badge SBTs in their wallets.

**For example:**
- **Reward / Quest Program:** a user incentive pool which qualification is based on completion of specific quests, identified via quest achievement SBT badges
- **Off-chain Achievements:** you can mint a Achievement Badge when a user joins your Discord channel
- **On-chain Achievements:** you can mint a Achievement Badge when a contributor deploys a smart contract 

:::tip
You need to have the Masa CLI installed, if you have not completed the Quickstart you can do so [here] (#)
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

## Deploy SBT Badge contract
In this guide we will use an _Authority SBT_ that can be minted (dropped) directly to a users wallet without any user interaction with web3. 

:::caution
You will need a *minimum of 0.10* of your testnet asset to deploy a contract. This will either be _Goerli ETH_, _Base ETH_, _Mumbai MATIC_, _Alfajores Celo_, or _Testnet BNB_.
:::

### Using CLI
```bash
masa asbt deploy --network basegoerli 
```
 ```bash
  __  __                            ____   _       ___ 
 |  \/  |   __ _   ___    __ _     / ___| | |     |_ _|
 | |\/| |  / _` | / __|  / _` |   | |     | |      | | 
 | |  | | | (_| | \__ \ | (_| |   | |___  | |___   | | 
 |_|  |_|  \__,_| |___/  \__,_|    \____| |_____| |___|
                                                       
Deploying ASBT contract

Enter the name of the SBT: Base Test SBT 
Enter the ticker of the SBT: BTS
Enter the URL for the metadata image: https:test.img
Admin address (leave empty to use: '0xb3EAE0c0d3e09241a48485D7fDE226587A4E4461'): 
Deploying ASBT to network 'basegoerli'
Waiting for transaction '0xf9707485c442b23bc45da03ccf16c048eb73c00be137ab01fc70824149b4d4a7' to finalize!
ASBT successfully deployed to 'basegoerli' with contract address: '0x4d527F3eFD9dCf5fF44284FfB9fe22C6bdc2Da20'
bash ~ % 

```
:::tip
You can use many of the perminant storage options available for develoeprs in web3 to save your SBT Badge metadata. For a quick guide on using Arweave go here.
:::
## Mint SBT Badge

### Using CLI
It is simple to mint an SBT using the CLI just copy the contract address from your deployment - we will use the one we just deployed `0x4d527F3eFD9dCf5fF44284FfB9fe22C6bdc2Da20` and mint an SBT Badge to the deployer wallet used `0xb3EAE0c0d3e09241a48485D7fDE226587A4E4461`. 

```bash
masa asbt mint 0x4d527F3eFD9dCf5fF44284FfB9fe22C6bdc2Da20 0xb3EAE0c0d3e09241a48485D7fDE226587A4E4461
```
```bash
  __  __                            ____   _       ___ 
 |  \/  |   __ _   ___    __ _     / ___| | |     |_ _|
 | |\/| |  / _` | / __|  / _` |   | |     | |      | | 
 | |  | | | (_| | \__ \ | (_| |   | |___  | |___   | | 
 |_|  |_|  \__,_| |___/  \__,_|    \____| |_____| |___|
                                                       
Minting SBT on:
Contract Name: 'Base Test SBT '
Contract Symbol: 'BTS'
Contract Address: '0x4d527F3eFD9dCf5fF44284FfB9fe22C6bdc2Da20'
To receiver: '0xb3EAE0c0d3e09241a48485D7fDE226587A4E4461'
Waiting for transaction '0xd10bc0eea5adce2af0e2ce5ba4504f94d1a6eb36906b126c10d32a9c2a583d87' to finalize!
Minted to token with ID: 1 receiver '0xb3EAE0c0d3e09241a48485D7fDE226587A4E4461'
bash ~ %
```
You can view the transaction on the Base Goerli testnet [here] (https://goerli.basescan.org/tx/0xd10bc0eea5adce2af0e2ce5ba4504f94d1a6eb36906b126c10d32a9c2a583d87)

### Using SDK

/// @Sebastian to add code snippet example for minting here

## Display SBT in React UI

/// @Sebastian to add code snippet example for displaying an SBT image in React

## Whats next 
If you’re interested in other use cases, you can dive into our guides:
- Bot killer
- Membership
- Quest
- Soulnames
- Credit score