[# Masa React
 - v0.14.7](../README.md) / [Exports](../modules.md) / [rest](rest.md) / postClient

# Namespace: postClient

[rest](rest.md).postClient

## Table of contents

### Variables

- [metadata](rest.postClient.md#metadata)

### Functions

- [useMethod](rest.postClient.md#usemethod)

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
