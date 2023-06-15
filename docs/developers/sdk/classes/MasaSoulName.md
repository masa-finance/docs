[# Masa SDK
 - v3.4.6](../README.md) / [Exports](../modules.md) / MasaSoulName

# Class: MasaSoulName

## Hierarchy

- [`MasaBase`](MasaBase.md)

  ↳ **`MasaSoulName`**

## Table of contents

### Constructors

- [constructor](MasaSoulName.md#constructor)

### Properties

- [masa](MasaSoulName.md#masa)

### Methods

- [burn](MasaSoulName.md#burn)
- [create](MasaSoulName.md#create)
- [getSoulNameMetadataPrefix](MasaSoulName.md#getsoulnamemetadataprefix)
- [list](MasaSoulName.md#list)
- [loadSoulNameByName](MasaSoulName.md#loadsoulnamebyname)
- [loadSoulNameByTokenId](MasaSoulName.md#loadsoulnamebytokenid)
- [loadSoulNames](MasaSoulName.md#loadsoulnames)
- [resolve](MasaSoulName.md#resolve)
- [send](MasaSoulName.md#send)
- [tail](MasaSoulName.md#tail)
- [validate](MasaSoulName.md#validate)
- [verify](MasaSoulName.md#verify)

## Constructors

### constructor

• **new MasaSoulName**(`masa`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |

#### Inherited from

[MasaBase](MasaBase.md).[constructor](MasaBase.md#constructor)

## Properties

### masa

• `Protected` `Readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

[MasaBase](MasaBase.md).[masa](MasaBase.md#masa)

## Methods

### burn

▸ **burn**(`soulName`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `soulName` | `string` |

#### Returns

`Promise`<`boolean`\>

___

### create

▸ **create**(`paymentMethod?`, `soulName`, `duration`, `receiver?`, `style?`): `Promise`<[`CreateSoulNameResult`](../interfaces/CreateSoulNameResult.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `"ETH"` |
| `soulName` | `string` | `undefined` |
| `duration` | `number` | `undefined` |
| `receiver?` | `string` | `undefined` |
| `style?` | `string` | `undefined` |

#### Returns

`Promise`<[`CreateSoulNameResult`](../interfaces/CreateSoulNameResult.md)\>

___

### getSoulNameMetadataPrefix

▸ **getSoulNameMetadataPrefix**(): `string`

#### Returns

`string`

___

### list

▸ **list**(`address?`): `Promise`<[`SoulNameDetails`](../interfaces/SoulNameDetails.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `string` |

#### Returns

`Promise`<[`SoulNameDetails`](../interfaces/SoulNameDetails.md)[]\>

___

### loadSoulNameByName

▸ **loadSoulNameByName**(`soulName`): `Promise`<`undefined` \| [`SoulNameDetails`](../interfaces/SoulNameDetails.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `soulName` | `string` |

#### Returns

`Promise`<`undefined` \| [`SoulNameDetails`](../interfaces/SoulNameDetails.md)\>

___

### loadSoulNameByTokenId

▸ **loadSoulNameByTokenId**(`tokenId`): `Promise`<`undefined` \| [`SoulNameDetails`](../interfaces/SoulNameDetails.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `string` \| `BigNumber` |

#### Returns

`Promise`<`undefined` \| [`SoulNameDetails`](../interfaces/SoulNameDetails.md)\>

___

### loadSoulNames

▸ **loadSoulNames**(`identityIdOrAddress`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identityIdOrAddress` | `string` \| `BigNumber` |

#### Returns

`Promise`<`string`[]\>

___

### resolve

▸ **resolve**(`soulName`): `Promise`<`undefined` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `soulName` | `string` |

#### Returns

`Promise`<`undefined` \| `string`\>

___

### send

▸ **send**(`soulName`, `receiver`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `soulName` | `string` |
| `receiver` | `string` |

#### Returns

`Promise`<`boolean`\>

___

### tail

▸ **tail**(`limit?`): `Promise`<[`SoulNameDetails`](../interfaces/SoulNameDetails.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `limit?` | `number` |

#### Returns

`Promise`<[`SoulNameDetails`](../interfaces/SoulNameDetails.md)[]\>

___

### validate

▸ **validate**(`soulName`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `soulName` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `isValid` | `boolean` |
| `length` | `number` |
| `message?` | `string` |

___

### verify

▸ **verify**(`soulName`): `Promise`<{ `imageHashMatch`: `boolean` ; `imageOwnerIsMasaAccount`: `boolean` ; `imageSignatureMatch`: `boolean` ; `metadataOwnerIsMasaAccount`: `boolean` ; `metadataSignatureMatch`: `boolean` ; `nameMatch`: `boolean`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `soulName` | `string` |

#### Returns

`Promise`<{ `imageHashMatch`: `boolean` ; `imageOwnerIsMasaAccount`: `boolean` ; `imageSignatureMatch`: `boolean` ; `metadataOwnerIsMasaAccount`: `boolean` ; `metadataSignatureMatch`: `boolean` ; `nameMatch`: `boolean`  }\>
