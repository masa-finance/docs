[# Masa Express
 - v1.3.3](README.md) / Exports

# # Masa Express
 - v1.3.3

## Table of contents

### Interfaces

- [CustomSessionFields](interfaces/CustomSessionFields.md)

### Functions

- [MasaSessionMiddleware](modules.md#masasessionmiddleware)
- [MasaSessionRouter](modules.md#masasessionrouter)
- [sessionCheckHandler](modules.md#sessioncheckhandler)

## Functions

### MasaSessionMiddleware

▸ **MasaSessionMiddleware**(`«destructured»`): `RequestHandler`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `domain` | `string` | `".masa.finance"` |
| › `environment` | `string` | `undefined` |
| › `sameSite?` | ``"none"`` \| ``"lax"`` \| ``"strict"`` | `undefined` |
| › `secret` | `string` | `undefined` |
| › `secure?` | `boolean` | `undefined` |
| › `sessionName` | `string` | `undefined` |
| › `store?` | `Store` | `undefined` |
| › `ttl` | `number` | `undefined` |
| › `verbose?` | `boolean` | `false` |

#### Returns

`RequestHandler`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>

___

### MasaSessionRouter

▸ **MasaSessionRouter**(`«destructured»`): `Router`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `sessionMiddleware` | `RequestHandler`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| › `sessionName` | `string` |
| › `sessionNamespace` | `string` |

#### Returns

`Router`

___

### sessionCheckHandler

▸ **sessionCheckHandler**(`request`, `response`, `next`): `undefined` \| `Response`\<`any`, `Record`\<`string`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `RequestSession` |
| `response` | `Response`\<`any`, `Record`\<`string`, `any`\>\> |
| `next` | `NextFunction` |

#### Returns

`undefined` \| `Response`\<`any`, `Record`\<`string`, `any`\>\>
