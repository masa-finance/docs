[# Masa SDK
 - v3.3.0](../README.md) / [Exports](../modules.md) / SBT

# Class: SBT<Contract\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `MasaSBT` |

## Hierarchy

- [`MasaModuleBase`](MasaModuleBase.md)

  ↳ **`SBT`**

  ↳↳ [`ASBT`](ASBT.md)

  ↳↳ [`SSSBT`](SSSBT.md)

## Table of contents

### Constructors

- [constructor](SBT.md#constructor)

### Properties

- [instances](SBT.md#instances)
- [masa](SBT.md#masa)

### Methods

- [attach](SBT.md#attach)
- [checkOrGiveAllowance](SBT.md#checkorgiveallowance)
- [connect](SBT.md#connect)
- [formatPrice](SBT.md#formatprice)
- [getMintPrice](SBT.md#getmintprice)
- [getPaymentAddress](SBT.md#getpaymentaddress)
- [verify](SBT.md#verify)
- [wrapper](SBT.md#wrapper)
- [addSlippage](SBT.md#addslippage)
- [loadSBTContract](SBT.md#loadsbtcontract)

## Constructors

### constructor

• **new SBT**<`Contract`\>(`masa`, `instances`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `MasaSBT`<`Contract`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |
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

• `Protected` `Readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

[MasaModuleBase](MasaModuleBase.md).[masa](MasaModuleBase.md#masa)

## Methods

### attach

▸ **attach**(`sbtContract`): [`SBTContractWrapper`](../interfaces/SBTContractWrapper.md)<`Contract`\>

attaches the contract function to an existing instances

#### Parameters

| Name | Type |
| :------ | :------ |
| `sbtContract` | `Contract` |

#### Returns

[`SBTContractWrapper`](../interfaces/SBTContractWrapper.md)<`Contract`\>

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

▸ **connect**(`address`, `factory?`): `Promise`<[`SBTContractWrapper`](../interfaces/SBTContractWrapper.md)<`Contract`\>\>

loads an sbt instance and connects the contract functions to it

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `address` | `string` | `undefined` |
| `factory` | [`ContractFactory`](ContractFactory.md) | `MasaSBT__factory` |

#### Returns

`Promise`<[`SBTContractWrapper`](../interfaces/SBTContractWrapper.md)<`Contract`\>\>

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

### getMintPrice

▸ `Protected` **getMintPrice**(`paymentMethod`, `contract`, `slippage?`): `Promise`<{ `formattedMintFee`: `string` ; `formattedPrice`: `string` ; `formattedProtocolFee`: `string` ; `mintFee`: `BigNumber` ; `paymentAddress`: `string` ; `price`: `BigNumber` ; `protocolFee`: `BigNumber`  }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `undefined` |
| `contract` | `MasaSBTSelfSovereign` \| `MasaSBTAuthority` \| `MasaSBT` | `undefined` |
| `slippage` | `undefined` \| `number` | `250` |

#### Returns

`Promise`<{ `formattedMintFee`: `string` ; `formattedPrice`: `string` ; `formattedProtocolFee`: `string` ; `mintFee`: `BigNumber` ; `paymentAddress`: `string` ; `price`: `BigNumber` ; `protocolFee`: `BigNumber`  }\>

#### Inherited from

[MasaModuleBase](MasaModuleBase.md).[getMintPrice](MasaModuleBase.md#getmintprice)

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
| `contract` | `SoulLinker` \| `SoulStore` \| `MasaSBTSelfSovereign` \| `MasaSBTAuthority` \| `MasaSBT` |
| `domain` | `TypedDataDomain` |
| `types` | `Record`<`string`, `TypedDataField`[]\> |
| `value` | `Record`<`string`, `string` \| `number` \| `BigNumber`\> |
| `signature` | `string` |
| `authorityAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[MasaModuleBase](MasaModuleBase.md).[verify](MasaModuleBase.md#verify)

___

### wrapper

▸ `Protected` **wrapper**(`sbtContract`): [`SBTContractWrapper`](../interfaces/SBTContractWrapper.md)<`Contract`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sbtContract` | `Contract` |

#### Returns

[`SBTContractWrapper`](../interfaces/SBTContractWrapper.md)<`Contract`\>

___

### addSlippage

▸ `Static` `Protected` **addSlippage**(`price`, `slippage`): `BigNumber`

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

### loadSBTContract

▸ `Static` `Protected` **loadSBTContract**<`Contract`\>(`masaConfig`, `address`, `factory`): `Promise`<`Contract`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `MasaSBTSelfSovereign` \| `MasaSBTAuthority` \| `MasaSBT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `masaConfig` | [`MasaConfig`](../interfaces/MasaConfig.md) |
| `address` | `string` |
| `factory` | [`ContractFactory`](ContractFactory.md) |

#### Returns

`Promise`<`Contract`\>

#### Inherited from

[MasaModuleBase](MasaModuleBase.md).[loadSBTContract](MasaModuleBase.md#loadsbtcontract)
