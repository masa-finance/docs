[**# Masa SDK v3.36.1**](../README.md) • **Docs**

***

[# Masa SDK v3.36.1](../globals.md) / MasaGreen

# Class: MasaGreen

## Extends

- `MasaLinkable`\<`SoulboundGreen`\>

## Constructors

### new MasaGreen()

> **new MasaGreen**(`masa`): [`MasaGreen`](MasaGreen.md)

#### Parameters

• **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Returns

[`MasaGreen`](MasaGreen.md)

#### Overrides

`MasaLinkable<SoulboundGreen>.constructor`

## Properties

### contract

> `readonly` **contract**: `SoulboundGreen`

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

> **burn**(`greenId`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

Burns a green

#### Parameters

• **greenId**: `BigNumber`

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

***

### create()

> **create**(`paymentMethod`, `phoneNumber`, `code`): `Promise`\<[`GreenBaseResult`](../interfaces/GreenBaseResult.md)\>

Does the verification and mint step in one go

#### Parameters

• **paymentMethod**: [`PaymentMethod`](../type-aliases/PaymentMethod.md)= `"ETH"`

• **phoneNumber**: `string`

• **code**: `string`

#### Returns

`Promise`\<[`GreenBaseResult`](../interfaces/GreenBaseResult.md)\>

***

### generate()

> **generate**(`phoneNumber`): `Promise`\<[`GenerateGreenResult`](../interfaces/GenerateGreenResult.md)\>

Generates a new verification attempt

#### Parameters

• **phoneNumber**: `string`

#### Returns

`Promise`\<[`GenerateGreenResult`](../interfaces/GenerateGreenResult.md)\>

***

### list()

> **list**(`address`?): `Promise`\<[`GreenDetails`](../interfaces/GreenDetails.md)[]\>

Lits all greens on the current network

#### Parameters

• **address?**: `string`

#### Returns

`Promise`\<[`GreenDetails`](../interfaces/GreenDetails.md)[]\>

***

### load()

> **load**(`identityIdOrAddress`): `Promise`\<[`GreenDetails`](../interfaces/GreenDetails.md)[]\>

Loads all greens for an identity on the current network

#### Parameters

• **identityIdOrAddress**: `string` \| `BigNumber`

#### Returns

`Promise`\<[`GreenDetails`](../interfaces/GreenDetails.md)[]\>

***

### mint()

> **mint**(`paymentMethod`, `authorityAddress`, `signatureDate`, `signature`): `Promise`\<[`BaseResultWithTokenId`](../interfaces/BaseResultWithTokenId.md)\>

Mints a green based on the previously made verification result

#### Parameters

• **paymentMethod**: [`PaymentMethod`](../type-aliases/PaymentMethod.md)= `"ETH"`

• **authorityAddress**: `string`

• **signatureDate**: `number`

• **signature**: `string`

#### Returns

`Promise`\<[`BaseResultWithTokenId`](../interfaces/BaseResultWithTokenId.md)\>

***

### verify()

> **verify**(`phoneNumber`, `code`): `Promise`\<`undefined` \| [`VerifyGreenResult`](../interfaces/VerifyGreenResult.md)\>

Tries to verify the current verification attempt

#### Parameters

• **phoneNumber**: `string`

• **code**: `string`

#### Returns

`Promise`\<`undefined` \| [`VerifyGreenResult`](../interfaces/VerifyGreenResult.md)\>
