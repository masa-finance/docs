[# Masa SDK
 - v3.30.2](../README.md) / [Exports](../modules.md) / MasaSSSBTWrapper

# Class: MasaSSSBTWrapper\<Contract\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTSelfSovereign` |

## Hierarchy

- [`MasaSBTWrapper`](MasaSBTWrapper.md)\<`Contract`\>

  ↳ **`MasaSSSBTWrapper`**

## Table of contents

### Constructors

- [constructor](MasaSSSBTWrapper.md#constructor)

### Properties

- [contract](MasaSSSBTWrapper.md#contract)
- [links](MasaSSSBTWrapper.md#links)
- [masa](MasaSSSBTWrapper.md#masa)

### Accessors

- [isContractAvailable](MasaSSSBTWrapper.md#iscontractavailable)

### Methods

- [burn](MasaSSSBTWrapper.md#burn)
- [list](MasaSSSBTWrapper.md#list)
- [loadSBTIDs](MasaSSSBTWrapper.md#loadsbtids)
- [loadSBTs](MasaSSSBTWrapper.md#loadsbts)
- [mint](MasaSSSBTWrapper.md#mint)
- [sign](MasaSSSBTWrapper.md#sign)

## Constructors

### constructor

• **new MasaSSSBTWrapper**\<`Contract`\>(`masa`, `contract`): [`MasaSSSBTWrapper`](MasaSSSBTWrapper.md)\<`Contract`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTSelfSovereign` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |
| `contract` | `Contract` |

#### Returns

[`MasaSSSBTWrapper`](MasaSSSBTWrapper.md)\<`Contract`\>

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

___

### mint

▸ **mint**(`authorityAddress`, `signatureDate`, `signature`, `paymentMethod?`): `Promise`\<[`BaseResultWithTokenId`](../interfaces/BaseResultWithTokenId.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `authorityAddress` | `string` | `undefined` |
| `signatureDate` | `number` | `undefined` |
| `signature` | `string` | `undefined` |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `"ETH"` |

#### Returns

`Promise`\<[`BaseResultWithTokenId`](../interfaces/BaseResultWithTokenId.md)\>

___

### sign

▸ **sign**(`receiver`): `Promise`\<`undefined` \| \{ `authorityAddress`: `string` ; `signature`: `string` ; `signatureDate`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `receiver` | `string` |

#### Returns

`Promise`\<`undefined` \| \{ `authorityAddress`: `string` ; `signature`: `string` ; `signatureDate`: `number`  }\>
