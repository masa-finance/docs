[# Masa SDK
 - v3.4.6](../README.md) / [Exports](../modules.md) / MasaSBTBase

# Class: MasaSBTBase

## Hierarchy

- [`MasaBase`](MasaBase.md)

  ↳ **`MasaSBTBase`**

## Table of contents

### Constructors

- [constructor](MasaSBTBase.md#constructor)

### Properties

- [masa](MasaSBTBase.md#masa)

### Methods

- [attach](MasaSBTBase.md#attach)
- [connect](MasaSBTBase.md#connect)

## Constructors

### constructor

• **new MasaSBTBase**(`masa`)

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

### attach

▸ **attach**<`Contract`\>(`contract`): [`MasaSBTWrapper`](MasaSBTWrapper.md)<`Contract`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `MasaSBT`<`Contract`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `Contract` |

#### Returns

[`MasaSBTWrapper`](MasaSBTWrapper.md)<`Contract`\>

___

### connect

▸ **connect**<`Contract`\>(`address`, `factory?`): `Promise`<[`MasaSBTWrapper`](MasaSBTWrapper.md)<`Contract`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `MasaSBT`<`Contract`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `address` | `string` | `undefined` |
| `factory` | [`ContractFactory`](ContractFactory.md) | `MasaSBT__factory` |

#### Returns

`Promise`<[`MasaSBTWrapper`](MasaSBTWrapper.md)<`Contract`\>\>
