# OAppOptionsType3



> OAppOptionsType3



*Abstract contract implementing the IOAppOptionsType3 interface with type 3 options.*

## Methods

### combineOptions

```solidity
function combineOptions(uint32 _eid, uint16 _msgType, bytes _extraOptions) external view returns (bytes)
```

Combines options for a given endpoint and message type.

*If there is an enforced lzReceive option: - {gasLimit: 200k, msg.value: 1 ether} AND a caller supplies a lzReceive option: {gasLimit: 100k, msg.value: 0.5 ether} - The resulting options will be {gasLimit: 300k, msg.value: 1.5 ether} when the message is executed on the remote lzReceive() function.This presence of duplicated options is handled off-chain in the verifier/executor.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _eid | uint32 | The endpoint ID. |
| _msgType | uint16 | The OAPP message type. |
| _extraOptions | bytes | Additional options passed by the caller. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes | options The combination of caller specified options AND enforced options. |

### enforcedOptions

```solidity
function enforcedOptions(uint32 eid, uint16 msgType) external view returns (bytes enforcedOption)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| eid | uint32 | undefined |
| msgType | uint16 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| enforcedOption | bytes | undefined |

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


### setEnforcedOptions

```solidity
function setEnforcedOptions(EnforcedOptionParam[] _enforcedOptions) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _enforcedOptions | EnforcedOptionParam[] | undefined |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |



## Events

### EnforcedOptionSet

```solidity
event EnforcedOptionSet(EnforcedOptionParam[] _enforcedOptions)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _enforcedOptions  | EnforcedOptionParam[] | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |



## Errors

### InvalidOptions

```solidity
error InvalidOptions(bytes options)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| options | bytes | undefined |


