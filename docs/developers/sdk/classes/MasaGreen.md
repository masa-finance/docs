[# Masa SDK
 - v1.2.1](../README.md) / [Exports](../modules.md) / MasaGreen

# Class: MasaGreen

## Table of contents

### Constructors

- [constructor](MasaGreen.md#constructor)

### Properties

- [links](MasaGreen.md#links)
- [masa](MasaGreen.md#masa)

### Methods

- [burn](MasaGreen.md#burn)
- [create](MasaGreen.md#create)
- [generate](MasaGreen.md#generate)
- [list](MasaGreen.md#list)
- [load](MasaGreen.md#load)

## Constructors

### constructor

• **new MasaGreen**(`masa`)

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

▸ **burn**(`greenId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `greenId` | `number` |

#### Returns

`Promise`<`boolean`\>

___

### create

▸ **create**(`phoneNumber`, `code`): `Promise`<[`CreateGreenResult`](../interfaces/CreateGreenResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `phoneNumber` | `string` |
| `code` | `string` |

#### Returns

`Promise`<[`CreateGreenResult`](../interfaces/CreateGreenResult.md)\>

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

▸ **list**(`address?`): `Promise`<{ `metadata?`: [`IGreen`](../interfaces/IGreen.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `string` |

#### Returns

`Promise`<{ `metadata?`: [`IGreen`](../interfaces/IGreen.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

___

### load

▸ **load**(`identityId`): `Promise`<{ `metadata?`: [`IGreen`](../interfaces/IGreen.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identityId` | `BigNumber` |

#### Returns

`Promise`<{ `metadata?`: [`IGreen`](../interfaces/IGreen.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>
