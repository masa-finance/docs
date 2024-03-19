# MessagingContext





this contract acts as a non-reentrancy guard and a source of messaging context the context includes the remote eid and the sender address it separates the send and receive context to allow messaging receipts (send back on receive())



## Methods

### getSendContext

```solidity
function getSendContext() external view returns (uint32, address)
```



*returns (eid, sender) if sending message, (0, 0) otherwise*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint32 | undefined |
| _1 | address | undefined |

### isSendingMessage

```solidity
function isSendingMessage() external view returns (bool)
```



*returns true if sending message*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |




