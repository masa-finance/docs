[# Masa SDK
 - v3.32.0](../README.md) / [Exports](../modules.md) / MasaArweave

# Class: MasaArweave

## Hierarchy

- `default`

  ↳ **`MasaArweave`**

## Table of contents

### Constructors

- [constructor](MasaArweave.md#constructor)

### Properties

- [api](MasaArweave.md#api)
- [ar](MasaArweave.md#ar)
- [blocks](MasaArweave.md#blocks)
- [chunks](MasaArweave.md#chunks)
- [masaConfig](MasaArweave.md#masaconfig)
- [network](MasaArweave.md#network)
- [silo](MasaArweave.md#silo)
- [transactions](MasaArweave.md#transactions)
- [wallets](MasaArweave.md#wallets)
- [crypto](MasaArweave.md#crypto)
- [init](MasaArweave.md#init)
- [utils](MasaArweave.md#utils)

### Accessors

- [crypto](MasaArweave.md#crypto-1)
- [utils](MasaArweave.md#utils-1)

### Methods

- [arql](MasaArweave.md#arql)
- [createSiloTransaction](MasaArweave.md#createsilotransaction)
- [createTransaction](MasaArweave.md#createtransaction)
- [getConfig](MasaArweave.md#getconfig)
- [loadTransactionData](MasaArweave.md#loadtransactiondata)

## Constructors

### constructor

• **new MasaArweave**(`config`, `masaConfig`): [`MasaArweave`](MasaArweave.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `ApiConfig` |
| `masaConfig` | [`MasaConfig`](../interfaces/MasaConfig.md) |

#### Returns

[`MasaArweave`](MasaArweave.md)

#### Overrides

Arweave.constructor

## Properties

### api

• **api**: `default`

#### Inherited from

Arweave.api

___

### ar

• **ar**: `default`

#### Inherited from

Arweave.ar

___

### blocks

• **blocks**: `default`

#### Inherited from

Arweave.blocks

___

### chunks

• **chunks**: `default`

#### Inherited from

Arweave.chunks

___

### masaConfig

• `Private` **masaConfig**: [`MasaConfig`](../interfaces/MasaConfig.md)

___

### network

• **network**: `default`

#### Inherited from

Arweave.network

___

### silo

• **silo**: `default`

#### Inherited from

Arweave.silo

___

### transactions

• **transactions**: `default`

#### Inherited from

Arweave.transactions

___

### wallets

• **wallets**: `default`

#### Inherited from

Arweave.wallets

___

### crypto

▪ `Static` **crypto**: `default`

#### Inherited from

Arweave.crypto

___

### init

▪ `Static` **init**: (`apiConfig`: `ApiConfig`) => `default`

#### Type declaration

▸ (`apiConfig`): `default`

##### Parameters

| Name | Type |
| :------ | :------ |
| `apiConfig` | `ApiConfig` |

##### Returns

`default`

#### Inherited from

Arweave.init

___

### utils

▪ `Static` **utils**: `__module`

#### Inherited from

Arweave.utils

## Accessors

### crypto

• `get` **crypto**(): `default`

#### Returns

`default`

**`Deprecated`**

#### Inherited from

Arweave.crypto

___

### utils

• `get` **utils**(): `__module`

#### Returns

`__module`

**`Deprecated`**

#### Inherited from

Arweave.utils

## Methods

### arql

▸ **arql**(`query`): `Promise`\<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `object` |

#### Returns

`Promise`\<`string`[]\>

#### Inherited from

Arweave.arql

___

### createSiloTransaction

▸ **createSiloTransaction**(`attributes`, `jwk`, `siloUri`): `Promise`\<`default`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `Partial`\<`CreateTransactionInterface`\> |
| `jwk` | `JWKInterface` |
| `siloUri` | `string` |

#### Returns

`Promise`\<`default`\>

#### Inherited from

Arweave.createSiloTransaction

___

### createTransaction

▸ **createTransaction**(`attributes`, `jwk?`): `Promise`\<`default`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `Partial`\<`CreateTransactionInterface`\> |
| `jwk?` | `JWKInterface` \| ``"use_wallet"`` |

#### Returns

`Promise`\<`default`\>

#### Inherited from

Arweave.createTransaction

___

### getConfig

▸ **getConfig**(): `Config`

#### Returns

`Config`

#### Inherited from

Arweave.getConfig

___

### loadTransactionData

▸ **loadTransactionData**(`txId`, `isString?`): `Promise`\<`undefined` \| `object` \| `Uint8Array`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `txId` | `string` | `undefined` |
| `isString` | `boolean` | `true` |

#### Returns

`Promise`\<`undefined` \| `object` \| `Uint8Array`\>
