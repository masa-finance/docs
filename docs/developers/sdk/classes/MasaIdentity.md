[# Masa SDK
 - v1.0.3](../README.md) / [Exports](../modules.md) / MasaIdentity

# Class: MasaIdentity

## Table of contents

### Constructors

- [constructor](MasaIdentity.md#constructor)

### Properties

- [links](MasaIdentity.md#links)
- [masa](MasaIdentity.md#masa)

### Methods

- [burn](MasaIdentity.md#burn)
- [create](MasaIdentity.md#create)
- [createWithSoulName](MasaIdentity.md#createwithsoulname)
- [load](MasaIdentity.md#load)
- [show](MasaIdentity.md#show)

## Constructors

### constructor

• **new MasaIdentity**(`masa`)

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

▸ **burn**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

___

### create

▸ **create**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

___

### createWithSoulName

▸ **createWithSoulName**(`soulName`, `duration`, `paymentMethod`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `soulName` | `string` |
| `duration` | `number` |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |

#### Returns

`Promise`<`boolean`\>

___

### load

▸ **load**(`address?`): `Promise`<{ `address?`: `string` ; `identityId?`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `string` |

#### Returns

`Promise`<{ `address?`: `string` ; `identityId?`: `BigNumber`  }\>

___

### show

▸ **show**(`address?`): `Promise`<`undefined` \| { `metadata?`: [`IIdentity`](../interfaces/IIdentity.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `string` |

#### Returns

`Promise`<`undefined` \| { `metadata?`: [`IIdentity`](../interfaces/IIdentity.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }\>
