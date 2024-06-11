# MasaFaucet









## Methods

### dailyLimit

```solidity
function dailyLimit() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### dailyTokenReceived

```solidity
function dailyTokenReceived(address) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### faucet

```solidity
function faucet() external nonpayable
```






### nextRequestAt

```solidity
function nextRequestAt(address) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

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


### setDailyLimit

```solidity
function setDailyLimit(uint256 _dailyLimit) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _dailyLimit | uint256 | undefined |

### setTokenAmount

```solidity
function setTokenAmount(uint256 _tokenAmount) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _tokenAmount | uint256 | undefined |

### setWaitTime

```solidity
function setWaitTime(uint256 _waitTime) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _waitTime | uint256 | undefined |

### tokenAddress

```solidity
function tokenAddress() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### tokenAmount

```solidity
function tokenAmount() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### waitTime

```solidity
function waitTime() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### withdrawEther

```solidity
function withdrawEther(uint256 amount) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | undefined |

### withdrawTokens

```solidity
function withdrawTokens(uint256 amount) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | undefined |



## Events

### EtherReceived

```solidity
event EtherReceived(address indexed sender, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| sender `indexed` | address | undefined |
| amount  | uint256 | undefined |

### EtherWithdrawn

```solidity
event EtherWithdrawn(address indexed admin, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| admin `indexed` | address | undefined |
| amount  | uint256 | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### TokensWithdrawn

```solidity
event TokensWithdrawn(address indexed admin, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| admin `indexed` | address | undefined |
| amount  | uint256 | undefined |



