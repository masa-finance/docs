[**Masa SDK v3.36.1**](../README.md) • **Docs**

***

[Masa SDK v3.36.1](../globals.md) / MasaDynamicSBTBase

# Class: MasaDynamicSBTBase

## Extends

- `MasaBase`

## Constructors

### new MasaDynamicSBTBase()

> **new MasaDynamicSBTBase**(`masa`): [`MasaDynamicSBTBase`](MasaDynamicSBTBase.md)

#### Parameters

• **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Returns

[`MasaDynamicSBTBase`](MasaDynamicSBTBase.md)

#### Inherited from

`MasaBase.constructor`

## Properties

### masa

> `protected` `readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

`MasaBase.masa`

## Methods

### attach()

> **attach**\<`Contract`\>(`contract`): [`MasaDynamicSBTWrapper`](MasaDynamicSBTWrapper.md)\<`Contract`\>

#### Type parameters

• **Contract** *extends* `MasaSBTDynamic`

#### Parameters

• **contract**: `Contract`

#### Returns

[`MasaDynamicSBTWrapper`](MasaDynamicSBTWrapper.md)\<`Contract`\>

***

### connect()

> **connect**\<`Contract`\>(`address`, `factory`): `Promise`\<[`MasaDynamicSBTWrapper`](MasaDynamicSBTWrapper.md)\<`Contract`\>\>

#### Type parameters

• **Contract** *extends* `MasaSBTDynamic`

#### Parameters

• **address**: `string`

• **factory**: [`ContractFactory`](ContractFactory.md)= `MasaSBT__factory`

#### Returns

`Promise`\<[`MasaDynamicSBTWrapper`](MasaDynamicSBTWrapper.md)\<`Contract`\>\>
