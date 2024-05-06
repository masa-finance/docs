[**# Masa SDK v3.36.1**](../README.md) • **Docs**

***

[# Masa SDK v3.36.1](../globals.md) / CreditScore

# Class: CreditScore

## Extends

- [`MasaSBTModuleBase`](MasaSBTModuleBase.md)

## Constructors

### new CreditScore()

> **new CreditScore**(`masa`, `instances`): [`CreditScore`](CreditScore.md)

#### Parameters

• **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

• **instances**: [`IIdentityContracts`](../interfaces/IIdentityContracts.md)

#### Returns

[`CreditScore`](CreditScore.md)

#### Inherited from

[`MasaSBTModuleBase`](MasaSBTModuleBase.md).[`constructor`](MasaSBTModuleBase.md#constructors)

## Properties

### instances

> `protected` **instances**: [`IIdentityContracts`](../interfaces/IIdentityContracts.md)

#### Inherited from

[`MasaSBTModuleBase`](MasaSBTModuleBase.md).[`instances`](MasaSBTModuleBase.md#instances)

***

### masa

> `protected` `readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

[`MasaSBTModuleBase`](MasaSBTModuleBase.md).[`masa`](MasaSBTModuleBase.md#masa)

***

### types

> `readonly` **types**: `Record`\<`string`, `TypedDataField`[]\>

## Methods

### burn()

> **burn**(`creditScoreId`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

• **creditScoreId**: `BigNumber`

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

***

### checkOrGiveAllowance()

> `private` **checkOrGiveAllowance**(`paymentAddress`, `paymentMethod`, `spenderAddress`, `price`): `Promise`\<`undefined` \| `ContractReceipt`\>

Checks or gives allowance on ERC20 tokens

#### Parameters

• **paymentAddress**: `string`

• **paymentMethod**: [`PaymentMethod`](../type-aliases/PaymentMethod.md)

• **spenderAddress**: `string`

• **price**: `BigNumber`

#### Returns

`Promise`\<`undefined` \| `ContractReceipt`\>

#### Inherited from

[`MasaSBTModuleBase`](MasaSBTModuleBase.md).[`checkOrGiveAllowance`](MasaSBTModuleBase.md#checkorgiveallowance)

***

### createOverrides()

> `protected` **createOverrides**(`value`?): `Promise`\<`PayableOverrides`\>

#### Parameters

• **value?**: `BigNumber`

#### Returns

`Promise`\<`PayableOverrides`\>

#### Inherited from

[`MasaSBTModuleBase`](MasaSBTModuleBase.md).[`createOverrides`](MasaSBTModuleBase.md#createoverrides)

***

### estimateGasWithSlippage()

> `protected` **estimateGasWithSlippage**(`estimateGas`, `args`?, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

• **estimateGas**

• **args?**: `unknown`[]

• **overrides?**: `PayableOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[`MasaSBTModuleBase`](MasaSBTModuleBase.md).[`estimateGasWithSlippage`](MasaSBTModuleBase.md#estimategaswithslippage)

***

### formatPrice()

> `protected` **formatPrice**(`paymentAddress`, `price`): `Promise`\<`string`\>

#### Parameters

• **paymentAddress**: `string`

• **price**: `BigNumber`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`MasaSBTModuleBase`](MasaSBTModuleBase.md).[`formatPrice`](MasaSBTModuleBase.md#formatprice)

***

### getMintPrice()

> `protected` **getMintPrice**(`paymentMethod`, `contract`, `slippage`): `Promise`\<[`PriceInformation`](../interfaces/PriceInformation.md)\>

#### Parameters

• **paymentMethod**: [`PaymentMethod`](../type-aliases/PaymentMethod.md)

• **contract**: `MasaSBT`

• **slippage**: `undefined` \| `number`= `250`

#### Returns

`Promise`\<[`PriceInformation`](../interfaces/PriceInformation.md)\>

#### Inherited from

[`MasaSBTModuleBase`](MasaSBTModuleBase.md).[`getMintPrice`](MasaSBTModuleBase.md#getmintprice)

***

### getNetworkFeeInformation()

> `protected` **getNetworkFeeInformation**(): `Promise`\<`undefined` \| `FeeData`\>

#### Returns

`Promise`\<`undefined` \| `FeeData`\>

#### Inherited from

[`MasaSBTModuleBase`](MasaSBTModuleBase.md).[`getNetworkFeeInformation`](MasaSBTModuleBase.md#getnetworkfeeinformation)

***

### getPaymentAddress()

> `private` **getPaymentAddress**(`paymentMethod`): `string`

Gets the payment address for a given payment method

#### Parameters

• **paymentMethod**: [`PaymentMethod`](../type-aliases/PaymentMethod.md)

#### Returns

`string`

#### Inherited from

[`MasaSBTModuleBase`](MasaSBTModuleBase.md).[`getPaymentAddress`](MasaSBTModuleBase.md#getpaymentaddress)

***

### getPrice()

> **getPrice**(`paymentMethod`, `slippage`): `Promise`\<[`PriceInformation`](../interfaces/PriceInformation.md)\>

gets the price for a credit score

#### Parameters

• **paymentMethod**: [`PaymentMethod`](../type-aliases/PaymentMethod.md)

• **slippage**: `undefined` \| `number`= `250`

#### Returns

`Promise`\<[`PriceInformation`](../interfaces/PriceInformation.md)\>

***

### loadSBTContract()

> `protected` **loadSBTContract**\<`Contract`\>(`address`, `factory`): `Promise`\<`Contract`\>

#### Type parameters

• **Contract** *extends* `MasaSBT`

#### Parameters

• **address**: `string`

• **factory**: [`ContractFactory`](ContractFactory.md)

#### Returns

`Promise`\<`Contract`\>

#### Inherited from

[`MasaSBTModuleBase`](MasaSBTModuleBase.md).[`loadSBTContract`](MasaSBTModuleBase.md#loadsbtcontract)

***

### mint()

> **mint**(`paymentMethod`, `identityId`, `authorityAddress`, `signatureDate`, `signature`, `slippage`): `Promise`\<`ContractTransaction`\>

purchase credit score

#### Parameters

• **paymentMethod**: [`PaymentMethod`](../type-aliases/PaymentMethod.md)

• **identityId**: `BigNumber`

• **authorityAddress**: `string`

• **signatureDate**: `number`

• **signature**: `string`

• **slippage**: `undefined` \| `number`= `250`

#### Returns

`Promise`\<`ContractTransaction`\>

***

### sign()

> **sign**(`identityId`): `Promise`\<`undefined` \| `object`\>

Signs a credit score

#### Parameters

• **identityId**: `BigNumber`

#### Returns

`Promise`\<`undefined` \| `object`\>

***

### verify()

> `protected` **verify**(`errorMessage`, `contract`, `domain`, `types`, `value`, `signature`, `authorityAddress`): `Promise`\<`void`\>

verify a signature created during one of the SBT signing flows

#### Parameters

• **errorMessage**: `string`

• **contract**: `SoulLinker` \| `SoulStore` \| `MasaSBT` \| `MasaSBTSelfSovereign` \| `MasaSBTAuthority`

• **domain**: `TypedDataDomain`

• **types**: `Record`\<`string`, `TypedDataField`[]\>

• **value**: `Record`\<`string`, `string` \| `number` \| `boolean` \| `BigNumber`\>

• **signature**: `string`

• **authorityAddress**: `string`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`MasaSBTModuleBase`](MasaSBTModuleBase.md).[`verify`](MasaSBTModuleBase.md#verify)

***

### addSlippage()

> `static` `protected` **addSlippage**(`price`, `slippage`): `BigNumber`

adds a percentage to the price as slippage

#### Parameters

• **price**: `BigNumber`

• **slippage**: `number`

#### Returns

`BigNumber`

#### Inherited from

[`MasaSBTModuleBase`](MasaSBTModuleBase.md).[`addSlippage`](MasaSBTModuleBase.md#addslippage)
