[# Masa React
 - v0.16.3](../README.md) / [Exports](../modules.md) / [rest](rest.md) / storeMetadata

# Namespace: storeMetadata

[rest](rest.md).storeMetadata

## Table of contents

### Variables

- [metadata](rest.storeMetadata.md#metadata)

### Functions

- [useMethod](rest.storeMetadata.md#usemethod)
- [useSimpleMethod](rest.storeMetadata.md#usesimplemethod)

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

▸ **useSimpleMethod**(`__namedParameters`): `UseMutationResult`<`any`, `unknown`, `any`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `any` |

#### Returns

`UseMutationResult`<`any`, `unknown`, `any`, `unknown`\>
