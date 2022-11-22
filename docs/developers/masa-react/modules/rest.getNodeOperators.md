[# Masa React
 - v0.16.6](../README.md) / [Exports](../modules.md) / [rest](rest.md) / getNodeOperators

# Namespace: getNodeOperators

[rest](rest.md).getNodeOperators

## Table of contents

### Variables

- [metadata](rest.getNodeOperators.md#metadata)

### Functions

- [useMethod](rest.getNodeOperators.md#usemethod)
- [useSimpleMethod](rest.getNodeOperators.md#usesimplemethod)

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
