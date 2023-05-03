# ZKPSBT

*Masa Finance*

> ZKP SBT

Soulbound token implementing ZKP



## Methods

### getEncryptedData

```solidity
function getEncryptedData(uint256 tokenId) external view returns (struct ZKPSBT.EncryptedData)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | ZKPSBT.EncryptedData | undefined |

### getHashData

```solidity
function getHashData(uint256 tokenId) external view returns (bytes)
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
function sbtData(uint256) external view returns (bytes hashData, struct ZKPSBT.EncryptedData encryptedData)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| hashData | bytes | undefined |
| encryptedData | ZKPSBT.EncryptedData | undefined |




