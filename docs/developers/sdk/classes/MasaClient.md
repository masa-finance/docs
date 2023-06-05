[# Masa SDK
 - v3.1.2](../README.md) / [Exports](../modules.md) / MasaClient

# Class: MasaClient

## Hierarchy

- [`MasaBase`](MasaBase.md)

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

• **new MasaClient**(`«destructured»`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `apiUrl` | `string` |
| › `cookie?` | `string` |
| › `masa` | [`Masa`](Masa.md) |

#### Overrides

[MasaBase](MasaBase.md).[constructor](MasaBase.md#constructor)

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
| `generate` | (`phoneNumber`: `string`) => `Promise`<[`GenerateGreenResult`](../interfaces/GenerateGreenResult.md)\> |
| `verify` | (`phoneNumber`: `string`, `code`: `string`) => `Promise`<`undefined` \| [`VerifyGreenResult`](../interfaces/VerifyGreenResult.md)\> |

___

### masa

• `Protected` `Readonly` **masa**: [`Masa`](Masa.md)

#### Inherited from

[MasaBase](MasaBase.md).[masa](MasaBase.md#masa)

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
| `checkSignature` | (`address`: `string`, `signature`: `string`, `cookie?`: `string`) => `Promise`<`undefined` \| [`SessionUser`](../interfaces/SessionUser.md)\> |
| `getChallenge` | () => `Promise`<`undefined` \| [`ChallengeResultWithCookie`](../interfaces/ChallengeResultWithCookie.md)\> |
| `logout` | () => `Promise`<`undefined` \| [`LogoutResult`](../interfaces/LogoutResult.md)\> |

___

### soulName

• **soulName**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `store` | (`soulName`: `string`, `receiver`: `string`, `duration`: `number`, `style?`: `string`) => `Promise`<`undefined` \| [`SoulNameMetadataStoreResult`](../interfaces/SoulNameMetadataStoreResult.md) \| [`SoulNameResultBase`](../interfaces/SoulNameResultBase.md)\> |

## Accessors

### cookie

• `get` **cookie**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

## Methods

### get

▸ **get**<`Result`\>(`endpoint`, `silent?`): `Promise`<`undefined` \| `Result`\>

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

`Promise`<`undefined` \| `Result`\>

___

### patch

▸ **patch**<`Payload`, `Result`\>(`endpoint`, `data`, `silent?`): `Promise`<`undefined` \| `Result`\>

#### Type parameters

| Name |
| :------ |
| `Payload` |
| `Result` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpoint` | `string` | `undefined` |
| `data` | `Payload` | `undefined` |
| `silent` | `boolean` | `false` |

#### Returns

`Promise`<`undefined` \| `Result`\>

___

### post

▸ **post**<`Payload`, `Result`\>(`endpoint`, `data`, `silent?`): `Promise`<`undefined` \| `Result`\>

#### Type parameters

| Name |
| :------ |
| `Payload` |
| `Result` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpoint` | `string` | `undefined` |
| `data` | `Payload` | `undefined` |
| `silent` | `boolean` | `false` |

#### Returns

`Promise`<`undefined` \| `Result`\>
