[# Masa SDK
 - v1.13.0](../README.md) / [Exports](../modules.md) / MasaSBT

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
- [deployASBT](MasaSBT.md#deployasbt)

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

___

### deployASBT

▸ **deployASBT**(`name`, `symbol`, `baseTokenUri`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `symbol` | `string` |
| `baseTokenUri` | `string` |

#### Returns

`Promise`<`string`\>
