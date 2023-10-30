[# Masa React
 - v3.4.6](../README.md) / [Exports](../modules.md) / FullContractWithTokens

# Interface: FullContractWithTokens

## Hierarchy

- [`FullContract`](FullContract.md)

  ↳ **`FullContractWithTokens`**

## Table of contents

### Properties

- [address](FullContractWithTokens.md#address)
- [burn](FullContractWithTokens.md#burn)
- [contract](FullContractWithTokens.md#contract)
- [getMetadata](FullContractWithTokens.md#getmetadata)
- [links](FullContractWithTokens.md#links)
- [list](FullContractWithTokens.md#list)
- [loadSBTIDs](FullContractWithTokens.md#loadsbtids)
- [loadSBTs](FullContractWithTokens.md#loadsbts)
- [masa](FullContractWithTokens.md#masa)
- [name](FullContractWithTokens.md#name)
- [network](FullContractWithTokens.md#network)
- [tokens](FullContractWithTokens.md#tokens)

## Properties

### address

• **address**: `string`

#### Inherited from

[FullContract](FullContract.md).[address](FullContract.md#address)

___

### burn

• **burn**: (`SBTId`: `BigNumber`) => `Promise`<`boolean`\>

#### Type declaration

▸ (`SBTId`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `SBTId` | `BigNumber` |

##### Returns

`Promise`<`boolean`\>

#### Inherited from

[FullContract](FullContract.md).[burn](FullContract.md#burn)

___

### contract

• `Readonly` **contract**: `MasaSBT`

#### Inherited from

[FullContract](FullContract.md).[contract](FullContract.md#contract)

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

#### Inherited from

[FullContract](FullContract.md).[getMetadata](FullContract.md#getmetadata)

___

### links

• `Readonly` **links**: `MasaSoulLinker`

#### Inherited from

[FullContract](FullContract.md).[links](FullContract.md#links)

___

### list

• **list**: (`address?`: `string`) => `Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Type declaration

▸ (`address?`): `Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `string` |

##### Returns

`Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Inherited from

[FullContract](FullContract.md).[list](FullContract.md#list)

___

### loadSBTIDs

• `Protected` **loadSBTIDs**: (`sbtIDs`: `BigNumber`[]) => `Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Type declaration

▸ (`sbtIDs`): `Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `sbtIDs` | `BigNumber`[] |

##### Returns

`Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Inherited from

[FullContract](FullContract.md).[loadSBTIDs](FullContract.md#loadsbtids)

___

### loadSBTs

• `Protected` **loadSBTs**: (`identityIdOrAddress`: `string` \| `BigNumber`) => `Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Type declaration

▸ (`identityIdOrAddress`): `Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `identityIdOrAddress` | `string` \| `BigNumber` |

##### Returns

`Promise`<{ `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Inherited from

[FullContract](FullContract.md).[loadSBTs](FullContract.md#loadsbts)

___

### masa

• `Protected` `Readonly` **masa**: `MasaInterface`

#### Inherited from

[FullContract](FullContract.md).[masa](FullContract.md#masa)

___

### name

• **name**: `string`

#### Inherited from

[FullContract](FullContract.md).[name](FullContract.md#name)

___

### network

• **network**: `NetworkName`

#### Inherited from

[FullContract](FullContract.md).[network](FullContract.md#network)

___

### tokens

• **tokens**: [`Token`](Token.md)[]
