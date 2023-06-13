# ShortStrings







*This library provides functions to convert short memory strings into a `ShortString` type that can be used as an immutable variable. Strings of arbitrary length can be optimized using this library if they are short enough (up to 31 bytes) by packing them with their length (1 byte) in a single EVM word (32 bytes). Additionally, a fallback mechanism can be used for every other case. Usage example: ```solidity contract Named {     using ShortStrings for *;     ShortString private immutable _name;     string private _nameFallback;     constructor(string memory contractName) {         _name = contractName.toShortStringWithFallback(_nameFallback);     }     function name() external view returns (string memory) {         return _name.toStringWithFallback(_nameFallback);     } } ```*



## Errors

### InvalidShortString

```solidity
error InvalidShortString()
```






### StringTooLong

```solidity
error StringTooLong(string str)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| str | string | undefined |


