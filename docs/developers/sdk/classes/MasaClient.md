[# Masa SDK
 - v3.30.0](../README.md) / [Exports](../modules.md) / MasaClient

# Class: MasaClient

## Hierarchy

- `MasaBase`

  ↳ **`MasaClient`**

## Table of contents

### Constructors

- [constructor](MasaClient.md#constructor)

### Properties

- [\_cookie](MasaClient.md#_cookie)
- [\_middlewareClient](MasaClient.md#_middlewareclient)
- [creditScore](MasaClient.md#creditscore)
- [green](MasaClient.md#green)
- [masa](MasaClient.md#masa)
- [metadata](MasaClient.md#metadata)
- [session](MasaClient.md#session)
- [soulName](MasaClient.md#soulname)

### Accessors

- [cookie](MasaClient.md#cookie)

### Methods

- [get](MasaClient.md#get)
- [patch](MasaClient.md#patch)
- [post](MasaClient.md#post)

## Constructors

### constructor

• **new MasaClient**(`«destructured»`): [`MasaClient`](MasaClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `apiUrl` | `string` |
| › `cookie?` | `string` |
| › `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |

#### Returns

[`MasaClient`](MasaClient.md)

#### Overrides

MasaBase.constructor

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `generate` | () => `Promise`\<`undefined` \| [`GenerateCreditScoreResult`](../interfaces/GenerateCreditScoreResult.md)\> | - |
| `update` | (`transactionHash`: `string`) => `Promise`\<`undefined` \| [`UpdateCreditScoreResult`](../interfaces/UpdateCreditScoreResult.md)\> | - |

___

### green

• **green**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `generate` | (`phoneNumber`: `string`) => `Promise`\<[`GenerateGreenResult`](../interfaces/GenerateGreenResult.md)\> | - |
| `verify` | (`phoneNumber`: `string`, `code`: `string`) => `Promise`\<`undefined` \| [`VerifyGreenResult`](../interfaces/VerifyGreenResult.md)\> | - |

___

### masa

• `Protected` `Readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

MasaBase.masa

___

### metadata

• **metadata**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `get` | (`uri`: `string`, `additionalHeaders?`: `Record`\<`string`, `string`\>) => `Promise`\<`undefined` \| [`IIdentity`](../interfaces/IIdentity.md) \| [`ICreditScore`](../interfaces/ICreditScore.md) \| [`IGreen`](../interfaces/IGreen.md)\> | - |

___

### session

• **session**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `check` | () => `Promise`\<`undefined` \| [`ISession`](../interfaces/ISession.md)\> | - |
| `checkSignature` | (`address`: `string`, `signature`: `string`, `cookie?`: `string`) => `Promise`\<`undefined` \| [`SessionUser`](../interfaces/SessionUser.md)\> | - |
| `getChallenge` | () => `Promise`\<`undefined` \| [`ChallengeResultWithCookie`](../interfaces/ChallengeResultWithCookie.md)\> | - |
| `logout` | () => `Promise`\<`undefined` \| [`LogoutResult`](../interfaces/LogoutResult.md)\> | - |

___

### soulName

• **soulName**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `store` | (`soulName`: `string`, `receiver`: `string`, `duration`: `number`, `style?`: `string`) => `Promise`\<`undefined` \| [`SoulNameMetadataStoreResult`](../interfaces/SoulNameMetadataStoreResult.md) \| [`SoulNameResultBase`](../interfaces/SoulNameResultBase.md)\> | - |

## Accessors

### cookie

• `get` **cookie**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

## Methods

### get

▸ **get**\<`Result`\>(`endpoint`, `silent?`): `Promise`\<\{ `data`: `undefined` \| `Result` ; `status`: `undefined` \| `number` ; `statusText`: `undefined` \| `string`  }\>

#### Type parameters

| Name |
| :------ |
| `Result` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpoint` | `string` | `undefined` |
| `silent` | `boolean` | `false` |

#### Returns

`Promise`\<\{ `data`: `undefined` \| `Result` ; `status`: `undefined` \| `number` ; `statusText`: `undefined` \| `string`  }\>

___

### patch

▸ **patch**\<`Request`, `Result`\>(`endpoint`, `data`, `silent?`): `Promise`\<\{ `data`: `undefined` \| `Result` ; `status`: `undefined` \| `number` ; `statusText`: `undefined` \| `string`  }\>

#### Type parameters

| Name |
| :------ |
| `Request` |
| `Result` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpoint` | `string` | `undefined` |
| `data` | `Request` | `undefined` |
| `silent` | `boolean` | `false` |

#### Returns

`Promise`\<\{ `data`: `undefined` \| `Result` ; `status`: `undefined` \| `number` ; `statusText`: `undefined` \| `string`  }\>

___

### post

▸ **post**\<`Request`, `Result`\>(`endpoint`, `data`, `silent?`): `Promise`\<\{ `data`: `undefined` \| `Result` ; `status`: `undefined` \| `number` ; `statusText`: `undefined` \| `string`  }\>

#### Type parameters

| Name |
| :------ |
| `Request` |
| `Result` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpoint` | `string` | `undefined` |
| `data` | `Request` | `undefined` |
| `silent` | `boolean` | `false` |

#### Returns

`Promise`\<\{ `data`: `undefined` \| `Result` ; `status`: `undefined` \| `number` ; `statusText`: `undefined` \| `string`  }\>
