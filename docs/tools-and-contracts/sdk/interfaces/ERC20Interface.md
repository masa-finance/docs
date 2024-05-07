[**Masa SDK v3.36.1**](../README.md) • **Docs**

***

[Masa SDK v3.36.1](../globals.md) / ERC20Interface

# Interface: ERC20Interface

## Extends

- `Interface`

## Properties

### \_abiCoder

> `readonly` **\_abiCoder**: `AbiCoder`

#### Inherited from

`utils.Interface._abiCoder`

***

### \_isInterface

> `readonly` **\_isInterface**: `boolean`

#### Inherited from

`utils.Interface._isInterface`

***

### deploy

> `readonly` **deploy**: `ConstructorFragment`

#### Inherited from

`utils.Interface.deploy`

***

### errors

> `readonly` **errors**: `object`

#### Index signature

 \[`name`: `string`\]: `ErrorFragment`

#### Inherited from

`utils.Interface.errors`

***

### events

> **events**: `object`

#### Approval(address,address,uint256)

> **Approval(address,address,uint256)**: `EventFragment`

#### Transfer(address,address,uint256)

> **Transfer(address,address,uint256)**: `EventFragment`

#### Overrides

`utils.Interface.events`

***

### fragments

> `readonly` **fragments**: readonly `Fragment`[]

#### Inherited from

`utils.Interface.fragments`

***

### functions

> **functions**: `object`

#### allowance(address,address)

> **allowance(address,address)**: `FunctionFragment`

#### approve(address,uint256)

> **approve(address,uint256)**: `FunctionFragment`

#### balanceOf(address)

> **balanceOf(address)**: `FunctionFragment`

#### decimals()

> **decimals()**: `FunctionFragment`

#### decreaseAllowance(address,uint256)

> **decreaseAllowance(address,uint256)**: `FunctionFragment`

#### increaseAllowance(address,uint256)

> **increaseAllowance(address,uint256)**: `FunctionFragment`

#### name()

> **name()**: `FunctionFragment`

#### symbol()

> **symbol()**: `FunctionFragment`

#### totalSupply()

> **totalSupply()**: `FunctionFragment`

#### transfer(address,uint256)

> **transfer(address,uint256)**: `FunctionFragment`

#### transferFrom(address,address,uint256)

> **transferFrom(address,address,uint256)**: `FunctionFragment`

#### Overrides

`utils.Interface.functions`

***

### structs

> `readonly` **structs**: `object`

#### Index signature

 \[`name`: `string`\]: `any`

#### Inherited from

`utils.Interface.structs`

## Methods

### \_decodeParams()

> **\_decodeParams**(`params`, `data`): `Result`

#### Parameters

• **params**: readonly `ParamType`[]

• **data**: `BytesLike`

#### Returns

`Result`

#### Inherited from

`utils.Interface._decodeParams`

***

### \_encodeParams()

> **\_encodeParams**(`params`, `values`): `string`

#### Parameters

• **params**: readonly `ParamType`[]

• **values**: readonly `any`[]

#### Returns

`string`

#### Inherited from

`utils.Interface._encodeParams`

***

### decodeErrorResult()

> **decodeErrorResult**(`fragment`, `data`): `Result`

#### Parameters

• **fragment**: `string` \| `ErrorFragment`

• **data**: `BytesLike`

#### Returns

`Result`

#### Inherited from

`utils.Interface.decodeErrorResult`

***

### decodeEventLog()

> **decodeEventLog**(`eventFragment`, `data`, `topics`?): `Result`

#### Parameters

• **eventFragment**: `string` \| `EventFragment`

• **data**: `BytesLike`

• **topics?**: readonly `string`[]

#### Returns

`Result`

#### Inherited from

`utils.Interface.decodeEventLog`

***

### decodeFunctionData()

> **decodeFunctionData**(`functionFragment`, `data`): `Result`

#### Parameters

• **functionFragment**: `string` \| `FunctionFragment`

• **data**: `BytesLike`

#### Returns

`Result`

#### Inherited from

`utils.Interface.decodeFunctionData`

***

### decodeFunctionResult()

#### decodeFunctionResult(functionFragment, data)

> **decodeFunctionResult**(`functionFragment`, `data`): `Result`

##### Parameters

• **functionFragment**: `"allowance"`

• **data**: `BytesLike`

##### Returns

`Result`

##### Overrides

`utils.Interface.decodeFunctionResult`

#### decodeFunctionResult(functionFragment, data)

> **decodeFunctionResult**(`functionFragment`, `data`): `Result`

##### Parameters

• **functionFragment**: `"approve"`

• **data**: `BytesLike`

##### Returns

`Result`

##### Overrides

`utils.Interface.decodeFunctionResult`

#### decodeFunctionResult(functionFragment, data)

> **decodeFunctionResult**(`functionFragment`, `data`): `Result`

##### Parameters

• **functionFragment**: `"balanceOf"`

• **data**: `BytesLike`

##### Returns

`Result`

##### Overrides

`utils.Interface.decodeFunctionResult`

