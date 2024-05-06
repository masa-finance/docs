[**# Masa SDK v3.36.1**](../README.md) • **Docs**

***

[# Masa SDK v3.36.1](../globals.md) / MasaCreditScore

# Class: MasaCreditScore

## Extends

- `MasaLinkable`\<`SoulboundCreditScore`\>

## Constructors

### new MasaCreditScore()

> **new MasaCreditScore**(`masa`): [`MasaCreditScore`](MasaCreditScore.md)

#### Parameters

• **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Returns

[`MasaCreditScore`](MasaCreditScore.md)

#### Overrides

`MasaLinkable<SoulboundCreditScore>.constructor`

## Properties

### contract

> `readonly` **contract**: `SoulboundCreditScore`

#### Inherited from

`MasaLinkable.contract`

***

### links

> `readonly` **links**: [`MasaSoulLinker`](MasaSoulLinker.md)

#### Inherited from

`MasaLinkable.links`

***

### masa

> `protected` `readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

`MasaLinkable.masa`

## Accessors

### isContractAvailable

> `get` **isContractAvailable**(): `boolean`

#### Returns

`boolean`

## Methods

### burn()

> **burn**(`creditScoreId`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

• **creditScoreId**: `BigNumber`

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

***

### create()

> **create**(`paymentMethod`): `Promise`\<[`GenerateCreditScoreResult`](../interfaces/GenerateCreditScoreResult.md)\>

#### Parameters

• **paymentMethod**: [`PaymentMethod`](../type-aliases/PaymentMethod.md)= `"ETH"`

#### Returns

`Promise`\<[`GenerateCreditScoreResult`](../interfaces/GenerateCreditScoreResult.md)\>

***

### list()

> **list**(`address`?): `Promise`\<[`CreditScoreDetails`](../interfaces/CreditScoreDetails.md)[]\>

#### Parameters

• **address?**: `string`

#### Returns

`Promise`\<[`CreditScoreDetails`](../interfaces/CreditScoreDetails.md)[]\>

***

### load()

> **load**(`identityIdOrAddress`): `Promise`\<[`CreditScoreDetails`](../interfaces/CreditScoreDetails.md)[]\>

#### Parameters

• **identityIdOrAddress**: `string` \| `BigNumber`

#### Returns

`Promise`\<[`CreditScoreDetails`](../interfaces/CreditScoreDetails.md)[]\>
