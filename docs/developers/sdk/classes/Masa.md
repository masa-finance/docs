[# Masa SDK
 - v0.6.0](../README.md) / [Exports](../modules.md) / Masa

# Class: Masa

## Table of contents

### Constructors

- [constructor](Masa.md#constructor)

### Properties

- [account](Masa.md#account)
- [arweave](Masa.md#arweave)
- [client](Masa.md#client)
- [config](Masa.md#config)
- [contracts](Masa.md#contracts)
- [creditScore](Masa.md#creditscore)
- [identity](Masa.md#identity)
- [metadata](Masa.md#metadata)
- [session](Masa.md#session)
- [soulNames](Masa.md#soulnames)
- [twoFA](Masa.md#twofa)
- [utils](Masa.md#utils)

## Constructors

### constructor

• **new Masa**(`__namedParameters?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`MasaArgs`](../interfaces/MasaArgs.md) |

## Properties

### account

• **account**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getBalances` | (`address?`: `string`) => `Promise`<`undefined` \| { `ethBalance`: `BigNumber` ; `identityBalance`: `BigNumber` ; `masaBalance`: `BigNumber` ; `soulNameBalance`: `BigNumber` ; `soulbound2FABalance`: `BigNumber` ; `soulboundCreditScoreBalance`: `BigNumber` ; `usdcBalance`: `BigNumber` ; `wethBalance`: `BigNumber`  }\> |

___

### arweave

• `Readonly` **arweave**: `default`

___

### client

• `Readonly` **client**: [`MasaClient`](MasaClient.md)

___

### config

• `Readonly` **config**: [`MasaConfig`](../interfaces/MasaConfig.md)

___

### contracts

• `Readonly` **contracts**: [`MasaContracts`](MasaContracts.md)

___

### creditScore

• **creditScore**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `burn` | (`creditReportId`: `number`) => `Promise`<`boolean`\> |
| `create` | () => `Promise`<[`BaseResult`](../interfaces/BaseResult.md)\> |
| `list` | (`address?`: `string`) => `Promise`<{ `metadata?`: [`ICreditScore`](../interfaces/ICreditScore.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\> |
| `load` | (`identityId`: `BigNumber`) => `Promise`<{ `metadata?`: [`ICreditScore`](../interfaces/ICreditScore.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\> |
| `mint` | (`address`: `string`, `signature`: `string`) => `Promise`<`undefined` \| { `message`: `string` ; `success`: `boolean` ; `tokenId`: `string` \| `BigNumber`  }\> |

___

### identity

• **identity**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `burn` | () => `Promise`<`boolean`\> |
| `create` | () => `Promise`<`boolean`\> |
| `createWithSoulName` | (`soulName`: `string`, `duration`: `number`, `paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod)) => `Promise`<`boolean`\> |
| `load` | (`address?`: `string`) => `Promise`<`undefined` \| `BigNumber`\> |
| `show` | (`address?`: `string`) => `Promise`<`undefined` \| { `metadata?`: [`IIdentity`](../interfaces/IIdentity.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }\> |

___

### metadata

• **metadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `retrieve` | (`url`: `string`) => `Promise`<`undefined` \| [`ICreditScore`](../interfaces/ICreditScore.md) \| [`IIdentity`](../interfaces/IIdentity.md) \| [`I2FA`](../interfaces/I2FA.md)\> |
| `store` | (`soulName`: `string`) => `Promise`<`undefined` \| { `imageResponse`: { `data`: `any` ; `status`: `number` ; `statusText`: `string`  } ; `imageTransaction`: `default` ; `metadataResponse`: { `data`: `any` ; `status`: `number` ; `statusText`: `string`  } ; `metadataTransaction`: `default`  }\> |

___

### session

• **session**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `checkLogin` | () => `Promise`<`boolean`\> |
| `getSession` | () => `Promise`<`undefined` \| [`ISession`](../interfaces/ISession.md)\> |
| `login` | () => `Promise`<`undefined` \| { `address`: `string` ; `cookie`: `string` ; `userId`: `string` \| `BigNumber`  }\> |
| `logout` | () => `Promise`<`undefined` \| { `status`: `string`  }\> |
| `sessionLogout` | () => `Promise`<`undefined` \| { `status`: `string`  }\> |

___

### soulNames

• **soulNames**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `burn` | (`soulName`: `string`) => `Promise`<`void`\> |
| `create` | (`soulName`: `string`, `duration`: `number`, `paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod)) => `Promise`<[`CreateSoulNameResult`](../interfaces/CreateSoulNameResult.md)\> |
| `getRegistrationPrice` | (`soulName`: `string`, `duration`: `number`, `paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod)) => `Promise`<`string` \| `BigNumber`\> |
| `list` | (`address?`: `string`) => `Promise`<{ `index`: `number` ; `metadata`: `undefined` \| [`ISoulName`](../interfaces/ISoulName.md) ; `owner`: `string` ; `tokenDetails`: [`string`, `BigNumber`, `BigNumber`, `BigNumber`, `boolean`] & { `active`: `boolean` ; `expirationDate`: `BigNumber` ; `identityId`: `BigNumber` ; `sbtName`: `string` ; `tokenId`: `BigNumber`  } ; `tokenUri`: `string`  }[]\> |
| `loadSoulNameByName` | (`soulName`: `string`) => `Promise`<{ `metadata`: `undefined` \| [`ISoulName`](../interfaces/ISoulName.md) ; `owner`: `string` ; `tokenDetails`: [`string`, `BigNumber`, `BigNumber`, `BigNumber`, `boolean`] & { `active`: `boolean` ; `expirationDate`: `BigNumber` ; `identityId`: `BigNumber` ; `sbtName`: `string` ; `tokenId`: `BigNumber`  } ; `tokenUri`: `string`  }\> |
| `loadSoulNameByTokenId` | (`tokenId`: `string` \| `BigNumber`) => `Promise`<{ `metadata`: `undefined` \| [`ISoulName`](../interfaces/ISoulName.md) ; `owner`: `string` ; `tokenDetails`: [`string`, `BigNumber`, `BigNumber`, `BigNumber`, `boolean`] & { `active`: `boolean` ; `expirationDate`: `BigNumber` ; `identityId`: `BigNumber` ; `sbtName`: `string` ; `tokenId`: `BigNumber`  } ; `tokenUri`: `string`  }\> |
| `loadSoulNamesByIdentityId` | (`identityId`: `BigNumber`) => `Promise`<{ `index`: `number` ; `metadata`: `undefined` \| [`ISoulName`](../interfaces/ISoulName.md) ; `owner`: `string` ; `tokenDetails`: [`string`, `BigNumber`, `BigNumber`, `BigNumber`, `boolean`] & { `active`: `boolean` ; `expirationDate`: `BigNumber` ; `identityId`: `BigNumber` ; `sbtName`: `string` ; `tokenId`: `BigNumber`  } ; `tokenUri`: `string`  }[]\> |
| `send` | (`soulName`: `string`, `receiver`: `string`) => `Promise`<`void`\> |
| `verify` | (`soulName`: `string`) => `Promise`<{ `imageHashMatch`: `boolean` = false; `imageSignatureMatch`: `boolean` = false; `metadataSignatureMatch`: `boolean` = false; `nameMatch`: `boolean` = false }\> |

___

### twoFA

• **twoFA**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `burn` | (`twoFAId`: `number`) => `Promise`<`boolean`\> |
| `create` | (`phoneNumber`: `string`, `code`: `string`) => `Promise`<[`Create2FAResult`](../interfaces/Create2FAResult.md)\> |
| `generate` | (`phoneNumber`: `string`) => `Promise`<`undefined` \| { `message`: `string` ; `status`: `string` ; `success`: `boolean`  }\> |
| `list` | (`address?`: `string`) => `Promise`<{ `metadata?`: [`I2FA`](../interfaces/I2FA.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\> |
| `load` | (`identityId`: `BigNumber`) => `Promise`<{ `metadata?`: [`I2FA`](../interfaces/I2FA.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\> |
| `mint` | (`address`: `string`, `phoneNumber`: `string`, `code`: `string`, `signature`: `string`) => `Promise`<`undefined` \| { `message`: `string` ; `status`: `string` ; `success`: `boolean` ; `tokenId`: `string` \| `BigNumber`  }\> |

___

### utils

• **utils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `version` | () => { `contractsVersion`: `string` ; `sdkVersion`: `string`  } |
