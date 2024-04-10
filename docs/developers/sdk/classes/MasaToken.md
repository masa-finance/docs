[# Masa SDK
 - v3.29.0](../README.md) / [Exports](../modules.md) / MasaToken

# Class: MasaToken

## Hierarchy

- `MasaBase`

  ↳ **`MasaToken`**

## Table of contents

### Constructors

- [constructor](MasaToken.md#constructor)

### Properties

- [masa](MasaToken.md#masa)

### Methods

- [deposit](MasaToken.md#deposit)
- [getSwapParameters](MasaToken.md#getswapparameters)
- [getSwapQuote](MasaToken.md#getswapquote)
- [swap](MasaToken.md#swap)
- [withdraw](MasaToken.md#withdraw)

## Constructors

### constructor

• **new MasaToken**(`masa`): [`MasaToken`](MasaToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |

#### Returns

[`MasaToken`](MasaToken.md)

#### Inherited from

MasaBase.constructor

## Properties

### masa

• `Protected` `Readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

MasaBase.masa

## Methods

### deposit

▸ **deposit**(`amount`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` |

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

___

### getSwapParameters

▸ **getSwapParameters**(`eid`, `receiverAddress`, `tokenAmount`, `slippage?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eid` | `EndpointId` |
| `receiverAddress` | `string` |
| `tokenAmount` | `BigNumber` |
| `slippage?` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `sendParameters` | `SendParamStruct` \| `SendParamStruct` \| `SendParamStruct` |
| `slippage` | `number` |

___

### getSwapQuote

▸ **getSwapQuote**(`sendParameters`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md) \| [`QuoteResult`](../interfaces/QuoteResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sendParameters` | `SendParamStruct` \| `SendParamStruct` \| `SendParamStruct` |

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md) \| [`QuoteResult`](../interfaces/QuoteResult.md)\>

___

### swap

▸ **swap**(`to`, `amount`, `slippage?`): `Promise`\<[`SwapResult`](../interfaces/SwapResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`NetworkName`](../modules.md#networkname) |
| `amount` | `string` |
| `slippage?` | `number` |

#### Returns

`Promise`\<[`SwapResult`](../interfaces/SwapResult.md)\>

___

### withdraw

▸ **withdraw**(`amount`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` |

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>
