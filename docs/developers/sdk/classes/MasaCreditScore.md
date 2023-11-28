[# Masa SDK
 - v3.14.1](../README.md) / [Exports](../modules.md) / MasaCreditScore

# Class: MasaCreditScore

## Hierarchy

- `MasaLinkable`\<`SoulboundCreditScore`\>

  ↳ **`MasaCreditScore`**

## Table of contents

### Constructors

- [constructor](MasaCreditScore.md#constructor)

### Properties

- [contract](MasaCreditScore.md#contract)
- [links](MasaCreditScore.md#links)
- [masa](MasaCreditScore.md#masa)

### Methods

- [burn](MasaCreditScore.md#burn)
- [create](MasaCreditScore.md#create)
- [list](MasaCreditScore.md#list)
- [load](MasaCreditScore.md#load)

## Constructors

### constructor

• **new MasaCreditScore**(`masa`): [`MasaCreditScore`](MasaCreditScore.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |

#### Returns

[`MasaCreditScore`](MasaCreditScore.md)

#### Overrides

MasaLinkable\&lt;SoulboundCreditScore\&gt;.constructor

## Properties

### contract

• `Readonly` **contract**: `SoulboundCreditScore`

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

▸ **burn**(`creditScoreId`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditScoreId` | `BigNumber` |

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

___

### create

▸ **create**(`paymentMethod?`): `Promise`\<[`GenerateCreditScoreResult`](../interfaces/GenerateCreditScoreResult.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `"ETH"` |

#### Returns

`Promise`\<[`GenerateCreditScoreResult`](../interfaces/GenerateCreditScoreResult.md)\>

___

### list

▸ **list**(`address?`): `Promise`\<[`CreditScoreDetails`](../interfaces/CreditScoreDetails.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `string` |

#### Returns

`Promise`\<[`CreditScoreDetails`](../interfaces/CreditScoreDetails.md)[]\>

___

### load

▸ **load**(`identityIdOrAddress`): `Promise`\<[`CreditScoreDetails`](../interfaces/CreditScoreDetails.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identityIdOrAddress` | `string` \| `BigNumber` |

#### Returns

`Promise`\<[`CreditScoreDetails`](../interfaces/CreditScoreDetails.md)[]\>
