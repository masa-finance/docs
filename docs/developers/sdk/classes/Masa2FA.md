[# Masa SDK
 - v1.0.2](../README.md) / [Exports](../modules.md) / Masa2FA

# Class: Masa2FA

## Table of contents

### Constructors

- [constructor](Masa2FA.md#constructor)

### Properties

- [links](Masa2FA.md#links)
- [masa](Masa2FA.md#masa)

### Methods

- [burn](Masa2FA.md#burn)
- [create](Masa2FA.md#create)
- [generate](Masa2FA.md#generate)
- [list](Masa2FA.md#list)
- [load](Masa2FA.md#load)
- [mint](Masa2FA.md#mint)

## Constructors

### constructor

• **new Masa2FA**(`masa`)

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

▸ **burn**(`twoFAId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `twoFAId` | `number` |

#### Returns

`Promise`<`boolean`\>

___

### create

▸ **create**(`phoneNumber`, `code`): `Promise`<[`Create2FAResult`](../interfaces/Create2FAResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `phoneNumber` | `string` |
| `code` | `string` |

#### Returns

`Promise`<[`Create2FAResult`](../interfaces/Create2FAResult.md)\>

___

### generate

▸ **generate**(`phoneNumber`): `Promise`<`undefined` \| [`BaseResult`](../interfaces/BaseResult.md) & { `status`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `phoneNumber` | `string` |

#### Returns

`Promise`<`undefined` \| [`BaseResult`](../interfaces/BaseResult.md) & { `status`: `string`  }\>

___

### list

▸ **list**(`address?`): `Promise`<{ `metadata?`: [`I2FA`](../interfaces/I2FA.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `string` |

#### Returns

`Promise`<{ `metadata?`: [`I2FA`](../interfaces/I2FA.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

___

### load

▸ **load**(`identityId`): `Promise`<{ `metadata?`: [`I2FA`](../interfaces/I2FA.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identityId` | `BigNumber` |

#### Returns

`Promise`<{ `metadata?`: [`I2FA`](../interfaces/I2FA.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

___

### mint

▸ **mint**(`address`, `phoneNumber`, `code`, `signature`): `Promise`<`undefined` \| [`BaseResult`](../interfaces/BaseResult.md) & { `status`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `phoneNumber` | `string` |
| `code` | `string` |
| `signature` | `string` |

#### Returns

`Promise`<`undefined` \| [`BaseResult`](../interfaces/BaseResult.md) & { `status`: `string`  }\>
