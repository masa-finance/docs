[# Masa SDK
 - v3.19.0](../README.md) / [Exports](../modules.md) / MasaContracts

# Class: MasaContracts

## Hierarchy

- `MasaBase`

  ↳ **`MasaContracts`**

## Table of contents

### Constructors

- [constructor](MasaContracts.md#constructor)

### Properties

- [asbt](MasaContracts.md#asbt)
- [creditScore](MasaContracts.md#creditscore)
- [dynamic-sbt](MasaContracts.md#dynamic-sbt)
- [dynamic-sssbt](MasaContracts.md#dynamic-sssbt)
- [green](MasaContracts.md#green)
- [identity](MasaContracts.md#identity)
- [instances](MasaContracts.md#instances)
- [marketplace](MasaContracts.md#marketplace)
- [masa](MasaContracts.md#masa)
- [sbt](MasaContracts.md#sbt)
- [soulLinker](MasaContracts.md#soullinker)
- [soulName](MasaContracts.md#soulname)
- [sssbt](MasaContracts.md#sssbt)

### Methods

- [parseLogs](MasaContracts.md#parselogs)

## Constructors

### constructor

• **new MasaContracts**(`«destructured»`): [`MasaContracts`](MasaContracts.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `contractOverrides?` | `Partial`\<[`IIdentityContracts`](../interfaces/IIdentityContracts.md)\> |
| › `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |

#### Returns

[`MasaContracts`](MasaContracts.md)

#### Overrides

MasaBase.constructor

## Properties

### asbt

• **asbt**: [`ASBTContract`](ASBTContract.md)

___

### creditScore

• **creditScore**: [`CreditScore`](CreditScore.md)

Credit Score

___

### dynamic-sbt

• **dynamic-sbt**: `DynamicSBTContract`

___

### dynamic-sssbt

• **dynamic-sssbt**: `DynamicSSSBTContract`

___

### green

• **green**: [`Green`](Green.md)

Green

___

### identity

• **identity**: [`Identity`](Identity.md)

Identity

___

### instances

• **instances**: [`IIdentityContracts`](../interfaces/IIdentityContracts.md) & [`IMarketplaceContracts`](../interfaces/IMarketplaceContracts.md)

direct contract access

___

### marketplace

• **marketplace**: [`Marketplace`](Marketplace.md)

Marketplace

___

### masa

• `Protected` `Readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

MasaBase.masa

___

### sbt

• **sbt**: [`SBTContract`](SBTContract.md)

SBTs

___

### soulLinker

• **soulLinker**: [`SoulLinker`](SoulLinker.md)

Soul Linker

___

### soulName

• **soulName**: [`SoulName`](SoulName.md)

Soul Name

___

### sssbt

• **sssbt**: [`SSSBTContract`](SSSBTContract.md)

## Methods

### parseLogs

▸ **parseLogs**(`logs`, `additionalContracts?`): `LogDescription`[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `logs` | `Log`[] | `undefined` |
| `additionalContracts` | `BaseContract`[] | `[]` |

#### Returns

`LogDescription`[]
