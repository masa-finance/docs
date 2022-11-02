[# Masa React
](../README.md) / [Exports](../modules.md) / [rest](rest.md) / getSession

# Namespace: getSession

[rest](rest.md).getSession

## Table of contents

### Variables

- [metadata](rest.getSession.md#metadata)

### Functions

- [useMethod](rest.getSession.md#usemethod)
- [useSimpleMethod](rest.getSession.md#usesimplemethod)

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
