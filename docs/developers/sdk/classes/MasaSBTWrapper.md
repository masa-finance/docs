[# Masa SDK
 - v3.9.1](../README.md) / [Exports](../modules.md) / MasaSBTWrapper

# Class: MasaSBTWrapper<Contract\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `MasaSBT` |

## Hierarchy

- `MasaLinkable`<`Contract`\>

  ↳ **`MasaSBTWrapper`**

  ↳↳ [`MasaASBTWrapper`](MasaASBTWrapper.md)

  ↳↳ [`MasaSSSBTWrapper`](MasaSSSBTWrapper.md)

## Table of contents

### Constructors

- [constructor](MasaSBTWrapper.md#constructor)

### Properties

- [contract](MasaSBTWrapper.md#contract)
- [links](MasaSBTWrapper.md#links)
- [masa](MasaSBTWrapper.md#masa)

### Methods

- [burn](MasaSBTWrapper.md#burn)
- [list](MasaSBTWrapper.md#list)
- [loadSBTIDs](MasaSBTWrapper.md#loadsbtids)
- [loadSBTs](MasaSBTWrapper.md#loadsbts)

## Constructors

### constructor

• **new MasaSBTWrapper**<`Contract`\>(`masa`, `contract`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `MasaSBT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |
| `contract` | `Contract` |

#### Inherited from

MasaLinkable<Contract\>.constructor

## Properties

### contract

• `Readonly` **contract**: `Contract`

#### Inherited from

MasaLinkable.contract

___

### links

• `Readonly` **links**: [`MasaSoulLinker`](MasaSoulLinker.md)

#### Inherited from

MasaLinkable.links

___

### masa

• `Protected` `Readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

MasaLinkable.masa

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

___

### loadSBTIDs

▸ `Protected` **loadSBTIDs**(`sbtIDs`): `Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sbtIDs` | `BigNumber`[] |

#### Returns

`Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

___

### loadSBTs

▸ `Protected` **loadSBTs**(`identityIdOrAddress`): `Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identityIdOrAddress` | `string` \| `BigNumber` |

#### Returns

`Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>
