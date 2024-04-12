[# Masa SDK
 - v3.30.3](../README.md) / [Exports](../modules.md) / MasaDynamicSSSBTWrapper

# Class: MasaDynamicSSSBTWrapper\<Contract\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `MasaDynamicSSSBT` |

## Hierarchy

- [`MasaDynamicSBTWrapper`](MasaDynamicSBTWrapper.md)\<`Contract`\>

  ↳ **`MasaDynamicSSSBTWrapper`**

## Table of contents

### Constructors

- [constructor](MasaDynamicSSSBTWrapper.md#constructor)

### Properties

- [contract](MasaDynamicSSSBTWrapper.md#contract)
- [links](MasaDynamicSSSBTWrapper.md#links)
- [masa](MasaDynamicSSSBTWrapper.md#masa)

### Accessors

- [isContractAvailable](MasaDynamicSSSBTWrapper.md#iscontractavailable)

### Methods

- [burn](MasaDynamicSSSBTWrapper.md#burn)
- [list](MasaDynamicSSSBTWrapper.md#list)
- [loadSBTIDs](MasaDynamicSSSBTWrapper.md#loadsbtids)
- [loadSBTs](MasaDynamicSSSBTWrapper.md#loadsbts)
- [mint](MasaDynamicSSSBTWrapper.md#mint)
- [setState](MasaDynamicSSSBTWrapper.md#setstate)
- [signSetState](MasaDynamicSSSBTWrapper.md#signsetstate)

## Constructors

### constructor

• **new MasaDynamicSSSBTWrapper**\<`Contract`\>(`masa`, `contract`): [`MasaDynamicSSSBTWrapper`](MasaDynamicSSSBTWrapper.md)\<`Contract`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `MasaDynamicSSSBT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |
| `contract` | `Contract` |

#### Returns

[`MasaDynamicSSSBTWrapper`](MasaDynamicSSSBTWrapper.md)\<`Contract`\>

#### Inherited from

[MasaDynamicSBTWrapper](MasaDynamicSBTWrapper.md).[constructor](MasaDynamicSBTWrapper.md#constructor)

## Properties

### contract

• `Readonly` **contract**: `Contract`

#### Inherited from

[MasaDynamicSBTWrapper](MasaDynamicSBTWrapper.md).[contract](MasaDynamicSBTWrapper.md#contract)

___

### links

• `Readonly` **links**: [`MasaSoulLinker`](MasaSoulLinker.md)

#### Inherited from

[MasaDynamicSBTWrapper](MasaDynamicSBTWrapper.md).[links](MasaDynamicSBTWrapper.md#links)

___

### masa

• `Protected` `Readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

[MasaDynamicSBTWrapper](MasaDynamicSBTWrapper.md).[masa](MasaDynamicSBTWrapper.md#masa)

## Accessors

### isContractAvailable

• `get` **isContractAvailable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MasaDynamicSBTWrapper.isContractAvailable

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

[MasaDynamicSBTWrapper](MasaDynamicSBTWrapper.md).[burn](MasaDynamicSBTWrapper.md#burn)

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

[MasaDynamicSBTWrapper](MasaDynamicSBTWrapper.md).[list](MasaDynamicSBTWrapper.md#list)

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

[MasaDynamicSBTWrapper](MasaDynamicSBTWrapper.md).[loadSBTIDs](MasaDynamicSBTWrapper.md#loadsbtids)

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

[MasaDynamicSBTWrapper](MasaDynamicSBTWrapper.md).[loadSBTs](MasaDynamicSBTWrapper.md#loadsbts)

___

### mint

▸ **mint**(`paymentMethod?`): `Promise`\<[`BaseResultWithTokenId`](../interfaces/BaseResultWithTokenId.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `"ETH"` |

#### Returns

`Promise`\<[`BaseResultWithTokenId`](../interfaces/BaseResultWithTokenId.md)\>

___

### setState

▸ **setState**(`state`, `stateValue`, `signature`, `signatureDate`, `authorityAddress`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |
| `stateValue` | `boolean` |
| `signature` | `string` |
| `signatureDate` | `number` |
| `authorityAddress` | `string` |

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

___

### signSetState

▸ **signSetState**(`receiver`, `state`, `stateValue`): `Promise`\<`SignSetStateResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `receiver` | `string` |
| `state` | `string` |
| `stateValue` | `boolean` |

#### Returns

`Promise`\<`SignSetStateResult`\>
