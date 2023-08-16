[# Masa SDK
 - v3.5.8](../README.md) / [Exports](../modules.md) / MasaAccount

# Class: MasaAccount

## Hierarchy

- `MasaBase`

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
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |

#### Inherited from

MasaBase.constructor

## Properties

### masa

• `Protected` `Readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

MasaBase.masa

## Methods

### getBalances

▸ **getBalances**(`address?`): `Promise`<`Partial`<{ `BNB`: `undefined` \| `number` ; `CELO`: `undefined` \| `number` ; `CreditScore`: `undefined` \| `number` ; `ETH`: `undefined` \| `number` ; `G$`: `undefined` \| `number` ; `Green`: `undefined` \| `number` ; `Identity`: `undefined` \| `number` ; `MASA`: `undefined` \| `number` ; `MATIC`: `undefined` \| `number` ; `Native`: `undefined` \| `number` ; `SoulName`: `undefined` \| `number` ; `USDC`: `undefined` \| `number` ; `WETH`: `undefined` \| `number` ; `cUSD`: `undefined` \| `number`  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `string` |

#### Returns

`Promise`<`Partial`<{ `BNB`: `undefined` \| `number` ; `CELO`: `undefined` \| `number` ; `CreditScore`: `undefined` \| `number` ; `ETH`: `undefined` \| `number` ; `G$`: `undefined` \| `number` ; `Green`: `undefined` \| `number` ; `Identity`: `undefined` \| `number` ; `MASA`: `undefined` \| `number` ; `MATIC`: `undefined` \| `number` ; `Native`: `undefined` \| `number` ; `SoulName`: `undefined` \| `number` ; `USDC`: `undefined` \| `number` ; `WETH`: `undefined` \| `number` ; `cUSD`: `undefined` \| `number`  }\>\>
