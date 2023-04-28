[# Masa Express
 - v1.0.4](README.md) / Exports

# # Masa Express
 - v1.0.4

## Table of contents

### Interfaces

- [CustomSessionFields](interfaces/CustomSessionFields.md)

### Functions

- [MasaSessionMiddleware](modules.md#masasessionmiddleware)
- [MasaSessionRouter](modules.md#masasessionrouter)
- [sessionCheckHandler](modules.md#sessioncheckhandler)

## Functions

### MasaSessionMiddleware

▸ **MasaSessionMiddleware**(`«destructured»`): `RequestHandler`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `domain` | `string` |
| › `environment` | `string` |
| › `secret` | `string` |
| › `sessionName` | `string` |
| › `store?` | `Store` |
| › `ttl` | `number` |

#### Returns

`RequestHandler`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>

___

### MasaSessionRouter

▸ **MasaSessionRouter**(`«destructured»`): `Router`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `sessionMiddleware` | `RequestHandler`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| › `sessionName` | `string` |
| › `sessionNamespace` | `string` |

#### Returns

`Router`

___

### sessionCheckHandler

▸ **sessionCheckHandler**(`request`, `response`, `next`): `undefined` \| `Response`<`any`, `Record`<`string`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `RequestSession` |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> |
| `next` | `NextFunction` |

#### Returns

`undefined` \| `Response`<`any`, `Record`<`string`, `any`\>\>
