# OAppPreCrimeSimulator



> OAppPreCrimeSimulator



*Abstract contract serving as the base for preCrime simulation functionality in an OApp.*

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

### lzReceiveSimulate

```solidity
function lzReceiveSimulate(Origin _origin, bytes32 _guid, bytes _message, address _executor, bytes _extraData) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _origin | Origin | undefined |
| _guid | bytes32 | undefined |
| _message | bytes | undefined |
| _executor | address | undefined |
| _extraData | bytes | undefined |

### oApp

```solidity
function oApp() external view returns (address)
```



*Retrieves the address of the OApp contract.The simulator contract is the base contract for the OApp by default.If the simulator is a separate contract, override this function.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | The address of the OApp contract. |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### preCrime

```solidity
function preCrime() external view returns (address)
```



*Retrieves the address of the preCrime contract implementation.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | The address of the preCrime contract. |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.*


### setPreCrime

```solidity
function setPreCrime(address _preCrime) external nonpayable
```



*Sets the preCrime contract address.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _preCrime | address | The address of the preCrime contract. |

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

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

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


