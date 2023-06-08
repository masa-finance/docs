[# Masa React
 - v2.3.15](../README.md) / [Exports](../modules.md) / MasaContextProviderProps

# Interface: MasaContextProviderProps

## Hierarchy

- [`MasaShape`](MasaShape.md)

  ↳ **`MasaContextProviderProps`**

## Table of contents

### Properties

- [SupportedNetworks](MasaContextProviderProps.md#supportednetworks)
- [accountAddress](MasaContextProviderProps.md#accountaddress)
- [apiUrl](MasaContextProviderProps.md#apiurl)
- [areScopesFullfiled](MasaContextProviderProps.md#arescopesfullfiled)
- [arweaveConfig](MasaContextProviderProps.md#arweaveconfig)
- [badges](MasaContextProviderProps.md#badges)
- [canProgramaticallySwitchNetwork](MasaContextProviderProps.md#canprogramaticallyswitchnetwork)
- [children](MasaContextProviderProps.md#children)
- [closeModal](MasaContextProviderProps.md#closemodal)
- [company](MasaContextProviderProps.md#company)
- [connect](MasaContextProviderProps.md#connect)
- [contractAddressOverrides](MasaContextProviderProps.md#contractaddressoverrides)
- [creditScores](MasaContextProviderProps.md#creditscores)
- [currentNetwork](MasaContextProviderProps.md#currentnetwork)
- [currentNetworkNew](MasaContextProviderProps.md#currentnetworknew)
- [customGallerySBT](MasaContextProviderProps.md#customgallerysbt)
- [customSBTs](MasaContextProviderProps.md#customsbts)
- [environmentName](MasaContextProviderProps.md#environmentname)
- [forceNetwork](MasaContextProviderProps.md#forcenetwork)
- [forcedPage](MasaContextProviderProps.md#forcedpage)
- [fullScreenGallery](MasaContextProviderProps.md#fullscreengallery)
- [greens](MasaContextProviderProps.md#greens)
- [handleAddSBT](MasaContextProviderProps.md#handleaddsbt)
- [handleCreateCreditScore](MasaContextProviderProps.md#handlecreatecreditscore)
- [handleCreateGreen](MasaContextProviderProps.md#handlecreategreen)
- [handleGenerateGreen](MasaContextProviderProps.md#handlegenerategreen)
- [handleLogin](MasaContextProviderProps.md#handlelogin)
- [handleLogout](MasaContextProviderProps.md#handlelogout)
- [handlePurchaseIdentity](MasaContextProviderProps.md#handlepurchaseidentity)
- [handlePurchaseIdentityWithSoulname](MasaContextProviderProps.md#handlepurchaseidentitywithsoulname)
- [hasAccountAddress](MasaContextProviderProps.md#hasaccountaddress)
- [hasWalletAddress](MasaContextProviderProps.md#haswalletaddress)
- [identity](MasaContextProviderProps.md#identity)
- [isConnected](MasaContextProviderProps.md#isconnected)
- [isCreditScoresLoading](MasaContextProviderProps.md#iscreditscoresloading)
- [isDisconnected](MasaContextProviderProps.md#isdisconnected)
- [isGreensLoading](MasaContextProviderProps.md#isgreensloading)
- [isIdentityLoading](MasaContextProviderProps.md#isidentityloading)
- [isLoading](MasaContextProviderProps.md#isloading)
- [isLoadingCustomSBTs](MasaContextProviderProps.md#isloadingcustomsbts)
- [isLoggedIn](MasaContextProviderProps.md#isloggedin)
- [isModalOpen](MasaContextProviderProps.md#ismodalopen)
- [isSessionLoading](MasaContextProviderProps.md#issessionloading)
- [isSoulnamesLoading](MasaContextProviderProps.md#issoulnamesloading)
- [isWalletLoading](MasaContextProviderProps.md#iswalletloading)
- [logout](MasaContextProviderProps.md#logout)
- [masa](MasaContextProviderProps.md#masa)
- [modalSize](MasaContextProviderProps.md#modalsize)
- [openAccountModal](MasaContextProviderProps.md#openaccountmodal)
- [openAuthenticateModal](MasaContextProviderProps.md#openauthenticatemodal)
- [openChainModal](MasaContextProviderProps.md#openchainmodal)
- [openConnectModal](MasaContextProviderProps.md#openconnectmodal)
- [openConnectedModal](MasaContextProviderProps.md#openconnectedmodal)
- [openCreateCreditScoreModal](MasaContextProviderProps.md#opencreatecreditscoremodal)
- [openCreateIdentityModal](MasaContextProviderProps.md#opencreateidentitymodal)
- [openCreateSoulnameModal](MasaContextProviderProps.md#opencreatesoulnamemodal)
- [openGallery](MasaContextProviderProps.md#opengallery)
- [openInterfaceMasaGreen](MasaContextProviderProps.md#openinterfacemasagreen)
- [openMintMasaGreen](MasaContextProviderProps.md#openmintmasagreen)
- [openMintSoulnameModal](MasaContextProviderProps.md#openmintsoulnamemodal)
- [openModal](MasaContextProviderProps.md#openmodal)
- [openSuccessCreateIdentityModal](MasaContextProviderProps.md#opensuccesscreateidentitymodal)
- [openSwitchChainModal](MasaContextProviderProps.md#openswitchchainmodal)
- [refetchContracts](MasaContextProviderProps.md#refetchcontracts)
- [reloadCreditScores](MasaContextProviderProps.md#reloadcreditscores)
- [reloadGreens](MasaContextProviderProps.md#reloadgreens)
- [reloadIdentity](MasaContextProviderProps.md#reloadidentity)
- [reloadSoulnames](MasaContextProviderProps.md#reloadsoulnames)
- [scope](MasaContextProviderProps.md#scope)
- [setForcedPage](MasaContextProviderProps.md#setforcedpage)
- [setModalOpen](MasaContextProviderProps.md#setmodalopen)
- [setRainbowkKitModalCallback](MasaContextProviderProps.md#setrainbowkkitmodalcallback)
- [setSigner](MasaContextProviderProps.md#setsigner)
- [signer](MasaContextProviderProps.md#signer)
- [soulNameStyle](MasaContextProviderProps.md#soulnamestyle)
- [soulnames](MasaContextProviderProps.md#soulnames)
- [switchNetwork](MasaContextProviderProps.md#switchnetwork)
- [switchNetworkNew](MasaContextProviderProps.md#switchnetworknew)
- [useModalSize](MasaContextProviderProps.md#usemodalsize)
- [useRainbowKit](MasaContextProviderProps.md#userainbowkit)
- [useRainbowKitWalletConnect](MasaContextProviderProps.md#userainbowkitwalletconnect)
- [verbose](MasaContextProviderProps.md#verbose)
- [walletAddress](MasaContextProviderProps.md#walletaddress)
- [walletName](MasaContextProviderProps.md#walletname)

## Properties

### SupportedNetworks

• `Optional` **SupportedNetworks**: `Partial`<{ `alfajores`: `Network` ; `basegoerli`: `Network` ; `bsc`: `Network` ; `bsctest`: `Network` ; `celo`: `Network` ; `ethereum`: `Network` ; `goerli`: `Network` ; `mumbai`: `Network` ; `polygon`: `Network` ; `unknown`: `Network`  }\>

#### Inherited from

[MasaShape](MasaShape.md).[SupportedNetworks](MasaShape.md#supportednetworks)

___

### accountAddress

• `Optional` **accountAddress**: `string`

#### Inherited from

[MasaShape](MasaShape.md).[accountAddress](MasaShape.md#accountaddress)

___

### apiUrl

• `Optional` **apiUrl**: `string`

___

### areScopesFullfiled

• `Optional` **areScopesFullfiled**: `boolean`

#### Inherited from

[MasaShape](MasaShape.md).[areScopesFullfiled](MasaShape.md#arescopesfullfiled)

___

### arweaveConfig

• `Optional` **arweaveConfig**: [`ArweaveConfig`](ArweaveConfig.md)

___

### badges

• `Optional` **badges**: `any`[]

#### Inherited from

[MasaShape](MasaShape.md).[badges](MasaShape.md#badges)

___

### canProgramaticallySwitchNetwork

• `Optional` **canProgramaticallySwitchNetwork**: `boolean`

#### Inherited from

[MasaShape](MasaShape.md).[canProgramaticallySwitchNetwork](MasaShape.md#canprogramaticallyswitchnetwork)

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

### contractAddressOverrides

• `Optional` **contractAddressOverrides**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `SoulNameAddress` | `string` |
| `SoulStoreAddress` | `string` |

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

### currentNetworkNew

• `Optional` **currentNetworkNew**: `GetNetworkResult`

#### Inherited from

[MasaShape](MasaShape.md).[currentNetworkNew](MasaShape.md#currentnetworknew)

___

### customGallerySBT

• `Optional` **customGallerySBT**: `CustomGallerySBT`[]

#### Overrides

[MasaShape](MasaShape.md).[customGallerySBT](MasaShape.md#customgallerysbt)

___

### customSBTs

• `Optional` **customSBTs**: `any`[]

#### Inherited from

[MasaShape](MasaShape.md).[customSBTs](MasaShape.md#customsbts)

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

### fullScreenGallery

• `Optional` **fullScreenGallery**: `boolean`

#### Overrides

[MasaShape](MasaShape.md).[fullScreenGallery](MasaShape.md#fullscreengallery)

___

### greens

• `Optional` **greens**: { `metadata?`: `IGreen` ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]

#### Inherited from

[MasaShape](MasaShape.md).[greens](MasaShape.md#greens)

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

#### Inherited from

[MasaShape](MasaShape.md).[handleAddSBT](MasaShape.md#handleaddsbt)

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

• `Optional` **handlePurchaseIdentityWithSoulname**: (`paymentMethod`: `PaymentMethod`, `soulname`: `string`, `registrationPrice`: `number`, `style?`: `string`) => `Promise`<`boolean`\>

#### Type declaration

▸ (`paymentMethod`, `soulname`, `registrationPrice`, `style?`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `paymentMethod` | `PaymentMethod` |
| `soulname` | `string` |
| `registrationPrice` | `number` |
| `style?` | `string` |

##### Returns

`Promise`<`boolean`\>

#### Inherited from

[MasaShape](MasaShape.md).[handlePurchaseIdentityWithSoulname](MasaShape.md#handlepurchaseidentitywithsoulname)

___

### hasAccountAddress

• `Optional` **hasAccountAddress**: `boolean`

#### Inherited from

[MasaShape](MasaShape.md).[hasAccountAddress](MasaShape.md#hasaccountaddress)

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

### isDisconnected

• `Optional` **isDisconnected**: `boolean`

#### Inherited from

[MasaShape](MasaShape.md).[isDisconnected](MasaShape.md#isdisconnected)

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

### isLoadingCustomSBTs

• `Optional` **isLoadingCustomSBTs**: `boolean`

#### Inherited from

[MasaShape](MasaShape.md).[isLoadingCustomSBTs](MasaShape.md#isloadingcustomsbts)

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

### logout

• `Optional` **logout**: () => `Promise`<`boolean`\>

#### Type declaration

▸ (): `Promise`<`boolean`\>

##### Returns

`Promise`<`boolean`\>

#### Inherited from

[MasaShape](MasaShape.md).[logout](MasaShape.md#logout)

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

### openAccountModal

• `Optional` **openAccountModal**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[MasaShape](MasaShape.md).[openAccountModal](MasaShape.md#openaccountmodal)

___

### openAuthenticateModal

• `Optional` **openAuthenticateModal**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[MasaShape](MasaShape.md).[openAuthenticateModal](MasaShape.md#openauthenticatemodal)

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

### openConnectedModal

• `Optional` **openConnectedModal**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[MasaShape](MasaShape.md).[openConnectedModal](MasaShape.md#openconnectedmodal)

___

### openCreateCreditScoreModal

• `Optional` **openCreateCreditScoreModal**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[MasaShape](MasaShape.md).[openCreateCreditScoreModal](MasaShape.md#opencreatecreditscoremodal)

___

### openCreateIdentityModal

• `Optional` **openCreateIdentityModal**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[MasaShape](MasaShape.md).[openCreateIdentityModal](MasaShape.md#opencreateidentitymodal)

___

### openCreateSoulnameModal

• `Optional` **openCreateSoulnameModal**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[MasaShape](MasaShape.md).[openCreateSoulnameModal](MasaShape.md#opencreatesoulnamemodal)

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

#### Inherited from

[MasaShape](MasaShape.md).[openGallery](MasaShape.md#opengallery)

___

### openInterfaceMasaGreen

• `Optional` **openInterfaceMasaGreen**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[MasaShape](MasaShape.md).[openInterfaceMasaGreen](MasaShape.md#openinterfacemasagreen)

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

#### Inherited from

[MasaShape](MasaShape.md).[openModal](MasaShape.md#openmodal)

___

### openSuccessCreateIdentityModal

• `Optional` **openSuccessCreateIdentityModal**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[MasaShape](MasaShape.md).[openSuccessCreateIdentityModal](MasaShape.md#opensuccesscreateidentitymodal)

___

### openSwitchChainModal

• `Optional` **openSwitchChainModal**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[MasaShape](MasaShape.md).[openSwitchChainModal](MasaShape.md#openswitchchainmodal)

___

### refetchContracts

• `Optional` **refetchContracts**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[MasaShape](MasaShape.md).[refetchContracts](MasaShape.md#refetchcontracts)

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

### setRainbowkKitModalCallback

• `Optional` **setRainbowkKitModalCallback**: `Dispatch`<`SetStateAction`<`undefined` \| (`modalOpen?`: `boolean`) => `void`\>\>

#### Inherited from

[MasaShape](MasaShape.md).[setRainbowkKitModalCallback](MasaShape.md#setrainbowkkitmodalcallback)

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

#### Inherited from

[MasaShape](MasaShape.md).[setSigner](MasaShape.md#setsigner)

___

### signer

• `Optional` **signer**: `Signer`

#### Inherited from

[MasaShape](MasaShape.md).[signer](MasaShape.md#signer)

___

### soulNameStyle

• `Optional` **soulNameStyle**: `string`

#### Overrides

[MasaShape](MasaShape.md).[soulNameStyle](MasaShape.md#soulnamestyle)

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

#### Inherited from

[MasaShape](MasaShape.md).[switchNetworkNew](MasaShape.md#switchnetworknew)

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

___

### walletName

• `Optional` **walletName**: `string`

#### Inherited from

[MasaShape](MasaShape.md).[walletName](MasaShape.md#walletname)
