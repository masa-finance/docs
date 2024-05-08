[**Masa SDK v3.36.1**](../README.md) • **Docs**

***

[Masa SDK v3.36.1](../globals.md) / SoulLinker

# Class: SoulLinker

## Extends

- `MasaContractModuleBase`

## Constructors

### new SoulLinker()

> **new SoulLinker**(`masa`, `instances`): [`SoulLinker`](SoulLinker.md)

#### Parameters

• **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

• **instances**: [`IIdentityContracts`](../interfaces/IIdentityContracts.md)

#### Returns

[`SoulLinker`](SoulLinker.md)

#### Inherited from

`MasaContractModuleBase.constructor`

## Properties

### instances

> `protected` **instances**: [`IIdentityContracts`](../interfaces/IIdentityContracts.md)

#### Inherited from

`MasaContractModuleBase.instances`

***

### masa

> `protected` `readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

`MasaContractModuleBase.masa`

***

### types

> `readonly` **types**: `Record`\<`string`, `TypedDataField`[]\>

## Methods

### addLink()

> **addLink**(`tokenAddress`, `paymentMethod`, `readerIdentityId`, `ownerIdentityId`, `tokenId`, `signatureDate`, `expirationDate`, `signature`, `slippage`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

Adds a link to the soullinker

#### Parameters

• **tokenAddress**: `string`

• **paymentMethod**: [`PaymentMethod`](../type-aliases/PaymentMethod.md)

• **readerIdentityId**: `BigNumber`

• **ownerIdentityId**: `BigNumber`

• **tokenId**: `BigNumber`

• **signatureDate**: `number`

• **expirationDate**: `number`

• **signature**: `string`

• **slippage**: `undefined` \| `number`= `250`

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

***

### breakLink()

> **breakLink**(`contract`, `tokenId`, `readerIdentityId`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

• **contract**: `Contract`

• **tokenId**: `BigNumber`

• **readerIdentityId**: `BigNumber`

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

`MasaContractModuleBase.checkOrGiveAllowance`

***

### createOverrides()

> `protected` **createOverrides**(`value`?): `Promise`\<`PayableOverrides`\>

#### Parameters

• **value?**: `BigNumber`

#### Returns

`Promise`\<`PayableOverrides`\>

#### Inherited from

`MasaContractModuleBase.createOverrides`

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

`MasaContractModuleBase.estimateGasWithSlippage`

***

### formatPrice()

> `protected` **formatPrice**(`paymentAddress`, `price`): `Promise`\<`string`\>

#### Parameters

• **paymentAddress**: `string`

• **price**: `BigNumber`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`MasaContractModuleBase.formatPrice`

***

### getNetworkFeeInformation()

> `protected` **getNetworkFeeInformation**(): `Promise`\<`undefined` \| `FeeData`\>

#### Returns

`Promise`\<`undefined` \| `FeeData`\>

#### Inherited from

`MasaContractModuleBase.getNetworkFeeInformation`

***

### getPaymentAddress()

> `private` **getPaymentAddress**(`paymentMethod`): `string`

Gets the payment address for a given payment method

#### Parameters

• **paymentMethod**: [`PaymentMethod`](../type-aliases/PaymentMethod.md)

#### Returns

`string`

#### Inherited from

`MasaContractModuleBase.getPaymentAddress`

***

### getPrice()

> **getPrice**(`tokenAddress`, `paymentMethod`, `slippage`): `Promise`\<[`PriceInformation`](../interfaces/PriceInformation.md)\>

Gets price for establishing a link

#### Parameters

• **tokenAddress**: `string`

• **paymentMethod**: [`PaymentMethod`](../type-aliases/PaymentMethod.md)

• **slippage**: `undefined` \| `number`= `250`

#### Returns

`Promise`\<[`PriceInformation`](../interfaces/PriceInformation.md)\>

***

### signLink()

> **signLink**(`readerIdentityId`, `ownerIdentityId`, `tokenAddress`, `tokenId`, `signatureDate`, `expirationOffset`): `Promise`\<`object`\>

Signs a soul linker link

#### Parameters

• **readerIdentityId**: `BigNumber`

• **ownerIdentityId**: `BigNumber`

• **tokenAddress**: `string`

• **tokenId**: `BigNumber`

• **signatureDate**: `number`= `undefined`

• **expirationOffset**: `number`= `undefined`

#### Returns

`Promise`\<`object`\>

##### expirationDate

> **expirationDate**: `number`

##### signature

> **signature**: `string`

##### signatureDate

> **signatureDate**: `number`

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

`MasaContractModuleBase.verify`

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

`MasaContractModuleBase.addSlippage`
