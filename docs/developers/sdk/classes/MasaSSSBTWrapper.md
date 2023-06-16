[# Masa SDK
 - v3.4.9](../README.md) / [Exports](../modules.md) / MasaSSSBTWrapper

# Class: MasaSSSBTWrapper<Contract\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTSelfSovereign` |

## Hierarchy

- [`MasaSBTWrapper`](MasaSBTWrapper.md)<`Contract`\>

  ↳ **`MasaSSSBTWrapper`**

## Table of contents

### Constructors

- [constructor](MasaSSSBTWrapper.md#constructor)

### Properties

- [contract](MasaSSSBTWrapper.md#contract)
- [links](MasaSSSBTWrapper.md#links)
- [masa](MasaSSSBTWrapper.md#masa)

### Methods

- [burn](MasaSSSBTWrapper.md#burn)
- [list](MasaSSSBTWrapper.md#list)
- [loadSBTIDs](MasaSSSBTWrapper.md#loadsbtids)
- [loadSBTs](MasaSSSBTWrapper.md#loadsbts)
- [mint](MasaSSSBTWrapper.md#mint)
- [sign](MasaSSSBTWrapper.md#sign)

## Constructors

### constructor

• **new MasaSSSBTWrapper**<`Contract`\>(`masa`, `contract`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTSelfSovereign`<`Contract`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |
| `contract` | `Contract` |

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

[MasaSBTWrapper](MasaSBTWrapper.md).[burn](MasaSBTWrapper.md#burn)

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

[MasaSBTWrapper](MasaSBTWrapper.md).[list](MasaSBTWrapper.md#list)

___

### loadSBTIDs

▸ `Protected` **loadSBTIDs**(`sbtIDs`): `Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sbtIDs` | `BigNumber`[] |

#### Returns

`Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Inherited from

[MasaSBTWrapper](MasaSBTWrapper.md).[loadSBTIDs](MasaSBTWrapper.md#loadsbtids)

___

### loadSBTs

▸ `Protected` **loadSBTs**(`identityIdOrAddress`): `Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identityIdOrAddress` | `string` \| `BigNumber` |

#### Returns

`Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Inherited from

[MasaSBTWrapper](MasaSBTWrapper.md).[loadSBTs](MasaSBTWrapper.md#loadsbts)

___

### mint

▸ **mint**(`authorityAddress`, `signatureDate`, `signature`, `paymentMethod?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `authorityAddress` | `string` | `undefined` |
| `signatureDate` | `number` | `undefined` |
| `signature` | `string` | `undefined` |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `"ETH"` |

#### Returns

`Promise`<`boolean`\>

___

### sign

▸ **sign**(`receiver`): `Promise`<`undefined` \| { `authorityAddress`: `string` ; `signature`: `string` ; `signatureDate`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `receiver` | `string` |

#### Returns

`Promise`<`undefined` \| { `authorityAddress`: `string` ; `signature`: `string` ; `signatureDate`: `number`  }\>
