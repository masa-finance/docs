[# Masa React
 - v0.16.3](../README.md) / [Exports](../modules.md) / [rest](rest.md) / balances

# Namespace: balances

[rest](rest.md).balances

## Table of contents

### Variables

- [metadata](rest.balances.md#metadata)

### Functions

- [useMethod](rest.balances.md#usemethod)
- [useSimpleMethod](rest.balances.md#usesimplemethod)

## Variables

### metadata

• `Const` **metadata**: [`MethodMetadata`](../interfaces/rest.MethodMetadata.md)

## Functions

### useMethod

▸ **useMethod**(`__namedParameters`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `any` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `error` | `undefined` \| `Error` |
| `getData` | (`lazyData?`: `any`) => `Promise`<`void`\> |
| `loading` | `boolean` |

___

### useSimpleMethod

▸ **useSimpleMethod**(`__namedParameters`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `any` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `cancel` | () => `void` |
| `data` | `unknown` |
| `error` | `undefined` \| `Error` |
| `loading` | `boolean` |
| `refetch` | () => `Promise`<`void`\> |
