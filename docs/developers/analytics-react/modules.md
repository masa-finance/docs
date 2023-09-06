[# Masa Analytics React
 - v0.9.3](README.md) / Exports

# # Masa Analytics React
 - v0.9.3

## Table of contents

### Type Aliases

- [EventType](modules.md#eventtype)

### Functions

- [useEventLogger](modules.md#useeventlogger)
- [useMasaAnalyticsReact](modules.md#usemasaanalyticsreact)

## Type Aliases

### EventType

Ƭ **EventType**: ``"pageView"`` \| ``"login"`` \| ``"mint"`` \| ``"connectWallet"`` \| ``"swap"`` \| ``"bridge"`` \| ``"addLiquidity"`` \| ``"farm"`` \| ``"trade"`` \| ``"claim"``

## Functions

### useEventLogger

▸ **useEventLogger**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `logEvent` | (`__namedParameters`: { `client_id?`: `string` ; `endpoint`: `string` ; `event_data`: `BaseEventData` ; `type`: [`EventType`](modules.md#eventtype) ; `user_address?`: `string`  }) => `Promise`<`undefined` \| `Event`\> |

___

### useMasaAnalyticsReact

▸ **useMasaAnalyticsReact**(`«destructured»`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `clientApp` | `string` |
| › `clientId` | `string` |
| › `clientName` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fireConnectWalletEvent` | (`__namedParameters`: { `user_address`: `string` ; `wallet_type`: `string`  }) => `Promise`<`void`\> |
| `fireEvent` | (`type`: [`EventType`](modules.md#eventtype), `__namedParameters`: `FireEventArgs`) => `Promise`<`void`\> |
| `fireLoginEvent` | (`__namedParameters`: { `user_address`: `string`  }) => `Promise`<`void`\> |
| `fireMintEvent` | (`__namedParameters`: `FireMintEventArgs`) => `Promise`<`void`\> |
| `firePageViewEvent` | (`__namedParameters`: { `page`: `string` ; `user_address?`: `string`  }) => `Promise`<`void`\> |
