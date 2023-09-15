# ZKPSBT

*Masa Finance*

> ZKP SBT

Soulbound token implementing ZKP



## Methods

### getEncryptedData

```solidity
function getEncryptedData(uint256 tokenId) external view returns (struct ZKPSBT.EncryptedData, struct ZKPSBT.EncryptedData, struct ZKPSBT.EncryptedData)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | ZKPSBT.EncryptedData | undefined |
| _1 | ZKPSBT.EncryptedData | undefined |
| _2 | ZKPSBT.EncryptedData | undefined |

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
function sbtData(uint256) external view returns (bytes root, struct ZKPSBT.EncryptedData encryptedCreditScore, struct ZKPSBT.EncryptedData encryptedIncome, struct ZKPSBT.EncryptedData encryptedReportDate)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| root | bytes | undefined |
| encryptedCreditScore | ZKPSBT.EncryptedData | undefined |
| encryptedIncome | ZKPSBT.EncryptedData | undefined |
| encryptedReportDate | ZKPSBT.EncryptedData | undefined |




