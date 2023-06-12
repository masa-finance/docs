[# Masa SDK
 - v3.3.2](../README.md) / [Exports](../modules.md) / MasaLinkable

# Class: MasaLinkable<LinkContract\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `LinkContract` | extends `Contract` |

## Hierarchy

- [`MasaBase`](MasaBase.md)

  ↳ **`MasaLinkable`**

  ↳↳ [`MasaCreditScore`](MasaCreditScore.md)

  ↳↳ [`MasaGreen`](MasaGreen.md)

  ↳↳ [`MasaIdentity`](MasaIdentity.md)

  ↳↳ [`SBTWrapper`](SBTWrapper.md)

## Implements

- `d`

## Table of contents

### Constructors

- [constructor](MasaLinkable.md#constructor)

### Properties

- [contract](MasaLinkable.md#contract)
- [links](MasaLinkable.md#links)
- [masa](MasaLinkable.md#masa)

## Constructors

### constructor

• **new MasaLinkable**<`LinkContract`\>(`masa`, `contract`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LinkContract` | extends `Contract`<`LinkContract`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`MasaInterface`](../interfaces/MasaInterface.md) |
| `contract` | `LinkContract` |

#### Overrides

[MasaBase](MasaBase.md).[constructor](MasaBase.md#constructor)

## Properties

### contract

• `Readonly` **contract**: `LinkContract`

___

### links

• `Readonly` **links**: [`MasaSoulLinker`](MasaSoulLinker.md)

#### Implementation of

d.links

___

### masa

• `Protected` `Readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

[MasaBase](MasaBase.md).[masa](MasaBase.md#masa)
