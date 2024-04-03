# ILayerZeroEndpointV2









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

### defaultReceiveLibrary

```solidity
function defaultReceiveLibrary(uint32 _eid) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _eid | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### defaultReceiveLibraryTimeout

```solidity
function defaultReceiveLibraryTimeout(uint32 _eid) external view returns (address lib, uint256 expiry)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _eid | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| lib | address | undefined |
| expiry | uint256 | undefined |

### defaultSendLibrary

```solidity
function defaultSendLibrary(uint32 _eid) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _eid | uint32 | undefined |

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

### getConfig

```solidity
function getConfig(address _oapp, address _lib, uint32 _eid, uint32 _configType) external view returns (bytes config)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _oapp | address | undefined |
| _lib | address | undefined |
| _eid | uint32 | undefined |
| _configType | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| config | bytes | undefined |

### getReceiveLibrary

```solidity
function getReceiveLibrary(address _receiver, uint32 _eid) external view returns (address lib, bool isDefault)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _receiver | address | undefined |
| _eid | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| lib | address | undefined |
| isDefault | bool | undefined |

### getRegisteredLibraries

```solidity
function getRegisteredLibraries() external view returns (address[])
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address[] | undefined |

### getSendContext

```solidity
function getSendContext() external view returns (uint32 dstEid, address sender)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| dstEid | uint32 | undefined |
| sender | address | undefined |

### getSendLibrary

```solidity
function getSendLibrary(address _sender, uint32 _eid) external view returns (address lib)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _sender | address | undefined |
| _eid | uint32 | undefined |

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
function isDefaultSendLibrary(address _sender, uint32 _eid) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _sender | address | undefined |
| _eid | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isRegisteredLibrary

```solidity
function isRegisteredLibrary(address _lib) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _lib | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isSendingMessage

```solidity
function isSendingMessage() external view returns (bool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isSupportedEid

```solidity
function isSupportedEid(uint32 _eid) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _eid | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isValidReceiveLibrary

```solidity
function isValidReceiveLibrary(address _receiver, uint32 _eid, address _lib) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _receiver | address | undefined |
| _eid | uint32 | undefined |
| _lib | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

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

### lzReceive

```solidity
function lzReceive(Origin _origin, address _receiver, bytes32 _guid, bytes _message, bytes _extraData) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _origin | Origin | undefined |
| _receiver | address | undefined |
| _guid | bytes32 | undefined |
| _message | bytes | undefined |
| _extraData | bytes | undefined |

### lzToken

```solidity
function lzToken() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### nativeToken

```solidity
function nativeToken() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

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
function receiveLibraryTimeout(address _receiver, uint32 _eid) external view returns (address lib, uint256 expiry)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _receiver | address | undefined |
| _eid | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| lib | address | undefined |
| expiry | uint256 | undefined |

### registerLibrary

```solidity
function registerLibrary(address _lib) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _lib | address | undefined |

### send

```solidity
function send(MessagingParams _params, address _refundAddress) external payable returns (struct MessagingReceipt)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _params | MessagingParams | undefined |
| _refundAddress | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | MessagingReceipt | undefined |

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

### setConfig

```solidity
function setConfig(address _oapp, address _lib, SetConfigParam[] _params) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _oapp | address | undefined |
| _lib | address | undefined |
| _params | SetConfigParam[] | undefined |

### setDefaultReceiveLibrary

```solidity
function setDefaultReceiveLibrary(uint32 _eid, address _newLib, uint256 _timeout) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _eid | uint32 | undefined |
| _newLib | address | undefined |
| _timeout | uint256 | undefined |

### setDefaultReceiveLibraryTimeout

```solidity
function setDefaultReceiveLibraryTimeout(uint32 _eid, address _lib, uint256 _expiry) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _eid | uint32 | undefined |
| _lib | address | undefined |
| _expiry | uint256 | undefined |

### setDefaultSendLibrary

```solidity
function setDefaultSendLibrary(uint32 _eid, address _newLib) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _eid | uint32 | undefined |
| _newLib | address | undefined |

### setDelegate

```solidity
function setDelegate(address _delegate) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _delegate | address | undefined |

### setLzToken

```solidity
function setLzToken(address _lzToken) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _lzToken | address | undefined |

### setReceiveLibrary

```solidity
function setReceiveLibrary(address _oapp, uint32 _eid, address _newLib, uint256 _gracePeriod) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _oapp | address | undefined |
| _eid | uint32 | undefined |
| _newLib | address | undefined |
| _gracePeriod | uint256 | undefined |

### setReceiveLibraryTimeout

```solidity
function setReceiveLibraryTimeout(address _oapp, uint32 _eid, address _lib, uint256 _gracePeriod) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _oapp | address | undefined |
| _eid | uint32 | undefined |
| _lib | address | undefined |
| _gracePeriod | uint256 | undefined |

### setSendLibrary

```solidity
function setSendLibrary(address _oapp, uint32 _eid, address _newLib) external nonpayable
```

------------------- OApp interfaces -------------------



#### Parameters

| Name | Type | Description |
|---|---|---|
| _oapp | address | undefined |
| _eid | uint32 | undefined |
| _newLib | address | undefined |

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

### verify

```solidity
function verify(Origin _origin, address _receiver, bytes32 _payloadHash) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _origin | Origin | undefined |
| _receiver | address | undefined |
| _payloadHash | bytes32 | undefined |



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



