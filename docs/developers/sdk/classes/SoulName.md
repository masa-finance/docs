[# Masa SDK
 - v1.13.2](../README.md) / [Exports](../modules.md) / SoulName

# Class: SoulName

## Hierarchy

- [`MasaModuleBase`](MasaModuleBase.md)

  ↳ **`SoulName`**

## Table of contents

### Constructors

- [constructor](SoulName.md#constructor)

### Properties

- [instances](SoulName.md#instances)
- [masa](SoulName.md#masa)
- [types](SoulName.md#types)

### Methods

- [addSlippage](SoulName.md#addslippage)
- [burn](SoulName.md#burn)
- [checkOrGiveAllowance](SoulName.md#checkorgiveallowance)
- [formatPrice](SoulName.md#formatprice)
- [getPaymentAddress](SoulName.md#getpaymentaddress)
- [getPrice](SoulName.md#getprice)
- [getSoulnameData](SoulName.md#getsoulnamedata)
- [isAvailable](SoulName.md#isavailable)
- [purchase](SoulName.md#purchase)
- [sign](SoulName.md#sign)
- [transfer](SoulName.md#transfer)
- [verify](SoulName.md#verify)

## Constructors

### constructor

• **new SoulName**(`masa`, `instances`)

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

___

### types

• **types**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `MintSoulName` | { `name`: `string` = "to"; `type`: `string` = "address" }[] |

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

▸ **burn**(`soulName`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `soulName` | `string` |

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

### getPrice

▸ **getPrice**(`paymentMethod`, `nameLength`, `duration?`, `slippage?`): `Promise`<{ `formattedPrice`: `string` ; `paymentAddress`: `string` ; `price`: `BigNumber`  }\>

Get price for minting a soul name

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `undefined` |
| `nameLength` | `number` | `undefined` |
| `duration` | `number` | `1` |
| `slippage` | `undefined` \| `number` | `250` |

#### Returns

`Promise`<{ `formattedPrice`: `string` ; `paymentAddress`: `string` ; `price`: `BigNumber`  }\>

___

### getSoulnameData

▸ **getSoulnameData**(`soulName`): `Promise`<{ `exists`: `boolean` ; `tokenId`: `BigNumber`  }\>

Returns detailed information for a soul name

#### Parameters

| Name | Type |
| :------ | :------ |
| `soulName` | `string` |

#### Returns

`Promise`<{ `exists`: `boolean` ; `tokenId`: `BigNumber`  }\>

___

### isAvailable

▸ **isAvailable**(`soulName`): `Promise`<`boolean`\>

Check if a soul name is available

#### Parameters

| Name | Type |
| :------ | :------ |
| `soulName` | `string` |

#### Returns

`Promise`<`boolean`\>

___

### purchase

▸ **purchase**(`paymentMethod`, `name`, `nameLength`, `duration?`, `metadataURL`, `authorityAddress`, `signature`, `receiver?`): `Promise`<`ContractTransaction`\>

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

`Promise`<`ContractTransaction`\>

___

### sign

▸ **sign**(`soulName`, `soulNameLength`, `duration`, `metadataUrl`, `receiver`): `Promise`<`undefined` \| { `authorityAddress`: `string` ; `signature`: `string`  }\>

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

`Promise`<`undefined` \| { `authorityAddress`: `string` ; `signature`: `string`  }\>

___

### transfer

▸ **transfer**(`soulName`, `receiver`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `soulName` | `string` |
| `receiver` | `string` |

#### Returns

`Promise`<`boolean`\>

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
