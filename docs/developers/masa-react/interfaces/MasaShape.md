[# Masa React
 - v2.0.6](../README.md) / [Exports](../modules.md) / MasaShape

# Interface: MasaShape

## Hierarchy

- **`MasaShape`**

  ↳ [`MasaContextProviderProps`](MasaContextProviderProps.md)

## Table of contents

### Properties

- [SupportedNetworks](MasaShape.md#supportednetworks)
- [accountAddress](MasaShape.md#accountaddress)
- [areScopesFullfiled](MasaShape.md#arescopesfullfiled)
- [badges](MasaShape.md#badges)
- [children](MasaShape.md#children)
- [closeModal](MasaShape.md#closemodal)
- [company](MasaShape.md#company)
- [connect](MasaShape.md#connect)
- [creditScores](MasaShape.md#creditscores)
- [currentNetwork](MasaShape.md#currentnetwork)
- [currentNetworkNew](MasaShape.md#currentnetworknew)
- [customGallerySBT](MasaShape.md#customgallerysbt)
- [customSBTs](MasaShape.md#customsbts)
- [forceNetwork](MasaShape.md#forcenetwork)
- [forcedPage](MasaShape.md#forcedpage)
- [fullScreenGallery](MasaShape.md#fullscreengallery)
- [greens](MasaShape.md#greens)
- [handleAddSBT](MasaShape.md#handleaddsbt)
- [handleCreateCreditScore](MasaShape.md#handlecreatecreditscore)
- [handleCreateGreen](MasaShape.md#handlecreategreen)
- [handleGenerateGreen](MasaShape.md#handlegenerategreen)
- [handleLogin](MasaShape.md#handlelogin)
- [handleLogout](MasaShape.md#handlelogout)
- [handlePurchaseIdentity](MasaShape.md#handlepurchaseidentity)
- [handlePurchaseIdentityWithSoulname](MasaShape.md#handlepurchaseidentitywithsoulname)
- [hasAccountAddress](MasaShape.md#hasaccountaddress)
- [hasWalletAddress](MasaShape.md#haswalletaddress)
- [identity](MasaShape.md#identity)
- [isConnected](MasaShape.md#isconnected)
- [isCreditScoresLoading](MasaShape.md#iscreditscoresloading)
- [isDisconnected](MasaShape.md#isdisconnected)
- [isGreensLoading](MasaShape.md#isgreensloading)
- [isIdentityLoading](MasaShape.md#isidentityloading)
- [isLoading](MasaShape.md#isloading)
- [isLoadingCustomSBTs](MasaShape.md#isloadingcustomsbts)
- [isLoggedIn](MasaShape.md#isloggedin)
- [isModalOpen](MasaShape.md#ismodalopen)
- [isSessionLoading](MasaShape.md#issessionloading)
- [isSoulnamesLoading](MasaShape.md#issoulnamesloading)
- [isWalletLoading](MasaShape.md#iswalletloading)
- [logout](MasaShape.md#logout)
- [masa](MasaShape.md#masa)
- [modalSize](MasaShape.md#modalsize)
- [openAccountModal](MasaShape.md#openaccountmodal)
- [openAuthenticateModal](MasaShape.md#openauthenticatemodal)
- [openChainModal](MasaShape.md#openchainmodal)
- [openConnectModal](MasaShape.md#openconnectmodal)
- [openConnectedModal](MasaShape.md#openconnectedmodal)
- [openCreateCreditScoreModal](MasaShape.md#opencreatecreditscoremodal)
- [openCreateIdentityModal](MasaShape.md#opencreateidentitymodal)
- [openCreateSoulnameModal](MasaShape.md#opencreatesoulnamemodal)
- [openGallery](MasaShape.md#opengallery)
- [openInterfaceMasaGreen](MasaShape.md#openinterfacemasagreen)
- [openMintMasaGreen](MasaShape.md#openmintmasagreen)
- [openMintSoulnameModal](MasaShape.md#openmintsoulnamemodal)
- [openModal](MasaShape.md#openmodal)
- [openSuccessCreateIdentityModal](MasaShape.md#opensuccesscreateidentitymodal)
- [openSwitchChainModal](MasaShape.md#openswitchchainmodal)
- [refetchContracts](MasaShape.md#refetchcontracts)
- [reloadCreditScores](MasaShape.md#reloadcreditscores)
- [reloadGreens](MasaShape.md#reloadgreens)
- [reloadIdentity](MasaShape.md#reloadidentity)
- [reloadSoulnames](MasaShape.md#reloadsoulnames)
- [scope](MasaShape.md#scope)
- [setForcedPage](MasaShape.md#setforcedpage)
- [setModalOpen](MasaShape.md#setmodalopen)
- [setRainbowkKitModalCallback](MasaShape.md#setrainbowkkitmodalcallback)
- [setSigner](MasaShape.md#setsigner)
- [signer](MasaShape.md#signer)
- [soulnames](MasaShape.md#soulnames)
- [switchNetwork](MasaShape.md#switchnetwork)
- [switchNetworkNew](MasaShape.md#switchnetworknew)
- [useModalSize](MasaShape.md#usemodalsize)
- [useRainbowKit](MasaShape.md#userainbowkit)
- [verbose](MasaShape.md#verbose)
- [walletAddress](MasaShape.md#walletaddress)

## Properties

### SupportedNetworks

• `Optional` **SupportedNetworks**: `Partial`<{ `alfajores`: `Network` ; `basegoerli`: `Network` ; `bsc`: `Network` ; `bsctest`: `Network` ; `celo`: `Network` ; `ethereum`: `Network` ; `goerli`: `Network` ; `mumbai`: `Network` ; `polygon`: `Network` ; `unknown`: `Network`  }\>

___

### accountAddress

• `Optional` **accountAddress**: `string`

___

### areScopesFullfiled

• `Optional` **areScopesFullfiled**: `boolean`

___

### badges

• `Optional` **badges**: `any`[]

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

### currentNetworkNew

• `Optional` **currentNetworkNew**: `GetNetworkResult`

___

### customGallerySBT

• `Optional` **customGallerySBT**: `CustomGallerySBT`[]

___

### customSBTs

• `Optional` **customSBTs**: `any`[]

___

### forceNetwork

• `Optional` **forceNetwork**: `NetworkName`

___

### forcedPage

• `Optional` **forcedPage**: ``null`` \| `string`

___

### fullScreenGallery

• `Optional` **fullScreenGallery**: `boolean`

___

### greens

• `Optional` **greens**: { `metadata?`: `IGreen` ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]

___

### handleAddSBT

• `Optional` **handleAddSBT**: (`isCollection`: `boolean`, `name`: `string`, `address`: `string`) => `void`

#### Type declaration

▸ (`isCollection`, `name`, `address`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `isCollection` | `boolean` |
| `name` | `string` |
| `address` | `string` |

##### Returns

`void`

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

### hasAccountAddress

• `Optional` **hasAccountAddress**: `boolean`

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

### isConnected

• `Optional` **isConnected**: `boolean`

___

### isCreditScoresLoading

• `Optional` **isCreditScoresLoading**: `boolean`

___

### isDisconnected

• `Optional` **isDisconnected**: `boolean`

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

### isLoadingCustomSBTs

• `Optional` **isLoadingCustomSBTs**: `boolean`

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

### logout

• `Optional` **logout**: () => `Promise`<`boolean`\>

#### Type declaration

▸ (): `Promise`<`boolean`\>

##### Returns

`Promise`<`boolean`\>

___

### masa

• `Optional` **masa**: `default`

___

### modalSize

• `Optional` **modalSize**: ``null`` \| { `height`: `number` ; `width`: `number`  }

___

### openAccountModal

• `Optional` **openAccountModal**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

___

### openAuthenticateModal

• `Optional` **openAuthenticateModal**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

___

### openChainModal

• `Optional` **openChainModal**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

___

### openConnectModal

• `Optional` **openConnectModal**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

___

### openConnectedModal

• `Optional` **openConnectedModal**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

___

### openCreateCreditScoreModal

• `Optional` **openCreateCreditScoreModal**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

___

### openCreateIdentityModal

• `Optional` **openCreateIdentityModal**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

___

### openCreateSoulnameModal

• `Optional` **openCreateSoulnameModal**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

___

### openGallery

• `Optional` **openGallery**: (`callback?`: () => `void`) => `void`

#### Type declaration

▸ (`callback?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

##### Returns

`void`

___

### openInterfaceMasaGreen

• `Optional` **openInterfaceMasaGreen**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

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

### openModal

• `Optional` **openModal**: (`__namedParameters`: { `contentProps`: `any` ; `name`: [`ModalName`](../modules.md#modalname) ; `title?`: `ReactNode` ; `wrapperProps?`: [`WrapperModalProps`](WrapperModalProps.md)  }) => `void`

#### Type declaration

▸ (`«destructured»`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `contentProps` | `any` |
| › `name` | [`ModalName`](../modules.md#modalname) |
| › `title?` | `ReactNode` |
| › `wrapperProps?` | [`WrapperModalProps`](WrapperModalProps.md) |

##### Returns

`void`

___

### openSuccessCreateIdentityModal

• `Optional` **openSuccessCreateIdentityModal**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

___

### openSwitchChainModal

• `Optional` **openSwitchChainModal**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

___

### refetchContracts

• `Optional` **refetchContracts**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

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

### setRainbowkKitModalCallback

• `Optional` **setRainbowkKitModalCallback**: `Dispatch`<`SetStateAction`<`undefined` \| (`modalOpen?`: `boolean`) => `void`\>\>

___

### setSigner

• `Optional` **setSigner**: (`signer?`: `Signer`) => `void`

#### Type declaration

▸ (`signer?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `signer?` | `Signer` |

##### Returns

`void`

___

### signer

• `Optional` **signer**: `Signer`

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

### switchNetworkNew

• `Optional` **switchNetworkNew**: (`forcedNetworkParam`: `NetworkName`) => `void`

#### Type declaration

▸ (`forcedNetworkParam`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `forcedNetworkParam` | `NetworkName` |

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

### useRainbowKit

• `Optional` **useRainbowKit**: `boolean`

___

### verbose

• `Optional` **verbose**: `boolean`

___

### walletAddress

• `Optional` **walletAddress**: `string`
