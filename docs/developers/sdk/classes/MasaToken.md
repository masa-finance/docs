[**# Masa SDK v3.36.1**](../README.md) • **Docs**

***

[# Masa SDK v3.36.1](../globals.md) / MasaToken

# Class: MasaToken

## Extends

- `MasaBase`

## Constructors

### new MasaToken()

> **new MasaToken**(`masa`): [`MasaToken`](MasaToken.md)

#### Parameters

• **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Returns

[`MasaToken`](MasaToken.md)

#### Inherited from

`MasaBase.constructor`

## Properties

### bridge

> **bridge**: `object`

#### getSendParameters()

> **getSendParameters**: (`eid`, `receiverAddress`, `tokenAmount`, `slippage`?) => `object`

Get send parameters

##### Parameters

• **eid**: `EndpointId`

• **receiverAddress**: `string`

• **tokenAmount**: `BigNumber`

• **slippage?**: `number`

##### Returns

`object`

###### sendParameters

> **sendParameters**: `SendParamStruct` \| `SendParamStruct` \| `SendParamStruct`

###### slippage

> **slippage**: `number`

#### getSendQuote()

> **getSendQuote**: (`sendParameters`) => `Promise`\<[`BaseResult`](../interfaces/BaseResult.md) \| [`QuoteResult`](../interfaces/QuoteResult.md)\>

Get send quote

##### Parameters

• **sendParameters**: `SendParamStruct` \| `SendParamStruct` \| `SendParamStruct`

##### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md) \| [`QuoteResult`](../interfaces/QuoteResult.md)\>

#### send()

> **send**: (`to`, `amount`, `slippage`?) => `Promise`\<[`SendResult`](../interfaces/SendResult.md)\>

Send

##### Parameters

• **to**: [`NetworkName`](../type-aliases/NetworkName.md)

• **amount**: `string`

• **slippage?**: `number`

##### Returns

`Promise`\<[`SendResult`](../interfaces/SendResult.md)\>

***

### masa

> `protected` `readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

`MasaBase.masa`

***

### staking

> **staking**: `object`

#### show()

> **show**: (`address`?) => `Promise`\<[`BaseResult`](../interfaces/BaseResult.md) & `object`\>

Show stakes

##### Parameters

• **address?**: `string`

##### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md) & `object`\>

#### stake()

> **stake**: (`amount`, `duration`) => `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

Stake

##### Parameters

• **amount**: `string`

• **duration**: `number`

##### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### unstake()

> **unstake**: (`index`) => `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

Unstake

##### Parameters

• **index**: `number`

##### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

***

### wrap

> **wrap**: `object`

#### deposit()

> **deposit**: (`amount`) => `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

Deposit

##### Parameters

• **amount**: `string`

##### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### withdraw()

> **withdraw**: (`amount`) => `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

Withdraw

##### Parameters

• **amount**: `string`

##### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>
