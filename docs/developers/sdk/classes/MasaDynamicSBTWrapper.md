[# Masa SDK
 - v3.30.0](../README.md) / [Exports](../modules.md) / MasaDynamicSBTWrapper

# Class: MasaDynamicSBTWrapper\<Contract\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `MasaSBTDynamic` |

## Hierarchy

- [`MasaSBTWrapper`](MasaSBTWrapper.md)\<`Contract`\>

  ↳ **`MasaDynamicSBTWrapper`**

  ↳↳ [`MasaDynamicSSSBTWrapper`](MasaDynamicSSSBTWrapper.md)

## Table of contents

### Constructors

- [constructor](MasaDynamicSBTWrapper.md#constructor)

### Properties

- [contract](MasaDynamicSBTWrapper.md#contract)
- [links](MasaDynamicSBTWrapper.md#links)
- [masa](MasaDynamicSBTWrapper.md#masa)

### Accessors

- [isContractAvailable](MasaDynamicSBTWrapper.md#iscontractavailable)

### Methods

- [burn](MasaDynamicSBTWrapper.md#burn)
- [list](MasaDynamicSBTWrapper.md#list)
- [loadSBTIDs](MasaDynamicSBTWrapper.md#loadsbtids)
- [loadSBTs](MasaDynamicSBTWrapper.md#loadsbts)

## Constructors

### constructor

• **new MasaDynamicSBTWrapper**\<`Contract`\>(`masa`, `contract`): [`MasaDynamicSBTWrapper`](MasaDynamicSBTWrapper.md)\<`Contract`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `MasaSBTDynamic` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |
| `contract` | `Contract` |

#### Returns

[`MasaDynamicSBTWrapper`](MasaDynamicSBTWrapper.md)\<`Contract`\>

#### Inherited from

[MasaSBTWrapper](MasaSBTWrapper.md).[constructor](MasaSBTWrapper.md#constructor)

## Properties

### contract

• `Readonly` **contract**: `Contract`

#### Inherited from

[MasaSBTWrapper](MasaSBTWrapper.md).[contract](MasaSBTWrapper.md#contract)

___

### links

• `Readonly` **links**: [`MasaSoulLinker`](MasaSoulLinker.md)

#### Inherited from

[MasaSBTWrapper](MasaSBTWrapper.md).[links](MasaSBTWrapper.md#links)

___

### masa

• `Protected` `Readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

[MasaSBTWrapper](MasaSBTWrapper.md).[masa](MasaSBTWrapper.md#masa)

## Accessors

### isContractAvailable

• `get` **isContractAvailable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MasaSBTWrapper.isContractAvailable

## Methods

### burn

▸ **burn**(`SBTId`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `SBTId` | `BigNumber` |

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Inherited from

[MasaSBTWrapper](MasaSBTWrapper.md).[burn](MasaSBTWrapper.md#burn)

___

### list

▸ **list**(`address?`): `Promise`\<\{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `string` |

#### Returns

`Promise`\<\{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Inherited from

[MasaSBTWrapper](MasaSBTWrapper.md).[list](MasaSBTWrapper.md#list)

___

### loadSBTIDs

▸ **loadSBTIDs**(`sbtIDs`): `Promise`\<\{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sbtIDs` | `BigNumber`[] |

#### Returns

`Promise`\<\{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Inherited from

[MasaSBTWrapper](MasaSBTWrapper.md).[loadSBTIDs](MasaSBTWrapper.md#loadsbtids)

___

### loadSBTs

▸ **loadSBTs**(`identityIdOrAddress`): `Promise`\<\{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identityIdOrAddress` | `string` \| `BigNumber` |

#### Returns

`Promise`\<\{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Inherited from

[MasaSBTWrapper](MasaSBTWrapper.md).[loadSBTs](MasaSBTWrapper.md#loadsbts)
