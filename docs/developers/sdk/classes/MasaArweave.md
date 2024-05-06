[**Masa SDK v3.36.1**](../README.md) • **Docs**

***

[Masa SDK v3.36.1](../globals.md) / MasaArweave

# Class: MasaArweave

## Extends

- `default`

## Constructors

### new MasaArweave()

> **new MasaArweave**(`config`, `masaConfig`): [`MasaArweave`](MasaArweave.md)

#### Parameters

• **config**: `ApiConfig`

• **masaConfig**: [`MasaConfig`](../interfaces/MasaConfig.md)

#### Returns

[`MasaArweave`](MasaArweave.md)

#### Overrides

`Arweave.constructor`

## Properties

### api

> **api**: `default`

#### Inherited from

`Arweave.api`

***

### ar

> **ar**: `default`

#### Inherited from

`Arweave.ar`

***

### blocks

> **blocks**: `default`

#### Inherited from

`Arweave.blocks`

***

### chunks

> **chunks**: `default`

#### Inherited from

`Arweave.chunks`

***

### masaConfig

> `private` **masaConfig**: [`MasaConfig`](../interfaces/MasaConfig.md)

***

### network

> **network**: `default`

#### Inherited from

`Arweave.network`

***

### silo

> **silo**: `default`

#### Inherited from

`Arweave.silo`

***

### transactions

> **transactions**: `default`

#### Inherited from

`Arweave.transactions`

***

### wallets

> **wallets**: `default`

#### Inherited from

`Arweave.wallets`

***

### crypto

> `static` **crypto**: `default`

#### Inherited from

`Arweave.crypto`

***

### init()

> `static` **init**: (`apiConfig`) => `default`

#### Parameters

• **apiConfig**: `ApiConfig`

#### Returns

`default`

#### Inherited from

`Arweave.init`

***

### utils

> `static` **utils**: `__module`

#### Inherited from

`Arweave.utils`

## Accessors

### crypto

> `get` **crypto**(): `default`

#### Deprecated

#### Returns

`default`

***

### utils

> `get` **utils**(): `__module`

#### Deprecated

#### Returns

`__module`

## Methods

### arql()

> **arql**(`query`): `Promise`\<`string`[]\>

#### Parameters

• **query**: `object`

#### Returns

`Promise`\<`string`[]\>

#### Inherited from

`Arweave.arql`

***

### createSiloTransaction()

> **createSiloTransaction**(`attributes`, `jwk`, `siloUri`): `Promise`\<`default`\>

#### Parameters

• **attributes**: `Partial`\<`CreateTransactionInterface`\>

• **jwk**: `JWKInterface`

• **siloUri**: `string`

#### Returns

`Promise`\<`default`\>

#### Inherited from

`Arweave.createSiloTransaction`

***

### createTransaction()

> **createTransaction**(`attributes`, `jwk`?): `Promise`\<`default`\>

#### Parameters

• **attributes**: `Partial`\<`CreateTransactionInterface`\>

• **jwk?**: `JWKInterface` \| `"use_wallet"`

#### Returns

`Promise`\<`default`\>

#### Inherited from

`Arweave.createTransaction`

***

### getConfig()

> **getConfig**(): `Config`

#### Returns

`Config`

#### Inherited from

`Arweave.getConfig`

***

### loadTransactionData()

> **loadTransactionData**(`txId`, `isString`): `Promise`\<`undefined` \| `object` \| `Uint8Array`\>

#### Parameters

• **txId**: `string`

• **isString**: `boolean`= `true`

#### Returns

`Promise`\<`undefined` \| `object` \| `Uint8Array`\>
