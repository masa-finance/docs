# IMessagingChannel









## Methods

### burn

```solidity
function burn(address _oapp, uint32 _srcEid, bytes32 _sender, uint64 _nonce, bytes32 _payloadHash) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _oapp | address | undefined |
| _srcEid | uint32 | undefined |
| _sender | bytes32 | undefined |
| _nonce | uint64 | undefined |
| _payloadHash | bytes32 | undefined |

### eid

```solidity
function eid() external view returns (uint32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint32 | undefined |

### inboundNonce

```solidity
function inboundNonce(address _receiver, uint32 _srcEid, bytes32 _sender) external view returns (uint64)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _receiver | address | undefined |
| _srcEid | uint32 | undefined |
| _sender | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint64 | undefined |

### inboundPayloadHash

```solidity
function inboundPayloadHash(address _receiver, uint32 _srcEid, bytes32 _sender, uint64 _nonce) external view returns (bytes32)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _receiver | address | undefined |
| _srcEid | uint32 | undefined |
| _sender | bytes32 | undefined |
| _nonce | uint64 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### lazyInboundNonce

```solidity
function lazyInboundNonce(address _receiver, uint32 _srcEid, bytes32 _sender) external view returns (uint64)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _receiver | address | undefined |
| _srcEid | uint32 | undefined |
| _sender | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint64 | undefined |

### nextGuid

```solidity
function nextGuid(address _sender, uint32 _dstEid, bytes32 _receiver) external view returns (bytes32)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _sender | address | undefined |
| _dstEid | uint32 | undefined |
| _receiver | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### nilify

```solidity
function nilify(address _oapp, uint32 _srcEid, bytes32 _sender, uint64 _nonce, bytes32 _payloadHash) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _oapp | address | undefined |
| _srcEid | uint32 | undefined |
| _sender | bytes32 | undefined |
| _nonce | uint64 | undefined |
| _payloadHash | bytes32 | undefined |

### outboundNonce

```solidity
function outboundNonce(address _sender, uint32 _dstEid, bytes32 _receiver) external view returns (uint64)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _sender | address | undefined |
| _dstEid | uint32 | undefined |
| _receiver | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint64 | undefined |

### skip

```solidity
function skip(address _oapp, uint32 _srcEid, bytes32 _sender, uint64 _nonce) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _oapp | address | undefined |
| _srcEid | uint32 | undefined |
| _sender | bytes32 | undefined |
| _nonce | uint64 | undefined |



## Events

### InboundNonceSkipped

```solidity
event InboundNonceSkipped(uint32 srcEid, bytes32 sender, address receiver, uint64 nonce)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| srcEid  | uint32 | undefined |
| sender  | bytes32 | undefined |
| receiver  | address | undefined |
| nonce  | uint64 | undefined |

### PacketBurnt

```solidity
event PacketBurnt(uint32 srcEid, bytes32 sender, address receiver, uint64 nonce, bytes32 payloadHash)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| srcEid  | uint32 | undefined |
| sender  | bytes32 | undefined |
| receiver  | address | undefined |
| nonce  | uint64 | undefined |
| payloadHash  | bytes32 | undefined |

### PacketNilified

```solidity
event PacketNilified(uint32 srcEid, bytes32 sender, address receiver, uint64 nonce, bytes32 payloadHash)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| srcEid  | uint32 | undefined |
| sender  | bytes32 | undefined |
| receiver  | address | undefined |
| nonce  | uint64 | undefined |
| payloadHash  | bytes32 | undefined |



