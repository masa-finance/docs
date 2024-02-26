[# Masa SDK
 - v3.18.2](../README.md) / [Exports](../modules.md) / MasaDynamicSBTBase

# Class: MasaDynamicSBTBase

## Hierarchy

- `MasaBase`

  ↳ **`MasaDynamicSBTBase`**

## Table of contents

### Constructors

- [constructor](MasaDynamicSBTBase.md#constructor)

### Properties

- [masa](MasaDynamicSBTBase.md#masa)

### Methods

- [attach](MasaDynamicSBTBase.md#attach)
- [connect](MasaDynamicSBTBase.md#connect)

## Constructors

### constructor

• **new MasaDynamicSBTBase**(`masa`): [`MasaDynamicSBTBase`](MasaDynamicSBTBase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |

#### Returns

[`MasaDynamicSBTBase`](MasaDynamicSBTBase.md)

#### Inherited from

MasaBase.constructor

## Properties

### masa

• `Protected` `Readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

MasaBase.masa

## Methods

### attach

▸ **attach**\<`Contract`\>(`contract`): [`MasaDynamicSBTWrapper`](MasaDynamicSBTWrapper.md)\<`Contract`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `MasaSBTDynamic` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `Contract` |

#### Returns

[`MasaDynamicSBTWrapper`](MasaDynamicSBTWrapper.md)\<`Contract`\>

___

### connect

▸ **connect**\<`Contract`\>(`address`, `factory?`): `Promise`\<[`MasaDynamicSBTWrapper`](MasaDynamicSBTWrapper.md)\<`Contract`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `MasaSBTDynamic` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `address` | `string` | `undefined` |
| `factory` | [`ContractFactory`](ContractFactory.md) | `MasaSBT__factory` |

#### Returns

`Promise`\<[`MasaDynamicSBTWrapper`](MasaDynamicSBTWrapper.md)\<`Contract`\>\>
