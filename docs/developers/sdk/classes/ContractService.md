[# Masa SDK
](../README.md) / [Exports](../modules.md) / ContractService

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

#### Defined in

[src/contracts/contractService.ts:11](https://github.com/masa-finance/masa-sdk/blob/dc0fbaf/src/contracts/contractService.ts#L11)

## Properties

### masa

• `Private` **masa**: [`Masa`](Masa.md)

#### Defined in

[src/contracts/contractService.ts:11](https://github.com/masa-finance/masa-sdk/blob/dc0fbaf/src/contracts/contractService.ts#L11)

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

#### Defined in

[src/contracts/contractService.ts:132](https://github.com/masa-finance/masa-sdk/blob/dc0fbaf/src/contracts/contractService.ts#L132)

___

### getPaymentAddress

▸ **getPaymentAddress**(`paymentMethod`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentMethod` | [`PaymentMethod`](../modules.md#paymentmethod) |

#### Returns

`string`

#### Defined in

[src/contracts/contractService.ts:13](https://github.com/masa-finance/masa-sdk/blob/dc0fbaf/src/contracts/contractService.ts#L13)

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

#### Defined in

[src/contracts/contractService.ts:31](https://github.com/masa-finance/masa-sdk/blob/dc0fbaf/src/contracts/contractService.ts#L31)

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

#### Defined in

[src/contracts/contractService.ts:43](https://github.com/masa-finance/masa-sdk/blob/dc0fbaf/src/contracts/contractService.ts#L43)

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

#### Defined in

[src/contracts/contractService.ts:173](https://github.com/masa-finance/masa-sdk/blob/dc0fbaf/src/contracts/contractService.ts#L173)

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

#### Defined in

[src/contracts/contractService.ts:51](https://github.com/masa-finance/masa-sdk/blob/dc0fbaf/src/contracts/contractService.ts#L51)

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

#### Defined in

[src/contracts/contractService.ts:61](https://github.com/masa-finance/masa-sdk/blob/dc0fbaf/src/contracts/contractService.ts#L61)

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

#### Defined in

[src/contracts/contractService.ts:95](https://github.com/masa-finance/masa-sdk/blob/dc0fbaf/src/contracts/contractService.ts#L95)
