# ISendLib









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

### quote

```solidity
function quote(Packet _packet, bytes _options, bool _payInLzToken) external view returns (struct MessagingFee)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _packet | Packet | undefined |
| _options | bytes | undefined |
| _payInLzToken | bool | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | MessagingFee | undefined |

### send

```solidity
function send(Packet _packet, bytes _options, bool _payInLzToken) external nonpayable returns (struct MessagingFee, bytes encodedPacket)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _packet | Packet | undefined |
| _options | bytes | undefined |
| _payInLzToken | bool | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | MessagingFee | undefined |
| encodedPacket | bytes | undefined |

### setConfig

```solidity
function setConfig(address _oapp, SetConfigParam[] _config) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _oapp | address | undefined |
| _config | SetConfigParam[] | undefined |

### setTreasury

```solidity
function setTreasury(address _treasury) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _treasury | address | undefined |

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

### withdrawFee

```solidity
function withdrawFee(address _to, uint256 _amount) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | undefined |
| _amount | uint256 | undefined |

### withdrawLzTokenFee

```solidity
function withdrawLzTokenFee(address _lzToken, address _to, uint256 _amount) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _lzToken | address | undefined |
| _to | address | undefined |
| _amount | uint256 | undefined |




