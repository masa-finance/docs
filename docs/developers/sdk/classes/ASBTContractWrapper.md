[# Masa SDK
 - v3.4.12](../README.md) / [Exports](../modules.md) / ASBTContractWrapper

# Class: ASBTContractWrapper<Contract\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTAuthority` |

## Hierarchy

- [`SBTContractWrapper`](SBTContractWrapper.md)<`Contract`\>

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
- [checkOrGiveAllowance](ASBTContractWrapper.md#checkorgiveallowance)
- [createOverrides](ASBTContractWrapper.md#createoverrides)
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

• **new ASBTContractWrapper**<`Contract`\>(`masa`, `instances`, `contract`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTAuthority`<`Contract`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |
| `instances` | [`IIdentityContracts`](../interfaces/IIdentityContracts.md) |
| `contract` | `Contract` |

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

▸ **bulkMint**(`paymentMethod`, `receivers`): `Promise`<`boolean`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |
| `receivers` | `string`[] |

#### Returns

`Promise`<`boolean`[]\>

___

### checkOrGiveAllowance

▸ `Private` **checkOrGiveAllowance**(`paymentAddress`, `paymentMethod`, `spenderAddress`, `price`): `Promise`<`undefined` \| `ContractReceipt`\>

Checks or gives allowance on ERC20 tokens

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentAddress` | `string` |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |
| `spenderAddress` | `string` |
| `price` | `BigNumber` |

#### Returns

`Promise`<`undefined` \| `ContractReceipt`\>

#### Inherited from

[SBTContractWrapper](SBTContractWrapper.md).[checkOrGiveAllowance](SBTContractWrapper.md#checkorgiveallowance)

___

### createOverrides

▸ `Protected` **createOverrides**(`value?`): `Promise`<`PayableOverrides`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `BigNumber` |

#### Returns

`Promise`<`PayableOverrides`\>

#### Inherited from

[SBTContractWrapper](SBTContractWrapper.md).[createOverrides](SBTContractWrapper.md#createoverrides)

___

### formatPrice

▸ `Protected` **formatPrice**(`paymentAddress`, `price`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentAddress` | `string` |
| `price` | `BigNumber` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[SBTContractWrapper](SBTContractWrapper.md).[formatPrice](SBTContractWrapper.md#formatprice)

___

### getMintPrice

▸ `Protected` **getMintPrice**(`paymentMethod`, `contract`, `slippage?`): `Promise`<[`PriceInformation`](../interfaces/PriceInformation.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `undefined` |
| `contract` | `MasaSBT` | `undefined` |
| `slippage` | `undefined` \| `number` | `250` |

#### Returns

`Promise`<[`PriceInformation`](../interfaces/PriceInformation.md)\>

#### Inherited from

[SBTContractWrapper](SBTContractWrapper.md).[getMintPrice](SBTContractWrapper.md#getmintprice)

___

### getNetworkFeeInformation

▸ `Protected` **getNetworkFeeInformation**(): `Promise`<`undefined` \| `FeeData`\>

#### Returns

`Promise`<`undefined` \| `FeeData`\>

#### Inherited from

[SBTContractWrapper](SBTContractWrapper.md).[getNetworkFeeInformation](SBTContractWrapper.md#getnetworkfeeinformation)

___

### getPaymentAddress

▸ `Private` **getPaymentAddress**(`paymentMethod`): `string`

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

▸ **getPrice**(`paymentMethod`, `slippage?`): `Promise`<[`PriceInformation`](../interfaces/PriceInformation.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `undefined` |
| `slippage` | `undefined` \| `number` | `250` |

#### Returns

`Promise`<[`PriceInformation`](../interfaces/PriceInformation.md)\>

#### Inherited from

[SBTContractWrapper](SBTContractWrapper.md).[getPrice](SBTContractWrapper.md#getprice)

___

### loadSBTContract

▸ `Protected` **loadSBTContract**<`Contract`\>(`address`, `factory`): `Promise`<`Contract`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `MasaSBT`<`Contract`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `factory` | [`ContractFactory`](ContractFactory.md) |

#### Returns

`Promise`<`Contract`\>

#### Inherited from

[SBTContractWrapper](SBTContractWrapper.md).[loadSBTContract](SBTContractWrapper.md#loadsbtcontract)

___

### mint

▸ **mint**(`paymentMethod`, `receiver`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |
| `receiver` | `string` |

#### Returns

`Promise`<`boolean`\>

___

### verify

▸ `Protected` **verify**(`errorMessage`, `contract`, `domain`, `types`, `value`, `signature`, `authorityAddress`): `Promise`<`void`\>

verify a signature created during one of the SBT signing flows

#### Parameters

| Name | Type |
| :------ | :------ |
| `errorMessage` | `string` |
| `contract` | `SoulLinker` \| `SoulStore` \| `MasaSBT` \| `MasaSBTSelfSovereign` \| `MasaSBTAuthority` |
| `domain` | `TypedDataDomain` |
| `types` | `Record`<`string`, `TypedDataField`[]\> |
| `value` | `Record`<`string`, `string` \| `number` \| `BigNumber`\> |
| `signature` | `string` |
| `authorityAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[SBTContractWrapper](SBTContractWrapper.md).[verify](SBTContractWrapper.md#verify)

___

### addSlippage

▸ `Static` `Protected` **addSlippage**(`price`, `slippage`): `BigNumber`

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
