[# Masa SDK
 - v0.5.1](README.md) / Exports

# # Masa SDK
 - v0.5.1

## Table of contents

### Classes

- [Masa](classes/Masa.md)
- [MasaClient](classes/MasaClient.md)
- [MasaContracts](classes/MasaContracts.md)

### Interfaces

- [Addresses](interfaces/Addresses.md)
- [Attribute](interfaces/Attribute.md)
- [Create2FAResult](interfaces/Create2FAResult.md)
- [CreateCreditScoreResult](interfaces/CreateCreditScoreResult.md)
- [I2FA](interfaces/I2FA.md)
- [ICreditScore](interfaces/ICreditScore.md)
- [IIdentity](interfaces/IIdentity.md)
- [IIdentityContracts](interfaces/IIdentityContracts.md)
- [ISoulName](interfaces/ISoulName.md)
- [LoadContractArgs](interfaces/LoadContractArgs.md)
- [MasaArgs](interfaces/MasaArgs.md)
- [MasaConfig](interfaces/MasaConfig.md)

### Type Aliases

- [Environment](modules.md#environment)
- [PaymentMethod](modules.md#paymentmethod)

### Variables

- [Templates](modules.md#templates)
- [addresses](modules.md#addresses)
- [environments](modules.md#environments)

### Functions

- [arweave](modules.md#arweave)
- [loadIdentityContracts](modules.md#loadidentitycontracts)

## Type Aliases

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
| `creditScoreTemplate` | (`identityId`: `string`, `address`: `string`) => `string` |
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

▸ **arweave**(`__namedParameters`): `default`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.host` | `string` |
| `__namedParameters.logging?` | `boolean` |
| `__namedParameters.port` | `number` |
| `__namedParameters.protocol` | `string` |

#### Returns

`default`

___

### loadIdentityContracts

▸ **loadIdentityContracts**(`__namedParameters`): [`IIdentityContracts`](interfaces/IIdentityContracts.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`LoadContractArgs`](interfaces/LoadContractArgs.md) |

#### Returns

[`IIdentityContracts`](interfaces/IIdentityContracts.md)
