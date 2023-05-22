[# Masa SDK
 - v2.2.0](../README.md) / [Exports](../modules.md) / MasaASBT

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

#### Inherited from

[MasaSBT](MasaSBT.md).[constructor](MasaSBT.md#constructor)

## Properties

### masa

• `Protected` **masa**: [`Masa`](Masa.md)

#### Inherited from

[MasaSBT](MasaSBT.md).[masa](MasaSBT.md#masa)

## Methods

### connect

▸ **connect**(`address`): `Promise`<{ `burn`: (`SBTId`: `BigNumber`) => `undefined` \| `Promise`<`boolean`\> ; `links`: `undefined` \| [`MasaSoulLinker`](MasaSoulLinker.md) ; `list`: (`address?`: `string`) => `undefined` \| `Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\> ; `mint`: (`receiver`: `string`) => `Promise`<`void`\> ; `sbtContract`: `undefined` \| `Contract`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<{ `burn`: (`SBTId`: `BigNumber`) => `undefined` \| `Promise`<`boolean`\> ; `links`: `undefined` \| [`MasaSoulLinker`](MasaSoulLinker.md) ; `list`: (`address?`: `string`) => `undefined` \| `Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\> ; `mint`: (`receiver`: `string`) => `Promise`<`void`\> ; `sbtContract`: `undefined` \| `Contract`  }\>

#### Overrides

[MasaSBT](MasaSBT.md).[connect](MasaSBT.md#connect)

___

### deploy

▸ **deploy**(`name`, `symbol`, `baseTokenUri`, `adminAddress?`): `Promise`<`undefined` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `symbol` | `string` |
| `baseTokenUri` | `string` |
| `adminAddress?` | `string` |

#### Returns

`Promise`<`undefined` \| `string`\>
