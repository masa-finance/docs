# PaymentGateway

*Masa Finance*

> Pay using a Decentralized automated market maker (AMM) when needed

Smart contract to call a Dex AMM smart contract to pay to a project fee receiver wallet recipient

*This smart contract will call the Uniswap Router interface, based on https://github.com/Uniswap/v2-periphery/blob/master/contracts/interfaces/IUniswapV2Router01.sol*

## Methods

### DEFAULT_ADMIN_ROLE

```solidity
function DEFAULT_ADMIN_ROLE() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### PROJECT_ADMIN_ROLE

```solidity
function PROJECT_ADMIN_ROLE() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### disablePaymentMethod

```solidity
function disablePaymentMethod(address _paymentMethod) external nonpayable
```

Removes a token as a valid payment method

*The caller must have the admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _paymentMethod | address | Token to remove |

### enablePaymentMethod

```solidity
function enablePaymentMethod(address _paymentMethod) external nonpayable
```

Adds a new token as a valid payment method

*The caller must have the admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _paymentMethod | address | New token to add |

### enabledPaymentMethod

```solidity
function enabledPaymentMethod(address) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### enabledPaymentMethods

```solidity
function enabledPaymentMethods(uint256) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getEnabledPaymentMethods

```solidity
function getEnabledPaymentMethods() external view returns (address[])
```

Returns all available payment methods

*Returns the address of all available payment methods*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address[] | Array of all enabled payment methods |

### getProtocolFee

```solidity
function getProtocolFee(address paymentMethod, uint256 amount) external view returns (uint256)
```

Calculates the protocol fee added to the project fee

*This method will calculate the protocol fee based on the payment method*

#### Parameters

| Name | Type | Description |
|---|---|---|
| paymentMethod | address | Address of token that user want to pay |
| amount | uint256 | Price to be paid in the specified payment method |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getProtocolFeeSub

```solidity
function getProtocolFeeSub(uint256 amount) external view returns (uint256)
```

Calculates the protocol fee substracted from the amount

*This method will calculate the protocol fee based on the payment method*

#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | Price to be paid in the specified payment method |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getRoleAdmin

```solidity
function getRoleAdmin(bytes32 role) external view returns (bytes32)
```



*Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role&#39;s admin, use {_setRoleAdmin}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### grantRole

```solidity
function grantRole(bytes32 role, address account) external nonpayable
```



*Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``&#39;s admin role. May emit a {RoleGranted} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |
| account | address | undefined |

### hasRole

```solidity
function hasRole(bytes32 role, address account) external view returns (bool)
```



*Returns `true` if `account` has been granted `role`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |
| account | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### masaToken

```solidity
function masaToken() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### projectFeeReceiver

```solidity
function projectFeeReceiver() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### protocolFeeAmount

```solidity
function protocolFeeAmount() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### protocolFeePercent

```solidity
function protocolFeePercent() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### protocolFeePercentSub

```solidity
function protocolFeePercentSub() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### protocolFeeReceiver

```solidity
function protocolFeeReceiver() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### renounceRole

```solidity
function renounceRole(bytes32 role, address account) external nonpayable
```



*Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function&#39;s purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`. May emit a {RoleRevoked} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |
| account | address | undefined |

### revokeRole

```solidity
function revokeRole(bytes32 role, address account) external nonpayable
```



*Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``&#39;s admin role. May emit a {RoleRevoked} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |
| account | address | undefined |

### setMasaToken

```solidity
function setMasaToken(address _masaToken) external nonpayable
```

Sets the utility token to pay the fee in (MASA)

*The caller must have the admin role to call this function It can be set to address(0) to disable paying in MASA*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _masaToken | address | New utility token to pay the fee in |

### setProjectFeeReceiver

```solidity
function setProjectFeeReceiver(address _projectFeeReceiver) external nonpayable
```

Set the project fee receiver wallet

*The caller must have the admin or project admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _projectFeeReceiver | address | New project fee receiver wallet |

### setProtocolFeeAmount

```solidity
function setProtocolFeeAmount(uint256 _protocolFeeAmount) external nonpayable
```

Set the protocol fee amount

*The caller must have the admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _protocolFeeAmount | uint256 | New protocol fee amount |

### setProtocolFeePercent

```solidity
function setProtocolFeePercent(uint256 _protocolFeePercent) external nonpayable
```

Set the protocol fee percent added to the project fee

*The caller must have the admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _protocolFeePercent | uint256 | New protocol fee percent added to the project fee |

### setProtocolFeePercentSub

```solidity
function setProtocolFeePercentSub(uint256 _protocolFeePercentSub) external nonpayable
```

Set the protocol fee percent substracted from the amount

*The caller must have the admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _protocolFeePercentSub | uint256 | New protocol fee percent substracted from the amount |

### setProtocolFeeReceiver

```solidity
function setProtocolFeeReceiver(address _protocolFeeReceiver) external nonpayable
```

Set the protocol fee wallet

*The caller must have the admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _protocolFeeReceiver | address | New protocol fee wallet |

### setStableCoin

```solidity
function setStableCoin(address _stableCoin) external nonpayable
```

Sets the stable coin to pay the fee in (USDC)

*The caller must have the admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _stableCoin | address | New stable coin to pay the fee in |

### setSwapRouter

```solidity
function setSwapRouter(address _swapRouter) external nonpayable
```

Sets the swap router address

*The caller must have the admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _swapRouter | address | New swap router address |

### setWrappedNativeToken

```solidity
function setWrappedNativeToken(address _wrappedNativeToken) external nonpayable
```

Sets the wrapped native token address

*The caller must have the admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _wrappedNativeToken | address | New wrapped native token address |

### stableCoin

```solidity
function stableCoin() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```



*See {IERC165-supportsInterface}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

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



## Events

### Pay

```solidity
event Pay(address indexed paymentMethod, uint256 amount, uint256 protocolFee)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| paymentMethod `indexed` | address | undefined |
| amount  | uint256 | undefined |
| protocolFee  | uint256 | undefined |

### RoleAdminChanged

```solidity
event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole)
```



*Emitted when `newAdminRole` is set as ``role``&#39;s admin role, replacing `previousAdminRole` `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite {RoleAdminChanged} not being emitted signaling this. _Available since v3.1._*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role `indexed` | bytes32 | undefined |
| previousAdminRole `indexed` | bytes32 | undefined |
| newAdminRole `indexed` | bytes32 | undefined |

### RoleGranted

```solidity
event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)
```



*Emitted when `account` is granted `role`. `sender` is the account that originated the contract call, an admin role bearer except when using {AccessControl-_setupRole}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role `indexed` | bytes32 | undefined |
| account `indexed` | address | undefined |
| sender `indexed` | address | undefined |

### RoleRevoked

```solidity
event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)
```



*Emitted when `account` is revoked `role`. `sender` is the account that originated the contract call:   - if using `revokeRole`, it is the admin role bearer   - if using `renounceRole`, it is the role bearer (i.e. `account`)*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role `indexed` | bytes32 | undefined |
| account `indexed` | address | undefined |
| sender `indexed` | address | undefined |



## Errors

### AlreadyAdded

```solidity
error AlreadyAdded()
```






### InvalidToken

```solidity
error InvalidToken(address token)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| token | address | undefined |

### NonExistingErc20Token

```solidity
error NonExistingErc20Token(address erc20token)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| erc20token | address | undefined |

### PaymentParamsNotSet

```solidity
error PaymentParamsNotSet()
```






### SameValue

```solidity
error SameValue()
```






### UserMustHaveProtocolOrProjectAdminRole

```solidity
error UserMustHaveProtocolOrProjectAdminRole()
```







