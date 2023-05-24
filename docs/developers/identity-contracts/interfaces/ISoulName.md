# ISoulName









## Methods

### getExtension

```solidity
function getExtension() external view returns (string)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### getSoulNames

```solidity
function getSoulNames(uint256 identityId) external view returns (string[] sbtNames)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| identityId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| sbtNames | string[] | undefined |

### getSoulNames

```solidity
function getSoulNames(address owner) external view returns (string[] sbtNames)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| sbtNames | string[] | undefined |

### getTokenData

```solidity
function getTokenData(string name) external view returns (string sbtName, bool linked, uint256 identityId, uint256 tokenId, uint256 expirationDate, bool active)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| name | string | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| sbtName | string | undefined |
| linked | bool | undefined |
| identityId | uint256 | undefined |
| tokenId | uint256 | undefined |
| expirationDate | uint256 | undefined |
| active | bool | undefined |

### getTokenId

```solidity
function getTokenId(string name) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| name | string | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### isAvailable

```solidity
function isAvailable(string name) external view returns (bool available)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| name | string | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| available | bool | undefined |

### mint

```solidity
function mint(address to, string name, uint256 yearsPeriod, string _tokenURI) external nonpayable returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined |
| name | string | undefined |
| yearsPeriod | uint256 | undefined |
| _tokenURI | string | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### tokenData

```solidity
function tokenData(uint256 tokenId) external view returns (string name, uint256 expirationDate)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| name | string | undefined |
| expirationDate | uint256 | undefined |




