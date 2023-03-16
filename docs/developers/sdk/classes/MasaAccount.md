[# Masa SDK
 - v1.9.5](../README.md) / [Exports](../modules.md) / MasaAccount

# Class: MasaAccount

## Table of contents

### Constructors

- [constructor](MasaAccount.md#constructor)

### Properties

- [mass](MasaAccount.md#mass)

### Methods

- [getBalances](MasaAccount.md#getbalances)

## Constructors

### constructor

• **new MasaAccount**(`mass`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mass` | [`Masa`](Masa.md) |

## Properties

### mass

• `Private` **mass**: [`Masa`](Masa.md)

## Methods

### getBalances

▸ **getBalances**(`address?`): `Promise`<`undefined` \| { `ethBalance`: `BigNumber` ; `identityBalance`: `BigNumber` ; `masaBalance`: `BigNumber` ; `soulNameBalance`: `BigNumber` ; `soulboundCreditScoreBalance`: `BigNumber` ; `soulboundGreenBalance`: `BigNumber` ; `usdcBalance`: `BigNumber` ; `wethBalance`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `string` |

#### Returns

`Promise`<`undefined` \| { `ethBalance`: `BigNumber` ; `identityBalance`: `BigNumber` ; `masaBalance`: `BigNumber` ; `soulNameBalance`: `BigNumber` ; `soulboundCreditScoreBalance`: `BigNumber` ; `soulboundGreenBalance`: `BigNumber` ; `usdcBalance`: `BigNumber` ; `wethBalance`: `BigNumber`  }\>
