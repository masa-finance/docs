[# Masa SDK
 - v3.4.11](../README.md) / [Exports](../modules.md) / SSSBTContract

# Class: SSSBTContract

## Hierarchy

- `MasaSBTModuleBase`

  ↳ **`SSSBTContract`**

## Table of contents

### Constructors

- [constructor](SSSBTContract.md#constructor)

### Properties

- [instances](SSSBTContract.md#instances)
- [masa](SSSBTContract.md#masa)

### Methods

- [attach](SSSBTContract.md#attach)
- [checkOrGiveAllowance](SSSBTContract.md#checkorgiveallowance)
- [connect](SSSBTContract.md#connect)
- [createOverrides](SSSBTContract.md#createoverrides)
- [formatPrice](SSSBTContract.md#formatprice)
- [getMintPrice](SSSBTContract.md#getmintprice)
- [getNetworkFeeInformation](SSSBTContract.md#getnetworkfeeinformation)
- [getPaymentAddress](SSSBTContract.md#getpaymentaddress)
- [loadSBTContract](SSSBTContract.md#loadsbtcontract)
- [verify](SSSBTContract.md#verify)
- [addSlippage](SSSBTContract.md#addslippage)

## Constructors

### constructor

• **new SSSBTContract**(`masa`, `instances`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |
| `instances` | [`IIdentityContracts`](../interfaces/IIdentityContracts.md) |

#### Inherited from

MasaSBTModuleBase.constructor

## Properties

### instances

• `Protected` **instances**: [`IIdentityContracts`](../interfaces/IIdentityContracts.md)

#### Inherited from

MasaSBTModuleBase.instances

___

### masa

• `Protected` `Readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

MasaSBTModuleBase.masa

## Methods

### attach

▸ **attach**<`Contract`\>(`contract`): [`SSSBTContractWrapper`](SSSBTContractWrapper.md)<`Contract`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTSelfSovereign`<`Contract`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `Contract` |

#### Returns

[`SSSBTContractWrapper`](SSSBTContractWrapper.md)<`Contract`\>

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

MasaSBTModuleBase.checkOrGiveAllowance

___

### connect

▸ **connect**<`Contract`\>(`address`, `factory?`): `Promise`<[`SSSBTContractWrapper`](SSSBTContractWrapper.md)<`Contract`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `ReferenceSBTSelfSovereign`<`Contract`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `address` | `string` | `undefined` |
| `factory` | [`ContractFactory`](ContractFactory.md) | `MasaSBTSelfSovereign__factory` |

#### Returns

`Promise`<[`SSSBTContractWrapper`](SSSBTContractWrapper.md)<`Contract`\>\>

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

MasaSBTModuleBase.createOverrides

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

MasaSBTModuleBase.formatPrice

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

MasaSBTModuleBase.getMintPrice

___

### getNetworkFeeInformation

▸ `Protected` **getNetworkFeeInformation**(): `Promise`<`undefined` \| `FeeData`\>

#### Returns

`Promise`<`undefined` \| `FeeData`\>

#### Inherited from

MasaSBTModuleBase.getNetworkFeeInformation

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

MasaSBTModuleBase.getPaymentAddress

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

MasaSBTModuleBase.loadSBTContract

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

MasaSBTModuleBase.verify

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

MasaSBTModuleBase.addSlippage
