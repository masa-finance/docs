# OApp



> OApp



*Abstract contract serving as the base for OApp implementation, combining OAppSender and OAppReceiver functionality.*

## Methods

### allowInitializePath

```solidity
function allowInitializePath(Origin origin) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| origin | Origin | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### endpoint

```solidity
function endpoint() external view returns (contract ILayerZeroEndpointV2)
```

Retrieves the LayerZero endpoint associated with the OApp.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract ILayerZeroEndpointV2 | undefined |

### isComposeMsgSender

```solidity
function isComposeMsgSender(Origin, bytes, address _sender) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | Origin | undefined |
| _1 | bytes | undefined |
| _sender | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### lzReceive

```solidity
function lzReceive(Origin _origin, bytes32 _guid, bytes _message, address _executor, bytes _extraData) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _origin | Origin | undefined |
| _guid | bytes32 | undefined |
| _message | bytes | undefined |
| _executor | address | undefined |
| _extraData | bytes | undefined |

### nextNonce

```solidity
function nextNonce(uint32, bytes32) external view returns (uint64 nonce)
```

Retrieves the next nonce for a given source endpoint and sender address.

*_srcEid The source endpoint ID._sender The sender address.The path nonce starts from 1. If 0 is returned it means that there is NO nonce ordered enforcement.Is required by the off-chain executor to determine the OApp expects msg execution is ordered.This is also enforced by the OApp.By default this is NOT enabled. ie. nextNonce is hardcoded to return 0.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint32 | undefined |
| _1 | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| nonce | uint64 | The next nonce. |

### oAppVersion

```solidity
function oAppVersion() external pure returns (uint64 senderVersion, uint64 receiverVersion)
```

Retrieves the OApp version information.




#### Returns

| Name | Type | Description |
|---|---|---|
| senderVersion | uint64 | The version of the OAppSender.sol implementation. |
| receiverVersion | uint64 | The version of the OAppReceiver.sol implementation. |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### peers

```solidity
function peers(uint32 eid) external view returns (bytes32 peer)
```

Retrieves the peer (OApp) associated with a corresponding endpoint.



#### Parameters

| Name | Type | Description |
|---|---|---|
| eid | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| peer | bytes32 | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.*


### setDelegate

```solidity
function setDelegate(address _delegate) external nonpayable
```

Sets the delegate address for the OApp.

*Only the owner/admin of the OApp can call this function.Provides the ability for a delegate to set configs, on behalf of the OApp, directly on the Endpoint contract.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _delegate | address | The address of the delegate to be set. |

### setPeer

```solidity
function setPeer(uint32 _eid, bytes32 _peer) external nonpayable
```

Sets the peer address (OApp instance) for a corresponding endpoint.

*Only the owner/admin of the OApp can call this function.Indicates that the peer is trusted to send LayerZero messages to this OApp.Set this to bytes32(0) to remove the peer address.Peer is a bytes32 to accommodate non-evm chains.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _eid | uint32 | The endpoint ID. |
| _peer | bytes32 | The address of the peer to be associated with the corresponding endpoint. |

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

### PeerSet

```solidity
event PeerSet(uint32 eid, bytes32 peer)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| eid  | uint32 | undefined |
| peer  | bytes32 | undefined |



## Errors

### InvalidDelegate

```solidity
error InvalidDelegate()
```






### InvalidEndpointCall

```solidity
error InvalidEndpointCall()
```






### LzTokenUnavailable

```solidity
error LzTokenUnavailable()
```






### NoPeer

```solidity
error NoPeer(uint32 eid)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| eid | uint32 | undefined |

### NotEnoughNative

```solidity
error NotEnoughNative(uint256 msgValue)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| msgValue | uint256 | undefined |

### OnlyEndpoint

```solidity
error OnlyEndpoint(address addr)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| addr | address | undefined |

### OnlyPeer

```solidity
error OnlyPeer(uint32 eid, bytes32 sender)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| eid | uint32 | undefined |
| sender | bytes32 | undefined |


