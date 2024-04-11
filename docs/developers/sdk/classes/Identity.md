[# Masa SDK
 - v3.30.0](../README.md) / [Exports](../modules.md) / Identity

# Class: Identity

## Hierarchy

- [`MasaSBTModuleBase`](MasaSBTModuleBase.md)

  ↳ **`Identity`**

## Table of contents

### Constructors

- [constructor](Identity.md#constructor)

### Properties

- [instances](Identity.md#instances)
- [masa](Identity.md#masa)

### Methods

- [burn](Identity.md#burn)
- [checkOrGiveAllowance](Identity.md#checkorgiveallowance)
- [createOverrides](Identity.md#createoverrides)
- [estimateGasWithSlippage](Identity.md#estimategaswithslippage)
- [formatPrice](Identity.md#formatprice)
- [getMintPrice](Identity.md#getmintprice)
- [getNetworkFeeInformation](Identity.md#getnetworkfeeinformation)
- [getPaymentAddress](Identity.md#getpaymentaddress)
- [loadSBTContract](Identity.md#loadsbtcontract)
- [purchase](Identity.md#purchase)
- [purchaseIdentityAndName](Identity.md#purchaseidentityandname)
- [verify](Identity.md#verify)
- [addSlippage](Identity.md#addslippage)

## Constructors

### constructor

• **new Identity**(`masa`, `instances`): [`Identity`](Identity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |
| `instances` | [`IIdentityContracts`](../interfaces/IIdentityContracts.md) |

#### Returns

[`Identity`](Identity.md)

#### Inherited from

[MasaSBTModuleBase](MasaSBTModuleBase.md).[constructor](MasaSBTModuleBase.md#constructor)

## Properties

### instances

• `Protected` **instances**: [`IIdentityContracts`](../interfaces/IIdentityContracts.md)

#### Inherited from

[MasaSBTModuleBase](MasaSBTModuleBase.md).[instances](MasaSBTModuleBase.md#instances)

___

### masa

• `Protected` `Readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

[MasaSBTModuleBase](MasaSBTModuleBase.md).[masa](MasaSBTModuleBase.md#masa)

## Methods

### burn

▸ **burn**(`identityId`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identityId` | `BigNumber` |

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

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

[MasaSBTModuleBase](MasaSBTModuleBase.md).[checkOrGiveAllowance](MasaSBTModuleBase.md#checkorgiveallowance)

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

[MasaSBTModuleBase](MasaSBTModuleBase.md).[createOverrides](MasaSBTModuleBase.md#createoverrides)

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

[MasaSBTModuleBase](MasaSBTModuleBase.md).[estimateGasWithSlippage](MasaSBTModuleBase.md#estimategaswithslippage)

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

[MasaSBTModuleBase](MasaSBTModuleBase.md).[formatPrice](MasaSBTModuleBase.md#formatprice)

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

[MasaSBTModuleBase](MasaSBTModuleBase.md).[getMintPrice](MasaSBTModuleBase.md#getmintprice)

___

### getNetworkFeeInformation

▸ **getNetworkFeeInformation**(): `Promise`\<`undefined` \| `FeeData`\>

#### Returns

`Promise`\<`undefined` \| `FeeData`\>

#### Inherited from

[MasaSBTModuleBase](MasaSBTModuleBase.md).[getNetworkFeeInformation](MasaSBTModuleBase.md#getnetworkfeeinformation)

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

[MasaSBTModuleBase](MasaSBTModuleBase.md).[getPaymentAddress](MasaSBTModuleBase.md#getpaymentaddress)

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

[MasaSBTModuleBase](MasaSBTModuleBase.md).[loadSBTContract](MasaSBTModuleBase.md#loadsbtcontract)

___

### purchase

▸ **purchase**(): `Promise`\<`ContractTransaction`\>

purchase only identity

#### Returns

`Promise`\<`ContractTransaction`\>

___

### purchaseIdentityAndName

▸ **purchaseIdentityAndName**(`paymentMethod`, `name`, `nameLength`, `duration?`, `metadataURL`, `authorityAddress`, `signature`): `Promise`\<`ContractTransaction`\>

purchase identity with name

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `undefined` |
| `name` | `string` | `undefined` |
| `nameLength` | `number` | `undefined` |
| `duration` | `number` | `1` |
| `metadataURL` | `string` | `undefined` |
| `authorityAddress` | `string` | `undefined` |
| `signature` | `string` | `undefined` |

#### Returns

`Promise`\<`ContractTransaction`\>

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

[MasaSBTModuleBase](MasaSBTModuleBase.md).[verify](MasaSBTModuleBase.md#verify)

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

[MasaSBTModuleBase](MasaSBTModuleBase.md).[addSlippage](MasaSBTModuleBase.md#addslippage)
