[# Masa React
 - v3.15.3](README.md) / Exports

# # Masa React
 - v3.15.3

## Table of contents

### Interfaces

- [MasaProviderValue](interfaces/MasaProviderValue.md)

### Functions

- [AuthenticateModal](modules.md#authenticatemodal)
- [Button](modules.md#button)
- [CreateSoulnameModal](modules.md#createsoulnamemodal)
- [MasaProvider](modules.md#masaprovider)
- [Modal](modules.md#modal)
- [ModalError](modules.md#modalerror)
- [ModalLoading](modules.md#modalloading)
- [openAuthenticateModal](modules.md#openauthenticatemodal)
- [openCreateSoulnameModal](modules.md#opencreatesoulnamemodal)
- [useAuthenticate](modules.md#useauthenticate)
- [useAuthenticateModal](modules.md#useauthenticatemodal)
- [useCanQuery](modules.md#usecanquery)
- [useCreditScoreCreate](modules.md#usecreditscorecreate)
- [useCreditScores](modules.md#usecreditscores)
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
- [useSession](modules.md#usesession)
- [useSessionConnect](modules.md#usesessionconnect)
- [useSessionListen](modules.md#usesessionlisten)
- [useSoulNames](modules.md#usesoulnames)
- [useSoulNamesPurchase](modules.md#usesoulnamespurchase)
- [useSoulnameInterface](modules.md#usesoulnameinterface)
- [useSoulnameModal](modules.md#usesoulnamemodal)
- [useWallet](modules.md#usewallet)

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
| `props` | \{ `closeOnSuccess?`: `boolean` ; `onError?`: () => `void` ; `onMintError?`: () => `void` ; `onMintSuccess?`: (`result`: `CreateSoulNameResult`) => `void` ; `onRegisterFinish?`: () => `void` ; `onSuccess?`: () => `void`  } & `NiceModalHocProps` |
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

### openAuthenticateModal

▸ **openAuthenticateModal**(`«destructured»`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `AuthenticateProps` |

#### Returns

`Promise`\<`unknown`\>

___

### openCreateSoulnameModal

▸ **openCreateSoulnameModal**(`«destructured»`): `Promise`\<`unknown`\>

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

`Promise`\<`unknown`\>

___

### useAuthenticate

▸ **useAuthenticate**(`«destructured»?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `onAuthenticateError?` | () => `void` |
| › `onAuthenticateSuccess?` | (`payload`: \{ `address?`: `string` ; `walletType?`: `string`  }) => `void` |
| › `onError?` | () => `void` |
| › `onRegisterFinish?` | () => `void` |
| › `onSuccess?` | () => `void` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `isAuthenticateModalOpen` | `boolean` |
| `openAuthModal` | () => `Promise`\<`void`\> |

___

### useAuthenticateModal

▸ **useAuthenticateModal**(`«destructured»`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `onAuthenticateError?` | () => `void` |
| › `onAuthenticateSuccess?` | (`payload`: \{ `address?`: `string` ; `walletType?`: `string`  }) => `void` |
| › `onClose?` | () => `void` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `isAuthenticating` | `boolean` |
| `needsWalletConnection` | `boolean` |
| `onAuthenticateStart` | () => `Promise`\<``null`` \| `LoginResult`\> |
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
| `createCreditScore` | () => `Promise`\<`undefined` \| `boolean`\> |
| `errorCreditScoreCrate` | `undefined` \| `Error` |
| `handleCreateCreditScore` | () => `Promise`\<`undefined` \| `boolean`\> |
| `isCreatingCreditScore` | `boolean` |

___

### useCreditScores

▸ **useCreditScores**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `creditScores` | `undefined` \| ``null`` \| `CreditScoreDetails`[] |
| `getCreditScores` | (`options?`: `RefetchOptions`) => `Promise`\<`QueryObserverResult`\<``null`` \| `CreditScoreDetails`[], `Error`\>\> |
| `isCreditScoreAvailableInNetwork` | `boolean` |
| `isCreditScoresLoading` | `boolean` |
| `isLoadingCreditScores` | `boolean` |
| `reloadCreditScores` | (`options?`: `RefetchOptions`) => `Promise`\<`QueryObserverResult`\<``null`` \| `CreditScoreDetails`[], `Error`\>\> |

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
| `getGreens` | (`options?`: `RefetchOptions`) => `Promise`\<`QueryObserverResult`\<``null`` \| `GreenDetails`[], `Error`\>\> |
| `greens` | `undefined` \| ``null`` \| `GreenDetails`[] |
| `isGreenAvailableInNetwork` | `boolean` |
| `isGreensLoading` | `boolean` |
| `isLoadingGreens` | `boolean` |
| `reloadGreens` | (`options?`: `RefetchOptions`) => `Promise`\<`QueryObserverResult`\<``null`` \| `GreenDetails`[], `Error`\>\> |

___

### useGreenGenerate

▸ **useGreenGenerate**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createGreen` | (`phoneNumber`: `string`, `code`: `string`) => `Promise`\<``null`` \| `GreenBaseResult`\> |
| `createGreenError` | `undefined` \| `Error` |
| `generateGreen` | (`phoneNumber`: `string`) => `Promise`\<``null`` \| `GenerateGreenResult`\> |
| `generateGreenError` | `undefined` \| `Error` |
| `handleCreateGreen` | (`phoneNumber`: `string`, `code`: `string`) => `Promise`\<``null`` \| `GreenBaseResult`\> |
| `handleGenerateGreen` | (`phoneNumber`: `string`) => `Promise`\<``null`` \| `GenerateGreenResult`\> |
| `isCreatingGreen` | `boolean` |
| `isGeneratingGreen` | `boolean` |

___

### useIdentity

▸ **useIdentity**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getIdentity` | (`options?`: `RefetchOptions`) => `Promise`\<`QueryObserverResult`\<`undefined` \| ``null`` \| \{ `address`: `string` ; `identityId?`: `BigNumber`  }, `Error`\>\> |
| `hasIdentity` | `undefined` \| ``false`` \| `BigNumber` |
| `identity` | `undefined` \| ``null`` \| \{ `address`: `string` ; `identityId?`: `BigNumber`  } |
| `isFetchingIdentity` | `boolean` |
| `isIdentityAvailableInNetwork` | `boolean` |
| `isIdentityLoading` | `boolean` |
| `isLoadingIdentity` | `boolean` |
| `reloadIdentity` | (`options?`: `RefetchOptions`) => `Promise`\<`QueryObserverResult`\<`undefined` \| ``null`` \| \{ `address`: `string` ; `identityId?`: `BigNumber`  }, `Error`\>\> |

___

### useIdentityListen

▸ **useIdentityListen**(`«destructured»`): `AsyncState`\<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `getIdentity` | (`options?`: `RefetchOptions`) => `Promise`\<`QueryObserverResult`\<`undefined` \| ``null`` \| \{ `address`: `string` ; `identityId?`: `BigNumber`  }, `Error`\>\> |
| › `identity?` | ``null`` \| \{ `address`: `string` ; `identityId?`: `BigNumber`  } |
| › `sessionAddress?` | `string` |

#### Returns

`AsyncState`\<`undefined`\>

___

### useIdentityPurchase

▸ **useIdentityPurchase**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `handlePurchaseIdentity` | () => `Promise`\<`undefined` \| `boolean`\> |
| `handlePurchaseIdentityWithSoulname` | (`paymentMethod`: `PaymentMethod`, `soulname`: `string`, `registrationPeriod`: `number`, `style?`: `string`) => `Promise`\<`undefined` \| \{ `identityId?`: `string` \| `BigNumber`  } & `CreateSoulNameResult`\> |
| `hasPurchasedIdentity` | `undefined` \| `boolean` |
| `hasPurchasedIdentityWithSoulName` | `undefined` \| \{ `identityId?`: `string` \| `BigNumber`  } & `CreateSoulNameResult` |
| `isPurchasingIdentity` | `boolean` |
| `isPurchasingIdentityWithSoulName` | `boolean` |
| `purchaseIdentity` | () => `Promise`\<`undefined` \| `boolean`\> |
| `purchaseIdentityError` | `undefined` \| `Error` |
| `purchaseIdentityWithSoulName` | (`paymentMethod`: `PaymentMethod`, `soulname`: `string`, `registrationPeriod`: `number`, `style?`: `string`) => `Promise`\<`undefined` \| \{ `identityId?`: `string` \| `BigNumber`  } & `CreateSoulNameResult`\> |
| `purchaseIdentityWithSoulnameError` | `undefined` \| `Error` |

___

### useMasaClient

▸ **useMasaClient**(): \{ `isLoadingMasa?`: `undefined` ; `masa`: `undefined` = undefined; `masaAddress`: `undefined` \| \`0x$\{string}\` ; `masaChainId`: `undefined` \| `number` ; `masaNetwork`: `undefined`  } \| \{ `isLoadingMasa`: `boolean` ; `masa`: `undefined` \| `Masa` ; `masaAddress`: `undefined` \| \`0x$\{string}\` ; `masaChainId`: `undefined` \| `number` ; `masaNetwork`: `undefined` \| `NetworkName`  }

#### Returns

\{ `isLoadingMasa?`: `undefined` ; `masa`: `undefined` = undefined; `masaAddress`: `undefined` \| \`0x$\{string}\` ; `masaChainId`: `undefined` \| `number` ; `masaNetwork`: `undefined`  } \| \{ `isLoadingMasa`: `boolean` ; `masa`: `undefined` \| `Masa` ; `masaAddress`: `undefined` \| \`0x$\{string}\` ; `masaChainId`: `undefined` \| `number` ; `masaNetwork`: `undefined` \| `NetworkName`  }

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
| `«destructured»` | `UseMasaSdkArgs` & \{ `address`: `undefined` \| \`0x$\{string}\`  } |
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
| `activeChain` | `undefined` \| `ChainConstants` & `ChainConfig`\<`undefined` \| `ChainFormatters`\> & \{ `unsupported?`: `boolean`  } |
| `activeChainId` | `number` |
| `activeNetwork` | `string` |
| `availableChains` | `Chain`[] |
| `canProgrammaticallySwitchNetwork` | `boolean` |
| `chains` | `Chain`[] |
| `connectors?` | `Connector`\<`any`, `any`\>[] |
| `currentNetwork` | `undefined` \| `Network` |
| `currentNetworkNew` | `GetNetworkResult` |
| `isActiveChainUnsupported` | `boolean` |
| `isSwitchingChain` | `boolean` |
| `networkError` | ``null`` \| `Error` |
| `pendingConnector?` | `Connector`\<`any`, `any`\> |
| `stopSwitching` | () => `void` |
| `switchNetwork?` | (`chainId?`: `number`) => `void` |
| `switchNetworkAsync?` | (`chainId_?`: `number`) => `Promise`\<`Chain`\> |
| `switchNetworkByName` | (`forcedNetworkParam`: `NetworkName`) => `void` |
| `switchingToChain` | `undefined` \| ``null`` \| `number` |

___

### useNetworkSwitchListen

▸ **useNetworkSwitchListen**(`«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `activeConnector?` | `Connector`\<`any`, `any`\> |
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
| `«destructured»` | `Partial`\<\{ `onMintError?`: () => `void` ; `onMintSuccess?`: (`result`: `CreateSoulNameResult`) => `void` ; `onRegisterFinish?`: () => `void`  }\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `errorRegisterSoulname` | `undefined` \| `Error` |
| `hasRegisteredSoulname` | `undefined` \| `CreateSoulNameResult` |
| `isRegisteringSoulname` | `boolean` |
| `onRegisterSoulname` | () => `Promise`\<`CreateSoulNameResult`\> |

___

### useSession

▸ **useSession**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `checkLogin` | (`options?`: `RefetchOptions`) => `Promise`\<`QueryObserverResult`\<``null`` \| `boolean`, `Error`\>\> |
| `getSession` | (`options?`: `RefetchOptions`) => `Promise`\<`QueryObserverResult`\<``null`` \| `ISession`, `Error`\>\> |
| `handleLogin` | () => `Promise`\<``null`` \| `LoginResult`\> |
| `handleLogout` | (`logoutCallback?`: () => `void`) => `Promise`\<`void`\> |
| `hasSession` | `undefined` \| ``null`` \| `boolean` |
| `isCheckingLogin` | `boolean` |
| `isFetchingSession` | `boolean` |
| `isLoadingSession` | `boolean` |
| `isLoggedIn` | `undefined` \| ``null`` \| `boolean` |
| `isLoggingIn` | `boolean` |
| `isLoggingOut` | `boolean` |
| `isSessionLoading` | `boolean` |
| `loginSession` | () => `Promise`\<``null`` \| `LoginResult`\> |
| `loginSessionAsync` | () => `Promise`\<``null`` \| `LoginResult`\> |
| `logoutSession` | () => `Promise`\<`undefined` \| \{ `status`: `string`  }\> |
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
| `loginSessionAsync` | () => `Promise`\<``null`` \| `LoginResult`\> |
| `logoutSession` | () => `Promise`\<`undefined` \| \{ `status`: `string`  }\> |

___

### useSessionListen

▸ **useSessionListen**(`«destructured»`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `checkLogin` | (`options?`: `RefetchOptions`) => `Promise`\<`QueryObserverResult`\<``null`` \| `boolean`, `Error`\>\> |
| › `hasSession?` | ``null`` \| `boolean` |
| › `logoutSession` | () => `Promise`\<`undefined` \| \{ `status`: `string`  }\> |
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
| `getSoulnames` | (`options?`: `RefetchOptions`) => `Promise`\<`QueryObserverResult`\<``null`` \| `string`[], `Error`\>\> |
| `isLoadingSoulnames` | `boolean` |
| `isSoulnameAvailableInNetwork` | `boolean` |
| `isSoulnamesLoading` | `boolean` |
| `reloadSoulnames` | (`options?`: `RefetchOptions`) => `Promise`\<`QueryObserverResult`\<``null`` \| `string`[], `Error`\>\> |
| `soulnames` | `undefined` \| ``null`` \| `string`[] |

___

### useSoulNamesPurchase

▸ **useSoulNamesPurchase**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `errorPurchaseSoulName` | `undefined` \| `Error` |
| `hasPurchasedSoulName` | `undefined` \| `CreateSoulNameResult` |
| `isPurchasingSoulName` | `boolean` |
| `purchaseSoulName` | (`soulname`: `string`, `registrationPeriod`: `number`, `paymentMethod`: `PaymentMethod`, `style?`: `string`) => `Promise`\<`undefined` \| `CreateSoulNameResult`\> |

___

### useSoulnameInterface

▸ **useSoulnameInterface**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `handleChangeSoulname` | (`event`: `ChangeEvent`\<`HTMLInputElement`\>) => `void` |
| `isAvailable` | `undefined` \| `boolean` |
| `isLoadingAvailability` | `boolean` |
| `isLoadingRegistrationPrice` | `boolean` |
| `paymentMethod` | `PaymentMethod` |
| `registrationPeriod` | `number` |
| `registrationPrice` | `undefined` \| `string` |
| `setSoulname` | `Dispatch`\<`SetStateAction`\<`string`\>\> |
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
| `paymentMethods` | \{ `name`: `PaymentMethod` ; `value`: `string`  }[] |

___

### useWallet

▸ **useWallet**(): `UseWalletReturn`

#### Returns

`UseWalletReturn`
