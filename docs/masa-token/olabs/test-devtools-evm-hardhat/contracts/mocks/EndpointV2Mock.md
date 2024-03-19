# EndpointV2Mock









## Methods

### EMPTY_PAYLOAD_HASH

```solidity
function EMPTY_PAYLOAD_HASH() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### _executeNativeAirDropAndReturnLzGas

```solidity
function _executeNativeAirDropAndReturnLzGas(bytes _options) external nonpayable returns (uint256 totalGas, uint256 dstAmount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _options | bytes | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| totalGas | uint256 | undefined |
| dstAmount | uint256 | undefined |

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

### clear

```solidity
function clear(address _oapp, Origin _origin, bytes32 _guid, bytes _message) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _oapp | address | undefined |
| _origin | Origin | undefined |
| _guid | bytes32 | undefined |
| _message | bytes | undefined |

### composeQueue

```solidity
function composeQueue(address from, address to, bytes32 guid, uint16 index) external view returns (bytes32 messageHash)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| guid | bytes32 | undefined |
| index | uint16 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| messageHash | bytes32 | undefined |

### defaultReceiveLibrary

```solidity
function defaultReceiveLibrary(uint32) external pure returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### defaultReceiveLibraryTimeout

```solidity
function defaultReceiveLibraryTimeout(uint32) external pure returns (address lib, uint256 expiry)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| lib | address | undefined |
| expiry | uint256 | undefined |

### defaultSendLibrary

```solidity
function defaultSendLibrary(uint32) external pure returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### eid

```solidity
function eid() external view returns (uint32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint32 | undefined |

### executable

```solidity
function executable(Origin, address) external pure returns (enum ExecutionState)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | Origin | undefined |
| _1 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | enum ExecutionState | undefined |

### executeNativeAirDropAndReturnLzGas

```solidity
function executeNativeAirDropAndReturnLzGas(bytes _options) external nonpayable returns (uint256 totalGas, uint256 dstAmount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _options | bytes | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| totalGas | uint256 | undefined |
| dstAmount | uint256 | undefined |

### getConfig

```solidity
function getConfig(address, address, uint32, uint32) external pure returns (bytes config)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | address | undefined |
| _2 | uint32 | undefined |
| _3 | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| config | bytes | undefined |

### getExecutorFee

```solidity
function getExecutorFee(uint256 _payloadSize, bytes _options) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _payloadSize | uint256 | undefined |
| _options | bytes | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getReceiveLibrary

```solidity
function getReceiveLibrary(address, uint32) external pure returns (address lib, bool isDefault)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| lib | address | undefined |
| isDefault | bool | undefined |

### getRegisteredLibraries

```solidity
function getRegisteredLibraries() external pure returns (address[])
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address[] | undefined |

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

### getSendLibrary

```solidity
function getSendLibrary(address, uint32) external pure returns (address lib)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| lib | address | undefined |

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
function inboundPayloadHash(address receiver, uint32 srcEid, bytes32 sender, uint64 inboundNonce) external view returns (bytes32 payloadHash)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| receiver | address | undefined |
| srcEid | uint32 | undefined |
| sender | bytes32 | undefined |
| inboundNonce | uint64 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| payloadHash | bytes32 | undefined |

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

### isDefaultSendLibrary

```solidity
function isDefaultSendLibrary(address, uint32) external pure returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isRegisteredLibrary

```solidity
function isRegisteredLibrary(address) external pure returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isSendingMessage

```solidity
function isSendingMessage() external view returns (bool)
```



*returns true if sending message*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isSupportedEid

```solidity
function isSupportedEid(uint32) external pure returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isValidReceiveLibrary

```solidity
function isValidReceiveLibrary(address _receiver, uint32 _srcEid, address _actualReceiveLib) external view returns (bool)
```



*called when the endpoint checks if the msgLib attempting to verify the msg is the configured msgLib of the Oappthis check provides the ability for Oapp to lock in a trusted msgLibit will fist check if the msgLib is the currently configured one. then check if the msgLib is the one in grace period of msgLib versioning upgrade*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _receiver | address | undefined |
| _srcEid | uint32 | undefined |
| _actualReceiveLib | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### lazyInboundNonce

```solidity
function lazyInboundNonce(address receiver, uint32 srcEid, bytes32 sender) external view returns (uint64 nonce)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| receiver | address | undefined |
| srcEid | uint32 | undefined |
| sender | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| nonce | uint64 | undefined |

### lzCompose

```solidity
function lzCompose(address, address, bytes32, uint16, bytes, bytes) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | address | undefined |
| _2 | bytes32 | undefined |
| _3 | uint16 | undefined |
| _4 | bytes | undefined |
| _5 | bytes | undefined |

### lzEndpointLookup

```solidity
function lzEndpointLookup(address) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### lzReceive

```solidity
function lzReceive(Origin, address, bytes32, bytes, bytes) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | Origin | undefined |
| _1 | address | undefined |
| _2 | bytes32 | undefined |
| _3 | bytes | undefined |
| _4 | bytes | undefined |

### lzToken

```solidity
function lzToken() external pure returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### nativeToken

```solidity
function nativeToken() external pure returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### nextGuid

```solidity
function nextGuid(address, uint32, bytes32) external pure returns (bytes32)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | uint32 | undefined |
| _2 | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### nilify

```solidity
function nilify(address, uint32, bytes32, uint64, bytes32) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | uint32 | undefined |
| _2 | bytes32 | undefined |
| _3 | uint64 | undefined |
| _4 | bytes32 | undefined |

### outboundNonce

```solidity
function outboundNonce(address sender, uint32 dstEid, bytes32 receiver) external view returns (uint64 nonce)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| sender | address | undefined |
| dstEid | uint32 | undefined |
| receiver | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| nonce | uint64 | undefined |

### quote

```solidity
function quote(MessagingParams _params, address _sender) external view returns (struct MessagingFee)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _params | MessagingParams | undefined |
| _sender | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | MessagingFee | undefined |

### receiveLibraryTimeout

```solidity
function receiveLibraryTimeout(address receiver, uint32 srcEid) external view returns (address lib, uint256 expiry)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| receiver | address | undefined |
| srcEid | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| lib | address | undefined |
| expiry | uint256 | undefined |

### receivePayload

```solidity
function receivePayload(Origin _origin, address _receiver, bytes32 _payloadHash, bytes _message, uint256 _gas, uint256 _msgValue, bytes32 _guid) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _origin | Origin | undefined |
| _receiver | address | undefined |
| _payloadHash | bytes32 | undefined |
| _message | bytes | undefined |
| _gas | uint256 | undefined |
| _msgValue | uint256 | undefined |
| _guid | bytes32 | undefined |

### registerLibrary

```solidity
function registerLibrary(address) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### relayerFeeConfig

```solidity
function relayerFeeConfig() external view returns (uint128 dstPriceRatio, uint128 dstGasPriceInWei, uint128 dstNativeAmtCap, uint64 baseGas, uint64 gasPerByte)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| dstPriceRatio | uint128 | undefined |
| dstGasPriceInWei | uint128 | undefined |
| dstNativeAmtCap | uint128 | undefined |
| baseGas | uint64 | undefined |
| gasPerByte | uint64 | undefined |

### send

```solidity
function send(MessagingParams _params, address _refundAddress) external payable returns (struct MessagingReceipt receipt)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _params | MessagingParams | undefined |
| _refundAddress | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| receipt | MessagingReceipt | undefined |

### sendCompose

```solidity
function sendCompose(address, bytes32, uint16, bytes) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | bytes32 | undefined |
| _2 | uint16 | undefined |
| _3 | bytes | undefined |

### setConfig

```solidity
function setConfig(address, address, SetConfigParam[]) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | address | undefined |
| _2 | SetConfigParam[] | undefined |

### setDefaultReceiveLibrary

```solidity
function setDefaultReceiveLibrary(uint32, address, uint256) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint32 | undefined |
| _1 | address | undefined |
| _2 | uint256 | undefined |

### setDefaultReceiveLibraryTimeout

```solidity
function setDefaultReceiveLibraryTimeout(uint32, address, uint256) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint32 | undefined |
| _1 | address | undefined |
| _2 | uint256 | undefined |

### setDefaultSendLibrary

```solidity
function setDefaultSendLibrary(uint32, address) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint32 | undefined |
| _1 | address | undefined |

### setDelegate

```solidity
function setDelegate(address) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### setDestLzEndpoint

```solidity
function setDestLzEndpoint(address destAddr, address lzEndpointAddr) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| destAddr | address | undefined |
| lzEndpointAddr | address | undefined |

### setLzToken

```solidity
function setLzToken(address) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### setReceiveLibrary

```solidity
function setReceiveLibrary(address, uint32, address, uint256) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | uint32 | undefined |
| _2 | address | undefined |
| _3 | uint256 | undefined |

### setReceiveLibraryTimeout

```solidity
function setReceiveLibraryTimeout(address, uint32, address, uint256) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | uint32 | undefined |
| _2 | address | undefined |
| _3 | uint256 | undefined |

### setSendLibrary

```solidity
function setSendLibrary(address, uint32, address) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | uint32 | undefined |
| _2 | address | undefined |

### skip

```solidity
function skip(address, uint32, bytes32, uint64) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | uint32 | undefined |
| _2 | bytes32 | undefined |
| _3 | uint64 | undefined |

### verifiable

```solidity
function verifiable(Origin _origin, address _receiver) external view returns (bool)
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
function verifiable(Origin, address, address, bytes32) external pure returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | Origin | undefined |
| _1 | address | undefined |
| _2 | address | undefined |
| _3 | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### verifierFee

```solidity
function verifierFee() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### verify

```solidity
function verify(Origin, address, bytes32) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | Origin | undefined |
| _1 | address | undefined |
| _2 | bytes32 | undefined |



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

### DefaultReceiveLibrarySet

```solidity
event DefaultReceiveLibrarySet(uint32 eid, address newLib)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| eid  | uint32 | undefined |
| newLib  | address | undefined |

### DefaultReceiveLibraryTimeoutSet

```solidity
event DefaultReceiveLibraryTimeoutSet(uint32 eid, address oldLib, uint256 expiry)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| eid  | uint32 | undefined |
| oldLib  | address | undefined |
| expiry  | uint256 | undefined |

### DefaultSendLibrarySet

```solidity
event DefaultSendLibrarySet(uint32 eid, address newLib)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| eid  | uint32 | undefined |
| newLib  | address | undefined |

### DelegateSet

```solidity
event DelegateSet(address sender, address delegate)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| sender  | address | undefined |
| delegate  | address | undefined |

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

### LibraryRegistered

```solidity
event LibraryRegistered(address newLib)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newLib  | address | undefined |

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

### LzReceiveAlert

```solidity
event LzReceiveAlert(address indexed receiver, address indexed executor, Origin origin, bytes32 guid, uint256 gas, uint256 value, bytes message, bytes extraData, bytes reason)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| receiver `indexed` | address | undefined |
| executor `indexed` | address | undefined |
| origin  | Origin | undefined |
| guid  | bytes32 | undefined |
| gas  | uint256 | undefined |
| value  | uint256 | undefined |
| message  | bytes | undefined |
| extraData  | bytes | undefined |
| reason  | bytes | undefined |

### LzTokenSet

```solidity
event LzTokenSet(address token)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| token  | address | undefined |

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

### PacketDelivered

```solidity
event PacketDelivered(Origin origin, address receiver)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| origin  | Origin | undefined |
| receiver  | address | undefined |

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

### PacketSent

```solidity
event PacketSent(bytes encodedPayload, bytes options, address sendLibrary)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| encodedPayload  | bytes | undefined |
| options  | bytes | undefined |
| sendLibrary  | address | undefined |

### PacketVerified

```solidity
event PacketVerified(Origin origin, address receiver, bytes32 payloadHash)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| origin  | Origin | undefined |
| receiver  | address | undefined |
| payloadHash  | bytes32 | undefined |

### ReceiveLibrarySet

```solidity
event ReceiveLibrarySet(address receiver, uint32 eid, address newLib)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| receiver  | address | undefined |
| eid  | uint32 | undefined |
| newLib  | address | undefined |

### ReceiveLibraryTimeoutSet

```solidity
event ReceiveLibraryTimeoutSet(address receiver, uint32 eid, address oldLib, uint256 timeout)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| receiver  | address | undefined |
| eid  | uint32 | undefined |
| oldLib  | address | undefined |
| timeout  | uint256 | undefined |

### SendLibrarySet

```solidity
event SendLibrarySet(address sender, uint32 eid, address newLib)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| sender  | address | undefined |
| eid  | uint32 | undefined |
| newLib  | address | undefined |

### ValueTransferFailed

```solidity
event ValueTransferFailed(address indexed to, uint256 indexed quantity)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| to `indexed` | address | undefined |
| quantity `indexed` | uint256 | undefined |



## Errors

### Executor_InvalidExecutorOptions

```solidity
error Executor_InvalidExecutorOptions(uint256 cursor)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| cursor | uint256 | undefined |

### Executor_InvalidLzComposeOption

```solidity
error Executor_InvalidLzComposeOption()
```






### Executor_InvalidLzReceiveOption

```solidity
error Executor_InvalidLzReceiveOption()
```






### Executor_InvalidNativeDropOption

```solidity
error Executor_InvalidNativeDropOption()
```






### Executor_NativeAmountExceedsCap

```solidity
error Executor_NativeAmountExceedsCap(uint256 amount, uint256 cap)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | undefined |
| cap | uint256 | undefined |

### Executor_NoOptions

```solidity
error Executor_NoOptions()
```






### Executor_UnsupportedOptionType

```solidity
error Executor_UnsupportedOptionType(uint8 optionType)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| optionType | uint8 | undefined |

### LZ_LzTokenUnavailable

```solidity
error LZ_LzTokenUnavailable()
```






### LZ_SendReentrancy

```solidity
error LZ_SendReentrancy()
```






### LZ_ULN_InvalidLegacyType1Option

```solidity
error LZ_ULN_InvalidLegacyType1Option()
```






### LZ_ULN_InvalidLegacyType2Option

```solidity
error LZ_ULN_InvalidLegacyType2Option()
```






### LZ_ULN_InvalidWorkerId

```solidity
error LZ_ULN_InvalidWorkerId(uint8 workerId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| workerId | uint8 | undefined |

### LZ_ULN_InvalidWorkerOptions

```solidity
error LZ_ULN_InvalidWorkerOptions(uint256 cursor)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| cursor | uint256 | undefined |

### LZ_ULN_UnsupportedOptionType

```solidity
error LZ_ULN_UnsupportedOptionType(uint16 optionType)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| optionType | uint16 | undefined |


