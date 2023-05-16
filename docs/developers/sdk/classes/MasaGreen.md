[# Masa SDK
 - v2.0.3](../README.md) / [Exports](../modules.md) / MasaGreen

# Class: MasaGreen

## Hierarchy

- `MasaBase`

  ↳ **`MasaGreen`**

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

#### Overrides

MasaBase.constructor

## Properties

### links

• `Readonly` **links**: [`MasaSoulLinker`](MasaSoulLinker.md)

___

### masa

• `Protected` **masa**: [`Masa`](Masa.md)

#### Inherited from

MasaBase.masa

## Methods

### burn

▸ **burn**(`greenId`): `Promise`<`boolean`\>

Burns a green

#### Parameters

| Name | Type |
| :------ | :------ |
| `greenId` | `BigNumber` |

#### Returns

`Promise`<`boolean`\>

___

### create

▸ **create**(`paymentMethod?`, `phoneNumber`, `code`): `Promise`<[`VerifyGreenResult`](../interfaces/VerifyGreenResult.md)\>

Does the verification and mint step in one go

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `"ETH"` |
| `phoneNumber` | `string` | `undefined` |
| `code` | `string` | `undefined` |

#### Returns

`Promise`<[`VerifyGreenResult`](../interfaces/VerifyGreenResult.md)\>

___

### generate

▸ **generate**(`phoneNumber`): `Promise`<[`GenerateGreenResult`](../interfaces/GenerateGreenResult.md)\>

Generates a new verification attempt

#### Parameters

| Name | Type |
| :------ | :------ |
| `phoneNumber` | `string` |

#### Returns

`Promise`<[`GenerateGreenResult`](../interfaces/GenerateGreenResult.md)\>

___

### list

▸ **list**(`address?`): `Promise`<[`GreenDetails`](../interfaces/GreenDetails.md)[]\>

Lits all greens on the current network

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `string` |

#### Returns

`Promise`<[`GreenDetails`](../interfaces/GreenDetails.md)[]\>

___

### load

▸ **load**(`identityIdOrAddress`): `Promise`<[`GreenDetails`](../interfaces/GreenDetails.md)[]\>

Loads all greens for an identity on the current network

#### Parameters

| Name | Type |
| :------ | :------ |
| `identityIdOrAddress` | `string` \| `BigNumber` |

#### Returns

`Promise`<[`GreenDetails`](../interfaces/GreenDetails.md)[]\>

___

### mint

▸ **mint**(`paymentMethod?`, `authorityAddress`, `signatureDate`, `signature`): `Promise`<[`BaseResult`](../interfaces/BaseResult.md)\>

Mints a green based on the previously made verification result

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `"ETH"` |
| `authorityAddress` | `string` | `undefined` |
| `signatureDate` | `number` | `undefined` |
| `signature` | `string` | `undefined` |

#### Returns

`Promise`<[`BaseResult`](../interfaces/BaseResult.md)\>

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
