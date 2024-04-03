# IWorker









## Methods

### defaultMultiplierBps

```solidity
function defaultMultiplierBps() external view returns (uint16)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined |

### getSupportedOptionTypes

```solidity
function getSupportedOptionTypes(uint32 _eid) external view returns (uint8[])
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _eid | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint8[] | undefined |

### priceFeed

```solidity
function priceFeed() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### setDefaultMultiplierBps

```solidity
function setDefaultMultiplierBps(uint16 _multiplierBps) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _multiplierBps | uint16 | undefined |

### setPriceFeed

```solidity
function setPriceFeed(address _priceFeed) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _priceFeed | address | undefined |

### setSupportedOptionTypes

```solidity
function setSupportedOptionTypes(uint32 _eid, uint8[] _optionTypes) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _eid | uint32 | undefined |
| _optionTypes | uint8[] | undefined |

### withdrawFee

```solidity
function withdrawFee(address _lib, address _to, uint256 _amount) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _lib | address | undefined |
| _to | address | undefined |
| _amount | uint256 | undefined |



## Events

### SetDefaultMultiplierBps

```solidity
event SetDefaultMultiplierBps(uint16 multiplierBps)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| multiplierBps  | uint16 | undefined |

### SetPriceFeed

```solidity
event SetPriceFeed(address priceFeed)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| priceFeed  | address | undefined |

### SetSupportedOptionTypes

```solidity
event SetSupportedOptionTypes(uint32 dstEid, uint8[] optionTypes)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| dstEid  | uint32 | undefined |
| optionTypes  | uint8[] | undefined |

### SetWorkerLib

```solidity
event SetWorkerLib(address workerLib)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| workerLib  | address | undefined |

### Withdraw

```solidity
event Withdraw(address lib, address to, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| lib  | address | undefined |
| to  | address | undefined |
| amount  | uint256 | undefined |



## Errors

### Worker_NotAllowed

```solidity
error Worker_NotAllowed()
```






### Worker_OnlyMessageLib

```solidity
error Worker_OnlyMessageLib()
```






### Worker_RoleRenouncingDisabled

```solidity
error Worker_RoleRenouncingDisabled()
```







