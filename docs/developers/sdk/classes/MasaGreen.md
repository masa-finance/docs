[# Masa SDK
 - v1.4.2](../README.md) / [Exports](../modules.md) / MasaGreen

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
- [mint](MasaGreen.md#mint)
- [verify](MasaGreen.md#verify)

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

Burns a green

#### Parameters

| Name | Type |
| :------ | :------ |
| `greenId` | `number` |

#### Returns

`Promise`<`boolean`\>

___

### create

▸ **create**(`phoneNumber`, `code`): `Promise`<[`VerifyGreenResult`](../interfaces/VerifyGreenResult.md)\>

Does the verification and mint step in one go

#### Parameters

| Name | Type |
| :------ | :------ |
| `phoneNumber` | `string` |
| `code` | `string` |

#### Returns

`Promise`<[`VerifyGreenResult`](../interfaces/VerifyGreenResult.md)\>

___

### generate

▸ **generate**(`phoneNumber`): `Promise`<`undefined` \| [`GenerateGreenResult`](../interfaces/GenerateGreenResult.md)\>

Generates a new verification attempt

#### Parameters

| Name | Type |
| :------ | :------ |
| `phoneNumber` | `string` |

#### Returns

`Promise`<`undefined` \| [`GenerateGreenResult`](../interfaces/GenerateGreenResult.md)\>

___

### list

▸ **list**(`address?`): `Promise`<{ `metadata?`: [`IGreen`](../interfaces/IGreen.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

Lits all greens on the current network

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `string` |

#### Returns

`Promise`<{ `metadata?`: [`IGreen`](../interfaces/IGreen.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

___

### load

▸ **load**(`identityId`): `Promise`<{ `metadata?`: [`IGreen`](../interfaces/IGreen.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

Loads all greens for an identity on the current network

#### Parameters

| Name | Type |
| :------ | :------ |
| `identityId` | `BigNumber` |

#### Returns

`Promise`<{ `metadata?`: [`IGreen`](../interfaces/IGreen.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

___

### mint

▸ **mint**(`authorityAddress`, `signatureDate`, `signature`): `Promise`<`undefined` \| { `tokenId`: `BigNumber`  }\>

Mints a green based on the previously made verification result

#### Parameters

| Name | Type |
| :------ | :------ |
| `authorityAddress` | `string` |
| `signatureDate` | `number` |
| `signature` | `string` |

#### Returns

`Promise`<`undefined` \| { `tokenId`: `BigNumber`  }\>

___

### verify

▸ **verify**(`phoneNumber`, `code`): `Promise`<`undefined` \| [`BaseResult`](../interfaces/BaseResult.md) & { `authorityAddress?`: `string` ; `errorCode?`: `number` ; `signature?`: `string` ; `signatureDate?`: `number` ; `status?`: `string`  }\>

Tries to verify the current verification attempt

#### Parameters

| Name | Type |
| :------ | :------ |
| `phoneNumber` | `string` |
| `code` | `string` |

#### Returns

`Promise`<`undefined` \| [`BaseResult`](../interfaces/BaseResult.md) & { `authorityAddress?`: `string` ; `errorCode?`: `number` ; `signature?`: `string` ; `signatureDate?`: `number` ; `status?`: `string`  }\>
