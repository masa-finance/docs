[# Masa SDK
 - v3.4.1](../README.md) / [Exports](../modules.md) / MasaSBTs

# Class: MasaSBTs

## Hierarchy

- [`MasaBase`](MasaBase.md)

  ↳ **`MasaSBTs`**

  ↳↳ [`MasaASBT`](MasaASBT.md)

  ↳↳ [`MasaSSSBT`](MasaSSSBT.md)

## Table of contents

### Constructors

- [constructor](MasaSBTs.md#constructor)

### Properties

- [masa](MasaSBTs.md#masa)

### Methods

- [connect](MasaSBTs.md#connect)

## Constructors

### constructor

• **new MasaSBTs**(`masa`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |

#### Inherited from

[MasaBase](MasaBase.md).[constructor](MasaBase.md#constructor)

## Properties

### masa

• `Protected` `Readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

[MasaBase](MasaBase.md).[masa](MasaBase.md#masa)

## Methods

### connect

▸ **connect**(`address`, `factory?`): `Promise`<[`SBTWrapper`](SBTWrapper.md)<`MasaSBT`\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `address` | `string` | `undefined` |
| `factory` | [`ContractFactory`](ContractFactory.md) | `MasaSBT__factory` |

#### Returns

`Promise`<[`SBTWrapper`](SBTWrapper.md)<`MasaSBT`\>\>
