# OracleNodeStaking

*Masa Finance*

> OracleNodeStaking

This contract is used for staking tokens in the Oracle Node

*The contract inherits from ReentrancyGuard to prevent re-entrancy attacks*

## Methods

### balanceOf

```solidity
function balanceOf(address account) external view returns (uint256)
```

Function to check the balance of a particular account

*This is called by the oracle node to check isStaked status*

#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | The address of the account to be checked |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | The balance of the account |

### masaToken

```solidity
function masaToken() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### minimumStake

```solidity
function minimumStake() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### stake

```solidity
function stake(uint256 amount) external payable
```

Function to stake tokens

*It updates the stake, transfers the tokens to the contract, mints the token representing the stake, and emits the Staked event*

#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | The amount of tokens to be staked |

### stakes

```solidity
function stakes(address) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### withdraw

```solidity
function withdraw(uint256 amount) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | The amount of tokens to be withdrawn |



## Events

### Staked

```solidity
event Staked(address indexed user, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| user `indexed` | address | undefined |
| amount  | uint256 | undefined |

### Withdrawn

```solidity
event Withdrawn(address indexed user, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| user `indexed` | address | undefined |
| amount  | uint256 | undefined |



