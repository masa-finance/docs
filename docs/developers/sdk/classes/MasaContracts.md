[# Masa SDK
 - v0.5.0](../README.md) / [Exports](../modules.md) / MasaContracts

# Class: MasaContracts

## Table of contents

### Constructors

- [constructor](MasaContracts.md#constructor)

### Properties

- [identity](MasaContracts.md#identity)
- [masaConfig](MasaContracts.md#masaconfig)

### Methods

- [checkOrGiveAllowance](MasaContracts.md#checkorgiveallowance)
- [getPaymentAddress](MasaContracts.md#getpaymentaddress)
- [getSoulNames](MasaContracts.md#getsoulnames)
- [isAvailable](MasaContracts.md#isavailable)
- [price](MasaContracts.md#price)
- [purchaseIdentity](MasaContracts.md#purchaseidentity)
- [purchaseIdentityAndName](MasaContracts.md#purchaseidentityandname)
- [purchaseName](MasaContracts.md#purchasename)

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

### checkOrGiveAllowance

▸ `Private` **checkOrGiveAllowance**(`paymentAddress`, `signer`, `paymentMethod`, `prices`): `Promise`<`undefined` \| `ContractReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentAddress` | `string` |
| `signer` | `Signer` |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |
| `prices` | `Object` |
| `prices.priceInETH` | `BigNumber` |
| `prices.priceInStableCoin` | `BigNumber` |
| `prices.priceInUtilityToken` | `BigNumber` |

#### Returns

`Promise`<`undefined` \| `ContractReceipt`\>

___

### getPaymentAddress

▸ **getPaymentAddress**(`paymentMethod`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |

#### Returns

`string`

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

▸ **isAvailable**(`name`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<`boolean`\>

___

### price

▸ **price**(`name`, `duration?`): `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`] & { `priceInETH`: `BigNumber` ; `priceInStableCoin`: `BigNumber` ; `priceInUtilityToken`: `BigNumber`  }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `duration` | `number` | `1` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `BigNumber`] & { `priceInETH`: `BigNumber` ; `priceInStableCoin`: `BigNumber` ; `priceInUtilityToken`: `BigNumber`  }\>

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
