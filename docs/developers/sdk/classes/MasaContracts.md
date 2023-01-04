[# Masa SDK
 - v0.8.0](../README.md) / [Exports](../modules.md) / MasaContracts

# Class: MasaContracts

## Table of contents

### Constructors

- [constructor](MasaContracts.md#constructor)

### Properties

- [identity](MasaContracts.md#identity)
- [masaConfig](MasaContracts.md#masaconfig)

### Methods

- [addLink](MasaContracts.md#addlink)
- [checkOrGiveAllowance](MasaContracts.md#checkorgiveallowance)
- [getPaymentAddress](MasaContracts.md#getpaymentaddress)
- [getPaymentInformation](MasaContracts.md#getpaymentinformation)
- [getSoulNames](MasaContracts.md#getsoulnames)
- [isAvailable](MasaContracts.md#isavailable)
- [mintCreditScore](MasaContracts.md#mintcreditscore)
- [purchaseIdentity](MasaContracts.md#purchaseidentity)
- [purchaseIdentityAndName](MasaContracts.md#purchaseidentityandname)
- [purchaseName](MasaContracts.md#purchasename)
- [queryLink](MasaContracts.md#querylink)

## Constructors

### constructor

• **new MasaContracts**(`masaConfig`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masaConfig` | [`MasaConfig`](../interfaces/MasaConfig.md) |

## Properties

### identity

• **identity**: [`IIdentityContracts`](../interfaces/IIdentityContracts.md)

___

### masaConfig

• `Private` **masaConfig**: [`MasaConfig`](../interfaces/MasaConfig.md)

## Methods

### addLink

▸ **addLink**(`signer`, `tokenAddress`, `paymentMethod`, `readerIdentityId`, `ownerIdentityId`, `tokenId`, `signatureDate`, `expirationDate`, `signature`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `tokenAddress` | `string` |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |
| `readerIdentityId` | `BigNumber` |
| `ownerIdentityId` | `BigNumber` |
| `tokenId` | `BigNumber` |
| `signatureDate` | `number` |
| `expirationDate` | `number` |
| `signature` | `string` |

#### Returns

`Promise`<`boolean`\>

___

### checkOrGiveAllowance

▸ `Private` **checkOrGiveAllowance**(`paymentAddress`, `signer`, `paymentMethod`, `price`): `Promise`<`undefined` \| `ContractReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentAddress` | `string` |
| `signer` | `Signer` |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |
| `price` | `BigNumber` |

#### Returns

`Promise`<`undefined` \| `ContractReceipt`\>

___

### getPaymentAddress

▸ `Private` **getPaymentAddress**(`paymentMethod`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |

#### Returns

`string`

___

### getPaymentInformation

▸ **getPaymentInformation**(`name`, `paymentMethod`, `duration?`, `signer`): `Promise`<{ `formattedPrice`: `string` ; `paymentAddress`: `string` ; `price`: `BigNumber`  }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `undefined` |
| `duration` | `number` | `1` |
| `signer` | `Signer` | `undefined` |

#### Returns

`Promise`<{ `formattedPrice`: `string` ; `paymentAddress`: `string` ; `price`: `BigNumber`  }\>

___

### getSoulNames

▸ **getSoulNames**(`address`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<`string`[]\>

___

### isAvailable

▸ **isAvailable**(`soulName`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `soulName` | `string` |

#### Returns

`Promise`<`boolean`\>

___

### mintCreditScore

▸ **mintCreditScore**(`wallet`, `paymentMethod`, `identityId`, `authorityAddress`, `signatureDate`, `signature`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `Wallet` |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |
| `identityId` | `BigNumber` |
| `authorityAddress` | `string` |
| `signatureDate` | `number` |
| `signature` | `string` |

#### Returns

`Promise`<`ContractTransaction`\>

___

### purchaseIdentity

▸ **purchaseIdentity**(`signer`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

`Promise`<`ContractTransaction`\>

___

### purchaseIdentityAndName

▸ **purchaseIdentityAndName**(`signer`, `name`, `paymentMethod`, `duration?`, `metadataURL`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `signer` | `Signer` | `undefined` |
| `name` | `string` | `undefined` |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `undefined` |
| `duration` | `number` | `1` |
| `metadataURL` | `string` | `undefined` |

#### Returns

`Promise`<`ContractTransaction`\>

___

### purchaseName

▸ **purchaseName**(`signer`, `name`, `paymentMethod`, `duration?`, `metadataURL`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `signer` | `Signer` | `undefined` |
| `name` | `string` | `undefined` |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `undefined` |
| `duration` | `number` | `1` |
| `metadataURL` | `string` | `undefined` |

#### Returns

`Promise`<`ContractTransaction`\>

___

### queryLink

▸ **queryLink**(`signer`, `tokenAddress`, `paymentMethod`, `readerIdentityId`, `ownerIdentityId`, `tokenId`, `signatureDate`, `expirationDate`, `signature`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `tokenAddress` | `string` |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |
| `readerIdentityId` | `BigNumber` |
| `ownerIdentityId` | `BigNumber` |
| `tokenId` | `BigNumber` |
| `signatureDate` | `number` |
| `expirationDate` | `number` |
| `signature` | `string` |

#### Returns

`Promise`<`string`\>
