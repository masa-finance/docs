# ZKSBT

*Masa Finance*

> ZKP SBT

Soulbound token implementing ZKP



## Methods

### getEncryptedData

```solidity
function getEncryptedData(uint256 tokenId) external view returns (struct ZKSBT.EncryptedData, struct ZKSBT.EncryptedData, struct ZKSBT.EncryptedData)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | ZKSBT.EncryptedData | undefined |
| _1 | ZKSBT.EncryptedData | undefined |
| _2 | ZKSBT.EncryptedData | undefined |

### getRoot

```solidity
function getRoot(uint256 tokenId) external view returns (bytes)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes | undefined |

### sbtData

```solidity
function sbtData(uint256) external view returns (bytes root, struct ZKSBT.EncryptedData encryptedCreditScore, struct ZKSBT.EncryptedData encryptedIncome, struct ZKSBT.EncryptedData encryptedReportDate)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| root | bytes | undefined |
| encryptedCreditScore | ZKSBT.EncryptedData | undefined |
| encryptedIncome | ZKSBT.EncryptedData | undefined |
| encryptedReportDate | ZKSBT.EncryptedData | undefined |




