[# Masa React
 - v1.1.40](../README.md) / [Exports](../modules.md) / MasaContextProviderProps

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
- [currentNetwork](MasaContextProviderProps.md#currentnetwork)
- [environmentName](MasaContextProviderProps.md#environmentname)
- [forceNetwork](MasaContextProviderProps.md#forcenetwork)
- [forcedPage](MasaContextProviderProps.md#forcedpage)
- [greens](MasaContextProviderProps.md#greens)
- [handleCreateCreditScore](MasaContextProviderProps.md#handlecreatecreditscore)
- [handleCreateGreen](MasaContextProviderProps.md#handlecreategreen)
- [handleGenerateGreen](MasaContextProviderProps.md#handlegenerategreen)
- [handleLogin](MasaContextProviderProps.md#handlelogin)
- [handleLogout](MasaContextProviderProps.md#handlelogout)
- [handlePurchaseIdentity](MasaContextProviderProps.md#handlepurchaseidentity)
- [handlePurchaseIdentityWithSoulname](MasaContextProviderProps.md#handlepurchaseidentitywithsoulname)
- [hasWalletAddress](MasaContextProviderProps.md#haswalletaddress)
- [identity](MasaContextProviderProps.md#identity)
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
- [modalSize](MasaContextProviderProps.md#modalsize)
- [noWallet](MasaContextProviderProps.md#nowallet)
- [openAccountModal](MasaContextProviderProps.md#openaccountmodal)
- [openChainModal](MasaContextProviderProps.md#openchainmodal)
- [openConnectModal](MasaContextProviderProps.md#openconnectmodal)
- [openMintMasaGreen](MasaContextProviderProps.md#openmintmasagreen)
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
- [useModalSize](MasaContextProviderProps.md#usemodalsize)
- [useRainbowKit](MasaContextProviderProps.md#userainbowkit)
- [useRainbowKitWalletConnect](MasaContextProviderProps.md#userainbowkitwalletconnect)
- [verbose](MasaContextProviderProps.md#verbose)
- [walletAddress](MasaContextProviderProps.md#walletaddress)

## Properties

### SupportedNetworks

• `Optional` **SupportedNetworks**: `Partial`<{ `alfajores`: `Network` ; `basegoerli`: `Network` ; `bsc`: `Network` ; `bsctest`: `Network` ; `celo`: `Network` ; `ethereum`: `Network` ; `goerli`: `Network` ; `mainnet`: `Network` ; `mumbai`: `Network` ; `polygon`: `Network` ; `unknown`: `Network`  }\>

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

• `Optional` **children**: `ReactNode`

#### Inherited from

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

#### Inherited from

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

### currentNetwork

• `Optional` **currentNetwork**: `Network`

#### Inherited from

[MasaShape](MasaShape.md).[currentNetwork](MasaShape.md#currentnetwork)

___

### environmentName

• `Optional` **environmentName**: `undefined`

___

### forceNetwork

• `Optional` **forceNetwork**: `NetworkName`

#### Inherited from

[MasaShape](MasaShape.md).[forceNetwork](MasaShape.md#forcenetwork)

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

• `Optional` **handleCreateCreditScore**: () => `Promise`<`undefined` \| `boolean`\>

#### Type declaration

▸ (): `Promise`<`undefined` \| `boolean`\>

##### Returns

`Promise`<`undefined` \| `boolean`\>

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

• `Optional` **handleLogout**: (`logoutCallback?`: () => `void`) => `Promise`<`void`\>

#### Type declaration

▸ (`logoutCallback?`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `logoutCallback?` | () => `void` |

##### Returns

`Promise`<`void`\>

#### Inherited from

[MasaShape](MasaShape.md).[handleLogout](MasaShape.md#handlelogout)

___

### handlePurchaseIdentity

• `Optional` **handlePurchaseIdentity**: () => `Promise`<`undefined` \| `boolean`\>

#### Type declaration

▸ (): `Promise`<`undefined` \| `boolean`\>

##### Returns

`Promise`<`undefined` \| `boolean`\>

#### Inherited from

[MasaShape](MasaShape.md).[handlePurchaseIdentity](MasaShape.md#handlepurchaseidentity)

___

### handlePurchaseIdentityWithSoulname

• `Optional` **handlePurchaseIdentityWithSoulname**: (`paymentMethod`: `PaymentMethod`, `soulname`: `string`, `registrationPrice`: `number`) => `Promise`<`boolean`\>

#### Type declaration

▸ (`paymentMethod`, `soulname`, `registrationPrice`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `paymentMethod` | `PaymentMethod` |
| `soulname` | `string` |
| `registrationPrice` | `number` |

##### Returns

`Promise`<`boolean`\>

#### Inherited from

[MasaShape](MasaShape.md).[handlePurchaseIdentityWithSoulname](MasaShape.md#handlepurchaseidentitywithsoulname)

___

### hasWalletAddress

• `Optional` **hasWalletAddress**: `boolean`

#### Inherited from

[MasaShape](MasaShape.md).[hasWalletAddress](MasaShape.md#haswalletaddress)

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

### modalSize

• `Optional` **modalSize**: ``null`` \| { `height`: `number` ; `width`: `number`  }

#### Inherited from

[MasaShape](MasaShape.md).[modalSize](MasaShape.md#modalsize)

___

### noWallet

• `Optional` **noWallet**: `boolean`

___

### openAccountModal

• `Optional` **openAccountModal**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[MasaShape](MasaShape.md).[openAccountModal](MasaShape.md#openaccountmodal)

___

### openChainModal

• `Optional` **openChainModal**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[MasaShape](MasaShape.md).[openChainModal](MasaShape.md#openchainmodal)

___

### openConnectModal

• `Optional` **openConnectModal**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[MasaShape](MasaShape.md).[openConnectModal](MasaShape.md#openconnectmodal)

___

### openMintMasaGreen

• `Optional` **openMintMasaGreen**: (`callback?`: () => `void`) => `void`

#### Type declaration

▸ (`callback?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

##### Returns

`void`

#### Inherited from

[MasaShape](MasaShape.md).[openMintMasaGreen](MasaShape.md#openmintmasagreen)

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

• `Optional` **provider**: `Wallet` \| `Signer`

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

• `Optional` **setProvider**: (`provider?`: `Wallet` \| `Signer`) => `void`

#### Type declaration

▸ (`provider?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `provider?` | `Wallet` \| `Signer` |

##### Returns

`void`

#### Inherited from

[MasaShape](MasaShape.md).[setProvider](MasaShape.md#setprovider)

___

### signer

• `Optional` **signer**: `Wallet` \| `Signer`

___

### soulnames

• `Optional` **soulnames**: `SoulNameDetails`[]

#### Inherited from

[MasaShape](MasaShape.md).[soulnames](MasaShape.md#soulnames)

___

### switchNetwork

• `Optional` **switchNetwork**: (`networkName`: `NetworkName`) => `void`

#### Type declaration

▸ (`networkName`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `networkName` | `NetworkName` |

##### Returns

`void`

#### Inherited from

[MasaShape](MasaShape.md).[switchNetwork](MasaShape.md#switchnetwork)

___

### useModalSize

• `Optional` **useModalSize**: (`size`: { `height`: `number` ; `width`: `number`  }) => `void`

#### Type declaration

▸ (`size`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `Object` |
| `size.height` | `number` |
| `size.width` | `number` |

##### Returns

`void`

#### Inherited from

[MasaShape](MasaShape.md).[useModalSize](MasaShape.md#usemodalsize)

___

### useRainbowKit

• `Optional` **useRainbowKit**: `boolean`

#### Inherited from

[MasaShape](MasaShape.md).[useRainbowKit](MasaShape.md#userainbowkit)

___

### useRainbowKitWalletConnect

• `Optional` **useRainbowKitWalletConnect**: `boolean`

___

### verbose

• `Optional` **verbose**: `boolean`

#### Inherited from

[MasaShape](MasaShape.md).[verbose](MasaShape.md#verbose)

___

### walletAddress

• `Optional` **walletAddress**: `string`

#### Inherited from

[MasaShape](MasaShape.md).[walletAddress](MasaShape.md#walletaddress)
