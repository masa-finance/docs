[# Masa SDK
 - v1.4.1](../README.md) / [Exports](../modules.md) / MasaCreditScore

# Class: MasaCreditScore

## Table of contents

### Constructors

- [constructor](MasaCreditScore.md#constructor)

### Properties

- [links](MasaCreditScore.md#links)
- [masa](MasaCreditScore.md#masa)

### Methods

- [burn](MasaCreditScore.md#burn)
- [create](MasaCreditScore.md#create)
- [list](MasaCreditScore.md#list)
- [load](MasaCreditScore.md#load)

## Constructors

### constructor

• **new MasaCreditScore**(`masa`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](Masa.md) |

## Properties

### links

• `Readonly` **links**: [`MasaSoulLinker`](MasaSoulLinker.md)

___

### masa

• `Private` **masa**: [`Masa`](Masa.md)

## Methods

### burn

▸ **burn**(`creditScoreId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditScoreId` | `BigNumber` |

#### Returns

`Promise`<`boolean`\>

___

### create

▸ **create**(): `Promise`<`undefined` \| [`GenerateCreditScoreResult`](../interfaces/GenerateCreditScoreResult.md)\>

#### Returns

`Promise`<`undefined` \| [`GenerateCreditScoreResult`](../interfaces/GenerateCreditScoreResult.md)\>

___

### list

▸ **list**(`address?`): `Promise`<{ `metadata?`: [`ICreditScore`](../interfaces/ICreditScore.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `string` |

#### Returns

`Promise`<{ `metadata?`: [`ICreditScore`](../interfaces/ICreditScore.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

___

### load

▸ **load**(`creditScoreId`): `Promise`<{ `metadata?`: [`ICreditScore`](../interfaces/ICreditScore.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditScoreId` | `BigNumber` |

#### Returns

`Promise`<{ `metadata?`: [`ICreditScore`](../interfaces/ICreditScore.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }\>
