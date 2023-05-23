[# Masa SDK
 - v3.0.1](../README.md) / [Exports](../modules.md) / MasaSBT

# Class: MasaSBT<Contract\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTAuthority` \| `ReferenceSBTSelfSovereign` \| `MasaSBTContract` |

## Hierarchy

- [`MasaBase`](MasaBase.md)

  ↳ **`MasaSBT`**

  ↳↳ [`MasaASBT`](MasaASBT.md)

  ↳↳ [`MasaSSSBT`](MasaSSSBT.md)

## Table of contents

### Constructors

- [constructor](MasaSBT.md#constructor)

### Properties

- [masa](MasaSBT.md#masa)

### Methods

- [connect](MasaSBT.md#connect)

## Constructors

### constructor

• **new MasaSBT**<`Contract`\>(`masa`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `MasaSBT` \| `ReferenceSBTAuthority` \| `ReferenceSBTSelfSovereign` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](Masa.md) |

#### Inherited from

[MasaBase](MasaBase.md).[constructor](MasaBase.md#constructor)

## Properties

### masa

• `Protected` **masa**: [`Masa`](Masa.md)

#### Inherited from

[MasaBase](MasaBase.md).[masa](MasaBase.md#masa)

## Methods

### connect

▸ **connect**(`address`, `factory?`): `Promise`<[`SBTWrapper`](SBTWrapper.md)<`Contract`\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `address` | `string` | `undefined` |
| `factory` | [`ContractFactory`](ContractFactory.md) | `MasaSBT__factory` |

#### Returns

`Promise`<[`SBTWrapper`](SBTWrapper.md)<`Contract`\>\>
