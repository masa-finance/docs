[**Masa SDK v3.36.1**](../README.md) • **Docs**

***

[Masa SDK v3.36.1](../globals.md) / MasaSoulLinker

# Class: MasaSoulLinker

## Extends

- `MasaBase`

## Constructors

### new MasaSoulLinker()

> **new MasaSoulLinker**(`masa`, `contract`): [`MasaSoulLinker`](MasaSoulLinker.md)

#### Parameters

• **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

• **contract**: `Contract`

#### Returns

[`MasaSoulLinker`](MasaSoulLinker.md)

#### Overrides

`MasaBase.constructor`

## Properties

### contract

> `private` **contract**: `Contract`

***

### masa

> `protected` `readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

`MasaBase.masa`

## Methods

### break()

> **break**(`tokenId`, `readerIdentityId`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

• **tokenId**: `BigNumber`

• **readerIdentityId**: `BigNumber`

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

***

### create()

> **create**(`tokenId`, `readerIdentityId`): `Promise`\<[`CreateLinkResult`](../type-aliases/CreateLinkResult.md)\>

#### Parameters

• **tokenId**: `BigNumber`

• **readerIdentityId**: `BigNumber`

#### Returns

`Promise`\<[`CreateLinkResult`](../type-aliases/CreateLinkResult.md)\>

***

### establish()

> **establish**(`paymentMethod`, `passport`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

• **paymentMethod**: [`PaymentMethod`](../type-aliases/PaymentMethod.md)= `"ETH"`

• **passport**: `string`

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

***

### list()

> **list**(`tokenId`): `Promise`\<[`ListLinksResult`](../type-aliases/ListLinksResult.md)\>

#### Parameters

• **tokenId**: `BigNumber`

#### Returns

`Promise`\<[`ListLinksResult`](../type-aliases/ListLinksResult.md)\>

***

### query()

> **query**(`paymentMethod`, `passport`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

• **paymentMethod**: [`PaymentMethod`](../type-aliases/PaymentMethod.md)

• **passport**: `string`

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

***

### verify()

> **verify**(`tokenId`, `readerIdentityId`?): `Promise`\<[`VerifyLinkResult`](../type-aliases/VerifyLinkResult.md)\>

#### Parameters

• **tokenId**: `BigNumber`

• **readerIdentityId?**: `BigNumber`

#### Returns

`Promise`\<[`VerifyLinkResult`](../type-aliases/VerifyLinkResult.md)\>
