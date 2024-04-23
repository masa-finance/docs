[# Masa SDK
 - v3.33.0](../README.md) / [Exports](../modules.md) / MasaASBTWrapper

# Class: MasaASBTWrapper\<Contract\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTAuthority` |

## Hierarchy

- [`MasaSBTWrapper`](MasaSBTWrapper.md)\<`Contract`\>

  ↳ **`MasaASBTWrapper`**

## Table of contents

### Constructors

- [constructor](MasaASBTWrapper.md#constructor)

### Properties

- [contract](MasaASBTWrapper.md#contract)
- [links](MasaASBTWrapper.md#links)
- [masa](MasaASBTWrapper.md#masa)

### Accessors

- [isContractAvailable](MasaASBTWrapper.md#iscontractavailable)

### Methods

- [bulkMint](MasaASBTWrapper.md#bulkmint)
- [burn](MasaASBTWrapper.md#burn)
- [list](MasaASBTWrapper.md#list)
- [loadSBTIDs](MasaASBTWrapper.md#loadsbtids)
- [loadSBTs](MasaASBTWrapper.md#loadsbts)
- [mint](MasaASBTWrapper.md#mint)

## Constructors

### constructor

• **new MasaASBTWrapper**\<`Contract`\>(`masa`, `contract`): [`MasaASBTWrapper`](MasaASBTWrapper.md)\<`Contract`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTAuthority` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |
| `contract` | `Contract` |

#### Returns

[`MasaASBTWrapper`](MasaASBTWrapper.md)\<`Contract`\>

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

### bulkMint

▸ **bulkMint**(`receivers`, `paymentMethod?`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `receivers` | `string`[] | `undefined` |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `"ETH"` |

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)[]\>

___

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

___

### mint

▸ **mint**(`receiver`, `paymentMethod?`): `Promise`\<[`BaseResultWithTokenId`](../interfaces/BaseResultWithTokenId.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `receiver` | `string` | `undefined` |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `"ETH"` |

#### Returns

`Promise`\<[`BaseResultWithTokenId`](../interfaces/BaseResultWithTokenId.md)\>
