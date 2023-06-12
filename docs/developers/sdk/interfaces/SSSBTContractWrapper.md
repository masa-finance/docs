[# Masa SDK
 - v3.3.0](../README.md) / [Exports](../modules.md) / SSSBTContractWrapper

# Interface: SSSBTContractWrapper<Contract\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `MasaSBTSelfSovereign` |

## Hierarchy

- [`SBTContractWrapper`](SBTContractWrapper.md)<`Contract`\>

  ↳ **`SSSBTContractWrapper`**

## Table of contents

### Properties

- [getPrice](SSSBTContractWrapper.md#getprice)
- [mint](SSSBTContractWrapper.md#mint)
- [prepareMint](SSSBTContractWrapper.md#preparemint)
- [sbtContract](SSSBTContractWrapper.md#sbtcontract)
- [sign](SSSBTContractWrapper.md#sign)

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

• **mint**: (`paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod), `receiver`: `string`, `signature`: `string`, `signatureDate`: `number`, `authorityAddress`: `string`) => `Promise`<`boolean`\>

#### Type declaration

▸ (`paymentMethod`, `receiver`, `signature`, `signatureDate`, `authorityAddress`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |
| `receiver` | `string` |
| `signature` | `string` |
| `signatureDate` | `number` |
| `authorityAddress` | `string` |

##### Returns

`Promise`<`boolean`\>

___

### prepareMint

• **prepareMint**: (`paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod), `name`: `string`, `types`: `Record`<`string`, `TypedDataField`[]\>, `value`: `Record`<`string`, `string` \| `number` \| `BigNumber`\>, `signature`: `string`, `authorityAddress`: `string`, `slippage?`: `number`) => `Promise`<{ `paymentAddress`: `string` ; `price`: `BigNumber`  }\>

#### Type declaration

▸ (`paymentMethod`, `name`, `types`, `value`, `signature`, `authorityAddress`, `slippage?`): `Promise`<{ `paymentAddress`: `string` ; `price`: `BigNumber`  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |
| `name` | `string` |
| `types` | `Record`<`string`, `TypedDataField`[]\> |
| `value` | `Record`<`string`, `string` \| `number` \| `BigNumber`\> |
| `signature` | `string` |
| `authorityAddress` | `string` |
| `slippage?` | `number` |

##### Returns

`Promise`<{ `paymentAddress`: `string` ; `price`: `BigNumber`  }\>

___

### sbtContract

• **sbtContract**: `Contract`

#### Inherited from

[SBTContractWrapper](SBTContractWrapper.md).[sbtContract](SBTContractWrapper.md#sbtcontract)

___

### sign

• **sign**: (`name`: `string`, `types`: `Record`<`string`, `TypedDataField`[]\>, `value`: `Record`<`string`, `string` \| `number` \| `BigNumber`\>) => `Promise`<{ `authorityAddress`: `string` ; `signature`: `string`  }\>

#### Type declaration

▸ (`name`, `types`, `value`): `Promise`<{ `authorityAddress`: `string` ; `signature`: `string`  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `types` | `Record`<`string`, `TypedDataField`[]\> |
| `value` | `Record`<`string`, `string` \| `number` \| `BigNumber`\> |

##### Returns

`Promise`<{ `authorityAddress`: `string` ; `signature`: `string`  }\>
