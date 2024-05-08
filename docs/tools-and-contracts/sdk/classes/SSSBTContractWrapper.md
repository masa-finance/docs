[**Masa SDK v3.36.1**](../README.md) • **Docs**

***

[Masa SDK v3.36.1](../globals.md) / SSSBTContractWrapper

# Class: SSSBTContractWrapper\<Contract\>

## Extends

- [`SBTContractWrapper`](SBTContractWrapper.md)\<`Contract`\>

## Type parameters

• **Contract** *extends* `ReferenceSBTSelfSovereign`

## Constructors

### new SSSBTContractWrapper()

> **new SSSBTContractWrapper**\<`Contract`\>(`masa`, `instances`, `contract`): [`SSSBTContractWrapper`](SSSBTContractWrapper.md)\<`Contract`\>

#### Parameters

• **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

• **instances**: [`IIdentityContracts`](../interfaces/IIdentityContracts.md)

• **contract**: `Contract`

#### Returns

[`SSSBTContractWrapper`](SSSBTContractWrapper.md)\<`Contract`\>

#### Inherited from

[`SBTContractWrapper`](SBTContractWrapper.md).[`constructor`](SBTContractWrapper.md#constructors)

## Properties

### contract

> `readonly` **contract**: `Contract`

#### Inherited from

[`SBTContractWrapper`](SBTContractWrapper.md).[`contract`](SBTContractWrapper.md#contract)

***

### instances

> `protected` **instances**: [`IIdentityContracts`](../interfaces/IIdentityContracts.md)

#### Inherited from

[`SBTContractWrapper`](SBTContractWrapper.md).[`instances`](SBTContractWrapper.md#instances)

***

### masa

> `protected` `readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

[`SBTContractWrapper`](SBTContractWrapper.md).[`masa`](SBTContractWrapper.md#masa)

***

### types

> `readonly` **types**: `Record`\<`string`, `TypedDataField`[]\>

## Methods

### burn()

> **burn**(`tokenId`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

• **tokenId**: `BigNumber`

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Inherited from

[`SBTContractWrapper`](SBTContractWrapper.md).[`burn`](SBTContractWrapper.md#burn)

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

[`SBTContractWrapper`](SBTContractWrapper.md).[`checkOrGiveAllowance`](SBTContractWrapper.md#checkorgiveallowance)

***

### createOverrides()

> `protected` **createOverrides**(`value`?): `Promise`\<`PayableOverrides`\>

#### Parameters

• **value?**: `BigNumber`

#### Returns

`Promise`\<`PayableOverrides`\>

#### Inherited from

[`SBTContractWrapper`](SBTContractWrapper.md).[`createOverrides`](SBTContractWrapper.md#createoverrides)

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

[`SBTContractWrapper`](SBTContractWrapper.md).[`estimateGasWithSlippage`](SBTContractWrapper.md#estimategaswithslippage)

***

### formatPrice()

> `protected` **formatPrice**(`paymentAddress`, `price`): `Promise`\<`string`\>

#### Parameters

• **paymentAddress**: `string`

• **price**: `BigNumber`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`SBTContractWrapper`](SBTContractWrapper.md).[`formatPrice`](SBTContractWrapper.md#formatprice)

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

[`SBTContractWrapper`](SBTContractWrapper.md).[`getMintPrice`](SBTContractWrapper.md#getmintprice)

***

### getNetworkFeeInformation()

> `protected` **getNetworkFeeInformation**(): `Promise`\<`undefined` \| `FeeData`\>

#### Returns

`Promise`\<`undefined` \| `FeeData`\>

#### Inherited from

[`SBTContractWrapper`](SBTContractWrapper.md).[`getNetworkFeeInformation`](SBTContractWrapper.md#getnetworkfeeinformation)

***

### getPaymentAddress()

> `private` **getPaymentAddress**(`paymentMethod`): `string`

Gets the payment address for a given payment method

#### Parameters

• **paymentMethod**: [`PaymentMethod`](../type-aliases/PaymentMethod.md)

#### Returns

`string`

#### Inherited from

[`SBTContractWrapper`](SBTContractWrapper.md).[`getPaymentAddress`](SBTContractWrapper.md#getpaymentaddress)

***

### getPrice()

> **getPrice**(`paymentMethod`, `slippage`): `Promise`\<[`PriceInformation`](../interfaces/PriceInformation.md)\>

#### Parameters

• **paymentMethod**: [`PaymentMethod`](../type-aliases/PaymentMethod.md)

• **slippage**: `undefined` \| `number`= `250`

#### Returns

`Promise`\<[`PriceInformation`](../interfaces/PriceInformation.md)\>

#### Inherited from

[`SBTContractWrapper`](SBTContractWrapper.md).[`getPrice`](SBTContractWrapper.md#getprice)

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

[`SBTContractWrapper`](SBTContractWrapper.md).[`loadSBTContract`](SBTContractWrapper.md#loadsbtcontract)

***

### mint()

> **mint**(`paymentMethod`, `receiver`, `signature`, `signatureDate`, `authorityAddress`): `Promise`\<[`BaseResultWithTokenId`](../interfaces/BaseResultWithTokenId.md)\>

#### Parameters

• **paymentMethod**: [`PaymentMethod`](../type-aliases/PaymentMethod.md)

• **receiver**: `string`

• **signature**: `string`

• **signatureDate**: `number`

• **authorityAddress**: `string`

#### Returns

`Promise`\<[`BaseResultWithTokenId`](../interfaces/BaseResultWithTokenId.md)\>

***

### prepareMint()

> `protected` **prepareMint**(`paymentMethod`, `name`, `types`, `value`, `signature`, `authorityAddress`, `slippage`): `Promise`\<[`PriceInformation`](../interfaces/PriceInformation.md)\>

#### Parameters

• **paymentMethod**: [`PaymentMethod`](../type-aliases/PaymentMethod.md)

• **name**: `string`

• **types**: `Record`\<`string`, `TypedDataField`[]\>

• **value**: `Record`\<`string`, `string` \| `number` \| `BigNumber`\>

• **signature**: `string`

• **authorityAddress**: `string`

• **slippage**: `undefined` \| `number`= `250`

#### Returns

`Promise`\<[`PriceInformation`](../interfaces/PriceInformation.md)\>

***

### sign()

> **sign**(`name`, `types`, `value`): `Promise`\<`object`\>

Signs an SBT based on its address

#### Parameters

• **name**: `string`

• **types**: `Record`\<`string`, `TypedDataField`[]\>

• **value**: `Record`\<`string`, `string` \| `number` \| `BigNumber`\>

#### Returns

`Promise`\<`object`\>

##### authorityAddress

> **authorityAddress**: `string`

##### signature

> **signature**: `string`

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

[`SBTContractWrapper`](SBTContractWrapper.md).[`verify`](SBTContractWrapper.md#verify)

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

[`SBTContractWrapper`](SBTContractWrapper.md).[`addSlippage`](SBTContractWrapper.md#addslippage)
