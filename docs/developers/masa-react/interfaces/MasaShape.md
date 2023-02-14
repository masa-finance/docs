[# Masa React
 - v0.26.0](../README.md) / [Exports](../modules.md) / MasaShape

# Interface: MasaShape

## Hierarchy

- **`MasaShape`**

  ↳ [`MasaContextProviderProps`](MasaContextProviderProps.md)

## Table of contents

### Properties

- [SupportedNetworks](MasaShape.md#supportednetworks)
- [chain](MasaShape.md#chain)
- [children](MasaShape.md#children)
- [closeModal](MasaShape.md#closemodal)
- [company](MasaShape.md#company)
- [connect](MasaShape.md#connect)
- [creditScores](MasaShape.md#creditscores)
- [greenLoading](MasaShape.md#greenloading)
- [greens](MasaShape.md#greens)
- [handleCreateCreditScore](MasaShape.md#handlecreatecreditscore)
- [handleCreateGreen](MasaShape.md#handlecreategreen)
- [handleGenerateGreen](MasaShape.md#handlegenerategreen)
- [handleLogin](MasaShape.md#handlelogin)
- [handleLogout](MasaShape.md#handlelogout)
- [handlePurchaseIdentity](MasaShape.md#handlepurchaseidentity)
- [identity](MasaShape.md#identity)
- [isConnected](MasaShape.md#isconnected)
- [isModalOpen](MasaShape.md#ismodalopen)
- [loadCreditScores](MasaShape.md#loadcreditscores)
- [loadSoulnames](MasaShape.md#loadsoulnames)
- [loading](MasaShape.md#loading)
- [loggedIn](MasaShape.md#loggedin)
- [logginLoading](MasaShape.md#logginloading)
- [masa](MasaShape.md#masa)
- [missingProvider](MasaShape.md#missingprovider)
- [network](MasaShape.md#network)
- [provider](MasaShape.md#provider)
- [scope](MasaShape.md#scope)
- [setMissingProvider](MasaShape.md#setmissingprovider)
- [setModalOpen](MasaShape.md#setmodalopen)
- [setProvider](MasaShape.md#setprovider)
- [soulnames](MasaShape.md#soulnames)
- [switchNetwork](MasaShape.md#switchnetwork)
- [walletAddress](MasaShape.md#walletaddress)

## Properties

### SupportedNetworks

• `Optional` **SupportedNetworks**: `Object`

#### Index signature

▪ [index: `number`]: [`Network`](Network.md)

___

### chain

• `Optional` **chain**: ``null`` \| `Network`

___

### children

• `Optional` **children**: `ReactNode`

___

### closeModal

• `Optional` **closeModal**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

___

### company

• `Optional` **company**: `string`

___

### connect

• `Optional` **connect**: (`options?`: { `callback?`: () => `void` ; `scope?`: `string`[]  }) => `void`

#### Type declaration

▸ (`options?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.callback?` | () => `void` |
| `options.scope?` | `string`[] |

##### Returns

`void`

___

### creditScores

• `Optional` **creditScores**: ``null`` \| { `metadata?`: `ICreditScore` ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]

___

### greenLoading

• `Optional` **greenLoading**: `boolean`

___

### greens

• `Optional` **greens**: { `metadata?`: `IGreen` ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]

___

### handleCreateCreditScore

• `Optional` **handleCreateCreditScore**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

___

### handleCreateGreen

• `Optional` **handleCreateGreen**: (`phoneNumber`: `string`, `code`: `string`) => `Promise`<`undefined` \| `VerifyGreenResult`\>

#### Type declaration

▸ (`phoneNumber`, `code`): `Promise`<`undefined` \| `VerifyGreenResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `phoneNumber` | `string` |
| `code` | `string` |

##### Returns

`Promise`<`undefined` \| `VerifyGreenResult`\>

___

### handleGenerateGreen

• `Optional` **handleGenerateGreen**: (`phoneNumber`: `string`) => `Promise`<`undefined` \| `GenerateGreenResult`\>

#### Type declaration

▸ (`phoneNumber`): `Promise`<`undefined` \| `GenerateGreenResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `phoneNumber` | `string` |

##### Returns

`Promise`<`undefined` \| `GenerateGreenResult`\>

___

### handleLogin

• `Optional` **handleLogin**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

___

### handleLogout

• `Optional` **handleLogout**: (`callback?`: () => `void`) => `void`

#### Type declaration

▸ (`callback?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

##### Returns

`void`

___

### handlePurchaseIdentity

• `Optional` **handlePurchaseIdentity**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

___

### identity

• `Optional` **identity**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address?` | `string` |
| `identityId?` | `BigNumber` |

___

### isConnected

• `Optional` **isConnected**: `boolean`

___

### isModalOpen

• `Optional` **isModalOpen**: `boolean`

___

### loadCreditScores

• `Optional` **loadCreditScores**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

___

### loadSoulnames

• `Optional` **loadSoulnames**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

___

### loading

• `Optional` **loading**: `boolean`

___

### loggedIn

• `Optional` **loggedIn**: `boolean`

___

### logginLoading

• `Optional` **logginLoading**: `boolean`

___

### masa

• `Optional` **masa**: `default`

___

### missingProvider

• `Optional` **missingProvider**: `boolean`

___

### network

• `Optional` **network**: `string`

___

### provider

• `Optional` **provider**: ``null`` \| `Wallet` \| `Signer`

___

### scope

• `Optional` **scope**: `string`[]

___

### setMissingProvider

• `Optional` **setMissingProvider**: (`value`: `boolean`) => `void`

#### Type declaration

▸ (`value`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

##### Returns

`void`

___

### setModalOpen

• `Optional` **setModalOpen**: (`val`: `boolean`) => `void`

#### Type declaration

▸ (`val`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `boolean` |

##### Returns

`void`

___

### setProvider

• `Optional` **setProvider**: (`provider`: ``null`` \| `Wallet` \| `Signer`) => `void`

#### Type declaration

▸ (`provider`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | ``null`` \| `Wallet` \| `Signer` |

##### Returns

`void`

___

### soulnames

• `Optional` **soulnames**: ``null`` \| `SoulNameDetails`[]

___

### switchNetwork

• `Optional` **switchNetwork**: (`chainId`: `number`) => `void`

#### Type declaration

▸ (`chainId`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |

##### Returns

`void`

___

### walletAddress

• `Optional` **walletAddress**: `string`
