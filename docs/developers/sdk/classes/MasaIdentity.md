[# Masa SDK
 - v1.15.2](../README.md) / [Exports](../modules.md) / MasaIdentity

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

▸ **create**(): `Promise`<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Returns

`Promise`<[`BaseResult`](../interfaces/BaseResult.md)\>

___

### createWithSoulName

▸ **createWithSoulName**(`paymentMethod`, `soulName`, `duration`): `Promise`<{ `identityId?`: `string` \| `BigNumber`  } & [`CreateSoulNameResult`](../interfaces/CreateSoulNameResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |
| `soulName` | `string` |
| `duration` | `number` |

#### Returns

`Promise`<{ `identityId?`: `string` \| `BigNumber`  } & [`CreateSoulNameResult`](../interfaces/CreateSoulNameResult.md)\>

___

### load

▸ **load**(`address?`): `Promise`<{ `address`: `string` ; `identityId?`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `string` |

#### Returns

`Promise`<{ `address`: `string` ; `identityId?`: `BigNumber`  }\>

___

### show

▸ **show**(`address?`): `Promise`<`undefined` \| [`IdentityDetails`](../interfaces/IdentityDetails.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `string` |

#### Returns

`Promise`<`undefined` \| [`IdentityDetails`](../interfaces/IdentityDetails.md)\>
