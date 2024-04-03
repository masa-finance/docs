# IPreCrime









## Methods

### buildSimulationResult

```solidity
function buildSimulationResult() external view returns (bytes)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes | undefined |

### getConfig

```solidity
function getConfig(bytes[] _packets, uint256[] _packetMsgValues) external nonpayable returns (bytes)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _packets | bytes[] | undefined |
| _packetMsgValues | uint256[] | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes | undefined |

### preCrime

```solidity
function preCrime(bytes[] _packets, uint256[] _packetMsgValues, bytes[] _simulations) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _packets | bytes[] | undefined |
| _packetMsgValues | uint256[] | undefined |
| _simulations | bytes[] | undefined |

### simulate

```solidity
function simulate(bytes[] _packets, uint256[] _packetMsgValues) external payable returns (bytes)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _packets | bytes[] | undefined |
| _packetMsgValues | uint256[] | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes | undefined |

### version

```solidity
function version() external view returns (uint64 major, uint8 minor)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| major | uint64 | undefined |
| minor | uint8 | undefined |




## Errors

### CrimeFound

```solidity
error CrimeFound(bytes crime)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| crime | bytes | undefined |

### InvalidSimulationResult

```solidity
error InvalidSimulationResult(uint32 eid, bytes reason)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| eid | uint32 | undefined |
| reason | bytes | undefined |

### OnlyOffChain

```solidity
error OnlyOffChain()
```






### PacketOversize

```solidity
error PacketOversize(uint256 max, uint256 actual)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| max | uint256 | undefined |
| actual | uint256 | undefined |

### PacketUnsorted

```solidity
error PacketUnsorted()
```






### SimulationFailed

```solidity
error SimulationFailed(bytes reason)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| reason | bytes | undefined |

### SimulationResultNotFound

```solidity
error SimulationResultNotFound(uint32 eid)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| eid | uint32 | undefined |


