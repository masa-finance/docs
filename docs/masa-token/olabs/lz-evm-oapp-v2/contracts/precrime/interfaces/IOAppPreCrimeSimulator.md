# IOAppPreCrimeSimulator



> IOAppPreCrimeSimulator Interface



*Interface for the preCrime simulation functionality in an OApp.*

## Methods

### isPeer

```solidity
function isPeer(uint32 _eid, bytes32 _peer) external view returns (bool)
```



*checks if the specified peer is considered &#39;trusted&#39; by the OApp.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _eid | uint32 | The endpoint Id to check. |
| _peer | bytes32 | The peer to check. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | Whether the peer passed is considered &#39;trusted&#39; by the OApp. |

### lzReceiveAndRevert

```solidity
function lzReceiveAndRevert(InboundPacket[] _packets) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _packets | InboundPacket[] | undefined |

### oApp

```solidity
function oApp() external view returns (address)
```



*Retrieves the address of the OApp contract.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | The address of the OApp contract. |

### preCrime

```solidity
function preCrime() external view returns (address)
```



*Retrieves the address of the preCrime contract implementation.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | The address of the preCrime contract. |

### setPreCrime

```solidity
function setPreCrime(address _preCrime) external nonpayable
```



*Sets the preCrime contract address.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _preCrime | address | The address of the preCrime contract. |



## Events

### PreCrimeSet

```solidity
event PreCrimeSet(address preCrimeAddress)
```



*Emitted when the preCrime contract address is set.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| preCrimeAddress  | address | The address of the preCrime contract. |



## Errors

### OnlySelf

```solidity
error OnlySelf()
```






### SimulationResult

```solidity
error SimulationResult(bytes result)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| result | bytes | undefined |


