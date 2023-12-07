[# Masa Analytics SDK
 - v0.3.0](README.md) / Exports

# # Masa Analytics SDK
 - v0.3.0

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
- [LoginEventData](interfaces/LoginEventData.md)
- [MintEventData](interfaces/MintEventData.md)
- [PageViewEventData](interfaces/PageViewEventData.md)
- [ReferrerInfo](interfaces/ReferrerInfo.md)
- [UTMParams](interfaces/UTMParams.md)

### Type Aliases

- [EventType](modules.md#eventtype)

### Functions

- [generateSignature](modules.md#generatesignature)

## Type Aliases

### EventType

Ƭ **EventType**: ``"pageView"`` \| ``"login"`` \| ``"mint"`` \| ``"connectWallet"`` \| ``"swap"`` \| ``"bridge"`` \| ``"addLiquidity"`` \| ``"removeLiquidity"`` \| ``"farm"`` \| ``"trade"`` \| ``"claim"``

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
