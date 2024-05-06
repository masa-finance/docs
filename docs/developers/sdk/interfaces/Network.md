[**Masa SDK v3.36.1**](../README.md) • **Docs**

***

[Masa SDK v3.36.1](../globals.md) / Network

# Interface: Network

## Properties

### addresses

> **addresses**: [`Addresses`](Addresses.md)

Masa Curated known Addresses of Contracts like Business logic and tokens

***

### blockExplorerApiUrls?

> `optional` **blockExplorerApiUrls**: `string`[]

set of block explorer api urls

***

### blockExplorerUrls?

> `optional` **blockExplorerUrls**: `string`[]

set of block explorer urls

***

### chainId

> **chainId**: `number`

The networks chain id used to add the network to the wallet

***

### chainName

> **chainName**: `string`

The long chain name that metamask displays or that we use to
offer the user to switch networks

***

### chainNameShort

> **chainNameShort**: `string`

A short version of the Chain Name to be displayed in Buttons or
locations with less space

***

### gasSlippagePercentage?

> `optional` **gasSlippagePercentage**: `number`

the default gas slippage percentage used on some testnets

***

### isDeprecated?

> `optional` **isDeprecated**: `boolean`

is this network deprecated

***

### isTestnet

> **isTestnet**: `boolean`

is this network a test network or not?

***

### lzEndpointId?

> `optional` **lzEndpointId**: `number`

LayerZero Endpoint ID

***

### nativeCurrency?

> `optional` **nativeCurrency**: `object`

Information about the native currency

#### decimals

> **decimals**: `number`

#### name

> **name**: `string`

#### symbol

> **symbol**: `string`

***

### networkName

> **networkName**: [`NetworkName`](../type-aliases/NetworkName.md)

the technical network name that the SDK knows

***

### rpcUrls

> **rpcUrls**: (`undefined` \| `string`)[]

The list of available rpc urls, required for adding the network
to the wallet

***

### skipEip1559?

> `optional` **skipEip1559**: `boolean`

skip eip1559 gas price calculation for this network
