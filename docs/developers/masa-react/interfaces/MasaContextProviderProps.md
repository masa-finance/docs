[# Masa React
 - v0.23.3](../README.md) / [Exports](../modules.md) / MasaContextProviderProps

# Interface: MasaContextProviderProps

## Hierarchy

- [`MasaShape`](MasaShape.md)

  ↳ **`MasaContextProviderProps`**

## Table of contents

### Properties

- [arweaveConfig](MasaContextProviderProps.md#arweaveconfig)
- [children](MasaContextProviderProps.md#children)
- [closeModal](MasaContextProviderProps.md#closemodal)
- [company](MasaContextProviderProps.md#company)
- [connect](MasaContextProviderProps.md#connect)
- [cookie](MasaContextProviderProps.md#cookie)
- [creditScores](MasaContextProviderProps.md#creditscores)
- [environment](MasaContextProviderProps.md#environment)
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
- [noWallet](MasaContextProviderProps.md#nowallet)
- [provider](MasaContextProviderProps.md#provider)
- [scope](MasaContextProviderProps.md#scope)
- [setMissingProvider](MasaContextProviderProps.md#setmissingprovider)
- [setModalOpen](MasaContextProviderProps.md#setmodalopen)
- [setProvider](MasaContextProviderProps.md#setprovider)
- [signer](MasaContextProviderProps.md#signer)
- [soulnames](MasaContextProviderProps.md#soulnames)
- [walletAddress](MasaContextProviderProps.md#walletaddress)

## Properties

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

### cookie

• `Optional` **cookie**: `string`

___

### creditScores

• `Optional` **creditScores**: ``null`` \| { `metadata?`: `ICreditScore` ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]

#### Inherited from

[MasaShape](MasaShape.md).[creditScores](MasaShape.md#creditscores)

___

### environment

• `Optional` **environment**: `undefined`

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

• `Optional` **handleCreateGreen**: (`phoneNumber`: `string`, `code`: `string`) => `void`

#### Type declaration

▸ (`phoneNumber`, `code`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `phoneNumber` | `string` |
| `code` | `string` |

##### Returns

`void`

#### Inherited from

[MasaShape](MasaShape.md).[handleCreateGreen](MasaShape.md#handlecreategreen)

___

### handleGenerateGreen

• `Optional` **handleGenerateGreen**: (`phoneNumber`: `string`) => `void`

#### Type declaration

▸ (`phoneNumber`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `phoneNumber` | `string` |

##### Returns

`void`

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

### walletAddress

• `Optional` **walletAddress**: `string`

#### Inherited from

[MasaShape](MasaShape.md).[walletAddress](MasaShape.md#walletaddress)
