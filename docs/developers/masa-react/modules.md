[# Masa React
 - v0.11.0](README.md) / Exports

# # Masa React
 - v0.11.0

## Table of contents

### Namespaces

- [rest](modules/rest.md)

### Variables

- [addresses](modules.md#addresses)

### Functions

- [AccessTokenProvider](modules.md#accesstokenprovider)
- [MasaToolsProvider](modules.md#masatoolsprovider)
- [MasaToolsWrapper](modules.md#masatoolswrapper)
- [loadIdentityContracts](modules.md#loadidentitycontracts)
- [useContractCall](modules.md#usecontractcall)
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

▸ **loadIdentityContracts**(`__namedParameters`): `Promise`<`IIdentityContracts`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `LoadContractArgs` |

#### Returns

`Promise`<`IIdentityContracts`\>

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

### useMasaTools

▸ **useMasaTools**(): `MasaToolsShape`

#### Returns

`MasaToolsShape`
