[# Masa SDK
 - v3.21.1](../README.md) / [Exports](../modules.md) / MasaToken

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

- [swap](MasaToken.md#swap)

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
