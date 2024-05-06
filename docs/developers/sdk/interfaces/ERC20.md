[**# Masa SDK v3.36.1**](../README.md) • **Docs**

***

[# Masa SDK v3.36.1](../globals.md) / ERC20

# Interface: ERC20

## Extends

- `BaseContract`

## Properties

### \_deployedPromise

> **\_deployedPromise**: `Promise`\<`Contract`\>

#### Inherited from

`BaseContract._deployedPromise`

***

### \_runningEvents

> **\_runningEvents**: `object`

#### Index signature

 \[`eventTag`: `string`\]: `RunningEvent`

#### Inherited from

`BaseContract._runningEvents`

***

### \_wrappedEmits

> **\_wrappedEmits**: `object`

#### Index signature

 \[`eventTag`: `string`\]: (...`args`) => `void`

#### Inherited from

`BaseContract._wrappedEmits`

***

### address

> `readonly` **address**: `string`

#### Inherited from

`BaseContract.address`

***

### callStatic

> **callStatic**: `object`

#### allowance()

##### Parameters

• **owner**: `string`

• **spender**: `string`

• **overrides?**: `CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### approve()

##### Parameters

• **spender**: `string`

• **amount**: `BigNumberish`

• **overrides?**: `CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### balanceOf()

##### Parameters

• **account**: `string`

• **overrides?**: `CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### decimals()

##### Parameters

• **overrides?**: `CallOverrides`

##### Returns

`Promise`\<`number`\>

#### decreaseAllowance()

##### Parameters

• **spender**: `string`

• **subtractedValue**: `BigNumberish`

• **overrides?**: `CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### increaseAllowance()

##### Parameters

• **spender**: `string`

• **addedValue**: `BigNumberish`

• **overrides?**: `CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### name()

##### Parameters

• **overrides?**: `CallOverrides`

##### Returns

`Promise`\<`string`\>

#### symbol()

##### Parameters

• **overrides?**: `CallOverrides`

##### Returns

`Promise`\<`string`\>

#### totalSupply()

##### Parameters

• **overrides?**: `CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### transfer()

##### Parameters

• **to**: `string`

• **amount**: `BigNumberish`

• **overrides?**: `CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### transferFrom()

##### Parameters

• **from**: `string`

• **to**: `string`

• **amount**: `BigNumberish`

• **overrides?**: `CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### Overrides

`BaseContract.callStatic`

***

### deployTransaction

> `readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

`BaseContract.deployTransaction`

***

### estimateGas

> **estimateGas**: `object`

#### allowance()

##### Parameters

• **owner**: `string`

• **spender**: `string`

• **overrides?**: `CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### approve()

##### Parameters

• **spender**: `string`

• **amount**: `BigNumberish`

• **overrides?**: `Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### balanceOf()

##### Parameters

• **account**: `string`

• **overrides?**: `CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### decimals()

##### Parameters

• **overrides?**: `CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### decreaseAllowance()

##### Parameters

• **spender**: `string`

• **subtractedValue**: `BigNumberish`

• **overrides?**: `Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### increaseAllowance()

##### Parameters

• **spender**: `string`

• **addedValue**: `BigNumberish`

• **overrides?**: `Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### name()

##### Parameters

• **overrides?**: `CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### symbol()

##### Parameters

• **overrides?**: `CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### totalSupply()

##### Parameters

• **overrides?**: `CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### transfer()

##### Parameters

• **to**: `string`

• **amount**: `BigNumberish`

• **overrides?**: `Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### transferFrom()

##### Parameters

• **from**: `string`

• **to**: `string`

• **amount**: `BigNumberish`

• **overrides?**: `Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### Overrides

`BaseContract.estimateGas`

***

### filters

> **filters**: `object`

#### Approval()

##### Parameters

• **owner?**: `null` \| `string`

• **spender?**: `null` \| `string`

• **value?**: `null`

##### Returns

[`ApprovalEventFilter`](../type-aliases/ApprovalEventFilter.md)

#### Approval(address,address,uint256)()

##### Parameters

• **owner?**: `null` \| `string`

• **spender?**: `null` \| `string`

• **value?**: `null`

##### Returns

[`ApprovalEventFilter`](../type-aliases/ApprovalEventFilter.md)

#### Transfer()

##### Parameters

• **from?**: `null` \| `string`

• **to?**: `null` \| `string`

• **value?**: `null`

##### Returns

[`TransferEventFilter`](../type-aliases/TransferEventFilter.md)

#### Transfer(address,address,uint256)()

##### Parameters

• **from?**: `null` \| `string`

• **to?**: `null` \| `string`

• **value?**: `null`

##### Returns

[`TransferEventFilter`](../type-aliases/TransferEventFilter.md)

#### Overrides

`BaseContract.filters`

***

### functions

> **functions**: `object`

#### allowance()

##### Parameters

• **owner**: `string`

• **spender**: `string`

• **overrides?**: `CallOverrides`

##### Returns

`Promise`\<[`BigNumber`]\>

#### approve()

##### Parameters

• **spender**: `string`

• **amount**: `BigNumberish`

• **overrides?**: `Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### balanceOf()

##### Parameters

• **account**: `string`

• **overrides?**: `CallOverrides`

##### Returns

`Promise`\<[`BigNumber`]\>

#### decimals()

##### Parameters

• **overrides?**: `CallOverrides`

##### Returns

`Promise`\<[`number`]\>

#### decreaseAllowance()

##### Parameters

• **spender**: `string`

• **subtractedValue**: `BigNumberish`

• **overrides?**: `Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### increaseAllowance()

##### Parameters

• **spender**: `string`

• **addedValue**: `BigNumberish`

• **overrides?**: `Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### name()

##### Parameters

• **overrides?**: `CallOverrides`

##### Returns

`Promise`\<[`string`]\>

#### symbol()

##### Parameters

• **overrides?**: `CallOverrides`

##### Returns

`Promise`\<[`string`]\>

#### totalSupply()

##### Parameters

• **overrides?**: `CallOverrides`

##### Returns

`Promise`\<[`BigNumber`]\>

#### transfer()

##### Parameters

• **to**: `string`

• **amount**: `BigNumberish`

• **overrides?**: `Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### transferFrom()

##### Parameters

• **from**: `string`

• **to**: `string`

• **amount**: `BigNumberish`

• **overrides?**: `Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### Overrides

`BaseContract.functions`

***

### interface

> **interface**: [`ERC20Interface`](ERC20Interface.md)

#### Overrides

`BaseContract.interface`

***

### off

> **off**: `OnEvent`\<[`ERC20`](ERC20.md)\>

#### Overrides

`BaseContract.off`

***

### on

> **on**: `OnEvent`\<[`ERC20`](ERC20.md)\>

#### Overrides

`BaseContract.on`

***

### once

> **once**: `OnEvent`\<[`ERC20`](ERC20.md)\>

#### Overrides

`BaseContract.once`

***

### populateTransaction

> **populateTransaction**: `object`

#### allowance()

##### Parameters

• **owner**: `string`

• **spender**: `string`

• **overrides?**: `CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### approve()

##### Parameters

• **spender**: `string`

• **amount**: `BigNumberish`

• **overrides?**: `Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### balanceOf()

##### Parameters

• **account**: `string`

• **overrides?**: `CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### decimals()

##### Parameters

• **overrides?**: `CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### decreaseAllowance()

##### Parameters

• **spender**: `string`

• **subtractedValue**: `BigNumberish`

• **overrides?**: `Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### increaseAllowance()

##### Parameters

• **spender**: `string`

• **addedValue**: `BigNumberish`

• **overrides?**: `Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### name()

##### Parameters

• **overrides?**: `CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### symbol()

##### Parameters

• **overrides?**: `CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### totalSupply()

##### Parameters

• **overrides?**: `CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### transfer()

##### Parameters

• **to**: `string`

• **amount**: `BigNumberish`

• **overrides?**: `Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### transferFrom()

##### Parameters

• **from**: `string`

• **to**: `string`

• **amount**: `BigNumberish`

• **overrides?**: `Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### Overrides

`BaseContract.populateTransaction`

***

### provider

> `readonly` **provider**: `Provider`

#### Inherited from

`BaseContract.provider`

***

### removeListener

> **removeListener**: `OnEvent`\<[`ERC20`](ERC20.md)\>

#### Overrides

`BaseContract.removeListener`

***

### resolvedAddress

> `readonly` **resolvedAddress**: `Promise`\<`string`\>

#### Inherited from

`BaseContract.resolvedAddress`

***

### signer

> `readonly` **signer**: `Signer`

#### Inherited from

`BaseContract.signer`

## Methods

### \_checkRunningEvents()

> **\_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

• **runningEvent**: `RunningEvent`

#### Returns

`void`

#### Inherited from

`BaseContract._checkRunningEvents`

***

### \_deployed()

> **\_deployed**(`blockTag`?): `Promise`\<`Contract`\>

#### Parameters

• **blockTag?**: `BlockTag`

#### Returns

`Promise`\<`Contract`\>

#### Inherited from

`BaseContract._deployed`

***

### \_wrapEvent()

> **\_wrapEvent**(`runningEvent`, `log`, `listener`): `Event`

#### Parameters

• **runningEvent**: `RunningEvent`

• **log**: `Log`

• **listener**: `Listener`

#### Returns

`Event`

#### Inherited from

`BaseContract._wrapEvent`

***

### allowance()

> **allowance**(`owner`, `spender`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

• **owner**: `string`

• **spender**: `string`

• **overrides?**: `CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

***

### approve()

> **approve**(`spender`, `amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

• **spender**: `string`

• **amount**: `BigNumberish`

• **overrides?**: `Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

***

### attach()

> **attach**(`addressOrName`): `this`

#### Parameters

• **addressOrName**: `string`

#### Returns

`this`

#### Overrides

`BaseContract.attach`

***

### balanceOf()

> **balanceOf**(`account`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

• **account**: `string`

• **overrides?**: `CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

***

### connect()

> **connect**(`signerOrProvider`): `this`

#### Parameters

• **signerOrProvider**: `string` \| `Signer` \| `Provider`

#### Returns

`this`

#### Overrides

`BaseContract.connect`

***

### decimals()

> **decimals**(`overrides`?): `Promise`\<`number`\>

#### Parameters

• **overrides?**: `CallOverrides`

#### Returns

`Promise`\<`number`\>

***

### decreaseAllowance()

> **decreaseAllowance**(`spender`, `subtractedValue`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

• **spender**: `string`

• **subtractedValue**: `BigNumberish`

• **overrides?**: `Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

***

### deployed()

> **deployed**(): `Promise`\<[`ERC20`](ERC20.md)\>

#### Returns

`Promise`\<[`ERC20`](ERC20.md)\>

#### Overrides

`BaseContract.deployed`

***

### emit()

> **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

• **eventName**: `string` \| `EventFilter`

• ...**args**: `any`[]

#### Returns

`boolean`

#### Inherited from

`BaseContract.emit`

***

### fallback()

> **fallback**(`overrides`?): `Promise`\<`TransactionResponse`\>

#### Parameters

• **overrides?**: `TransactionRequest`

#### Returns

`Promise`\<`TransactionResponse`\>

#### Inherited from

`BaseContract.fallback`

***

### increaseAllowance()

> **increaseAllowance**(`spender`, `addedValue`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

• **spender**: `string`

• **addedValue**: `BigNumberish`

• **overrides?**: `Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

***

### listenerCount()

> **listenerCount**(`eventName`?): `number`

#### Parameters

• **eventName?**: `string` \| `EventFilter`

#### Returns

`number`

#### Inherited from

`BaseContract.listenerCount`

***

### listeners()

#### listeners(eventFilter)

> **listeners**\<`TEvent`\>(`eventFilter`?): `TypedListener`\<`TEvent`\>[]

##### Type parameters

• **TEvent** *extends* `TypedEvent`\<`any`, `any`\>

##### Parameters

• **eventFilter?**: `TypedEventFilter`\<`TEvent`\>

##### Returns

`TypedListener`\<`TEvent`\>[]

##### Overrides

`BaseContract.listeners`

#### listeners(eventName)

> **listeners**(`eventName`?): `Listener`[]

##### Parameters

• **eventName?**: `string`

##### Returns

`Listener`[]

##### Overrides

`BaseContract.listeners`

***

### name()

> **name**(`overrides`?): `Promise`\<`string`\>

#### Parameters

• **overrides?**: `CallOverrides`

#### Returns

`Promise`\<`string`\>

***

### queryFilter()

> **queryFilter**\<`TEvent`\>(`event`, `fromBlockOrBlockhash`?, `toBlock`?): `Promise`\<`TEvent`[]\>

#### Type parameters

• **TEvent** *extends* `TypedEvent`\<`any`, `any`\>

#### Parameters

• **event**: `TypedEventFilter`\<`TEvent`\>

• **fromBlockOrBlockhash?**: `string` \| `number`

• **toBlock?**: `string` \| `number`

#### Returns

`Promise`\<`TEvent`[]\>

#### Overrides

`BaseContract.queryFilter`

***

### removeAllListeners()

#### removeAllListeners(eventFilter)

> **removeAllListeners**\<`TEvent`\>(`eventFilter`): `this`

##### Type parameters

• **TEvent** *extends* `TypedEvent`\<`any`, `any`\>

##### Parameters

• **eventFilter**: `TypedEventFilter`\<`TEvent`\>

##### Returns

`this`

##### Overrides

`BaseContract.removeAllListeners`

#### removeAllListeners(eventName)

> **removeAllListeners**(`eventName`?): `this`

##### Parameters

• **eventName?**: `string`

##### Returns

`this`

##### Overrides

`BaseContract.removeAllListeners`

***

### symbol()

> **symbol**(`overrides`?): `Promise`\<`string`\>

#### Parameters

• **overrides?**: `CallOverrides`

#### Returns

`Promise`\<`string`\>

***

### totalSupply()

> **totalSupply**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

• **overrides?**: `CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

***

### transfer()

> **transfer**(`to`, `amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

• **to**: `string`

• **amount**: `BigNumberish`

• **overrides?**: `Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

***

### transferFrom()

> **transferFrom**(`from`, `to`, `amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

• **from**: `string`

• **to**: `string`

• **amount**: `BigNumberish`

• **overrides?**: `Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>
