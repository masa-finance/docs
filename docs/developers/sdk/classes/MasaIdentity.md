[# Masa SDK
 - v1.7.0](../README.md) / [Exports](../modules.md) / MasaIdentity

# Class: MasaIdentity

## Hierarchy

- `MasaBase`

  ↳ **`MasaIdentity`**

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

▸ **createWithSoulName**(`paymentMethod`, `soulName`, `duration`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |
| `soulName` | `string` |
| `duration` | `number` |

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
