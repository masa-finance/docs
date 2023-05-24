[# Masa SDK
 - v3.0.3](../README.md) / [Exports](../modules.md) / SSSBTWrapper

# Class: SSSBTWrapper<Contract\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTSelfSovereign` |

## Hierarchy

- [`SBTWrapper`](SBTWrapper.md)<`Contract`\>

  ↳ **`SSSBTWrapper`**

## Table of contents

### Constructors

- [constructor](SSSBTWrapper.md#constructor)

### Properties

- [contract](SSSBTWrapper.md#contract)
- [links](SSSBTWrapper.md#links)
- [masa](SSSBTWrapper.md#masa)

### Methods

- [burn](SSSBTWrapper.md#burn)
- [list](SSSBTWrapper.md#list)
- [mint](SSSBTWrapper.md#mint)
- [sign](SSSBTWrapper.md#sign)

## Constructors

### constructor

• **new SSSBTWrapper**<`Contract`\>(`masa`, `contract`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTSelfSovereign`<`Contract`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](Masa.md) |
| `contract` | `Contract` |

#### Inherited from

[SBTWrapper](SBTWrapper.md).[constructor](SBTWrapper.md#constructor)

## Properties

### contract

• `Readonly` **contract**: `Contract`

#### Inherited from

[SBTWrapper](SBTWrapper.md).[contract](SBTWrapper.md#contract)

___

### links

• `Readonly` **links**: [`MasaSoulLinker`](MasaSoulLinker.md)

#### Inherited from

[SBTWrapper](SBTWrapper.md).[links](SBTWrapper.md#links)

___

### masa

• `Protected` `Readonly` **masa**: [`Masa`](Masa.md)

#### Inherited from

[SBTWrapper](SBTWrapper.md).[masa](SBTWrapper.md#masa)

## Methods

### burn

▸ **burn**(`SBTId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `SBTId` | `BigNumber` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[SBTWrapper](SBTWrapper.md).[burn](SBTWrapper.md#burn)

___

### list

▸ **list**(`address?`): `Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `string` |

#### Returns

`Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Inherited from

[SBTWrapper](SBTWrapper.md).[list](SBTWrapper.md#list)

___

### mint

▸ **mint**(`authorityAddress`, `signatureDate`, `signature`): `Promise`<`undefined` \| ``true``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authorityAddress` | `string` |
| `signatureDate` | `number` |
| `signature` | `string` |

#### Returns

`Promise`<`undefined` \| ``true``\>

___

### sign

▸ **sign**(`receiver`): `Promise`<`undefined` \| { `authorityAddress`: `string` ; `signature`: `string` ; `signatureDate`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `receiver` | `string` |

#### Returns

`Promise`<`undefined` \| { `authorityAddress`: `string` ; `signature`: `string` ; `signatureDate`: `number`  }\>
