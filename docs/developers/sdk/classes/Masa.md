[# Masa SDK
](../README.md) / [Exports](../modules.md) / Masa

# Class: Masa

## Table of contents

### Constructors

- [constructor](Masa.md#constructor)

### Properties

- [account](Masa.md#account)
- [arweaveClient](Masa.md#arweaveclient)
- [client](Masa.md#client)
- [config](Masa.md#config)
- [contracts](Masa.md#contracts)
- [creditScore](Masa.md#creditscore)
- [identity](Masa.md#identity)
- [metadata](Masa.md#metadata)
- [session](Masa.md#session)
- [soulNames](Masa.md#soulnames)
- [utils](Masa.md#utils)

## Constructors

### constructor

• **new Masa**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`MasaArgs`](../interfaces/MasaArgs.md) |

#### Defined in

[src/masa.ts:16](https://github.com/masa-finance/masa-sdk/blob/dc0fbaf/src/masa.ts#L16)

## Properties

### account

• **account**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getBalances` | (`address`: `string`) => `Promise`<`undefined` \| { `ethBalance`: `BigNumber` ; `masaBalance`: `BigNumber` ; `usdcBalance`: `BigNumber` ; `wethBalance`: `BigNumber`  }\> |

#### Defined in

[src/masa.ts:50](https://github.com/masa-finance/masa-sdk/blob/dc0fbaf/src/masa.ts#L50)

___

### arweaveClient

• `Readonly` **arweaveClient**: `default`

#### Defined in

[src/masa.ts:14](https://github.com/masa-finance/masa-sdk/blob/dc0fbaf/src/masa.ts#L14)

___

### client

• `Readonly` **client**: [`MasaClient`](MasaClient.md)

#### Defined in

[src/masa.ts:13](https://github.com/masa-finance/masa-sdk/blob/dc0fbaf/src/masa.ts#L13)

___

### config

• **config**: [`MasaConfig`](../interfaces/MasaConfig.md)

#### Defined in

[src/masa.ts:44](https://github.com/masa-finance/masa-sdk/blob/dc0fbaf/src/masa.ts#L44)

___

### contracts

• **contracts**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addresses` | [`Addresses`](../interfaces/Addresses.md) |
| `loadIdentityContracts` | () => `Promise`<[`IIdentityContracts`](../interfaces/IIdentityContracts.md)\> |
| `service` | [`ContractService`](ContractService.md) |

#### Defined in

[src/masa.ts:51](https://github.com/masa-finance/masa-sdk/blob/dc0fbaf/src/masa.ts#L51)

___

### creditScore

• **creditScore**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `burn` | (`creditReportId`: `number`) => `Promise`<`boolean`\> |
| `create` | () => `Promise`<`undefined` \| { `message`: `string` ; `success`: `boolean` ; `tokenId`: `string` \| `BigNumber`  }\> |
| `list` | (`address?`: `string`) => `Promise`<`undefined` \| { `metadata`: [`ICreditReport`](../interfaces/ICreditReport.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\> |
| `load` | (`identityId`: `BigNumber`) => `Promise`<{ `metadata`: [`ICreditReport`](../interfaces/ICreditReport.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\> |
| `mint` | (`address`: `string`, `signature`: `string`) => `Promise`<`undefined` \| { `message`: `string` ; `success`: `boolean` ; `tokenId`: `string` \| `BigNumber`  }\> |

#### Defined in

[src/masa.ts:49](https://github.com/masa-finance/masa-sdk/blob/dc0fbaf/src/masa.ts#L49)

___

### identity

• **identity**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `burn` | () => `Promise`<`boolean`\> |
| `create` | (`soulName`: `string`, `duration`: `number`, `paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod)) => `Promise`<`boolean`\> |
| `load` | (`address?`: `string`) => `Promise`<`undefined` \| `BigNumber`\> |
| `show` | (`address?`: `string`) => `Promise`<`undefined` \| { `metadata?`: [`IIdentity`](../interfaces/IIdentity.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }\> |

#### Defined in

[src/masa.ts:47](https://github.com/masa-finance/masa-sdk/blob/dc0fbaf/src/masa.ts#L47)

___

### metadata

• **metadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `retrieve` | (`url`: `string`) => `Promise`<`undefined` \| [`ICreditReport`](../interfaces/ICreditReport.md) \| [`IIdentity`](../interfaces/IIdentity.md)\> |
| `store` | (`soulName`: `string`) => `Promise`<`undefined` \| { `imageResponse`: { `data`: `any` ; `status`: `number` ; `statusText`: `string`  } ; `imageTransaction`: `default` ; `metadataResponse`: { `data`: `any` ; `status`: `number` ; `statusText`: `string`  } ; `metadataTransaction`: `default`  }\> |

#### Defined in

[src/masa.ts:52](https://github.com/masa-finance/masa-sdk/blob/dc0fbaf/src/masa.ts#L52)

___

### session

• **session**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `checkLogin` | () => `Promise`<`boolean`\> |
| `login` | () => `Promise`<`undefined` \| { `address`: `string` ; `cookie`: `string` ; `userId`: `string` \| `BigNumber`  }\> |
| `logout` | () => `Promise`<`undefined` \| { `status`: `string`  }\> |
| `sessionLogout` | () => `Promise`<`undefined` \| { `status`: `string`  }\> |

#### Defined in

[src/masa.ts:46](https://github.com/masa-finance/masa-sdk/blob/dc0fbaf/src/masa.ts#L46)

___

### soulNames

• **soulNames**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `burn` | (`soulName`: `string`) => `Promise`<`void`\> |
| `create` | (`soulName`: `string`, `duration`: `number`, `paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod)) => `Promise`<`void`\> |
| `list` | (`address?`: `string`) => `Promise`<`void`\> |
| `loadSoulNamesByIdentityId` | (`identityId`: `BigNumber`) => `Promise`<{ `index`: `string` = nameIndex; `metadata`: `undefined` \| [`ISoulName`](../interfaces/ISoulName.md) ; `tokenDetails`: [`string`, `BigNumber`, `BigNumber`, `BigNumber`, `boolean`] & { `active`: `boolean` ; `expirationDate`: `BigNumber` ; `identityId`: `BigNumber` ; `sbtName`: `string` ; `tokenId`: `BigNumber`  } ; `tokenUri`: `string`  }[]\> |

#### Defined in

[src/masa.ts:48](https://github.com/masa-finance/masa-sdk/blob/dc0fbaf/src/masa.ts#L48)

___

### utils

• **utils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `version` | () => { `contractsVersion`: `string` ; `sdkVersion`: `string`  } |

#### Defined in

[src/masa.ts:56](https://github.com/masa-finance/masa-sdk/blob/dc0fbaf/src/masa.ts#L56)
