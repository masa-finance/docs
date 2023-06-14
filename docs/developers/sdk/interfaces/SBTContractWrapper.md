[# Masa SDK
 - v3.4.1](../README.md) / [Exports](../modules.md) / SBTContractWrapper

# Interface: SBTContractWrapper<Contract\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `MasaSBT` |

## Hierarchy

- **`SBTContractWrapper`**

  ↳ [`ASBTContractWrapper`](ASBTContractWrapper.md)

  ↳ [`SSSBTContractWrapper`](SSSBTContractWrapper.md)

## Table of contents

### Properties

- [getPrice](SBTContractWrapper.md#getprice)
- [sbtContract](SBTContractWrapper.md#sbtcontract)

## Properties

### getPrice

• **getPrice**: (`paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod), `slippage?`: `number`) => `Promise`<{ `formattedMintFee`: `string` ; `formattedPrice`: `string` ; `formattedProtocolFee`: `string` ; `mintFee`: `BigNumber` ; `paymentAddress`: `string` ; `price`: `BigNumber` ; `protocolFee`: `BigNumber`  }\>

#### Type declaration

▸ (`paymentMethod`, `slippage?`): `Promise`<{ `formattedMintFee`: `string` ; `formattedPrice`: `string` ; `formattedProtocolFee`: `string` ; `mintFee`: `BigNumber` ; `paymentAddress`: `string` ; `price`: `BigNumber` ; `protocolFee`: `BigNumber`  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |
| `slippage?` | `number` |

##### Returns

`Promise`<{ `formattedMintFee`: `string` ; `formattedPrice`: `string` ; `formattedProtocolFee`: `string` ; `mintFee`: `BigNumber` ; `paymentAddress`: `string` ; `price`: `BigNumber` ; `protocolFee`: `BigNumber`  }\>

___

### sbtContract

• **sbtContract**: `Contract`
