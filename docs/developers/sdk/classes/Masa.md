[# Masa SDK
 - v1.5.6](../README.md) / [Exports](../modules.md) / Masa

# Class: Masa

## Table of contents

### Constructors

- [constructor](Masa.md#constructor)

### Properties

- [account](Masa.md#account)
- [arweave](Masa.md#arweave)
- [client](Masa.md#client)
- [config](Masa.md#config)
- [contracts](Masa.md#contracts)
- [creditScore](Masa.md#creditscore)
- [green](Masa.md#green)
- [identity](Masa.md#identity)
- [metadata](Masa.md#metadata)
- [session](Masa.md#session)
- [soulName](Masa.md#soulname)
- [utils](Masa.md#utils)

## Constructors

### constructor

• **new Masa**(`«destructured»`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`MasaArgs`](../interfaces/MasaArgs.md) |

## Properties

### account

• `Readonly` **account**: [`MasaAccount`](MasaAccount.md)

___

### arweave

• `Readonly` **arweave**: [`MasaArweave`](MasaArweave.md)

___

### client

• `Readonly` **client**: [`MasaClient`](MasaClient.md)

___

### config

• `Readonly` **config**: [`MasaConfig`](../interfaces/MasaConfig.md)

___

### contracts

• `Readonly` **contracts**: [`MasaContracts`](MasaContracts.md)

___

### creditScore

• `Readonly` **creditScore**: [`MasaCreditScore`](MasaCreditScore.md)

___

### green

• `Readonly` **green**: [`MasaGreen`](MasaGreen.md)

___

### identity

• `Readonly` **identity**: [`MasaIdentity`](MasaIdentity.md)

___

### metadata

• **metadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `retrieve` | (`url`: `string`, `additionalHeaders?`: `Record`<`string`, `string`\>) => `Promise`<`undefined` \| [`IIdentity`](../interfaces/IIdentity.md) \| [`ICreditScore`](../interfaces/ICreditScore.md) \| [`IGreen`](../interfaces/IGreen.md)\> |
| `store` | (`soulName`: `string`, `receiver`: `string`, `duration`: `number`) => `Promise`<`undefined` \| [`SoulNameMetadataStoreResult`](../interfaces/SoulNameMetadataStoreResult.md)\> |

___

### session

• `Readonly` **session**: [`MasaSession`](MasaSession.md)

___

### soulName

• `Readonly` **soulName**: [`MasaSoulName`](MasaSoulName.md)

___

### utils

• **utils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `version` | () => { `contractsVersion`: `string` ; `sdkVersion`: `string`  } |
