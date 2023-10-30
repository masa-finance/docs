[# Masa React
 - v3.4.6](../README.md) / [Exports](../modules.md) / CustomGallerySBT

# Interface: CustomGallerySBT

## Hierarchy

- **`CustomGallerySBT`**

  ↳ [`FullContract`](FullContract.md)

## Table of contents

### Properties

- [address](CustomGallerySBT.md#address)
- [getMetadata](CustomGallerySBT.md#getmetadata)
- [name](CustomGallerySBT.md#name)
- [network](CustomGallerySBT.md#network)

## Properties

### address

• **address**: `string`

___

### getMetadata

• **getMetadata**: (`item`: { `tokenId`: `any` ; `tokenUri`: `any`  }) => `Promise`<{ `description`: `string` ; `image`: `string` ; `name`: `string`  }\>

#### Type declaration

▸ (`item`): `Promise`<{ `description`: `string` ; `image`: `string` ; `name`: `string`  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `Object` |
| `item.tokenId` | `any` |
| `item.tokenUri` | `any` |

##### Returns

`Promise`<{ `description`: `string` ; `image`: `string` ; `name`: `string`  }\>

___

### name

• **name**: `string`

___

### network

• **network**: `NetworkName`
