[# Masa SDK
 - v2.2.0](../README.md) / [Exports](../modules.md) / MasaSBT

# Class: MasaSBT<Contract\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTAuthority` \| `ReferenceSBTSelfSovereign` \| `MasaSBTContract` |

## Hierarchy

- `MasaBase`

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

MasaBase.constructor

## Properties

### masa

• `Protected` **masa**: [`Masa`](Masa.md)

#### Inherited from

MasaBase.masa

## Methods

### connect

▸ **connect**(`address`, `factory?`): `Promise`<{ `burn`: (`SBTId`: `BigNumber`) => `undefined` \| `Promise`<`boolean`\> ; `links`: `undefined` \| [`MasaSoulLinker`](MasaSoulLinker.md) ; `list`: (`address?`: `string`) => `undefined` \| `Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\> ; `sbtContract`: `undefined` \| `Contract`  }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `address` | `string` | `undefined` |
| `factory` | [`ContractFactory`](ContractFactory.md) | `MasaSBTSelfSovereign__factory` |

#### Returns

`Promise`<{ `burn`: (`SBTId`: `BigNumber`) => `undefined` \| `Promise`<`boolean`\> ; `links`: `undefined` \| [`MasaSoulLinker`](MasaSoulLinker.md) ; `list`: (`address?`: `string`) => `undefined` \| `Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\> ; `sbtContract`: `undefined` \| `Contract`  }\>
