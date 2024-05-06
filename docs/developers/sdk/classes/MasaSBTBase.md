[**# Masa SDK v3.36.1**](../README.md) • **Docs**

***

[# Masa SDK v3.36.1](../globals.md) / MasaSBTBase

# Class: MasaSBTBase

## Extends

- `MasaBase`

## Constructors

### new MasaSBTBase()

> **new MasaSBTBase**(`masa`): [`MasaSBTBase`](MasaSBTBase.md)

#### Parameters

• **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Returns

[`MasaSBTBase`](MasaSBTBase.md)

#### Inherited from

`MasaBase.constructor`

## Properties

### masa

> `protected` `readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

`MasaBase.masa`

## Methods

### attach()

> **attach**\<`Contract`\>(`contract`): [`MasaSBTWrapper`](MasaSBTWrapper.md)\<`Contract`\>

#### Type parameters

• **Contract** *extends* `MasaSBT`

#### Parameters

• **contract**: `Contract`

#### Returns

[`MasaSBTWrapper`](MasaSBTWrapper.md)\<`Contract`\>

***

### connect()

> **connect**\<`Contract`\>(`address`, `factory`): `Promise`\<[`MasaSBTWrapper`](MasaSBTWrapper.md)\<`Contract`\>\>

#### Type parameters

• **Contract** *extends* `MasaSBT`

#### Parameters

• **address**: `string`

• **factory**: [`ContractFactory`](ContractFactory.md)= `MasaSBT__factory`

#### Returns

`Promise`\<[`MasaSBTWrapper`](MasaSBTWrapper.md)\<`Contract`\>\>
