[# Masa SDK
 - v0.9.1](../README.md) / [Exports](../modules.md) / Masa

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
- [identity](Masa.md#identity)
- [metadata](Masa.md#metadata)
- [session](Masa.md#session)
- [soulName](Masa.md#soulname)
- [twoFA](Masa.md#twofa)
- [utils](Masa.md#utils)

## Constructors

### constructor

• **new Masa**(`__namedParameters?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`MasaArgs`](../interfaces/MasaArgs.md) |

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

### identity

• `Readonly` **identity**: [`MasaIdentity`](MasaIdentity.md)

___

### metadata

• **metadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `retrieve` | (`url`: `string`, `additionalHeaders?`: `Record`<`string`, `string`\>) => `Promise`<`undefined` \| [`IIdentity`](../interfaces/IIdentity.md) \| [`ICreditScore`](../interfaces/ICreditScore.md) \| [`I2FA`](../interfaces/I2FA.md)\> |
| `store` | (`soulName`: `string`, `receiver`: `string`, `duration`: `number`) => `Promise`<`undefined` \| { `authorityAddress`: `string` ; `imageResponse`: { `data`: `any` ; `status`: `number` ; `statusText`: `string`  } ; `imageTransaction`: `default` ; `metadataResponse`: { `data`: `any` ; `status`: `number` ; `statusText`: `string`  } ; `metadataTransaction`: `default` ; `signature`: `string`  }\> |

___

### session

• `Readonly` **session**: [`MasaSession`](MasaSession.md)

___

### soulName

• `Readonly` **soulName**: [`MasaSoulName`](MasaSoulName.md)

___

### twoFA

• `Readonly` **twoFA**: [`Masa2FA`](Masa2FA.md)

___

### utils

• **utils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `version` | () => { `contractsVersion`: `string` ; `sdkVersion`: `string`  } |
