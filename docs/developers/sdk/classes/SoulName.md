[**Masa SDK v3.36.1**](../README.md) • **Docs**

***

[Masa SDK v3.36.1](../globals.md) / SoulName

# Class: SoulName

## Extends

- `MasaContractModuleBase`

## Constructors

### new SoulName()

> **new SoulName**(`masa`, `instances`): [`SoulName`](SoulName.md)

#### Parameters

• **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

• **instances**: [`IIdentityContracts`](../interfaces/IIdentityContracts.md)

#### Returns

[`SoulName`](SoulName.md)

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

### burn()

> **burn**(`soulName`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

• **soulName**: `string`

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

> **getPrice**(`paymentMethod`, `nameLength`, `duration`, `slippage`): `Promise`\<[`PriceInformation`](../interfaces/PriceInformation.md)\>

Get price for minting a soul name

#### Parameters

• **paymentMethod**: [`PaymentMethod`](../type-aliases/PaymentMethod.md)

• **nameLength**: `number`

• **duration**: `number`= `1`

• **slippage**: `undefined` \| `number`= `250`

#### Returns

`Promise`\<[`PriceInformation`](../interfaces/PriceInformation.md)\>

***

### getSoulnameData()

> **getSoulnameData**(`soulName`): `Promise`\<`object`\>

Returns detailed information for a soul name

#### Parameters

• **soulName**: `string`

#### Returns

`Promise`\<`object`\>

##### exists

> **exists**: `boolean`

##### tokenId

> **tokenId**: `BigNumber`

***

### isAvailable()

> **isAvailable**(`soulName`): `Promise`\<`boolean`\>

Check if a soul name is available

#### Parameters

• **soulName**: `string`

#### Returns

`Promise`\<`boolean`\>

***

### purchase()

> **purchase**(`paymentMethod`, `name`, `nameLength`, `duration`, `metadataURL`, `authorityAddress`, `signature`, `receiver`?): `Promise`\<`ContractTransaction`\>

purchase only name

#### Parameters

• **paymentMethod**: [`PaymentMethod`](../type-aliases/PaymentMethod.md)

• **name**: `string`

• **nameLength**: `number`

• **duration**: `number`= `1`

• **metadataURL**: `string`

• **authorityAddress**: `string`

• **signature**: `string`

• **receiver?**: `string`

#### Returns

`Promise`\<`ContractTransaction`\>

***

### renew()

> **renew**(`soulName`, `years`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

• **soulName**: `string`

• **years**: `number`

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

***

### sign()

> **sign**(`soulName`, `soulNameLength`, `duration`, `metadataUrl`, `receiver`): `Promise`\<`undefined` \| `object`\>

signs a soul name

#### Parameters

• **soulName**: `string`

• **soulNameLength**: `number`

• **duration**: `number`

• **metadataUrl**: `string`

• **receiver**: `string`

#### Returns

`Promise`\<`undefined` \| `object`\>

***

### transfer()

> **transfer**(`soulName`, `receiver`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

• **soulName**: `string`

• **receiver**: `string`

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

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
