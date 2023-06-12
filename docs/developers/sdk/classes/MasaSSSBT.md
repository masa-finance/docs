[# Masa SDK
 - v3.3.0](../README.md) / [Exports](../modules.md) / MasaSSSBT

# Class: MasaSSSBT

## Hierarchy

- [`MasaSBTs`](MasaSBTs.md)

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

• **new MasaSSSBT**(`masa`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |

#### Inherited from

[MasaSBTs](MasaSBTs.md).[constructor](MasaSBTs.md#constructor)

## Properties

### masa

• `Protected` `Readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

[MasaSBTs](MasaSBTs.md).[masa](MasaSBTs.md#masa)

## Methods

### connect

▸ **connect**(`address`): `Promise`<[`SSSBTWrapper`](SSSBTWrapper.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<[`SSSBTWrapper`](SSSBTWrapper.md)\>

#### Overrides

[MasaSBTs](MasaSBTs.md).[connect](MasaSBTs.md#connect)

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
