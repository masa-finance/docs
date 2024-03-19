# SendLibBase







*base contract for both SendLibBaseE1 and SendLibBaseE2*

## Methods

### executorConfigs

```solidity
function executorConfigs(address oapp, uint32 eid) external view returns (uint32 maxMessageSize, address executor)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| oapp | address | undefined |
| eid | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| maxMessageSize | uint32 | undefined |
| executor | address | undefined |

### fees

```solidity
function fees(address worker) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| worker | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getExecutorConfig

```solidity
function getExecutorConfig(address _oapp, uint32 _remoteEid) external view returns (struct ExecutorConfig rtnConfig)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _oapp | address | undefined |
| _remoteEid | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| rtnConfig | ExecutorConfig | undefined |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.*


### setDefaultExecutorConfigs

```solidity
function setDefaultExecutorConfigs(SetDefaultExecutorConfigParam[] _params) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _params | SetDefaultExecutorConfigParam[] | undefined |

### setTreasuryNativeFeeCap

```solidity
function setTreasuryNativeFeeCap(uint256 _newTreasuryNativeFeeCap) external nonpayable
```



*the new value can not be greater than the old value, i.e. down only*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _newTreasuryNativeFeeCap | uint256 | undefined |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### treasury

```solidity
function treasury() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |



## Events

### DefaultExecutorConfigsSet

```solidity
event DefaultExecutorConfigsSet(SetDefaultExecutorConfigParam[] params)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| params  | SetDefaultExecutorConfigParam[] | undefined |

### ExecutorConfigSet

```solidity
event ExecutorConfigSet(address oapp, uint32 eid, ExecutorConfig config)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| oapp  | address | undefined |
| eid  | uint32 | undefined |
| config  | ExecutorConfig | undefined |

### ExecutorFeePaid

```solidity
event ExecutorFeePaid(address executor, uint256 fee)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| executor  | address | undefined |
| fee  | uint256 | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### TreasuryNativeFeeCapSet

```solidity
event TreasuryNativeFeeCapSet(uint256 newTreasuryNativeFeeCap)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newTreasuryNativeFeeCap  | uint256 | undefined |

### TreasurySet

```solidity
event TreasurySet(address treasury)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| treasury  | address | undefined |



## Errors

### LZ_MessageLib_InvalidAmount

```solidity
error LZ_MessageLib_InvalidAmount(uint256 requested, uint256 available)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| requested | uint256 | undefined |
| available | uint256 | undefined |

### LZ_MessageLib_InvalidExecutor

```solidity
error LZ_MessageLib_InvalidExecutor()
```






### LZ_MessageLib_InvalidMessageSize

```solidity
error LZ_MessageLib_InvalidMessageSize(uint256 actual, uint256 max)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| actual | uint256 | undefined |
| max | uint256 | undefined |

### LZ_MessageLib_OnlyEndpoint

```solidity
error LZ_MessageLib_OnlyEndpoint()
```






### LZ_MessageLib_TransferFailed

```solidity
error LZ_MessageLib_TransferFailed()
```






### LZ_MessageLib_ZeroMessageSize

```solidity
error LZ_MessageLib_ZeroMessageSize()
```







