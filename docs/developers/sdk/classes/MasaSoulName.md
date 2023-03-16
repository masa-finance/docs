[# Masa SDK
 - v1.9.5](../README.md) / [Exports](../modules.md) / MasaSoulName

# Class: MasaSoulName

## Hierarchy

- `MasaBase`

  ↳ **`MasaSoulName`**

## Table of contents

### Constructors

- [constructor](MasaSoulName.md#constructor)

### Properties

- [masa](MasaSoulName.md#masa)

### Methods

- [burn](MasaSoulName.md#burn)
- [create](MasaSoulName.md#create)
- [getRegistrationPrice](MasaSoulName.md#getregistrationprice)
- [getSoulNameMetadataPrefix](MasaSoulName.md#getsoulnamemetadataprefix)
- [list](MasaSoulName.md#list)
- [loadSoulNameByName](MasaSoulName.md#loadsoulnamebyname)
- [loadSoulNameByTokenId](MasaSoulName.md#loadsoulnamebytokenid)
- [loadSoulNamesByIdentityId](MasaSoulName.md#loadsoulnamesbyidentityid)
- [resolve](MasaSoulName.md#resolve)
- [send](MasaSoulName.md#send)
- [validate](MasaSoulName.md#validate)
- [verify](MasaSoulName.md#verify)

## Constructors

### constructor

• **new MasaSoulName**(`masa`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](Masa.md) |

#### Overrides

MasaBase.constructor

## Properties

### masa

• `Protected` **masa**: [`Masa`](Masa.md)

#### Inherited from

MasaBase.masa

## Methods

### burn

▸ **burn**(`soulName`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `soulName` | `string` |

#### Returns

`Promise`<`void`\>

___

### create

▸ **create**(`paymentMethod?`, `soulName`, `duration`, `receiver?`): `Promise`<[`CreateSoulNameResult`](../interfaces/CreateSoulNameResult.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `"eth"` |
| `soulName` | `string` | `undefined` |
| `duration` | `number` | `undefined` |
| `receiver?` | `string` | `undefined` |

#### Returns

`Promise`<[`CreateSoulNameResult`](../interfaces/CreateSoulNameResult.md)\>

___

### getRegistrationPrice

▸ **getRegistrationPrice**(`paymentMethod?`, `soulName`, `duration`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `"eth"` |
| `soulName` | `string` | `undefined` |
| `duration` | `number` | `undefined` |

#### Returns

`Promise`<`BigNumber`\>

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

### loadSoulNamesByIdentityId

▸ **loadSoulNamesByIdentityId**(`identityId`): `Promise`<[`SoulNameDetails`](../interfaces/SoulNameDetails.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identityId` | `BigNumber` |

#### Returns

`Promise`<[`SoulNameDetails`](../interfaces/SoulNameDetails.md)[]\>

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

▸ **send**(`soulName`, `receiver`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `soulName` | `string` |
| `receiver` | `string` |

#### Returns

`Promise`<`void`\>

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
