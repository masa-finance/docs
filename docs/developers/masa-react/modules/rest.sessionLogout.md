[# Masa React
 - v0.11.0](../README.md) / [Exports](../modules.md) / [rest](rest.md) / sessionLogout

# Namespace: sessionLogout

[rest](rest.md).sessionLogout

## Table of contents

### Variables

- [metadata](rest.sessionLogout.md#metadata)

### Functions

- [useMethod](rest.sessionLogout.md#usemethod)
- [useSimpleMethod](rest.sessionLogout.md#usesimplemethod)

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
