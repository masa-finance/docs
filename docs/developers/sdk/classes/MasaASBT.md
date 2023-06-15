[# Masa SDK
 - v3.4.3](../README.md) / [Exports](../modules.md) / MasaASBT

# Class: MasaASBT

## Hierarchy

- [`MasaSBTs`](MasaSBTs.md)

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

• **new MasaASBT**(`masa`)

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

▸ **connect**(`address`): `Promise`<[`ASBTWrapper`](ASBTWrapper.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<[`ASBTWrapper`](ASBTWrapper.md)\>

#### Overrides

[MasaSBTs](MasaSBTs.md).[connect](MasaSBTs.md#connect)

___

### deploy

▸ **deploy**(`«destructured»`): `Promise`<`undefined` \| [`DeployResult`](../interfaces/DeployResult.md)<`PaymentParamsStruct`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `adminAddress?` | `string` |
| › `baseTokenUri` | `string` |
| › `limit?` | `number` |
| › `name` | `string` |
| › `symbol` | `string` |

#### Returns

`Promise`<`undefined` \| [`DeployResult`](../interfaces/DeployResult.md)<`PaymentParamsStruct`\>\>
