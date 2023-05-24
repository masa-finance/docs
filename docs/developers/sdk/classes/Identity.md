[# Masa SDK
 - v3.0.7](../README.md) / [Exports](../modules.md) / Identity

# Class: Identity

## Hierarchy

- [`MasaModuleBase`](MasaModuleBase.md)

  ↳ **`Identity`**

## Table of contents

### Constructors

- [constructor](Identity.md#constructor)

### Properties

- [instances](Identity.md#instances)
- [masa](Identity.md#masa)

### Methods

- [addSlippage](Identity.md#addslippage)
- [burn](Identity.md#burn)
- [checkOrGiveAllowance](Identity.md#checkorgiveallowance)
- [formatPrice](Identity.md#formatprice)
- [getMintPrice](Identity.md#getmintprice)
- [getPaymentAddress](Identity.md#getpaymentaddress)
- [loadSBTContract](Identity.md#loadsbtcontract)
- [purchase](Identity.md#purchase)
- [purchaseIdentityAndName](Identity.md#purchaseidentityandname)
- [verify](Identity.md#verify)

## Constructors

### constructor

• **new Identity**(`masa`, `instances`)

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

• `Protected` `Readonly` **masa**: [`Masa`](Masa.md)

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

### burn

▸ **burn**(`identityId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identityId` | `BigNumber` |

#### Returns

`Promise`<`boolean`\>

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
| `contract` | `MasaSBT` \| `MasaSBTSelfSovereign` \| `MasaSBTAuthority` | `undefined` |
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

#### Inherited from

[MasaModuleBase](MasaModuleBase.md).[loadSBTContract](MasaModuleBase.md#loadsbtcontract)

___

### purchase

▸ **purchase**(): `Promise`<`ContractTransaction`\>

purchase only identity

#### Returns

`Promise`<`ContractTransaction`\>

___

### purchaseIdentityAndName

▸ **purchaseIdentityAndName**(`paymentMethod`, `name`, `nameLength`, `duration?`, `metadataURL`, `authorityAddress`, `signature`): `Promise`<`ContractTransaction`\>

purchase identity with name

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

#### Returns

`Promise`<`ContractTransaction`\>

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

#### Inherited from

[MasaModuleBase](MasaModuleBase.md).[verify](MasaModuleBase.md#verify)
