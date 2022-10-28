[@masa-finance/masa-sdk](../README.md) / [Exports](../modules.md) / MasaClient

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

## Constructors

### constructor

• **new MasaClient**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.apiUrl` | `string` |
| `__namedParameters.cookie?` | `string` |

#### Defined in

[src/utils/clients/middleware.ts:14](https://github.com/masa-finance/masa-sdk/blob/1a83a00/src/utils/clients/middleware.ts#L14)

## Properties

### cookie

• `Optional` **cookie**: `string`

#### Defined in

[src/utils/clients/middleware.ts:12](https://github.com/masa-finance/masa-sdk/blob/1a83a00/src/utils/clients/middleware.ts#L12)

___

### middlewareClient

• `Private` **middlewareClient**: `AxiosInstance`

#### Defined in

[src/utils/clients/middleware.ts:11](https://github.com/masa-finance/masa-sdk/blob/1a83a00/src/utils/clients/middleware.ts#L11)

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

#### Defined in

[src/utils/clients/middleware.ts:122](https://github.com/masa-finance/masa-sdk/blob/1a83a00/src/utils/clients/middleware.ts#L122)

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

#### Defined in

[src/utils/clients/middleware.ts:153](https://github.com/masa-finance/masa-sdk/blob/1a83a00/src/utils/clients/middleware.ts#L153)

___

### getChallenge

▸ **getChallenge**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/utils/clients/middleware.ts:100](https://github.com/masa-finance/masa-sdk/blob/1a83a00/src/utils/clients/middleware.ts#L100)

___

### getMetadata

▸ **getMetadata**(`uri`): `Promise`<`undefined` \| [`ICreditReport`](../interfaces/ICreditReport.md) \| [`IIdentity`](../interfaces/IIdentity.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |

#### Returns

`Promise`<`undefined` \| [`ICreditReport`](../interfaces/ICreditReport.md) \| [`IIdentity`](../interfaces/IIdentity.md)\>

#### Defined in

[src/utils/clients/middleware.ts:42](https://github.com/masa-finance/masa-sdk/blob/1a83a00/src/utils/clients/middleware.ts#L42)

___

### sessionCheck

▸ **sessionCheck**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/utils/clients/middleware.ts:24](https://github.com/masa-finance/masa-sdk/blob/1a83a00/src/utils/clients/middleware.ts#L24)

___

### sessionLogout

▸ **sessionLogout**(): `Promise`<`undefined` \| { `status`: `string`  }\>

#### Returns

`Promise`<`undefined` \| { `status`: `string`  }\>

#### Defined in

[src/utils/clients/middleware.ts:194](https://github.com/masa-finance/masa-sdk/blob/1a83a00/src/utils/clients/middleware.ts#L194)

___

### storeMetadata

▸ **storeMetadata**(`soulName`): `Promise`<`undefined` \| { `imageResponse`: { `data`: `any` ; `status`: `number` ; `statusText`: `string`  } ; `imageTransaction`: `default` ; `metadataResponse`: { `data`: `any` ; `status`: `number` ; `statusText`: `string`  } ; `metadataTransaction`: `default`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `soulName` | `string` |

#### Returns

`Promise`<`undefined` \| { `imageResponse`: { `data`: `any` ; `status`: `number` ; `statusText`: `string`  } ; `imageTransaction`: `default` ; `metadataResponse`: { `data`: `any` ; `status`: `number` ; `statusText`: `string`  } ; `metadataTransaction`: `default`  }\>

#### Defined in

[src/utils/clients/middleware.ts:57](https://github.com/masa-finance/masa-sdk/blob/1a83a00/src/utils/clients/middleware.ts#L57)
