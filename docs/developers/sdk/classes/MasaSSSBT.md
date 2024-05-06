[**# Masa SDK v3.36.1**](../README.md) • **Docs**

***

[# Masa SDK v3.36.1](../globals.md) / MasaSSSBT

# Class: MasaSSSBT

## Extends

- `MasaBase`

## Constructors

### new MasaSSSBT()

> **new MasaSSSBT**(`masa`): [`MasaSSSBT`](MasaSSSBT.md)

#### Parameters

• **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Returns

[`MasaSSSBT`](MasaSSSBT.md)

#### Inherited from

`MasaBase.constructor`

## Properties

### masa

> `protected` `readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

`MasaBase.masa`

## Methods

### attach()

> **attach**\<`Contract`\>(`contract`): [`MasaSSSBTWrapper`](MasaSSSBTWrapper.md)\<`Contract`\>

#### Type parameters

• **Contract** *extends* `ReferenceSBTSelfSovereign`

#### Parameters

• **contract**: `Contract`

#### Returns

[`MasaSSSBTWrapper`](MasaSSSBTWrapper.md)\<`Contract`\>

***

### connect()

> **connect**\<`Contract`\>(`address`, `factory`): `Promise`\<[`MasaSSSBTWrapper`](MasaSSSBTWrapper.md)\<`Contract`\>\>

#### Type parameters

• **Contract** *extends* `ReferenceSBTSelfSovereign`

#### Parameters

• **address**: `string`

• **factory**: [`ContractFactory`](ContractFactory.md)= `ReferenceSBTSelfSovereign__factory`

#### Returns

`Promise`\<[`MasaSSSBTWrapper`](MasaSSSBTWrapper.md)\<`Contract`\>\>

***

### deploy()

> **deploy**(`__namedParameters`): `Promise`\<`undefined` \| [`DeployResult`](../interfaces/DeployResult.md)\<`PaymentParamsStruct`\>\>

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.adminAddress?**: `string`

• **\_\_namedParameters.authorityAddress**: `string`

• **\_\_namedParameters.baseTokenUri**: `string`

• **\_\_namedParameters.limit?**: `number`= `1`

• **\_\_namedParameters.name**: `string`

• **\_\_namedParameters.symbol**: `string`

#### Returns

`Promise`\<`undefined` \| [`DeployResult`](../interfaces/DeployResult.md)\<`PaymentParamsStruct`\>\>
