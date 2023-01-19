[# Masa SDK
 - v1.1.0](README.md) / Exports

# # Masa SDK
 - v1.1.0

## Table of contents

### Classes

- [Masa](classes/Masa.md)
- [Masa2FA](classes/Masa2FA.md)
- [MasaAccount](classes/MasaAccount.md)
- [MasaArweave](classes/MasaArweave.md)
- [MasaClient](classes/MasaClient.md)
- [MasaContracts](classes/MasaContracts.md)
- [MasaCreditScore](classes/MasaCreditScore.md)
- [MasaIdentity](classes/MasaIdentity.md)
- [MasaSession](classes/MasaSession.md)
- [MasaSoulLinker](classes/MasaSoulLinker.md)
- [MasaSoulName](classes/MasaSoulName.md)

### Interfaces

- [Addresses](interfaces/Addresses.md)
- [Attribute](interfaces/Attribute.md)
- [BaseResult](interfaces/BaseResult.md)
- [Create2FAResult](interfaces/Create2FAResult.md)
- [CreateSoulNameResult](interfaces/CreateSoulNameResult.md)
- [I2FA](interfaces/I2FA.md)
- [ICreditScore](interfaces/ICreditScore.md)
- [IIdentity](interfaces/IIdentity.md)
- [IIdentityContracts](interfaces/IIdentityContracts.md)
- [IPassport](interfaces/IPassport.md)
- [ISession](interfaces/ISession.md)
- [ISoulName](interfaces/ISoulName.md)
- [LoadContractArgs](interfaces/LoadContractArgs.md)
- [MasaArgs](interfaces/MasaArgs.md)
- [MasaConfig](interfaces/MasaConfig.md)
- [SoulNameDetails](interfaces/SoulNameDetails.md)

### Type Aliases

