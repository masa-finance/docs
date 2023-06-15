[# Masa SDK
 - v3.4.2](../README.md) / [Exports](../modules.md) / ASBTWrapper

# Class: ASBTWrapper

## Hierarchy

- [`SBTWrapper`](SBTWrapper.md)<`ReferenceSBTAuthority`\>

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

• **new ASBTWrapper**(`masa`, `contract`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |
| `contract` | `ReferenceSBTAuthority` |

#### Inherited from

[SBTWrapper](SBTWrapper.md).[constructor](SBTWrapper.md#constructor)

## Properties

### contract

• `Readonly` **contract**: `ReferenceSBTAuthority`

#### Inherited from

[SBTWrapper](SBTWrapper.md).[contract](SBTWrapper.md#contract)

___

### links

• `Readonly` **links**: [`MasaSoulLinker`](MasaSoulLinker.md)

#### Inherited from

[SBTWrapper](SBTWrapper.md).[links](SBTWrapper.md#links)

___

### masa

• `Protected` `Readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

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
