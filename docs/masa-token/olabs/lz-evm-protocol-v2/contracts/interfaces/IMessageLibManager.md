# IMessageLibManager









## Methods

### defaultReceiveLibrary

```solidity
function defaultReceiveLibrary(uint32 _eid) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _eid | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### defaultReceiveLibraryTimeout

```solidity
function defaultReceiveLibraryTimeout(uint32 _eid) external view returns (address lib, uint256 expiry)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _eid | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| lib | address | undefined |
| expiry | uint256 | undefined |

### defaultSendLibrary

```solidity
function defaultSendLibrary(uint32 _eid) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _eid | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getConfig

```solidity
function getConfig(address _oapp, address _lib, uint32 _eid, uint32 _configType) external view returns (bytes config)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _oapp | address | undefined |
| _lib | address | undefined |
| _eid | uint32 | undefined |
| _configType | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| config | bytes | undefined |

### getReceiveLibrary

```solidity
function getReceiveLibrary(address _receiver, uint32 _eid) external view returns (address lib, bool isDefault)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _receiver | address | undefined |
| _eid | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| lib | address | undefined |
| isDefault | bool | undefined |

### getRegisteredLibraries

```solidity
function getRegisteredLibraries() external view returns (address[])
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address[] | undefined |

### getSendLibrary

```solidity
function getSendLibrary(address _sender, uint32 _eid) external view returns (address lib)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _sender | address | undefined |
| _eid | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| lib | address | undefined |

### isDefaultSendLibrary

```solidity
function isDefaultSendLibrary(address _sender, uint32 _eid) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _sender | address | undefined |
| _eid | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isRegisteredLibrary

```solidity
function isRegisteredLibrary(address _lib) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _lib | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

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

### isValidReceiveLibrary

```solidity
function isValidReceiveLibrary(address _receiver, uint32 _eid, address _lib) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _receiver | address | undefined |
| _eid | uint32 | undefined |
| _lib | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### receiveLibraryTimeout

```solidity
function receiveLibraryTimeout(address _receiver, uint32 _eid) external view returns (address lib, uint256 expiry)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _receiver | address | undefined |
| _eid | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| lib | address | undefined |
| expiry | uint256 | undefined |

### registerLibrary

```solidity
function registerLibrary(address _lib) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _lib | address | undefined |

### setConfig

```solidity
function setConfig(address _oapp, address _lib, SetConfigParam[] _params) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _oapp | address | undefined |
| _lib | address | undefined |
| _params | SetConfigParam[] | undefined |

### setDefaultReceiveLibrary

```solidity
function setDefaultReceiveLibrary(uint32 _eid, address _newLib, uint256 _timeout) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _eid | uint32 | undefined |
| _newLib | address | undefined |
| _timeout | uint256 | undefined |

### setDefaultReceiveLibraryTimeout

```solidity
function setDefaultReceiveLibraryTimeout(uint32 _eid, address _lib, uint256 _expiry) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _eid | uint32 | undefined |
| _lib | address | undefined |
| _expiry | uint256 | undefined |

### setDefaultSendLibrary

```solidity
function setDefaultSendLibrary(uint32 _eid, address _newLib) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _eid | uint32 | undefined |
| _newLib | address | undefined |

### setReceiveLibrary

```solidity
function setReceiveLibrary(address _oapp, uint32 _eid, address _newLib, uint256 _gracePeriod) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _oapp | address | undefined |
| _eid | uint32 | undefined |
| _newLib | address | undefined |
| _gracePeriod | uint256 | undefined |

### setReceiveLibraryTimeout

```solidity
function setReceiveLibraryTimeout(address _oapp, uint32 _eid, address _lib, uint256 _gracePeriod) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _oapp | address | undefined |
| _eid | uint32 | undefined |
| _lib | address | undefined |
| _gracePeriod | uint256 | undefined |

### setSendLibrary

```solidity
function setSendLibrary(address _oapp, uint32 _eid, address _newLib) external nonpayable
```

------------------- OApp interfaces -------------------



#### Parameters

| Name | Type | Description |
|---|---|---|
| _oapp | address | undefined |
| _eid | uint32 | undefined |
| _newLib | address | undefined |



## Events

### DefaultReceiveLibrarySet

```solidity
event DefaultReceiveLibrarySet(uint32 eid, address newLib)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| eid  | uint32 | undefined |
| newLib  | address | undefined |

### DefaultReceiveLibraryTimeoutSet

```solidity
event DefaultReceiveLibraryTimeoutSet(uint32 eid, address oldLib, uint256 expiry)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| eid  | uint32 | undefined |
| oldLib  | address | undefined |
| expiry  | uint256 | undefined |

### DefaultSendLibrarySet

```solidity
event DefaultSendLibrarySet(uint32 eid, address newLib)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| eid  | uint32 | undefined |
| newLib  | address | undefined |

### LibraryRegistered

```solidity
event LibraryRegistered(address newLib)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newLib  | address | undefined |

### ReceiveLibrarySet

```solidity
event ReceiveLibrarySet(address receiver, uint32 eid, address newLib)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| receiver  | address | undefined |
| eid  | uint32 | undefined |
| newLib  | address | undefined |

### ReceiveLibraryTimeoutSet

```solidity
event ReceiveLibraryTimeoutSet(address receiver, uint32 eid, address oldLib, uint256 timeout)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| receiver  | address | undefined |
| eid  | uint32 | undefined |
| oldLib  | address | undefined |
| timeout  | uint256 | undefined |

### SendLibrarySet

```solidity
event SendLibrarySet(address sender, uint32 eid, address newLib)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| sender  | address | undefined |
| eid  | uint32 | undefined |
| newLib  | address | undefined |



