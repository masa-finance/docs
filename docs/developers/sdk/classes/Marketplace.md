[# Masa SDK
 - v3.23.1](../README.md) / [Exports](../modules.md) / Marketplace

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
- [dataPointsMulti](Marketplace.md#datapointsmulti)
- [estimateGasWithSlippage](Marketplace.md#estimategaswithslippage)
- [formatPrice](Marketplace.md#formatprice)
- [getNetworkFeeInformation](Marketplace.md#getnetworkfeeinformation)
- [getPaymentAddress](Marketplace.md#getpaymentaddress)
- [getRemainingRewards](Marketplace.md#getremainingrewards)
- [name](Marketplace.md#name)
- [owner](Marketplace.md#owner)
- [stakeAll](Marketplace.md#stakeall)
- [stakeInfos](Marketplace.md#stakeinfos)
- [totalRewardsPool](Marketplace.md#totalrewardspool)
- [userStakes](Marketplace.md#userstakes)
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

▸ **claimAllRewards**(): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

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

### dataPointsMulti

▸ **dataPointsMulti**(): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

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

### getRemainingRewards

▸ **getRemainingRewards**(): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

___

### name

▸ **name**(): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

___

### owner

▸ **owner**(): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

___

### stakeAll

▸ **stakeAll**(): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

___

### stakeInfos

▸ **stakeInfos**(`tokenId`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `BigNumber` |

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

___

### totalRewardsPool

▸ **totalRewardsPool**(): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

___

### userStakes

▸ **userStakes**(`userAddress`, `tokenId`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userAddress` | `string` |
| `tokenId` | `BigNumber` |

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

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
