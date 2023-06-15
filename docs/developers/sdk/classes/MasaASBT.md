[# Masa SDK
 - v3.4.7](../README.md) / [Exports](../modules.md) / MasaASBT

# Class: MasaASBT

## Hierarchy

- [`MasaBase`](MasaBase.md)

  ↳ **`MasaASBT`**

## Table of contents

### Constructors

- [constructor](MasaASBT.md#constructor)

### Properties

- [masa](MasaASBT.md#masa)

### Methods

- [attach](MasaASBT.md#attach)
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

[MasaBase](MasaBase.md).[constructor](MasaBase.md#constructor)

## Properties

### masa

• `Protected` `Readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

[MasaBase](MasaBase.md).[masa](MasaBase.md#masa)

## Methods

### attach

▸ **attach**<`Contract`\>(`contract`): [`MasaASBTWrapper`](MasaASBTWrapper.md)<`Contract`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTAuthority`<`Contract`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `Contract` |

#### Returns

[`MasaASBTWrapper`](MasaASBTWrapper.md)<`Contract`\>

___

### connect

▸ **connect**<`Contract`\>(`address`, `factory?`): `Promise`<[`MasaASBTWrapper`](MasaASBTWrapper.md)<`Contract`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTAuthority`<`Contract`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `address` | `string` | `undefined` |
| `factory` | [`ContractFactory`](ContractFactory.md) | `ReferenceSBTAuthority__factory` |

#### Returns

`Promise`<[`MasaASBTWrapper`](MasaASBTWrapper.md)<`Contract`\>\>

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
