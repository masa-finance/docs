[# Masa SDK
 - v3.6.0](../README.md) / [Exports](../modules.md) / Masa

# Class: Masa

## Implements

- [`MasaInterface`](../interfaces/MasaInterface.md)

## Table of contents

### Constructors

- [constructor](Masa.md#constructor)

### Properties

- [account](Masa.md#account)
- [arweave](Masa.md#arweave)
- [asbt](Masa.md#asbt)
- [client](Masa.md#client)
- [config](Masa.md#config)
- [contracts](Masa.md#contracts)
- [creditScore](Masa.md#creditscore)
- [green](Masa.md#green)
- [identity](Masa.md#identity)
- [sbt](Masa.md#sbt)
- [session](Masa.md#session)
- [soulName](Masa.md#soulname)
- [sssbt](Masa.md#sssbt)
- [utils](Masa.md#utils)

### Methods

- [create](Masa.md#create)

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

#### Implementation of

[MasaInterface](../interfaces/MasaInterface.md).[account](../interfaces/MasaInterface.md#account)

___

### arweave

• `Readonly` **arweave**: [`MasaArweave`](MasaArweave.md)

#### Implementation of

[MasaInterface](../interfaces/MasaInterface.md).[arweave](../interfaces/MasaInterface.md#arweave)

___

### asbt

• `Readonly` **asbt**: [`MasaASBT`](MasaASBT.md)

#### Implementation of

[MasaInterface](../interfaces/MasaInterface.md).[asbt](../interfaces/MasaInterface.md#asbt)

___

### client

• `Readonly` **client**: [`MasaClient`](MasaClient.md)

#### Implementation of

[MasaInterface](../interfaces/MasaInterface.md).[client](../interfaces/MasaInterface.md#client)

___

### config

• `Readonly` **config**: [`MasaConfig`](../interfaces/MasaConfig.md)

#### Implementation of

[MasaInterface](../interfaces/MasaInterface.md).[config](../interfaces/MasaInterface.md#config)

___

### contracts

• `Readonly` **contracts**: [`MasaContracts`](MasaContracts.md)

#### Implementation of

[MasaInterface](../interfaces/MasaInterface.md).[contracts](../interfaces/MasaInterface.md#contracts)

___

### creditScore

• `Readonly` **creditScore**: [`MasaCreditScore`](MasaCreditScore.md)

#### Implementation of

[MasaInterface](../interfaces/MasaInterface.md).[creditScore](../interfaces/MasaInterface.md#creditscore)

___

### green

• `Readonly` **green**: [`MasaGreen`](MasaGreen.md)

#### Implementation of

[MasaInterface](../interfaces/MasaInterface.md).[green](../interfaces/MasaInterface.md#green)

___

### identity

• `Readonly` **identity**: [`MasaIdentity`](MasaIdentity.md)

#### Implementation of

[MasaInterface](../interfaces/MasaInterface.md).[identity](../interfaces/MasaInterface.md#identity)

___

### sbt

• `Readonly` **sbt**: [`MasaSBTBase`](MasaSBTBase.md)

#### Implementation of

[MasaInterface](../interfaces/MasaInterface.md).[sbt](../interfaces/MasaInterface.md#sbt)

___

### session

• `Readonly` **session**: [`MasaSession`](MasaSession.md)

#### Implementation of

[MasaInterface](../interfaces/MasaInterface.md).[session](../interfaces/MasaInterface.md#session)

___

### soulName

• `Readonly` **soulName**: [`MasaSoulName`](MasaSoulName.md)

#### Implementation of

[MasaInterface](../interfaces/MasaInterface.md).[soulName](../interfaces/MasaInterface.md#soulname)

___

### sssbt

• `Readonly` **sssbt**: [`MasaSSSBT`](MasaSSSBT.md)

#### Implementation of

[MasaInterface](../interfaces/MasaInterface.md).[sssbt](../interfaces/MasaInterface.md#sssbt)

___

### utils

• **utils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `version` | () => { `contractsVersion`: `string` ; `sdkVersion`: `string`  } |

#### Implementation of

[MasaInterface](../interfaces/MasaInterface.md).[utils](../interfaces/MasaInterface.md#utils)

## Methods

### create

▸ `Static` **create**(`args`): `Promise`<[`Masa`](Masa.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`MasaArgs`](../interfaces/MasaArgs.md) |

#### Returns

`Promise`<[`Masa`](Masa.md)\>
