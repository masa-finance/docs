[# Masa SDK
 - v3.27.1](../README.md) / [Exports](../modules.md) / MasaToken

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

▸ **deposit**(`amount`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` |

#### Returns

`Promise`\<`void`\>

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

▸ **getSwapQuote**(`sendParameters`): `Promise`\<`undefined` \| \{ `gasLimit`: `BigNumber` ; `lzTokenFee`: `BigNumber` ; `nativeFee`: `BigNumber` ; `transactionCost`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sendParameters` | `SendParamStruct` \| `SendParamStruct` \| `SendParamStruct` |

#### Returns

`Promise`\<`undefined` \| \{ `gasLimit`: `BigNumber` ; `lzTokenFee`: `BigNumber` ; `nativeFee`: `BigNumber` ; `transactionCost`: `BigNumber`  }\>

___

### swap

▸ **swap**(`to`, `amount`, `slippage?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`NetworkName`](../modules.md#networkname) |
| `amount` | `string` |
| `slippage?` | `number` |

#### Returns

`Promise`\<`void`\>

___

### withdraw

▸ **withdraw**(`amount`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` |

#### Returns

`Promise`\<`void`\>
