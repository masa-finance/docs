[# Masa SDK
 - v1.8.1](../README.md) / [Exports](../modules.md) / MasaContracts

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
| `getPrice` | (`paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod), `slippage`: `undefined` \| `number`) => `Promise`<{ `formattedPrice`: `string` ; `paymentAddress`: `string` ; `price`: `BigNumber`  }\> |
| `mint` | (`paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod), `identityId`: `BigNumber`, `authorityAddress`: `string`, `signatureDate`: `number`, `signature`: `string`, `slippage`: `undefined` \| `number`) => `Promise`<`ContractTransaction`\> |
| `sign` | (`identityId`: `BigNumber`) => `Promise`<`undefined` \| { `authorityAddress`: `string` ; `signature`: `string` ; `signatureDate`: `number`  }\> |
| `types` | { `MintCreditScore`: { `name`: `string` = "identityId"; `type`: `string` = "uint256" }[]  } |
| `types.MintCreditScore` | { `name`: `string` = "identityId"; `type`: `string` = "uint256" }[] |

___

### green

• **green**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getPrice` | (`paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod), `slippage`: `undefined` \| `number`) => `Promise`<{ `formattedMintTransactionFee`: `string` ; `formattedPrice`: `string` ; `mintTransactionEstimatedGas`: `BigNumber` ; `mintTransactionFee`: `BigNumber` ; `paymentAddress`: `string` ; `price`: `BigNumber`  }\> |
| `mint` | (`paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod), `receiver`: `string`, `authorityAddress`: `string`, `signatureDate`: `number`, `signature`: `string`, `slippage`: `undefined` \| `number`) => `Promise`<`ContractTransaction`\> |
| `sign` | (`receiver`: `string`) => `Promise`<`undefined` \| { `authorityAddress`: `string` ; `signature`: `string` ; `signatureDate`: `number`  }\> |
| `types` | { `MintGreen`: { `name`: `string` = "to"; `type`: `string` = "address" }[]  } |
| `types.MintGreen` | { `name`: `string` = "to"; `type`: `string` = "address" }[] |

___

### identity

• **identity**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `purchase` | () => `Promise`<`ContractTransaction`\> |
| `purchaseIdentityAndName` | (`paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod), `name`: `string`, `nameLength`: `number`, `duration`: `number`, `metadataURL`: `string`, `authorityAddress`: `string`, `signature`: `string`) => `Promise`<`ContractTransaction`\> |

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
| `addLink` | (`tokenAddress`: `string`, `paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod), `readerIdentityId`: `BigNumber`, `ownerIdentityId`: `BigNumber`, `tokenId`: `BigNumber`, `signatureDate`: `number`, `expirationDate`: `number`, `signature`: `string`, `slippage`: `undefined` \| `number`) => `Promise`<`boolean`\> |
| `getPrice` | (`tokenAddress`: `string`, `paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod), `slippage`: `undefined` \| `number`) => `Promise`<{ `paymentAddress`: `string` ; `price`: `BigNumber`  }\> |
| `signLink` | (`readerIdentityId`: `BigNumber`, `ownerIdentityId`: `BigNumber`, `tokenAddress`: `string`, `tokenId`: `BigNumber`, `signatureDate`: `number`, `expirationOffset`: `number`) => `Promise`<{ `expirationDate`: `number` ; `signature`: `string` ; `signatureDate`: `number`  }\> |
| `types` | { `Link`: { `name`: `string` = "readerIdentityId"; `type`: `string` = "uint256" }[]  } |
| `types.Link` | { `name`: `string` = "readerIdentityId"; `type`: `string` = "uint256" }[] |

___

### soulName

• **soulName**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getPrice` | (`paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod), `nameLength`: `number`, `duration`: `number`, `slippage`: `undefined` \| `number`) => `Promise`<{ `formattedPrice`: `string` ; `paymentAddress`: `string` ; `price`: `BigNumber`  }\> |
| `getSoulnameData` | (`soulName`: `string`) => `Promise`<{ `exists`: `boolean` ; `tokenId`: `BigNumber`  }\> |
| `isAvailable` | (`soulName`: `string`) => `Promise`<`boolean`\> |
| `purchase` | (`paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod), `name`: `string`, `nameLength`: `number`, `duration`: `number`, `metadataURL`: `string`, `authorityAddress`: `string`, `signature`: `string`, `receiver?`: `string`) => `Promise`<`ContractTransaction`\> |
| `sign` | (`soulName`: `string`, `soulNameLength`: `number`, `duration`: `number`, `metadataUrl`: `string`, `receiver`: `string`) => `Promise`<`undefined` \| { `authorityAddress`: `string` ; `signature`: `string`  }\> |
| `types` | { `MintSoulName`: { `name`: `string` = "to"; `type`: `string` = "address" }[]  } |
| `types.MintSoulName` | { `name`: `string` = "to"; `type`: `string` = "address" }[] |

___

### tools

• `Private` **tools**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addSlippage` | (`price`: `BigNumber`, `slippage`: `number`) => `BigNumber` |
| `checkOrGiveAllowance` | (`paymentAddress`: `string`, `paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod), `price`: `BigNumber`) => `Promise`<`undefined` \| `ContractReceipt`\> |
| `formatPrice` | (`paymentAddress`: `string`, `price`: `BigNumber`) => `Promise`<`string`\> |
| `getPaymentAddress` | (`paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod)) => `string` |
