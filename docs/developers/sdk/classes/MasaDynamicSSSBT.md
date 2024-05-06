[**# Masa SDK v3.36.1**](../README.md) • **Docs**

***

[# Masa SDK v3.36.1](../globals.md) / MasaDynamicSSSBT

# Class: MasaDynamicSSSBT

## Extends

- `MasaBase`

## Constructors

### new MasaDynamicSSSBT()

> **new MasaDynamicSSSBT**(`masa`): [`MasaDynamicSSSBT`](MasaDynamicSSSBT.md)

#### Parameters

• **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Returns

[`MasaDynamicSSSBT`](MasaDynamicSSSBT.md)

#### Inherited from

`MasaBase.constructor`

## Properties

### masa

> `protected` `readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

`MasaBase.masa`

## Methods

### attach()

> **attach**\<`Contract`\>(`contract`): [`MasaDynamicSSSBTWrapper`](MasaDynamicSSSBTWrapper.md)\<`Contract`\>

#### Type parameters

• **Contract** *extends* `MasaDynamicSSSBT`

#### Parameters

• **contract**: `Contract`

#### Returns

[`MasaDynamicSSSBTWrapper`](MasaDynamicSSSBTWrapper.md)\<`Contract`\>

***

### connect()

> **connect**\<`Contract`\>(`address`, `factory`): `Promise`\<[`MasaDynamicSSSBTWrapper`](MasaDynamicSSSBTWrapper.md)\<`Contract`\>\>

#### Type parameters

• **Contract** *extends* `MasaDynamicSSSBT`

#### Parameters

• **address**: `string`

• **factory**: [`ContractFactory`](ContractFactory.md)= `MasaDynamicSSSBT__factory`

#### Returns

`Promise`\<[`MasaDynamicSSSBTWrapper`](MasaDynamicSSSBTWrapper.md)\<`Contract`\>\>
