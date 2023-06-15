[# Masa SDK
 - v3.4.2](../README.md) / [Exports](../modules.md) / MasaModuleBase

# Class: MasaModuleBase

## Hierarchy

- [`MasaBase`](MasaBase.md)

  ↳ **`MasaModuleBase`**

  ↳↳ [`CreditScore`](CreditScore.md)

  ↳↳ [`Green`](Green.md)

  ↳↳ [`Identity`](Identity.md)

  ↳↳ [`SBTContract`](SBTContract.md)

  ↳↳ [`SoulLinker`](SoulLinker.md)

  ↳↳ [`SoulName`](SoulName.md)

## Table of contents

### Constructors

- [constructor](MasaModuleBase.md#constructor)

### Properties

- [instances](MasaModuleBase.md#instances)
- [masa](MasaModuleBase.md#masa)

### Methods

- [checkOrGiveAllowance](MasaModuleBase.md#checkorgiveallowance)
- [formatPrice](MasaModuleBase.md#formatprice)
- [getMintPrice](MasaModuleBase.md#getmintprice)
- [getNetworkFeeInformation](MasaModuleBase.md#getnetworkfeeinformation)
- [getPaymentAddress](MasaModuleBase.md#getpaymentaddress)
- [verify](MasaModuleBase.md#verify)
- [addSlippage](MasaModuleBase.md#addslippage)
- [loadSBTContract](MasaModuleBase.md#loadsbtcontract)

## Constructors

### constructor

• **new MasaModuleBase**(`masa`, `instances`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |
| `instances` | [`IIdentityContracts`](../interfaces/IIdentityContracts.md) |

#### Overrides

[MasaBase](MasaBase.md).[constructor](MasaBase.md#constructor)

## Properties

### instances

• `Protected` **instances**: [`IIdentityContracts`](../interfaces/IIdentityContracts.md)

___

### masa

• `Protected` `Readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

[MasaBase](MasaBase.md).[masa](MasaBase.md#masa)

## Methods

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

___

### getMintPrice

▸ `Protected` **getMintPrice**(`paymentMethod`, `contract`, `slippage?`): `Promise`<{ `formattedMintFee`: `string` ; `formattedPrice`: `string` ; `formattedProtocolFee`: `string` ; `mintFee`: `BigNumber` ; `paymentAddress`: `string` ; `price`: `BigNumber` ; `protocolFee`: `BigNumber`  }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `undefined` |
| `contract` | `MasaSBTSelfSovereign` \| `MasaSBTAuthority` \| `MasaSBT` | `undefined` |
| `slippage` | `undefined` \| `number` | `250` |

#### Returns

`Promise`<{ `formattedMintFee`: `string` ; `formattedPrice`: `string` ; `formattedProtocolFee`: `string` ; `mintFee`: `BigNumber` ; `paymentAddress`: `string` ; `price`: `BigNumber` ; `protocolFee`: `BigNumber`  }\>

___

### getNetworkFeeInformation

▸ `Protected` **getNetworkFeeInformation**(): `Promise`<`undefined` \| `FeeData`\>

#### Returns

`Promise`<`undefined` \| `FeeData`\>

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

___

### verify

▸ `Protected` **verify**(`errorMessage`, `contract`, `domain`, `types`, `value`, `signature`, `authorityAddress`): `Promise`<`void`\>

verify a signature created during one of the SBT signing flows

#### Parameters

| Name | Type |
| :------ | :------ |
| `errorMessage` | `string` |
| `contract` | `SoulLinker` \| `SoulStore` \| `MasaSBTSelfSovereign` \| `MasaSBTAuthority` \| `MasaSBT` |
| `domain` | `TypedDataDomain` |
| `types` | `Record`<`string`, `TypedDataField`[]\> |
| `value` | `Record`<`string`, `string` \| `number` \| `BigNumber`\> |
| `signature` | `string` |
| `authorityAddress` | `string` |

#### Returns

`Promise`<`void`\>

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

___

### loadSBTContract

▸ `Static` `Protected` **loadSBTContract**<`Contract`\>(`masaConfig`, `address`, `factory`): `Promise`<`Contract`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `MasaSBTSelfSovereign` \| `MasaSBTAuthority` \| `MasaSBT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `masaConfig` | [`MasaConfig`](../interfaces/MasaConfig.md) |
| `address` | `string` |
| `factory` | [`ContractFactory`](ContractFactory.md) |

#### Returns

`Promise`<`Contract`\>
