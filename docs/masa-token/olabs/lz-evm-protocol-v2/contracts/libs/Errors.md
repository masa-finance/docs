# Errors











## Errors

### LZ_AlreadyRegistered

```solidity
error LZ_AlreadyRegistered()
```






### LZ_ComposeExists

```solidity
error LZ_ComposeExists()
```






### LZ_ComposeNotFound

```solidity
error LZ_ComposeNotFound(bytes32 expected, bytes32 actual)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| expected | bytes32 | undefined |
| actual | bytes32 | undefined |

### LZ_DefaultReceiveLibUnavailable

```solidity
error LZ_DefaultReceiveLibUnavailable()
```






### LZ_DefaultSendLibUnavailable

```solidity
error LZ_DefaultSendLibUnavailable()
```






### LZ_InsufficientFee

```solidity
error LZ_InsufficientFee(uint256 requiredNative, uint256 suppliedNative, uint256 requiredLzToken, uint256 suppliedLzToken)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| requiredNative | uint256 | undefined |
| suppliedNative | uint256 | undefined |
| requiredLzToken | uint256 | undefined |
| suppliedLzToken | uint256 | undefined |

### LZ_InvalidAmount

```solidity
error LZ_InvalidAmount(uint256 required, uint256 supplied)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| required | uint256 | undefined |
| supplied | uint256 | undefined |

### LZ_InvalidArgument

```solidity
error LZ_InvalidArgument()
```






### LZ_InvalidExpiry

```solidity
error LZ_InvalidExpiry()
```






### LZ_InvalidNonce

```solidity
error LZ_InvalidNonce(uint64 nonce)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| nonce | uint64 | undefined |

### LZ_InvalidPayloadHash

```solidity
error LZ_InvalidPayloadHash()
```






### LZ_InvalidReceiveLibrary

```solidity
error LZ_InvalidReceiveLibrary()
```






### LZ_LzTokenUnavailable

```solidity
error LZ_LzTokenUnavailable()
```






### LZ_NotImplemented

```solidity
error LZ_NotImplemented()
```






### LZ_OnlyNonDefaultLib

```solidity
error LZ_OnlyNonDefaultLib()
```






### LZ_OnlyReceiveLib

```solidity
error LZ_OnlyReceiveLib()
```






### LZ_OnlyRegisteredLib

```solidity
error LZ_OnlyRegisteredLib()
```






### LZ_OnlyRegisteredOrDefaultLib

```solidity
error LZ_OnlyRegisteredOrDefaultLib()
```






### LZ_OnlySendLib

```solidity
error LZ_OnlySendLib()
```






### LZ_PathNotInitializable

```solidity
error LZ_PathNotInitializable()
```






### LZ_PathNotVerifiable

```solidity
error LZ_PathNotVerifiable()
```






### LZ_PayloadHashNotFound

```solidity
error LZ_PayloadHashNotFound(bytes32 expected, bytes32 actual)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| expected | bytes32 | undefined |
| actual | bytes32 | undefined |

### LZ_SameValue

```solidity
error LZ_SameValue()
```






### LZ_SendReentrancy

```solidity
error LZ_SendReentrancy()
```






### LZ_Unauthorized

```solidity
error LZ_Unauthorized()
```






### LZ_UnsupportedEid

```solidity
error LZ_UnsupportedEid()
```






### LZ_UnsupportedInterface

```solidity
error LZ_UnsupportedInterface()
```






### LZ_ZeroLzTokenFee

```solidity
error LZ_ZeroLzTokenFee()
```







