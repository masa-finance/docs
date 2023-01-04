[# Masa React
 - v0.18.0](README.md) / Exports

# # Masa React
 - v0.18.0

## Table of contents

### Namespaces

- [rest](modules/rest.md)

### Variables

- [addresses](modules.md#addresses)

### Functions

- [AccessTokenProvider](modules.md#accesstokenprovider)
- [MasaProvider](modules.md#masaprovider)
- [MasaToolsProvider](modules.md#masatoolsprovider)
- [MasaToolsWrapper](modules.md#masatoolswrapper)
- [loadIdentityContracts](modules.md#loadidentitycontracts)
- [useContractCall](modules.md#usecontractcall)
- [useMasa](modules.md#usemasa)
- [useMasaTools](modules.md#usemasatools)

## Variables

### addresses

• `Const` **addresses**: `Addresses`

## Functions

### AccessTokenProvider

▸ **AccessTokenProvider**(`__namedParameters`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `AccessTokenProps` |

#### Returns

`Element`

___

### MasaProvider

▸ **MasaProvider**(`__namedParameters`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `MasaContextProviderProps` |

#### Returns

`Element`

___

### MasaToolsProvider

▸ **MasaToolsProvider**(`__namedParameters`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `MasaToolsProviderProps` |

#### Returns

`Element`

___

### MasaToolsWrapper

▸ **MasaToolsWrapper**(`__namedParameters`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `MasaToolsWrapperProps` |

#### Returns

`Element`

___

### loadIdentityContracts

▸ **loadIdentityContracts**(`__namedParameters`): `IIdentityContracts`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `LoadContractArgs` |

#### Returns

`IIdentityContracts`

___

### useContractCall

▸ **useContractCall**(`__namedParameters`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.method` | `Promise`<`any`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `error` | `any` |
| `getData` | () => `any` |
| `loading` | `boolean` |

___

### useMasa

▸ **useMasa**(): `MasaShape`

#### Returns

`MasaShape`

___

### useMasaTools

▸ **useMasaTools**(): `MasaToolsShape`

#### Returns

`MasaToolsShape`
