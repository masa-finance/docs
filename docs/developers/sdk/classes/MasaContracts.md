[# Masa SDK
 - v3.4.6](../README.md) / [Exports](../modules.md) / MasaContracts

# Class: MasaContracts

## Hierarchy

- [`MasaBase`](MasaBase.md)

  ↳ **`MasaContracts`**

## Table of contents

### Constructors

- [constructor](MasaContracts.md#constructor)

### Properties

- [asbt](MasaContracts.md#asbt)
- [creditScore](MasaContracts.md#creditscore)
- [green](MasaContracts.md#green)
- [identity](MasaContracts.md#identity)
- [instances](MasaContracts.md#instances)
- [masa](MasaContracts.md#masa)
- [sbt](MasaContracts.md#sbt)
- [soulLinker](MasaContracts.md#soullinker)
- [soulName](MasaContracts.md#soulname)
- [sssbt](MasaContracts.md#sssbt)

### Methods

- [parseLogs](MasaContracts.md#parselogs)

## Constructors

### constructor

• **new MasaContracts**(`masa`, `contractOverrides?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |
| `contractOverrides?` | `Partial`<[`IIdentityContracts`](../interfaces/IIdentityContracts.md)\> |

#### Overrides

[MasaBase](MasaBase.md).[constructor](MasaBase.md#constructor)

## Properties

### asbt

• **asbt**: [`ASBTContract`](ASBTContract.md)

___

### creditScore

• **creditScore**: [`CreditScore`](CreditScore.md)

Credit Score

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

• **instances**: [`IIdentityContracts`](../interfaces/IIdentityContracts.md)

direct contract access

___

### masa

• `Protected` `Readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

[MasaBase](MasaBase.md).[masa](MasaBase.md#masa)

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
