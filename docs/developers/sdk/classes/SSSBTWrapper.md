[# Masa SDK
 - v3.4.3](../README.md) / [Exports](../modules.md) / SSSBTWrapper

# Class: SSSBTWrapper

## Hierarchy

- [`SBTWrapper`](SBTWrapper.md)<`ReferenceSBTSelfSovereign`\>

  ↳ **`SSSBTWrapper`**

## Table of contents

### Constructors

- [constructor](SSSBTWrapper.md#constructor)

### Properties

- [contract](SSSBTWrapper.md#contract)
- [links](SSSBTWrapper.md#links)
- [masa](SSSBTWrapper.md#masa)

### Methods

- [addAuthority](SSSBTWrapper.md#addauthority)
- [burn](SSSBTWrapper.md#burn)
- [list](SSSBTWrapper.md#list)
- [mint](SSSBTWrapper.md#mint)
- [sign](SSSBTWrapper.md#sign)

## Constructors

### constructor

• **new SSSBTWrapper**(`masa`, `contract`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |
| `contract` | `ReferenceSBTSelfSovereign` |

#### Inherited from

[SBTWrapper](SBTWrapper.md).[constructor](SBTWrapper.md#constructor)

## Properties

### contract

• `Readonly` **contract**: `ReferenceSBTSelfSovereign`

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

### addAuthority

▸ **addAuthority**(`authorityAddress`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authorityAddress` | `string` |

#### Returns

`Promise`<`void`\>

___

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

▸ **mint**(`authorityAddress`, `signatureDate`, `signature`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authorityAddress` | `string` |
| `signatureDate` | `number` |
| `signature` | `string` |

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
