[# Masa React
 - v3.7.0](../README.md) / [Exports](../modules.md) / FullContract

# Interface: FullContract

## Hierarchy

- [`CustomGallerySBT`](CustomGallerySBT.md)

- `MasaSBTWrapper`\<`MasaSBT`\>

  ↳ **`FullContract`**

  ↳↳ [`FullContractWithTokens`](FullContractWithTokens.md)

  ↳↳ [`HydratedContract`](HydratedContract.md)

## Table of contents

### Properties

- [address](FullContract.md#address)
- [burn](FullContract.md#burn)
- [contract](FullContract.md#contract)
- [getMetadata](FullContract.md#getmetadata)
- [links](FullContract.md#links)
- [list](FullContract.md#list)
- [loadSBTIDs](FullContract.md#loadsbtids)
- [loadSBTs](FullContract.md#loadsbts)
- [masa](FullContract.md#masa)
- [name](FullContract.md#name)
- [network](FullContract.md#network)

## Properties

### address

• **address**: `string`

#### Inherited from

[CustomGallerySBT](CustomGallerySBT.md).[address](CustomGallerySBT.md#address)

___

### burn

• **burn**: (`SBTId`: `BigNumber`) => `Promise`\<`BaseResult`\>

#### Type declaration

▸ (`SBTId`): `Promise`\<`BaseResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `SBTId` | `BigNumber` |

##### Returns

`Promise`\<`BaseResult`\>

#### Inherited from

MasaSBTWrapper.burn

___

### contract

• `Readonly` **contract**: `MasaSBT`

#### Inherited from

MasaSBTWrapper.contract

___

### getMetadata

• **getMetadata**: (`item`: \{ `tokenId`: `any` ; `tokenUri`: `any`  }) => `Promise`\<\{ `description`: `string` ; `image`: `string` ; `name`: `string`  }\>

#### Type declaration

▸ (`item`): `Promise`\<\{ `description`: `string` ; `image`: `string` ; `name`: `string`  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `Object` |
| `item.tokenId` | `any` |
| `item.tokenUri` | `any` |

##### Returns

`Promise`\<\{ `description`: `string` ; `image`: `string` ; `name`: `string`  }\>

#### Inherited from

[CustomGallerySBT](CustomGallerySBT.md).[getMetadata](CustomGallerySBT.md#getmetadata)

___

### links

• `Readonly` **links**: `MasaSoulLinker`

#### Inherited from

MasaSBTWrapper.links

___

### list

• **list**: (`address?`: `string`) => `Promise`\<\{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Type declaration

▸ (`address?`): `Promise`\<\{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `string` |

##### Returns

`Promise`\<\{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Inherited from

MasaSBTWrapper.list

___

### loadSBTIDs

• `Protected` **loadSBTIDs**: (`sbtIDs`: `BigNumber`[]) => `Promise`\<\{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Type declaration

▸ (`sbtIDs`): `Promise`\<\{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `sbtIDs` | `BigNumber`[] |

##### Returns

`Promise`\<\{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Inherited from

MasaSBTWrapper.loadSBTIDs

___

### loadSBTs

• `Protected` **loadSBTs**: (`identityIdOrAddress`: `string` \| `BigNumber`) => `Promise`\<\{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Type declaration

▸ (`identityIdOrAddress`): `Promise`\<\{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `identityIdOrAddress` | `string` \| `BigNumber` |

##### Returns

`Promise`\<\{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Inherited from

MasaSBTWrapper.loadSBTs

___

### masa

• `Protected` `Readonly` **masa**: `MasaInterface`

#### Inherited from

MasaSBTWrapper.masa

___

### name

• **name**: `string`

#### Inherited from

[CustomGallerySBT](CustomGallerySBT.md).[name](CustomGallerySBT.md#name)

___

### network

• **network**: `NetworkName`

#### Inherited from

[CustomGallerySBT](CustomGallerySBT.md).[network](CustomGallerySBT.md#network)
