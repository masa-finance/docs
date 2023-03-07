[# Masa React
 - v1.0.25](README.md) / Exports

# # Masa React
 - v1.0.25

## Table of contents

### Interfaces

- [ArweaveConfig](interfaces/ArweaveConfig.md)
- [MasaContextProviderProps](interfaces/MasaContextProviderProps.md)
- [MasaShape](interfaces/MasaShape.md)
- [ModalProps](interfaces/ModalProps.md)
- [Network](interfaces/Network.md)
- [SpinnerProps](interfaces/SpinnerProps.md)

### Type Aliases

- [EnvironmentNameEx](modules.md#environmentnameex)

### Variables

- [MASA\_CONTEXT](modules.md#masa_context)
- [SupportedNetworks](modules.md#supportednetworks)
- [queryClient](modules.md#queryclient)

### Functions

- [MasaContextProvider](modules.md#masacontextprovider)
- [MasaInterface](modules.md#masainterface)
- [MasaLoading](modules.md#masaloading)
- [MasaProvider](modules.md#masaprovider)
- [ModalComponent](modules.md#modalcomponent)
- [Spinner](modules.md#spinner)
- [createNewMasa](modules.md#createnewmasa)
- [getNetworkNameByChainId](modules.md#getnetworknamebychainid)
- [getWeb3Provider](modules.md#getweb3provider)
- [useCreditScores](modules.md#usecreditscores)
- [useDebounce](modules.md#usedebounce)
- [useDebounceIfValue](modules.md#usedebounceifvalue)
- [useGreen](modules.md#usegreen)
- [useIdentity](modules.md#useidentity)
- [useMasa](modules.md#usemasa)
- [useMetamask](modules.md#usemetamask)
- [useModal](modules.md#usemodal)
- [useNetwork](modules.md#usenetwork)
- [useSession](modules.md#usesession)
- [useSoulnames](modules.md#usesoulnames)
- [useWallet](modules.md#usewallet)

## Type Aliases

### EnvironmentNameEx

Ƭ **EnvironmentNameEx**: `EnvironmentName` & ``"local"`` \| ``"stage"``

## Variables

### MASA\_CONTEXT

• `Const` **MASA\_CONTEXT**: `Context`<[`MasaShape`](interfaces/MasaShape.md)\>

___

### SupportedNetworks

• `Const` **SupportedNetworks**: `Partial`<{ [key in NetworkName]: Network }\>

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

▸ **createNewMasa**(`«destructured»`): `Promise`<`undefined` \| `default`\>

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

`Promise`<`undefined` \| `default`\>

___

### getNetworkNameByChainId

▸ **getNetworkNameByChainId**(`chainId`): `NetworkName`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |

#### Returns

`NetworkName`

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
| `creditScores` | `undefined` \| { `metadata?`: `ICreditScore` ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[] |
| `error` | `unknown` |
| `handleCreateCreditScore` | () => `void` |
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
| `greens` | `undefined` \| { `metadata?`: `IGreen` ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[] |
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
| `handlePurchaseIdentity` | () => `void` |
| `handlePurchaseIdentityWithSoulname` | (`paymentMethod`: `PaymentMethod`, `soulname`: `string`, `registrationPeriod`: `number`) => `Promise`<`boolean`\> |
| `identity` | `undefined` \| { `address?`: `string` ; `identityId?`: `BigNumber`  } |
| `isIdentityLoading` | `boolean` |
| `reloadIdentity` | () => `void` |
| `status` | `string` |

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
| `openMintSoulnameModal` | (`mintCallback?`: () => `void`) => `void` |
| `setForcedPage?` | (`page`: ``null`` \| `string`) => `void` |
| `setModalCallback` | (`callback`: () => `void`) => `void` |
| `setModalOpen` | (`modalOpen`: `boolean`) => `void` |

___

### useNetwork

▸ **useNetwork**(`provider?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider?` | `Signer` \| `Wallet` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `addNetwork` | (`networkDetails`: [`Network`](interfaces/Network.md)) => `void` |
| `currentNetwork?` | [`Network`](interfaces/Network.md) |
| `switchNetwork` | (`networkName`: `NetworkName`) => `void` |

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
| `handleLogout` | (`logoutCallback?`: () => `void`) => `void` |
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
| `soulnames` | `undefined` \| `SoulNameDetails`[] |
| `status` | `string` |

___

### useWallet

▸ **useWallet**(`masa?`, `provider?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa?` | `default` |
| `provider?` | `Signer` \| `Wallet` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |
| `isConnected` | `boolean` |
| `isWalletLoading` | `boolean` |
| `status` | `string` |
| `walletAddress` | `undefined` \| `string` |
