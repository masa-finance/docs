[# Masa Analytics SDK
 - v0.5.11](README.md) / Exports

# # Masa Analytics SDK
 - v0.5.11

## Table of contents

### Classes

- [MasaAnalytics](classes/MasaAnalytics.md)
- [MasaAnalyticsClient](classes/MasaAnalyticsClient.md)

### Interfaces

- [BaseArgs](interfaces/BaseArgs.md)
- [BaseEvent](interfaces/BaseEvent.md)
- [BaseEventData](interfaces/BaseEventData.md)
- [ConnectWalletEventData](interfaces/ConnectWalletEventData.md)
- [FireConnectWalletEventArgs](interfaces/FireConnectWalletEventArgs.md)
- [FireEventArgs](interfaces/FireEventArgs.md)
- [FireEventData](interfaces/FireEventData.md)
- [FireLoginEventArgs](interfaces/FireLoginEventArgs.md)
- [FireMintEventArgs](interfaces/FireMintEventArgs.md)
- [FirePageViewEventArgs](interfaces/FirePageViewEventArgs.md)
- [FireTrackCustomEventArgs](interfaces/FireTrackCustomEventArgs.md)
- [LoginEventData](interfaces/LoginEventData.md)
- [MintEventData](interfaces/MintEventData.md)
- [PageViewEventData](interfaces/PageViewEventData.md)
- [ReferrerInfo](interfaces/ReferrerInfo.md)
- [TrackCustomEventData](interfaces/TrackCustomEventData.md)
- [UTMParams](interfaces/UTMParams.md)

### Type Aliases

- [EventType](modules.md#eventtype)

### Variables

- [globalUserAddress](modules.md#globaluseraddress)

### Functions

- [connectMetamask](modules.md#connectmetamask)
- [detectWalletProvider](modules.md#detectwalletprovider)
- [generateSignature](modules.md#generatesignature)
- [trackConnectedWallet](modules.md#trackconnectedwallet)

## Type Aliases

### EventType

Ƭ **EventType**: ``"pageView"`` \| ``"customEvent"`` \| ``"login"`` \| ``"mint"`` \| ``"connectWallet"`` \| ``"swap"`` \| ``"bridge"`` \| ``"addLiquidity"`` \| ``"removeLiquidity"`` \| ``"farm"`` \| ``"trade"`` \| ``"claim"``

## Variables

### globalUserAddress

• **globalUserAddress**: `string` \| ``null`` = `null`

## Functions

### connectMetamask

▸ **connectMetamask**(`ma`): `Promise`\<`undefined` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ma` | [`MasaAnalytics`](classes/MasaAnalytics.md) |

#### Returns

`Promise`\<`undefined` \| `string`\>

___

### detectWalletProvider

▸ **detectWalletProvider**(): `string`

#### Returns

`string`

___

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

### trackConnectedWallet

▸ **trackConnectedWallet**(`MA`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `MA` | [`MasaAnalytics`](classes/MasaAnalytics.md) |

#### Returns

`Promise`\<`void`\>
