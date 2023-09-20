[# Masa Analytics SDK
 - v0.0.8](README.md) / Exports

# # Masa Analytics SDK
 - v0.0.8

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

- [analyticsClient](modules.md#analyticsclient)
- [generateSignature](modules.md#generatesignature)
- [logEvent](modules.md#logevent)

## Type Aliases

### EventType

Ƭ **EventType**: ``"pageView"`` \| ``"login"`` \| ``"mint"`` \| ``"connectWallet"`` \| ``"swap"`` \| ``"bridge"`` \| ``"addLiquidity"`` \| ``"farm"`` \| ``"trade"`` \| ``"claim"``

## Functions

### analyticsClient

▸ **analyticsClient**<`T`, `R`, `D`\>(`config`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | `AxiosResponse`<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `AxiosRequestConfig`<`D`\> |

#### Returns

`Promise`<`R`\>

▸ **analyticsClient**<`T`, `R`, `D`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | `AxiosResponse`<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | `AxiosRequestConfig`<`D`\> |

#### Returns

`Promise`<`R`\>

___

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

___

### logEvent

▸ **logEvent**(`«destructured»`): `Promise`<`undefined` \| [`Event`](interfaces/Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `client_id?` | `string` |
| › `endpoint` | `string` |
| › `event_data` | [`BaseEventData`](interfaces/BaseEventData.md) |
| › `type` | [`EventType`](modules.md#eventtype) |
| › `user_address?` | `string` |

#### Returns

`Promise`<`undefined` \| [`Event`](interfaces/Event.md)\>
