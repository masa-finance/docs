[# Masa SDK
 - v1.10.2](../README.md) / [Exports](../modules.md) / MasaClient

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
| `generate` | () => `Promise`<`undefined` \| [`GenerateCreditScoreResult`](../interfaces/GenerateCreditScoreResult.md)\> |
| `update` | (`transactionHash`: `string`) => `Promise`<`undefined` \| [`UpdateCreditScoreResult`](../interfaces/UpdateCreditScoreResult.md)\> |

___

### green

• **green**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `generate` | (`phoneNumber`: `string`) => `Promise`<`undefined` \| [`GenerateGreenResult`](../interfaces/GenerateGreenResult.md)\> |
| `verify` | (`phoneNumber`: `string`, `code`: `string`, `network`: `string`) => `Promise`<`undefined` \| [`VerifyGreenResult`](../interfaces/VerifyGreenResult.md)\> |

___

### metadata

• **metadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | (`uri`: `string`, `additionalHeaders?`: `Record`<`string`, `string`\>) => `Promise`<`undefined` \| [`IGreen`](../interfaces/IGreen.md) \| [`ICreditScore`](../interfaces/ICreditScore.md) \| [`IIdentity`](../interfaces/IIdentity.md)\> |

___

### session

• **session**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | () => `Promise`<`undefined` \| [`ISession`](../interfaces/ISession.md)\> |
| `checkSignature` | (`address`: `string`, `signature`: `string`, `cookie?`: `string`) => `Promise`<`undefined` \| [`SessionUser`](../interfaces/SessionUser.md)\> |
| `getChallenge` | () => `Promise`<`undefined` \| [`GetChallengeResult`](../interfaces/GetChallengeResult.md)\> |
| `logout` | () => `Promise`<`undefined` \| [`LogoutResult`](../interfaces/LogoutResult.md)\> |

___

### soulName

• **soulName**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `store` | (`soulName`: `string`, `receiver`: `string`, `duration`: `number`, `network`: [`NetworkName`](../modules.md#networkname)) => `Promise`<`undefined` \| [`SoulNameMetadataStoreResult`](../interfaces/SoulNameMetadataStoreResult.md)\> |

## Accessors

### cookie

• `get` **cookie**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`
