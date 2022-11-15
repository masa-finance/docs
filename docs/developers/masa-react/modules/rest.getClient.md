[# Masa React
 - v0.15.8](../README.md) / [Exports](../modules.md) / [rest](rest.md) / getClient

# Namespace: getClient

[rest](rest.md).getClient

## Table of contents

### Variables

- [metadata](rest.getClient.md#metadata)

### Functions

- [useMethod](rest.getClient.md#usemethod)
- [useSimpleMethod](rest.getClient.md#usesimplemethod)

## Variables

### metadata

• `Const` **metadata**: [`MethodMetadata`](../interfaces/rest.MethodMetadata.md)

## Functions

### useMethod

▸ **useMethod**(): `Object`

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

▸ **useSimpleMethod**(`__namedParameters`): `UseQueryResult`<`any`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `any` |

#### Returns

`UseQueryResult`<`any`, `unknown`\>
