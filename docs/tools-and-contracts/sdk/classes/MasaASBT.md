[**Masa SDK v3.36.1**](../README.md) • **Docs**

***

[Masa SDK v3.36.1](../globals.md) / MasaASBT

# Class: MasaASBT

## Extends

- `MasaBase`

## Constructors

### new MasaASBT()

> **new MasaASBT**(`masa`): [`MasaASBT`](MasaASBT.md)

#### Parameters

• **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Returns

[`MasaASBT`](MasaASBT.md)

#### Inherited from

`MasaBase.constructor`

## Properties

### masa

> `protected` `readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

`MasaBase.masa`

## Methods

### attach()

> **attach**\<`Contract`\>(`contract`): [`MasaASBTWrapper`](MasaASBTWrapper.md)\<`Contract`\>

#### Type parameters

• **Contract** *extends* `ReferenceSBTAuthority`

#### Parameters

• **contract**: `Contract`

#### Returns

[`MasaASBTWrapper`](MasaASBTWrapper.md)\<`Contract`\>

***

### connect()

> **connect**\<`Contract`\>(`address`, `factory`): `Promise`\<[`MasaASBTWrapper`](MasaASBTWrapper.md)\<`Contract`\>\>

#### Type parameters

• **Contract** *extends* `ReferenceSBTAuthority`

#### Parameters

• **address**: `string`

• **factory**: [`ContractFactory`](ContractFactory.md)= `ReferenceSBTAuthority__factory`

#### Returns

`Promise`\<[`MasaASBTWrapper`](MasaASBTWrapper.md)\<`Contract`\>\>

***

### deploy()

> **deploy**(`__namedParameters`): `Promise`\<`undefined` \| [`DeployResult`](../interfaces/DeployResult.md)\<`PaymentParamsStruct`\>\>

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.adminAddress?**: `string`

• **\_\_namedParameters.baseTokenUri**: `string`

• **\_\_namedParameters.limit?**: `number`= `1`

• **\_\_namedParameters.name**: `string`

• **\_\_namedParameters.symbol**: `string`

#### Returns

`Promise`\<`undefined` \| [`DeployResult`](../interfaces/DeployResult.md)\<`PaymentParamsStruct`\>\>
