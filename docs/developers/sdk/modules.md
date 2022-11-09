[# Masa SDK
 - v0.4.0](README.md) / Exports

# # Masa SDK
 - v0.4.0

## Table of contents

### Classes

- [ContractService](classes/ContractService.md)
- [Masa](classes/Masa.md)
- [MasaClient](classes/MasaClient.md)

### Interfaces

- [Addresses](interfaces/Addresses.md)
- [Attribute](interfaces/Attribute.md)
- [I2FA](interfaces/I2FA.md)
- [ICreditReport](interfaces/ICreditReport.md)
- [IIdentity](interfaces/IIdentity.md)
- [IIdentityContracts](interfaces/IIdentityContracts.md)
- [ISoulName](interfaces/ISoulName.md)
- [LoadContractArgs](interfaces/LoadContractArgs.md)
- [MasaArgs](interfaces/MasaArgs.md)
- [MasaConfig](interfaces/MasaConfig.md)

### Type Aliases

- [PaymentMethod](modules.md#paymentmethod)

### Variables

- [addresses](modules.md#addresses)

### Functions

- [arweave](modules.md#arweave)
- [contracts](modules.md#contracts)
- [loadIdentityContracts](modules.md#loadidentitycontracts)

## Type Aliases

### PaymentMethod

Ƭ **PaymentMethod**: ``"eth"`` \| ``"weth"`` \| ``"stable"`` \| ``"utility"``

## Variables

### addresses

• `Const` **addresses**: [`Addresses`](interfaces/Addresses.md)

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

### contracts

▸ **contracts**(`masa`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `addresses` | [`Addresses`](interfaces/Addresses.md) |
| `loadIdentityContracts` | () => `Promise`<[`IIdentityContracts`](interfaces/IIdentityContracts.md)\> |
| `service` | [`ContractService`](classes/ContractService.md) |

___

### loadIdentityContracts

▸ **loadIdentityContracts**(`__namedParameters`): `Promise`<[`IIdentityContracts`](interfaces/IIdentityContracts.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`LoadContractArgs`](interfaces/LoadContractArgs.md) |

#### Returns

`Promise`<[`IIdentityContracts`](interfaces/IIdentityContracts.md)\>
