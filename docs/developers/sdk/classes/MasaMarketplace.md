[# Masa SDK
 - v3.30.0](../README.md) / [Exports](../modules.md) / MasaMarketplace

# Class: MasaMarketplace

## Hierarchy

- `MasaModuleBase`

  ↳ **`MasaMarketplace`**

## Table of contents

### Constructors

- [constructor](MasaMarketplace.md#constructor)

### Properties

- [contract](MasaMarketplace.md#contract)
- [masa](MasaMarketplace.md#masa)

### Accessors

- [isContractAvailable](MasaMarketplace.md#iscontractavailable)

### Methods

- [claimAllRewards](MasaMarketplace.md#claimallrewards)
- [stakeAll](MasaMarketplace.md#stakeall)

## Constructors

### constructor

• **new MasaMarketplace**(`masa`): [`MasaMarketplace`](MasaMarketplace.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |

#### Returns

[`MasaMarketplace`](MasaMarketplace.md)

#### Overrides

MasaModuleBase.constructor

## Properties

### contract

• `Readonly` **contract**: `Contract` & [`ContractInfo`](../interfaces/ContractInfo.md)

#### Inherited from

MasaModuleBase.contract

___

### masa

• `Protected` `Readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

MasaModuleBase.masa

## Accessors

### isContractAvailable

• `get` **isContractAvailable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MasaModuleBase.isContractAvailable

## Methods

### claimAllRewards

▸ **claimAllRewards**(): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

___

### stakeAll

▸ **stakeAll**(): `Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>

#### Returns

`Promise`\<[`BaseResult`](../interfaces/BaseResult.md)\>
