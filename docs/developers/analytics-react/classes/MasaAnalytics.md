[# Masa Analytics React
 - v0.13.7](../README.md) / [Exports](../modules.md) / MasaAnalytics

# Class: MasaAnalytics

## Table of contents

### Constructors

- [constructor](MasaAnalytics.md#constructor)

### Properties

- [\_client](MasaAnalytics.md#_client)
- [clickedElements](MasaAnalytics.md#clickedelements)
- [config](MasaAnalytics.md#config)
- [extractElementData](MasaAnalytics.md#extractelementdata)
- [handleDocumentClick](MasaAnalytics.md#handledocumentclick)
- [userAddress](MasaAnalytics.md#useraddress)

### Accessors

- [client](MasaAnalytics.md#client)

### Methods

- [fireConnectWalletEvent](MasaAnalytics.md#fireconnectwalletevent)
- [fireElementClickEvent](MasaAnalytics.md#fireelementclickevent)
- [fireEvent](MasaAnalytics.md#fireevent)
- [fireLoginEvent](MasaAnalytics.md#fireloginevent)
- [fireMintEvent](MasaAnalytics.md#firemintevent)
- [firePageViewEvent](MasaAnalytics.md#firepageviewevent)
- [trackClicks](MasaAnalytics.md#trackclicks)

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

• `Private` `Readonly` **\_client**: `any`

___

### clickedElements

• `Private` **clickedElements**: `any`

___

### config

• `Private` **config**: `any`

___

### extractElementData

• `Private` **extractElementData**: `any`

Extracts relevant data from the clicked element.

___

### handleDocumentClick

• `Private` **handleDocumentClick**: `any`

Handles click events on the document, filtering out non-element nodes and specific elements.

___

### userAddress

• **userAddress**: ``null`` \| `string`

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
| `«destructured»` | `FireConnectWalletEventArgs` |

#### Returns

`Promise`\<`void`\>

___

### fireElementClickEvent

▸ **fireElementClickEvent**(`«destructured»`): `Promise`\<`void`\>

Fire an event once the user changes the page

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `FireElementClickEventArgs` |

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
| `«destructured»` | `FireEventArgs` |

#### Returns

`Promise`\<`void`\>

___

### fireLoginEvent

▸ **fireLoginEvent**(`«destructured»`): `Promise`\<`void`\>

Fire an event once the user logged in

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `FireLoginEventArgs` |

#### Returns

`Promise`\<`void`\>

___

### fireMintEvent

▸ **fireMintEvent**(`«destructured»`): `Promise`\<`void`\>

Fire an event once a user tries to mint a token

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `FireMintEventArgs` |

#### Returns

`Promise`\<`void`\>

___

### firePageViewEvent

▸ **firePageViewEvent**(`«destructured»`): `Promise`\<`void`\>

Fire an event once the user changes the page

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `FirePageViewEventArgs` |

#### Returns

`Promise`\<`void`\>

___

### trackClicks

▸ **trackClicks**(): `void`

Sets up tracking for click events on the entire document.

#### Returns

`void`
