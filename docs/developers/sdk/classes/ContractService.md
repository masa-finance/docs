[# Masa SDK
 - v0.3.11](../README.md) / [Exports](../modules.md) / ContractService

# Class: ContractService

## Table of contents

### Constructors

- [constructor](ContractService.md#constructor)

### Properties

- [masa](ContractService.md#masa)

### Methods

- [checkOrGiveAllowance](ContractService.md#checkorgiveallowance)
- [getPaymentAddress](ContractService.md#getpaymentaddress)
- [getSoulNames](ContractService.md#getsoulnames)
- [isAvailable](ContractService.md#isavailable)
- [price](ContractService.md#price)
- [purchaseIdentity](ContractService.md#purchaseidentity)
- [purchaseIdentityAndName](ContractService.md#purchaseidentityandname)
- [purchaseName](ContractService.md#purchasename)

## Constructors

### constructor

• **new ContractService**(`masa`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](Masa.md) |

## Properties

### masa

• `Private` **masa**: [`Masa`](Masa.md)

## Methods

### checkOrGiveAllowance

▸ `Private` **checkOrGiveAllowance**(`identityContracts`, `paymentAddress`, `signer`, `paymentMethod`, `prices`): `Promise`<`undefined` \| `ContractReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identityContracts` | [`IIdentityContracts`](../interfaces/IIdentityContracts.md) |
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

▸ **getSoulNames**(`identityContracts`, `address`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identityContracts` | [`IIdentityContracts`](../interfaces/IIdentityContracts.md) |
| `address` | `string` |

#### Returns

`Promise`<`string`[]\>

___

### isAvailable

▸ **isAvailable**(`identityContracts`, `name`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identityContracts` | [`IIdentityContracts`](../interfaces/IIdentityContracts.md) |
| `name` | `string` |

#### Returns

`Promise`<`boolean`\>

___

### price

▸ **price**(`identityContracts`, `name`, `duration?`): `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`] & { `priceInETH`: `BigNumber` ; `priceInStableCoin`: `BigNumber` ; `priceInUtilityToken`: `BigNumber`  }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `identityContracts` | [`IIdentityContracts`](../interfaces/IIdentityContracts.md) | `undefined` |
| `name` | `string` | `undefined` |
| `duration` | `number` | `1` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `BigNumber`] & { `priceInETH`: `BigNumber` ; `priceInStableCoin`: `BigNumber` ; `priceInUtilityToken`: `BigNumber`  }\>

___

### purchaseIdentity

▸ **purchaseIdentity**(`identityContracts`, `signer`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identityContracts` | [`IIdentityContracts`](../interfaces/IIdentityContracts.md) |
| `signer` | `Signer` |

#### Returns

`Promise`<`ContractTransaction`\>

___

### purchaseIdentityAndName

▸ **purchaseIdentityAndName**(`identityContracts`, `signer`, `name`, `paymentMethod`, `duration?`, `metadataURL`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `identityContracts` | [`IIdentityContracts`](../interfaces/IIdentityContracts.md) | `undefined` |
| `signer` | `Signer` | `undefined` |
| `name` | `string` | `undefined` |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `undefined` |
| `duration` | `number` | `1` |
| `metadataURL` | `string` | `undefined` |

#### Returns

`Promise`<`ContractTransaction`\>

___

### purchaseName

▸ **purchaseName**(`identityContracts`, `signer`, `name`, `paymentMethod`, `duration?`, `metadataURL`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `identityContracts` | [`IIdentityContracts`](../interfaces/IIdentityContracts.md) | `undefined` |
| `signer` | `Signer` | `undefined` |
| `name` | `string` | `undefined` |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) | `undefined` |
| `duration` | `number` | `1` |
| `metadataURL` | `string` | `undefined` |

#### Returns

`Promise`<`ContractTransaction`\>
