# IAllowList









## Methods

### readAllowList

```solidity
function readAllowList(address addr) external view returns (uint256 role)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| addr | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| role | uint256 | undefined |

### setAdmin

```solidity
function setAdmin(address addr) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| addr | address | undefined |

### setEnabled

```solidity
function setEnabled(address addr) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| addr | address | undefined |

### setManager

```solidity
function setManager(address addr) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| addr | address | undefined |

### setNone

```solidity
function setNone(address addr) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| addr | address | undefined |



## Events

### RoleSet

```solidity
event RoleSet(uint256 indexed role, address indexed account, address indexed sender, uint256 oldRole)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| role `indexed` | uint256 | undefined |
| account `indexed` | address | undefined |
| sender `indexed` | address | undefined |
| oldRole  | uint256 | undefined |



