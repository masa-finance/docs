# IOAppCore



> IOAppCore





## Methods

### endpoint

```solidity
function endpoint() external view returns (contract ILayerZeroEndpointV2 iEndpoint)
```

Retrieves the LayerZero endpoint associated with the OApp.




#### Returns

| Name | Type | Description |
|---|---|---|
| iEndpoint | contract ILayerZeroEndpointV2 | The LayerZero endpoint as an interface. |

### oAppVersion

```solidity
function oAppVersion() external view returns (uint64 senderVersion, uint64 receiverVersion)
```

Retrieves the OApp version information.




#### Returns

| Name | Type | Description |
|---|---|---|
| senderVersion | uint64 | The version of the OAppSender.sol contract. |
| receiverVersion | uint64 | The version of the OAppReceiver.sol contract. |

### peers

```solidity
function peers(uint32 _eid) external view returns (bytes32 peer)
```

Retrieves the peer (OApp) associated with a corresponding endpoint.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _eid | uint32 | The endpoint ID. |

#### Returns

| Name | Type | Description |
|---|---|---|
| peer | bytes32 | The peer address (OApp instance) associated with the corresponding endpoint. |

### setDelegate

```solidity
function setDelegate(address _delegate) external nonpayable
```

Sets the delegate address for the OApp Core.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _delegate | address | The address of the delegate to be set. |

### setPeer

```solidity
function setPeer(uint32 _eid, bytes32 _peer) external nonpayable
```

Sets the peer address (OApp instance) for a corresponding endpoint.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _eid | uint32 | The endpoint ID. |
| _peer | bytes32 | The address of the peer to be associated with the corresponding endpoint. |



## Events

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






### NoPeer

```solidity
error NoPeer(uint32 eid)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| eid | uint32 | undefined |

### OnlyPeer

```solidity
error OnlyPeer(uint32 eid, bytes32 sender)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| eid | uint32 | undefined |
| sender | bytes32 | undefined |


