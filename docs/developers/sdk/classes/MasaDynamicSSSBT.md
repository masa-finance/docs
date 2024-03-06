[# Masa SDK
 - v3.19.0](../README.md) / [Exports](../modules.md) / MasaDynamicSSSBT

# Class: MasaDynamicSSSBT

## Hierarchy

- `MasaBase`

  ↳ **`MasaDynamicSSSBT`**

## Table of contents

### Constructors

- [constructor](MasaDynamicSSSBT.md#constructor)

### Properties

- [masa](MasaDynamicSSSBT.md#masa)

### Methods

- [attach](MasaDynamicSSSBT.md#attach)
- [connect](MasaDynamicSSSBT.md#connect)

## Constructors

### constructor

• **new MasaDynamicSSSBT**(`masa`): [`MasaDynamicSSSBT`](MasaDynamicSSSBT.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |

#### Returns

[`MasaDynamicSSSBT`](MasaDynamicSSSBT.md)

#### Inherited from

MasaBase.constructor

## Properties

### masa

• `Protected` `Readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

MasaBase.masa

## Methods

### attach

▸ **attach**\<`Contract`\>(`contract`): [`MasaDynamicSSSBTWrapper`](MasaDynamicSSSBTWrapper.md)\<`Contract`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `MasaDynamicSSSBT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `Contract` |

#### Returns

[`MasaDynamicSSSBTWrapper`](MasaDynamicSSSBTWrapper.md)\<`Contract`\>

___

### connect

▸ **connect**\<`Contract`\>(`address`, `factory?`): `Promise`\<[`MasaDynamicSSSBTWrapper`](MasaDynamicSSSBTWrapper.md)\<`Contract`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `MasaDynamicSSSBT` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `address` | `string` | `undefined` |
| `factory` | [`ContractFactory`](ContractFactory.md) | `MasaDynamicSSSBT__factory` |

#### Returns

`Promise`\<[`MasaDynamicSSSBTWrapper`](MasaDynamicSSSBTWrapper.md)\<`Contract`\>\>
