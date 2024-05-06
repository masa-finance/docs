[**Masa SDK v3.36.1**](../README.md) • **Docs**

***

[Masa SDK v3.36.1](../globals.md) / MasaContracts

# Class: MasaContracts

## Extends

- `MasaBase`

## Constructors

### new MasaContracts()

> **new MasaContracts**(`__namedParameters`): [`MasaContracts`](MasaContracts.md)

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.contractOverrides?**: `Partial`\<[`IIdentityContracts`](../interfaces/IIdentityContracts.md)\>

• **\_\_namedParameters.masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Returns

[`MasaContracts`](MasaContracts.md)

#### Overrides

`MasaBase.constructor`

## Properties

### asbt

> **asbt**: [`ASBTContract`](ASBTContract.md)

***

### creditScore

> **creditScore**: [`CreditScore`](CreditScore.md)

Credit Score

***

### dynamic-sbt

> **dynamic-sbt**: `DynamicSBTContract`

***

### dynamic-sssbt

> **dynamic-sssbt**: `DynamicSSSBTContract`

***

### green

> **green**: [`Green`](Green.md)

Green

***

### identity

> **identity**: [`Identity`](Identity.md)

Identity

***

### instances

> **instances**: [`IIdentityContracts`](../interfaces/IIdentityContracts.md) & [`IMarketplaceContracts`](../interfaces/IMarketplaceContracts.md) & [`ITokenContracts`](../interfaces/ITokenContracts.md)

direct contract access

***

### marketplace

> **marketplace**: [`Marketplace`](Marketplace.md)

Marketplace

***

### masa

> `protected` `readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

`MasaBase.masa`

***

### sbt

> **sbt**: [`SBTContract`](SBTContract.md)

SBTs

***

### soulLinker

> **soulLinker**: [`SoulLinker`](SoulLinker.md)

Soul Linker

***

### soulName

> **soulName**: [`SoulName`](SoulName.md)

Soul Name

***

### sssbt

> **sssbt**: [`SSSBTContract`](SSSBTContract.md)

## Methods

### parseLogs()

> **parseLogs**(`logs`, `additionalContracts`): `LogDescription`[]

#### Parameters

• **logs**: `Log`[]

• **additionalContracts**: `BaseContract`[]= `[]`

#### Returns

`LogDescription`[]
