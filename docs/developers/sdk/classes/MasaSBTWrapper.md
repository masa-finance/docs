[# Masa SDK
 - v3.33.0](../README.md) / [Exports](../modules.md) / MasaSBTWrapper

# Class: MasaSBTWrapper\<Contract\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `MasaSBT` |

## Hierarchy

- `MasaLinkable`\<`Contract`\>

  ↳ **`MasaSBTWrapper`**

  ↳↳ [`MasaASBTWrapper`](MasaASBTWrapper.md)

  ↳↳ [`MasaDynamicSBTWrapper`](MasaDynamicSBTWrapper.md)

  ↳↳ [`MasaSSSBTWrapper`](MasaSSSBTWrapper.md)

## Table of contents

### Constructors

- [constructor](MasaSBTWrapper.md#constructor)

### Properties

- [contract](MasaSBTWrapper.md#contract)
- [links](MasaSBTWrapper.md#links)
- [masa](MasaSBTWrapper.md#masa)

### Accessors

- [isContractAvailable](MasaSBTWrapper.md#iscontractavailable)

### Methods

- [burn](MasaSBTWrapper.md#burn)
- [list](MasaSBTWrapper.md#list)
- [loadSBTIDs](MasaSBTWrapper.md#loadsbtids)
- [loadSBTs](MasaSBTWrapper.md#loadsbts)

## Constructors

### constructor

• **new MasaSBTWrapper**\<`Contract`\>(`masa`, `contract`): [`MasaSBTWrapper`](MasaSBTWrapper.md)\<`Contract`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `MasaSBT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |
| `contract` | `Contract` |

#### Returns

[`MasaSBTWrapper`](MasaSBTWrapper.md)\<`Contract`\>

#### Inherited from

MasaLinkable\<Contract\>.constructor

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

## Accessors

### isContractAvailable

• `get` **isContractAvailable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MasaLinkable.isContractAvailable

## Methods

### burn

▸ **burn**(`SBTId`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `SBTId` | `BigNumber` |

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

___

### list

▸ **list**(`address?`): `Promise`\<\{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `string` |

#### Returns

`Promise`\<\{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

___

### loadSBTIDs

▸ **loadSBTIDs**(`sbtIDs`): `Promise`\<\{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sbtIDs` | `BigNumber`[] |

#### Returns

`Promise`\<\{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

___

### loadSBTs

▸ **loadSBTs**(`identityIdOrAddress`): `Promise`\<\{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identityIdOrAddress` | `string` \| `BigNumber` |

#### Returns

`Promise`\<\{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>
