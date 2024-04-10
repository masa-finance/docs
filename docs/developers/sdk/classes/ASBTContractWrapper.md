[# Masa SDK
 - v3.29.0](../README.md) / [Exports](../modules.md) / ASBTContractWrapper

# Class: ASBTContractWrapper\<Contract\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTAuthority` |

## Hierarchy

- [`SBTContractWrapper`](SBTContractWrapper.md)\<`Contract`\>

  ↳ **`ASBTContractWrapper`**

## Table of contents

### Constructors

- [constructor](ASBTContractWrapper.md#constructor)

### Properties

- [contract](ASBTContractWrapper.md#contract)
- [instances](ASBTContractWrapper.md#instances)
- [masa](ASBTContractWrapper.md#masa)

### Methods

- [bulkMint](ASBTContractWrapper.md#bulkmint)
- [burn](ASBTContractWrapper.md#burn)
- [checkOrGiveAllowance](ASBTContractWrapper.md#checkorgiveallowance)
- [createOverrides](ASBTContractWrapper.md#createoverrides)
- [estimateGasWithSlippage](ASBTContractWrapper.md#estimategaswithslippage)
- [formatPrice](ASBTContractWrapper.md#formatprice)
- [getMintPrice](ASBTContractWrapper.md#getmintprice)
- [getNetworkFeeInformation](ASBTContractWrapper.md#getnetworkfeeinformation)
- [getPaymentAddress](ASBTContractWrapper.md#getpaymentaddress)
- [getPrice](ASBTContractWrapper.md#getprice)
- [loadSBTContract](ASBTContractWrapper.md#loadsbtcontract)
- [mint](ASBTContractWrapper.md#mint)
- [verify](ASBTContractWrapper.md#verify)
- [addSlippage](ASBTContractWrapper.md#addslippage)

## Constructors

### constructor

• **new ASBTContractWrapper**\<`Contract`\>(`masa`, `instances`, `contract`): [`ASBTContractWrapper`](ASBTContractWrapper.md)\<`Contract`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTAuthority` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |
| `instances` | [`IIdentityContracts`](../interfaces/IIdentityContracts.md) |
| `contract` | `Contract` |

#### Returns

[`ASBTContractWrapper`](ASBTContractWrapper.md)\<`Contract`\>

#### Inherited from

[SBTContractWrapper](SBTContractWrapper.md).[constructor](SBTContractWrapper.md#constructor)

## Properties

### contract

• `Readonly` **contract**: `Contract`

#### Inherited from

[SBTContractWrapper](SBTContractWrapper.md).[contract](SBTContractWrapper.md#contract)

___

### instances

• `Protected` **instances**: [`IIdentityContracts`](../interfaces/IIdentityContracts.md)

#### Inherited from

[SBTContractWrapper](SBTContractWrapper.md).[instances](SBTContractWrapper.md#instances)

___

### masa

• `Protected` `Readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

[SBTContractWrapper](SBTContractWrapper.md).[masa](SBTContractWrapper.md#masa)

## Methods

### bulkMint

▸ **bulkMint**(`paymentMethod`, `receivers`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |
| `receivers` | `string`[] |

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)[]\>

___

### burn

▸ **burn**(`tokenId`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `BigNumber` |

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Inherited from

[SBTContractWrapper](SBTContractWrapper.md).[burn](SBTContractWrapper.md#burn)

___

### checkOrGiveAllowance

▸ **checkOrGiveAllowance**(`paymentAddress`, `paymentMethod`, `spenderAddress`, `price`): `Promise`\<`undefined` \| `ContractReceipt`\>

Checks or gives allowance on ERC20 tokens

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentAddress` | `string` |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |
| `spenderAddress` | `string` |
| `price` | `BigNumber` |

#### Returns

`Promise`\<`undefined` \| `ContractReceipt`\>

#### Inherited from

[SBTContractWrapper](SBTContractWrapper.md).[checkOrGiveAllowance](SBTContractWrapper.md#checkorgiveallowance)

___

### createOverrides

▸ **createOverrides**(`value?`): `Promise`\<`PayableOverrides`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `BigNumber` |

#### Returns

`Promise`\<`PayableOverrides`\>

#### Inherited from

[SBTContractWrapper](SBTContractWrapper.md).[createOverrides](SBTContractWrapper.md#createoverrides)

___

### estimateGasWithSlippage

▸ **estimateGasWithSlippage**(`estimateGas`, `args?`, `overrides?`): `Promise`\<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `estimateGas` | (...`estimateGasArgAndOverrides`: `never`[]) => `Promise`\<`BigNumber`\> |
| `args?` | `unknown`[] |
| `overrides?` | `PayableOverrides` |

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[SBTContractWrapper](SBTContractWrapper.md).[estimateGasWithSlippage](SBTContractWrapper.md#estimategaswithslippage)

___

### formatPrice

▸ **formatPrice**(`paymentAddress`, `price`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentAddress` | `string` |
| `price` | `BigNumber` |

#### Returns

`Promise`\<`string`\>

#### Inherited from

[SBTContractWrapper](SBTContractWrapper.md).[formatPrice](SBTContractWrapper.md#formatprice)

___

### getMintPrice

▸ **getMintPrice**(`paymentMethod`, `contract`, `slippage?`): `Promise`\<[`PriceInformation`](../interfaces/PriceInformation.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `undefined` |
| `contract` | `MasaSBT` | `undefined` |
| `slippage` | `undefined` \| `number` | `250` |

#### Returns

`Promise`\<[`PriceInformation`](../interfaces/PriceInformation.md)\>

#### Inherited from

[SBTContractWrapper](SBTContractWrapper.md).[getMintPrice](SBTContractWrapper.md#getmintprice)

___

### getNetworkFeeInformation

▸ **getNetworkFeeInformation**(): `Promise`\<`undefined` \| `FeeData`\>

#### Returns

`Promise`\<`undefined` \| `FeeData`\>

#### Inherited from

[SBTContractWrapper](SBTContractWrapper.md).[getNetworkFeeInformation](SBTContractWrapper.md#getnetworkfeeinformation)

___

### getPaymentAddress

▸ **getPaymentAddress**(`paymentMethod`): `string`

Gets the payment address for a given payment method

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |

#### Returns

`string`

#### Inherited from

[SBTContractWrapper](SBTContractWrapper.md).[getPaymentAddress](SBTContractWrapper.md#getpaymentaddress)

___

### getPrice

▸ **getPrice**(`paymentMethod`, `slippage?`): `Promise`\<[`PriceInformation`](../interfaces/PriceInformation.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `undefined` |
| `slippage` | `undefined` \| `number` | `250` |

#### Returns

`Promise`\<[`PriceInformation`](../interfaces/PriceInformation.md)\>

#### Inherited from

[SBTContractWrapper](SBTContractWrapper.md).[getPrice](SBTContractWrapper.md#getprice)

___

### loadSBTContract

▸ **loadSBTContract**\<`Contract`\>(`address`, `factory`): `Promise`\<`Contract`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `MasaSBT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `factory` | [`ContractFactory`](ContractFactory.md) |

#### Returns

`Promise`\<`Contract`\>

#### Inherited from

[SBTContractWrapper](SBTContractWrapper.md).[loadSBTContract](SBTContractWrapper.md#loadsbtcontract)

___

### mint

▸ **mint**(`paymentMethod`, `receiver`): `Promise`\<[`BaseResultWithTokenId`](../interfaces/BaseResultWithTokenId.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |
| `receiver` | `string` |

#### Returns

`Promise`\<[`BaseResultWithTokenId`](../interfaces/BaseResultWithTokenId.md)\>

___

### verify

▸ **verify**(`errorMessage`, `contract`, `domain`, `types`, `value`, `signature`, `authorityAddress`): `Promise`\<`void`\>

verify a signature created during one of the SBT signing flows

#### Parameters

| Name | Type |
| :------ | :------ |
| `errorMessage` | `string` |
| `contract` | `SoulLinker` \| `SoulStore` \| `MasaSBT` \| `MasaSBTSelfSovereign` \| `MasaSBTAuthority` |
| `domain` | `TypedDataDomain` |
| `types` | `Record`\<`string`, `TypedDataField`[]\> |
| `value` | `Record`\<`string`, `string` \| `number` \| `boolean` \| `BigNumber`\> |
| `signature` | `string` |
| `authorityAddress` | `string` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[SBTContractWrapper](SBTContractWrapper.md).[verify](SBTContractWrapper.md#verify)

___

### addSlippage

▸ **addSlippage**(`price`, `slippage`): `BigNumber`

adds a percentage to the price as slippage

#### Parameters

| Name | Type |
| :------ | :------ |
| `price` | `BigNumber` |
| `slippage` | `number` |

#### Returns

`BigNumber`

#### Inherited from

[SBTContractWrapper](SBTContractWrapper.md).[addSlippage](SBTContractWrapper.md#addslippage)
