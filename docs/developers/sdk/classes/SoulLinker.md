[# Masa SDK
 - v2.2.0](../README.md) / [Exports](../modules.md) / SoulLinker

# Class: SoulLinker

## Hierarchy

- [`MasaModuleBase`](MasaModuleBase.md)

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
- [addSlippage](SoulLinker.md#addslippage)
- [breakLink](SoulLinker.md#breaklink)
- [checkOrGiveAllowance](SoulLinker.md#checkorgiveallowance)
- [formatPrice](SoulLinker.md#formatprice)
- [getMintPrice](SoulLinker.md#getmintprice)
- [getPaymentAddress](SoulLinker.md#getpaymentaddress)
- [getPrice](SoulLinker.md#getprice)
- [loadSBTContract](SoulLinker.md#loadsbtcontract)
- [signLink](SoulLinker.md#signlink)
- [verify](SoulLinker.md#verify)

## Constructors

### constructor

• **new SoulLinker**(`masa`, `instances`)

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
| `Link` | { `name`: `string` = "readerIdentityId"; `type`: `string` = "uint256" }[] |

## Methods

### addLink

▸ **addLink**(`tokenAddress`, `paymentMethod`, `readerIdentityId`, `ownerIdentityId`, `tokenId`, `signatureDate`, `expirationDate`, `signature`, `slippage?`): `Promise`<`boolean`\>

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

`Promise`<`boolean`\>

___

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

### breakLink

▸ **breakLink**(`contract`, `tokenId`, `readerIdentityId`): `Promise`<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `Contract` |
| `tokenId` | `BigNumber` |
| `readerIdentityId` | `BigNumber` |

#### Returns

`Promise`<[`BaseResult`](../interfaces/BaseResult.md)\>

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

### getPrice

▸ **getPrice**(`tokenAddress`, `paymentMethod`, `slippage?`): `Promise`<{ `formattedMintFee`: `string` ; `formattedPrice`: `string` ; `formattedProtocolFee`: `string` ; `mintFee`: `BigNumber` ; `paymentAddress`: `string` ; `price`: `BigNumber` ; `protocolFee`: `BigNumber`  }\>

Gets price for establishing a link

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `tokenAddress` | `string` | `undefined` |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `undefined` |
| `slippage` | `undefined` \| `number` | `250` |

#### Returns

`Promise`<{ `formattedMintFee`: `string` ; `formattedPrice`: `string` ; `formattedProtocolFee`: `string` ; `mintFee`: `BigNumber` ; `paymentAddress`: `string` ; `price`: `BigNumber` ; `protocolFee`: `BigNumber`  }\>

___

### loadSBTContract

▸ `Protected` **loadSBTContract**<`Contract`\>(`masaConfig`, `address`, `factory?`): `Promise`<`undefined` \| `Contract`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `MasaSBT` \| `MasaSBTSelfSovereign` \| `MasaSBTAuthority` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `masaConfig` | [`MasaConfig`](../interfaces/MasaConfig.md) | `undefined` |
| `address` | `string` | `undefined` |
| `factory` | [`ContractFactory`](ContractFactory.md) | `MasaSBTSelfSovereign__factory` |

#### Returns

`Promise`<`undefined` \| `Contract`\>

#### Inherited from

[MasaModuleBase](MasaModuleBase.md).[loadSBTContract](MasaModuleBase.md#loadsbtcontract)

___

### signLink

▸ **signLink**(`readerIdentityId`, `ownerIdentityId`, `tokenAddress`, `tokenId`, `signatureDate?`, `expirationOffset?`): `Promise`<{ `expirationDate`: `number` ; `signature`: `string` ; `signatureDate`: `number`  }\>

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

`Promise`<{ `expirationDate`: `number` ; `signature`: `string` ; `signatureDate`: `number`  }\>

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
