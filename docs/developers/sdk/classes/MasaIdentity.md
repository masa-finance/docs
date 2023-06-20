[# Masa SDK
 - v3.4.12](../README.md) / [Exports](../modules.md) / MasaIdentity

# Class: MasaIdentity

## Hierarchy

- `MasaLinkable`<`SoulboundIdentity`\>

  ↳ **`MasaIdentity`**

## Table of contents

### Constructors

- [constructor](MasaIdentity.md#constructor)

### Properties

- [contract](MasaIdentity.md#contract)
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
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |

#### Overrides

MasaLinkable&lt;SoulboundIdentity\&gt;.constructor

## Properties

### contract

• `Readonly` **contract**: `SoulboundIdentity`

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

▸ **createWithSoulName**(`paymentMethod`, `soulName`, `duration`, `style?`): `Promise`<{ `identityId?`: `string` \| `BigNumber`  } & [`CreateSoulNameResult`](../interfaces/CreateSoulNameResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |
| `soulName` | `string` |
| `duration` | `number` |
| `style?` | `string` |

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
