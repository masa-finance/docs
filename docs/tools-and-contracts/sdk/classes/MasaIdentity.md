[**Masa SDK v3.36.1**](../README.md) • **Docs**

***

[Masa SDK v3.36.1](../globals.md) / MasaIdentity

# Class: MasaIdentity

## Extends

- `MasaLinkable`\<`SoulboundIdentity`\>

## Constructors

### new MasaIdentity()

> **new MasaIdentity**(`masa`): [`MasaIdentity`](MasaIdentity.md)

#### Parameters

• **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Returns

[`MasaIdentity`](MasaIdentity.md)

#### Overrides

`MasaLinkable<SoulboundIdentity>.constructor`

## Properties

### contract

> `readonly` **contract**: `SoulboundIdentity`

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

> **burn**(): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

***

### create()

> **create**(): `Promise`\<[`BaseResultWithTokenId`](../interfaces/BaseResultWithTokenId.md)\>

#### Returns

`Promise`\<[`BaseResultWithTokenId`](../interfaces/BaseResultWithTokenId.md)\>

***

### createWithSoulName()

> **createWithSoulName**(`paymentMethod`, `soulName`, `duration`, `style`?): `Promise`\<`object` & [`CreateSoulNameResult`](../interfaces/CreateSoulNameResult.md)\>

#### Parameters

• **paymentMethod**: [`PaymentMethod`](../type-aliases/PaymentMethod.md)

• **soulName**: `string`

• **duration**: `number`

• **style?**: `string`

#### Returns

`Promise`\<`object` & [`CreateSoulNameResult`](../interfaces/CreateSoulNameResult.md)\>

***

### load()

> **load**(`address`?): `Promise`\<`object`\>

#### Parameters

• **address?**: `string`

#### Returns

`Promise`\<`object`\>

##### address

> **address**: `string`

##### identityId?

> `optional` **identityId**: `BigNumber`

***

### show()

> **show**(`address`?): `Promise`\<`undefined` \| [`IdentityDetails`](../interfaces/IdentityDetails.md)\>

#### Parameters

• **address?**: `string`

#### Returns

`Promise`\<`undefined` \| [`IdentityDetails`](../interfaces/IdentityDetails.md)\>
