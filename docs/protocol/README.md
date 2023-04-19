# Masa Protocol

Masa, the premiere web3 identity and credit protocol. Be the first to build soulbound tokens in web3.

<!-- TOC -->
* [Masa Protocol](#masa-protocol)
  * [Introduction](#introduction)
  * [Masa soulbound Identity](#masa-soulbound-identity)
  * [Masa soulbound Credit Score](#masa-soulbound-credit-score)
  * [Masa Soul Names](#masa-soul-names)
* [Masa Metadata API](#masa-metadata-api)
  * [Soulbound Identity](#soulbound-identity)
    * [Metadata base URI](#metadata-base-uri)
    * [**JSON Schema**](#json-schema)
  * [Soulbound Credit Score](#soulbound-credit-score)
    * [Metadata base URI](#metadata-base-uri-1)
    * [**JSON Schema**](#json-schema-1)
* [Relevant Repositories](#relevant-repositories)
  * [Frontends](#frontends)
  * [Libraries](#libraries)
  * [Backend & Contracts](#backend--contracts)
  * [Blockchain](#blockchain)
  * [Relevant Links](#relevant-links)
    * [Personal Finance Manager](#personal-finance-manager)
    * [Soulbound Identity](#soulbound-identity-1)
    * [Additional Resources](#additional-resources)
<!-- TOC -->

## Introduction

In order to create the first decentralized credit bureau Masa implements a set of soulbound Tokens and non-fungible Tokens (NFTs). The following components are attributed to a users account during each step of the lending lifecycle. Metadata attributed to a soulbound token encrypted and can only be accessed with permission from the owner through the Masa API and Smart Contracts.

## Masa soulbound Identity

The Masa Identity is a soulbound Identity Token that is generated for a user when they sign up to the Masa protocol and includes the following information:

## Masa soulbound Credit Score

The soulbound Masa Credit Score enables the bridging and aggregation of on and off-chain data in order to create a hybrid decentralized credit score. The Masa credit score can include the following information depending on which region you are located (read a full list of supported countries [here](https://developers.masa.finance/docs/supported-countries)):

- Credit Bureau Data
- Bank Transaction Data
- Mobile Money Data
- On-chain Data
- Centralized Exchange Data

## Masa Soul Names

Masa Soul Names are non-fungible tokens that can be attached to the Masa soulbound identity. They act as a human-readable address for the Masa soulbound identity.

# Masa Metadata API

Masa’s soulbound tokens have their metadata stored in the Masa API which is updated in real time with verified data throughout the lifecycle of the user. The Masa API has the following endpoints available with metadata data schema’s for attribution to the soulbound Tokens URI.

## Soulbound Identity

### Metadata base URI

`https://metadata.masa.finance/v1.0/identity/`

### **JSON Schema**

A unique JSON schema is created for each user with the following format. Details can be found [here](https://developers.masa.finance/docs/developers/sdk/interfaces/IIdentity)

`GET https://metadata.masa.finance/v1.0/identity/{id}.json`

Where `{id}` is a unique 77 character ID that is numeric characters only

From: `0`  
To: `99999999999999999999999999999999999999999999999999999999999999999999999999999`

Public Request `GET https://metadata.masa.finance/v1.0/identity/17012826615246396599027510140925.json`:

Response:

```json
{
  "name": "Masa Soulbound Identity v1.0.0",
  "description": "A self-sovereign identity for accessing DeFi",
  "image": "https://metadata.masa.finance/v1.0/identity/masa-identity.png",
  "properties": {
    "tokenId": "17012826615246396599027510140925",
    "account": "0xd5Dc7fdb68f365901Fc86E6A32f3a5d35022dC84",
    "soulName": "alice"
  }
}
```

Gated Request `GET https://metadata.masa.finance/v1.0/identity/17012826615246396599027510140925.json` while being logged in to the Masa Infrastructure:

```json
{
  "headers": {
    "cookie": "sid=s:<session id>;"
  }
}
```

Response:

```json
{
  "name": "Masa Soulbound Identity v1.0.0",
  "description": "A self-sovereign identity for accessing DeFi",
  "image": "https://metadata.masa.finance/v1.0/identity/masa-identity.png",
  "properties": {
    "tokenId": "17012826615246396599027510140925",
    "account": "0xd5Dc7fdb68f365901Fc86E6A32f3a5d35022dC84",
    "soulName": "alice"
  }
}
```

## Soulbound Credit Score

### Metadata base URI

`https://metadata.masa.finance/v1.0/credit-score/`

### **JSON Schema**

A unique JSON schema is created for each user with the following format. Details can be found [here](https://developers.masa.finance/docs/developers/sdk/interfaces/ICreditScore)

`GET https://metadata.masa.finance/v1.0/credit-score/{id}.json`

Where `{id}` is a unique 77 character ID that is numeric characters only

From: `0`  
To: `99999999999999999999999999999999999999999999999999999999999999999999999999999`

Public Request `GET https://metadata.masa.finance/v1.0/credit-score/23334135456782334234234234.json`:

Response:

```json
{
  "name": "Masa Soulbound Credit Score v1.0.0",
  "description": "A decentralized credit score",
  "image": "https://metadata.masa.finance/v1.0/identity/credit-score.png",
  "properties": {
    "tokenId": "23334135456782334234234234",
    "account": "0x418c9210D7EECa2C6e65830130f2d648D3d455A1"
  }
}
```

Gated Request `GET https://metadata.masa.finance/v1.0/credit-score/23334135456782334234234234.json` while being logged in to the Masa Infrastructure:

```json
{
  "headers": {
    "cookie": "sid=s:<session id>;"
  }
}
```

Response:

```json
{
  "name": "Masa Soulbound Credit Score v1.0.0",
  "description": "A decentralized credit score",
  "image": "https://metadata.masa.finance/v1.0/identity/credit-score.png",
  "properties": {
    "tokenId": "23334135456782334234234234",
    "account": "0x418c9210D7EECa2C6e65830130f2d648D3d455A1",
    "lastUpdated": "2022-10-07T18:13:34.955924172Z",
    "model_version": "nebula_1.0.0",
    "value": 744,
    "decile": "2.00",
    "value_rating": "Fair"
  }
}
```

# Relevant Repositories

## Frontends

- [Soulbound Token App](https://github.com/masa-finance/masa-sbt)
  | [Changelog](https://github.com/masa-finance/masa-sbt/blob/dev/CHANGELOG.md)
- [Web App](https://github.com/masa-finance/masa-web-app)
  | [Changelog](https://github.com/masa-finance/masa-web-app/blob/dev/CHANGELOG.md)
- [Mobile App](https://github.com/masa-finance/masa-mobile-app)
  | [Changelog](https://github.com/masa-finance/masa-mobile-app/blob/main/CHANGELOG.md)
- [Contracts Dashboard](https://github.com/masa-finance/contract-stats)
  | [Changelog](https://github.com/masa-finance/contract-stats/blob/master/CHANGELOG.md)

## Libraries

- [SDK](https://github.com/masa-finance/masa-sdk)
  | [Changelog](https://github.com/masa-finance/masa-sdk/blob/main/CHANGELOG.md)
- [Masa React](https://github.com/masa-finance/masa-react)
  | [Changelog](https://github.com/masa-finance/masa-react/blob/master/CHANGELOG.md)

## Backend & Contracts

- [API Middleware](https://github.com/masa-finance/masa-api-middleware)
  | [Changelog](https://github.com/masa-finance/masa-api-middleware/blob/dev/CHANGELOG.md)
- [Lending Contracts](https://github.com/masa-finance/masa-contracts-lending)
  | [Changelog](https://github.com/masa-finance/masa-contracts-lending/blob/master/CHANGELOG.md)
- [Identity Contracts](https://github.com/masa-finance/masa-contracts-identity)
  | [Changelog](https://github.com/masa-finance/masa-contracts-identity/blob/main/CHANGELOG.md)

## Blockchain

- [Node](https://github.com/masa-finance/masa-node-v1.0) | [Changelog]
- [Node UI](https://github.com/masa-finance/node-ui) | [Changelog]
- [Node Cluster](https://github.com/masa-finance/masa-node-cluster) | [Changelog]

## Relevant Links

### Personal Finance Manager

- [Masa App - Production](https://app.masa.finance)
- [Masa App - Staging](https://beta.masa.finance)
- [Masa App - Test](https://test.masa.finance)
- [Masa App - Dev](https://dev.masa.finance)

### Soulbound Identity

- [Masa Identity App - Production](http://app.masa.finance)
- [Masa Identity App - Staging](http://testnet.app.masa.finance)
- [Masa Identity App - Test](http://test.app.masa.finance)
- [Masa Identity App - Dev](https://dev.app.masa.finance/)

### Additional Resources

- [Soulbound Identity](https://github.com/masa-finance/masa-contracts-identity/blob/main/docs/SoulboundIdentity.md)
- [Soulbound Credit Score](https://github.com/masa-finance/masa-contracts-identity/blob/main/docs/SoulboundCreditScore.md)
- [Soul Name](https://github.com/masa-finance/masa-contracts-identity/blob/main/docs/SoulName.md)
- [Soul Linker](https://github.com/masa-finance/masa-contracts-identity/blob/main/docs/SoulLinker.md)
