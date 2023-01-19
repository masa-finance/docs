[# Masa SDK
 - v1.1.0](../README.md) / [Exports](../modules.md) / MasaClient

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

- [allowlistCheck](MasaClient.md#allowlistcheck)
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
- [updateCreditScore](MasaClient.md#updatecreditscore)

## Constructors

### constructor

• **new MasaClient**(`«destructured»`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `apiUrl` | `string` |
| › `cookie?` | `string` |

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

### allowlistCheck

▸ **allowlistCheck**(): `Promise`<`undefined` \| { `endDate`: `string` ; `isActive`: `boolean` ; `success`: `boolean` ; `wallet`: `string`  }\>

#### Returns

`Promise`<`undefined` \| { `endDate`: `string` ; `isActive`: `boolean` ; `success`: `boolean` ; `wallet`: `string`  }\>

___

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

▸ **createCreditScore**(): `Promise`<`undefined` \| { `authorityAddress?`: `string` ; `message`: `string` ; `signature?`: `string` ; `signatureDate?`: `number` ; `status`: `string` ; `success`: `boolean`  }\>

#### Returns

`Promise`<`undefined` \| { `authorityAddress?`: `string` ; `message`: `string` ; `signature?`: `string` ; `signatureDate?`: `number` ; `status`: `string` ; `success`: `boolean`  }\>

___

### creditScoreMint

▸ **creditScoreMint**(`address`, `signature`): `Promise`<`undefined` \| [`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signature` | `string` |

#### Returns

`Promise`<`undefined` \| [`BaseResult`](../interfaces/BaseResult.md)\>

___

### getChallenge

▸ **getChallenge**(): `Promise`<`undefined` \| { `challenge`: `string` ; `cookie?`: `string` ; `expires`: `string`  }\>

#### Returns

`Promise`<`undefined` \| { `challenge`: `string` ; `cookie?`: `string` ; `expires`: `string`  }\>

___

### getMetadata

▸ **getMetadata**(`uri`, `additionalHeaders?`): `Promise`<`undefined` \| [`IIdentity`](../interfaces/IIdentity.md) \| [`ICreditScore`](../interfaces/ICreditScore.md) \| [`I2FA`](../interfaces/I2FA.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |
| `additionalHeaders?` | `Record`<`string`, `string`\> |

#### Returns

`Promise`<`undefined` \| [`IIdentity`](../interfaces/IIdentity.md) \| [`ICreditScore`](../interfaces/ICreditScore.md) \| [`I2FA`](../interfaces/I2FA.md)\>

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

▸ **storeMetadata**(`soulName`, `receiver`, `duration`): `Promise`<`undefined` \| { `authorityAddress`: `string` ; `imageResponse`: { `data`: `any` ; `status`: `number` ; `statusText`: `string`  } ; `imageTransaction`: `default` ; `metadataResponse`: { `data`: `any` ; `status`: `number` ; `statusText`: `string`  } ; `metadataTransaction`: `default` ; `signature`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `soulName` | `string` |
| `receiver` | `string` |
| `duration` | `number` |

#### Returns

`Promise`<`undefined` \| { `authorityAddress`: `string` ; `imageResponse`: { `data`: `any` ; `status`: `number` ; `statusText`: `string`  } ; `imageTransaction`: `default` ; `metadataResponse`: { `data`: `any` ; `status`: `number` ; `statusText`: `string`  } ; `metadataTransaction`: `default` ; `signature`: `string`  }\>

___

### twoFAGenerate

▸ **twoFAGenerate**(`phoneNumber`): `Promise`<`undefined` \| [`BaseResult`](../interfaces/BaseResult.md) & { `status`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `phoneNumber` | `string` |

#### Returns

`Promise`<`undefined` \| [`BaseResult`](../interfaces/BaseResult.md) & { `status`: `string`  }\>

___

### twoFAMint

▸ **twoFAMint**(`address`, `phoneNumber`, `code`, `signature`): `Promise`<`undefined` \| [`BaseResult`](../interfaces/BaseResult.md) & { `status`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `phoneNumber` | `string` |
| `code` | `string` |
| `signature` | `string` |

#### Returns

`Promise`<`undefined` \| [`BaseResult`](../interfaces/BaseResult.md) & { `status`: `string`  }\>

___

### updateCreditScore

▸ **updateCreditScore**(`transactionHash`): `Promise`<`undefined` \| { `message`: `string` ; `signature?`: `string` ; `status`: `string` ; `success`: `boolean`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` |

#### Returns

`Promise`<`undefined` \| { `message`: `string` ; `signature?`: `string` ; `status`: `string` ; `success`: `boolean`  }\>
