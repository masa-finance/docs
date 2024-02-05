[# Masa Analytics React
 - v0.13.7](README.md) / Exports

# # Masa Analytics React
 - v0.13.7

## Table of contents

### Classes

- [MasaAnalytics](classes/MasaAnalytics.md)
- [MasaAnalyticsClient](classes/MasaAnalyticsClient.md)

### Type Aliases

- [EventType](modules.md#eventtype)

### Functions

- [generateSignature](modules.md#generatesignature)
- [useEventLogger](modules.md#useeventlogger)
- [useMasaAnalyticsReact](modules.md#usemasaanalyticsreact)

## Type Aliases

### EventType

Ƭ **EventType**: ``"pageView"`` \| ``"elementClick"`` \| ``"login"`` \| ``"mint"`` \| ``"connectWallet"`` \| ``"swap"`` \| ``"bridge"`` \| ``"addLiquidity"`` \| ``"removeLiquidity"`` \| ``"farm"`` \| ``"trade"`` \| ``"claim"``

## Functions

### generateSignature

▸ **generateSignature**(`wallet`, `client_app`, `client_name`): `Promise`\<\{ `message`: `string` ; `nonce`: `string` ; `signature`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `Signer` |
| `client_app` | `string` |
| `client_name` | `string` |

#### Returns

`Promise`\<\{ `message`: `string` ; `nonce`: `string` ; `signature`: `string`  }\>

___

### useEventLogger

▸ **useEventLogger**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `logEvent` | (`__namedParameters`: \{ `client_id?`: `string` ; `endpoint`: `string` ; `event_data`: `BaseEventData` ; `type`: [`EventType`](modules.md#eventtype) ; `user_address?`: `string`  }) => `Promise`\<`undefined` \| `Event`\> |

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
| `fireConnectWalletEvent` | (`fireConnectWalletEventArgs`: `FireConnectWalletEventArgs`) => `Promise`\<`void`\> |
| `fireEvent` | (`type`: `string`, `fireEventArgs`: `FireEventArgs`) => `Promise`\<`void`\> |
| `fireLoginEvent` | (`__namedParameters`: `FireLoginEventArgs`) => `Promise`\<`void`\> |
| `fireMintEvent` | (`fireMintEventArgs`: `FireMintEventArgs`) => `Promise`\<`void`\> |
| `firePageViewEvent` | (`firePageViewEventArgs`: `FirePageViewEventArgs`) => `Promise`\<`void`\> |
