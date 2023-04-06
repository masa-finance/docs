[# Masa SDK
 - v1.13.0](../README.md) / [Exports](../modules.md) / MasaContracts

# Class: MasaContracts

## Hierarchy

- `MasaBase`

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

• **new MasaContracts**(`masa`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](Masa.md) |

#### Overrides

MasaBase.constructor

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

• `Protected` **masa**: [`Masa`](Masa.md)

#### Inherited from

MasaBase.masa

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
