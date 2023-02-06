[# Masa SDK
 - v1.2.1](../README.md) / [Exports](../modules.md) / MasaClient

# Class: MasaClient

## Table of contents

### Constructors

- [constructor](MasaClient.md#constructor)

### Properties

- [\_cookie](MasaClient.md#_cookie)
- [\_middlewareClient](MasaClient.md#_middlewareclient)
- [creditScore](MasaClient.md#creditscore)
- [green](MasaClient.md#green)
- [metadata](MasaClient.md#metadata)
- [session](MasaClient.md#session)
- [soulName](MasaClient.md#soulname)

### Accessors

- [cookie](MasaClient.md#cookie)

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

___

### creditScore

• **creditScore**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | () => `Promise`<`undefined` \| { `authorityAddress?`: `string` ; `message`: `string` ; `signature?`: `string` ; `signatureDate?`: `number` ; `status`: `string` ; `success`: `boolean`  }\> |
| `update` | (`transactionHash`: `string`) => `Promise`<`undefined` \| { `message`: `string` ; `signature?`: `string` ; `status`: `string` ; `success`: `boolean`  }\> |

___

### green

• **green**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `generate` | (`phoneNumber`: `string`) => `Promise`<`undefined` \| [`BaseResult`](../interfaces/BaseResult.md) & { `status`: `string`  }\> |
| `verify` | (`phoneNumber`: `string`, `code`: `string`, `network`: `string`) => `Promise`<`undefined` \| [`BaseResult`](../interfaces/BaseResult.md) & { `authorityAddress?`: `string` ; `signature?`: `string` ; `signatureDate?`: `number` ; `status`: `string`  }\> |

___

### metadata

• **metadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | (`uri`: `string`, `additionalHeaders?`: `Record`<`string`, `string`\>) => `Promise`<`undefined` \| [`IIdentity`](../interfaces/IIdentity.md) \| [`ICreditScore`](../interfaces/ICreditScore.md) \| [`IGreen`](../interfaces/IGreen.md)\> |

___

### session

• **session**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | () => `Promise`<`undefined` \| [`ISession`](../interfaces/ISession.md)\> |
| `checkSignature` | (`address`: `string`, `signature`: `string`, `cookie?`: `string`) => `Promise`<`any`\> |
| `getChallenge` | () => `Promise`<`undefined` \| { `challenge`: `string` ; `cookie?`: `string` ; `expires`: `string`  }\> |
| `logout` | () => `Promise`<`undefined` \| { `status`: `string`  }\> |

___

### soulName

• **soulName**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `store` | (`soulName`: `string`, `receiver`: `string`, `duration`: `number`) => `Promise`<`undefined` \| { `authorityAddress`: `string` ; `imageResponse`: { `data`: `any` ; `status`: `number` ; `statusText`: `string`  } ; `imageTransaction`: `default` ; `metadataResponse`: { `data`: `any` ; `status`: `number` ; `statusText`: `string`  } ; `metadataTransaction`: `default` ; `signature`: `string`  }\> |

## Accessors

### cookie

• `get` **cookie**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`
