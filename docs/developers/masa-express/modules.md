[# Masa Express
 - v2.0.1](README.md) / Exports

# # Masa Express
 - v2.0.1

## Table of contents

### Interfaces

- [CustomSessionFields](interfaces/CustomSessionFields.md)
- [MasaSessionArgs](interfaces/MasaSessionArgs.md)

### Functions

- [MasaSessionMiddleware](modules.md#masasessionmiddleware)
- [MasaSessionRouter](modules.md#masasessionrouter)

## Functions

### MasaSessionMiddleware

▸ **MasaSessionMiddleware**(`«destructured»`): `RequestHandler`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`MasaSessionArgs`](interfaces/MasaSessionArgs.md) |

#### Returns

`RequestHandler`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>

___

### MasaSessionRouter

▸ **MasaSessionRouter**(`args`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`MasaSessionArgs`](interfaces/MasaSessionArgs.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `middleware` | `RequestHandler`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `router` | `Router` |
| `sessionChecker` | `RequestHandler`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
