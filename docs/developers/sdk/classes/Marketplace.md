[# Masa SDK
 - v3.24.7](../README.md) / [Exports](../modules.md) / Marketplace

# Class: Marketplace

## Hierarchy

- `MasaModuleBase`

  ↳ **`Marketplace`**

## Table of contents

### Constructors

- [constructor](Marketplace.md#constructor)

### Properties

- [instances](Marketplace.md#instances)
- [masa](Marketplace.md#masa)

### Methods

- [checkOrGiveAllowance](Marketplace.md#checkorgiveallowance)
- [claimAllRewards](Marketplace.md#claimallrewards)
- [createOverrides](Marketplace.md#createoverrides)
- [estimateGasWithSlippage](Marketplace.md#estimategaswithslippage)
- [formatPrice](Marketplace.md#formatprice)
- [getNetworkFeeInformation](Marketplace.md#getnetworkfeeinformation)
- [getPaymentAddress](Marketplace.md#getpaymentaddress)
- [stakeAll](Marketplace.md#stakeall)
- [verify](Marketplace.md#verify)
- [addSlippage](Marketplace.md#addslippage)

## Constructors

### constructor

• **new Marketplace**(`masa`, `instances`): [`Marketplace`](Marketplace.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |
| `instances` | [`IIdentityContracts`](../interfaces/IIdentityContracts.md) |

#### Returns

[`Marketplace`](Marketplace.md)

#### Inherited from

MasaModuleBase.constructor

## Properties

### instances

• `Protected` **instances**: [`IIdentityContracts`](../interfaces/IIdentityContracts.md)

#### Inherited from

MasaModuleBase.instances

___

### masa

• `Protected` `Readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

MasaModuleBase.masa

## Methods

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

MasaModuleBase.checkOrGiveAllowance

___

### claimAllRewards

▸ **claimAllRewards**(): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)[]\>

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)[]\>

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

MasaModuleBase.createOverrides

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

MasaModuleBase.estimateGasWithSlippage

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

MasaModuleBase.formatPrice

___

### getNetworkFeeInformation

▸ **getNetworkFeeInformation**(): `Promise`\<`undefined` \| `FeeData`\>

#### Returns

`Promise`\<`undefined` \| `FeeData`\>

#### Inherited from

MasaModuleBase.getNetworkFeeInformation

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

MasaModuleBase.getPaymentAddress

___

### stakeAll

▸ **stakeAll**(): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)[]\>

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)[]\>

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

MasaModuleBase.verify

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

MasaModuleBase.addSlippage
