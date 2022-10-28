# IUniswapRouter

*Masa Finance*

> Uniswap Router interface

Interface of the Uniswap Router contract

*This interface is used to interact with the Uniswap Router contract, and gets the most important functions of the contract. It&#39;s based on https://github.com/Uniswap/v2-periphery/blob/master/contracts/interfaces/IUniswapV2Router01.sol*

## Methods

### getAmountsIn

```solidity
function getAmountsIn(uint256 amountOut, address[] path) external view returns (uint256[] amounts)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amountOut | uint256 | undefined |
| path | address[] | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| amounts | uint256[] | undefined |

### getAmountsOut

```solidity
function getAmountsOut(uint256 amountIn, address[] path) external view returns (uint256[] amounts)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amountIn | uint256 | undefined |
| path | address[] | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| amounts | uint256[] | undefined |

### swapExactETHForTokens

```solidity
function swapExactETHForTokens(uint256 amountOutMin, address[] path, address to, uint256 deadline) external payable returns (uint256[] amounts)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amountOutMin | uint256 | undefined |
| path | address[] | undefined |
| to | address | undefined |
| deadline | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| amounts | uint256[] | undefined |

### swapExactTokensForETH

```solidity
function swapExactTokensForETH(uint256 amountIn, uint256 amountOutMin, address[] path, address to, uint256 deadline) external nonpayable returns (uint256[] amounts)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amountIn | uint256 | undefined |
| amountOutMin | uint256 | undefined |
| path | address[] | undefined |
| to | address | undefined |
| deadline | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| amounts | uint256[] | undefined |

### swapExactTokensForTokens

```solidity
function swapExactTokensForTokens(uint256 amountIn, uint256 amountOutMin, address[] path, address to, uint256 deadline) external nonpayable returns (uint256[] amounts)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amountIn | uint256 | undefined |
| amountOutMin | uint256 | undefined |
| path | address[] | undefined |
| to | address | undefined |
| deadline | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| amounts | uint256[] | undefined |




