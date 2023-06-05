[# Masa SDK
 - v3.1.2](../README.md) / [Exports](../modules.md) / MasaContracts

# Class: MasaContracts

## Hierarchy

- [`MasaBase`](MasaBase.md)

  ↳ **`MasaContracts`**

## Table of contents

### Constructors

- [constructor](MasaContracts.md#constructor)

### Properties

- [creditScore](MasaContracts.md#creditscore)
- [green](MasaContracts.md#green)
- [identity](MasaContracts.md#identity)
- [instances](MasaContracts.md#instances)
- [masa](MasaContracts.md#masa)
- [sbt](MasaContracts.md#sbt)
- [soulLinker](MasaContracts.md#soullinker)
- [soulName](MasaContracts.md#soulname)

### Methods

- [parseLogs](MasaContracts.md#parselogs)

## Constructors

### constructor

• **new MasaContracts**(`masa`, `contractOverrides?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](Masa.md) |
| `contractOverrides?` | `Partial`<[`IIdentityContracts`](../interfaces/IIdentityContracts.md)\> |

#### Overrides

[MasaBase](MasaBase.md).[constructor](MasaBase.md#constructor)

## Properties

### creditScore

• **creditScore**: [`CreditScore`](CreditScore.md)

___

### green

• **green**: [`Green`](Green.md)

___

### identity

• **identity**: [`Identity`](Identity.md)

___

### instances

• **instances**: [`IIdentityContracts`](../interfaces/IIdentityContracts.md)

___

### masa

• `Protected` `Readonly` **masa**: [`Masa`](Masa.md)

#### Inherited from

[MasaBase](MasaBase.md).[masa](MasaBase.md#masa)

___

### sbt

• **sbt**: [`SBT`](SBT.md)

___

### soulLinker

• **soulLinker**: [`SoulLinker`](SoulLinker.md)

___

### soulName

• **soulName**: [`SoulName`](SoulName.md)

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
