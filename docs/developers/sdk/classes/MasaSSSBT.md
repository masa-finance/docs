[# Masa SDK
 - v3.4.12](../README.md) / [Exports](../modules.md) / MasaSSSBT

# Class: MasaSSSBT

## Hierarchy

- `MasaBase`

  ↳ **`MasaSSSBT`**

## Table of contents

### Constructors

- [constructor](MasaSSSBT.md#constructor)

### Properties

- [masa](MasaSSSBT.md#masa)

### Methods

- [attach](MasaSSSBT.md#attach)
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

MasaBase.constructor

## Properties

### masa

• `Protected` `Readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

MasaBase.masa

## Methods

### attach

▸ **attach**<`Contract`\>(`contract`): [`MasaSSSBTWrapper`](MasaSSSBTWrapper.md)<`Contract`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTSelfSovereign`<`Contract`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `Contract` |

#### Returns

[`MasaSSSBTWrapper`](MasaSSSBTWrapper.md)<`Contract`\>

___

### connect

▸ **connect**<`Contract`\>(`address`, `factory?`): `Promise`<[`MasaSSSBTWrapper`](MasaSSSBTWrapper.md)<`Contract`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTSelfSovereign`<`Contract`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `address` | `string` | `undefined` |
| `factory` | [`ContractFactory`](ContractFactory.md) | `ReferenceSBTSelfSovereign__factory` |

#### Returns

`Promise`<[`MasaSSSBTWrapper`](MasaSSSBTWrapper.md)<`Contract`\>\>

___

### deploy

▸ **deploy**(`«destructured»`): `Promise`<`undefined` \| [`DeployResult`](../interfaces/DeployResult.md)<`PaymentParamsStruct`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `adminAddress?` | `string` |
| › `authorityAddress` | `string` |
| › `baseTokenUri` | `string` |
| › `limit?` | `number` |
| › `name` | `string` |
| › `symbol` | `string` |

#### Returns

`Promise`<`undefined` \| [`DeployResult`](../interfaces/DeployResult.md)<`PaymentParamsStruct`\>\>
