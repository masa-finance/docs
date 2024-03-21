[# Masa SDK
 - v3.23.1](../README.md) / [Exports](../modules.md) / MasaToken

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
