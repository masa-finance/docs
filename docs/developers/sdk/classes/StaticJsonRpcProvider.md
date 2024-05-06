[**# Masa SDK v3.36.1**](../README.md) • **Docs**

***

[# Masa SDK v3.36.1](../globals.md) / StaticJsonRpcProvider

# Class: StaticJsonRpcProvider

## Extends

- `JsonRpcProvider`

## Constructors

### new StaticJsonRpcProvider()

> **new StaticJsonRpcProvider**(`url`?, `network`?): [`StaticJsonRpcProvider`](StaticJsonRpcProvider.md)

#### Parameters

• **url?**: `string` \| `ConnectionInfo`

• **network?**: `Networkish`

#### Returns

[`StaticJsonRpcProvider`](StaticJsonRpcProvider.md)

#### Inherited from

`providers.JsonRpcProvider.constructor`

## Properties

### \_bootstrapPoll

> **\_bootstrapPoll**: `Timer`

#### Inherited from

`providers.JsonRpcProvider._bootstrapPoll`

***

### \_emitted

> **\_emitted**: `object`

#### Index signature

 \[`eventName`: `string`\]: `number` \| `"pending"`

#### Inherited from

`providers.JsonRpcProvider._emitted`

***

### \_eventLoopCache

> **\_eventLoopCache**: `Record`\<`string`, `Promise`\<`any`\>\>

#### Inherited from

`providers.JsonRpcProvider._eventLoopCache`

***

### \_events

> **\_events**: `Event`[]

#### Inherited from

`providers.JsonRpcProvider._events`

***

### \_fastBlockNumber

> **\_fastBlockNumber**: `number`

#### Inherited from

`providers.JsonRpcProvider._fastBlockNumber`

***

### \_fastBlockNumberPromise

> **\_fastBlockNumberPromise**: `Promise`\<`number`\>

#### Inherited from

`providers.JsonRpcProvider._fastBlockNumberPromise`

***

### \_fastQueryDate

> **\_fastQueryDate**: `number`

#### Inherited from

`providers.JsonRpcProvider._fastQueryDate`

***

### \_internalBlockNumber

> **\_internalBlockNumber**: `Promise`\<`object`\>

#### Type declaration

##### blockNumber

> **blockNumber**: `number`

##### reqTime

> **reqTime**: `number`

##### respTime

> **respTime**: `number`

#### Inherited from

`providers.JsonRpcProvider._internalBlockNumber`

***

### \_isProvider

> `readonly` **\_isProvider**: `boolean`

#### Inherited from

`providers.JsonRpcProvider._isProvider`

***

### \_lastBlockNumber

> **\_lastBlockNumber**: `number`

#### Inherited from

`providers.JsonRpcProvider._lastBlockNumber`

***

### \_maxFilterBlockRange

> **\_maxFilterBlockRange**: `number`

#### Inherited from

`providers.JsonRpcProvider._maxFilterBlockRange`

***

### \_maxInternalBlockNumber

> **\_maxInternalBlockNumber**: `number`

#### Inherited from

`providers.JsonRpcProvider._maxInternalBlockNumber`

***

### \_network

> **\_network**: `Network`

#### Inherited from

`providers.JsonRpcProvider._network`

***

### \_networkPromise

> **\_networkPromise**: `Promise`\<`Network`\>

#### Inherited from

`providers.JsonRpcProvider._networkPromise`

***

### \_nextId

> **\_nextId**: `number`

#### Inherited from

`providers.JsonRpcProvider._nextId`

***

### \_pendingFilter

> **\_pendingFilter**: `Promise`\<`number`\>

#### Inherited from

`providers.JsonRpcProvider._pendingFilter`

***

### \_poller

> **\_poller**: `Timer`

#### Inherited from

`providers.JsonRpcProvider._poller`

***

### \_pollingInterval

> **\_pollingInterval**: `number`

#### Inherited from

`providers.JsonRpcProvider._pollingInterval`

***

### anyNetwork

> `readonly` **anyNetwork**: `boolean`

#### Inherited from

`providers.JsonRpcProvider.anyNetwork`

***

### connection

> `readonly` **connection**: `ConnectionInfo`

#### Inherited from

`providers.JsonRpcProvider.connection`

***

### disableCcipRead

> **disableCcipRead**: `boolean`

#### Inherited from

`providers.JsonRpcProvider.disableCcipRead`

***

### formatter

> **formatter**: `Formatter`

#### Inherited from

`providers.JsonRpcProvider.formatter`

## Accessors

### \_cache

> `get` **\_cache**(): `Record`\<`string`, `Promise`\<`any`\>\>

#### Returns

`Record`\<`string`, `Promise`\<`any`\>\>

***

### blockNumber

> `get` **blockNumber**(): `number`

#### Returns

`number`

***

### network

> `get` **network**(): `Network`

#### Returns

`Network`

***

### polling

> `get` **polling**(): `boolean`

> `set` **polling**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Returns

`boolean`

***

### pollingInterval

> `get` **pollingInterval**(): `number`

> `set` **pollingInterval**(`value`): `void`

#### Parameters

• **value**: `number`

#### Returns

`number`

***

### ready

> `get` **ready**(): `Promise`\<`Network`\>

#### Returns

`Promise`\<`Network`\>

## Methods

### \_addEventListener()

> **\_addEventListener**(`eventName`, `listener`, `once`): `this`

#### Parameters

• **eventName**: `EventType`

• **listener**: `Listener`

• **once**: `boolean`

#### Returns

`this`

#### Inherited from

`providers.JsonRpcProvider._addEventListener`

***

### \_call()

> **\_call**(`transaction`, `blockTag`, `attempt`): `Promise`\<`string`\>

#### Parameters

• **transaction**: `TransactionRequest`

• **blockTag**: `BlockTag`

• **attempt**: `number`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`providers.JsonRpcProvider._call`

***

### \_getAddress()

> **\_getAddress**(`addressOrName`): `Promise`\<`string`\>

#### Parameters

• **addressOrName**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

`providers.JsonRpcProvider._getAddress`

***

### \_getBlock()

> **\_getBlock**(`blockHashOrBlockTag`, `includeTransactions`?): `Promise`\<`Block` \| `BlockWithTransactions`\>

#### Parameters

• **blockHashOrBlockTag**: `BlockTag` \| `Promise`\<`BlockTag`\>

• **includeTransactions?**: `boolean`

#### Returns

`Promise`\<`Block` \| `BlockWithTransactions`\>

#### Inherited from

`providers.JsonRpcProvider._getBlock`

***

### \_getBlockTag()

> **\_getBlockTag**(`blockTag`): `Promise`\<`BlockTag`\>

#### Parameters

• **blockTag**: `BlockTag` \| `Promise`\<`BlockTag`\>

#### Returns

`Promise`\<`BlockTag`\>

#### Inherited from

`providers.JsonRpcProvider._getBlockTag`

***

### \_getFastBlockNumber()

> **\_getFastBlockNumber**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`providers.JsonRpcProvider._getFastBlockNumber`

***

### \_getFilter()

> **\_getFilter**(`filter`): `Promise`\<`Filter` \| `FilterByBlockHash`\>

#### Parameters

• **filter**: `Filter` \| `FilterByBlockHash` \| `Promise`\<`Filter` \| `FilterByBlockHash`\>

#### Returns

`Promise`\<`Filter` \| `FilterByBlockHash`\>

#### Inherited from

`providers.JsonRpcProvider._getFilter`

***

### \_getInternalBlockNumber()

> **\_getInternalBlockNumber**(`maxAge`): `Promise`\<`number`\>

#### Parameters

• **maxAge**: `number`

#### Returns

`Promise`\<`number`\>

#### Inherited from

`providers.JsonRpcProvider._getInternalBlockNumber`

***

### \_getResolver()

> **\_getResolver**(`name`, `operation`?): `Promise`\<`string`\>

#### Parameters

• **name**: `string`

• **operation?**: `string`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`providers.JsonRpcProvider._getResolver`

***

### \_getTransactionRequest()

> **\_getTransactionRequest**(`transaction`): `Promise`\<`Transaction`\>

#### Parameters

• **transaction**: `Deferrable`\<`TransactionRequest`\>

#### Returns

`Promise`\<`Transaction`\>

#### Inherited from

`providers.JsonRpcProvider._getTransactionRequest`

***

### \_ready()

> **\_ready**(): `Promise`\<`Network`\>

#### Returns

`Promise`\<`Network`\>

#### Inherited from

`providers.JsonRpcProvider._ready`

***

### \_setFastBlockNumber()

> **\_setFastBlockNumber**(`blockNumber`): `void`

#### Parameters

• **blockNumber**: `number`

#### Returns

`void`

#### Inherited from

`providers.JsonRpcProvider._setFastBlockNumber`

***

### \_startEvent()

> **\_startEvent**(`event`): `void`

#### Parameters

• **event**: `Event`

#### Returns

`void`

#### Inherited from

`providers.JsonRpcProvider._startEvent`

***

### \_startPending()

> **\_startPending**(): `void`

#### Returns

`void`

#### Inherited from

`providers.JsonRpcProvider._startPending`

***

### \_stopEvent()

> **\_stopEvent**(`event`): `void`

#### Parameters

• **event**: `Event`

#### Returns

`void`

#### Inherited from

`providers.JsonRpcProvider._stopEvent`

***

### \_uncachedDetectNetwork()

> **\_uncachedDetectNetwork**(): `Promise`\<`Network`\>

#### Returns

`Promise`\<`Network`\>

#### Inherited from

`providers.JsonRpcProvider._uncachedDetectNetwork`

***

### \_waitForTransaction()

> **\_waitForTransaction**(`transactionHash`, `confirmations`, `timeout`, `replaceable`): `Promise`\<`TransactionReceipt`\>

#### Parameters

• **transactionHash**: `string`

• **confirmations**: `number`

• **timeout**: `number`

• **replaceable**

• **replaceable.data**: `string`

• **replaceable.from**: `string`

• **replaceable.nonce**: `number`

• **replaceable.startBlock**: `number`

• **replaceable.to**: `string`

• **replaceable.value**: `BigNumber`

#### Returns

`Promise`\<`TransactionReceipt`\>

#### Inherited from

`providers.JsonRpcProvider._waitForTransaction`

***

### \_wrapTransaction()

> **\_wrapTransaction**(`tx`, `hash`?, `startBlock`?): `TransactionResponse`

#### Parameters

• **tx**: `Transaction`

• **hash?**: `string`

• **startBlock?**: `number`

#### Returns

`TransactionResponse`

#### Inherited from

`providers.JsonRpcProvider._wrapTransaction`

***

### addListener()

> **addListener**(`eventName`, `listener`): `Provider`

#### Parameters

• **eventName**: `EventType`

• **listener**: `Listener`

#### Returns

`Provider`

#### Inherited from

`providers.JsonRpcProvider.addListener`

***

### call()

> **call**(`transaction`, `blockTag`?): `Promise`\<`string`\>

#### Parameters

• **transaction**: `Deferrable`\<`TransactionRequest`\>

• **blockTag?**: `BlockTag` \| `Promise`\<`BlockTag`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

`providers.JsonRpcProvider.call`

***

### ccipReadFetch()

> **ccipReadFetch**(`tx`, `calldata`, `urls`): `Promise`\<`null` \| `string`\>

#### Parameters

• **tx**: `Transaction`

• **calldata**: `string`

• **urls**: `string`[]

#### Returns

`Promise`\<`null` \| `string`\>

#### Inherited from

`providers.JsonRpcProvider.ccipReadFetch`

***

### detectNetwork()

> **detectNetwork**(): `Promise`\<`Network`\>

#### Returns

`Promise`\<`Network`\>

#### Inherited from

`providers.JsonRpcProvider.detectNetwork`

***

### emit()

> **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

• **eventName**: `EventType`

• ...**args**: `any`[]

#### Returns

`boolean`

#### Inherited from

`providers.JsonRpcProvider.emit`

***

### estimateGas()

> **estimateGas**(`transaction`): `Promise`\<`BigNumber`\>

#### Parameters

• **transaction**: `Deferrable`\<`TransactionRequest`\>

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`providers.JsonRpcProvider.estimateGas`

***

### getAvatar()

> **getAvatar**(`nameOrAddress`): `Promise`\<`null` \| `string`\>

#### Parameters

• **nameOrAddress**: `string`

#### Returns

`Promise`\<`null` \| `string`\>

#### Inherited from

`providers.JsonRpcProvider.getAvatar`

***

### getBalance()

> **getBalance**(`addressOrName`, `blockTag`?): `Promise`\<`BigNumber`\>

#### Parameters

• **addressOrName**: `string` \| `Promise`\<`string`\>

• **blockTag?**: `BlockTag` \| `Promise`\<`BlockTag`\>

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`providers.JsonRpcProvider.getBalance`

***

### getBlock()

> **getBlock**(`blockHashOrBlockTag`): `Promise`\<`Block`\>

#### Parameters

• **blockHashOrBlockTag**: `BlockTag` \| `Promise`\<`BlockTag`\>

#### Returns

`Promise`\<`Block`\>

#### Inherited from

`providers.JsonRpcProvider.getBlock`

***

### getBlockNumber()

> **getBlockNumber**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`providers.JsonRpcProvider.getBlockNumber`

***

### getBlockWithTransactions()

> **getBlockWithTransactions**(`blockHashOrBlockTag`): `Promise`\<`BlockWithTransactions`\>

#### Parameters

• **blockHashOrBlockTag**: `BlockTag` \| `Promise`\<`BlockTag`\>

#### Returns

`Promise`\<`BlockWithTransactions`\>

#### Inherited from

`providers.JsonRpcProvider.getBlockWithTransactions`

***

### getCode()

> **getCode**(`addressOrName`, `blockTag`?): `Promise`\<`string`\>

#### Parameters

• **addressOrName**: `string` \| `Promise`\<`string`\>

• **blockTag?**: `BlockTag` \| `Promise`\<`BlockTag`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

`providers.JsonRpcProvider.getCode`

***

### getEtherPrice()

> **getEtherPrice**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`providers.JsonRpcProvider.getEtherPrice`

***

### getFeeData()

> **getFeeData**(): `Promise`\<`FeeData`\>

#### Returns

`Promise`\<`FeeData`\>

#### Inherited from

`providers.JsonRpcProvider.getFeeData`

***

### getGasPrice()

> **getGasPrice**(): `Promise`\<`BigNumber`\>

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`providers.JsonRpcProvider.getGasPrice`

***

### getLogs()

> **getLogs**(`filter`): `Promise`\<`Log`[]\>

#### Parameters

• **filter**: `Filter` \| `FilterByBlockHash` \| `Promise`\<`Filter` \| `FilterByBlockHash`\>

#### Returns

`Promise`\<`Log`[]\>

#### Inherited from

`providers.JsonRpcProvider.getLogs`

***

### getNetwork()

> **getNetwork**(): `Promise`\<`Network`\>

#### Returns

`Promise`\<`Network`\>

#### Overrides

`providers.JsonRpcProvider.getNetwork`

***

### getResolver()

> **getResolver**(`name`): `Promise`\<`null` \| `Resolver`\>

#### Parameters

• **name**: `string`

#### Returns

`Promise`\<`null` \| `Resolver`\>

#### Inherited from

`providers.JsonRpcProvider.getResolver`

***

### getSigner()

> **getSigner**(`addressOrIndex`?): `JsonRpcSigner`

#### Parameters

• **addressOrIndex?**: `string` \| `number`

#### Returns

`JsonRpcSigner`

#### Inherited from

`providers.JsonRpcProvider.getSigner`

***

### getStorageAt()

> **getStorageAt**(`addressOrName`, `position`, `blockTag`?): `Promise`\<`string`\>

#### Parameters

• **addressOrName**: `string` \| `Promise`\<`string`\>

• **position**: `BigNumberish` \| `Promise`\<`BigNumberish`\>

• **blockTag?**: `BlockTag` \| `Promise`\<`BlockTag`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

`providers.JsonRpcProvider.getStorageAt`

***

### getTransaction()

> **getTransaction**(`transactionHash`): `Promise`\<`TransactionResponse`\>

#### Parameters

• **transactionHash**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`TransactionResponse`\>

#### Inherited from

`providers.JsonRpcProvider.getTransaction`

***

### getTransactionCount()

> **getTransactionCount**(`addressOrName`, `blockTag`?): `Promise`\<`number`\>

#### Parameters

• **addressOrName**: `string` \| `Promise`\<`string`\>

• **blockTag?**: `BlockTag` \| `Promise`\<`BlockTag`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`providers.JsonRpcProvider.getTransactionCount`

***

### getTransactionReceipt()

> **getTransactionReceipt**(`transactionHash`): `Promise`\<`TransactionReceipt`\>

#### Parameters

• **transactionHash**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`TransactionReceipt`\>

#### Inherited from

`providers.JsonRpcProvider.getTransactionReceipt`

***

### getUncheckedSigner()

> **getUncheckedSigner**(`addressOrIndex`?): `UncheckedJsonRpcSigner`

#### Parameters

• **addressOrIndex?**: `string` \| `number`

#### Returns

`UncheckedJsonRpcSigner`

#### Inherited from

`providers.JsonRpcProvider.getUncheckedSigner`

***

### listAccounts()

> **listAccounts**(): `Promise`\<`string`[]\>

#### Returns

`Promise`\<`string`[]\>

#### Inherited from

`providers.JsonRpcProvider.listAccounts`

***

### listenerCount()

> **listenerCount**(`eventName`?): `number`

#### Parameters

• **eventName?**: `EventType`

#### Returns

`number`

#### Inherited from

`providers.JsonRpcProvider.listenerCount`

***

### listeners()

> **listeners**(`eventName`?): `Listener`[]

#### Parameters

• **eventName?**: `EventType`

#### Returns

`Listener`[]

#### Inherited from

`providers.JsonRpcProvider.listeners`

***

### lookupAddress()

> **lookupAddress**(`address`): `Promise`\<`null` \| `string`\>

#### Parameters

• **address**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`null` \| `string`\>

#### Inherited from

`providers.JsonRpcProvider.lookupAddress`

***

### off()

> **off**(`eventName`, `listener`?): `this`

#### Parameters

• **eventName**: `EventType`

• **listener?**: `Listener`

#### Returns

`this`

#### Inherited from

`providers.JsonRpcProvider.off`

***

### on()

> **on**(`eventName`, `listener`): `this`

#### Parameters

• **eventName**: `EventType`

• **listener**: `Listener`

#### Returns

`this`

#### Inherited from

`providers.JsonRpcProvider.on`

***

### once()

> **once**(`eventName`, `listener`): `this`

#### Parameters

• **eventName**: `EventType`

• **listener**: `Listener`

#### Returns

`this`

#### Inherited from

`providers.JsonRpcProvider.once`

***

### perform()

> **perform**(`method`, `params`): `Promise`\<`any`\>

#### Parameters

• **method**: `string`

• **params**: `any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

`providers.JsonRpcProvider.perform`

***

### poll()

> **poll**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

`providers.JsonRpcProvider.poll`

***

### prepareRequest()

> **prepareRequest**(`method`, `params`): [`string`, `any`[]]

#### Parameters

• **method**: `string`

• **params**: `any`

#### Returns

[`string`, `any`[]]

#### Inherited from

`providers.JsonRpcProvider.prepareRequest`

***

### removeAllListeners()

> **removeAllListeners**(`eventName`?): `this`

#### Parameters

• **eventName?**: `EventType`

#### Returns

`this`

#### Inherited from

`providers.JsonRpcProvider.removeAllListeners`

***

### removeListener()

> **removeListener**(`eventName`, `listener`): `Provider`

#### Parameters

• **eventName**: `EventType`

• **listener**: `Listener`

#### Returns

`Provider`

#### Inherited from

`providers.JsonRpcProvider.removeListener`

***

### resetEventsBlock()

> **resetEventsBlock**(`blockNumber`): `void`

#### Parameters

• **blockNumber**: `number`

#### Returns

`void`

#### Inherited from

`providers.JsonRpcProvider.resetEventsBlock`

***

### resolveName()

> **resolveName**(`name`): `Promise`\<`null` \| `string`\>

#### Parameters

• **name**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`null` \| `string`\>

#### Inherited from

`providers.JsonRpcProvider.resolveName`

***

### send()

> **send**(`method`, `params`): `Promise`\<`any`\>

#### Parameters

• **method**: `string`

• **params**: `any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

`providers.JsonRpcProvider.send`

***

### sendTransaction()

> **sendTransaction**(`signedTransaction`): `Promise`\<`TransactionResponse`\>

#### Parameters

• **signedTransaction**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`TransactionResponse`\>

#### Inherited from

`providers.JsonRpcProvider.sendTransaction`

***

### waitForTransaction()

> **waitForTransaction**(`transactionHash`, `confirmations`?, `timeout`?): `Promise`\<`TransactionReceipt`\>

#### Parameters

• **transactionHash**: `string`

• **confirmations?**: `number`

• **timeout?**: `number`

#### Returns

`Promise`\<`TransactionReceipt`\>

#### Inherited from

`providers.JsonRpcProvider.waitForTransaction`

***

### defaultUrl()

> `static` **defaultUrl**(): `string`

#### Returns

`string`

#### Inherited from

`providers.JsonRpcProvider.defaultUrl`

***

### getFormatter()

> `static` **getFormatter**(): `Formatter`

#### Returns

`Formatter`

#### Inherited from

`providers.JsonRpcProvider.getFormatter`

***

### getNetwork()

> `static` **getNetwork**(`network`): `Network`

#### Parameters

• **network**: `Networkish`

#### Returns

`Network`

#### Inherited from

`providers.JsonRpcProvider.getNetwork`

***

### hexlifyTransaction()

> `static` **hexlifyTransaction**(`transaction`, `allowExtra`?): `object`

#### Parameters

• **transaction**: `TransactionRequest`

• **allowExtra?**

#### Returns

`object`

#### Inherited from

`providers.JsonRpcProvider.hexlifyTransaction`

***

### isProvider()

> `static` **isProvider**(`value`): `value is Provider`

#### Parameters

• **value**: `any`

#### Returns

`value is Provider`

#### Inherited from

`providers.JsonRpcProvider.isProvider`
