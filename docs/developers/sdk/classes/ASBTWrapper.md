[# Masa SDK
 - v3.0.5](../README.md) / [Exports](../modules.md) / ASBTWrapper

# Class: ASBTWrapper<Contract\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTAuthority` |

## Hierarchy

- [`SBTWrapper`](SBTWrapper.md)<`Contract`\>

  ↳ **`ASBTWrapper`**

## Table of contents

### Constructors

- [constructor](ASBTWrapper.md#constructor)

### Properties

- [contract](ASBTWrapper.md#contract)
- [links](ASBTWrapper.md#links)
- [masa](ASBTWrapper.md#masa)

### Methods

- [burn](ASBTWrapper.md#burn)
- [list](ASBTWrapper.md#list)
- [mint](ASBTWrapper.md#mint)

## Constructors

### constructor

• **new ASBTWrapper**<`Contract`\>(`masa`, `contract`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTAuthority`<`Contract`\> |

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

▸ **mint**(`receiver`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `receiver` | `string` |

#### Returns

`Promise`<`boolean`\>
