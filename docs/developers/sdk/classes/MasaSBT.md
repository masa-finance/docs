[# Masa SDK
 - v1.11.3](../README.md) / [Exports](../modules.md) / MasaSBT

# Class: MasaSBT

## Hierarchy

- `MasaBase`

  ↳ **`MasaSBT`**

## Table of contents

### Constructors

- [constructor](MasaSBT.md#constructor)

### Properties

- [masa](MasaSBT.md#masa)

### Methods

- [connect](MasaSBT.md#connect)

## Constructors

### constructor

• **new MasaSBT**(`masa`)

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

▸ **connect**(`address`): `Promise`<{ `burn`: (`SBTId`: `BigNumber`) => `undefined` \| `Promise`<`boolean`\> ; `links`: `undefined` \| [`MasaSoulLinker`](MasaSoulLinker.md) ; `list`: (`address?`: `string`) => `undefined` \| `Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<{ `burn`: (`SBTId`: `BigNumber`) => `undefined` \| `Promise`<`boolean`\> ; `links`: `undefined` \| [`MasaSoulLinker`](MasaSoulLinker.md) ; `list`: (`address?`: `string`) => `undefined` \| `Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>  }\>
