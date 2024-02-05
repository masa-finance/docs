[# Masa SDK
 - v3.17.0](../README.md) / [Exports](../modules.md) / SoulName

# Class: SoulName

## Hierarchy

- `MasaModuleBase`

  ↳ **`SoulName`**

## Table of contents

### Constructors

- [constructor](SoulName.md#constructor)

### Properties

- [instances](SoulName.md#instances)
- [masa](SoulName.md#masa)
- [types](SoulName.md#types)

### Methods

- [burn](SoulName.md#burn)
- [checkOrGiveAllowance](SoulName.md#checkorgiveallowance)
- [createOverrides](SoulName.md#createoverrides)
- [estimateGasWithSlippage](SoulName.md#estimategaswithslippage)
- [formatPrice](SoulName.md#formatprice)
- [getNetworkFeeInformation](SoulName.md#getnetworkfeeinformation)
- [getPaymentAddress](SoulName.md#getpaymentaddress)
- [getPrice](SoulName.md#getprice)
- [getSoulnameData](SoulName.md#getsoulnamedata)
- [isAvailable](SoulName.md#isavailable)
- [purchase](SoulName.md#purchase)
- [renew](SoulName.md#renew)
- [sign](SoulName.md#sign)
- [transfer](SoulName.md#transfer)
- [verify](SoulName.md#verify)
- [addSlippage](SoulName.md#addslippage)

## Constructors

### constructor

• **new SoulName**(`masa`, `instances`): [`SoulName`](SoulName.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |
| `instances` | [`IIdentityContracts`](../interfaces/IIdentityContracts.md) |

#### Returns

[`SoulName`](SoulName.md)

#### Inherited from

MasaModuleBase.constructor

## Properties

### instances

• `Protected` **instances**: [`IIdentityContracts`](../interfaces/IIdentityContracts.md)

#### Inherited from

MasaModuleBase.instances

___

### masa

• `Protected` `Readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

MasaModuleBase.masa

___

### types

• `Readonly` **types**: `Record`\<`string`, `TypedDataField`[]\>

## Methods

### burn

▸ **burn**(`soulName`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `soulName` | `string` |

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

___

### checkOrGiveAllowance

▸ **checkOrGiveAllowance**(`paymentAddress`, `paymentMethod`, `spenderAddress`, `price`): `Promise`\<`undefined` \| `ContractReceipt`\>

Checks or gives allowance on ERC20 tokens

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentAddress` | `string` |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |
| `spenderAddress` | `string` |
| `price` | `BigNumber` |

#### Returns

`Promise`\<`undefined` \| `ContractReceipt`\>

#### Inherited from

MasaModuleBase.checkOrGiveAllowance

___

### createOverrides

▸ **createOverrides**(`value?`): `Promise`\<`PayableOverrides`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `BigNumber` |

#### Returns

`Promise`\<`PayableOverrides`\>

#### Inherited from

MasaModuleBase.createOverrides

___

### estimateGasWithSlippage

▸ **estimateGasWithSlippage**(`estimateGas`, `args?`, `overrides?`): `Promise`\<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `estimateGas` | (...`estimateGasArgAndOverrides`: `never`[]) => `Promise`\<`BigNumber`\> |
| `args?` | `unknown`[] |
| `overrides?` | `PayableOverrides` |

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

MasaModuleBase.estimateGasWithSlippage

___

### formatPrice

▸ **formatPrice**(`paymentAddress`, `price`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentAddress` | `string` |
| `price` | `BigNumber` |

#### Returns

`Promise`\<`string`\>

#### Inherited from

MasaModuleBase.formatPrice

___

### getNetworkFeeInformation

▸ **getNetworkFeeInformation**(): `Promise`\<`undefined` \| `FeeData`\>

#### Returns

`Promise`\<`undefined` \| `FeeData`\>

#### Inherited from

MasaModuleBase.getNetworkFeeInformation

___

### getPaymentAddress

▸ **getPaymentAddress**(`paymentMethod`): `string`

Gets the payment address for a given payment method

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |

#### Returns

`string`

#### Inherited from

MasaModuleBase.getPaymentAddress

___

### getPrice

▸ **getPrice**(`paymentMethod`, `nameLength`, `duration?`, `slippage?`): `Promise`\<[`PriceInformation`](../interfaces/PriceInformation.md)\>

Get price for minting a soul name

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `undefined` |
| `nameLength` | `number` | `undefined` |
| `duration` | `number` | `1` |
| `slippage` | `undefined` \| `number` | `250` |

#### Returns

`Promise`\<[`PriceInformation`](../interfaces/PriceInformation.md)\>

___

### getSoulnameData

▸ **getSoulnameData**(`soulName`): `Promise`\<\{ `exists`: `boolean` ; `tokenId`: `BigNumber`  }\>

Returns detailed information for a soul name

#### Parameters

| Name | Type |
| :------ | :------ |
| `soulName` | `string` |

#### Returns

`Promise`\<\{ `exists`: `boolean` ; `tokenId`: `BigNumber`  }\>

___

### isAvailable

▸ **isAvailable**(`soulName`): `Promise`\<`boolean`\>

Check if a soul name is available

#### Parameters

| Name | Type |
| :------ | :------ |
| `soulName` | `string` |

#### Returns

`Promise`\<`boolean`\>

___

### purchase

▸ **purchase**(`paymentMethod`, `name`, `nameLength`, `duration?`, `metadataURL`, `authorityAddress`, `signature`, `receiver?`): `Promise`\<`ContractTransaction`\>

purchase only name

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `undefined` |
| `name` | `string` | `undefined` |
| `nameLength` | `number` | `undefined` |
| `duration` | `number` | `1` |
| `metadataURL` | `string` | `undefined` |
| `authorityAddress` | `string` | `undefined` |
| `signature` | `string` | `undefined` |
| `receiver?` | `string` | `undefined` |

#### Returns

`Promise`\<`ContractTransaction`\>

___

### renew

▸ **renew**(`soulName`, `years`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `soulName` | `string` |
| `years` | `number` |

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

___

### sign

▸ **sign**(`soulName`, `soulNameLength`, `duration`, `metadataUrl`, `receiver`): `Promise`\<`undefined` \| \{ `authorityAddress`: `string` ; `signature`: `string`  }\>

signs a soul name

#### Parameters

| Name | Type |
| :------ | :------ |
| `soulName` | `string` |
| `soulNameLength` | `number` |
| `duration` | `number` |
| `metadataUrl` | `string` |
| `receiver` | `string` |

#### Returns

`Promise`\<`undefined` \| \{ `authorityAddress`: `string` ; `signature`: `string`  }\>

___

### transfer

▸ **transfer**(`soulName`, `receiver`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `soulName` | `string` |
| `receiver` | `string` |

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

___

### verify

▸ **verify**(`errorMessage`, `contract`, `domain`, `types`, `value`, `signature`, `authorityAddress`): `Promise`\<`void`\>

verify a signature created during one of the SBT signing flows

#### Parameters

| Name | Type |
| :------ | :------ |
| `errorMessage` | `string` |
| `contract` | `SoulLinker` \| `SoulStore` \| `MasaSBT` \| `MasaSBTSelfSovereign` \| `MasaSBTAuthority` |
| `domain` | `TypedDataDomain` |
| `types` | `Record`\<`string`, `TypedDataField`[]\> |
| `value` | `Record`\<`string`, `string` \| `number` \| `boolean` \| `BigNumber`\> |
| `signature` | `string` |
| `authorityAddress` | `string` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

MasaModuleBase.verify

___

### addSlippage

▸ **addSlippage**(`price`, `slippage`): `BigNumber`

adds a percentage to the price as slippage

#### Parameters

| Name | Type |
| :------ | :------ |
| `price` | `BigNumber` |
| `slippage` | `number` |

#### Returns

`BigNumber`

#### Inherited from

MasaModuleBase.addSlippage
