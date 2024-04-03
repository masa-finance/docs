# OFTCore



> OFTCore



*Abstract contract for the OftChain (OFT) token.*

## Methods

### SEND

```solidity
function SEND() external view returns (uint16)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined |

### SEND_AND_CALL

```solidity
function SEND_AND_CALL() external view returns (uint16)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined |

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

### approvalRequired

```solidity
function approvalRequired() external view returns (bool)
```

Indicates whether the OFT contract requires approval of the &#39;token()&#39; to send.

*Allows things like wallet implementers to determine integration requirements, without understanding the underlying token implementation.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | requiresApproval Needs approval of the underlying token implementation. |

### combineOptions

```solidity
function combineOptions(uint32 _eid, uint16 _msgType, bytes _extraOptions) external view returns (bytes)
```

Combines options for a given endpoint and message type.

*If there is an enforced lzReceive option: - {gasLimit: 200k, msg.value: 1 ether} AND a caller supplies a lzReceive option: {gasLimit: 100k, msg.value: 0.5 ether} - The resulting options will be {gasLimit: 300k, msg.value: 1.5 ether} when the message is executed on the remote lzReceive() function.This presence of duplicated options is handled off-chain in the verifier/executor.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _eid | uint32 | The endpoint ID. |
| _msgType | uint16 | The OAPP message type. |
| _extraOptions | bytes | Additional options passed by the caller. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes | options The combination of caller specified options AND enforced options. |

### decimalConversionRate

```solidity
function decimalConversionRate() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### endpoint

```solidity
function endpoint() external view returns (contract ILayerZeroEndpointV2)
```

Retrieves the LayerZero endpoint associated with the OApp.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract ILayerZeroEndpointV2 | undefined |

### enforcedOptions

```solidity
function enforcedOptions(uint32 eid, uint16 msgType) external view returns (bytes enforcedOption)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| eid | uint32 | undefined |
| msgType | uint16 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| enforcedOption | bytes | undefined |

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

### isPeer

```solidity
function isPeer(uint32 _eid, bytes32 _peer) external view returns (bool)
```



*Check if the peer is considered &#39;trusted&#39; by the OApp.Enables OAppPreCrimeSimulator to check whether a potential Inbound Packet is from a trusted source.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _eid | uint32 | The endpoint ID to check. |
| _peer | bytes32 | The peer to check. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | Whether the peer passed is considered &#39;trusted&#39; by the OApp. |

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

### msgInspector

```solidity
function msgInspector() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

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

### oApp

```solidity
function oApp() external view returns (address)
```



*Retrieves the address of the OApp contract.The simulator contract is the base contract for the OApp by default.If the simulator is a separate contract, override this function.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | The address of the OApp contract. |

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

### oftVersion

```solidity
function oftVersion() external pure returns (bytes4 interfaceId, uint64 version)
```

Retrieves interfaceID and the version of the OFT.

*interfaceId: This specific interface ID is &#39;0x02e49c2c&#39;.version: Indicates a cross-chain compatible msg encoding with other OFTs.If a new feature is added to the OFT cross-chain msg encoding, the version will be incremented. ie. localOFT version(x,1) CAN send messages to remoteOFT version(x,1)*


#### Returns

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | The interface ID. |
| version | uint64 | The version. |

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

### preCrime

```solidity
function preCrime() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### quoteOFT

```solidity
function quoteOFT(SendParam _sendParam) external view returns (struct OFTLimit oftLimit, struct OFTFeeDetail[] oftFeeDetails, struct OFTReceipt oftReceipt)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _sendParam | SendParam | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| oftLimit | OFTLimit | undefined |
| oftFeeDetails | OFTFeeDetail[] | undefined |
| oftReceipt | OFTReceipt | undefined |

### quoteSend

```solidity
function quoteSend(SendParam _sendParam, bool _payInLzToken) external view returns (struct MessagingFee msgFee)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _sendParam | SendParam | undefined |
| _payInLzToken | bool | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| msgFee | MessagingFee | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.*


### send

```solidity
function send(SendParam _sendParam, MessagingFee _fee, address _refundAddress) external payable returns (struct MessagingReceipt msgReceipt, struct OFTReceipt oftReceipt)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _sendParam | SendParam | undefined |
| _fee | MessagingFee | undefined |
| _refundAddress | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| msgReceipt | MessagingReceipt | undefined |
| oftReceipt | OFTReceipt | undefined |

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

### setEnforcedOptions

```solidity
function setEnforcedOptions(EnforcedOptionParam[] _enforcedOptions) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _enforcedOptions | EnforcedOptionParam[] | undefined |

### setMsgInspector

```solidity
function setMsgInspector(address _msgInspector) external nonpayable
```



*Sets the message inspector address for the OFT.This is an optional contract that can be used to inspect both &#39;message&#39; and &#39;options&#39;.Set it to address(0) to disable it, or set it to a contract address to enable it.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _msgInspector | address | The address of the message inspector. |

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

### setPreCrime

```solidity
function setPreCrime(address _preCrime) external nonpayable
```



*Sets the preCrime contract address.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _preCrime | address | The address of the preCrime contract. |

### sharedDecimals

```solidity
function sharedDecimals() external pure returns (uint8)
```



*Retrieves the shared decimals of the OFT.Sets an implicit cap on the amount of tokens, over uint64.max() will need some sort of outbound cap / totalSupply cap Lowest common decimal denominator between chains. Defaults to 6 decimal places to provide up to 18,446,744,073,709.551615 units (max uint64). For tokens exceeding this totalSupply(), they will need to override the sharedDecimals function with something smaller. ie. 4 sharedDecimals would be 1,844,674,407,370,955.1615*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint8 | The shared decimals of the OFT. |

### token

```solidity
function token() external view returns (address)
```

Retrieves the address of the token associated with the OFT.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | token The address of the ERC20 token implementation. |

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

### EnforcedOptionSet

```solidity
event EnforcedOptionSet(EnforcedOptionParam[] _enforcedOptions)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _enforcedOptions  | EnforcedOptionParam[] | undefined |

### MsgInspectorSet

```solidity
event MsgInspectorSet(address inspector)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| inspector  | address | undefined |

### OFTReceived

```solidity
event OFTReceived(bytes32 indexed guid, uint32 srcEid, address indexed toAddress, uint256 amountReceivedLD)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| guid `indexed` | bytes32 | undefined |
| srcEid  | uint32 | undefined |
| toAddress `indexed` | address | undefined |
| amountReceivedLD  | uint256 | undefined |

### OFTSent

```solidity
event OFTSent(bytes32 indexed guid, uint32 dstEid, address indexed fromAddress, uint256 amountSentLD, uint256 amountReceivedLD)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| guid `indexed` | bytes32 | undefined |
| dstEid  | uint32 | undefined |
| fromAddress `indexed` | address | undefined |
| amountSentLD  | uint256 | undefined |
| amountReceivedLD  | uint256 | undefined |

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

### InvalidDelegate

```solidity
error InvalidDelegate()
```






### InvalidEndpointCall

```solidity
error InvalidEndpointCall()
```






### InvalidLocalDecimals

```solidity
error InvalidLocalDecimals()
```






### InvalidOptions

```solidity
error InvalidOptions(bytes options)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| options | bytes | undefined |

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

### SlippageExceeded

```solidity
error SlippageExceeded(uint256 amountLD, uint256 minAmountLD)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amountLD | uint256 | undefined |
| minAmountLD | uint256 | undefined |