- [CreateCreditScoreResult](modules.md#createcreditscoreresult)
- [CreateLinkResult](modules.md#createlinkresult)
- [Environment](modules.md#environment)
- [EnvironmentName](modules.md#environmentname)
- [EstablishLinkResult](modules.md#establishlinkresult)
- [Link](modules.md#link)
- [ListLinksResult](modules.md#listlinksresult)
- [PaymentMethod](modules.md#paymentmethod)
- [VerifyLinkResult](modules.md#verifylinkresult)

### Variables

- [ErrorMessage](modules.md#errormessage)
- [Templates](modules.md#templates)
- [addresses](modules.md#addresses)
- [environments](modules.md#environments)

### Functions

- [arweave](modules.md#arweave)
- [burn2FA](modules.md#burn2fa)
- [burn2FAById](modules.md#burn2fabyid)
- [burnCreditScore](modules.md#burncreditscore)
- [burnCreditScoreById](modules.md#burncreditscorebyid)
- [burnIdentity](modules.md#burnidentity)
- [burnIdentityById](modules.md#burnidentitybyid)
- [burnSoulName](modules.md#burnsoulname)
- [burnSoulNameByName](modules.md#burnsoulnamebyname)
- [calculateSoulNameLength](modules.md#calculatesoulnamelength)
- [checkAllowlist](modules.md#checkallowlist)
- [checkLogin](modules.md#checklogin)
- [create2FA](modules.md#create2fa)
- [createCreditScore](modules.md#createcreditscore)
- [createIdentity](modules.md#createidentity)
- [createIdentityWithSoulName](modules.md#createidentitywithsoulname)
- [createLink](modules.md#createlink)
- [createRandomWallet](modules.md#createrandomwallet)
- [createSoulName](modules.md#createsoulname)
- [establishLink](modules.md#establishlink)
- [establishLinkFromPassport](modules.md#establishlinkfrompassport)
- [generateSignatureDomain](modules.md#generatesignaturedomain)
- [getBalances](modules.md#getbalances)
- [getRegistrationPrice](modules.md#getregistrationprice)
- [getSession](modules.md#getsession)
- [list2FAs](modules.md#list2fas)
- [listCreditScores](modules.md#listcreditscores)
- [listLinks](modules.md#listlinks)
- [listSoulNames](modules.md#listsoulnames)
- [load2FAsByIdentityId](modules.md#load2fasbyidentityid)
- [loadAddressFromIdentityId](modules.md#loadaddressfromidentityid)
- [loadCreditScoreByTokenId](modules.md#loadcreditscorebytokenid)
- [loadCreditScoresByIdentityId](modules.md#loadcreditscoresbyidentityid)
- [loadIdentityByAddress](modules.md#loadidentitybyaddress)
- [loadIdentityContracts](modules.md#loadidentitycontracts)
- [loadIdentityDetails](modules.md#loadidentitydetails)
- [loadLinks](modules.md#loadlinks)
- [loadSoulNameByName](modules.md#loadsoulnamebyname)
- [loadSoulNameByTokenId](modules.md#loadsoulnamebytokenid)
- [loadSoulNamesByAddress](modules.md#loadsoulnamesbyaddress)
- [loadSoulNamesByIdentityId](modules.md#loadsoulnamesbyidentityid)
- [loadSoulNamesByName](modules.md#loadsoulnamesbyname)
- [login](modules.md#login)
- [logout](modules.md#logout)
- [patchMetadataUrl](modules.md#patchmetadataurl)
- [printSoulName](modules.md#printsoulname)
- [purchaseIdentity](modules.md#purchaseidentity)
- [purchaseIdentityWithSoulName](modules.md#purchaseidentitywithsoulname)
- [recoverAddress](modules.md#recoveraddress)
- [sendSoulName](modules.md#sendsoulname)
- [sendSoulNameByName](modules.md#sendsoulnamebyname)
- [showIdentity](modules.md#showidentity)
- [signMessage](modules.md#signmessage)
- [signSoulLinkerLink](modules.md#signsoullinkerlink)
- [signTypedData](modules.md#signtypeddata)
- [unpackSessionId](modules.md#unpacksessionid)
- [validateSoulName](modules.md#validatesoulname)
- [verifyLink](modules.md#verifylink)
- [version](modules.md#version)

## Type Aliases

### CreateCreditScoreResult

Ƭ **CreateCreditScoreResult**: [`BaseResult`](interfaces/BaseResult.md)

___

### CreateLinkResult

Ƭ **CreateLinkResult**: [`BaseResult`](interfaces/BaseResult.md) & { `passport?`: `string`  }

___

### Environment

Ƭ **Environment**: { `name`: ``"local"`` \| ``"dev"`` \| ``"test"`` \| ``"stage"`` \| ``"production"`` ; `wallet?`: `ethers.Signer` \| `ethers.Wallet`  } & [`MasaArgs`](interfaces/MasaArgs.md)

___

### EnvironmentName

Ƭ **EnvironmentName**: ``"dev"`` \| ``"test"`` \| ``"beta"`` \| ``"production"``

___

### EstablishLinkResult

Ƭ **EstablishLinkResult**: [`BaseResult`](interfaces/BaseResult.md)

___

### Link

Ƭ **Link**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `exists` | `boolean` |
| `expirationDate` | `BigNumber` |
| `isRevoked` | `boolean` |
| `ownerIdentityId` | `BigNumber` |
| `readerIdentityId` | `BigNumber` |
| `signatureDate` | `BigNumber` |

___

### ListLinksResult

Ƭ **ListLinksResult**: [`BaseResult`](interfaces/BaseResult.md) & { `links`: [`Link`](modules.md#link)[]  }

___

### PaymentMethod

Ƭ **PaymentMethod**: ``"eth"`` \| ``"weth"`` \| ``"stable"`` \| ``"utility"``

___

### VerifyLinkResult

Ƭ **VerifyLinkResult**: [`BaseResult`](interfaces/BaseResult.md) & { `verified?`: `boolean`  }

## Variables

### ErrorMessage

• `Const` **ErrorMessage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `NoIdentity` | (`address?`: `string`) => `string` |

___

### Templates

• `Const` **Templates**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `loginTemplate` | (`challenge`: `string`, `expires`: `string`) => `string` |
| `twoFATemplate` | (`identityId`: `string`, `phoneNumber`: `string`, `code`: `string`) => `string` |

___

### addresses

• `Const` **addresses**: [`Addresses`](interfaces/Addresses.md)

___

### environments

• `Const` **environments**: [`Environment`](modules.md#environment)[]

## Functions

### arweave

▸ **arweave**(`«destructured»`): [`MasaArweave`](classes/MasaArweave.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `host` | `string` |
| › `logging?` | `boolean` |
| › `port` | `number` |
| › `protocol` | `string` |

#### Returns

[`MasaArweave`](classes/MasaArweave.md)

___

### burn2FA

▸ **burn2FA**(`masa`, `twoFAId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `twoFAId` | `number` |

#### Returns

`Promise`<`boolean`\>

___

### burn2FAById

▸ **burn2FAById**(`masa`, `twoFAId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `twoFAId` | `number` |

#### Returns

`Promise`<`boolean`\>

___

### burnCreditScore

▸ **burnCreditScore**(`masa`, `creditScoreId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `creditScoreId` | `BigNumber` |

#### Returns

`Promise`<`boolean`\>

___

### burnCreditScoreById

▸ **burnCreditScoreById**(`masa`, `creditScoreId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `creditScoreId` | `BigNumber` |

#### Returns

`Promise`<`boolean`\>

___

### burnIdentity

▸ **burnIdentity**(`masa`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |

#### Returns

`Promise`<`boolean`\>

___

### burnIdentityById

▸ **burnIdentityById**(`masa`, `identityId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `identityId` | `BigNumber` |

#### Returns

`Promise`<`boolean`\>

___

### burnSoulName

▸ **burnSoulName**(`masa`, `soulName`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `soulName` | `string` |

#### Returns

`Promise`<`void`\>

___

### burnSoulNameByName

▸ **burnSoulNameByName**(`masa`, `soulName`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `soulName` | `string` |

#### Returns

`Promise`<`void`\>

___

### calculateSoulNameLength

▸ **calculateSoulNameLength**(`soulName`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `soulName` | `string` |

#### Returns

`number`

___

### checkAllowlist

▸ **checkAllowlist**(`masa`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |

#### Returns

`Promise`<`any`\>

___

### checkLogin

▸ **checkLogin**(`masa`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |

#### Returns

`Promise`<`boolean`\>

___

### create2FA

▸ **create2FA**(`masa`, `phoneNumber`, `code`): `Promise`<[`Create2FAResult`](interfaces/Create2FAResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `phoneNumber` | `string` |
| `code` | `string` |

#### Returns

`Promise`<[`Create2FAResult`](interfaces/Create2FAResult.md)\>

___

### createCreditScore

▸ **createCreditScore**(`masa`, `paymentMethod?`): `Promise`<`undefined` \| [`BaseResult`](interfaces/BaseResult.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) | `undefined` |
| `paymentMethod` | [`PaymentMethod`](modules.md#paymentmethod) | `"eth"` |

#### Returns

`Promise`<`undefined` \| [`BaseResult`](interfaces/BaseResult.md)\>

___

### createIdentity

▸ **createIdentity**(`masa`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |

#### Returns

`Promise`<`boolean`\>

___

### createIdentityWithSoulName

▸ **createIdentityWithSoulName**(`masa`, `soulName`, `duration`, `paymentMethod`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `soulName` | `string` |
| `duration` | `number` |
| `paymentMethod` | [`PaymentMethod`](modules.md#paymentmethod) |

#### Returns

`Promise`<`boolean`\>

___

### createLink

▸ **createLink**(`masa`, `contract`, `tokenId`, `readerIdentityId`): `Promise`<[`CreateLinkResult`](modules.md#createlinkresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `contract` | `Contract` |
| `tokenId` | `BigNumber` |
| `readerIdentityId` | `BigNumber` |

#### Returns

`Promise`<[`CreateLinkResult`](modules.md#createlinkresult)\>

___

### createRandomWallet

▸ **createRandomWallet**(): `Wallet`

#### Returns

`Wallet`

___

### createSoulName

▸ **createSoulName**(`masa`, `soulName`, `duration`, `paymentMethod`): `Promise`<[`CreateSoulNameResult`](interfaces/CreateSoulNameResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `soulName` | `string` |
| `duration` | `number` |
| `paymentMethod` | [`PaymentMethod`](modules.md#paymentmethod) |

#### Returns

`Promise`<[`CreateSoulNameResult`](interfaces/CreateSoulNameResult.md)\>

___

### establishLink

▸ **establishLink**(`masa`, `contract`, `paymentMethod`, `tokenId`, `readerIdentityId`, `signature`, `signatureDate`, `expirationDate`): `Promise`<[`BaseResult`](interfaces/BaseResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `contract` | `Contract` |
| `paymentMethod` | [`PaymentMethod`](modules.md#paymentmethod) |
| `tokenId` | `BigNumber` |
| `readerIdentityId` | `BigNumber` |
| `signature` | `string` |
| `signatureDate` | `number` |
| `expirationDate` | `number` |

#### Returns

`Promise`<[`BaseResult`](interfaces/BaseResult.md)\>

___

### establishLinkFromPassport

▸ **establishLinkFromPassport**(`masa`, `contract`, `passport`, `paymentMethod`): `Promise`<[`BaseResult`](interfaces/BaseResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `contract` | `Contract` |
| `passport` | `string` |
| `paymentMethod` | [`PaymentMethod`](modules.md#paymentmethod) |

#### Returns

`Promise`<[`BaseResult`](interfaces/BaseResult.md)\>

___

### generateSignatureDomain

▸ **generateSignatureDomain**(`wallet`, `name`, `verifyingContract`): `Promise`<{ `chainId`: `number` ; `name`: `string` ; `verifyingContract`: `string` ; `version`: `string` = "1.0.0" }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `Wallet` |
| `name` | `string` |
| `verifyingContract` | `string` |

#### Returns

`Promise`<{ `chainId`: `number` ; `name`: `string` ; `verifyingContract`: `string` ; `version`: `string` = "1.0.0" }\>

___

### getBalances

▸ **getBalances**(`masa`, `address?`): `Promise`<`undefined` \| { `ethBalance`: `BigNumber` ; `identityBalance`: `BigNumber` ; `masaBalance`: `BigNumber` ; `soulNameBalance`: `BigNumber` ; `soulbound2FABalance`: `BigNumber` ; `soulboundCreditScoreBalance`: `BigNumber` ; `usdcBalance`: `BigNumber` ; `wethBalance`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `address?` | `string` |

#### Returns

`Promise`<`undefined` \| { `ethBalance`: `BigNumber` ; `identityBalance`: `BigNumber` ; `masaBalance`: `BigNumber` ; `soulNameBalance`: `BigNumber` ; `soulbound2FABalance`: `BigNumber` ; `soulboundCreditScoreBalance`: `BigNumber` ; `usdcBalance`: `BigNumber` ; `wethBalance`: `BigNumber`  }\>

___

### getRegistrationPrice

▸ **getRegistrationPrice**(`masa`, `soulName`, `duration`, `paymentMethod`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `soulName` | `string` |
| `duration` | `number` |
| `paymentMethod` | [`PaymentMethod`](modules.md#paymentmethod) |

#### Returns

`Promise`<`BigNumber`\>

___

### getSession

▸ **getSession**(`masa`): `Promise`<`undefined` \| [`ISession`](interfaces/ISession.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |

#### Returns

`Promise`<`undefined` \| [`ISession`](interfaces/ISession.md)\>

___

### list2FAs

▸ **list2FAs**(`masa`, `address?`): `Promise`<{ `metadata?`: [`I2FA`](interfaces/I2FA.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `address?` | `string` |

#### Returns

`Promise`<{ `metadata?`: [`I2FA`](interfaces/I2FA.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

___

### listCreditScores

▸ **listCreditScores**(`masa`, `address?`): `Promise`<{ `metadata?`: [`ICreditScore`](interfaces/ICreditScore.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `address?` | `string` |

#### Returns

`Promise`<{ `metadata?`: [`ICreditScore`](interfaces/ICreditScore.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

___

### listLinks

▸ **listLinks**(`masa`, `contract`, `tokenId`): `Promise`<[`ListLinksResult`](modules.md#listlinksresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `contract` | `Contract` |
| `tokenId` | `BigNumber` |

#### Returns

`Promise`<[`ListLinksResult`](modules.md#listlinksresult)\>

___

### listSoulNames

▸ **listSoulNames**(`masa`, `address?`): `Promise`<[`SoulNameDetails`](interfaces/SoulNameDetails.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `address?` | `string` |

#### Returns

`Promise`<[`SoulNameDetails`](interfaces/SoulNameDetails.md)[]\>

___

### load2FAsByIdentityId

▸ **load2FAsByIdentityId**(`masa`, `identityId`): `Promise`<{ `metadata?`: [`I2FA`](interfaces/I2FA.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `identityId` | `BigNumber` |

#### Returns

`Promise`<{ `metadata?`: [`I2FA`](interfaces/I2FA.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

___

### loadAddressFromIdentityId

▸ **loadAddressFromIdentityId**(`masa`, `identityId`): `Promise`<`undefined` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `identityId` | `BigNumber` |

#### Returns

`Promise`<`undefined` \| `string`\>

___

### loadCreditScoreByTokenId

▸ **loadCreditScoreByTokenId**(`masa`, `creditScoreId`): `Promise`<{ `metadata?`: [`ICreditScore`](interfaces/ICreditScore.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `creditScoreId` | `BigNumber` |

#### Returns

`Promise`<{ `metadata?`: [`ICreditScore`](interfaces/ICreditScore.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }\>

___

### loadCreditScoresByIdentityId

▸ **loadCreditScoresByIdentityId**(`masa`, `identityId`): `Promise`<{ `metadata?`: [`ICreditScore`](interfaces/ICreditScore.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `identityId` | `BigNumber` |

#### Returns

`Promise`<{ `metadata?`: [`ICreditScore`](interfaces/ICreditScore.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

___

### loadIdentityByAddress

▸ **loadIdentityByAddress**(`masa`, `address?`): `Promise`<{ `address?`: `string` ; `identityId?`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `address?` | `string` |

#### Returns

`Promise`<{ `address?`: `string` ; `identityId?`: `BigNumber`  }\>

___

### loadIdentityContracts

▸ **loadIdentityContracts**(`«destructured»`): [`IIdentityContracts`](interfaces/IIdentityContracts.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`LoadContractArgs`](interfaces/LoadContractArgs.md) |

#### Returns

[`IIdentityContracts`](interfaces/IIdentityContracts.md)

___

### loadIdentityDetails

▸ **loadIdentityDetails**(`masa`, `identityId`): `Promise`<{ `metadata?`: [`IIdentity`](interfaces/IIdentity.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `identityId` | `BigNumber` |

#### Returns

`Promise`<{ `metadata?`: [`IIdentity`](interfaces/IIdentity.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }\>

___

### loadLinks

▸ **loadLinks**(`masa`, `contract`, `tokenId`): `Promise`<[`Link`](modules.md#link)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `contract` | `Contract` |
| `tokenId` | `BigNumber` |

#### Returns

`Promise`<[`Link`](modules.md#link)[]\>

___

### loadSoulNameByName

▸ **loadSoulNameByName**(`masa`, `soulName`): `Promise`<`undefined` \| [`SoulNameDetails`](interfaces/SoulNameDetails.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `soulName` | `string` |

#### Returns

`Promise`<`undefined` \| [`SoulNameDetails`](interfaces/SoulNameDetails.md)\>

___

### loadSoulNameByTokenId

▸ **loadSoulNameByTokenId**(`masa`, `tokenId`): `Promise`<`undefined` \| [`SoulNameDetails`](interfaces/SoulNameDetails.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `tokenId` | `string` \| `BigNumber` |

#### Returns

`Promise`<`undefined` \| [`SoulNameDetails`](interfaces/SoulNameDetails.md)\>

___

### loadSoulNamesByAddress

▸ **loadSoulNamesByAddress**(`masa`, `address`): `Promise`<[`SoulNameDetails`](interfaces/SoulNameDetails.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `address` | `string` |

#### Returns

`Promise`<[`SoulNameDetails`](interfaces/SoulNameDetails.md)[]\>

___

### loadSoulNamesByIdentityId

▸ **loadSoulNamesByIdentityId**(`masa`, `identityId`): `Promise`<[`SoulNameDetails`](interfaces/SoulNameDetails.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `identityId` | `BigNumber` |

#### Returns

`Promise`<[`SoulNameDetails`](interfaces/SoulNameDetails.md)[]\>

___

### loadSoulNamesByName

▸ **loadSoulNamesByName**(`masa`, `soulNames`): `Promise`<[`SoulNameDetails`](interfaces/SoulNameDetails.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `soulNames` | `string`[] |

#### Returns

`Promise`<[`SoulNameDetails`](interfaces/SoulNameDetails.md)[]\>

___

### login

▸ **login**(`masa`): `Promise`<`undefined` \| { `address`: `string` ; `cookie?`: `string` ; `userId`: `string` \| `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |

#### Returns

`Promise`<`undefined` \| { `address`: `string` ; `cookie?`: `string` ; `userId`: `string` \| `BigNumber`  }\>

___

### logout

▸ **logout**(`masa`): `Promise`<`undefined` \| { `status`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |

#### Returns

`Promise`<`undefined` \| { `status`: `string`  }\>

___

### patchMetadataUrl

▸ **patchMetadataUrl**(`masa`, `tokeUri`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `tokeUri` | `string` |

#### Returns

`string`

___

### printSoulName

▸ **printSoulName**(`soulName`, `index?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `soulName` | [`SoulNameDetails`](interfaces/SoulNameDetails.md) |
| `index?` | `number` |

#### Returns

`void`

___

### purchaseIdentity

▸ **purchaseIdentity**(`masa`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |

#### Returns

`Promise`<`void`\>

___

### purchaseIdentityWithSoulName

▸ **purchaseIdentityWithSoulName**(`masa`, `soulName`, `soulNameLength`, `duration`, `paymentMethod`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `soulName` | `string` |
| `soulNameLength` | `number` |
| `duration` | `number` |
| `paymentMethod` | [`PaymentMethod`](modules.md#paymentmethod) |

#### Returns

`Promise`<`void`\>

___

### recoverAddress

▸ **recoverAddress**(`msg`, `signature`, `doHash?`): `undefined` \| `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `msg` | `string` | `undefined` |
| `signature` | `string` | `undefined` |
| `doHash` | `boolean` | `false` |

#### Returns

`undefined` \| `string`

___

### sendSoulName

▸ **sendSoulName**(`masa`, `soulName`, `receiver`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `soulName` | `string` |
| `receiver` | `string` |

#### Returns

`Promise`<`void`\>

___

### sendSoulNameByName

▸ **sendSoulNameByName**(`masa`, `soulName`, `receiver`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `soulName` | `string` |
| `receiver` | `string` |

#### Returns

`Promise`<`void`\>

___

### showIdentity

▸ **showIdentity**(`masa`, `address?`): `Promise`<`undefined` \| { `metadata?`: [`IIdentity`](interfaces/IIdentity.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `address?` | `string` |

#### Returns

`Promise`<`undefined` \| { `metadata?`: [`IIdentity`](interfaces/IIdentity.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }\>

___

### signMessage

▸ **signMessage**(`msg`, `wallet`, `doHash?`): `Promise`<`undefined` \| `string`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `msg` | `string` | `undefined` |
| `wallet` | `Signer` \| `Wallet` | `undefined` |
| `doHash` | `boolean` | `false` |

#### Returns

`Promise`<`undefined` \| `string`\>

___

### signSoulLinkerLink

▸ **signSoulLinkerLink**(`masa`, `readerIdentityId`, `ownerIdentityId`, `tokenAddress`, `tokenId`, `signatureDate?`, `expirationOffset?`): `Promise`<{ `expirationDate`: `number` ; `signature`: `string` ; `signatureDate`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `readerIdentityId` | `BigNumber` |
| `ownerIdentityId` | `BigNumber` |
| `tokenAddress` | `string` |
| `tokenId` | `BigNumber` |
| `signatureDate` | `number` |
| `expirationOffset` | `number` |

#### Returns

`Promise`<{ `expirationDate`: `number` ; `signature`: `string` ; `signatureDate`: `number`  }\>

___

### signTypedData

▸ **signTypedData**(`contract`, `wallet`, `name`, `types`, `value`): `Promise`<{ `domain`: { `chainId`: `number` ; `name`: `string` ; `verifyingContract`: `string` ; `version`: `string` = "1.0.0" } ; `signature`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `Contract` |
| `wallet` | `Wallet` |
| `name` | `string` |
| `types` | `Record`<`string`, `TypedDataField`[]\> |
| `value` | `Record`<`string`, `any`\> |

#### Returns

`Promise`<{ `domain`: { `chainId`: `number` ; `name`: `string` ; `verifyingContract`: `string` ; `version`: `string` = "1.0.0" } ; `signature`: `string`  }\>

___

### unpackSessionId

▸ **unpackSessionId**(`cookie?`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cookie?` | `string` |

#### Returns

`undefined` \| `string`

___

### validateSoulName

▸ **validateSoulName**(`masa`, `soulName`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `soulName` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `isValid` | `boolean` |
| `length` | `number` |
| `message?` | `string` |

___

### verifyLink

▸ **verifyLink**(`masa`, `contract`, `tokenId`, `readerIdentityId?`): `Promise`<[`VerifyLinkResult`](modules.md#verifylinkresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `contract` | `Contract` |
| `tokenId` | `BigNumber` |
| `readerIdentityId?` | `BigNumber` |

#### Returns

`Promise`<[`VerifyLinkResult`](modules.md#verifylinkresult)\>

___

### version

▸ **version**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `contractsVersion` | `string` |
| `sdkVersion` | `string` |
