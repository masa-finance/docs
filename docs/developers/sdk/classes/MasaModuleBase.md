[# Masa SDK
 - v3.0.5](../README.md) / [Exports](../modules.md) / MasaModuleBase

# Class: MasaModuleBase

## Hierarchy

- [`MasaBase`](MasaBase.md)

  ↳ **`MasaModuleBase`**

  ↳↳ [`CreditScore`](CreditScore.md)

  ↳↳ [`Green`](Green.md)

  ↳↳ [`Identity`](Identity.md)

  ↳↳ [`SBT`](SBT.md)

  ↳↳ [`SoulLinker`](SoulLinker.md)

  ↳↳ [`SoulName`](SoulName.md)

## Table of contents

### Constructors

- [constructor](MasaModuleBase.md#constructor)

### Properties

- [instances](MasaModuleBase.md#instances)
- [masa](MasaModuleBase.md#masa)

### Methods

- [addSlippage](MasaModuleBase.md#addslippage)
- [checkOrGiveAllowance](MasaModuleBase.md#checkorgiveallowance)
- [formatPrice](MasaModuleBase.md#formatprice)
- [getMintPrice](MasaModuleBase.md#getmintprice)
- [getPaymentAddress](MasaModuleBase.md#getpaymentaddress)
- [loadSBTContract](MasaModuleBase.md#loadsbtcontract)
- [verify](MasaModuleBase.md#verify)

## Constructors

### constructor

• **new MasaModuleBase**(`masa`, `instances`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](Masa.md) |
| `instances` | [`IIdentityContracts`](../interfaces/IIdentityContracts.md) |

#### Overrides

[MasaBase](MasaBase.md).[constructor](MasaBase.md#constructor)

## Properties

### instances

• `Protected` **instances**: [`IIdentityContracts`](../interfaces/IIdentityContracts.md)

___

### masa

• `Protected` `Readonly` **masa**: [`Masa`](Masa.md)

#### Inherited from

[MasaBase](MasaBase.md).[masa](MasaBase.md#masa)

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

___

### getMintPrice

▸ `Protected` **getMintPrice**(`paymentMethod`, `contract`, `slippage?`): `Promise`<{ `formattedMintFee`: `string` ; `formattedPrice`: `string` ; `formattedProtocolFee`: `string` ; `mintFee`: `BigNumber` ; `paymentAddress`: `string` ; `price`: `BigNumber` ; `protocolFee`: `BigNumber`  }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `undefined` |
| `contract` | `MasaSBT` \| `MasaSBTSelfSovereign` \| `MasaSBTAuthority` | `undefined` |
| `slippage` | `undefined` \| `number` | `250` |

#### Returns

`Promise`<{ `formattedMintFee`: `string` ; `formattedPrice`: `string` ; `formattedProtocolFee`: `string` ; `mintFee`: `BigNumber` ; `paymentAddress`: `string` ; `price`: `BigNumber` ; `protocolFee`: `BigNumber`  }\>

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

___

### loadSBTContract

▸ `Protected` **loadSBTContract**<`Contract`\>(`masaConfig`, `address`, `factory`): `Promise`<`Contract`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `MasaSBT` \| `MasaSBTSelfSovereign` \| `MasaSBTAuthority` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `masaConfig` | [`MasaConfig`](../interfaces/MasaConfig.md) |
| `address` | `string` |
| `factory` | [`ContractFactory`](ContractFactory.md) |

#### Returns

`Promise`<`Contract`\>

___

### verify

▸ `Protected` **verify**(`errorMessage`, `contract`, `domain`, `types`, `value`, `signature`, `authorityAddress`): `Promise`<`void`\>

verify a signature created during one of the SBT signing flows

#### Parameters

| Name | Type |
| :------ | :------ |
| `errorMessage` | `string` |
| `contract` | `MasaSBT` \| `MasaSBTSelfSovereign` \| `MasaSBTAuthority` \| `SoulLinker` \| `SoulStore` |
| `domain` | `TypedDataDomain` |
| `types` | `Record`<`string`, `TypedDataField`[]\> |
| `value` | `Record`<`string`, `string` \| `number` \| `BigNumber`\> |
| `signature` | `string` |
| `authorityAddress` | `string` |

#### Returns

`Promise`<`void`\>
