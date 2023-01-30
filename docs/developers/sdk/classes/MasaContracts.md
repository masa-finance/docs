[# Masa SDK
 - v1.2.0-alpha.1](../README.md) / [Exports](../modules.md) / MasaContracts

# Class: MasaContracts

## Table of contents

### Constructors

- [constructor](MasaContracts.md#constructor)

### Properties

- [creditScore](MasaContracts.md#creditscore)
- [green](MasaContracts.md#green)
- [identity](MasaContracts.md#identity)
- [instances](MasaContracts.md#instances)
- [masaConfig](MasaContracts.md#masaconfig)
- [soulLinker](MasaContracts.md#soullinker)
- [soulName](MasaContracts.md#soulname)
- [tools](MasaContracts.md#tools)

## Constructors

### constructor

• **new MasaContracts**(`masaConfig`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masaConfig` | [`MasaConfig`](../interfaces/MasaConfig.md) |

## Properties

### creditScore

• **creditScore**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mint` | (`wallet`: `Wallet`, `paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod), `identityId`: `BigNumber`, `authorityAddress`: `string`, `signatureDate`: `number`, `signature`: `string`, `slippage`: `undefined` \| `number`) => `Promise`<`ContractTransaction`\> |

___

### green

• **green**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mint` | (`wallet`: `Wallet`, `paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod), `identityId`: `BigNumber`, `authorityAddress`: `string`, `signatureDate`: `number`, `signature`: `string`, `slippage`: `undefined` \| `number`) => `Promise`<`ContractTransaction`\> |

___

### identity

• **identity**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `purchase` | (`signer`: `Signer`) => `Promise`<`ContractTransaction`\> |
| `purchaseIdentityAndName` | (`signer`: `Signer`, `paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod), `name`: `string`, `nameLength`: `number`, `duration`: `number`, `metadataURL`: `string`, `authorityAddress`: `string`, `signature`: `string`, `debug`: `boolean`) => `Promise`<`ContractTransaction`\> |

___

### instances

• **instances**: [`IIdentityContracts`](../interfaces/IIdentityContracts.md)

___

### masaConfig

• `Private` **masaConfig**: [`MasaConfig`](../interfaces/MasaConfig.md)

___

### soulLinker

• **soulLinker**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addLink` | (`signer`: `Signer`, `tokenAddress`: `string`, `paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod), `readerIdentityId`: `BigNumber`, `ownerIdentityId`: `BigNumber`, `tokenId`: `BigNumber`, `signatureDate`: `number`, `expirationDate`: `number`, `signature`: `string`, `slippage`: `undefined` \| `number`) => `Promise`<`boolean`\> |

___

### soulName

• **soulName**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getPrice` | (`signer`: `Signer`, `paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod), `nameLength`: `number`, `duration`: `number`, `slippage`: `undefined` \| `number`) => `Promise`<{ `formattedPrice`: `string` ; `paymentAddress`: `string` ; `price`: `BigNumber`  }\> |
| `getSoulNames` | (`address`: `string`) => `Promise`<`string`[]\> |
| `isAvailable` | (`soulName`: `string`) => `Promise`<`boolean`\> |
| `purchase` | (`signer`: `Signer`, `paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod), `name`: `string`, `nameLength`: `number`, `duration`: `number`, `metadataURL`: `string`, `authorityAddress`: `string`, `signature`: `string`, `debug`: `boolean`) => `Promise`<`ContractTransaction`\> |

___

### tools

• `Private` **tools**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `checkOrGiveAllowance` | (`paymentAddress`: `string`, `signer`: `Signer`, `paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod), `price`: `BigNumber`) => `Promise`<`undefined` \| `ContractReceipt`\> |
| `getPaymentAddress` | (`paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod)) => `string` |
