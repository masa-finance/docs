[# Masa React
 - v2.4.13](README.md) / Exports

# # Masa React
 - v2.4.13

## Table of contents

### Enumerations

- [SoulNameErrorCodes](enums/SoulNameErrorCodes.md)

### Interfaces

- [ArweaveConfig](interfaces/ArweaveConfig.md)
- [MasaContextProviderProps](interfaces/MasaContextProviderProps.md)
- [MasaShape](interfaces/MasaShape.md)
- [ModalProps](interfaces/ModalProps.md)
- [SpinnerProps](interfaces/SpinnerProps.md)
- [WrapperModalProps](interfaces/WrapperModalProps.md)

### Type Aliases

- [EnvironmentNameEx](modules.md#environmentnameex)
- [ModalName](modules.md#modalname)
- [OnSuccessInput](modules.md#onsuccessinput)
- [UseCreditScoresReturnType](modules.md#usecreditscoresreturntype)
- [UseGreenReturnValue](modules.md#usegreenreturnvalue)
- [UseNetworkInputValue](modules.md#usenetworkinputvalue)
- [UseNetworkReturnValue](modules.md#usenetworkreturnvalue)
- [UseWalletReturnType](modules.md#usewalletreturntype)

### Variables

- [MasaContext](modules.md#masacontext)
- [ModalContent](modules.md#modalcontent)
- [Modals](modules.md#modals)
- [queryClient](modules.md#queryclient)

### Functions

- [MasaContextProvider](modules.md#masacontextprovider)
- [MasaInterface](modules.md#masainterface)
- [MasaLoading](modules.md#masaloading)
- [MasaProvider](modules.md#masaprovider)
- [ModalComponent](modules.md#modalcomponent)
- [ModalWrapper](modules.md#modalwrapper)
- [Spinner](modules.md#spinner)
- [createNewMasa](modules.md#createnewmasa)
- [getCreditScoresQueryKey](modules.md#getcreditscoresquerykey)
- [getGreenQueryKey](modules.md#getgreenquerykey)
- [getIdentityQueryKey](modules.md#getidentityquerykey)
- [getSessionDataQueryKey](modules.md#getsessiondataquerykey)
- [getSessionQueryKey](modules.md#getsessionquerykey)
- [getSoulnamesQueryKey](modules.md#getsoulnamesquerykey)
- [getWalletQueryKey](modules.md#getwalletquerykey)
- [getWeb3Provider](modules.md#getweb3provider)
- [useCreditScores](modules.md#usecreditscores)
- [useCreditScoresQuery](modules.md#usecreditscoresquery)
- [useDebounce](modules.md#usedebounce)
- [useDebounceIfValue](modules.md#usedebounceifvalue)
- [useErrors](modules.md#useerrors)
- [useGreen](modules.md#usegreen)
- [useGreenQuery](modules.md#usegreenquery)
- [useIdentity](modules.md#useidentity)
- [useIdentityQuery](modules.md#useidentityquery)
- [useLocalStorage](modules.md#uselocalstorage)
- [useMasa](modules.md#usemasa)
- [useMetamask](modules.md#usemetamask)
- [useModal](modules.md#usemodal)
- [useNetwork](modules.md#usenetwork)
- [useNetworkSwitch](modules.md#usenetworkswitch)
- [useSBT](modules.md#usesbt)
- [useSession](modules.md#usesession)
- [useSessionDataQuery](modules.md#usesessiondataquery)
- [useSessionQuery](modules.md#usesessionquery)
- [useSoulnames](modules.md#usesoulnames)
- [useSoulnamesQuery](modules.md#usesoulnamesquery)
- [useWallet](modules.md#usewallet)
- [useWalletQuery](modules.md#usewalletquery)

## Type Aliases

### EnvironmentNameEx

Ƭ **EnvironmentNameEx**: `EnvironmentName` & ``"local"`` \| ``"stage"``

___

### ModalName

Ƭ **ModalName**: ``"AuthenticateModal"`` \| ``"ConnectedModal"`` \| ``"CreateCreditScoreModal"`` \| ``"CreateIdentityModal"`` \| ``"CreateSoulnameModal"`` \| ``"SuccessCreateIdentityModal"`` \| ``"SwitchChainModal"`` \| ``"InterfaceMasaGreen"`` \| ``"Default"``

___

### OnSuccessInput

Ƭ **OnSuccessInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `creditScores?` | { `metadata?`: `ICreditScore` ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[] |

___

### UseCreditScoresReturnType

Ƭ **UseCreditScoresReturnType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `creditScores?` | { `metadata?`: `ICreditScore` ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[] |
| `error` | `unknown` |
| `handleCreateCreditScore` | () => `Promise`<`boolean` \| `undefined`\> |
| `invalidateCreditScores` | () => `void` |
| `isCreditScoresLoading` | `boolean` |
| `reloadCreditScores` | () => `void` |
| `status` | `string` |

___

### UseGreenReturnValue

Ƭ **UseGreenReturnValue**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |
| `greens?` | { `metadata?`: `IGreen` ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[] |
| `handleCreateGreen` | (`phoneNumber`: `string`, `code`: `string`) => `Promise`<`VerifyGreenResult` \| `undefined`\> |
| `handleGenerateGreen` | (`phoneNumber`: `string`) => `Promise`<`GenerateGreenResult` \| `undefined`\> |
| `invalidateGreen` | () => `void` |
| `isGreensLoading` | `boolean` |
| `reloadGreens` | () => `void` |
| `status` | `string` |

___

### UseNetworkInputValue

Ƭ **UseNetworkInputValue**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `provider?` | `Signer` |
| `useRainbowKitWalletConnect?` | `boolean` |

___

### UseNetworkReturnValue

Ƭ **UseNetworkReturnValue**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addNetwork` | (`networkDetails`: `Network`) => `void` |
| `currentNetwork?` | `Network` |
| `switchNetwork` | (`networkName`: `NetworkName`) => `void` |

___

### UseWalletReturnType

Ƭ **UseWalletReturnType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |
| `hasWalletAddress` | `boolean` |
| `isWalletLoading` | `boolean` |
| `reloadWallet` | () => `Promise`<`unknown`\> |
| `status` | `string` |
| `walletAddress?` | `string` |

## Variables

### MasaContext

• `Const` **MasaContext**: `Context`<[`MasaShape`](interfaces/MasaShape.md)\>

___

### ModalContent

• `Const` **ModalContent**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AuthenticateModal` | () => `Element` |
| `ConnectedModal` | () => `Element` |
| `CreateCreditScoreModal` | () => `Element` |
| `CreateIdentityModal` | () => `Element` |
| `CreateSoulnameModal` | () => `Element` |
| `Default` | () => `Element` |
| `InterfaceMasaGreen` | () => `Element` |
| `SuccessCreateIdentityModal` | () => `Element` |
| `SwitchChainModal` | () => `Element` |

___

### Modals

• `Const` **Modals**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AuthenticateModal` | () => `Element` |
| `Backdrop` | (`__namedParameters`: { `children`: `ReactNode` ; `className?`: `string` ; `onClose`: () => `void`  }) => `Element` |
| `ConnectedModal` | () => `Element` |
| `CreateCreditScoreModal` | () => `Element` |
| `CreateIdentityModal` | () => `Element` |
| `CreateSoulnameModal` | () => `Element` |
| `ModalWrapper` | (`__namedParameters`: [`WrapperModalProps`](interfaces/WrapperModalProps.md)) => `any` |
| `SuccessCreateIdentityModal` | () => `Element` |
| `SwitchChainModal` | () => `Element` |

___

### queryClient

• `Const` **queryClient**: `QueryClient`

## Functions

### MasaContextProvider

▸ **MasaContextProvider**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`MasaContextProviderProps`](interfaces/MasaContextProviderProps.md) |

#### Returns

`Element`

___

### MasaInterface

▸ **MasaInterface**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `disableMetamask?` | `boolean` |

#### Returns

`Element`

___

### MasaLoading

▸ **MasaLoading**(): `Element`

#### Returns

`Element`

___

### MasaProvider

▸ **MasaProvider**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`MasaContextProviderProps`](interfaces/MasaContextProviderProps.md) & { `chainsToUse?`: (``"goerli"`` \| ``"ethereum"`` \| ``"alfajores"`` \| ``"celo"`` \| ``"mumbai"`` \| ``"polygon"`` \| ``"bsctest"`` \| ``"bsc"`` \| ``"basegoerli"`` \| ``"unknown"``)[] ; `rainbowKitModalSize?`: ``"compact"`` \| ``"wide"`` ; `walletsToUse?`: (``"metamask"`` \| ``"valora"`` \| ``"walletconnect"``)[]  } |

#### Returns

`Element`

___

### ModalComponent

▸ **ModalComponent**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`ModalProps`](interfaces/ModalProps.md) |

#### Returns

`Element`

___

### ModalWrapper

▸ **ModalWrapper**(`«destructured»`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`WrapperModalProps`](interfaces/WrapperModalProps.md) |

#### Returns

`any`

___

### Spinner

▸ **Spinner**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`SpinnerProps`](interfaces/SpinnerProps.md) |

#### Returns

`Element`

___

### createNewMasa

▸ **createNewMasa**(`«destructured»`): `undefined` \| `Masa`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `apiUrl?` | `string` |
| › `arweaveConfig?` | [`ArweaveConfig`](interfaces/ArweaveConfig.md) |
| › `contractAddressOverrides?` | `Object` |
| › `contractAddressOverrides.SoulNameAddress` | `string` |
| › `contractAddressOverrides.SoulStoreAddress` | `string` |
| › `environmentName` | `string` |
| › `networkName?` | `NetworkName` |
| › `signer` | `Signer` |
| › `verbose` | `boolean` |

#### Returns

`undefined` \| `Masa`

___

### getCreditScoresQueryKey

▸ **getCreditScoresQueryKey**(`«destructured»`): (`undefined` \| `string`)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `masa?` | `Masa` |
| › `signer?` | `Signer` |
| › `walletAddress?` | `string` |

#### Returns

(`undefined` \| `string`)[]

___

### getGreenQueryKey

▸ **getGreenQueryKey**(`«destructured»`): (`undefined` \| `string`)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `masa?` | `Masa` |
| › `signer?` | `any` |
| › `walletAddress?` | `string` |

#### Returns

(`undefined` \| `string`)[]

___

### getIdentityQueryKey

▸ **getIdentityQueryKey**(`«destructured»`): (`undefined` \| `string`)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `masa?` | `Masa` |
| › `signer?` | `any` |
| › `walletAddress?` | `string` |

#### Returns

(`undefined` \| `string`)[]

___

### getSessionDataQueryKey

▸ **getSessionDataQueryKey**(`«destructured»`): (`undefined` \| `string`)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `masa?` | `Masa` |
| › `signer?` | `any` |
| › `walletAddress?` | `string` |

#### Returns

(`undefined` \| `string`)[]

___

### getSessionQueryKey

▸ **getSessionQueryKey**(`«destructured»`): (`undefined` \| `string`)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `masa?` | `Masa` |
| › `signer?` | `any` |
| › `walletAddress?` | `string` |

#### Returns

(`undefined` \| `string`)[]

___

### getSoulnamesQueryKey

▸ **getSoulnamesQueryKey**(`«destructured»`): (`undefined` \| `string`)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `masa?` | `Masa` |
| › `signer?` | `any` |
| › `walletAddress?` | `string` |

#### Returns

(`undefined` \| `string`)[]

___

### getWalletQueryKey

▸ **getWalletQueryKey**(`«destructured»`): (`undefined` \| `string`)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `masa?` | `Masa` |
| › `signer?` | `Signer` |
| › `walletAddress?` | `string` |

#### Returns

(`undefined` \| `string`)[]

___

### getWeb3Provider

▸ **getWeb3Provider**(): `undefined` \| `Web3Provider`

#### Returns

`undefined` \| `Web3Provider`

___

### useCreditScores

▸ **useCreditScores**(`masa?`, `walletAddress?`, `identity?`): [`UseCreditScoresReturnType`](modules.md#usecreditscoresreturntype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa?` | `Masa` |
| `walletAddress?` | `string` |
| `identity?` | `Object` |
| `identity.address?` | `string` |
| `identity.identityId?` | `BigNumber` |

#### Returns

[`UseCreditScoresReturnType`](modules.md#usecreditscoresreturntype)

___

### useCreditScoresQuery

▸ **useCreditScoresQuery**(`«destructured»`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `identity?` | `Object` |
| › `identity.address?` | `string` |
| › `identity.identityId?` | `BigNumber` |
| › `masa?` | `Masa` |
| › `walletAddress?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `creditScores` | `undefined` \| { `metadata?`: `ICreditScore` ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[] |
| `error` | `unknown` |
| `invalidateCreditScores` | () => `Promise`<`void`\> |
| `isFetching` | `boolean` |
| `isLoading` | `boolean` |
| `reloadCreditScores` | <TPageData\>(`options?`: `RefetchOptions` & `RefetchQueryFilters`<`TPageData`\>) => `Promise`<`QueryObserverResult`<`undefined` \| { `metadata?`: `ICreditScore` ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[], `unknown`\>\> |
| `status` | ``"idle"`` \| ``"error"`` \| ``"loading"`` \| ``"success"`` |

___

### useDebounce

▸ **useDebounce**(`value`, `delay`): `string` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` |
| `delay` | `number` |

#### Returns

`string` \| `number`

___

### useDebounceIfValue

▸ **useDebounceIfValue**(`value`, `target`, `delay`): `string` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` |
| `target` | `string` \| `number` |
| `delay` | `number` |

#### Returns

`string` \| `number`

___

### useErrors

▸ **useErrors**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `SoulNameErrorCodes` | typeof [`SoulNameErrorCodes`](enums/SoulNameErrorCodes.md) |
| `error` | ``null`` \| `ErrorType` |
| `handleErrors` | (`errorCode`: [`SoulNameErrorCodes`](enums/SoulNameErrorCodes.md)) => `void` |

___

### useGreen

▸ **useGreen**(`masa?`, `walletAddress?`): [`UseGreenReturnValue`](modules.md#usegreenreturnvalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa?` | `Masa` |
| `walletAddress?` | `string` |

#### Returns

[`UseGreenReturnValue`](modules.md#usegreenreturnvalue)

___

### useGreenQuery

▸ **useGreenQuery**(`«destructured»`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `masa?` | `Masa` |
| › `walletAddress?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |
| `greens` | `undefined` \| { `metadata?`: `IGreen` ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[] |
| `invalidateGreen` | () => `Promise`<`void`\> |
| `isFetching` | `boolean` |
| `isLoading` | `boolean` |
| `reloadGreens` | <TPageData\>(`options?`: `RefetchOptions` & `RefetchQueryFilters`<`TPageData`\>) => `Promise`<`QueryObserverResult`<`undefined` \| { `metadata?`: `IGreen` ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[], `unknown`\>\> |
| `status` | ``"idle"`` \| ``"error"`` \| ``"loading"`` \| ``"success"`` |

___

### useIdentity

▸ **useIdentity**(`masa?`, `walletAddress?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa?` | `Masa` |
| `walletAddress?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |
| `handlePurchaseIdentity` | () => `Promise`<`boolean`\> |
| `handlePurchaseIdentityWithSoulname` | (`paymentMethod`: `PaymentMethod`, `soulname`: `string`, `registrationPeriod`: `number`, `style?`: `string`) => `Promise`<`boolean`\> |
| `identity?` | { `address?`: `string` ; `identityId?`: `BigNumber`  } |
| `identity.address?` | `string` |
| `identity.identityId?` | `BigNumber` |
| `isIdentityLoading` | `boolean` |
| `reloadIdentity` | () => `Promise`<`unknown`\> |
| `status` | `string` |

___

### useIdentityQuery

▸ **useIdentityQuery**(`«destructured»`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `masa?` | `Masa` |
| › `walletAddress?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |
| `identity` | `undefined` \| { `address?`: `string` ; `identityId?`: `BigNumber`  } |
| `invalidateIdentity` | () => `Promise`<`void`\> |
| `invalidateSoulnames` | () => `Promise`<`void`\> |
| `isFetching` | `boolean` |
| `isLoading` | `boolean` |
| `reloadIdentity` | <TPageData\>(`options?`: `RefetchOptions` & `RefetchQueryFilters`<`TPageData`\>) => `Promise`<`QueryObserverResult`<`undefined` \| { `address?`: `string` ; `identityId?`: `BigNumber`  }, `unknown`\>\> |
| `status` | ``"idle"`` \| ``"error"`` \| ``"loading"`` \| ``"success"`` |

___

### useLocalStorage

▸ **useLocalStorage**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `localStorageGet` | <T\>(`key`: `string`) => `undefined` \| `T` |
| `localStorageSet` | <T\>(`key`: `string`, `value`: `T`) => `void` |

___

### useMasa

▸ **useMasa**(): [`MasaShape`](interfaces/MasaShape.md)

#### Returns

[`MasaShape`](interfaces/MasaShape.md)

___

### useMetamask

▸ **useMetamask**(`«destructured»`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `disabled?` | `boolean` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `connectMetamask` | () => `void` |

___

### useModal

▸ **useModal**(`isLoggedIn?`, `isConnected?`, `areScopesFullfiled?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isLoggedIn?` | `boolean` |
| `isConnected?` | `boolean` |
| `areScopesFullfiled?` | `boolean` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `closeModal` | (`forceCallback?`: `boolean`) => `void` |
| `forcedPage` | ``null`` \| `string` |
| `isModalOpen` | `boolean` |
| `modalSize` | ``null`` \| { `height`: `number` ; `width`: `number`  } |
| `openGallery` | (`callback?`: () => `void`) => `void` |
| `openMintMasaGreen` | (`mintCallback?`: () => `void`) => `void` |
| `openMintSoulnameModal` | (`mintCallback?`: () => `void`) => `void` |
| `setForcedPage?` | (`page`: ``null`` \| `string`) => `void` |
| `setModalCallback` | (`callback`: () => `void`) => `void` |
| `setModalOpen` | (`modalOpen`: `boolean`) => `void` |
| `setModalSize` | (`size`: { `height`: `number` ; `width`: `number`  }) => `void` |
| `useModalSize` | (`size`: { `height`: `number` ; `width`: `number`  }) => `void` |

___

### useNetwork

▸ **useNetwork**(`«destructured»`): [`UseNetworkReturnValue`](modules.md#usenetworkreturnvalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`UseNetworkInputValue`](modules.md#usenetworkinputvalue) |

#### Returns

[`UseNetworkReturnValue`](modules.md#usenetworkreturnvalue)

___

### useNetworkSwitch

▸ **useNetworkSwitch**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `canProgramaticallySwitchNetwork` | `boolean` |
| `currentNetwork` | `GetNetworkResult` |
| `switchNetwork` | (`forcedNetworkParam`: `NetworkName`) => `void` |

___

### useSBT

▸ **useSBT**(`«destructured»`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `masa?` | `Masa` |
| › `tokenAddress` | `string` |
| › `walletAddress?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `SBTs?` | { `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[] |
| `error` | `unknown` |
| `isSBTLoading` | `boolean` |
| `reloadSBTs` | () => `void` |
| `status` | `string` |

___

### useSession

▸ **useSession**(`masa?`, `walletAddress?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa?` | `Masa` |
| `walletAddress?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |
| `handleLogin` | () => `Promise`<`void`\> |
| `handleLogout` | (`logoutCallback?`: () => `void`) => `Promise`<`void`\> |
| `isLoggedIn` | `undefined` \| `boolean` |
| `isSessionLoading` | `boolean` |
| `reloadSession` | <TPageData\>(`options?`: `RefetchOptions` & `RefetchQueryFilters`<`TPageData`\>) => `Promise`<`QueryObserverResult`<`undefined` \| `boolean`, `unknown`\>\> |
| `reloadSessionData` | <TPageData\>(`options?`: `RefetchOptions` & `RefetchQueryFilters`<`TPageData`\>) => `Promise`<`QueryObserverResult`<`undefined` \| `ISession`, `unknown`\>\> |
| `status` | ``"idle"`` \| ``"error"`` \| ``"loading"`` \| ``"success"`` |

___

### useSessionDataQuery

▸ **useSessionDataQuery**(`«destructured»`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `masa?` | `Masa` |
| › `walletAddress?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `isSessionDataFetching` | `boolean` |
| `isSessionDataLoading` | `boolean` |
| `reloadSessionData` | <TPageData\>(`options?`: `RefetchOptions` & `RefetchQueryFilters`<`TPageData`\>) => `Promise`<`QueryObserverResult`<`undefined` \| `ISession`, `unknown`\>\> |
| `sessionData` | `undefined` \| `ISession` |

___

### useSessionQuery

▸ **useSessionQuery**(`«destructured»`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `masa?` | `Masa` |
| › `walletAddress?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |
| `isLoggedIn` | `undefined` \| `boolean` |
| `isSessionCheckFetching` | `boolean` |
| `isSessionCheckLoading` | `boolean` |
| `reloadSession` | <TPageData\>(`options?`: `RefetchOptions` & `RefetchQueryFilters`<`TPageData`\>) => `Promise`<`QueryObserverResult`<`undefined` \| `boolean`, `unknown`\>\> |
| `status` | ``"idle"`` \| ``"error"`` \| ``"loading"`` \| ``"success"`` |

___

### useSoulnames

▸ **useSoulnames**(`masa?`, `walletAddress?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa?` | `Masa` |
| `walletAddress?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |
| `handlePurchaseSoulname` | (`soulname`: `string`, `registrationPeriod`: `number`, `paymentMethod`: `PaymentMethod`, `style?`: `string`) => `Promise`<`boolean`\> |
| `isSoulnamesLoading` | `boolean` |
| `reloadSoulnames` | () => `void` |
| `soulnames?` | `SoulNameDetails`[] |
| `status` | `string` |

___

### useSoulnamesQuery

▸ **useSoulnamesQuery**(`«destructured»`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `masa?` | `Masa` |
| › `walletAddress?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |
| `isFetching` | `boolean` |
| `isLoading` | `boolean` |
| `reloadSoulnames` | <TPageData\>(`options?`: `RefetchOptions` & `RefetchQueryFilters`<`TPageData`\>) => `Promise`<`QueryObserverResult`<`undefined` \| `SoulNameDetails`[], `unknown`\>\> |
| `soulnames` | `undefined` \| `SoulNameDetails`[] |
| `status` | ``"idle"`` \| ``"error"`` \| ``"loading"`` \| ``"success"`` |

___

### useWallet

▸ **useWallet**(`masa?`, `signer?`): [`UseWalletReturnType`](modules.md#usewalletreturntype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa?` | `Masa` |
| `signer?` | `Signer` |

#### Returns

[`UseWalletReturnType`](modules.md#usewalletreturntype)

___

### useWalletQuery

▸ **useWalletQuery**(`«destructured»`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `masa?` | `Masa` |
| › `signer?` | `Signer` |
| › `walletAddress?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |
| `invalidateIdentity` | () => `Promise`<`void`\> |
| `isFetching` | `boolean` |
| `isLoading` | `boolean` |
| `refetch` | <TPageData\>(`options?`: `RefetchOptions` & `RefetchQueryFilters`<`TPageData`\>) => `Promise`<`QueryObserverResult`<`undefined` \| `string`, `unknown`\>\> |
| `status` | ``"idle"`` \| ``"error"`` \| ``"loading"`` \| ``"success"`` |
| `walletAddress` | `undefined` \| `string` |
