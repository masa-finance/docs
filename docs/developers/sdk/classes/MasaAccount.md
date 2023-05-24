[# Masa SDK
 - v3.0.7](../README.md) / [Exports](../modules.md) / MasaAccount

# Class: MasaAccount

## Hierarchy

- [`MasaBase`](MasaBase.md)

  ↳ **`MasaAccount`**

## Table of contents

### Constructors

- [constructor](MasaAccount.md#constructor)

### Properties

- [masa](MasaAccount.md#masa)

### Methods

- [getBalances](MasaAccount.md#getbalances)

## Constructors

### constructor

• **new MasaAccount**(`masa`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](Masa.md) |

#### Inherited from

[MasaBase](MasaBase.md).[constructor](MasaBase.md#constructor)

## Properties

### masa

• `Protected` `Readonly` **masa**: [`Masa`](Masa.md)

#### Inherited from

[MasaBase](MasaBase.md).[masa](MasaBase.md#masa)

## Methods

### getBalances

▸ **getBalances**(`address?`): `Promise`<`Partial`<{ `BNB`: `undefined` \| `number` ; `CELO`: `undefined` \| `number` ; `CreditScore`: `undefined` \| `number` ; `ETH`: `undefined` \| `number` ; `G$`: `undefined` \| `number` ; `Green`: `undefined` \| `number` ; `Identity`: `undefined` \| `number` ; `MASA`: `undefined` \| `number` ; `MATIC`: `undefined` \| `number` ; `Native`: `undefined` \| `number` ; `SoulName`: `undefined` \| `number` ; `USDC`: `undefined` \| `number` ; `WETH`: `undefined` \| `number` ; `cUSD`: `undefined` \| `number`  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `string` |

#### Returns

`Promise`<`Partial`<{ `BNB`: `undefined` \| `number` ; `CELO`: `undefined` \| `number` ; `CreditScore`: `undefined` \| `number` ; `ETH`: `undefined` \| `number` ; `G$`: `undefined` \| `number` ; `Green`: `undefined` \| `number` ; `Identity`: `undefined` \| `number` ; `MASA`: `undefined` \| `number` ; `MATIC`: `undefined` \| `number` ; `Native`: `undefined` \| `number` ; `SoulName`: `undefined` \| `number` ; `USDC`: `undefined` \| `number` ; `WETH`: `undefined` \| `number` ; `cUSD`: `undefined` \| `number`  }\>\>
