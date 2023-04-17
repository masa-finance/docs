[Masa React](../README.md) / [Exports](../modules.md) / MasaShape

# Interface: MasaShape

## Hierarchy

- **`MasaShape`**

  ↳ [`MasaContextProviderProps`](MasaContextProviderProps.md)

## Table of contents

### Properties

- [SupportedNetworks](MasaShape.md#supportednetworks)
- [areScopesFullfiled](MasaShape.md#arescopesfullfiled)
- [children](MasaShape.md#children)
- [closeModal](MasaShape.md#closemodal)
- [company](MasaShape.md#company)
- [connect](MasaShape.md#connect)
- [creditScores](MasaShape.md#creditscores)
- [currentNetwork](MasaShape.md#currentnetwork)
- [forceNetwork](MasaShape.md#forcenetwork)
- [forcedPage](MasaShape.md#forcedpage)
- [greens](MasaShape.md#greens)
- [handleCreateCreditScore](MasaShape.md#handlecreatecreditscore)
- [handleCreateGreen](MasaShape.md#handlecreategreen)
- [handleGenerateGreen](MasaShape.md#handlegenerategreen)
- [handleLogin](MasaShape.md#handlelogin)
- [handleLogout](MasaShape.md#handlelogout)
- [handlePurchaseIdentity](MasaShape.md#handlepurchaseidentity)
- [handlePurchaseIdentityWithSoulname](MasaShape.md#handlepurchaseidentitywithsoulname)
- [hasWalletAddress](MasaShape.md#haswalletaddress)
- [identity](MasaShape.md#identity)
- [isCreditScoresLoading](MasaShape.md#iscreditscoresloading)
- [isGreensLoading](MasaShape.md#isgreensloading)
- [isIdentityLoading](MasaShape.md#isidentityloading)
- [isLoading](MasaShape.md#isloading)
- [isLoggedIn](MasaShape.md#isloggedin)
- [isModalOpen](MasaShape.md#ismodalopen)
- [isSessionLoading](MasaShape.md#issessionloading)
- [isSoulnamesLoading](MasaShape.md#issoulnamesloading)
- [isWalletLoading](MasaShape.md#iswalletloading)
- [masa](MasaShape.md#masa)
- [modalSize](MasaShape.md#modalsize)
- [openMintMasaGreen](MasaShape.md#openmintmasagreen)
- [openMintSoulnameModal](MasaShape.md#openmintsoulnamemodal)
- [provider](MasaShape.md#provider)
- [reloadCreditScores](MasaShape.md#reloadcreditscores)
- [reloadGreens](MasaShape.md#reloadgreens)
- [reloadIdentity](MasaShape.md#reloadidentity)
- [reloadSoulnames](MasaShape.md#reloadsoulnames)
- [scope](MasaShape.md#scope)
- [setForcedPage](MasaShape.md#setforcedpage)
- [setModalOpen](MasaShape.md#setmodalopen)
- [setProvider](MasaShape.md#setprovider)
- [soulnames](MasaShape.md#soulnames)
- [switchNetwork](MasaShape.md#switchnetwork)
- [useModalSize](MasaShape.md#usemodalsize)
- [verbose](MasaShape.md#verbose)
- [walletAddress](MasaShape.md#walletaddress)

## Properties

### SupportedNetworks

• `Optional` **SupportedNetworks**: `Partial`<{ `alfajores`: `Network` ; `basegoerli`: `Network` ; `bsc`: `Network` ; `bsctest`: `Network` ; `celo`: `Network` ; `ethereum`: `Network` ; `goerli`: `Network` ; `mainnet`: `Network` ; `mumbai`: `Network` ; `polygon`: `Network` ; `unknown`: `Network`  }\>

___

### areScopesFullfiled

• `Optional` **areScopesFullfiled**: `boolean`

___

### children

• `Optional` **children**: `ReactNode`

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

• `Optional` **creditScores**: { `metadata?`: `ICreditScore` ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]

___

### currentNetwork

• `Optional` **currentNetwork**: `Network`

___

### forceNetwork

• `Optional` **forceNetwork**: `NetworkName`

___

### forcedPage

• `Optional` **forcedPage**: ``null`` \| `string`

___

### greens

• `Optional` **greens**: { `metadata?`: `IGreen` ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]

___

### handleCreateCreditScore

• `Optional` **handleCreateCreditScore**: () => `Promise`<`undefined` \| `boolean`\>

#### Type declaration

▸ (): `Promise`<`undefined` \| `boolean`\>

##### Returns

`Promise`<`undefined` \| `boolean`\>

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

• `Optional` **handleLogout**: (`logoutCallback?`: () => `void`) => `Promise`<`void`\>

#### Type declaration

▸ (`logoutCallback?`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `logoutCallback?` | () => `void` |

##### Returns

`Promise`<`void`\>

___

### handlePurchaseIdentity

• `Optional` **handlePurchaseIdentity**: () => `Promise`<`undefined` \| `boolean`\>

#### Type declaration

▸ (): `Promise`<`undefined` \| `boolean`\>

##### Returns

`Promise`<`undefined` \| `boolean`\>

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

___

### hasWalletAddress

• `Optional` **hasWalletAddress**: `boolean`

___

### identity

• `Optional` **identity**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address?` | `string` |
| `identityId?` | `BigNumber` |

___

### isCreditScoresLoading

• `Optional` **isCreditScoresLoading**: `boolean`

___

### isGreensLoading

• `Optional` **isGreensLoading**: `boolean`

___

### isIdentityLoading

• `Optional` **isIdentityLoading**: `boolean`

___

### isLoading

• `Optional` **isLoading**: `boolean`

___

### isLoggedIn

• `Optional` **isLoggedIn**: `boolean`

___

### isModalOpen

• `Optional` **isModalOpen**: `boolean`

___

### isSessionLoading

• `Optional` **isSessionLoading**: `boolean`

___

### isSoulnamesLoading

• `Optional` **isSoulnamesLoading**: `boolean`

___

### isWalletLoading

• `Optional` **isWalletLoading**: `boolean`

___

### masa

• `Optional` **masa**: `default`

___

### modalSize

• `Optional` **modalSize**: ``null`` \| { `height`: `number` ; `width`: `number`  }

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

___

### provider

• `Optional` **provider**: `Wallet` \| `Signer`

___

### reloadCreditScores

• `Optional` **reloadCreditScores**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

___

### reloadGreens

• `Optional` **reloadGreens**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

___

### reloadIdentity

• `Optional` **reloadIdentity**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

___

### reloadSoulnames

• `Optional` **reloadSoulnames**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

___

### scope

• `Optional` **scope**: `string`[]

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

• `Optional` **setProvider**: (`provider?`: `Wallet` \| `Signer`) => `void`

#### Type declaration

▸ (`provider?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `provider?` | `Wallet` \| `Signer` |

##### Returns

`void`

___

### soulnames

• `Optional` **soulnames**: `SoulNameDetails`[]

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

___

### verbose

• `Optional` **verbose**: `boolean`

___

### walletAddress

• `Optional` **walletAddress**: `string`
