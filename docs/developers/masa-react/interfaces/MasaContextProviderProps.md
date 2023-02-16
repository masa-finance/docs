[# Masa React
 - v0.26.27](../README.md) / [Exports](../modules.md) / MasaContextProviderProps

# Interface: MasaContextProviderProps

## Hierarchy

- [`MasaShape`](MasaShape.md)

  ↳ **`MasaContextProviderProps`**

## Table of contents

### Properties

- [SupportedNetworks](MasaContextProviderProps.md#supportednetworks)
- [arweaveConfig](MasaContextProviderProps.md#arweaveconfig)
- [children](MasaContextProviderProps.md#children)
- [closeModal](MasaContextProviderProps.md#closemodal)
- [company](MasaContextProviderProps.md#company)
- [connect](MasaContextProviderProps.md#connect)
- [creditScores](MasaContextProviderProps.md#creditscores)
- [environmentName](MasaContextProviderProps.md#environmentname)
- [greenLoading](MasaContextProviderProps.md#greenloading)
- [greens](MasaContextProviderProps.md#greens)
- [handleCreateCreditScore](MasaContextProviderProps.md#handlecreatecreditscore)
- [handleCreateGreen](MasaContextProviderProps.md#handlecreategreen)
- [handleGenerateGreen](MasaContextProviderProps.md#handlegenerategreen)
- [handleLogin](MasaContextProviderProps.md#handlelogin)
- [handleLogout](MasaContextProviderProps.md#handlelogout)
- [handlePurchaseIdentity](MasaContextProviderProps.md#handlepurchaseidentity)
- [identity](MasaContextProviderProps.md#identity)
- [isConnected](MasaContextProviderProps.md#isconnected)
- [isModalOpen](MasaContextProviderProps.md#ismodalopen)
- [loadCreditScores](MasaContextProviderProps.md#loadcreditscores)
- [loadSoulnames](MasaContextProviderProps.md#loadsoulnames)
- [loading](MasaContextProviderProps.md#loading)
- [loggedIn](MasaContextProviderProps.md#loggedin)
- [logginLoading](MasaContextProviderProps.md#logginloading)
- [masa](MasaContextProviderProps.md#masa)
- [missingProvider](MasaContextProviderProps.md#missingprovider)
- [network](MasaContextProviderProps.md#network)
- [networkName](MasaContextProviderProps.md#networkname)
- [noWallet](MasaContextProviderProps.md#nowallet)
- [provider](MasaContextProviderProps.md#provider)
- [scope](MasaContextProviderProps.md#scope)
- [setMissingProvider](MasaContextProviderProps.md#setmissingprovider)
- [setModalOpen](MasaContextProviderProps.md#setmodalopen)
- [setProvider](MasaContextProviderProps.md#setprovider)
- [signer](MasaContextProviderProps.md#signer)
- [soulnames](MasaContextProviderProps.md#soulnames)
- [switchNetwork](MasaContextProviderProps.md#switchnetwork)
- [verbose](MasaContextProviderProps.md#verbose)
- [walletAddress](MasaContextProviderProps.md#walletaddress)

## Properties

### SupportedNetworks

• `Optional` **SupportedNetworks**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alfajores` | [`Network`](Network.md) |
| `bsc` | [`Network`](Network.md) |
| `bsctest` | [`Network`](Network.md) |
| `celo` | [`Network`](Network.md) |
| `goerli` | [`Network`](Network.md) |
| `mainnet` | [`Network`](Network.md) |
| `mumbai` | [`Network`](Network.md) |
| `polygon` | [`Network`](Network.md) |

#### Inherited from

[MasaShape](MasaShape.md).[SupportedNetworks](MasaShape.md#supportednetworks)

___

### arweaveConfig

• `Optional` **arweaveConfig**: [`ArweaveConfig`](ArweaveConfig.md)

___

### children

• **children**: `ReactNode`

#### Overrides

[MasaShape](MasaShape.md).[children](MasaShape.md#children)

___

### closeModal

• `Optional` **closeModal**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[MasaShape](MasaShape.md).[closeModal](MasaShape.md#closemodal)

___

### company

• `Optional` **company**: `string`

#### Overrides

[MasaShape](MasaShape.md).[company](MasaShape.md#company)

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

#### Inherited from

[MasaShape](MasaShape.md).[connect](MasaShape.md#connect)

___

### creditScores

• `Optional` **creditScores**: ``null`` \| { `metadata?`: `ICreditScore` ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]

#### Inherited from

[MasaShape](MasaShape.md).[creditScores](MasaShape.md#creditscores)

___

### environmentName

• `Optional` **environmentName**: `undefined`

___

### greenLoading

• `Optional` **greenLoading**: `boolean`

#### Inherited from

[MasaShape](MasaShape.md).[greenLoading](MasaShape.md#greenloading)

___

### greens

• `Optional` **greens**: { `metadata?`: `IGreen` ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]

#### Inherited from

[MasaShape](MasaShape.md).[greens](MasaShape.md#greens)

___

### handleCreateCreditScore

• `Optional` **handleCreateCreditScore**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[MasaShape](MasaShape.md).[handleCreateCreditScore](MasaShape.md#handlecreatecreditscore)

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

#### Inherited from

[MasaShape](MasaShape.md).[handleCreateGreen](MasaShape.md#handlecreategreen)

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

#### Inherited from

[MasaShape](MasaShape.md).[handleGenerateGreen](MasaShape.md#handlegenerategreen)

___

### handleLogin

• `Optional` **handleLogin**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[MasaShape](MasaShape.md).[handleLogin](MasaShape.md#handlelogin)

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

#### Inherited from

[MasaShape](MasaShape.md).[handleLogout](MasaShape.md#handlelogout)

___

### handlePurchaseIdentity

• `Optional` **handlePurchaseIdentity**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[MasaShape](MasaShape.md).[handlePurchaseIdentity](MasaShape.md#handlepurchaseidentity)

___

### identity

• `Optional` **identity**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address?` | `string` |
| `identityId?` | `BigNumber` |

#### Inherited from

[MasaShape](MasaShape.md).[identity](MasaShape.md#identity)

___

### isConnected

• `Optional` **isConnected**: `boolean`

#### Inherited from

[MasaShape](MasaShape.md).[isConnected](MasaShape.md#isconnected)

___

### isModalOpen

• `Optional` **isModalOpen**: `boolean`

#### Inherited from

[MasaShape](MasaShape.md).[isModalOpen](MasaShape.md#ismodalopen)

___

### loadCreditScores

• `Optional` **loadCreditScores**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[MasaShape](MasaShape.md).[loadCreditScores](MasaShape.md#loadcreditscores)

___

### loadSoulnames

• `Optional` **loadSoulnames**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[MasaShape](MasaShape.md).[loadSoulnames](MasaShape.md#loadsoulnames)

___

### loading

• `Optional` **loading**: `boolean`

#### Inherited from

[MasaShape](MasaShape.md).[loading](MasaShape.md#loading)

___

### loggedIn

• `Optional` **loggedIn**: `boolean`

#### Inherited from

[MasaShape](MasaShape.md).[loggedIn](MasaShape.md#loggedin)

___

### logginLoading

• `Optional` **logginLoading**: `boolean`

#### Inherited from

[MasaShape](MasaShape.md).[logginLoading](MasaShape.md#logginloading)

___

### masa

• `Optional` **masa**: `default`

#### Inherited from

[MasaShape](MasaShape.md).[masa](MasaShape.md#masa)

___

### missingProvider

• `Optional` **missingProvider**: `boolean`

#### Inherited from

[MasaShape](MasaShape.md).[missingProvider](MasaShape.md#missingprovider)

___

### network

• `Optional` **network**: ``null`` \| `Network`

#### Inherited from

[MasaShape](MasaShape.md).[network](MasaShape.md#network)

___

### networkName

• `Optional` **networkName**: `NetworkName`

#### Overrides

[MasaShape](MasaShape.md).[networkName](MasaShape.md#networkname)

___

### noWallet

• `Optional` **noWallet**: `boolean`

___

### provider

• `Optional` **provider**: ``null`` \| `Wallet` \| `Signer`

#### Inherited from

[MasaShape](MasaShape.md).[provider](MasaShape.md#provider)

___

### scope

• `Optional` **scope**: `string`[]

#### Inherited from

[MasaShape](MasaShape.md).[scope](MasaShape.md#scope)

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

#### Inherited from

[MasaShape](MasaShape.md).[setMissingProvider](MasaShape.md#setmissingprovider)

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

#### Inherited from

[MasaShape](MasaShape.md).[setModalOpen](MasaShape.md#setmodalopen)

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

#### Inherited from

[MasaShape](MasaShape.md).[setProvider](MasaShape.md#setprovider)

___

### signer

• `Optional` **signer**: `Wallet` \| `Signer`

___

### soulnames

• `Optional` **soulnames**: ``null`` \| `SoulNameDetails`[]

#### Inherited from

[MasaShape](MasaShape.md).[soulnames](MasaShape.md#soulnames)

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

#### Inherited from

[MasaShape](MasaShape.md).[switchNetwork](MasaShape.md#switchnetwork)

___

### verbose

• `Optional` **verbose**: `boolean`

___

### walletAddress

• `Optional` **walletAddress**: `string`

#### Inherited from

[MasaShape](MasaShape.md).[walletAddress](MasaShape.md#walletaddress)
