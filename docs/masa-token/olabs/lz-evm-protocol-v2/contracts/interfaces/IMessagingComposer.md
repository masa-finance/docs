# IMessagingComposer









## Methods

### composeQueue

```solidity
function composeQueue(address _from, address _to, bytes32 _guid, uint16 _index) external view returns (bytes32 messageHash)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | undefined |
| _to | address | undefined |
| _guid | bytes32 | undefined |
| _index | uint16 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| messageHash | bytes32 | undefined |

### lzCompose

```solidity
function lzCompose(address _from, address _to, bytes32 _guid, uint16 _index, bytes _message, bytes _extraData) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | undefined |
| _to | address | undefined |
| _guid | bytes32 | undefined |
| _index | uint16 | undefined |
| _message | bytes | undefined |
| _extraData | bytes | undefined |

### sendCompose

```solidity
function sendCompose(address _to, bytes32 _guid, uint16 _index, bytes _message) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | undefined |
| _guid | bytes32 | undefined |
| _index | uint16 | undefined |
| _message | bytes | undefined |



## Events

### ComposeDelivered

```solidity
event ComposeDelivered(address from, address to, bytes32 guid, uint16 index)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from  | address | undefined |
| to  | address | undefined |
| guid  | bytes32 | undefined |
| index  | uint16 | undefined |

### ComposeSent

```solidity
event ComposeSent(address from, address to, bytes32 guid, uint16 index, bytes message)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from  | address | undefined |
| to  | address | undefined |
| guid  | bytes32 | undefined |
| index  | uint16 | undefined |
| message  | bytes | undefined |

### LzComposeAlert

```solidity
event LzComposeAlert(address indexed from, address indexed to, address indexed executor, bytes32 guid, uint16 index, uint256 gas, uint256 value, bytes message, bytes extraData, bytes reason)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| executor `indexed` | address | undefined |
| guid  | bytes32 | undefined |
| index  | uint16 | undefined |
| gas  | uint256 | undefined |
| value  | uint256 | undefined |
| message  | bytes | undefined |
| extraData  | bytes | undefined |
| reason  | bytes | undefined |



