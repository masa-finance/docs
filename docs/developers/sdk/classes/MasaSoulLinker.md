[# Masa SDK
 - v3.15.0](../README.md) / [Exports](../modules.md) / MasaSoulLinker

# Class: MasaSoulLinker

## Hierarchy

- `MasaBase`

  ↳ **`MasaSoulLinker`**

## Table of contents

### Constructors

- [constructor](MasaSoulLinker.md#constructor)

### Properties

- [contract](MasaSoulLinker.md#contract)
- [masa](MasaSoulLinker.md#masa)

### Methods

- [break](MasaSoulLinker.md#break)
- [create](MasaSoulLinker.md#create)
- [establish](MasaSoulLinker.md#establish)
- [list](MasaSoulLinker.md#list)
- [query](MasaSoulLinker.md#query)
- [verify](MasaSoulLinker.md#verify)

## Constructors

### constructor

• **new MasaSoulLinker**(`masa`, `contract`): [`MasaSoulLinker`](MasaSoulLinker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |
| `contract` | `Contract` |

#### Returns

[`MasaSoulLinker`](MasaSoulLinker.md)

#### Overrides

MasaBase.constructor

## Properties

### contract

• `Private` **contract**: `Contract`

___

### masa

• `Protected` `Readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

MasaBase.masa

## Methods

### break

▸ **break**(`tokenId`, `readerIdentityId`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `BigNumber` |
| `readerIdentityId` | `BigNumber` |

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

___

### create

▸ **create**(`tokenId`, `readerIdentityId`): `Promise`\<[`CreateLinkResult`](../modules.md#createlinkresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `BigNumber` |
| `readerIdentityId` | `BigNumber` |

#### Returns

`Promise`\<[`CreateLinkResult`](../modules.md#createlinkresult)\>

___

### establish

▸ **establish**(`paymentMethod?`, `passport`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `"ETH"` |
| `passport` | `string` | `undefined` |

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

___

### list

▸ **list**(`tokenId`): `Promise`\<[`ListLinksResult`](../modules.md#listlinksresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `BigNumber` |

#### Returns

`Promise`\<[`ListLinksResult`](../modules.md#listlinksresult)\>

___

### query

▸ **query**(`paymentMethod`, `passport`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |
| `passport` | `string` |

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

___

### verify

▸ **verify**(`tokenId`, `readerIdentityId?`): `Promise`\<[`VerifyLinkResult`](../modules.md#verifylinkresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `BigNumber` |
| `readerIdentityId?` | `BigNumber` |

#### Returns

`Promise`\<[`VerifyLinkResult`](../modules.md#verifylinkresult)\>
