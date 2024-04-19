[# Masa SDK
 - v3.32.0](../README.md) / [Exports](../modules.md) / SoulLinker

# Class: SoulLinker

## Hierarchy

- `MasaContractModuleBase`

  ↳ **`SoulLinker`**

## Table of contents

### Constructors

- [constructor](SoulLinker.md#constructor)

### Properties

- [instances](SoulLinker.md#instances)
- [masa](SoulLinker.md#masa)
- [types](SoulLinker.md#types)

### Methods

- [addLink](SoulLinker.md#addlink)
- [breakLink](SoulLinker.md#breaklink)
- [checkOrGiveAllowance](SoulLinker.md#checkorgiveallowance)
- [createOverrides](SoulLinker.md#createoverrides)
- [estimateGasWithSlippage](SoulLinker.md#estimategaswithslippage)
- [formatPrice](SoulLinker.md#formatprice)
- [getNetworkFeeInformation](SoulLinker.md#getnetworkfeeinformation)
- [getPaymentAddress](SoulLinker.md#getpaymentaddress)
- [getPrice](SoulLinker.md#getprice)
- [signLink](SoulLinker.md#signlink)
- [verify](SoulLinker.md#verify)
- [addSlippage](SoulLinker.md#addslippage)

## Constructors

### constructor

• **new SoulLinker**(`masa`, `instances`): [`SoulLinker`](SoulLinker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |
| `instances` | [`IIdentityContracts`](../interfaces/IIdentityContracts.md) |

#### Returns

[`SoulLinker`](SoulLinker.md)

#### Inherited from

MasaContractModuleBase.constructor

## Properties

### instances

• `Protected` **instances**: [`IIdentityContracts`](../interfaces/IIdentityContracts.md)

#### Inherited from

MasaContractModuleBase.instances

___

### masa

• `Protected` `Readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

MasaContractModuleBase.masa

___

### types

• `Readonly` **types**: `Record`\<`string`, `TypedDataField`[]\>

## Methods

### addLink

▸ **addLink**(`tokenAddress`, `paymentMethod`, `readerIdentityId`, `ownerIdentityId`, `tokenId`, `signatureDate`, `expirationDate`, `signature`, `slippage?`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

Adds a link to the soullinker

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `tokenAddress` | `string` | `undefined` |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `undefined` |
| `readerIdentityId` | `BigNumber` | `undefined` |
| `ownerIdentityId` | `BigNumber` | `undefined` |
| `tokenId` | `BigNumber` | `undefined` |
| `signatureDate` | `number` | `undefined` |
| `expirationDate` | `number` | `undefined` |
| `signature` | `string` | `undefined` |
| `slippage` | `undefined` \| `number` | `250` |

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

___

### breakLink

▸ **breakLink**(`contract`, `tokenId`, `readerIdentityId`): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `Contract` |
| `tokenId` | `BigNumber` |
| `readerIdentityId` | `BigNumber` |

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

MasaContractModuleBase.checkOrGiveAllowance

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

MasaContractModuleBase.createOverrides

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

MasaContractModuleBase.estimateGasWithSlippage

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

MasaContractModuleBase.formatPrice

___

### getNetworkFeeInformation

▸ **getNetworkFeeInformation**(): `Promise`\<`undefined` \| `FeeData`\>

#### Returns

`Promise`\<`undefined` \| `FeeData`\>

#### Inherited from

MasaContractModuleBase.getNetworkFeeInformation

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

MasaContractModuleBase.getPaymentAddress

___

### getPrice

▸ **getPrice**(`tokenAddress`, `paymentMethod`, `slippage?`): `Promise`\<[`PriceInformation`](../interfaces/PriceInformation.md)\>

Gets price for establishing a link

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `tokenAddress` | `string` | `undefined` |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `undefined` |
| `slippage` | `undefined` \| `number` | `250` |

#### Returns

`Promise`\<[`PriceInformation`](../interfaces/PriceInformation.md)\>

___

### signLink

▸ **signLink**(`readerIdentityId`, `ownerIdentityId`, `tokenAddress`, `tokenId`, `signatureDate?`, `expirationOffset?`): `Promise`\<\{ `expirationDate`: `number` ; `signature`: `string` ; `signatureDate`: `number`  }\>

Signs a soul linker link

#### Parameters

| Name | Type |
| :------ | :------ |
| `readerIdentityId` | `BigNumber` |
| `ownerIdentityId` | `BigNumber` |
| `tokenAddress` | `string` |
| `tokenId` | `BigNumber` |
| `signatureDate` | `number` |
| `expirationOffset` | `number` |

#### Returns

`Promise`\<\{ `expirationDate`: `number` ; `signature`: `string` ; `signatureDate`: `number`  }\>

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

MasaContractModuleBase.verify

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

MasaContractModuleBase.addSlippage
