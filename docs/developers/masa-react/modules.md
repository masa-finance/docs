[# Masa React
 - v0.27.7](README.md) / Exports

# # Masa React
 - v0.27.7

## Table of contents

### Interfaces

- [ArweaveConfig](interfaces/ArweaveConfig.md)
- [MasaContextProviderProps](interfaces/MasaContextProviderProps.md)
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
- [useProvider](modules.md#useprovider)
- [useSession](modules.md#usesession)
- [useSoulnames](modules.md#usesoulnames)
- [useWallet](modules.md#usewallet)

## Type Aliases

### EnvironmentNameEx

Ƭ **EnvironmentNameEx**: `EnvironmentName` & ``"local"`` \| ``"stage"``

## Variables

### MASA\_CONTEXT

• `Const` **MASA\_CONTEXT**: `Context`<`MasaShape`\>

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
| › `disable?` | `boolean` |

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

▸ **createNewMasa**(`«destructured»`): `Promise`<``null`` \| `default`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `arweaveConfig?` | [`ArweaveConfig`](interfaces/ArweaveConfig.md) |
| › `environmentName` | `string` |
| › `signer` | ``null`` \| `Signer` |
| › `verbose` | `boolean` |

#### Returns

`Promise`<``null`` \| `default`\>

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

▸ **useCreditScores**(`masa`, `walletAddress`, `identity`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | ``null`` \| `default` |
| `walletAddress` | `undefined` \| `string` |
| `identity` | `undefined` \| { `address?`: `string` ; `identityId?`: `BigNumber`  } |

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

▸ **useGreen**(`masa`, `walletAddress`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | ``null`` \| `default` |
| `walletAddress` | `undefined` \| `string` |

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

▸ **useIdentity**(`masa`, `walletAddress`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | ``null`` \| `default` |
| `walletAddress` | `undefined` \| `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |
| `handlePurchaseIdentity` | () => `void` |
| `identity` | `undefined` \| { `address?`: `string` ; `identityId?`: `BigNumber`  } |
| `isIdentityLoading` | `boolean` |
| `reloadIdentity` | () => `void` |
| `status` | `string` |

___

### useMasa

▸ **useMasa**(): `MasaShape`

#### Returns

`MasaShape`

___

### useMetamask

▸ **useMetamask**(`«destructured»`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `disable?` | `boolean` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `connect` | () => `void` |

___

### useModal

▸ **useModal**(`masa`, `provider`, `networkName?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | ``null`` \| `default` |
| `provider` | ``null`` \| `Signer` \| `Wallet` |
| `networkName?` | `NetworkName` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `closeModal` | () => `void` |
| `isModalOpen` | `boolean` |
| `setModalCallback` | (`callback`: () => `void`) => `void` |
| `setModalOpen` | (`modalOpen`: `boolean`) => `void` |

___

### useNetwork

▸ **useNetwork**(`provider`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | ``null`` \| `Signer` \| `Wallet` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `addNetwork` | (`networkDetails`: [`Network`](interfaces/Network.md)) => `void` |
| `network` | ``null`` \| `Network` |
| `switchNetwork` | (`chainId`: `number`) => `void` |

___

### useProvider

▸ **useProvider**(`signer?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer?` | `Signer` \| `Wallet` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `isProviderMissing` | `undefined` \| `boolean` |
| `provider` | ``null`` \| `Signer` \| `Wallet` |
| `setIsProviderMissing` | (`providerMissing`: `boolean`) => `void` |
| `setProvider` | (`provider`: ``null`` \| `Signer` \| `Wallet`) => `void` |

___

### useSession

▸ **useSession**(`masa`, `walletAddress`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | ``null`` \| `default` |
| `walletAddress` | `undefined` \| `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |
| `handleLogin` | () => `void` |
| `handleLogout` | () => `void` |
| `isLoggedIn?` | `boolean` |
| `isSessionLoading` | `boolean` |
| `status` | `string` |

___

### useSoulnames

▸ **useSoulnames**(`masa`, `walletAddress`, `identity`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | ``null`` \| `default` |
| `walletAddress` | `undefined` \| `string` |
| `identity` | `undefined` \| { `address?`: `string` ; `identityId?`: `BigNumber`  } |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |
| `isSoulnamesLoading` | `boolean` |
| `reloadSoulnames` | () => `void` |
| `soulnames` | `undefined` \| `SoulNameDetails`[] |
| `status` | `string` |

___

### useWallet

▸ **useWallet**(`masa`, `provider`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | ``null`` \| `default` |
| `provider` | ``null`` \| `Signer` \| `Wallet` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |
| `isConnected` | `boolean` |
| `isWalletLoading` | `boolean` |
| `status` | `string` |
| `walletAddress` | `undefined` \| `string` |
