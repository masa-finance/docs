# NodeDataMetrics

*Masa Finance*

> NodeDataMetrics

This contract is used for the Node Data Metrics



## Methods

### MINIMUM_STAKE

```solidity
function MINIMUM_STAKE() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### currentPeriod

```solidity
function currentPeriod() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getNodeData

```solidity
function getNodeData(uint256 period) external view returns (struct NodeDataMetrics.NodeData)
```

Function to retrieve node data for a specific period



#### Parameters

| Name | Type | Description |
|---|---|---|
| period | uint256 | The period for which to get the node data |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | NodeDataMetrics.NodeData | The node data for the given period |

### nodeData

```solidity
function nodeData(uint256) external view returns (string peerId, uint256 lastJoined, uint256 lastLeft, uint256 lastUpdated, uint256 currentUptime, string currentUptimeStr, uint256 accumulatedUptime, string accumulatedUptimeStr, string nodeAddress, uint256 activity, bool isActive)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| peerId | string | undefined |
| lastJoined | uint256 | undefined |
| lastLeft | uint256 | undefined |
| lastUpdated | uint256 | undefined |
| currentUptime | uint256 | undefined |
| currentUptimeStr | string | undefined |
| accumulatedUptime | uint256 | undefined |
| accumulatedUptimeStr | string | undefined |
| nodeAddress | string | undefined |
| activity | uint256 | undefined |
| isActive | bool | undefined |

### stakingContract

```solidity
function stakingContract() external view returns (contract OracleNodeStaking)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract OracleNodeStaking | undefined |

### updateMultipleNodeData

```solidity
function updateMultipleNodeData(NodeDataMetrics.NodeData[] data) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| data | NodeDataMetrics.NodeData[] | undefined |

### updateNodeData

```solidity
function updateNodeData(NodeDataMetrics.NodeData data) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| data | NodeDataMetrics.NodeData | undefined |



## Events

### MultipleNodeDataUpdated

```solidity
event MultipleNodeDataUpdated(uint256 startPeriod, uint256 count)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| startPeriod  | uint256 | undefined |
| count  | uint256 | undefined |

### NodeDataUpdated

```solidity
event NodeDataUpdated(uint256 period, NodeDataMetrics.NodeData data)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| period  | uint256 | undefined |
| data  | NodeDataMetrics.NodeData | undefined |



