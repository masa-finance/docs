[# Masa SDK
 - v3.4.12](../README.md) / [Exports](../modules.md) / CreditScore

# Class: CreditScore

## Hierarchy

- `MasaSBTModuleBase`

  ↳ **`CreditScore`**

## Table of contents

### Constructors

- [constructor](CreditScore.md#constructor)

### Properties

- [instances](CreditScore.md#instances)
- [masa](CreditScore.md#masa)
- [types](CreditScore.md#types)

### Methods

- [burn](CreditScore.md#burn)
- [checkOrGiveAllowance](CreditScore.md#checkorgiveallowance)
- [createOverrides](CreditScore.md#createoverrides)
- [formatPrice](CreditScore.md#formatprice)
- [getMintPrice](CreditScore.md#getmintprice)
- [getNetworkFeeInformation](CreditScore.md#getnetworkfeeinformation)
- [getPaymentAddress](CreditScore.md#getpaymentaddress)
- [getPrice](CreditScore.md#getprice)
- [loadSBTContract](CreditScore.md#loadsbtcontract)
- [mint](CreditScore.md#mint)
- [sign](CreditScore.md#sign)
- [verify](CreditScore.md#verify)
- [addSlippage](CreditScore.md#addslippage)

## Constructors

### constructor

• **new CreditScore**(`masa`, `instances`)

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

___

### types

• `Readonly` **types**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `MintCreditScore` | { `name`: `string` = "identityId"; `type`: `string` = "uint256" }[] |

## Methods

### burn

▸ **burn**(`creditScoreId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditScoreId` | `BigNumber` |

#### Returns

`Promise`<`boolean`\>

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

### getPrice

▸ **getPrice**(`paymentMethod`, `slippage?`): `Promise`<[`PriceInformation`](../interfaces/PriceInformation.md)\>

gets the price for a credit score

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `undefined` |
| `slippage` | `undefined` \| `number` | `250` |

#### Returns

`Promise`<[`PriceInformation`](../interfaces/PriceInformation.md)\>

___

### loadSBTContract

▸ `Protected` **loadSBTContract**<`Contract`\>(`address`, `factory`): `Promise`<`Contract`\>

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

`Promise`<`Contract`\>

#### Inherited from

MasaSBTModuleBase.loadSBTContract

___

### mint

▸ **mint**(`paymentMethod`, `identityId`, `authorityAddress`, `signatureDate`, `signature`, `slippage?`): `Promise`<`ContractTransaction`\>

purchase credit score

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `undefined` |
| `identityId` | `BigNumber` | `undefined` |
| `authorityAddress` | `string` | `undefined` |
| `signatureDate` | `number` | `undefined` |
| `signature` | `string` | `undefined` |
| `slippage` | `undefined` \| `number` | `250` |

#### Returns

`Promise`<`ContractTransaction`\>

___

### sign

▸ **sign**(`identityId`): `Promise`<`undefined` \| { `authorityAddress`: `string` ; `signature`: `string` ; `signatureDate`: `number`  }\>

Signs a credit score

#### Parameters

| Name | Type |
| :------ | :------ |
| `identityId` | `BigNumber` |

#### Returns

`Promise`<`undefined` \| { `authorityAddress`: `string` ; `signature`: `string` ; `signatureDate`: `number`  }\>

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
