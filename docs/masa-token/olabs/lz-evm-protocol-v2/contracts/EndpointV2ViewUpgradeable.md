# EndpointV2ViewUpgradeable









## Methods

### EMPTY_PAYLOAD_HASH

```solidity
function EMPTY_PAYLOAD_HASH() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### NIL_PAYLOAD_HASH

```solidity
function NIL_PAYLOAD_HASH() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### endpoint

```solidity
function endpoint() external view returns (contract ILayerZeroEndpointV2)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract ILayerZeroEndpointV2 | undefined |

### executable

```solidity
function executable(Origin _origin, address _receiver) external view returns (enum ExecutionState)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _origin | Origin | undefined |
| _receiver | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | enum ExecutionState | undefined |

### initializable

```solidity
function initializable(Origin _origin, address _receiver) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _origin | Origin | undefined |
| _receiver | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### verifiable

```solidity
function verifiable(Origin _origin, address _receiver, address _receiveLib, bytes32 _payloadHash) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _origin | Origin | undefined |
| _receiver | address | undefined |
| _receiveLib | address | undefined |
| _payloadHash | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |



## Events

### Initialized

```solidity
event Initialized(uint8 version)
```



*Triggered when the contract has been initialized or reinitialized.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| version  | uint8 | undefined |



