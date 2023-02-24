[# Masa React
 - v0.28.0-alpha.3](../README.md) / [Exports](../modules.md) / MasaContextProviderProps

# Interface: MasaContextProviderProps

## Hierarchy

- `MasaShape`

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
- [greens](MasaContextProviderProps.md#greens)
- [handleCreateCreditScore](MasaContextProviderProps.md#handlecreatecreditscore)
- [handleCreateGreen](MasaContextProviderProps.md#handlecreategreen)
- [handleGenerateGreen](MasaContextProviderProps.md#handlegenerategreen)
- [handleLogin](MasaContextProviderProps.md#handlelogin)
- [handleLogout](MasaContextProviderProps.md#handlelogout)
- [handlePurchaseIdentity](MasaContextProviderProps.md#handlepurchaseidentity)
- [identity](MasaContextProviderProps.md#identity)
- [isConnected](MasaContextProviderProps.md#isconnected)
- [isCreditScoresLoading](MasaContextProviderProps.md#iscreditscoresloading)
- [isGreensLoading](MasaContextProviderProps.md#isgreensloading)
- [isIdentityLoading](MasaContextProviderProps.md#isidentityloading)
- [isLoading](MasaContextProviderProps.md#isloading)
- [isLoggedIn](MasaContextProviderProps.md#isloggedin)
- [isModalOpen](MasaContextProviderProps.md#ismodalopen)
- [isSessionLoading](MasaContextProviderProps.md#issessionloading)
- [isSoulnamesLoading](MasaContextProviderProps.md#issoulnamesloading)
- [isWalletLoading](MasaContextProviderProps.md#iswalletloading)
- [masa](MasaContextProviderProps.md#masa)
- [network](MasaContextProviderProps.md#network)
- [networkName](MasaContextProviderProps.md#networkname)
- [noWallet](MasaContextProviderProps.md#nowallet)
- [provider](MasaContextProviderProps.md#provider)
- [reloadCreditScores](MasaContextProviderProps.md#reloadcreditscores)
- [reloadGreens](MasaContextProviderProps.md#reloadgreens)
- [reloadIdentity](MasaContextProviderProps.md#reloadidentity)
- [reloadSoulnames](MasaContextProviderProps.md#reloadsoulnames)
- [scope](MasaContextProviderProps.md#scope)
- [setModalOpen](MasaContextProviderProps.md#setmodalopen)
- [setProvider](MasaContextProviderProps.md#setprovider)
- [signer](MasaContextProviderProps.md#signer)
- [soulnames](MasaContextProviderProps.md#soulnames)
- [switchNetwork](MasaContextProviderProps.md#switchnetwork)
- [verbose](MasaContextProviderProps.md#verbose)
- [walletAddress](MasaContextProviderProps.md#walletaddress)

## Properties

### SupportedNetworks

• `Optional` **SupportedNetworks**: `Partial`<{ `alfajores`: [`Network`](Network.md) ; `bsc`: [`Network`](Network.md) ; `bsctest`: [`Network`](Network.md) ; `celo`: [`Network`](Network.md) ; `ethereum`: [`Network`](Network.md) ; `goerli`: [`Network`](Network.md) ; `mainnet`: [`Network`](Network.md) ; `mumbai`: [`Network`](Network.md) ; `polygon`: [`Network`](Network.md) ; `unknown`: [`Network`](Network.md)  }\>

#### Inherited from

MasaShape.SupportedNetworks

___

### arweaveConfig

• `Optional` **arweaveConfig**: [`ArweaveConfig`](ArweaveConfig.md)

___

### children

• **children**: `ReactNode`

#### Overrides

MasaShape.children

___

### closeModal

• `Optional` **closeModal**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

MasaShape.closeModal

___

### company

• `Optional` **company**: `string`

#### Overrides

MasaShape.company

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

MasaShape.connect

___

### creditScores

• `Optional` **creditScores**: { `metadata?`: `ICreditScore` ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]

#### Inherited from

MasaShape.creditScores

___

### environmentName

• `Optional` **environmentName**: `undefined`

___

### greens

• `Optional` **greens**: { `metadata?`: `IGreen` ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]

#### Inherited from

MasaShape.greens

___

### handleCreateCreditScore

• `Optional` **handleCreateCreditScore**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

MasaShape.handleCreateCreditScore

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

MasaShape.handleCreateGreen

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

MasaShape.handleGenerateGreen

___

### handleLogin

• `Optional` **handleLogin**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

MasaShape.handleLogin

___

### handleLogout

• `Optional` **handleLogout**: (`logoutCallback?`: () => `void`) => `void`

#### Type declaration

▸ (`logoutCallback?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `logoutCallback?` | () => `void` |

##### Returns

`void`

#### Inherited from

MasaShape.handleLogout

___

### handlePurchaseIdentity

• `Optional` **handlePurchaseIdentity**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

MasaShape.handlePurchaseIdentity

___

### identity

• `Optional` **identity**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address?` | `string` |
| `identityId?` | `BigNumber` |

#### Inherited from

MasaShape.identity

___

### isConnected

• `Optional` **isConnected**: `boolean`

#### Inherited from

MasaShape.isConnected

___

### isCreditScoresLoading

• `Optional` **isCreditScoresLoading**: `boolean`

#### Inherited from

MasaShape.isCreditScoresLoading

___

### isGreensLoading

• `Optional` **isGreensLoading**: `boolean`

#### Inherited from

MasaShape.isGreensLoading

___

### isIdentityLoading

• `Optional` **isIdentityLoading**: `boolean`

#### Inherited from

MasaShape.isIdentityLoading

___

### isLoading

• `Optional` **isLoading**: `boolean`

#### Inherited from

MasaShape.isLoading

___

### isLoggedIn

• `Optional` **isLoggedIn**: `boolean`

#### Inherited from

MasaShape.isLoggedIn

___

### isModalOpen

• `Optional` **isModalOpen**: `boolean`

#### Inherited from

MasaShape.isModalOpen

___

### isSessionLoading

• `Optional` **isSessionLoading**: `boolean`

#### Inherited from

MasaShape.isSessionLoading

___

### isSoulnamesLoading

• `Optional` **isSoulnamesLoading**: `boolean`

#### Inherited from

MasaShape.isSoulnamesLoading

___

### isWalletLoading

• `Optional` **isWalletLoading**: `boolean`

#### Inherited from

MasaShape.isWalletLoading

___

### masa

• `Optional` **masa**: `default`

#### Inherited from

MasaShape.masa

___

### network

• `Optional` **network**: `Network`

#### Inherited from

MasaShape.network

___

### networkName

• `Optional` **networkName**: `NetworkName`

#### Overrides

MasaShape.networkName

___

### noWallet

• `Optional` **noWallet**: `boolean`

___

### provider

• `Optional` **provider**: `Signer` \| `Wallet`

#### Inherited from

MasaShape.provider

___

### reloadCreditScores

• `Optional` **reloadCreditScores**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

MasaShape.reloadCreditScores

___

### reloadGreens

• `Optional` **reloadGreens**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

MasaShape.reloadGreens

___

### reloadIdentity

• `Optional` **reloadIdentity**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

MasaShape.reloadIdentity

___

### reloadSoulnames

• `Optional` **reloadSoulnames**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

MasaShape.reloadSoulnames

___

### scope

• `Optional` **scope**: `string`[]

#### Inherited from

MasaShape.scope

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

MasaShape.setModalOpen

___

### setProvider

• `Optional` **setProvider**: (`provider?`: `Signer` \| `Wallet`) => `void`

#### Type declaration

▸ (`provider?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `provider?` | `Signer` \| `Wallet` |

##### Returns

`void`

#### Inherited from

MasaShape.setProvider

___

### signer

• `Optional` **signer**: `Signer` \| `Wallet`

___

### soulnames

• `Optional` **soulnames**: `SoulNameDetails`[]

#### Inherited from

MasaShape.soulnames

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

MasaShape.switchNetwork

___

### verbose

• `Optional` **verbose**: `boolean`

___

### walletAddress

• `Optional` **walletAddress**: `string`

#### Inherited from

MasaShape.walletAddress
