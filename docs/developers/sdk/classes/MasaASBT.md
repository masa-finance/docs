[# Masa SDK
 - v3.2.1](../README.md) / [Exports](../modules.md) / MasaASBT

# Class: MasaASBT<Contract\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTAuthority` |

## Hierarchy

- [`MasaSBT`](MasaSBT.md)<`Contract`\>

  ↳ **`MasaASBT`**

## Table of contents

### Constructors

- [constructor](MasaASBT.md#constructor)

### Properties

- [masa](MasaASBT.md#masa)

### Methods

- [connect](MasaASBT.md#connect)
- [deploy](MasaASBT.md#deploy)

## Constructors

### constructor

• **new MasaASBT**<`Contract`\>(`masa`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTAuthority`<`Contract`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](Masa.md) |

#### Overrides

[MasaSBT](MasaSBT.md).[constructor](MasaSBT.md#constructor)

## Properties

### masa

• `Protected` `Readonly` **masa**: [`Masa`](Masa.md)

#### Inherited from

[MasaSBT](MasaSBT.md).[masa](MasaSBT.md#masa)

## Methods

### connect

▸ **connect**(`address`): `Promise`<[`ASBTWrapper`](ASBTWrapper.md)<`Contract`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<[`ASBTWrapper`](ASBTWrapper.md)<`Contract`\>\>

#### Overrides

[MasaSBT](MasaSBT.md).[connect](MasaSBT.md#connect)

___

### deploy

▸ **deploy**(`name`, `symbol`, `baseTokenUri`, `limit?`, `adminAddress?`): `Promise`<`undefined` \| `string`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `symbol` | `string` | `undefined` |
| `baseTokenUri` | `string` | `undefined` |
| `limit` | `number` | `1` |
| `adminAddress?` | `string` | `undefined` |

#### Returns

`Promise`<`undefined` \| `string`\>
