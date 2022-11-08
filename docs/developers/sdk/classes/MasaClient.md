[# Masa SDK
 - v0.2.6](../README.md) / [Exports](../modules.md) / MasaClient

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

▸ **getMetadata**(`uri`): `Promise`<`undefined` \| [`ICreditReport`](../interfaces/ICreditReport.md) \| [`IIdentity`](../interfaces/IIdentity.md) \| [`I2FA`](../interfaces/I2FA.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |

#### Returns

`Promise`<`undefined` \| [`ICreditReport`](../interfaces/ICreditReport.md) \| [`IIdentity`](../interfaces/IIdentity.md) \| [`I2FA`](../interfaces/I2FA.md)\>

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

▸ **twoFAMint**(`address`, `phoneNumber`, `code`, `signature`): `Promise`<`undefined` \| { `message`: `string` ; `success`: `boolean` ; `tokenId`: `string` \| `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `phoneNumber` | `string` |
| `code` | `string` |
| `signature` | `string` |

#### Returns

`Promise`<`undefined` \| { `message`: `string` ; `success`: `boolean` ; `tokenId`: `string` \| `BigNumber`  }\>
