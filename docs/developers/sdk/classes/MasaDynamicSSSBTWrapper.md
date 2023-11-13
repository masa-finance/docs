[# Masa SDK
 - v3.12.0-alpha.5](../README.md) / [Exports](../modules.md) / MasaDynamicSSSBTWrapper

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

## Methods

### burn

▸ **burn**(`SBTId`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `SBTId` | `BigNumber` |

#### Returns

`Promise`\<`boolean`\>

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

▸ **mint**(`paymentMethod?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `"ETH"` |

#### Returns

`Promise`\<`boolean`\>

___

### setState

▸ **setState**(`state`, `stateValue`, `signature`, `signatureDate`, `authorityAddress`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |
| `stateValue` | `boolean` |
| `signature` | `string` |
| `signatureDate` | `number` |
| `authorityAddress` | `string` |

#### Returns

`Promise`\<`boolean`\>

___

### signSetState

▸ **signSetState**(`receiver`, `state`, `stateValue`): `Promise`\<`undefined` \| \{ `authorityAddress`: `string` ; `signature`: `string` ; `signatureDate`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `receiver` | `string` |
| `state` | `string` |
| `stateValue` | `boolean` |

#### Returns

`Promise`\<`undefined` \| \{ `authorityAddress`: `string` ; `signature`: `string` ; `signatureDate`: `number`  }\>
