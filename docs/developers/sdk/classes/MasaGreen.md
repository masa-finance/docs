[# Masa SDK
 - v3.15.0](../README.md) / [Exports](../modules.md) / MasaGreen

# Class: MasaGreen

## Hierarchy

- `MasaLinkable`\<`SoulboundGreen`\>

  ↳ **`MasaGreen`**

## Table of contents

### Constructors

- [constructor](MasaGreen.md#constructor)

### Properties

- [contract](MasaGreen.md#contract)
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

• **new MasaGreen**(`masa`): [`MasaGreen`](MasaGreen.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |

#### Returns

[`MasaGreen`](MasaGreen.md)

#### Overrides

MasaLinkable\&lt;SoulboundGreen\&gt;.constructor

## Properties

### contract

• `Readonly` **contract**: `SoulboundGreen`

#### Inherited from

MasaLinkable.contract

___

### links

• `Readonly` **links**: [`MasaSoulLinker`](MasaSoulLinker.md)

#### Inherited from

MasaLinkable.links

___

### masa

• `Protected` `Readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

MasaLinkable.masa

## Methods

### burn

▸ **burn**(`greenId`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

Burns a green

#### Parameters

| Name | Type |
| :------ | :------ |
| `greenId` | `BigNumber` |

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

___

### create

▸ **create**(`paymentMethod?`, `phoneNumber`, `code`): `Promise`\<[`GreenBaseResult`](../interfaces/GreenBaseResult.md)\>

Does the verification and mint step in one go

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `"ETH"` |
| `phoneNumber` | `string` | `undefined` |
| `code` | `string` | `undefined` |

#### Returns

`Promise`\<[`GreenBaseResult`](../interfaces/GreenBaseResult.md)\>

___

### generate

▸ **generate**(`phoneNumber`): `Promise`\<[`GenerateGreenResult`](../interfaces/GenerateGreenResult.md)\>

Generates a new verification attempt

#### Parameters

| Name | Type |
| :------ | :------ |
| `phoneNumber` | `string` |

#### Returns

`Promise`\<[`GenerateGreenResult`](../interfaces/GenerateGreenResult.md)\>

___

### list

▸ **list**(`address?`): `Promise`\<[`GreenDetails`](../interfaces/GreenDetails.md)[]\>

Lits all greens on the current network

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `string` |

#### Returns

`Promise`\<[`GreenDetails`](../interfaces/GreenDetails.md)[]\>

___

### load

▸ **load**(`identityIdOrAddress`): `Promise`\<[`GreenDetails`](../interfaces/GreenDetails.md)[]\>

Loads all greens for an identity on the current network

#### Parameters

| Name | Type |
| :------ | :------ |
| `identityIdOrAddress` | `string` \| `BigNumber` |

#### Returns

`Promise`\<[`GreenDetails`](../interfaces/GreenDetails.md)[]\>

___

### mint

▸ **mint**(`paymentMethod?`, `authorityAddress`, `signatureDate`, `signature`): `Promise`\<[`BaseResultWithTokenId`](../interfaces/BaseResultWithTokenId.md)\>

Mints a green based on the previously made verification result

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `"ETH"` |
| `authorityAddress` | `string` | `undefined` |
| `signatureDate` | `number` | `undefined` |
| `signature` | `string` | `undefined` |

#### Returns

`Promise`\<[`BaseResultWithTokenId`](../interfaces/BaseResultWithTokenId.md)\>

___

### verify

▸ **verify**(`phoneNumber`, `code`): `Promise`\<`undefined` \| [`VerifyGreenResult`](../interfaces/VerifyGreenResult.md)\>

Tries to verify the current verification attempt

#### Parameters

| Name | Type |
| :------ | :------ |
| `phoneNumber` | `string` |
| `code` | `string` |

#### Returns

`Promise`\<`undefined` \| [`VerifyGreenResult`](../interfaces/VerifyGreenResult.md)\>
