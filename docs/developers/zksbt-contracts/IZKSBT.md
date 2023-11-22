# IZKSBT









## Methods

### getEncryptedData

```solidity
function getEncryptedData(uint256 tokenId) external view returns (bytes[])
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes[] | undefined |

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

### mint

```solidity
function mint(address to, bytes root, bytes[] encryptedData) external payable returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined |
| root | bytes | undefined |
| encryptedData | bytes[] | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### verifyProof

```solidity
function verifyProof(uint256 tokenId, uint256[] proof, uint256[] publicValues) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |
| proof | uint256[] | undefined |
| publicValues | uint256[] | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |




