# DexAMM

*Masa Finance*

> Decentralized automated market maker (AMM)

Smart contract to call a Dex AMM smart contract

*This smart contract will call the Uniswap Router interface, based on https://github.com/Uniswap/v2-periphery/blob/master/contracts/interfaces/IUniswapV2Router01.sol*

## Methods

### estimateSwapAmount

```solidity
function estimateSwapAmount(address _fromToken, address _toToken, uint256 _amountOut) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _fromToken | address | undefined |
| _toToken | address | undefined |
| _amountOut | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### swapRouter

```solidity
function swapRouter() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### wrappedNativeToken

```solidity
function wrappedNativeToken() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |




