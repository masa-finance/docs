[**# Masa SDK v3.36.1**](../README.md) • **Docs**

***

[# Masa SDK v3.36.1](../globals.md) / MasaClient

# Class: MasaClient

## Extends

- `MasaBase`

## Constructors

### new MasaClient()

> **new MasaClient**(`__namedParameters`): [`MasaClient`](MasaClient.md)

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.apiUrl**: `string`

• **\_\_namedParameters.cookie?**: `string`

• **\_\_namedParameters.masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Returns

[`MasaClient`](MasaClient.md)

#### Overrides

`MasaBase.constructor`

## Properties

### \_cookie?

> `private` `optional` **\_cookie**: `string`

***

### \_middlewareClient

> `private` **\_middlewareClient**: `AxiosInstance`

***

### creditScore

> **creditScore**: `object`

#### generate()

> **generate**: () => `Promise`\<`undefined` \| [`GenerateCreditScoreResult`](../interfaces/GenerateCreditScoreResult.md)\>

Generates a new credit score

##### Returns

`Promise`\<`undefined` \| [`GenerateCreditScoreResult`](../interfaces/GenerateCreditScoreResult.md)\>

#### update()

> **update**: (`transactionHash`) => `Promise`\<`undefined` \| [`UpdateCreditScoreResult`](../interfaces/UpdateCreditScoreResult.md)\>

Update an existing credit score

##### Parameters

• **transactionHash**: `string`

##### Returns

`Promise`\<`undefined` \| [`UpdateCreditScoreResult`](../interfaces/UpdateCreditScoreResult.md)\>

***

### green

> **green**: `object`

#### generate()

> **generate**: (`phoneNumber`) => `Promise`\<[`GenerateGreenResult`](../interfaces/GenerateGreenResult.md)\>

Generates a new masa green request

##### Parameters

• **phoneNumber**: `string`

##### Returns

`Promise`\<[`GenerateGreenResult`](../interfaces/GenerateGreenResult.md)\>

#### verify()

> **verify**: (`phoneNumber`, `code`) => `Promise`\<`undefined` \| [`VerifyGreenResult`](../interfaces/VerifyGreenResult.md)\>

##### Parameters

• **phoneNumber**: `string`

• **code**: `string`

##### Returns

`Promise`\<`undefined` \| [`VerifyGreenResult`](../interfaces/VerifyGreenResult.md)\>

***

### masa

> `protected` `readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

`MasaBase.masa`

***

### metadata

> **metadata**: `object`

#### get()

> **get**: (`uri`, `additionalHeaders`?) => `Promise`\<`undefined` \| [`IIdentity`](../interfaces/IIdentity.md) \| [`ICreditScore`](../interfaces/ICreditScore.md) \| [`IGreen`](../interfaces/IGreen.md)\>

Retrieve metadata

##### Parameters

• **uri**: `string`

• **additionalHeaders?**: `Record`\<`string`, `string`\>

##### Returns

`Promise`\<`undefined` \| [`IIdentity`](../interfaces/IIdentity.md) \| [`ICreditScore`](../interfaces/ICreditScore.md) \| [`IGreen`](../interfaces/IGreen.md)\>

***

### session

> **session**: `object`

#### check()

> **check**: () => `Promise`\<`undefined` \| [`ISession`](../interfaces/ISession.md)\>

Check session is still alive

##### Returns

`Promise`\<`undefined` \| [`ISession`](../interfaces/ISession.md)\>

#### checkSignature()

> **checkSignature**: (`address`, `signature`, `cookie`?) => `Promise`\<`undefined` \| [`SessionUser`](../interfaces/SessionUser.md)\>

##### Parameters

• **address**: `string`

• **signature**: `string`

• **cookie?**: `string`

##### Returns

`Promise`\<`undefined` \| [`SessionUser`](../interfaces/SessionUser.md)\>

#### getChallenge()

> **getChallenge**: () => `Promise`\<`undefined` \| [`ChallengeResultWithCookie`](../interfaces/ChallengeResultWithCookie.md)\>

Get challenge

##### Returns

`Promise`\<`undefined` \| [`ChallengeResultWithCookie`](../interfaces/ChallengeResultWithCookie.md)\>

#### logout()

> **logout**: () => `Promise`\<`undefined` \| [`LogoutResult`](../interfaces/LogoutResult.md)\>

Logout the current user

##### Returns

`Promise`\<`undefined` \| [`LogoutResult`](../interfaces/LogoutResult.md)\>

***

### soulName

> **soulName**: `object`

#### store()

> **store**: (`soulName`, `receiver`, `duration`, `style`?) => `Promise`\<`undefined` \| [`SoulNameMetadataStoreResult`](../interfaces/SoulNameMetadataStoreResult.md) \| [`SoulNameResultBase`](../interfaces/SoulNameResultBase.md)\>

Store metadata

##### Parameters

• **soulName**: `string`

• **receiver**: `string`

• **duration**: `number`

• **style?**: `string`

##### Returns

`Promise`\<`undefined` \| [`SoulNameMetadataStoreResult`](../interfaces/SoulNameMetadataStoreResult.md) \| [`SoulNameResultBase`](../interfaces/SoulNameResultBase.md)\>

## Accessors

### cookie

> `get` **cookie**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

## Methods

### get()

> **get**\<`Result`\>(`endpoint`, `silent`): `Promise`\<`object`\>

#### Type parameters

• **Result**

#### Parameters

• **endpoint**: `string`

• **silent**: `boolean`= `false`

#### Returns

`Promise`\<`object`\>

##### data

> **data**: `undefined` \| `Result`

##### status

> **status**: `undefined` \| `number`

##### statusText

> **statusText**: `undefined` \| `string`

***

### patch()

> **patch**\<`Request`, `Result`\>(`endpoint`, `data`, `silent`): `Promise`\<`object`\>

#### Type parameters

• **Request**

• **Result**

#### Parameters

• **endpoint**: `string`

• **data**: `Request`

• **silent**: `boolean`= `false`

#### Returns

`Promise`\<`object`\>

##### data

> **data**: `undefined` \| `Result`

##### status

> **status**: `undefined` \| `number`

##### statusText

> **statusText**: `undefined` \| `string`

***

### post()

> **post**\<`Request`, `Result`\>(`endpoint`, `data`, `silent`): `Promise`\<`object`\>

#### Type parameters

• **Request**

• **Result**

#### Parameters

• **endpoint**: `string`

• **data**: `Request`

• **silent**: `boolean`= `false`

#### Returns

`Promise`\<`object`\>

##### data

> **data**: `undefined` \| `Result`

##### status

> **status**: `undefined` \| `number`

##### statusText

> **statusText**: `undefined` \| `string`
