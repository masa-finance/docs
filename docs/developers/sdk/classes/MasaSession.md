[# Masa SDK
 - v1.5.0](../README.md) / [Exports](../modules.md) / MasaSession

# Class: MasaSession

## Table of contents

### Constructors

- [constructor](MasaSession.md#constructor)

### Properties

- [masa](MasaSession.md#masa)

### Methods

- [checkLogin](MasaSession.md#checklogin)
- [getSession](MasaSession.md#getsession)
- [login](MasaSession.md#login)
- [logout](MasaSession.md#logout)
- [sessionLogout](MasaSession.md#sessionlogout)

## Constructors

### constructor

• **new MasaSession**(`masa`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](Masa.md) |

## Properties

### masa

• `Private` **masa**: [`Masa`](Masa.md)

## Methods

### checkLogin

▸ **checkLogin**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

___

### getSession

▸ **getSession**(): `Promise`<`undefined` \| [`ISession`](../interfaces/ISession.md)\>

#### Returns

`Promise`<`undefined` \| [`ISession`](../interfaces/ISession.md)\>

___

### login

▸ **login**(): `Promise`<`undefined` \| { `address`: `string` ; `cookie?`: `string` ; `userId`: `string` \| `BigNumber`  }\>

#### Returns

`Promise`<`undefined` \| { `address`: `string` ; `cookie?`: `string` ; `userId`: `string` \| `BigNumber`  }\>

___

### logout

▸ **logout**(): `Promise`<`undefined` \| { `status`: `string`  }\>

#### Returns

`Promise`<`undefined` \| { `status`: `string`  }\>

___

### sessionLogout

▸ **sessionLogout**(): `Promise`<`undefined` \| [`LogoutResult`](../interfaces/LogoutResult.md)\>

#### Returns

`Promise`<`undefined` \| [`LogoutResult`](../interfaces/LogoutResult.md)\>
