[# Masa SDK
 - v0.6.5](../README.md) / [Exports](../modules.md) / MasaClient

# Class: MasaClient

## Table of contents

### Constructors

- [constructor](MasaClient.md#constructor)

### Properties

- [\_cookie](MasaClient.md#_cookie)
- [\_middlewareClient](MasaClient.md#_middlewareclient)

### Accessors

- [cookie](MasaClient.md#cookie)

### Methods

- [checkSignature](MasaClient.md#checksignature)
- [createCreditScore](MasaClient.md#createcreditscore)
- [creditScoreMint](MasaClient.md#creditscoremint)
- [getChallenge](MasaClient.md#getchallenge)
- [getMetadata](MasaClient.md#getmetadata)
- [sessionCheck](MasaClient.md#sessioncheck)
- [sessionLogout](MasaClient.md#sessionlogout)
- [storeMetadata](MasaClient.md#storemetadata)
- [twoFAGenerate](MasaClient.md#twofagenerate)
- [twoFAMint](MasaClient.md#twofamint)

## Constructors

### constructor

• **new MasaClient**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.apiUrl` | `string` |
| `__namedParameters.cookie?` | `string` |

## Properties

### \_cookie

• `Private` `Optional` **\_cookie**: `string`

___

### \_middlewareClient

• `Private` **\_middlewareClient**: `AxiosInstance`

## Accessors

### cookie

• `get` **cookie**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

## Methods

### checkSignature

▸ **checkSignature**(`address`, `signature`, `cookie?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signature` | `string` |
| `cookie?` | `string` |

#### Returns

`Promise`<`any`\>

___

### createCreditScore

▸ **createCreditScore**(`address`): `Promise`<`undefined` \| { `creditScore`: `any` ; `signature`: `string`  } \| { `message`: `string` ; `status`: `string` ; `success`: `boolean`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<`undefined` \| { `creditScore`: `any` ; `signature`: `string`  } \| { `message`: `string` ; `status`: `string` ; `success`: `boolean`  }\>

___

### creditScoreMint

▸ **creditScoreMint**(`address`, `signature`): `Promise`<`undefined` \| { `message`: `string` ; `success`: `boolean` ; `tokenId`: `string` \| `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signature` | `string` |

#### Returns

`Promise`<`undefined` \| { `message`: `string` ; `success`: `boolean` ; `tokenId`: `string` \| `BigNumber`  }\>

___

### getChallenge

▸ **getChallenge**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

___

### getMetadata

▸ **getMetadata**(`uri`): `Promise`<`undefined` \| [`ICreditScore`](../interfaces/ICreditScore.md) \| [`IIdentity`](../interfaces/IIdentity.md) \| [`I2FA`](../interfaces/I2FA.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |

#### Returns

`Promise`<`undefined` \| [`ICreditScore`](../interfaces/ICreditScore.md) \| [`IIdentity`](../interfaces/IIdentity.md) \| [`I2FA`](../interfaces/I2FA.md)\>

___

### sessionCheck

▸ **sessionCheck**(): `Promise`<`undefined` \| [`ISession`](../interfaces/ISession.md)\>

#### Returns

`Promise`<`undefined` \| [`ISession`](../interfaces/ISession.md)\>

___

### sessionLogout

▸ **sessionLogout**(): `Promise`<`undefined` \| { `status`: `string`  }\>

#### Returns

`Promise`<`undefined` \| { `status`: `string`  }\>

___

### storeMetadata

▸ **storeMetadata**(`soulName`): `Promise`<`undefined` \| { `imageResponse`: { `data`: `any` ; `status`: `number` ; `statusText`: `string`  } ; `imageTransaction`: `default` ; `metadataResponse`: { `data`: `any` ; `status`: `number` ; `statusText`: `string`  } ; `metadataTransaction`: `default`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `soulName` | `string` |

#### Returns

`Promise`<`undefined` \| { `imageResponse`: { `data`: `any` ; `status`: `number` ; `statusText`: `string`  } ; `imageTransaction`: `default` ; `metadataResponse`: { `data`: `any` ; `status`: `number` ; `statusText`: `string`  } ; `metadataTransaction`: `default`  }\>

___

### twoFAGenerate

▸ **twoFAGenerate**(`phoneNumber`): `Promise`<`undefined` \| { `message`: `string` ; `status`: `string` ; `success`: `boolean`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `phoneNumber` | `string` |

#### Returns

`Promise`<`undefined` \| { `message`: `string` ; `status`: `string` ; `success`: `boolean`  }\>

___

### twoFAMint

▸ **twoFAMint**(`address`, `phoneNumber`, `code`, `signature`): `Promise`<`undefined` \| { `message`: `string` ; `status`: `string` ; `success`: `boolean` ; `tokenId`: `string` \| `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `phoneNumber` | `string` |
| `code` | `string` |
| `signature` | `string` |

#### Returns

`Promise`<`undefined` \| { `message`: `string` ; `status`: `string` ; `success`: `boolean` ; `tokenId`: `string` \| `BigNumber`  }\>
