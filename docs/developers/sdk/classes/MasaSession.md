[**# Masa SDK v3.36.1**](../README.md) • **Docs**

***

[# Masa SDK v3.36.1](../globals.md) / MasaSession

# Class: MasaSession

## Extends

- `MasaBase`

## Constructors

### new MasaSession()

> **new MasaSession**(`masa`): [`MasaSession`](MasaSession.md)

#### Parameters

• **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Returns

[`MasaSession`](MasaSession.md)

#### Inherited from

`MasaBase.constructor`

## Properties

### masa

> `protected` `readonly` **masa**: [`MasaInterface`](../interfaces/MasaInterface.md)

#### Inherited from

`MasaBase.masa`

## Methods

### checkLogin()

> **checkLogin**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

***

### getSession()

> **getSession**(): `Promise`\<`undefined` \| [`ISession`](../interfaces/ISession.md)\>

#### Returns

`Promise`\<`undefined` \| [`ISession`](../interfaces/ISession.md)\>

***

### login()

> **login**(): `Promise`\<[`LoginResult`](../interfaces/LoginResult.md)\>

#### Returns

`Promise`\<[`LoginResult`](../interfaces/LoginResult.md)\>

***

### logout()

> **logout**(): `Promise`\<`undefined` \| `object`\>

#### Returns

`Promise`\<`undefined` \| `object`\>

***

### sessionLogout()

> **sessionLogout**(): `Promise`\<`undefined` \| [`LogoutResult`](../interfaces/LogoutResult.md)\>

#### Returns

`Promise`\<`undefined` \| [`LogoutResult`](../interfaces/LogoutResult.md)\>
