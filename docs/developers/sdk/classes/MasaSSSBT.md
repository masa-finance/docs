[# Masa SDK
 - v3.2.1](../README.md) / [Exports](../modules.md) / MasaSSSBT

# Class: MasaSSSBT<Contract\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTSelfSovereign` |

## Hierarchy

- [`MasaSBT`](MasaSBT.md)<`Contract`\>

  ↳ **`MasaSSSBT`**

## Table of contents

### Constructors

- [constructor](MasaSSSBT.md#constructor)

### Properties

- [masa](MasaSSSBT.md#masa)

### Methods

- [connect](MasaSSSBT.md#connect)
- [deploy](MasaSSSBT.md#deploy)

## Constructors

### constructor

• **new MasaSSSBT**<`Contract`\>(`masa`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTSelfSovereign`<`Contract`\> |

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

▸ **connect**(`address`): `Promise`<[`SSSBTWrapper`](SSSBTWrapper.md)<`Contract`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<[`SSSBTWrapper`](SSSBTWrapper.md)<`Contract`\>\>

#### Overrides

[MasaSBT](MasaSBT.md).[connect](MasaSBT.md#connect)

___

### deploy

▸ **deploy**(`name`, `symbol`, `baseTokenUri`, `limit?`, `authorityAddress`, `adminAddress?`): `Promise`<`undefined` \| `string`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `symbol` | `string` | `undefined` |
| `baseTokenUri` | `string` | `undefined` |
| `limit` | `number` | `1` |
| `authorityAddress` | `string` | `undefined` |
| `adminAddress?` | `string` | `undefined` |

#### Returns

`Promise`<`undefined` \| `string`\>
