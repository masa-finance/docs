[@masa-finance/masa-sdk](README.md) / Exports

# @masa-finance/masa-sdk

## Table of contents

### Classes

- [ContractService](classes/ContractService.md)
- [Masa](classes/Masa.md)
- [MasaClient](classes/MasaClient.md)

### Interfaces

- [Addresses](interfaces/Addresses.md)
- [Attribute](interfaces/Attribute.md)
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

#### Defined in

[src/contracts/contractService.ts:8](https://github.com/masa-finance/masa-sdk/blob/1a83a00/src/contracts/contractService.ts#L8)

## Variables

### addresses

• `Const` **addresses**: [`Addresses`](interfaces/Addresses.md)

#### Defined in

[src/contracts/addresses.ts:16](https://github.com/masa-finance/masa-sdk/blob/1a83a00/src/contracts/addresses.ts#L16)

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

#### Defined in

[src/utils/clients/arweave.ts:3](https://github.com/masa-finance/masa-sdk/blob/1a83a00/src/utils/clients/arweave.ts#L3)

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

#### Defined in

[src/contracts/contracts.ts:6](https://github.com/masa-finance/masa-sdk/blob/1a83a00/src/contracts/contracts.ts#L6)

___

### loadIdentityContracts

▸ **loadIdentityContracts**(`__namedParameters`): `Promise`<[`IIdentityContracts`](interfaces/IIdentityContracts.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`LoadContractArgs`](interfaces/LoadContractArgs.md) |

#### Returns

`Promise`<[`IIdentityContracts`](interfaces/IIdentityContracts.md)\>

#### Defined in

[src/contracts/loadIdentityContracts.ts:17](https://github.com/masa-finance/masa-sdk/blob/1a83a00/src/contracts/loadIdentityContracts.ts#L17)