#### decodeFunctionResult(functionFragment, data)

> **decodeFunctionResult**(`functionFragment`, `data`): `Result`

##### Parameters

• **functionFragment**: `"decimals"`

• **data**: `BytesLike`

##### Returns

`Result`

##### Overrides

`utils.Interface.decodeFunctionResult`

#### decodeFunctionResult(functionFragment, data)

> **decodeFunctionResult**(`functionFragment`, `data`): `Result`

##### Parameters

• **functionFragment**: `"decreaseAllowance"`

• **data**: `BytesLike`

##### Returns

`Result`

##### Overrides

`utils.Interface.decodeFunctionResult`

#### decodeFunctionResult(functionFragment, data)

> **decodeFunctionResult**(`functionFragment`, `data`): `Result`

##### Parameters

• **functionFragment**: `"increaseAllowance"`

• **data**: `BytesLike`

##### Returns

`Result`

##### Overrides

`utils.Interface.decodeFunctionResult`

#### decodeFunctionResult(functionFragment, data)

> **decodeFunctionResult**(`functionFragment`, `data`): `Result`

##### Parameters

• **functionFragment**: `"name"`

• **data**: `BytesLike`

##### Returns

`Result`

##### Overrides

`utils.Interface.decodeFunctionResult`

#### decodeFunctionResult(functionFragment, data)

> **decodeFunctionResult**(`functionFragment`, `data`): `Result`

##### Parameters

• **functionFragment**: `"symbol"`

• **data**: `BytesLike`

##### Returns

`Result`

##### Overrides

`utils.Interface.decodeFunctionResult`

#### decodeFunctionResult(functionFragment, data)

> **decodeFunctionResult**(`functionFragment`, `data`): `Result`

##### Parameters

• **functionFragment**: `"totalSupply"`

• **data**: `BytesLike`

##### Returns

`Result`

##### Overrides

`utils.Interface.decodeFunctionResult`

#### decodeFunctionResult(functionFragment, data)

> **decodeFunctionResult**(`functionFragment`, `data`): `Result`

##### Parameters

• **functionFragment**: `"transfer"`

• **data**: `BytesLike`

##### Returns

`Result`

##### Overrides

`utils.Interface.decodeFunctionResult`

#### decodeFunctionResult(functionFragment, data)

> **decodeFunctionResult**(`functionFragment`, `data`): `Result`

##### Parameters

• **functionFragment**: `"transferFrom"`

• **data**: `BytesLike`

##### Returns

`Result`

##### Overrides

`utils.Interface.decodeFunctionResult`

***

### encodeDeploy()

> **encodeDeploy**(`values`?): `string`

#### Parameters

• **values?**: readonly `any`[]

#### Returns

`string`

#### Inherited from

`utils.Interface.encodeDeploy`

***

### encodeErrorResult()

> **encodeErrorResult**(`fragment`, `values`?): `string`

#### Parameters

• **fragment**: `string` \| `ErrorFragment`

• **values?**: readonly `any`[]

#### Returns

`string`

#### Inherited from

`utils.Interface.encodeErrorResult`

***

### encodeEventLog()

> **encodeEventLog**(`eventFragment`, `values`): `object`

#### Parameters

• **eventFragment**: `string` \| `EventFragment`

• **values**: readonly `any`[]

#### Returns

`object`

##### data

> **data**: `string`

##### topics

> **topics**: `string`[]

#### Inherited from

`utils.Interface.encodeEventLog`

***

### encodeFilterTopics()

> **encodeFilterTopics**(`eventFragment`, `values`): (`string` \| `string`[])[]

#### Parameters

• **eventFragment**: `string` \| `EventFragment`

• **values**: readonly `any`[]

#### Returns

(`string` \| `string`[])[]

#### Inherited from

`utils.Interface.encodeFilterTopics`

***

### encodeFunctionData()

#### encodeFunctionData(functionFragment, values)

> **encodeFunctionData**(`functionFragment`, `values`): `string`

##### Parameters

• **functionFragment**: `"allowance"`

• **values**: [`string`, `string`]

##### Returns

`string`

##### Overrides

`utils.Interface.encodeFunctionData`

#### encodeFunctionData(functionFragment, values)

> **encodeFunctionData**(`functionFragment`, `values`): `string`

##### Parameters

• **functionFragment**: `"approve"`

• **values**: [`string`, `BigNumberish`]

##### Returns

`string`

##### Overrides

`utils.Interface.encodeFunctionData`

#### encodeFunctionData(functionFragment, values)

> **encodeFunctionData**(`functionFragment`, `values`): `string`

##### Parameters

• **functionFragment**: `"balanceOf"`

• **values**: [`string`]

##### Returns

`string`

##### Overrides

`utils.Interface.encodeFunctionData`

#### encodeFunctionData(functionFragment, values)

> **encodeFunctionData**(`functionFragment`, `values`?): `string`

##### Parameters

• **functionFragment**: `"decimals"`

• **values?**: `undefined`

##### Returns

`string`

##### Overrides

`utils.Interface.encodeFunctionData`

