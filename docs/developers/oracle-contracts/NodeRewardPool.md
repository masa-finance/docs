# NodeRewardPool

*Masa Finance*

> NodeRewardPool

This contract is used for distributing rewards to nodes



## Methods

### addToRewardPool

```solidity
function addToRewardPool(uint256 amount) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | undefined |

### baseUptimeRate

```solidity
function baseUptimeRate() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### consistencyBonusRate

```solidity
function consistencyBonusRate() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### distributeRewards

```solidity
function distributeRewards(uint256 period) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| period | uint256 | undefined |

### downtimePenaltyRate

```solidity
function downtimePenaltyRate() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### highActivityMultiplier

```solidity
function highActivityMultiplier() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### highActivityThreshold

```solidity
function highActivityThreshold() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### lowActivityMultiplier

```solidity
function lowActivityMultiplier() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### masaToken

```solidity
function masaToken() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### mediumActivityMultiplier

```solidity
function mediumActivityMultiplier() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### mediumActivityThreshold

```solidity
function mediumActivityThreshold() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### nodeDataMetrics

```solidity
function nodeDataMetrics() external view returns (contract NodeDataMetrics)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract NodeDataMetrics | undefined |

### rewardPool

```solidity
function rewardPool() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |



## Events

### RewardsDistributed

```solidity
event RewardsDistributed(uint256 period, address indexed node, uint256 reward)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| period  | uint256 | undefined |
| node `indexed` | address | undefined |
| reward  | uint256 | undefined |



