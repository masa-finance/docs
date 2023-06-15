[# Masa SDK
 - v3.4.7](../README.md) / [Exports](../modules.md) / MasaCreditScore

# Class: MasaCreditScore

## Hierarchy

- [`MasaLinkable`](MasaLinkable.md)<`SoulboundCreditScore`\>

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

• **new MasaCreditScore**(`masa`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |

#### Overrides

[MasaLinkable](MasaLinkable.md).[constructor](MasaLinkable.md#constructor)

## Properties

### contract

• `Readonly` **contract**: `SoulboundCreditScore`

#### Inherited from

[MasaLinkable](MasaLinkable.md).[contract](MasaLinkable.md#contract)

___

### links

• `Readonly` **links**: [`MasaSoulLinker`](MasaSoulLinker.md)

#### Inherited from

[MasaLinkable](MasaLinkable.md).[links](MasaLinkable.md#links)

___

### masa

• `Protected` `Readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

[MasaLinkable](MasaLinkable.md).[masa](MasaLinkable.md#masa)

## Methods

### burn

▸ **burn**(`creditScoreId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditScoreId` | `BigNumber` |

#### Returns

`Promise`<`boolean`\>

___

### create

▸ **create**(`paymentMethod?`): `Promise`<[`GenerateCreditScoreResult`](../interfaces/GenerateCreditScoreResult.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `"ETH"` |

#### Returns

`Promise`<[`GenerateCreditScoreResult`](../interfaces/GenerateCreditScoreResult.md)\>

___

### list

▸ **list**(`address?`): `Promise`<[`CreditScoreDetails`](../interfaces/CreditScoreDetails.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `string` |

#### Returns

`Promise`<[`CreditScoreDetails`](../interfaces/CreditScoreDetails.md)[]\>

___

### load

▸ **load**(`identityIdOrAddress`): `Promise`<[`CreditScoreDetails`](../interfaces/CreditScoreDetails.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identityIdOrAddress` | `string` \| `BigNumber` |

#### Returns

`Promise`<[`CreditScoreDetails`](../interfaces/CreditScoreDetails.md)[]\>
