# IOAppReceiver









## Methods

### allowInitializePath

```solidity
function allowInitializePath(Origin _origin) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _origin | Origin | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### composeMsgSender

```solidity
function composeMsgSender() external view returns (address sender)
```

Retrieves the address responsible for &#39;sending&#39; composeMsg&#39;s to the Endpoint.

*Applications can optionally choose to implement a separate composeMsg sender that is NOT the bridging layer.The default sender IS the OApp implementer.*


#### Returns

| Name | Type | Description |
|---|---|---|
| sender | address | The address responsible for &#39;sending&#39; composeMsg&#39;s to the Endpoint. |

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
function nextNonce(uint32 _eid, bytes32 _sender) external view returns (uint64)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _eid | uint32 | undefined |
| _sender | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint64 | undefined |




