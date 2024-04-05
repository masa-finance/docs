[# Masa Express
 - v2.0.0](README.md) / Exports

# # Masa Express
 - v2.0.0

## Table of contents

### Interfaces

- [CustomSessionFields](interfaces/CustomSessionFields.md)
- [MasaSessionArgs](interfaces/MasaSessionArgs.md)

### Functions

- [MasaSessionMiddleware](modules.md#masasessionmiddleware)
- [MasaSessionRouter](modules.md#masasessionrouter)
- [sessionCheckHandler](modules.md#sessioncheckhandler)

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

___

### sessionCheckHandler

▸ **sessionCheckHandler**(`verbose?`): (`request`: `RequestSession`, `response`: `Response`\<`ISession` \| `BaseResult`, `Record`\<`string`, `any`\>\>, `next`: `NextFunction`) => `undefined` \| `Response`\<`ISession` \| `BaseResult`, `Record`\<`string`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `verbose?` | `boolean` |

#### Returns

`fn`

▸ (`request`, `response`, `next`): `undefined` \| `Response`\<`ISession` \| `BaseResult`, `Record`\<`string`, `any`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `RequestSession` |
| `response` | `Response`\<`ISession` \| `BaseResult`, `Record`\<`string`, `any`\>\> |
| `next` | `NextFunction` |

##### Returns

`undefined` \| `Response`\<`ISession` \| `BaseResult`, `Record`\<`string`, `any`\>\>