#### encodeFunctionData(functionFragment, values)

> **encodeFunctionData**(`functionFragment`, `values`): `string`

##### Parameters

• **functionFragment**: `"decreaseAllowance"`

• **values**: [`string`, `BigNumberish`]

##### Returns

`string`

##### Overrides

`utils.Interface.encodeFunctionData`

#### encodeFunctionData(functionFragment, values)

> **encodeFunctionData**(`functionFragment`, `values`): `string`

##### Parameters

• **functionFragment**: `"increaseAllowance"`

• **values**: [`string`, `BigNumberish`]

##### Returns

`string`

##### Overrides

`utils.Interface.encodeFunctionData`

#### encodeFunctionData(functionFragment, values)

> **encodeFunctionData**(`functionFragment`, `values`?): `string`

##### Parameters

• **functionFragment**: `"name"`

• **values?**: `undefined`

##### Returns

`string`

##### Overrides

`utils.Interface.encodeFunctionData`

#### encodeFunctionData(functionFragment, values)

> **encodeFunctionData**(`functionFragment`, `values`?): `string`

##### Parameters

• **functionFragment**: `"symbol"`

• **values?**: `undefined`

##### Returns

`string`

##### Overrides

`utils.Interface.encodeFunctionData`

#### encodeFunctionData(functionFragment, values)

> **encodeFunctionData**(`functionFragment`, `values`?): `string`

##### Parameters

• **functionFragment**: `"totalSupply"`

• **values?**: `undefined`

##### Returns

`string`

##### Overrides

`utils.Interface.encodeFunctionData`

#### encodeFunctionData(functionFragment, values)

> **encodeFunctionData**(`functionFragment`, `values`): `string`

##### Parameters

• **functionFragment**: `"transfer"`

• **values**: [`string`, `BigNumberish`]

##### Returns

`string`

##### Overrides

`utils.Interface.encodeFunctionData`

#### encodeFunctionData(functionFragment, values)

> **encodeFunctionData**(`functionFragment`, `values`): `string`

##### Parameters

• **functionFragment**: `"transferFrom"`

• **values**: [`string`, `string`, `BigNumberish`]

##### Returns

`string`

##### Overrides

`utils.Interface.encodeFunctionData`

***

### encodeFunctionResult()

> **encodeFunctionResult**(`functionFragment`, `values`?): `string`

#### Parameters

• **functionFragment**: `string` \| `FunctionFragment`

• **values?**: readonly `any`[]

#### Returns

`string`

#### Inherited from

`utils.Interface.encodeFunctionResult`

***

### format()

> **format**(`format`?): `string` \| `string`[]

#### Parameters

• **format?**: `string`

#### Returns

`string` \| `string`[]

#### Inherited from

`utils.Interface.format`

***

### getError()

> **getError**(`nameOrSignatureOrSighash`): `ErrorFragment`

#### Parameters

• **nameOrSignatureOrSighash**: `string`

#### Returns

`ErrorFragment`

#### Inherited from

`utils.Interface.getError`

***

### getEvent()

#### getEvent(nameOrSignatureOrTopic)

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

• **nameOrSignatureOrTopic**: `"Approval"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### getEvent(nameOrSignatureOrTopic)

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

• **nameOrSignatureOrTopic**: `"Transfer"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

***

### getEventTopic()

> **getEventTopic**(`eventFragment`): `string`

#### Parameters

• **eventFragment**: `string` \| `EventFragment`

#### Returns

`string`

#### Inherited from

`utils.Interface.getEventTopic`

***

### getFunction()

> **getFunction**(`nameOrSignatureOrTopic`): `FunctionFragment`

#### Parameters

• **nameOrSignatureOrTopic**: `"symbol"` \| `"name"` \| `"allowance"` \| `"approve"` \| `"balanceOf"` \| `"decimals"` \| `"decreaseAllowance"` \| `"increaseAllowance"` \| `"totalSupply"` \| `"transfer"` \| `"transferFrom"`

#### Returns

`FunctionFragment`

#### Overrides

`utils.Interface.getFunction`

***

### getSighash()

> **getSighash**(`fragment`): `string`

#### Parameters

• **fragment**: `string` \| `FunctionFragment` \| `ErrorFragment`

#### Returns

`string`

#### Inherited from

`utils.Interface.getSighash`

***

### parseError()

> **parseError**(`data`): `ErrorDescription`

#### Parameters

• **data**: `BytesLike`

#### Returns

`ErrorDescription`

#### Inherited from

`utils.Interface.parseError`

***

### parseLog()

> **parseLog**(`log`): `LogDescription`

#### Parameters

• **log**

• **log.data**: `string`

• **log.topics**: `string`[]

#### Returns

`LogDescription`

#### Inherited from

`utils.Interface.parseLog`

***

### parseTransaction()

> **parseTransaction**(`tx`): `TransactionDescription`

#### Parameters

• **tx**

• **tx.data**: `string`

• **tx.value?**: `BigNumberish`

#### Returns

`TransactionDescription`

#### Inherited from

`utils.Interface.parseTransaction`
