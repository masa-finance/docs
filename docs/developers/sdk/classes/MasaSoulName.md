[**# Masa SDK v3.36.1**](../README.md) • **Docs**

***

[# Masa SDK v3.36.1](../globals.md) / MasaSoulName

# Class: MasaSoulName

## Extends

- `MasaModuleBase`

## Constructors

### new MasaSoulName()

> **new MasaSoulName**(`masa`): [`MasaSoulName`](MasaSoulName.md)

#### Parameters

• **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Returns

[`MasaSoulName`](MasaSoulName.md)

#### Overrides

`MasaModuleBase.constructor`

## Properties

### contract

> `readonly` **contract**: `Contract` & [`ContractInfo`](../interfaces/ContractInfo.md)

#### Inherited from

`MasaModuleBase.contract`

***

### masa

> `protected` `readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

`MasaModuleBase.masa`

## Accessors

### isContractAvailable

> `get` **isContractAvailable**(): `boolean`

#### Returns

`boolean`

## Methods

### burn()

> **burn**(`soulName`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

• **soulName**: `string`

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

***

### create()

> **create**(`paymentMethod`, `soulName`, `duration`, `receiver`?, `style`?): `Promise`\<[`CreateSoulNameResult`](../interfaces/CreateSoulNameResult.md)\>

#### Parameters

• **paymentMethod**: [`PaymentMethod`](../type-aliases/PaymentMethod.md)= `"ETH"`

• **soulName**: `string`

• **duration**: `number`

• **receiver?**: `string`

• **style?**: `string`

#### Returns

`Promise`\<[`CreateSoulNameResult`](../interfaces/CreateSoulNameResult.md)\>

***

### getSoulNameMetadataPrefix()

> **getSoulNameMetadataPrefix**(): `string`

#### Returns

`string`

***

### list()

> **list**(`address`?): `Promise`\<[`SoulNameDetails`](../interfaces/SoulNameDetails.md)[]\>

#### Parameters

• **address?**: `string`

#### Returns

`Promise`\<[`SoulNameDetails`](../interfaces/SoulNameDetails.md)[]\>

***

### loadSoulNameByName()

> **loadSoulNameByName**(`soulName`): `Promise`\<`undefined` \| [`SoulNameDetails`](../interfaces/SoulNameDetails.md)\>

#### Parameters

• **soulName**: `string`

#### Returns

`Promise`\<`undefined` \| [`SoulNameDetails`](../interfaces/SoulNameDetails.md)\>

***

### loadSoulNameByTokenId()

> **loadSoulNameByTokenId**(`tokenId`): `Promise`\<`undefined` \| [`SoulNameDetails`](../interfaces/SoulNameDetails.md)\>

#### Parameters

• **tokenId**: `string` \| `BigNumber`

#### Returns

`Promise`\<`undefined` \| [`SoulNameDetails`](../interfaces/SoulNameDetails.md)\>

***

### loadSoulNames()

> **loadSoulNames**(`identityIdOrAddress`): `Promise`\<`string`[]\>

#### Parameters

• **identityIdOrAddress**: `string` \| `BigNumber`

#### Returns

`Promise`\<`string`[]\>

***

### loadSoulNamesWithExpired()

> **loadSoulNamesWithExpired**(`identityIdOrAddress`): `Promise`\<`string`[]\>

#### Parameters

• **identityIdOrAddress**: `string` \| `BigNumber`

#### Returns

`Promise`\<`string`[]\>

***

### renew()

> **renew**(`soulName`, `years`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

• **soulName**: `string`

• **years**: `number`

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

***

### resolve()

> **resolve**(`soulName`): `Promise`\<`undefined` \| `string`\>

#### Parameters

• **soulName**: `string`

#### Returns

`Promise`\<`undefined` \| `string`\>

***

### send()

> **send**(`soulName`, `receiver`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

• **soulName**: `string`

• **receiver**: `string`

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

***

### tail()

> **tail**(`limit`?): `Promise`\<[`SoulNameDetails`](../interfaces/SoulNameDetails.md)[]\>

#### Parameters

• **limit?**: `number`

#### Returns

`Promise`\<[`SoulNameDetails`](../interfaces/SoulNameDetails.md)[]\>

***

### validate()

> **validate**(`soulName`): `object`

#### Parameters

• **soulName**: `string`

#### Returns

`object`

##### isValid

> **isValid**: `boolean`

##### length

> **length**: `number`

##### message?

> `optional` **message**: `string`

***

### verify()

> **verify**(`soulName`): `Promise`\<`object`\>

#### Parameters

• **soulName**: `string`

#### Returns

`Promise`\<`object`\>

##### imageHashMatch

> **imageHashMatch**: `boolean`

##### imageOwnerIsMasaAccount

> **imageOwnerIsMasaAccount**: `boolean`

##### imageSignatureMatch

> **imageSignatureMatch**: `boolean`

##### metadataOwnerIsMasaAccount

> **metadataOwnerIsMasaAccount**: `boolean`

##### metadataSignatureMatch

> **metadataSignatureMatch**: `boolean`

##### nameMatch

> **nameMatch**: `boolean`
