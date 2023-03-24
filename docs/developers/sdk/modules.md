[# Masa SDK
 - v1.11.0](README.md) / Exports

# # Masa SDK
 - v1.11.0

## Table of contents

### Enumerations

- [SoulNameErrorCodes](enums/SoulNameErrorCodes.md)

### Classes

- [ContractFactory](classes/ContractFactory.md)
- [ERC20\_\_factory](classes/ERC20__factory.md)
- [Masa](classes/Masa.md)
- [MasaAccount](classes/MasaAccount.md)
- [MasaArweave](classes/MasaArweave.md)
- [MasaClient](classes/MasaClient.md)
- [MasaContracts](classes/MasaContracts.md)
- [MasaCreditScore](classes/MasaCreditScore.md)
- [MasaGreen](classes/MasaGreen.md)
- [MasaIdentity](classes/MasaIdentity.md)
- [MasaSBT](classes/MasaSBT.md)
- [MasaSession](classes/MasaSession.md)
- [MasaSoulLinker](classes/MasaSoulLinker.md)
- [MasaSoulName](classes/MasaSoulName.md)

### Interfaces

- [Addresses](interfaces/Addresses.md)
- [ApprovalEventObject](interfaces/ApprovalEventObject.md)
- [Attribute](interfaces/Attribute.md)
- [BaseResult](interfaces/BaseResult.md)
- [CreateSoulNameResult](interfaces/CreateSoulNameResult.md)
- [ERC20](interfaces/ERC20.md)
- [ERC20Interface](interfaces/ERC20Interface.md)
- [GenerateCreditScoreResult](interfaces/GenerateCreditScoreResult.md)
- [GenerateGreenResult](interfaces/GenerateGreenResult.md)
- [GetChallengeResult](interfaces/GetChallengeResult.md)
- [ICreditScore](interfaces/ICreditScore.md)
- [IGreen](interfaces/IGreen.md)
- [IIdentity](interfaces/IIdentity.md)
- [IIdentityContracts](interfaces/IIdentityContracts.md)
- [IPassport](interfaces/IPassport.md)
- [ISession](interfaces/ISession.md)
- [ISoulName](interfaces/ISoulName.md)
- [LoadContractArgs](interfaces/LoadContractArgs.md)
- [LogoutResult](interfaces/LogoutResult.md)
- [MasaArgs](interfaces/MasaArgs.md)
- [MasaConfig](interfaces/MasaConfig.md)
- [Network](interfaces/Network.md)
- [SessionUser](interfaces/SessionUser.md)
- [SoulNameDetails](interfaces/SoulNameDetails.md)
- [SoulNameMetadataStoreResult](interfaces/SoulNameMetadataStoreResult.md)
- [SoulNameResultBase](interfaces/SoulNameResultBase.md)
- [TransferEventObject](interfaces/TransferEventObject.md)
- [UpdateCreditScoreResult](interfaces/UpdateCreditScoreResult.md)
- [User](interfaces/User.md)
- [VerifyGreenResult](interfaces/VerifyGreenResult.md)

### Type Aliases

