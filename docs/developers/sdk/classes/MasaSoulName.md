[# Masa SDK
 - v0.9.0](../README.md) / [Exports](../modules.md) / MasaSoulName

# Class: MasaSoulName

## Table of contents

### Constructors

- [constructor](MasaSoulName.md#constructor)

### Properties

- [masa](MasaSoulName.md#masa)

### Methods

- [burn](MasaSoulName.md#burn)
- [create](MasaSoulName.md#create)
- [getRegistrationPrice](MasaSoulName.md#getregistrationprice)
- [list](MasaSoulName.md#list)
- [loadSoulNameByName](MasaSoulName.md#loadsoulnamebyname)
- [loadSoulNameByTokenId](MasaSoulName.md#loadsoulnamebytokenid)
- [loadSoulNamesByIdentityId](MasaSoulName.md#loadsoulnamesbyidentityid)
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

## Properties

### masa

• `Private` **masa**: [`Masa`](Masa.md)

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

▸ **create**(`soulName`, `duration`, `paymentMethod`): `Promise`<[`CreateSoulNameResult`](../interfaces/CreateSoulNameResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `soulName` | `string` |
| `duration` | `number` |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |

#### Returns

`Promise`<[`CreateSoulNameResult`](../interfaces/CreateSoulNameResult.md)\>

___

### getRegistrationPrice

▸ **getRegistrationPrice**(`soulName`, `duration`, `paymentMethod`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `soulName` | `string` |
| `duration` | `number` |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |

#### Returns

`Promise`<`BigNumber`\>

___

### list

▸ **list**(`address?`): `Promise`<{ `index`: `number` ; `metadata`: `undefined` \| [`ISoulName`](../interfaces/ISoulName.md) ; `owner`: `undefined` \| `string` ; `tokenDetails`: `undefined` \| [`string`, `boolean`, `BigNumber`, `BigNumber`, `BigNumber`, `boolean`] & { `active`: `boolean` ; `expirationDate`: `BigNumber` ; `identityId`: `BigNumber` ; `linked`: `boolean` ; `sbtName`: `string` ; `tokenId`: `BigNumber`  } ; `tokenUri`: `undefined` \| `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `string` |

#### Returns

`Promise`<{ `index`: `number` ; `metadata`: `undefined` \| [`ISoulName`](../interfaces/ISoulName.md) ; `owner`: `undefined` \| `string` ; `tokenDetails`: `undefined` \| [`string`, `boolean`, `BigNumber`, `BigNumber`, `BigNumber`, `boolean`] & { `active`: `boolean` ; `expirationDate`: `BigNumber` ; `identityId`: `BigNumber` ; `linked`: `boolean` ; `sbtName`: `string` ; `tokenId`: `BigNumber`  } ; `tokenUri`: `undefined` \| `string`  }[]\>

___

### loadSoulNameByName

▸ **loadSoulNameByName**(`soulName`): `Promise`<`undefined` \| { `metadata`: [`ISoulName`](../interfaces/ISoulName.md) ; `owner`: `string` ; `tokenDetails`: [`string`, `boolean`, `BigNumber`, `BigNumber`, `BigNumber`, `boolean`] & { `active`: `boolean` ; `expirationDate`: `BigNumber` ; `identityId`: `BigNumber` ; `linked`: `boolean` ; `sbtName`: `string` ; `tokenId`: `BigNumber`  } ; `tokenUri`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `soulName` | `string` |

#### Returns

`Promise`<`undefined` \| { `metadata`: [`ISoulName`](../interfaces/ISoulName.md) ; `owner`: `string` ; `tokenDetails`: [`string`, `boolean`, `BigNumber`, `BigNumber`, `BigNumber`, `boolean`] & { `active`: `boolean` ; `expirationDate`: `BigNumber` ; `identityId`: `BigNumber` ; `linked`: `boolean` ; `sbtName`: `string` ; `tokenId`: `BigNumber`  } ; `tokenUri`: `string`  }\>

___

### loadSoulNameByTokenId

▸ **loadSoulNameByTokenId**(`tokenId`): `Promise`<`undefined` \| { `metadata`: [`ISoulName`](../interfaces/ISoulName.md) ; `owner`: `string` ; `tokenDetails`: [`string`, `boolean`, `BigNumber`, `BigNumber`, `BigNumber`, `boolean`] & { `active`: `boolean` ; `expirationDate`: `BigNumber` ; `identityId`: `BigNumber` ; `linked`: `boolean` ; `sbtName`: `string` ; `tokenId`: `BigNumber`  } ; `tokenUri`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `string` \| `BigNumber` |

#### Returns

`Promise`<`undefined` \| { `metadata`: [`ISoulName`](../interfaces/ISoulName.md) ; `owner`: `string` ; `tokenDetails`: [`string`, `boolean`, `BigNumber`, `BigNumber`, `BigNumber`, `boolean`] & { `active`: `boolean` ; `expirationDate`: `BigNumber` ; `identityId`: `BigNumber` ; `linked`: `boolean` ; `sbtName`: `string` ; `tokenId`: `BigNumber`  } ; `tokenUri`: `string`  }\>

___

### loadSoulNamesByIdentityId

▸ **loadSoulNamesByIdentityId**(`identityId`): `Promise`<{ `index`: `number` ; `metadata`: `undefined` \| [`ISoulName`](../interfaces/ISoulName.md) ; `owner`: `undefined` \| `string` ; `tokenDetails`: `undefined` \| [`string`, `boolean`, `BigNumber`, `BigNumber`, `BigNumber`, `boolean`] & { `active`: `boolean` ; `expirationDate`: `BigNumber` ; `identityId`: `BigNumber` ; `linked`: `boolean` ; `sbtName`: `string` ; `tokenId`: `BigNumber`  } ; `tokenUri`: `undefined` \| `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identityId` | `BigNumber` |

#### Returns

`Promise`<{ `index`: `number` ; `metadata`: `undefined` \| [`ISoulName`](../interfaces/ISoulName.md) ; `owner`: `undefined` \| `string` ; `tokenDetails`: `undefined` \| [`string`, `boolean`, `BigNumber`, `BigNumber`, `BigNumber`, `boolean`] & { `active`: `boolean` ; `expirationDate`: `BigNumber` ; `identityId`: `BigNumber` ; `linked`: `boolean` ; `sbtName`: `string` ; `tokenId`: `BigNumber`  } ; `tokenUri`: `undefined` \| `string`  }[]\>

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
