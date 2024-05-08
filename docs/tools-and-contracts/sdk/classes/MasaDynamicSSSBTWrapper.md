[**Masa SDK v3.36.1**](../README.md) • **Docs**

***

[Masa SDK v3.36.1](../globals.md) / MasaDynamicSSSBTWrapper

# Class: MasaDynamicSSSBTWrapper\<Contract\>

## Extends

- [`MasaDynamicSBTWrapper`](MasaDynamicSBTWrapper.md)\<`Contract`\>

## Type parameters

• **Contract** *extends* `MasaDynamicSSSBT`

## Constructors

### new MasaDynamicSSSBTWrapper()

> **new MasaDynamicSSSBTWrapper**\<`Contract`\>(`masa`, `contract`): [`MasaDynamicSSSBTWrapper`](MasaDynamicSSSBTWrapper.md)\<`Contract`\>

#### Parameters

• **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

• **contract**: `Contract`

#### Returns

[`MasaDynamicSSSBTWrapper`](MasaDynamicSSSBTWrapper.md)\<`Contract`\>

#### Inherited from

[`MasaDynamicSBTWrapper`](MasaDynamicSBTWrapper.md).[`constructor`](MasaDynamicSBTWrapper.md#constructors)

## Properties

### contract

> `readonly` **contract**: `Contract`

#### Inherited from

[`MasaDynamicSBTWrapper`](MasaDynamicSBTWrapper.md).[`contract`](MasaDynamicSBTWrapper.md#contract)

***

### links

> `readonly` **links**: [`MasaSoulLinker`](MasaSoulLinker.md)

#### Inherited from

[`MasaDynamicSBTWrapper`](MasaDynamicSBTWrapper.md).[`links`](MasaDynamicSBTWrapper.md#links)

***

### masa

> `protected` `readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

[`MasaDynamicSBTWrapper`](MasaDynamicSBTWrapper.md).[`masa`](MasaDynamicSBTWrapper.md#masa)

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

[`MasaDynamicSBTWrapper`](MasaDynamicSBTWrapper.md).[`burn`](MasaDynamicSBTWrapper.md#burn)

***

### list()

> **list**(`address`?): `Promise`\<`object`[]\>

#### Parameters

• **address?**: `string`

#### Returns

`Promise`\<`object`[]\>

#### Inherited from

[`MasaDynamicSBTWrapper`](MasaDynamicSBTWrapper.md).[`list`](MasaDynamicSBTWrapper.md#list)

***

### loadSBTIDs()

> `protected` **loadSBTIDs**(`sbtIDs`): `Promise`\<`object`[]\>

#### Parameters

• **sbtIDs**: `BigNumber`[]

#### Returns

`Promise`\<`object`[]\>

#### Inherited from

[`MasaDynamicSBTWrapper`](MasaDynamicSBTWrapper.md).[`loadSBTIDs`](MasaDynamicSBTWrapper.md#loadsbtids)

***

### loadSBTs()

> `protected` **loadSBTs**(`identityIdOrAddress`): `Promise`\<`object`[]\>

#### Parameters

• **identityIdOrAddress**: `string` \| `BigNumber`

#### Returns

`Promise`\<`object`[]\>

#### Inherited from

[`MasaDynamicSBTWrapper`](MasaDynamicSBTWrapper.md).[`loadSBTs`](MasaDynamicSBTWrapper.md#loadsbts)

***

### mint()

> **mint**(`paymentMethod`): `Promise`\<[`BaseResultWithTokenId`](../interfaces/BaseResultWithTokenId.md)\>

#### Parameters

• **paymentMethod**: [`PaymentMethod`](../type-aliases/PaymentMethod.md)= `"ETH"`

#### Returns

`Promise`\<[`BaseResultWithTokenId`](../interfaces/BaseResultWithTokenId.md)\>

***

### setState()

> **setState**(`state`, `stateValue`, `signature`, `signatureDate`, `authorityAddress`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

• **state**: `string`

• **stateValue**: `boolean`

• **signature**: `string`

• **signatureDate**: `number`

• **authorityAddress**: `string`

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

***

### signSetState()

> **signSetState**(`receiver`, `state`, `stateValue`): `Promise`\<`SignSetStateResult`\>

#### Parameters

• **receiver**: `string`

• **state**: `string`

• **stateValue**: `boolean`

#### Returns

`Promise`\<`SignSetStateResult`\>
