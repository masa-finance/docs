[# Masa Analytics SDK
 - v0.2.0](README.md) / Exports

# # Masa Analytics SDK
 - v0.2.0

## Table of contents

### Classes

- [MasaAnalytics](classes/MasaAnalytics.md)

### Interfaces

- [BaseEventData](interfaces/BaseEventData.md)
- [ConnectWalletEventData](interfaces/ConnectWalletEventData.md)
- [Event](interfaces/Event.md)
- [FireEventArgs](interfaces/FireEventArgs.md)
- [FireEventData](interfaces/FireEventData.md)
- [FireMintEventArgs](interfaces/FireMintEventArgs.md)
- [LoginEventData](interfaces/LoginEventData.md)
- [MintEventData](interfaces/MintEventData.md)
- [PageViewEventData](interfaces/PageViewEventData.md)

### Type Aliases

- [EventType](modules.md#eventtype)

### Functions

- [generateSignature](modules.md#generatesignature)

## Type Aliases

### EventType

Ƭ **EventType**: ``"pageView"`` \| ``"login"`` \| ``"mint"`` \| ``"connectWallet"`` \| ``"swap"`` \| ``"bridge"`` \| ``"addLiquidity"`` \| ``"farm"`` \| ``"trade"`` \| ``"claim"``

## Functions

### generateSignature

▸ **generateSignature**(`wallet`, `client_app`, `client_name`): `Promise`<{ `message`: `string` ; `nonce`: `string` ; `signature`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `Signer` |
| `client_app` | `string` |
| `client_name` | `string` |

#### Returns

`Promise`<{ `message`: `string` ; `nonce`: `string` ; `signature`: `string`  }\>
