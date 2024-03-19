# IMessageLib









## Methods

### getConfig

```solidity
function getConfig(uint32 _eid, address _oapp, uint32 _configType) external view returns (bytes config)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _eid | uint32 | undefined |
| _oapp | address | undefined |
| _configType | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| config | bytes | undefined |

### isSupportedEid

```solidity
function isSupportedEid(uint32 _eid) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _eid | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### messageLibType

```solidity
function messageLibType() external view returns (enum MessageLibType)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | enum MessageLibType | undefined |

### setConfig

```solidity
function setConfig(address _oapp, SetConfigParam[] _config) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _oapp | address | undefined |
| _config | SetConfigParam[] | undefined |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```



*Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### version

```solidity
function version() external view returns (uint64 major, uint8 minor, uint8 endpointVersion)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| major | uint64 | undefined |
| minor | uint8 | undefined |
| endpointVersion | uint8 | undefined |




