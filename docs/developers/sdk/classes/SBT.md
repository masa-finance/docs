[# Masa SDK
 - v1.13.0](../README.md) / [Exports](../modules.md) / SBT

# Class: SBT

## Hierarchy

- [`MasaModuleBase`](MasaModuleBase.md)

  ↳ **`SBT`**

## Table of contents

### Constructors

- [constructor](SBT.md#constructor)

### Properties

- [instances](SBT.md#instances)
- [masa](SBT.md#masa)

### Methods

- [addSlippage](SBT.md#addslippage)
- [checkOrGiveAllowance](SBT.md#checkorgiveallowance)
- [connect](SBT.md#connect)
- [formatPrice](SBT.md#formatprice)
- [getPaymentAddress](SBT.md#getpaymentaddress)
- [verify](SBT.md#verify)

## Constructors

### constructor

• **new SBT**(`masa`, `instances`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](Masa.md) |
| `instances` | [`IIdentityContracts`](../interfaces/IIdentityContracts.md) |

#### Inherited from

[MasaModuleBase](MasaModuleBase.md).[constructor](MasaModuleBase.md#constructor)

## Properties

### instances

• `Protected` **instances**: [`IIdentityContracts`](../interfaces/IIdentityContracts.md)

#### Inherited from

[MasaModuleBase](MasaModuleBase.md).[instances](MasaModuleBase.md#instances)

___

### masa

• `Protected` **masa**: [`Masa`](Masa.md)

#### Inherited from

[MasaModuleBase](MasaModuleBase.md).[masa](MasaModuleBase.md#masa)

## Methods

### addSlippage

▸ `Protected` **addSlippage**(`price`, `slippage`): `BigNumber`

adds a percentage to the price as slippage

#### Parameters

| Name | Type |
| :------ | :------ |
| `price` | `BigNumber` |
| `slippage` | `number` |

#### Returns

`BigNumber`

#### Inherited from

[MasaModuleBase](MasaModuleBase.md).[addSlippage](MasaModuleBase.md#addslippage)

___

### checkOrGiveAllowance

▸ `Private` **checkOrGiveAllowance**(`paymentAddress`, `paymentMethod`, `spenderAddress`, `price`): `Promise`<`undefined` \| `ContractReceipt`\>

Checks or gives allowance on ERC20 tokens

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentAddress` | `string` |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |
| `spenderAddress` | `string` |
| `price` | `BigNumber` |

#### Returns

`Promise`<`undefined` \| `ContractReceipt`\>

#### Inherited from

[MasaModuleBase](MasaModuleBase.md).[checkOrGiveAllowance](MasaModuleBase.md#checkorgiveallowance)

___

### connect

▸ **connect**<`Contract`\>(`address`, `factory?`): `Promise`<{ `getPrice`: (`paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod), `slippage`: `undefined` \| `number`) => `Promise`<`undefined` \| { `formattedPrice`: `string` ; `paymentAddress`: `string` ; `price`: `BigNumber`  }\> ; `prepareMint`: (`paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod), `name`: `string`, `types`: `Record`<`string`, `TypedDataField`[]\>, `value`: `Record`<`string`, `string` \| `number` \| `BigNumber`\>, `signature`: `string`, `authorityAddress`: `string`, `slippage`: `undefined` \| `number`) => `Promise`<`undefined` \| { `paymentAddress`: `string` = priceObject.paymentAddress; `price`: `BigNumber` = priceObject.price }\> ; `selfSovereignSBT`: `undefined` \| `Contract` ; `sign`: (`name`: `string`, `types`: `Record`<`string`, `TypedDataField`[]\>, `value`: `Record`<`string`, `string` \| `number` \| `BigNumber`\>) => `Promise`<`undefined` \| { `authorityAddress`: `string` ; `signature`: `string`  }\>  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `MasaSBTSelfSovereign`<`Contract`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `address` | `string` | `undefined` |
| `factory` | [`ContractFactory`](ContractFactory.md) | `MasaSBTSelfSovereign__factory` |

#### Returns

`Promise`<{ `getPrice`: (`paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod), `slippage`: `undefined` \| `number`) => `Promise`<`undefined` \| { `formattedPrice`: `string` ; `paymentAddress`: `string` ; `price`: `BigNumber`  }\> ; `prepareMint`: (`paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod), `name`: `string`, `types`: `Record`<`string`, `TypedDataField`[]\>, `value`: `Record`<`string`, `string` \| `number` \| `BigNumber`\>, `signature`: `string`, `authorityAddress`: `string`, `slippage`: `undefined` \| `number`) => `Promise`<`undefined` \| { `paymentAddress`: `string` = priceObject.paymentAddress; `price`: `BigNumber` = priceObject.price }\> ; `selfSovereignSBT`: `undefined` \| `Contract` ; `sign`: (`name`: `string`, `types`: `Record`<`string`, `TypedDataField`[]\>, `value`: `Record`<`string`, `string` \| `number` \| `BigNumber`\>) => `Promise`<`undefined` \| { `authorityAddress`: `string` ; `signature`: `string`  }\>  }\>

___

### formatPrice

▸ `Protected` **formatPrice**(`paymentAddress`, `price`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentAddress` | `string` |
| `price` | `BigNumber` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[MasaModuleBase](MasaModuleBase.md).[formatPrice](MasaModuleBase.md#formatprice)

___

### getPaymentAddress

▸ `Private` **getPaymentAddress**(`paymentMethod`): `string`

Gets the payment address for a given payment method

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |

#### Returns

`string`

#### Inherited from

[MasaModuleBase](MasaModuleBase.md).[getPaymentAddress](MasaModuleBase.md#getpaymentaddress)

___

### verify

▸ `Protected` **verify**(`errorMessage`, `contract`, `domain`, `types`, `value`, `signature`, `authorityAddress`): `Promise`<`void`\>

verify a signature created during one of the SBT signing flows

#### Parameters

| Name | Type |
| :------ | :------ |
| `errorMessage` | `string` |
| `contract` | `SoulLinker` \| `SoulStore` \| `MasaSBTSelfSovereign` |
| `domain` | `TypedDataDomain` |
| `types` | `Record`<`string`, `TypedDataField`[]\> |
| `value` | `Record`<`string`, `string` \| `number` \| `BigNumber`\> |
| `signature` | `string` |
| `authorityAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[MasaModuleBase](MasaModuleBase.md).[verify](MasaModuleBase.md#verify)
