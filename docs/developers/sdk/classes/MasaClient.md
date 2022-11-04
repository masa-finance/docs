[# Masa SDK
 - v0.2.3](../README.md) / [Exports](../modules.md) / MasaClient

# Class: MasaClient

## Table of contents

### Constructors

- [constructor](MasaClient.md#constructor)

### Properties

- [cookie](MasaClient.md#cookie)
- [middlewareClient](MasaClient.md#middlewareclient)

### Methods

- [checkSignature](MasaClient.md#checksignature)
- [creditScoreMint](MasaClient.md#creditscoremint)
- [getChallenge](MasaClient.md#getchallenge)
- [getMetadata](MasaClient.md#getmetadata)
- [sessionCheck](MasaClient.md#sessioncheck)
- [sessionLogout](MasaClient.md#sessionlogout)
- [storeMetadata](MasaClient.md#storemetadata)
- [twofaMint](MasaClient.md#twofamint)

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

### cookie

• `Optional` **cookie**: `string`

___

### middlewareClient

• `Private` **middlewareClient**: `AxiosInstance`

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

▸ **getMetadata**(`uri`): `Promise`<`undefined` \| [`ICreditReport`](../interfaces/ICreditReport.md) \| [`IIdentity`](../interfaces/IIdentity.md) \| [`I2fa`](../interfaces/I2fa.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |

#### Returns

`Promise`<`undefined` \| [`ICreditReport`](../interfaces/ICreditReport.md) \| [`IIdentity`](../interfaces/IIdentity.md) \| [`I2fa`](../interfaces/I2fa.md)\>

___

### sessionCheck

▸ **sessionCheck**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

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

### twofaMint

▸ **twofaMint**(`address`, `signature`): `Promise`<`undefined` \| { `message`: `string` ; `success`: `boolean` ; `tokenId`: `string` \| `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signature` | `string` |

#### Returns

`Promise`<`undefined` \| { `message`: `string` ; `success`: `boolean` ; `tokenId`: `string` \| `BigNumber`  }\>
