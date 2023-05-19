[# Masa SDK
 - v2.1.1](../README.md) / [Exports](../modules.md) / MasaSBT

# Class: MasaSBT

## Hierarchy

- `MasaBase`

  ↳ **`MasaSBT`**

## Table of contents

### Constructors

- [constructor](MasaSBT.md#constructor)

### Properties

- [ASBT](MasaSBT.md#asbt)
- [SSSBT](MasaSBT.md#sssbt)
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

### ASBT

• **ASBT**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `deploy` | (`name`: `string`, `symbol`: `string`, `baseTokenUri`: `string`, `adminAddress?`: `string`) => `Promise`<`undefined` \| `string`\> |
| `mint` | (`contract`: `ReferenceSBTAuthority`, `receiver`: `string`) => `Promise`<`void`\> |

___

### SSSBT

• **SSSBT**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `deploy` | (`name`: `string`, `symbol`: `string`, `baseTokenUri`: `string`, `authorityAddress`: `string`, `adminAddress?`: `string`) => `Promise`<`undefined` \| `string`\> |
| `mint` | (`contract`: `ReferenceSBTSelfSovereign`, `authorityAddress`: `string`, `signatureDate`: `number`, `signature`: `string`) => `Promise`<`undefined` \| ``true``\> |
| `sign` | (`contract`: `ReferenceSBTSelfSovereign`, `receiver`: `string`) => `Promise`<`undefined` \| { `authorityAddress`: `string` ; `signature`: `string` ; `signatureDate`: `number`  }\> |

___

### masa

• `Protected` **masa**: [`Masa`](Masa.md)

#### Inherited from

MasaBase.masa

## Methods

### connect

▸ **connect**<`Contract`\>(`address`, `factory?`): `Promise`<{ `burn`: (`SBTId`: `BigNumber`) => `undefined` \| `Promise`<`boolean`\> ; `links`: `undefined` \| [`MasaSoulLinker`](MasaSoulLinker.md) ; `list`: (`address?`: `string`) => `undefined` \| `Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\> ; `sbtContract`: `undefined` \| `Contract`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `MasaSBTSelfSovereign` \| `MasaSBTAuthority` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `address` | `string` | `undefined` |
| `factory` | [`ContractFactory`](ContractFactory.md) | `MasaSBTSelfSovereign__factory` |

#### Returns

`Promise`<{ `burn`: (`SBTId`: `BigNumber`) => `undefined` \| `Promise`<`boolean`\> ; `links`: `undefined` \| [`MasaSoulLinker`](MasaSoulLinker.md) ; `list`: (`address?`: `string`) => `undefined` \| `Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\> ; `sbtContract`: `undefined` \| `Contract`  }\>
