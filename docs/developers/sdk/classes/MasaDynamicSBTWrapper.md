[**# Masa SDK v3.36.1**](../README.md) • **Docs**

***

[# Masa SDK v3.36.1](../globals.md) / MasaDynamicSBTWrapper

# Class: MasaDynamicSBTWrapper\<Contract\>

## Extends

- [`MasaSBTWrapper`](MasaSBTWrapper.md)\<`Contract`\>

## Type parameters

• **Contract** *extends* `MasaSBTDynamic`

## Constructors

### new MasaDynamicSBTWrapper()

> **new MasaDynamicSBTWrapper**\<`Contract`\>(`masa`, `contract`): [`MasaDynamicSBTWrapper`](MasaDynamicSBTWrapper.md)\<`Contract`\>

#### Parameters

• **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

• **contract**: `Contract`

#### Returns

[`MasaDynamicSBTWrapper`](MasaDynamicSBTWrapper.md)\<`Contract`\>

#### Inherited from

[`MasaSBTWrapper`](MasaSBTWrapper.md).[`constructor`](MasaSBTWrapper.md#constructors)

## Properties

### contract

> `readonly` **contract**: `Contract`

#### Inherited from

[`MasaSBTWrapper`](MasaSBTWrapper.md).[`contract`](MasaSBTWrapper.md#contract)

***

### links

> `readonly` **links**: [`MasaSoulLinker`](MasaSoulLinker.md)

#### Inherited from

[`MasaSBTWrapper`](MasaSBTWrapper.md).[`links`](MasaSBTWrapper.md#links)

***

### masa

> `protected` `readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

[`MasaSBTWrapper`](MasaSBTWrapper.md).[`masa`](MasaSBTWrapper.md#masa)

## Accessors

### isContractAvailable

> `get` **isContractAvailable**(): `boolean`

#### Returns

`boolean`

## Methods

### burn()

> **burn**(`SBTId`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

• **SBTId**: `BigNumber`

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Inherited from

[`MasaSBTWrapper`](MasaSBTWrapper.md).[`burn`](MasaSBTWrapper.md#burn)

***

### list()

> **list**(`address`?): `Promise`\<`object`[]\>

#### Parameters

• **address?**: `string`

#### Returns

`Promise`\<`object`[]\>

#### Inherited from

[`MasaSBTWrapper`](MasaSBTWrapper.md).[`list`](MasaSBTWrapper.md#list)

***

### loadSBTIDs()

> `protected` **loadSBTIDs**(`sbtIDs`): `Promise`\<`object`[]\>

#### Parameters

• **sbtIDs**: `BigNumber`[]

#### Returns

`Promise`\<`object`[]\>

#### Inherited from

[`MasaSBTWrapper`](MasaSBTWrapper.md).[`loadSBTIDs`](MasaSBTWrapper.md#loadsbtids)

***

### loadSBTs()

> `protected` **loadSBTs**(`identityIdOrAddress`): `Promise`\<`object`[]\>

#### Parameters

• **identityIdOrAddress**: `string` \| `BigNumber`

#### Returns

`Promise`\<`object`[]\>

#### Inherited from

[`MasaSBTWrapper`](MasaSBTWrapper.md).[`loadSBTs`](MasaSBTWrapper.md#loadsbts)
