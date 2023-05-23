[# Masa SDK
 - v3.0.1](../README.md) / [Exports](../modules.md) / SBTWrapper

# Class: SBTWrapper<Contract\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTAuthority` \| `ReferenceSBTSelfSovereign` \| `MasaSBTContract` |

## Hierarchy

- [`MasaLinkable`](MasaLinkable.md)

  ↳ **`SBTWrapper`**

  ↳↳ [`ASBTWrapper`](ASBTWrapper.md)

  ↳↳ [`SSSBTWrapper`](SSSBTWrapper.md)

## Table of contents

### Constructors

- [constructor](SBTWrapper.md#constructor)

### Properties

- [contract](SBTWrapper.md#contract)
- [links](SBTWrapper.md#links)
- [masa](SBTWrapper.md#masa)
- [sbtContract](SBTWrapper.md#sbtcontract)

### Methods

- [burn](SBTWrapper.md#burn)
- [list](SBTWrapper.md#list)

## Constructors

### constructor

• **new SBTWrapper**<`Contract`\>(`masa`, `sbtContract`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `MasaSBT` \| `ReferenceSBTAuthority` \| `ReferenceSBTSelfSovereign` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](Masa.md) |
| `sbtContract` | `Contract` |

#### Overrides

[MasaLinkable](MasaLinkable.md).[constructor](MasaLinkable.md#constructor)

## Properties

### contract

• `Protected` **contract**: `Contract`

#### Inherited from

[MasaLinkable](MasaLinkable.md).[contract](MasaLinkable.md#contract)

___

### links

• `Readonly` **links**: [`MasaSoulLinker`](MasaSoulLinker.md)

#### Inherited from

[MasaLinkable](MasaLinkable.md).[links](MasaLinkable.md#links)

___

### masa

• `Protected` **masa**: [`Masa`](Masa.md)

#### Inherited from

[MasaLinkable](MasaLinkable.md).[masa](MasaLinkable.md#masa)

___

### sbtContract

• `Readonly` **sbtContract**: `Contract`

## Methods

### burn

▸ **burn**(`SBTId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `SBTId` | `BigNumber` |

#### Returns

`Promise`<`boolean`\>

___

### list

▸ **list**(`address?`): `Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `string` |

#### Returns

`Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>
