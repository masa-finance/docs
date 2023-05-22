[# Masa SDK
 - v2.2.0](../README.md) / [Exports](../modules.md) / MasaSSSBT

# Class: MasaSSSBT<Contract\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTSelfSovereign` |

## Hierarchy

- [`MasaSBT`](MasaSBT.md)<`Contract`\>

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

• **new MasaSSSBT**<`Contract`\>(`masa`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTSelfSovereign`<`Contract`\> |

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

▸ **connect**(`address`): `Promise`<{ `burn`: (`SBTId`: `BigNumber`) => `undefined` \| `Promise`<`boolean`\> ; `links`: `undefined` \| [`MasaSoulLinker`](MasaSoulLinker.md) ; `list`: (`address?`: `string`) => `undefined` \| `Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\> ; `mint`: (`authorityAddress`: `string`, `signatureDate`: `number`, `signature`: `string`) => `Promise`<`undefined` \| ``true``\> ; `sbtContract`: `undefined` \| `Contract` ; `sign`: (`receiver`: `string`) => `Promise`<`undefined` \| { `authorityAddress`: `string` ; `signature`: `string` ; `signatureDate`: `number`  }\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<{ `burn`: (`SBTId`: `BigNumber`) => `undefined` \| `Promise`<`boolean`\> ; `links`: `undefined` \| [`MasaSoulLinker`](MasaSoulLinker.md) ; `list`: (`address?`: `string`) => `undefined` \| `Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\> ; `mint`: (`authorityAddress`: `string`, `signatureDate`: `number`, `signature`: `string`) => `Promise`<`undefined` \| ``true``\> ; `sbtContract`: `undefined` \| `Contract` ; `sign`: (`receiver`: `string`) => `Promise`<`undefined` \| { `authorityAddress`: `string` ; `signature`: `string` ; `signatureDate`: `number`  }\>  }\>

#### Overrides

[MasaSBT](MasaSBT.md).[connect](MasaSBT.md#connect)

___

### deploy

▸ **deploy**(`name`, `symbol`, `baseTokenUri`, `authorityAddress`, `adminAddress?`): `Promise`<`undefined` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `symbol` | `string` |
| `baseTokenUri` | `string` |
| `authorityAddress` | `string` |
| `adminAddress?` | `string` |

#### Returns

`Promise`<`undefined` \| `string`\>
