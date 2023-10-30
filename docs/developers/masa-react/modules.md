[# Masa React
 - v3.4.6](README.md) / Exports

# # Masa React
 - v3.4.6

## Table of contents

### Interfaces

- [CustomGallerySBT](interfaces/CustomGallerySBT.md)
- [FullContract](interfaces/FullContract.md)
- [FullContractWithTokens](interfaces/FullContractWithTokens.md)
- [GalleryMetadata](interfaces/GalleryMetadata.md)
- [HydratedContract](interfaces/HydratedContract.md)
- [MasaProviderValue](interfaces/MasaProviderValue.md)
- [Metadata](interfaces/Metadata.md)
- [TabsInterface](interfaces/TabsInterface.md)
- [Token](interfaces/Token.md)
- [TokenWithMetadata](interfaces/TokenWithMetadata.md)

### Variables

- [MasaQueryClientContext](modules.md#masaqueryclientcontext)

### Functions

- [AuthenticateModal](modules.md#authenticatemodal)
- [Button](modules.md#button)
- [CreateSoulnameModal](modules.md#createsoulnamemodal)
- [MasaProvider](modules.md#masaprovider)
- [Modal](modules.md#modal)
- [ModalError](modules.md#modalerror)
- [ModalLoading](modules.md#modalloading)
- [fetchContractsAndTokens](modules.md#fetchcontractsandtokens)
- [hydrateTokensWithMetadata](modules.md#hydratetokenswithmetadata)
- [isIdentityContractAvailible](modules.md#isidentitycontractavailible)
- [openAuthenticateModal](modules.md#openauthenticatemodal)
- [openCreateSoulnameModal](modules.md#opencreatesoulnamemodal)
- [useAuthenticate](modules.md#useauthenticate)
- [useAuthenticateModal](modules.md#useauthenticatemodal)
- [useCanQuery](modules.md#usecanquery)
- [useCreditScoreCreate](modules.md#usecreditscorecreate)
- [useCreditScores](modules.md#usecreditscores)
- [useCustomGallerySBT](modules.md#usecustomgallerysbt)
- [useCustomSBTs](modules.md#usecustomsbts)
- [useDebounce](modules.md#usedebounce)
- [useDebounceIfValue](modules.md#usedebounceifvalue)
- [useDebug](modules.md#usedebug)
- [useGreen](modules.md#usegreen)
- [useGreenGenerate](modules.md#usegreengenerate)
- [useIdentity](modules.md#useidentity)
- [useIdentityListen](modules.md#useidentitylisten)
- [useIdentityPurchase](modules.md#useidentitypurchase)
- [useMasaClient](modules.md#usemasaclient)
- [useMasaLoading](modules.md#usemasaloading)
- [useMasaQueryClient](modules.md#usemasaqueryclient)
- [useMasaSDK](modules.md#usemasasdk)
- [useNetwork](modules.md#usenetwork)
- [useNetworkSwitchListen](modules.md#usenetworkswitchlisten)
- [useRegisterSoulname](modules.md#useregistersoulname)
- [useSBT](modules.md#usesbt)
- [useSession](modules.md#usesession)
- [useSessionConnect](modules.md#usesessionconnect)
- [useSessionListen](modules.md#usesessionlisten)
- [useSoulNames](modules.md#usesoulnames)
- [useSoulNamesPurchase](modules.md#usesoulnamespurchase)
- [useSoulnameInterface](modules.md#usesoulnameinterface)
- [useSoulnameModal](modules.md#usesoulnamemodal)
- [useWallet](modules.md#usewallet)

## Variables

### MasaQueryClientContext

• `Const` **MasaQueryClientContext**: `Context`<`undefined` \| `QueryClient`\>

## Functions

### AuthenticateModal

▸ **AuthenticateModal**(`props`, `context?`): `ReactNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `AuthenticateProps` & `NiceModalHocProps` |
| `context?` | `any` |

#### Returns

`ReactNode`

___

### Button

▸ **Button**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `ButtonProps` |

#### Returns

`Element`

___

### CreateSoulnameModal

▸ **CreateSoulnameModal**(`props`, `context?`): `ReactNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | { `closeOnSuccess?`: `boolean` ; `onError?`: () => `void` ; `onMintError?`: () => `void` ; `onMintSuccess?`: (`result`: `CreateSoulNameResult`) => `void` ; `onRegisterFinish?`: () => `void` ; `onSuccess?`: () => `void`  } & `NiceModalHocProps` |
| `context?` | `any` |

#### Returns

`ReactNode`

___

### MasaProvider

▸ **MasaProvider**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `children` | `ReactNode` |
| › `config` | `MasaReactConfig` |
| › `verbose?` | `boolean` |

#### Returns

`Element`

___

### Modal

▸ **Modal**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `children` | `ReactNode` |
| › `onClose?` | () => `unknown` |

#### Returns

`Element`

___

### ModalError

▸ **ModalError**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `buttonText?` | `string` |
| › `isLoading?` | `boolean` |
| › `onComplete?` | () => `void` |
| › `subtitle?` | `string` |

#### Returns

`Element`

___

### ModalLoading

▸ **ModalLoading**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `titleText?` | `ReactNode` |

#### Returns

`Element`

___

### fetchContractsAndTokens

▸ **fetchContractsAndTokens**(`customContracts`): `Promise`<[`FullContractWithTokens`](interfaces/FullContractWithTokens.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `customContracts` | [`FullContract`](interfaces/FullContract.md)[] |

#### Returns

`Promise`<[`FullContractWithTokens`](interfaces/FullContractWithTokens.md)[]\>

___

### hydrateTokensWithMetadata

▸ **hydrateTokensWithMetadata**(`contractsAndTokens`): `Promise`<[`HydratedContract`](interfaces/HydratedContract.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractsAndTokens` | [`FullContractWithTokens`](interfaces/FullContractWithTokens.md)[] |

#### Returns

`Promise`<[`HydratedContract`](interfaces/HydratedContract.md)[]\>

___

### isIdentityContractAvailible

▸ **isIdentityContractAvailible**(`masa?`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa?` | `Masa` |

#### Returns

`undefined` \| `boolean`

___

### openAuthenticateModal

▸ **openAuthenticateModal**(`«destructured»`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `AuthenticateProps` |

#### Returns

`Promise`<`unknown`\>

___

### openCreateSoulnameModal

▸ **openCreateSoulnameModal**(`«destructured»`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `closeOnSuccess?` | `boolean` |
| › `onError?` | () => `void` |
| › `onMintError?` | () => `void` |
| › `onMintSuccess?` | (`result`: `CreateSoulNameResult`) => `void` |
| › `onRegisterFinish?` | () => `void` |
| › `onSuccess?` | () => `void` |

#### Returns

`Promise`<`unknown`\>

___

### useAuthenticate

▸ **useAuthenticate**(`«destructured»?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `onAuthenticateError?` | () => `void` |
| › `onAuthenticateSuccess?` | (`payload`: { `address?`: `string` ; `walletType?`: `string`  }) => `void` |
| › `onError?` | () => `void` |
| › `onRegisterFinish?` | () => `void` |
| › `onSuccess?` | () => `void` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `isAuthenticateModalOpen` | `boolean` |
| `openAuthModal` | () => `Promise`<`void`\> |

___

### useAuthenticateModal

▸ **useAuthenticateModal**(`«destructured»`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `onAuthenticateError?` | () => `void` |
| › `onAuthenticateSuccess?` | (`payload`: { `address?`: `string` ; `walletType?`: `string`  }) => `void` |
| › `onClose?` | () => `void` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `isAuthenticating` | `boolean` |
| `needsWalletConnection` | `boolean` |
| `onAuthenticateStart` | () => `Promise`<``null`` \| { `address`: `string` ; `cookie?`: `string` ; `userId`: `string` \| `BigNumber`  }\> |
| `showAuthenticateView` | `undefined` \| `boolean` |
| `showConnectedView` | `undefined` \| ``null`` \| `boolean` |
| `showSwitchWalletButton` | `undefined` \| `boolean` |
| `successMessage` | `string` |

___

### useCanQuery

▸ **useCanQuery**(): `boolean`

#### Returns

`boolean`

___

### useCreditScoreCreate

▸ **useCreditScoreCreate**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createCreditScore` | () => `Promise`<`undefined` \| `boolean`\> |
| `handleCreateCreditScore` | () => `Promise`<`undefined` \| `boolean`\> |
| `isCreatingCreditScore` | `boolean` |

___

### useCreditScores

▸ **useCreditScores**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `creditScores` | `undefined` \| ``null`` \| `CreditScoreDetails`[] |
| `getCreditScores` | <TPageData\>(`options?`: `RefetchOptions` & `RefetchQueryFilters`<`TPageData`\>) => `Promise`<`QueryObserverResult`<``null`` \| `CreditScoreDetails`[], `unknown`\>\> |
| `isCreditScoresLoading` | `boolean` |
| `isLoadingCreditScores` | `boolean` |
| `reloadCreditScores` | <TPageData\>(`options?`: `RefetchOptions` & `RefetchQueryFilters`<`TPageData`\>) => `Promise`<`QueryObserverResult`<``null`` \| `CreditScoreDetails`[], `unknown`\>\> |

___

### useCustomGallerySBT

▸ **useCustomGallerySBT**(`«destructured»`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `overrideCustomSBTs?` | [`CustomGallerySBT`](interfaces/CustomGallerySBT.md)[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `customContracts` | [`FullContract`](interfaces/FullContract.md)[] |
| `error` | `unknown` |
| `isFetching` | `boolean` |
| `isLoading` | `boolean` |
| `refetchContracts` | <TPageData\>(`options?`: `RefetchOptions` & `RefetchQueryFilters`<`TPageData`\>) => `Promise`<`QueryObserverResult`<``null`` \| [`FullContract`](interfaces/FullContract.md)[], `unknown`\>\> |
| `status` | ``"loading"`` \| ``"error"`` \| ``"success"`` |

___

### useCustomSBTs

▸ **useCustomSBTs**(`overrideCustomSBTs?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrideCustomSBTs?` | [`CustomGallerySBT`](interfaces/CustomGallerySBT.md)[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `customSBTs` | `undefined` \| ``null`` \| [`HydratedContract`](interfaces/HydratedContract.md)[] |
| `error` | `unknown` |
| `isFetching` | `boolean` |
| `isLoading` | `boolean` |
| `reloadCustomSBTs` | <TPageData\>(`options?`: `RefetchOptions` & `RefetchQueryFilters`<`TPageData`\>) => `Promise`<`QueryObserverResult`<``null`` \| [`HydratedContract`](interfaces/HydratedContract.md)[], `unknown`\>\> |
| `status` | ``"loading"`` \| ``"error"`` \| ``"success"`` |

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

### useDebug

▸ **useDebug**(`values`, `deps?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `values` | `Object` | `undefined` |
| `values.name` | `string` | `undefined` |
| `values.value` | `unknown` | `undefined` |
| `deps` | `DependencyList` | `[]` |

#### Returns

`void`

___

### useGreen

▸ **useGreen**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getGreens` | <TPageData\>(`options?`: `RefetchOptions` & `RefetchQueryFilters`<`TPageData`\>) => `Promise`<`QueryObserverResult`<``null`` \| `GreenDetails`[], `unknown`\>\> |
| `greens` | `undefined` \| ``null`` \| `GreenDetails`[] |
| `isGreensLoading` | `boolean` |
| `isLoadingGreens` | `boolean` |
| `reloadGreens` | <TPageData\>(`options?`: `RefetchOptions` & `RefetchQueryFilters`<`TPageData`\>) => `Promise`<`QueryObserverResult`<``null`` \| `GreenDetails`[], `unknown`\>\> |

___

### useGreenGenerate

▸ **useGreenGenerate**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createGreen` | (`phoneNumber`: `string`, `code`: `string`) => `Promise`<``null`` \| `GreenBaseResult`\> |
| `generateGreen` | (`phoneNumber`: `string`) => `Promise`<``null`` \| `GenerateGreenResult`\> |
| `handleCreateGreen` | (`phoneNumber`: `string`, `code`: `string`) => `Promise`<``null`` \| `GreenBaseResult`\> |
| `handleGenerateGreen` | (`phoneNumber`: `string`) => `Promise`<``null`` \| `GenerateGreenResult`\> |
| `isCreatingGreen` | `boolean` |
| `isGeneratingGreen` | `boolean` |

___

### useIdentity

▸ **useIdentity**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getIdentity` | <TPageData\>(`options?`: `RefetchOptions` & `RefetchQueryFilters`<`TPageData`\>) => `Promise`<`QueryObserverResult`<`undefined` \| ``null`` \| { `address`: `string` ; `identityId?`: `BigNumber`  }, `unknown`\>\> |
| `hasIdentity` | `undefined` \| ``false`` \| `BigNumber` |
| `identity` | `undefined` \| ``null`` \| { `address`: `string` ; `identityId?`: `BigNumber`  } |
| `isFetchingIdentity` | `boolean` |
| `isIdentityAvailibleInNetwork` | `undefined` \| `boolean` |
| `isIdentityLoading` | `boolean` |
| `isLoadingIdentity` | `boolean` |
| `reloadIdentity` | <TPageData\>(`options?`: `RefetchOptions` & `RefetchQueryFilters`<`TPageData`\>) => `Promise`<`QueryObserverResult`<`undefined` \| ``null`` \| { `address`: `string` ; `identityId?`: `BigNumber`  }, `unknown`\>\> |

___

### useIdentityListen

▸ **useIdentityListen**(`«destructured»`): `AsyncState`<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `getIdentity` | <TPageData\>(`options?`: `RefetchOptions` & `RefetchQueryFilters`<`TPageData`\>) => `Promise`<`QueryObserverResult`<`undefined` \| ``null`` \| { `address`: `string` ; `identityId?`: `BigNumber`  }, `unknown`\>\> |
| › `identity?` | ``null`` \| { `address`: `string` ; `identityId?`: `BigNumber`  } |
| › `sessionAddress?` | `string` |

#### Returns

`AsyncState`<`undefined`\>

___

### useIdentityPurchase

▸ **useIdentityPurchase**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `handlePurchaseIdentity` | () => `Promise`<`undefined` \| `boolean` \| `Error` & { `code?`: `string`  }\> |
| `handlePurchaseIdentityWithSoulname` | (`paymentMethod`: `PaymentMethod`, `soulname`: `string`, `registrationPeriod`: `number`, `style?`: `string`) => `Promise`<`undefined` \| { `identityId?`: `string` \| `BigNumber`  } & `CreateSoulNameResult` \| `Error` & { `code?`: `string`  }\> |
| `hasPurchasedIdentity` | `undefined` \| `boolean` \| `Error` & { `code?`: `string`  } |
| `hasPurchasedIdentityWithSoulName` | `undefined` \| { `identityId?`: `string` \| `BigNumber`  } & `CreateSoulNameResult` \| `Error` & { `code?`: `string`  } |
| `isPurchasingIdentity` | `boolean` |
| `isPurchasingIdentityWithSoulName` | `boolean` |
| `purchaseIdentity` | () => `Promise`<`undefined` \| `boolean` \| `Error` & { `code?`: `string`  }\> |
| `purchaseIdentityError` | `undefined` \| `Error` |
| `purchaseIdentityWithSoulName` | (`paymentMethod`: `PaymentMethod`, `soulname`: `string`, `registrationPeriod`: `number`, `style?`: `string`) => `Promise`<`undefined` \| { `identityId?`: `string` \| `BigNumber`  } & `CreateSoulNameResult` \| `Error` & { `code?`: `string`  }\> |

___

### useMasaClient

▸ **useMasaClient**(): { `isLoadingMasa?`: `undefined` ; `masa`: `undefined` = undefined; `masaAddress`: `undefined` \| \`0x${string}\` ; `masaChainId`: `undefined` \| `number` ; `masaNetwork`: `undefined` ; `sdk`: `undefined` = undefined } \| { `isLoadingMasa`: `boolean` ; `masa`: `undefined` \| `Masa` ; `masaAddress`: `undefined` \| \`0x${string}\` ; `masaChainId`: `undefined` \| `number` ; `masaNetwork`: `undefined` \| `NetworkName` ; `sdk`: `undefined` \| `Masa` = masa }

#### Returns

{ `isLoadingMasa?`: `undefined` ; `masa`: `undefined` = undefined; `masaAddress`: `undefined` \| \`0x${string}\` ; `masaChainId`: `undefined` \| `number` ; `masaNetwork`: `undefined` ; `sdk`: `undefined` = undefined } \| { `isLoadingMasa`: `boolean` ; `masa`: `undefined` \| `Masa` ; `masaAddress`: `undefined` \| \`0x${string}\` ; `masaChainId`: `undefined` \| `number` ; `masaNetwork`: `undefined` \| `NetworkName` ; `sdk`: `undefined` \| `Masa` = masa }

___

### useMasaLoading

▸ **useMasaLoading**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

___

### useMasaQueryClient

▸ **useMasaQueryClient**(): `QueryClient`

#### Returns

`QueryClient`

___

### useMasaSDK

▸ **useMasaSDK**(`«destructured»`, `deps`): `undefined` \| `Masa`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `UseMasaSdkArgs` & { `address`: `undefined` \| \`0x${string}\`  } |
| `deps` | `unknown`[] |

#### Returns

`undefined` \| `Masa`

___

### useNetwork

▸ **useNetwork**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `activeChain` | `undefined` \| `Chain` & { `unsupported?`: `boolean`  } |
| `activeChainId` | `number` |
| `activeNetwork` | `string` |
| `availableChains` | `Chain`[] |
| `canProgramaticallySwitchNetwork` | `boolean` |
| `chains` | `Chain`[] |
| `connectors?` | `Connector`<`any`, `any`\>[] |
| `currentNetwork` | `undefined` \| `Network` |
| `currentNetworkNew` | `GetNetworkResult` |
| `isActiveChainUnsupported` | `boolean` |
| `isSwitchingChain` | `boolean` |
| `networkError` | ``null`` \| `Error` |
| `pendingConnector?` | `Connector`<`any`, `any`\> |
| `stopSwitching` | () => `void` |
| `switchNetwork?` | (`chainId?`: `number`) => `void` |
| `switchNetworkAsync?` | (`chainId_?`: `number`) => `Promise`<`Chain`\> |
| `switchNetworkByName` | (`forcedNetworkParam`: `NetworkName`) => `void` |
| `switchingToChain` | `undefined` \| ``null`` \| `number` |

___

### useNetworkSwitchListen

▸ **useNetworkSwitchListen**(`«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `activeConnector?` | `Connector`<`any`, `any`\> |
| › `networkError` | ``null`` \| `Error` |
| › `stopSwitching` | () => `void` |

#### Returns

`void`

___

### useRegisterSoulname

▸ **useRegisterSoulname**(`«destructured»`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Partial`<{ `onMintError?`: () => `void` ; `onMintSuccess?`: (`result`: `CreateSoulNameResult`) => `void` ; `onRegisterFinish?`: () => `void`  }\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `errorRegisterSoulname` | `undefined` \| `Error` |
| `hasRegisteredSoulname` | `undefined` \| `CreateSoulNameResult` |
| `isRegisteringSoulname` | `boolean` |
| `onRegisterSoulname` | () => `Promise`<`CreateSoulNameResult`\> |

___

### useSBT

▸ **useSBT**(`«destructured»`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `tokenAddress` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `SBTs` | `undefined` \| ``null`` \| { `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[] \| { `message`: `string` = err.message }[] |
| `currentTokenAddress` | `string` |
| `getSBTs` | <TPageData\>(`options?`: `RefetchOptions` & `RefetchQueryFilters`<`TPageData`\>) => `Promise`<`QueryObserverResult`<``null`` \| { `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[] \| { `message`: `string` = err.message }[], `unknown`\>\> |
| `isLoadingSBTs` | `boolean` |

___

### useSession

▸ **useSession**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `checkLogin` | <TPageData\>(`options?`: `RefetchOptions` & `RefetchQueryFilters`<`TPageData`\>) => `Promise`<`QueryObserverResult`<``null`` \| `boolean`, `unknown`\>\> |
| `getSession` | <TPageData\>(`options?`: `RefetchOptions` & `RefetchQueryFilters`<`TPageData`\>) => `Promise`<`QueryObserverResult`<``null`` \| `ISession`, `unknown`\>\> |
| `handleLogin` | () => `Promise`<``null`` \| { `address`: `string` ; `cookie?`: `string` ; `userId`: `string` \| `BigNumber`  }\> |
| `handleLogout` | (`logoutCallback?`: () => `void`) => `Promise`<`void`\> |
| `hasSession` | `undefined` \| ``null`` \| `boolean` |
| `isCheckingLogin` | `boolean` |
| `isFetchingSession` | `boolean` |
| `isLoadingSession` | `boolean` |
| `isLoggedIn` | `undefined` \| ``null`` \| `boolean` |
| `isLoggingIn` | `boolean` |
| `isLoggingOut` | `boolean` |
| `isSessionLoading` | `boolean` |
| `loginSession` | () => `Promise`<``null`` \| { `address`: `string` ; `cookie?`: `string` ; `userId`: `string` \| `BigNumber`  }\> |
| `loginSessionAsync` | () => `Promise`<``null`` \| { `address`: `string` ; `cookie?`: `string` ; `userId`: `string` \| `BigNumber`  }\> |
| `logoutSession` | () => `Promise`<`undefined` \| { `status`: `string`  }\> |
| `session` | `undefined` \| ``null`` \| `ISession` |
| `sessionAddress` | `undefined` \| `string` |

___

### useSessionConnect

▸ **useSessionConnect**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `isLoggingIn` | `boolean` |
| `isLoggingOut` | `boolean` |
| `loginSessionAsync` | () => `Promise`<``null`` \| { `address`: `string` ; `cookie?`: `string` ; `userId`: `string` \| `BigNumber`  }\> |
| `logoutSession` | () => `Promise`<`undefined` \| { `status`: `string`  }\> |

___

### useSessionListen

▸ **useSessionListen**(`«destructured»`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `checkLogin` | <TPageData\>(`options?`: `RefetchOptions` & `RefetchQueryFilters`<`TPageData`\>) => `Promise`<`QueryObserverResult`<``null`` \| `boolean`, `unknown`\>\> |
| › `hasSession?` | ``null`` \| `boolean` |
| › `logoutSession` | () => `Promise`<`undefined` \| { `status`: `string`  }\> |
| › `sessionAddress?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `isUpdatingSession` | `boolean` |

___

### useSoulNames

▸ **useSoulNames**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getSoulnames` | <TPageData\>(`options?`: `RefetchOptions` & `RefetchQueryFilters`<`TPageData`\>) => `Promise`<`QueryObserverResult`<`undefined` \| `string`[], `unknown`\>\> |
| `isLoadingSoulnames` | `boolean` |
| `isSoulnamesLoading` | `boolean` |
| `reloadSoulnames` | <TPageData\>(`options?`: `RefetchOptions` & `RefetchQueryFilters`<`TPageData`\>) => `Promise`<`QueryObserverResult`<`undefined` \| `string`[], `unknown`\>\> |
| `soulnames` | `undefined` \| `string`[] |

___

### useSoulNamesPurchase

▸ **useSoulNamesPurchase**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `errorPurchaseSoulName` | `undefined` \| `Error` |
| `hasPurchasedSoulName` | `undefined` \| `CreateSoulNameResult` \| `Error` & { `code?`: `string`  } |
| `isPurchasingSoulName` | `boolean` |
| `purchaseSoulName` | (`soulname`: `string`, `registrationPeriod`: `number`, `paymentMethod`: `PaymentMethod`, `style?`: `string`) => `Promise`<`undefined` \| `CreateSoulNameResult` \| `Error` & { `code?`: `string`  }\> |

___

### useSoulnameInterface

▸ **useSoulnameInterface**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `handleChangeSoulname` | (`event`: `ChangeEvent`<`HTMLInputElement`\>) => `void` |
| `isAvailable` | `undefined` \| `boolean` |
| `isLoadingAvailability` | `boolean` |
| `isLoadingRegistrationPrice` | `boolean` |
| `paymentMethod` | `PaymentMethod` |
| `registrationPeriod` | `number` |
| `registrationPrice` | `undefined` \| `string` |
| `setSoulname` | `Dispatch`<`SetStateAction`<`string`\>\> |
| `soulNameError` | `undefined` \| `string` |
| `soulname` | `string` |
| `updatePaymentMethod` | (`e`: `unknown`) => `void` |
| `updatePeriod` | (`num`: `number`) => `void` |

___

### useSoulnameModal

▸ **useSoulnameModal**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `enabledMethods` | `undefined` \| `string`[] |
| `extension` | `undefined` \| `string` |
| `isLoadingEnabledMethods` | `boolean` |
| `isLoadingExtension` | `boolean` |
| `paymentMethods` | { `name`: `PaymentMethod` ; `value`: `string`  }[] |

___

### useWallet

▸ **useWallet**(): `UseWalletReturn`

#### Returns

`UseWalletReturn`
