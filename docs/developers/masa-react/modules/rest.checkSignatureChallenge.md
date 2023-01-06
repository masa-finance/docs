[# Masa React
 - v0.19.0](../README.md) / [Exports](../modules.md) / [rest](rest.md) / checkSignatureChallenge

# Namespace: checkSignatureChallenge

[rest](rest.md).checkSignatureChallenge

## Table of contents

### Variables

- [metadata](rest.checkSignatureChallenge.md#metadata)

### Functions

- [useMethod](rest.checkSignatureChallenge.md#usemethod)
- [useSimpleMethod](rest.checkSignatureChallenge.md#usesimplemethod)

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
