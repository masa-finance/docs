[# Masa Analytics SDK
 - v0.5.11](../README.md) / [Exports](../modules.md) / MasaAnalytics

# Class: MasaAnalytics

## Table of contents

### Constructors

- [constructor](MasaAnalytics.md#constructor)

### Properties

- [\_client](MasaAnalytics.md#_client)
- [clickedElements](MasaAnalytics.md#clickedelements)
- [config](MasaAnalytics.md#config)
- [userAddress](MasaAnalytics.md#useraddress)

### Accessors

- [client](MasaAnalytics.md#client)

### Methods

- [extractElementData](MasaAnalytics.md#extractelementdata)
- [fireConnectWalletEvent](MasaAnalytics.md#fireconnectwalletevent)
- [fireEvent](MasaAnalytics.md#fireevent)
- [fireLoginEvent](MasaAnalytics.md#fireloginevent)
- [fireMintEvent](MasaAnalytics.md#firemintevent)
- [firePageViewEvent](MasaAnalytics.md#firepageviewevent)
- [fireTrackCustomEvent](MasaAnalytics.md#firetrackcustomevent)
- [handleDocumentClick](MasaAnalytics.md#handledocumentclick)
- [trackCustomEvent](MasaAnalytics.md#trackcustomevent)

## Constructors

### constructor

• **new MasaAnalytics**(`config`): [`MasaAnalytics`](MasaAnalytics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Object` |
| `config.apiUrl?` | `string` |
| `config.clientId` | `string` |

#### Returns

[`MasaAnalytics`](MasaAnalytics.md)

## Properties

### \_client

• `Private` `Readonly` **\_client**: [`MasaAnalyticsClient`](MasaAnalyticsClient.md)

___

### clickedElements

• `Private` **clickedElements**: `Record`\<`string`, `boolean`\> = `{}`

___

### config

• `Private` **config**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `apiUrl?` | `string` |
| `clientId` | `string` |

___

### userAddress

• **userAddress**: ``null`` \| `string` = `null`

## Accessors

### client

• `get` **client**(): [`MasaAnalyticsClient`](MasaAnalyticsClient.md)

#### Returns

[`MasaAnalyticsClient`](MasaAnalyticsClient.md)

## Methods

### extractElementData

▸ **extractElementData**(`eventName`, `additionalEventData`): `Object`

Extracts relevant data from the clicked element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `additionalEventData` | `Record`\<`string`, `unknown`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `additionalEventData` | `Record`\<`string`, `unknown`\> |
| `event_name` | `string` |
| `page_title` | `string` |
| `page_url` | `string` |
| `user_address?` | `string` |

___

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

___

### fireTrackCustomEvent

▸ **fireTrackCustomEvent**(`«destructured»`): `Promise`\<`void`\>

Fire an event once the user changes the page

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`FireTrackCustomEventArgs`](../interfaces/FireTrackCustomEventArgs.md) |

#### Returns

`Promise`\<`void`\>

___

### handleDocumentClick

▸ **handleDocumentClick**(`eventName`, `additionalEventData`): `void`

Handles click events on the document, filtering out non-element nodes and specific elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `additionalEventData` | `Record`\<`string`, `unknown`\> |

#### Returns

`void`

___

### trackCustomEvent

▸ **trackCustomEvent**(`«destructured»`): `void`

Sets up tracking for a specific click event on the entire document.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `additionalEventData` | `Record`\<`string`, `unknown`\> |
| › `eventName` | `string` |

#### Returns

`void`
