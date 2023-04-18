[# Masa React
](README.md) / Exports

# # Masa React

## Table of contents

### Enumerations

- [SoulNameErrorCodes](enums/SoulNameErrorCodes.md)

### Interfaces

- [ArweaveConfig](interfaces/ArweaveConfig.md)
- [MasaContextProviderProps](interfaces/MasaContextProviderProps.md)
- [MasaShape](interfaces/MasaShape.md)
- [ModalProps](interfaces/ModalProps.md)
- [SpinnerProps](interfaces/SpinnerProps.md)

### Type Aliases

- [EnvironmentNameEx](modules.md#environmentnameex)

### Variables

- [MasaContext](modules.md#masacontext)
- [queryClient](modules.md#queryclient)

### Functions

- [MasaContextProvider](modules.md#masacontextprovider)
- [MasaInterface](modules.md#masainterface)
- [MasaLoading](modules.md#masaloading)
- [MasaProvider](modules.md#masaprovider)
- [ModalComponent](modules.md#modalcomponent)
- [Spinner](modules.md#spinner)
- [createNewMasa](modules.md#createnewmasa)
- [getWeb3Provider](modules.md#getweb3provider)
- [useCreditScores](modules.md#usecreditscores)
- [useDebounce](modules.md#usedebounce)
- [useDebounceIfValue](modules.md#usedebounceifvalue)
- [useErrors](modules.md#useerrors)
- [useGreen](modules.md#usegreen)
- [useIdentity](modules.md#useidentity)
- [useLocalStorage](modules.md#uselocalstorage)
- [useMasa](modules.md#usemasa)
- [useMetamask](modules.md#usemetamask)
- [useModal](modules.md#usemodal)
- [useNetwork](modules.md#usenetwork)
- [useSBT](modules.md#usesbt)
- [useSession](modules.md#usesession)
- [useSoulnames](modules.md#usesoulnames)
- [useWallet](modules.md#usewallet)

## Type Aliases

### EnvironmentNameEx

Ƭ **EnvironmentNameEx**: `EnvironmentName` & ``"local"`` \| ``"stage"``

## Variables

### MasaContext

• `Const` **MasaContext**: `Context`<[`MasaShape`](interfaces/MasaShape.md)\>

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
| `«destructured»` | [`MasaContextProviderProps`](interfaces/MasaContextProviderProps.md) |

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

▸ **createNewMasa**(`«destructured»`): `undefined` \| `default`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `arweaveConfig?` | [`ArweaveConfig`](interfaces/ArweaveConfig.md) |
| › `environmentName` | `string` |
| › `networkName?` | `NetworkName` |
| › `signer` | ``null`` \| `Signer` |
| › `verbose` | `boolean` |

#### Returns

`undefined` \| `default`

___

### getWeb3Provider

▸ **getWeb3Provider**(): `undefined` \| `Web3Provider`

#### Returns

`undefined` \| `Web3Provider`

___

### useCreditScores

▸ **useCreditScores**(`masa?`, `walletAddress?`, `identity?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa?` | `default` |
| `walletAddress?` | `string` |
| `identity?` | `Object` |
| `identity.address?` | `string` |
| `identity.identityId?` | `BigNumber` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `creditScores?` | { `metadata?`: `ICreditScore` ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[] |
| `error` | `unknown` |
| `handleCreateCreditScore` | () => `Promise`<`undefined` \| `boolean`\> |
| `isCreditScoresLoading` | `boolean` |
| `reloadCreditScores` | () => `void` |
| `status` | `string` |

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

▸ **useGreen**(`masa?`, `walletAddress?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa?` | `default` |
| `walletAddress?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |
| `greens?` | { `metadata?`: `IGreen` ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[] |
| `handleCreateGreen` | (`phoneNumber`: `string`, `code`: `string`) => `Promise`<`undefined` \| `VerifyGreenResult`\> |
| `handleGenerateGreen` | (`phoneNumber`: `string`) => `Promise`<`undefined` \| `GenerateGreenResult`\> |
| `isGreensLoading` | `boolean` |
| `reloadGreens` | () => `void` |
| `status` | `string` |

___

### useIdentity

▸ **useIdentity**(`masa?`, `walletAddress?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa?` | `default` |
| `walletAddress?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |
| `handlePurchaseIdentity` | () => `Promise`<`boolean`\> |
| `handlePurchaseIdentityWithSoulname` | (`paymentMethod`: `PaymentMethod`, `soulname`: `string`, `registrationPeriod`: `number`) => `Promise`<`boolean`\> |
| `identity?` | { `address?`: `string` ; `identityId?`: `BigNumber`  } |
| `identity.address?` | `string` |
| `identity.identityId?` | `BigNumber` |
| `isIdentityLoading` | `boolean` |
| `reloadIdentity` | () => `void` |
| `status` | `string` |

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
| `openMintMasaGreen` | (`mintCallback?`: () => `void`) => `void` |
| `openMintSoulnameModal` | (`mintCallback?`: () => `void`) => `void` |
| `setForcedPage?` | (`page`: ``null`` \| `string`) => `void` |
| `setModalCallback` | (`callback`: () => `void`) => `void` |
| `setModalOpen` | (`modalOpen`: `boolean`) => `void` |
| `setModalSize` | (`size`: { `height`: `number` ; `width`: `number`  }) => `void` |
| `useModalSize` | (`size`: { `height`: `number` ; `width`: `number`  }) => `void` |

___

### useNetwork

▸ **useNetwork**(`provider?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider?` | `Wallet` \| `Signer` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `addNetwork` | (`networkDetails`: `Network`) => `void` |
| `currentNetwork?` | `Network` |
| `switchNetwork` | (`networkName`: `NetworkName`) => `void` |

___

### useSBT

▸ **useSBT**(`«destructured»`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `masa?` | `default` |
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
| `masa?` | `default` |
| `walletAddress?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |
| `handleLogin` | () => `void` |
| `handleLogout` | (`logoutCallback?`: () => `void`) => `Promise`<`void`\> |
| `isLoggedIn?` | `boolean` |
| `isSessionLoading` | `boolean` |
| `status` | `string` |

___

### useSoulnames

▸ **useSoulnames**(`masa?`, `walletAddress?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa?` | `default` |
| `walletAddress?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |
| `handlePurchaseSoulname` | (`soulname`: `string`, `registrationPeriod`: `number`, `paymentMethod`: `PaymentMethod`) => `Promise`<`boolean`\> |
| `isSoulnamesLoading` | `boolean` |
| `reloadSoulnames` | () => `void` |
| `soulnames?` | `SoulNameDetails`[] |
| `status` | `string` |

___

### useWallet

▸ **useWallet**(`masa?`, `provider?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa?` | `default` |
| `provider?` | `Wallet` \| `Signer` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |
| `hasWalletAddress` | `boolean` |
| `isWalletLoading` | `boolean` |
| `status` | `string` |
| `walletAddress?` | `string` |
