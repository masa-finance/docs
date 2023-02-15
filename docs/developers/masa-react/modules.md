[# Masa React
 - v0.26.6](README.md) / Exports

# # Masa React
 - v0.26.6

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
- [createRandomWallet](modules.md#createrandomwallet)
- [useCreditScores](modules.md#usecreditscores)
- [useDebounce](modules.md#usedebounce)
- [useDebounceIfValue](modules.md#usedebounceifvalue)
- [useGreen](modules.md#usegreen)
- [useIdentity](modules.md#useidentity)
- [useMasa](modules.md#usemasa)
- [useMetamask](modules.md#usemetamask)
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

• `Const` **SupportedNetworks**: `Object`

#### Index signature

▪ [key: `number`]: [`Network`](interfaces/Network.md)

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
| › `newWallet` | ``null`` \| `Signer` |
| › `verbose` | `boolean` |

#### Returns

`Promise`<``null`` \| `default`\>

___

### createRandomWallet

▸ **createRandomWallet**(): ``null`` \| `Wallet`

#### Returns

``null`` \| `Wallet`

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
| `isLoading` | `boolean` |
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
| `isLoading` | `boolean` |
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
| `isLoading` | `boolean` |
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
| › `disable?` | `boolean` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `connect` | () => `void` |

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
| `isLoading` | `boolean` |
| `loggedIn?` | `boolean` |
| `login` | () => `void` |
| `logout` | () => `void` |
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
| `isLoading` | `boolean` |
| `soulnames` | `undefined` \| `SoulNameDetails`[] |
| `status` | `string` |

___

### useWallet

▸ **useWallet**(`masa`, `provider`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | ``null`` \| `default` |
| `provider` | ``null`` \| `Wallet` \| `Signer` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `chain?` | ``null`` \| `Network` |
| `error` | `unknown` |
| `isLoading` | `boolean` |
| `status` | `string` |
| `walletAddress` | `undefined` \| `string` |