- [ApprovalEvent](modules.md#approvalevent)
- [ApprovalEventFilter](modules.md#approvaleventfilter)
- [Balances](modules.md#balances)
- [BreakLinkResult](modules.md#breaklinkresult)
- [CreateLinkResult](modules.md#createlinkresult)
- [ERC20Currencies](modules.md#erc20currencies)
- [Environment](modules.md#environment)
- [EnvironmentName](modules.md#environmentname)
- [EstablishLinkResult](modules.md#establishlinkresult)
- [Link](modules.md#link)
- [ListLinksResult](modules.md#listlinksresult)
- [NativeCurrencies](modules.md#nativecurrencies)
- [NetworkName](modules.md#networkname)
- [PaymentMethod](modules.md#paymentmethod)
- [QueryLinkResult](modules.md#querylinkresult)
- [Tokens](modules.md#tokens)
- [TransferEvent](modules.md#transferevent)
- [TransferEventFilter](modules.md#transfereventfilter)
- [VerifyLinkResult](modules.md#verifylinkresult)

### Variables

- [Messages](modules.md#messages)
- [SupportedNetworks](modules.md#supportednetworks)
- [Templates](modules.md#templates)
- [addresses](modules.md#addresses)
- [environments](modules.md#environments)

### Functions

- [breakLink](modules.md#breaklink)
- [burnCreditScore](modules.md#burncreditscore)
- [burnCreditScoreById](modules.md#burncreditscorebyid)
- [burnGreen](modules.md#burngreen)
- [burnGreenById](modules.md#burngreenbyid)
- [burnIdentity](modules.md#burnidentity)
- [burnIdentityById](modules.md#burnidentitybyid)
- [burnSoulName](modules.md#burnsoulname)
- [burnSoulNameByName](modules.md#burnsoulnamebyname)
- [calculateSoulNameLength](modules.md#calculatesoulnamelength)
- [checkLogin](modules.md#checklogin)
- [createCreditScore](modules.md#createcreditscore)
- [createGreen](modules.md#creategreen)
- [createIdentity](modules.md#createidentity)
- [createIdentityWithSoulName](modules.md#createidentitywithsoulname)
- [createLink](modules.md#createlink)
- [createRandomWallet](modules.md#createrandomwallet)
- [createSoulName](modules.md#createsoulname)
- [establishLink](modules.md#establishlink)
- [establishLinkFromPassport](modules.md#establishlinkfrompassport)
- [generateGreen](modules.md#generategreen)
- [generateSignatureDomain](modules.md#generatesignaturedomain)
- [getBalances](modules.md#getbalances)
- [getNetworkNameByChainId](modules.md#getnetworknamebychainid)
- [getRegistrationPrice](modules.md#getregistrationprice)
- [getSession](modules.md#getsession)
- [getSoulNameMetadataPrefix](modules.md#getsoulnamemetadataprefix)
- [isERC20Currency](modules.md#iserc20currency)
- [isNativeCurrency](modules.md#isnativecurrency)
- [isSoulNameMetadataStoreResult](modules.md#issoulnamemetadatastoreresult)
- [listCreditScores](modules.md#listcreditscores)
- [listGreens](modules.md#listgreens)
- [listLinks](modules.md#listlinks)
- [listSoulNames](modules.md#listsoulnames)
- [loadAddressFromIdentityId](modules.md#loadaddressfromidentityid)
- [loadCreditScoreByTokenId](modules.md#loadcreditscorebytokenid)
- [loadCreditScoresByIdentityId](modules.md#loadcreditscoresbyidentityid)
- [loadGreenIds](modules.md#loadgreenids)
- [loadGreensByAddress](modules.md#loadgreensbyaddress)
- [loadGreensByIdentityId](modules.md#loadgreensbyidentityid)
- [loadIdentityByAddress](modules.md#loadidentitybyaddress)
- [loadIdentityContracts](modules.md#loadidentitycontracts)
- [loadIdentityDetails](modules.md#loadidentitydetails)
- [loadLinks](modules.md#loadlinks)
- [loadSBTContract](modules.md#loadsbtcontract)
- [loadSoulNameByName](modules.md#loadsoulnamebyname)
- [loadSoulNameByTokenId](modules.md#loadsoulnamebytokenid)
- [loadSoulNameDetailsByAddress](modules.md#loadsoulnamedetailsbyaddress)
- [loadSoulNamesByAddress](modules.md#loadsoulnamesbyaddress)
- [loadSoulNamesByIdentityId](modules.md#loadsoulnamesbyidentityid)
- [loadSoulNamesByNames](modules.md#loadsoulnamesbynames)
- [login](modules.md#login)
- [logout](modules.md#logout)
- [mintGreen](modules.md#mintgreen)
- [parsePassport](modules.md#parsepassport)
- [patchMetadataUrl](modules.md#patchmetadataurl)
- [printSoulName](modules.md#printsoulname)
- [purchaseIdentity](modules.md#purchaseidentity)
- [purchaseIdentityWithSoulName](modules.md#purchaseidentitywithsoulname)
- [queryLink](modules.md#querylink)
- [queryLinkFromPassport](modules.md#querylinkfrompassport)
- [recoverAddress](modules.md#recoveraddress)
- [resolve](modules.md#resolve)
- [sendSoulName](modules.md#sendsoulname)
- [sendSoulNameByName](modules.md#sendsoulnamebyname)
- [showIdentity](modules.md#showidentity)
- [signMessage](modules.md#signmessage)
- [signTypedData](modules.md#signtypeddata)
- [unpackSessionId](modules.md#unpacksessionid)
- [validateSoulName](modules.md#validatesoulname)
- [verifyGreen](modules.md#verifygreen)
- [verifyLink](modules.md#verifylink)
- [version](modules.md#version)

## Type Aliases

### ApprovalEvent

Ƭ **ApprovalEvent**: `TypedEvent`<[`string`, `string`, `BigNumber`], [`ApprovalEventObject`](interfaces/ApprovalEventObject.md)\>

___

### ApprovalEventFilter

Ƭ **ApprovalEventFilter**: `TypedEventFilter`<[`ApprovalEvent`](modules.md#approvalevent)\>

___

### Balances

Ƭ **Balances**: `Partial`<{ [index in BalanceTypes]: number \| undefined }\>

___

### BreakLinkResult

Ƭ **BreakLinkResult**: [`BaseResult`](interfaces/BaseResult.md)

___

### CreateLinkResult

Ƭ **CreateLinkResult**: [`BaseResult`](interfaces/BaseResult.md) & { `passport?`: `string`  }

___

### ERC20Currencies

Ƭ **ERC20Currencies**: typeof `erc20Currencies`[`number`]

___

### Environment

Ƭ **Environment**: { `name`: ``"local"`` \| ``"dev"`` \| ``"test"`` \| ``"stage"`` \| ``"production"`` ; `wallet?`: `Signer` \| `Wallet`  } & [`MasaArgs`](interfaces/MasaArgs.md)

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

### NativeCurrencies

Ƭ **NativeCurrencies**: typeof `nativeCurrencies`[`number`]

___

### NetworkName

Ƭ **NetworkName**: ``"goerli"`` \| ``"ethereum"`` \| ``"mainnet"`` \| ``"alfajores"`` \| ``"celo"`` \| ``"mumbai"`` \| ``"polygon"`` \| ``"bsctest"`` \| ``"bsc"`` \| ``"basegoerli"`` \| ``"unknown"``

___

### PaymentMethod

Ƭ **PaymentMethod**: [`NativeCurrencies`](modules.md#nativecurrencies) \| [`ERC20Currencies`](modules.md#erc20currencies)

___

### QueryLinkResult

Ƭ **QueryLinkResult**: [`BaseResult`](interfaces/BaseResult.md)

___

### Tokens

Ƭ **Tokens**: `Partial`<{ [key in PaymentMethod]: string }\>

___

### TransferEvent

Ƭ **TransferEvent**: `TypedEvent`<[`string`, `string`, `BigNumber`], [`TransferEventObject`](interfaces/TransferEventObject.md)\>

___

### TransferEventFilter

Ƭ **TransferEventFilter**: `TypedEventFilter`<[`TransferEvent`](modules.md#transferevent)\>

___

### VerifyLinkResult

Ƭ **VerifyLinkResult**: [`BaseResult`](interfaces/BaseResult.md) & { `verified?`: `boolean`  }

## Variables

### Messages

• `Const` **Messages**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `NoIdentity` | (`address?`: `string`) => `string` |
| `NotLoggedIn` | () => `string` |
| `WaitingToFinalize` | (`txHash`: `string`) => `string` |

___

### SupportedNetworks

• `Const` **SupportedNetworks**: `Partial`<{ [key in NetworkName]: Network }\>

___

### Templates

• `Const` **Templates**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `loginTemplate` | (`challenge`: `string`, `expires`: `string`) => `string` |

___

### addresses

• `Const` **addresses**: `Partial`<{ [key in NetworkName]: Addresses }\>

___

### environments

• `Const` **environments**: [`Environment`](modules.md#environment)[]

## Functions

### breakLink

▸ **breakLink**(`masa`, `contract`, `tokenId`, `readerIdentityId`): `Promise`<[`BaseResult`](interfaces/BaseResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `contract` | `Contract` |
| `tokenId` | `BigNumber` |
| `readerIdentityId` | `BigNumber` |

#### Returns

`Promise`<[`BaseResult`](interfaces/BaseResult.md)\>

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

### burnGreen

▸ **burnGreen**(`masa`, `greenId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `greenId` | `BigNumber` |

#### Returns

`Promise`<`boolean`\>

___

### burnGreenById

▸ **burnGreenById**(`masa`, `greenId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `greenId` | `BigNumber` |

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

### checkLogin

▸ **checkLogin**(`masa`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |

#### Returns

`Promise`<`boolean`\>

___

### createCreditScore

▸ **createCreditScore**(`masa`, `paymentMethod`): `Promise`<`undefined` \| [`GenerateCreditScoreResult`](interfaces/GenerateCreditScoreResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `paymentMethod` | [`PaymentMethod`](modules.md#paymentmethod) |

#### Returns

`Promise`<`undefined` \| [`GenerateCreditScoreResult`](interfaces/GenerateCreditScoreResult.md)\>

___

### createGreen

▸ **createGreen**(`masa`, `paymentMethod`, `phoneNumber`, `code`): `Promise`<[`VerifyGreenResult`](interfaces/VerifyGreenResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `paymentMethod` | [`PaymentMethod`](modules.md#paymentmethod) |
| `phoneNumber` | `string` |
| `code` | `string` |

#### Returns

`Promise`<[`VerifyGreenResult`](interfaces/VerifyGreenResult.md)\>

___

### createIdentity

▸ **createIdentity**(`masa`): `Promise`<[`BaseResult`](interfaces/BaseResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |

#### Returns

`Promise`<[`BaseResult`](interfaces/BaseResult.md)\>

___

### createIdentityWithSoulName

▸ **createIdentityWithSoulName**(`masa`, `paymentMethod`, `soulName`, `duration`): `Promise`<{ `identityId?`: `string` \| `BigNumber`  } & [`CreateSoulNameResult`](interfaces/CreateSoulNameResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `paymentMethod` | [`PaymentMethod`](modules.md#paymentmethod) |
| `soulName` | `string` |
| `duration` | `number` |

#### Returns

`Promise`<{ `identityId?`: `string` \| `BigNumber`  } & [`CreateSoulNameResult`](interfaces/CreateSoulNameResult.md)\>

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

▸ **createRandomWallet**(`provider?`): `Wallet`

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider?` | `Provider` |

#### Returns

`Wallet`

___

### createSoulName

▸ **createSoulName**(`masa`, `paymentMethod`, `soulName`, `duration`, `receiver?`): `Promise`<[`CreateSoulNameResult`](interfaces/CreateSoulNameResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `paymentMethod` | [`PaymentMethod`](modules.md#paymentmethod) |
| `soulName` | `string` |
| `duration` | `number` |
| `receiver?` | `string` |

#### Returns

`Promise`<[`CreateSoulNameResult`](interfaces/CreateSoulNameResult.md)\>

___

### establishLink

▸ **establishLink**(`masa`, `paymentMethod`, `contract`, `tokenId`, `readerIdentityId`, `signature`, `signatureDate`, `expirationDate`): `Promise`<[`BaseResult`](interfaces/BaseResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `paymentMethod` | [`PaymentMethod`](modules.md#paymentmethod) |
| `contract` | `Contract` |
| `tokenId` | `BigNumber` |
| `readerIdentityId` | `BigNumber` |
| `signature` | `string` |
| `signatureDate` | `number` |
| `expirationDate` | `number` |

#### Returns

`Promise`<[`BaseResult`](interfaces/BaseResult.md)\>

___

### establishLinkFromPassport

▸ **establishLinkFromPassport**(`masa`, `paymentMethod`, `contract`, `passport`): `Promise`<[`BaseResult`](interfaces/BaseResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `paymentMethod` | [`PaymentMethod`](modules.md#paymentmethod) |
| `contract` | `Contract` |
| `passport` | `string` |

#### Returns

`Promise`<[`BaseResult`](interfaces/BaseResult.md)\>

___

### generateGreen

▸ **generateGreen**(`masa`, `phoneNumber`): `Promise`<`undefined` \| [`GenerateGreenResult`](interfaces/GenerateGreenResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `phoneNumber` | `string` |

#### Returns

`Promise`<`undefined` \| [`GenerateGreenResult`](interfaces/GenerateGreenResult.md)\>

___

### generateSignatureDomain

▸ **generateSignatureDomain**(`wallet`, `name`, `verifyingContract`): `Promise`<`TypedDataDomain`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `Wallet` |
| `name` | `string` |
| `verifyingContract` | `string` |

#### Returns

`Promise`<`TypedDataDomain`\>

___

### getBalances

▸ **getBalances**(`masa`, `address?`): `Promise`<`Partial`<{ `CELO`: `undefined` \| `number` ; `CreditScore`: `undefined` \| `number` ; `ETH`: `undefined` \| `number` ; `G$`: `undefined` \| `number` ; `Green`: `undefined` \| `number` ; `Identity`: `undefined` \| `number` ; `MASA`: `undefined` \| `number` ; `Native`: `undefined` \| `number` ; `SoulName`: `undefined` \| `number` ; `USDC`: `undefined` \| `number` ; `WETH`: `undefined` \| `number` ; `cUSD`: `undefined` \| `number`  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `address?` | `string` |

#### Returns

`Promise`<`Partial`<{ `CELO`: `undefined` \| `number` ; `CreditScore`: `undefined` \| `number` ; `ETH`: `undefined` \| `number` ; `G$`: `undefined` \| `number` ; `Green`: `undefined` \| `number` ; `Identity`: `undefined` \| `number` ; `MASA`: `undefined` \| `number` ; `Native`: `undefined` \| `number` ; `SoulName`: `undefined` \| `number` ; `USDC`: `undefined` \| `number` ; `WETH`: `undefined` \| `number` ; `cUSD`: `undefined` \| `number`  }\>\>

___

### getNetworkNameByChainId

▸ **getNetworkNameByChainId**(`chainId`): [`NetworkName`](modules.md#networkname)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |

#### Returns

[`NetworkName`](modules.md#networkname)

___

### getRegistrationPrice

▸ **getRegistrationPrice**(`masa`, `paymentMethod`, `soulName`, `duration`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `paymentMethod` | [`PaymentMethod`](modules.md#paymentmethod) |
| `soulName` | `string` |
| `duration` | `number` |

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

### getSoulNameMetadataPrefix

▸ **getSoulNameMetadataPrefix**(`masa`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |

#### Returns

`string`

___

### isERC20Currency

▸ **isERC20Currency**(`paymentMethod`): paymentMethod is "MASA" \| "WETH" \| "G$" \| "USDC" \| "cUSD"

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentMethod` | `unknown` |

#### Returns

paymentMethod is "MASA" \| "WETH" \| "G$" \| "USDC" \| "cUSD"

___

### isNativeCurrency

▸ **isNativeCurrency**(`paymentMethod`): paymentMethod is "ETH" \| "CELO"

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentMethod` | `unknown` |

#### Returns

paymentMethod is "ETH" \| "CELO"

___

### isSoulNameMetadataStoreResult

▸ **isSoulNameMetadataStoreResult**(`result`): result is SoulNameMetadataStoreResult

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`SoulNameResultBase`](interfaces/SoulNameResultBase.md) |

#### Returns

result is SoulNameMetadataStoreResult

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

### listGreens

▸ **listGreens**(`masa`, `address?`): `Promise`<{ `metadata?`: [`IGreen`](interfaces/IGreen.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `address?` | `string` |

#### Returns

`Promise`<{ `metadata?`: [`IGreen`](interfaces/IGreen.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

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

### loadGreenIds

▸ **loadGreenIds**(`masa`, `greenIds`): `Promise`<{ `metadata`: `undefined` \| [`IGreen`](interfaces/IGreen.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `greenIds` | `BigNumber`[] |

#### Returns

`Promise`<{ `metadata`: `undefined` \| [`IGreen`](interfaces/IGreen.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

___

### loadGreensByAddress

▸ **loadGreensByAddress**(`masa`, `address`): `Promise`<{ `metadata?`: [`IGreen`](interfaces/IGreen.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `address` | `string` |

#### Returns

`Promise`<{ `metadata?`: [`IGreen`](interfaces/IGreen.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

___

### loadGreensByIdentityId

▸ **loadGreensByIdentityId**(`masa`, `identityId`): `Promise`<{ `metadata?`: [`IGreen`](interfaces/IGreen.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `identityId` | `BigNumber` |

#### Returns

`Promise`<{ `metadata?`: [`IGreen`](interfaces/IGreen.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\>

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

### loadSBTContract

▸ **loadSBTContract**<`Contract`\>(`masaConfig`, `address`, `factory?`): `Promise`<`undefined` \| `Contract`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Contract` | extends `MasaSBTSelfSovereign`<`Contract`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `masaConfig` | [`MasaConfig`](interfaces/MasaConfig.md) | `undefined` |
| `address` | `string` | `undefined` |
| `factory` | [`ContractFactory`](classes/ContractFactory.md) | `MasaSBTSelfSovereign__factory` |

#### Returns

`Promise`<`undefined` \| `Contract`\>

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

### loadSoulNameDetailsByAddress

▸ **loadSoulNameDetailsByAddress**(`masa`, `address`): `Promise`<[`SoulNameDetails`](interfaces/SoulNameDetails.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `address` | `string` |

#### Returns

`Promise`<[`SoulNameDetails`](interfaces/SoulNameDetails.md)[]\>

___

### loadSoulNamesByAddress

▸ **loadSoulNamesByAddress**(`masa`, `address`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `address` | `string` |

#### Returns

`Promise`<`string`[]\>

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

### loadSoulNamesByNames

▸ **loadSoulNamesByNames**(`masa`, `soulNames`): `Promise`<[`SoulNameDetails`](interfaces/SoulNameDetails.md)[]\>

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

### mintGreen

▸ **mintGreen**(`masa`, `paymentMethod`, `authorityAddress`, `signatureDate`, `signature`): `Promise`<[`BaseResult`](interfaces/BaseResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `paymentMethod` | [`PaymentMethod`](modules.md#paymentmethod) |
| `authorityAddress` | `string` |
| `signatureDate` | `number` |
| `signature` | `string` |

#### Returns

`Promise`<[`BaseResult`](interfaces/BaseResult.md)\>

___

### parsePassport

▸ **parsePassport**(`passportEncoded`): [`IPassport`](interfaces/IPassport.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `passportEncoded` | `string` |

#### Returns

[`IPassport`](interfaces/IPassport.md)

___

### patchMetadataUrl

▸ **patchMetadataUrl**(`masa`, `metadataUrl`): `string`

todo: fix this thing, its not good

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `metadataUrl` | `string` |

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

▸ **purchaseIdentity**(`masa`): `Promise`<[`BaseResult`](interfaces/BaseResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |

#### Returns

`Promise`<[`BaseResult`](interfaces/BaseResult.md)\>

___

### purchaseIdentityWithSoulName

▸ **purchaseIdentityWithSoulName**(`masa`, `soulName`, `soulNameLength`, `duration`, `paymentMethod`): `Promise`<{ `identityId?`: `string` \| `BigNumber`  } & [`CreateSoulNameResult`](interfaces/CreateSoulNameResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `soulName` | `string` |
| `soulNameLength` | `number` |
| `duration` | `number` |
| `paymentMethod` | [`PaymentMethod`](modules.md#paymentmethod) |

#### Returns

`Promise`<{ `identityId?`: `string` \| `BigNumber`  } & [`CreateSoulNameResult`](interfaces/CreateSoulNameResult.md)\>

___

### queryLink

▸ **queryLink**(`masa`, `contract`, `paymentMethod`, `tokenId`, `readerIdentityId`, `signature`, `signatureDate`, `expirationDate`): `Promise`<[`BaseResult`](interfaces/BaseResult.md)\>

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

### queryLinkFromPassport

▸ **queryLinkFromPassport**(`masa`, `paymentMethod`, `contract`, `passport`): `Promise`<[`BaseResult`](interfaces/BaseResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `paymentMethod` | [`PaymentMethod`](modules.md#paymentmethod) |
| `contract` | `Contract` |
| `passport` | `string` |

#### Returns

`Promise`<[`BaseResult`](interfaces/BaseResult.md)\>

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

### resolve

▸ **resolve**(`masa`, `soulName`): `Promise`<`undefined` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `soulName` | `string` |

#### Returns

`Promise`<`undefined` \| `string`\>

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

### signTypedData

▸ **signTypedData**(`contract`, `wallet`, `name`, `types`, `value`): `Promise`<{ `domain`: `TypedDataDomain` ; `signature`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `BaseContract` |
| `wallet` | `Wallet` |
| `name` | `string` |
| `types` | `Record`<`string`, `TypedDataField`[]\> |
| `value` | `Record`<`string`, `string` \| `number` \| `BigNumber`\> |

#### Returns

`Promise`<{ `domain`: `TypedDataDomain` ; `signature`: `string`  }\>

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

▸ **validateSoulName**(`masa`, `soulName`, `verbose?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `soulName` | `string` |
| `verbose?` | `boolean` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `isValid` | `boolean` |
| `length` | `number` |
| `message?` | `string` |

___

### verifyGreen

▸ **verifyGreen**(`masa`, `phoneNumber`, `code`): `Promise`<`undefined` \| [`BaseResult`](interfaces/BaseResult.md) & { `authorityAddress?`: `string` ; `errorCode?`: `number` ; `signature?`: `string` ; `signatureDate?`: `number` ; `status?`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masa` | [`Masa`](classes/Masa.md) |
| `phoneNumber` | `string` |
| `code` | `string` |

#### Returns

`Promise`<`undefined` \| [`BaseResult`](interfaces/BaseResult.md) & { `authorityAddress?`: `string` ; `errorCode?`: `number` ; `signature?`: `string` ; `signatureDate?`: `number` ; `status?`: `string`  }\>

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
