[# Masa Analytics SDK
 - v0.4.2](../README.md) / [Exports](../modules.md) / MasaAnalytics

# Class: MasaAnalytics

## Table of contents

### Constructors

- [constructor](MasaAnalytics.md#constructor)

### Properties

- [\_client](MasaAnalytics.md#_client)
- [config](MasaAnalytics.md#config)

### Accessors

- [client](MasaAnalytics.md#client)

### Methods

- [fireConnectWalletEvent](MasaAnalytics.md#fireconnectwalletevent)
- [fireEvent](MasaAnalytics.md#fireevent)
- [fireLoginEvent](MasaAnalytics.md#fireloginevent)
- [fireMintEvent](MasaAnalytics.md#firemintevent)
- [firePageViewEvent](MasaAnalytics.md#firepageviewevent)

## Constructors

### constructor

• **new MasaAnalytics**(`config`): [`MasaAnalytics`](MasaAnalytics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Object` |
| `config.apiUrl?` | `string` |
| `config.clientApp` | `string` |
| `config.clientId` | `string` |
| `config.clientName` | `string` |

#### Returns

[`MasaAnalytics`](MasaAnalytics.md)

## Properties

### \_client

• `Private` `Readonly` **\_client**: [`MasaAnalyticsClient`](MasaAnalyticsClient.md)

___

### config

• `Private` **config**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `apiUrl?` | `string` |
| `clientApp` | `string` |
| `clientId` | `string` |
| `clientName` | `string` |

## Accessors

### client

• `get` **client**(): [`MasaAnalyticsClient`](MasaAnalyticsClient.md)

#### Returns

[`MasaAnalyticsClient`](MasaAnalyticsClient.md)

## Methods

### fireConnectWalletEvent

▸ **fireConnectWalletEvent**(`«destructured»`): `Promise`\<`void`\>

Fire an event once a user tries to mint a token

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`FireConnectWalletEventArgs`](../interfaces/FireConnectWalletEventArgs.md) |

#### Returns

`Promise`\<`void`\>

___

### fireEvent

▸ **fireEvent**(`type`, `«destructured»`): `Promise`\<`void`\>

Fire a flexible event
It can use any of the EventTypes

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `«destructured»` | [`FireEventArgs`](../interfaces/FireEventArgs.md) |

#### Returns

`Promise`\<`void`\>

___

### fireLoginEvent

▸ **fireLoginEvent**(`«destructured»`): `Promise`\<`void`\>

Fire an event once the user logged in

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`FireLoginEventArgs`](../interfaces/FireLoginEventArgs.md) |

#### Returns

`Promise`\<`void`\>

___

### fireMintEvent

▸ **fireMintEvent**(`«destructured»`): `Promise`\<`void`\>

Fire an event once a user tries to mint a token

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`FireMintEventArgs`](../interfaces/FireMintEventArgs.md) |

#### Returns

`Promise`\<`void`\>

___

### firePageViewEvent

▸ **firePageViewEvent**(`«destructured»`): `Promise`\<`void`\>

Fire an event once the user changes the page

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`FirePageViewEventArgs`](../interfaces/FirePageViewEventArgs.md) |

#### Returns

`Promise`\<`void`\>
