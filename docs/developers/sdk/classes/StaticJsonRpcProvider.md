[# Masa SDK
 - v3.27.1](../README.md) / [Exports](../modules.md) / StaticJsonRpcProvider

# Class: StaticJsonRpcProvider

## Hierarchy

- `JsonRpcProvider`

  ↳ **`StaticJsonRpcProvider`**

## Table of contents

### Constructors

- [constructor](StaticJsonRpcProvider.md#constructor)

### Properties

- [\_bootstrapPoll](StaticJsonRpcProvider.md#_bootstrappoll)
- [\_emitted](StaticJsonRpcProvider.md#_emitted)
- [\_eventLoopCache](StaticJsonRpcProvider.md#_eventloopcache)
- [\_events](StaticJsonRpcProvider.md#_events)
- [\_fastBlockNumber](StaticJsonRpcProvider.md#_fastblocknumber)
- [\_fastBlockNumberPromise](StaticJsonRpcProvider.md#_fastblocknumberpromise)
- [\_fastQueryDate](StaticJsonRpcProvider.md#_fastquerydate)
- [\_internalBlockNumber](StaticJsonRpcProvider.md#_internalblocknumber)
- [\_isProvider](StaticJsonRpcProvider.md#_isprovider)
- [\_lastBlockNumber](StaticJsonRpcProvider.md#_lastblocknumber)
- [\_maxFilterBlockRange](StaticJsonRpcProvider.md#_maxfilterblockrange)
- [\_maxInternalBlockNumber](StaticJsonRpcProvider.md#_maxinternalblocknumber)
- [\_network](StaticJsonRpcProvider.md#_network)
- [\_networkPromise](StaticJsonRpcProvider.md#_networkpromise)
- [\_nextId](StaticJsonRpcProvider.md#_nextid)
- [\_pendingFilter](StaticJsonRpcProvider.md#_pendingfilter)
- [\_poller](StaticJsonRpcProvider.md#_poller)
- [\_pollingInterval](StaticJsonRpcProvider.md#_pollinginterval)
- [anyNetwork](StaticJsonRpcProvider.md#anynetwork)
- [connection](StaticJsonRpcProvider.md#connection)
- [disableCcipRead](StaticJsonRpcProvider.md#disableccipread)
- [formatter](StaticJsonRpcProvider.md#formatter)

### Accessors

- [\_cache](StaticJsonRpcProvider.md#_cache)
- [blockNumber](StaticJsonRpcProvider.md#blocknumber)
- [network](StaticJsonRpcProvider.md#network)
- [polling](StaticJsonRpcProvider.md#polling)
- [pollingInterval](StaticJsonRpcProvider.md#pollinginterval)
- [ready](StaticJsonRpcProvider.md#ready)

### Methods

- [\_addEventListener](StaticJsonRpcProvider.md#_addeventlistener)
- [\_call](StaticJsonRpcProvider.md#_call)
- [\_getAddress](StaticJsonRpcProvider.md#_getaddress)
- [\_getBlock](StaticJsonRpcProvider.md#_getblock)
- [\_getBlockTag](StaticJsonRpcProvider.md#_getblocktag)
- [\_getFastBlockNumber](StaticJsonRpcProvider.md#_getfastblocknumber)
- [\_getFilter](StaticJsonRpcProvider.md#_getfilter)
- [\_getInternalBlockNumber](StaticJsonRpcProvider.md#_getinternalblocknumber)
- [\_getResolver](StaticJsonRpcProvider.md#_getresolver)
- [\_getTransactionRequest](StaticJsonRpcProvider.md#_gettransactionrequest)
- [\_ready](StaticJsonRpcProvider.md#_ready)
- [\_setFastBlockNumber](StaticJsonRpcProvider.md#_setfastblocknumber)
- [\_startEvent](StaticJsonRpcProvider.md#_startevent)
- [\_startPending](StaticJsonRpcProvider.md#_startpending)
- [\_stopEvent](StaticJsonRpcProvider.md#_stopevent)
- [\_uncachedDetectNetwork](StaticJsonRpcProvider.md#_uncacheddetectnetwork)
- [\_waitForTransaction](StaticJsonRpcProvider.md#_waitfortransaction)
- [\_wrapTransaction](StaticJsonRpcProvider.md#_wraptransaction)
- [addListener](StaticJsonRpcProvider.md#addlistener)
- [call](StaticJsonRpcProvider.md#call)
- [ccipReadFetch](StaticJsonRpcProvider.md#ccipreadfetch)
- [detectNetwork](StaticJsonRpcProvider.md#detectnetwork)
- [emit](StaticJsonRpcProvider.md#emit)
- [estimateGas](StaticJsonRpcProvider.md#estimategas)
- [getAvatar](StaticJsonRpcProvider.md#getavatar)
- [getBalance](StaticJsonRpcProvider.md#getbalance)
- [getBlock](StaticJsonRpcProvider.md#getblock)
- [getBlockNumber](StaticJsonRpcProvider.md#getblocknumber)
- [getBlockWithTransactions](StaticJsonRpcProvider.md#getblockwithtransactions)
- [getCode](StaticJsonRpcProvider.md#getcode)
- [getEtherPrice](StaticJsonRpcProvider.md#getetherprice)
- [getFeeData](StaticJsonRpcProvider.md#getfeedata)
- [getGasPrice](StaticJsonRpcProvider.md#getgasprice)
- [getLogs](StaticJsonRpcProvider.md#getlogs)
- [getNetwork](StaticJsonRpcProvider.md#getnetwork)
- [getResolver](StaticJsonRpcProvider.md#getresolver)
- [getSigner](StaticJsonRpcProvider.md#getsigner)
- [getStorageAt](StaticJsonRpcProvider.md#getstorageat)
- [getTransaction](StaticJsonRpcProvider.md#gettransaction)
- [getTransactionCount](StaticJsonRpcProvider.md#gettransactioncount)
- [getTransactionReceipt](StaticJsonRpcProvider.md#gettransactionreceipt)
- [getUncheckedSigner](StaticJsonRpcProvider.md#getuncheckedsigner)
- [listAccounts](StaticJsonRpcProvider.md#listaccounts)
- [listenerCount](StaticJsonRpcProvider.md#listenercount)
- [listeners](StaticJsonRpcProvider.md#listeners)
- [lookupAddress](StaticJsonRpcProvider.md#lookupaddress)
- [off](StaticJsonRpcProvider.md#off)
- [on](StaticJsonRpcProvider.md#on)
- [once](StaticJsonRpcProvider.md#once)
- [perform](StaticJsonRpcProvider.md#perform)
- [poll](StaticJsonRpcProvider.md#poll)
- [prepareRequest](StaticJsonRpcProvider.md#preparerequest)
- [removeAllListeners](StaticJsonRpcProvider.md#removealllisteners)
- [removeListener](StaticJsonRpcProvider.md#removelistener)
- [resetEventsBlock](StaticJsonRpcProvider.md#reseteventsblock)
- [resolveName](StaticJsonRpcProvider.md#resolvename)
- [send](StaticJsonRpcProvider.md#send)
- [sendTransaction](StaticJsonRpcProvider.md#sendtransaction)
- [waitForTransaction](StaticJsonRpcProvider.md#waitfortransaction)
- [defaultUrl](StaticJsonRpcProvider.md#defaulturl)
- [getFormatter](StaticJsonRpcProvider.md#getformatter)
- [getNetwork](StaticJsonRpcProvider.md#getnetwork-1)
- [hexlifyTransaction](StaticJsonRpcProvider.md#hexlifytransaction)
- [isProvider](StaticJsonRpcProvider.md#isprovider)

## Constructors

### constructor

• **new StaticJsonRpcProvider**(`url?`, `network?`): [`StaticJsonRpcProvider`](StaticJsonRpcProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url?` | `string` \| `ConnectionInfo` |
| `network?` | `Networkish` |

#### Returns

[`StaticJsonRpcProvider`](StaticJsonRpcProvider.md)

#### Inherited from

providers.JsonRpcProvider.constructor

## Properties

### \_bootstrapPoll

• **\_bootstrapPoll**: `Timer`

#### Inherited from

providers.JsonRpcProvider.\_bootstrapPoll

___

### \_emitted

• **\_emitted**: `Object`

#### Index signature

▪ [eventName: `string`]: `number` \| ``"pending"``

#### Inherited from

providers.JsonRpcProvider.\_emitted

___

### \_eventLoopCache

• **\_eventLoopCache**: `Record`\<`string`, `Promise`\<`any`\>\>

#### Inherited from

providers.JsonRpcProvider.\_eventLoopCache

___

### \_events

• **\_events**: `Event`[]

#### Inherited from

providers.JsonRpcProvider.\_events

___

### \_fastBlockNumber

• **\_fastBlockNumber**: `number`

#### Inherited from

providers.JsonRpcProvider.\_fastBlockNumber

___

### \_fastBlockNumberPromise

• **\_fastBlockNumberPromise**: `Promise`\<`number`\>

#### Inherited from

providers.JsonRpcProvider.\_fastBlockNumberPromise

___

### \_fastQueryDate

• **\_fastQueryDate**: `number`

#### Inherited from

providers.JsonRpcProvider.\_fastQueryDate

___

### \_internalBlockNumber

• **\_internalBlockNumber**: `Promise`\<\{ `blockNumber`: `number` ; `reqTime`: `number` ; `respTime`: `number`  }\>

#### Inherited from

providers.JsonRpcProvider.\_internalBlockNumber

___

### \_isProvider

• `Readonly` **\_isProvider**: `boolean`

#### Inherited from

providers.JsonRpcProvider.\_isProvider

___

### \_lastBlockNumber

• **\_lastBlockNumber**: `number`

#### Inherited from

providers.JsonRpcProvider.\_lastBlockNumber

___

### \_maxFilterBlockRange

• **\_maxFilterBlockRange**: `number`

#### Inherited from

providers.JsonRpcProvider.\_maxFilterBlockRange

___

### \_maxInternalBlockNumber

• **\_maxInternalBlockNumber**: `number`

#### Inherited from

providers.JsonRpcProvider.\_maxInternalBlockNumber

___

### \_network

• **\_network**: `Network`

#### Inherited from

providers.JsonRpcProvider.\_network

___

### \_networkPromise

• **\_networkPromise**: `Promise`\<`Network`\>

#### Inherited from

providers.JsonRpcProvider.\_networkPromise

___

### \_nextId

• **\_nextId**: `number`

#### Inherited from

providers.JsonRpcProvider.\_nextId

___

### \_pendingFilter

• **\_pendingFilter**: `Promise`\<`number`\>

#### Inherited from

providers.JsonRpcProvider.\_pendingFilter

___

### \_poller

• **\_poller**: `Timer`

#### Inherited from

providers.JsonRpcProvider.\_poller

___

### \_pollingInterval

• **\_pollingInterval**: `number`

#### Inherited from

providers.JsonRpcProvider.\_pollingInterval

___

### anyNetwork

• `Readonly` **anyNetwork**: `boolean`

#### Inherited from

providers.JsonRpcProvider.anyNetwork

___

### connection

• `Readonly` **connection**: `ConnectionInfo`

#### Inherited from

providers.JsonRpcProvider.connection

___

### disableCcipRead

• **disableCcipRead**: `boolean`

#### Inherited from

providers.JsonRpcProvider.disableCcipRead

___

### formatter

• **formatter**: `Formatter`

#### Inherited from

providers.JsonRpcProvider.formatter

## Accessors

### \_cache

• `get` **_cache**(): `Record`\<`string`, `Promise`\<`any`\>\>

#### Returns

`Record`\<`string`, `Promise`\<`any`\>\>

#### Inherited from

providers.JsonRpcProvider.\_cache

___

### blockNumber

• `get` **blockNumber**(): `number`

#### Returns

`number`

#### Inherited from

providers.JsonRpcProvider.blockNumber

___

### network

• `get` **network**(): `Network`

#### Returns

`Network`

#### Inherited from

providers.JsonRpcProvider.network

___

### polling

• `get` **polling**(): `boolean`

#### Returns

`boolean`

#### Inherited from

providers.JsonRpcProvider.polling

• `set` **polling**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

providers.JsonRpcProvider.polling

___

### pollingInterval

• `get` **pollingInterval**(): `number`

#### Returns

`number`

#### Inherited from

providers.JsonRpcProvider.pollingInterval

• `set` **pollingInterval**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

providers.JsonRpcProvider.pollingInterval

___

### ready

• `get` **ready**(): `Promise`\<`Network`\>

#### Returns

`Promise`\<`Network`\>

#### Inherited from

providers.JsonRpcProvider.ready

## Methods

### \_addEventListener

▸ **_addEventListener**(`eventName`, `listener`, `once`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `EventType` |
| `listener` | `Listener` |
| `once` | `boolean` |

#### Returns

`this`

#### Inherited from

providers.JsonRpcProvider.\_addEventListener

___

### \_call

▸ **_call**(`transaction`, `blockTag`, `attempt`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `TransactionRequest` |
| `blockTag` | `BlockTag` |
| `attempt` | `number` |

#### Returns

`Promise`\<`string`\>

#### Inherited from

providers.JsonRpcProvider.\_call

___

### \_getAddress

▸ **_getAddress**(`addressOrName`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`\<`string`\> |

#### Returns

`Promise`\<`string`\>

#### Inherited from

providers.JsonRpcProvider.\_getAddress

___

### \_getBlock

▸ **_getBlock**(`blockHashOrBlockTag`, `includeTransactions?`): `Promise`\<`Block` \| `BlockWithTransactions`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockTag` | `BlockTag` \| `Promise`\<`BlockTag`\> |
| `includeTransactions?` | `boolean` |

#### Returns

`Promise`\<`Block` \| `BlockWithTransactions`\>

#### Inherited from

providers.JsonRpcProvider.\_getBlock

___

### \_getBlockTag

▸ **_getBlockTag**(`blockTag`): `Promise`\<`BlockTag`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag` | `BlockTag` \| `Promise`\<`BlockTag`\> |

#### Returns

`Promise`\<`BlockTag`\>

#### Inherited from

providers.JsonRpcProvider.\_getBlockTag

___

### \_getFastBlockNumber

▸ **_getFastBlockNumber**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

providers.JsonRpcProvider.\_getFastBlockNumber

___

### \_getFilter

▸ **_getFilter**(`filter`): `Promise`\<`Filter` \| `FilterByBlockHash`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `Filter` \| `FilterByBlockHash` \| `Promise`\<`Filter` \| `FilterByBlockHash`\> |

#### Returns

`Promise`\<`Filter` \| `FilterByBlockHash`\>

#### Inherited from

providers.JsonRpcProvider.\_getFilter

___

### \_getInternalBlockNumber

▸ **_getInternalBlockNumber**(`maxAge`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxAge` | `number` |

#### Returns

`Promise`\<`number`\>

#### Inherited from

providers.JsonRpcProvider.\_getInternalBlockNumber

___

### \_getResolver

▸ **_getResolver**(`name`, `operation?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `operation?` | `string` |

#### Returns

`Promise`\<`string`\>

#### Inherited from

providers.JsonRpcProvider.\_getResolver

___

### \_getTransactionRequest

▸ **_getTransactionRequest**(`transaction`): `Promise`\<`Transaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `Deferrable`\<`TransactionRequest`\> |

#### Returns

`Promise`\<`Transaction`\>

#### Inherited from

providers.JsonRpcProvider.\_getTransactionRequest

___

### \_ready

▸ **_ready**(): `Promise`\<`Network`\>

#### Returns

`Promise`\<`Network`\>

#### Inherited from

providers.JsonRpcProvider.\_ready

___

### \_setFastBlockNumber

▸ **_setFastBlockNumber**(`blockNumber`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockNumber` | `number` |

#### Returns

`void`

#### Inherited from

providers.JsonRpcProvider.\_setFastBlockNumber

___

### \_startEvent

▸ **_startEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`void`

#### Inherited from

providers.JsonRpcProvider.\_startEvent

___

### \_startPending

▸ **_startPending**(): `void`

#### Returns

`void`

#### Inherited from

providers.JsonRpcProvider.\_startPending

___

### \_stopEvent

▸ **_stopEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`void`

#### Inherited from

providers.JsonRpcProvider.\_stopEvent

___

### \_uncachedDetectNetwork

▸ **_uncachedDetectNetwork**(): `Promise`\<`Network`\>

#### Returns

`Promise`\<`Network`\>

#### Inherited from

providers.JsonRpcProvider.\_uncachedDetectNetwork

___

### \_waitForTransaction

▸ **_waitForTransaction**(`transactionHash`, `confirmations`, `timeout`, `replaceable`): `Promise`\<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` |
| `confirmations` | `number` |
| `timeout` | `number` |
| `replaceable` | `Object` |
| `replaceable.data` | `string` |
| `replaceable.from` | `string` |
| `replaceable.nonce` | `number` |
| `replaceable.startBlock` | `number` |
| `replaceable.to` | `string` |
| `replaceable.value` | `BigNumber` |

#### Returns

`Promise`\<`TransactionReceipt`\>

#### Inherited from

providers.JsonRpcProvider.\_waitForTransaction

___

### \_wrapTransaction

▸ **_wrapTransaction**(`tx`, `hash?`, `startBlock?`): `TransactionResponse`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Transaction` |
| `hash?` | `string` |
| `startBlock?` | `number` |

#### Returns

`TransactionResponse`

#### Inherited from

providers.JsonRpcProvider.\_wrapTransaction

___

### addListener

▸ **addListener**(`eventName`, `listener`): `Provider`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `EventType` |
| `listener` | `Listener` |

#### Returns

`Provider`

#### Inherited from

providers.JsonRpcProvider.addListener

___

### call

▸ **call**(`transaction`, `blockTag?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `Deferrable`\<`TransactionRequest`\> |
| `blockTag?` | `BlockTag` \| `Promise`\<`BlockTag`\> |

#### Returns

`Promise`\<`string`\>

#### Inherited from

providers.JsonRpcProvider.call

___

### ccipReadFetch

▸ **ccipReadFetch**(`tx`, `calldata`, `urls`): `Promise`\<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Transaction` |
| `calldata` | `string` |
| `urls` | `string`[] |

#### Returns

`Promise`\<``null`` \| `string`\>

#### Inherited from

providers.JsonRpcProvider.ccipReadFetch

___

### detectNetwork

▸ **detectNetwork**(): `Promise`\<`Network`\>

#### Returns

`Promise`\<`Network`\>

#### Inherited from

providers.JsonRpcProvider.detectNetwork

___

### emit

▸ **emit**(`eventName`, `...args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `EventType` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

providers.JsonRpcProvider.emit

___

### estimateGas

▸ **estimateGas**(`transaction`): `Promise`\<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `Deferrable`\<`TransactionRequest`\> |

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

providers.JsonRpcProvider.estimateGas

___

### getAvatar

▸ **getAvatar**(`nameOrAddress`): `Promise`\<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrAddress` | `string` |

#### Returns

`Promise`\<``null`` \| `string`\>

#### Inherited from

providers.JsonRpcProvider.getAvatar

___

### getBalance

▸ **getBalance**(`addressOrName`, `blockTag?`): `Promise`\<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`\<`string`\> |
| `blockTag?` | `BlockTag` \| `Promise`\<`BlockTag`\> |

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

providers.JsonRpcProvider.getBalance

___

### getBlock

▸ **getBlock**(`blockHashOrBlockTag`): `Promise`\<`Block`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockTag` | `BlockTag` \| `Promise`\<`BlockTag`\> |

#### Returns

`Promise`\<`Block`\>

#### Inherited from

providers.JsonRpcProvider.getBlock

___

### getBlockNumber

▸ **getBlockNumber**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

providers.JsonRpcProvider.getBlockNumber

___

### getBlockWithTransactions

▸ **getBlockWithTransactions**(`blockHashOrBlockTag`): `Promise`\<`BlockWithTransactions`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockTag` | `BlockTag` \| `Promise`\<`BlockTag`\> |

#### Returns

`Promise`\<`BlockWithTransactions`\>

#### Inherited from

providers.JsonRpcProvider.getBlockWithTransactions

___

### getCode

▸ **getCode**(`addressOrName`, `blockTag?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`\<`string`\> |
| `blockTag?` | `BlockTag` \| `Promise`\<`BlockTag`\> |

#### Returns

`Promise`\<`string`\>

#### Inherited from

providers.JsonRpcProvider.getCode

___

### getEtherPrice

▸ **getEtherPrice**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

providers.JsonRpcProvider.getEtherPrice

___

### getFeeData

▸ **getFeeData**(): `Promise`\<`FeeData`\>

#### Returns

`Promise`\<`FeeData`\>

#### Inherited from

providers.JsonRpcProvider.getFeeData

___

### getGasPrice

▸ **getGasPrice**(): `Promise`\<`BigNumber`\>

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

providers.JsonRpcProvider.getGasPrice

___

### getLogs

▸ **getLogs**(`filter`): `Promise`\<`Log`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `Filter` \| `FilterByBlockHash` \| `Promise`\<`Filter` \| `FilterByBlockHash`\> |

#### Returns

`Promise`\<`Log`[]\>

#### Inherited from

providers.JsonRpcProvider.getLogs

___

### getNetwork

▸ **getNetwork**(): `Promise`\<`Network`\>

#### Returns

`Promise`\<`Network`\>

#### Overrides

providers.JsonRpcProvider.getNetwork

___

### getResolver

▸ **getResolver**(`name`): `Promise`\<``null`` \| `Resolver`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`\<``null`` \| `Resolver`\>

#### Inherited from

providers.JsonRpcProvider.getResolver

___

### getSigner

▸ **getSigner**(`addressOrIndex?`): `JsonRpcSigner`

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrIndex?` | `string` \| `number` |

#### Returns

`JsonRpcSigner`

#### Inherited from

providers.JsonRpcProvider.getSigner

___

### getStorageAt

▸ **getStorageAt**(`addressOrName`, `position`, `blockTag?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`\<`string`\> |
| `position` | `BigNumberish` \| `Promise`\<`BigNumberish`\> |
| `blockTag?` | `BlockTag` \| `Promise`\<`BlockTag`\> |

#### Returns

`Promise`\<`string`\>

#### Inherited from

providers.JsonRpcProvider.getStorageAt

___

### getTransaction

▸ **getTransaction**(`transactionHash`): `Promise`\<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` \| `Promise`\<`string`\> |

#### Returns

`Promise`\<`TransactionResponse`\>

#### Inherited from

providers.JsonRpcProvider.getTransaction

___

### getTransactionCount

▸ **getTransactionCount**(`addressOrName`, `blockTag?`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`\<`string`\> |
| `blockTag?` | `BlockTag` \| `Promise`\<`BlockTag`\> |

#### Returns

`Promise`\<`number`\>

#### Inherited from

providers.JsonRpcProvider.getTransactionCount

___

### getTransactionReceipt

▸ **getTransactionReceipt**(`transactionHash`): `Promise`\<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` \| `Promise`\<`string`\> |

#### Returns

`Promise`\<`TransactionReceipt`\>

#### Inherited from

providers.JsonRpcProvider.getTransactionReceipt

___

### getUncheckedSigner

▸ **getUncheckedSigner**(`addressOrIndex?`): `UncheckedJsonRpcSigner`

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrIndex?` | `string` \| `number` |

#### Returns

`UncheckedJsonRpcSigner`

#### Inherited from

providers.JsonRpcProvider.getUncheckedSigner

___

### listAccounts

▸ **listAccounts**(): `Promise`\<`string`[]\>

#### Returns

`Promise`\<`string`[]\>

#### Inherited from

providers.JsonRpcProvider.listAccounts

___

### listenerCount

▸ **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `EventType` |

#### Returns

`number`

#### Inherited from

providers.JsonRpcProvider.listenerCount

___

### listeners

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `EventType` |

#### Returns

`Listener`[]

#### Inherited from

providers.JsonRpcProvider.listeners

___

### lookupAddress

▸ **lookupAddress**(`address`): `Promise`\<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` \| `Promise`\<`string`\> |

#### Returns

`Promise`\<``null`` \| `string`\>

#### Inherited from

providers.JsonRpcProvider.lookupAddress

___

### off

▸ **off**(`eventName`, `listener?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `EventType` |
| `listener?` | `Listener` |

#### Returns

`this`

#### Inherited from

providers.JsonRpcProvider.off

___

### on

▸ **on**(`eventName`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `EventType` |
| `listener` | `Listener` |

#### Returns

`this`

#### Inherited from

providers.JsonRpcProvider.on

___

### once

▸ **once**(`eventName`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `EventType` |
| `listener` | `Listener` |

#### Returns

`this`

#### Inherited from

providers.JsonRpcProvider.once

___

### perform

▸ **perform**(`method`, `params`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `params` | `any` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

providers.JsonRpcProvider.perform

___

### poll

▸ **poll**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

providers.JsonRpcProvider.poll

___

### prepareRequest

▸ **prepareRequest**(`method`, `params`): [`string`, `any`[]]

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `params` | `any` |

#### Returns

[`string`, `any`[]]

#### Inherited from

providers.JsonRpcProvider.prepareRequest

___

### removeAllListeners

▸ **removeAllListeners**(`eventName?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `EventType` |

#### Returns

`this`

#### Inherited from

providers.JsonRpcProvider.removeAllListeners

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): `Provider`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `EventType` |
| `listener` | `Listener` |

#### Returns

`Provider`

#### Inherited from

providers.JsonRpcProvider.removeListener

___

### resetEventsBlock

▸ **resetEventsBlock**(`blockNumber`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockNumber` | `number` |

#### Returns

`void`

#### Inherited from

providers.JsonRpcProvider.resetEventsBlock

___

### resolveName

▸ **resolveName**(`name`): `Promise`\<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Promise`\<`string`\> |

#### Returns

`Promise`\<``null`` \| `string`\>

#### Inherited from

providers.JsonRpcProvider.resolveName

___

### send

▸ **send**(`method`, `params`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `params` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Inherited from

providers.JsonRpcProvider.send

___

### sendTransaction

▸ **sendTransaction**(`signedTransaction`): `Promise`\<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signedTransaction` | `string` \| `Promise`\<`string`\> |

#### Returns

`Promise`\<`TransactionResponse`\>

#### Inherited from

providers.JsonRpcProvider.sendTransaction

___

### waitForTransaction

▸ **waitForTransaction**(`transactionHash`, `confirmations?`, `timeout?`): `Promise`\<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` |
| `confirmations?` | `number` |
| `timeout?` | `number` |

#### Returns

`Promise`\<`TransactionReceipt`\>

#### Inherited from

providers.JsonRpcProvider.waitForTransaction

___

### defaultUrl

▸ **defaultUrl**(): `string`

#### Returns

`string`

#### Inherited from

providers.JsonRpcProvider.defaultUrl

___

### getFormatter

▸ **getFormatter**(): `Formatter`

#### Returns

`Formatter`

#### Inherited from

providers.JsonRpcProvider.getFormatter

___

### getNetwork

▸ **getNetwork**(`network`): `Network`

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | `Networkish` |

#### Returns

`Network`

#### Inherited from

providers.JsonRpcProvider.getNetwork

___

### hexlifyTransaction

▸ **hexlifyTransaction**(`transaction`, `allowExtra?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `TransactionRequest` |
| `allowExtra?` | `Object` |

#### Returns

`Object`

#### Inherited from

providers.JsonRpcProvider.hexlifyTransaction

___

### isProvider

▸ **isProvider**(`value`): value is Provider

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Provider

#### Inherited from

providers.JsonRpcProvider.isProvider
