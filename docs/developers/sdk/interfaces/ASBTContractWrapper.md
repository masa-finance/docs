[# Masa SDK
 - v3.3.7](../README.md) / [Exports](../modules.md) / ASBTContractWrapper

# Interface: ASBTContractWrapper<Contract\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTAuthority` |

## Hierarchy

- [`SBTContractWrapper`](SBTContractWrapper.md)<`Contract`\>

  ↳ **`ASBTContractWrapper`**

## Table of contents

### Properties

- [getPrice](ASBTContractWrapper.md#getprice)
- [mint](ASBTContractWrapper.md#mint)
- [sbtContract](ASBTContractWrapper.md#sbtcontract)

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

#### Inherited from

[SBTContractWrapper](SBTContractWrapper.md).[getPrice](SBTContractWrapper.md#getprice)

___

### mint

• **mint**: (`paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod), `receiver`: `string`) => `Promise`<`boolean`\>

#### Type declaration

▸ (`paymentMethod`, `receiver`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |
| `receiver` | `string` |

##### Returns

`Promise`<`boolean`\>

___

### sbtContract

• **sbtContract**: `Contract`

#### Inherited from

[SBTContractWrapper](SBTContractWrapper.md).[sbtContract](SBTContractWrapper.md#sbtcontract)
