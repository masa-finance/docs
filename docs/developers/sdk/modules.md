[# Masa SDK
 - v0.7.12](README.md) / Exports

# # Masa SDK
 - v0.7.12

## Table of contents

### Classes

- [Masa](classes/Masa.md)
- [MasaArweave](classes/MasaArweave.md)
- [MasaClient](classes/MasaClient.md)
- [MasaContracts](classes/MasaContracts.md)

### Interfaces

- [Addresses](interfaces/Addresses.md)
- [Attribute](interfaces/Attribute.md)
- [BaseResult](interfaces/BaseResult.md)
- [Create2FAResult](interfaces/Create2FAResult.md)
- [CreateSoulNameResult](interfaces/CreateSoulNameResult.md)
- [I2FA](interfaces/I2FA.md)
- [ICreditScore](interfaces/ICreditScore.md)
- [IIdentity](interfaces/IIdentity.md)
- [IIdentityContracts](interfaces/IIdentityContracts.md)
- [ISession](interfaces/ISession.md)
- [ISoulName](interfaces/ISoulName.md)
- [LoadContractArgs](interfaces/LoadContractArgs.md)
- [MasaArgs](interfaces/MasaArgs.md)
- [MasaConfig](interfaces/MasaConfig.md)

### Type Aliases

- [CreateCreditScoreResult](modules.md#createcreditscoreresult)
- [Environment](modules.md#environment)
- [PaymentMethod](modules.md#paymentmethod)

### Variables

- [Templates](modules.md#templates)
- [addresses](modules.md#addresses)
- [environments](modules.md#environments)

### Functions

- [arweave](modules.md#arweave)
- [generateSignatureDomain](modules.md#generatesignaturedomain)
- [loadIdentityContracts](modules.md#loadidentitycontracts)
- [recoverAddress](modules.md#recoveraddress)
- [signMessage](modules.md#signmessage)
- [signTypedData](modules.md#signtypeddata)

## Type Aliases

### CreateCreditScoreResult

Ƭ **CreateCreditScoreResult**: [`BaseResult`](interfaces/BaseResult.md)

___

### Environment

Ƭ **Environment**: { `name`: `string` ; `wallet?`: `ethers.Signer` \| `ethers.Wallet`  } & [`MasaArgs`](interfaces/MasaArgs.md)

___

### PaymentMethod

Ƭ **PaymentMethod**: ``"eth"`` \| ``"weth"`` \| ``"stable"`` \| ``"utility"``

## Variables

### Templates

• `Const` **Templates**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `loginTemplate` | (`challenge`: `string`, `expires`: `string`) => `string` |
| `twoFATemplate` | (`identityId`: `string`, `phoneNumber`: `string`, `code`: `string`) => `string` |

___

### addresses

• `Const` **addresses**: [`Addresses`](interfaces/Addresses.md)

___

### environments

• `Const` **environments**: [`Environment`](modules.md#environment)[]

## Functions

### arweave

▸ **arweave**(`__namedParameters`): [`MasaArweave`](classes/MasaArweave.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.host` | `string` |
| `__namedParameters.logging?` | `boolean` |
| `__namedParameters.port` | `number` |
| `__namedParameters.protocol` | `string` |

#### Returns

[`MasaArweave`](classes/MasaArweave.md)

___

### generateSignatureDomain

▸ **generateSignatureDomain**(`wallet`, `name`, `verifyingContract`): `Promise`<{ `chainId`: `number` ; `name`: `string` ; `verifyingContract`: `string` ; `version`: `string` = "1.0.0" }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `Wallet` |
| `name` | `string` |
| `verifyingContract` | `string` |

#### Returns

`Promise`<{ `chainId`: `number` ; `name`: `string` ; `verifyingContract`: `string` ; `version`: `string` = "1.0.0" }\>

___

### loadIdentityContracts

▸ **loadIdentityContracts**(`__namedParameters`): [`IIdentityContracts`](interfaces/IIdentityContracts.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`LoadContractArgs`](interfaces/LoadContractArgs.md) |

#### Returns

[`IIdentityContracts`](interfaces/IIdentityContracts.md)

___

### recoverAddress

▸ **recoverAddress**(`msg`, `signature`, `doHash?`): `undefined` \| `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `msg` | `any` | `undefined` |
| `signature` | `string` | `undefined` |
| `doHash` | `boolean` | `false` |

#### Returns

`undefined` \| `string`

___

### signMessage

▸ **signMessage**(`msg`, `wallet`, `doHash?`): `Promise`<`undefined` \| `string`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `msg` | `any` | `undefined` |
| `wallet` | `Signer` \| `Wallet` | `undefined` |
| `doHash` | `boolean` | `false` |

#### Returns

`Promise`<`undefined` \| `string`\>

___

### signTypedData

▸ **signTypedData**(`contract`, `wallet`, `name`, `types`, `value`): `Promise`<{ `domain`: { `chainId`: `number` ; `name`: `string` ; `verifyingContract`: `string` ; `version`: `string` = "1.0.0" } ; `signature`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `Contract` |
| `wallet` | `Wallet` |
| `name` | `string` |
| `types` | `Record`<`string`, `TypedDataField`[]\> |
| `value` | `Record`<`string`, `any`\> |

#### Returns

`Promise`<{ `domain`: { `chainId`: `number` ; `name`: `string` ; `verifyingContract`: `string` ; `version`: `string` = "1.0.0" } ; `signature`: `string`  }\>
