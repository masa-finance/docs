[# Masa React
 - v1.0.1](../README.md) / [Exports](../modules.md) / MasaContextProviderProps

# Interface: MasaContextProviderProps

## Hierarchy

- [`MasaShape`](MasaShape.md)

  ↳ **`MasaContextProviderProps`**

## Table of contents

### Properties

- [SupportedNetworks](MasaContextProviderProps.md#supportednetworks)
- [areScopesFullfiled](MasaContextProviderProps.md#arescopesfullfiled)
- [arweaveConfig](MasaContextProviderProps.md#arweaveconfig)
- [children](MasaContextProviderProps.md#children)
- [closeModal](MasaContextProviderProps.md#closemodal)
- [company](MasaContextProviderProps.md#company)
- [connect](MasaContextProviderProps.md#connect)
- [creditScores](MasaContextProviderProps.md#creditscores)
- [environmentName](MasaContextProviderProps.md#environmentname)
- [forcedPage](MasaContextProviderProps.md#forcedpage)
- [greens](MasaContextProviderProps.md#greens)
- [handleCreateCreditScore](MasaContextProviderProps.md#handlecreatecreditscore)
- [handleCreateGreen](MasaContextProviderProps.md#handlecreategreen)
- [handleGenerateGreen](MasaContextProviderProps.md#handlegenerategreen)
- [handleLogin](MasaContextProviderProps.md#handlelogin)
- [handleLogout](MasaContextProviderProps.md#handlelogout)
- [handlePurchaseIdentity](MasaContextProviderProps.md#handlepurchaseidentity)
- [handlePurchaseIdentityWithSoulname](MasaContextProviderProps.md#handlepurchaseidentitywithsoulname)
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
- [noWallet](MasaContextProviderProps.md#nowallet)
- [openMintSoulnameModal](MasaContextProviderProps.md#openmintsoulnamemodal)
- [provider](MasaContextProviderProps.md#provider)
- [reloadCreditScores](MasaContextProviderProps.md#reloadcreditscores)
- [reloadGreens](MasaContextProviderProps.md#reloadgreens)
- [reloadIdentity](MasaContextProviderProps.md#reloadidentity)
- [reloadSoulnames](MasaContextProviderProps.md#reloadsoulnames)
- [scope](MasaContextProviderProps.md#scope)
- [setForcedPage](MasaContextProviderProps.md#setforcedpage)
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

[MasaShape](MasaShape.md).[SupportedNetworks](MasaShape.md#supportednetworks)

___

### areScopesFullfiled

• `Optional` **areScopesFullfiled**: `boolean`

#### Inherited from

[MasaShape](MasaShape.md).[areScopesFullfiled](MasaShape.md#arescopesfullfiled)

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

• `Optional` **closeModal**: (`forceCallback?`: `boolean`) => `void`

#### Type declaration

▸ (`forceCallback?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `forceCallback?` | `boolean` |

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

• `Optional` **creditScores**: { `metadata?`: `ICreditScore` ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]

#### Inherited from

[MasaShape](MasaShape.md).[creditScores](MasaShape.md#creditscores)

___

### environmentName

• `Optional` **environmentName**: `undefined`

___

### forcedPage

• `Optional` **forcedPage**: ``null`` \| `string`

#### Inherited from

[MasaShape](MasaShape.md).[forcedPage](MasaShape.md#forcedpage)

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

### handlePurchaseIdentityWithSoulname

• `Optional` **handlePurchaseIdentityWithSoulname**: (`soulname`: `string`, `registrationPrice`: `number`, `paymentMethod`: `PaymentMethod`) => `Promise`<`boolean`\>

#### Type declaration

▸ (`soulname`, `registrationPrice`, `paymentMethod`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `soulname` | `string` |
| `registrationPrice` | `number` |
| `paymentMethod` | `PaymentMethod` |

##### Returns

`Promise`<`boolean`\>

#### Inherited from

[MasaShape](MasaShape.md).[handlePurchaseIdentityWithSoulname](MasaShape.md#handlepurchaseidentitywithsoulname)

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

### isCreditScoresLoading

• `Optional` **isCreditScoresLoading**: `boolean`

#### Inherited from

[MasaShape](MasaShape.md).[isCreditScoresLoading](MasaShape.md#iscreditscoresloading)

___

### isGreensLoading

• `Optional` **isGreensLoading**: `boolean`

#### Inherited from

[MasaShape](MasaShape.md).[isGreensLoading](MasaShape.md#isgreensloading)

___

### isIdentityLoading

• `Optional` **isIdentityLoading**: `boolean`

#### Inherited from

[MasaShape](MasaShape.md).[isIdentityLoading](MasaShape.md#isidentityloading)

___

### isLoading

• `Optional` **isLoading**: `boolean`

#### Inherited from

[MasaShape](MasaShape.md).[isLoading](MasaShape.md#isloading)

___

### isLoggedIn

• `Optional` **isLoggedIn**: `boolean`

#### Inherited from

[MasaShape](MasaShape.md).[isLoggedIn](MasaShape.md#isloggedin)

___

### isModalOpen

• `Optional` **isModalOpen**: `boolean`

#### Inherited from

[MasaShape](MasaShape.md).[isModalOpen](MasaShape.md#ismodalopen)

___

### isSessionLoading

• `Optional` **isSessionLoading**: `boolean`

#### Inherited from

[MasaShape](MasaShape.md).[isSessionLoading](MasaShape.md#issessionloading)

___

### isSoulnamesLoading

• `Optional` **isSoulnamesLoading**: `boolean`

#### Inherited from

[MasaShape](MasaShape.md).[isSoulnamesLoading](MasaShape.md#issoulnamesloading)

___

### isWalletLoading

• `Optional` **isWalletLoading**: `boolean`

#### Inherited from

[MasaShape](MasaShape.md).[isWalletLoading](MasaShape.md#iswalletloading)

___

### masa

• `Optional` **masa**: `default`

#### Inherited from

[MasaShape](MasaShape.md).[masa](MasaShape.md#masa)

___

### network

• `Optional` **network**: `Network`

#### Inherited from

[MasaShape](MasaShape.md).[network](MasaShape.md#network)

___

### noWallet

• `Optional` **noWallet**: `boolean`

___

### openMintSoulnameModal

• `Optional` **openMintSoulnameModal**: (`callback?`: () => `void`) => `void`

#### Type declaration

▸ (`callback?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

##### Returns

`void`

#### Inherited from

[MasaShape](MasaShape.md).[openMintSoulnameModal](MasaShape.md#openmintsoulnamemodal)

___

### provider

• `Optional` **provider**: `Signer` \| `Wallet`

#### Inherited from

[MasaShape](MasaShape.md).[provider](MasaShape.md#provider)

___

### reloadCreditScores

• `Optional` **reloadCreditScores**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[MasaShape](MasaShape.md).[reloadCreditScores](MasaShape.md#reloadcreditscores)

___

### reloadGreens

• `Optional` **reloadGreens**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[MasaShape](MasaShape.md).[reloadGreens](MasaShape.md#reloadgreens)

___

### reloadIdentity

• `Optional` **reloadIdentity**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[MasaShape](MasaShape.md).[reloadIdentity](MasaShape.md#reloadidentity)

___

### reloadSoulnames

• `Optional` **reloadSoulnames**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[MasaShape](MasaShape.md).[reloadSoulnames](MasaShape.md#reloadsoulnames)

___

### scope

• `Optional` **scope**: `string`[]

#### Inherited from

[MasaShape](MasaShape.md).[scope](MasaShape.md#scope)

___

### setForcedPage

• `Optional` **setForcedPage**: (`page`: ``null`` \| `string`) => `void`

#### Type declaration

▸ (`page`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `page` | ``null`` \| `string` |

##### Returns

`void`

#### Inherited from

[MasaShape](MasaShape.md).[setForcedPage](MasaShape.md#setforcedpage)

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

[MasaShape](MasaShape.md).[setProvider](MasaShape.md#setprovider)

___

### signer

• `Optional` **signer**: `Signer` \| `Wallet`

___

### soulnames

• `Optional` **soulnames**: `SoulNameDetails`[]

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
