---
id: staking-guide
title: Staking Guide for Masa Oracle Node
---

This guide provides a comprehensive guide on how to stake tokens on the Masa Oracle Node. Staking is a crucial process for participating in the network and securing it. Follow the steps below to stake your tokens successfully.

## Prerequisites

Before you begin the staking process, ensure you have:

- Cloned the Masa Oracle Node repository to your local machine.
- Installed all the necessary dependencies as outlined in the project's README.
- Successfully built the Masa Oracle Node executable.

## How to Stake

Staking on the Masa Oracle Node involves specifying the amount of tokens you wish to stake and using the staking functionality built into the node. Here's how to do it:

1. **Open a Terminal:** Navigate to the directory where the Masa Oracle Node is located.

2. **Execute the Staking Command:** Use the following command to initiate staking:

   ```bash
   ./masa-oracle-node --stake <amount>
   ```

   Replace `<amount>` with the number of tokens you want to stake. For example, to stake 1000 tokens:
  
   ```bash
   ./masa-oracle-node --stake 1000
   ```

3. **Verify the Transaction:** After executing the staking command, the node will process the staking transaction. Ensure that the transaction is successfully completed by checking the transaction hash provided in the output.

## Configuration Options for Staking

The staking amount can be configured using one of the following methods, listed in order of precedence:

- **Command-Line Flag:** `--stake <amount>`
- **Environment Variable:** Set `STAKE_AMOUNT` in your environment or `.env` file.
- **Configuration File:** Add `StakeAmount: <amount>` in the `config.yaml` file.

Ensure the staking amount is correctly set using one of these methods before initiating the staking process.

## Conclusion

Staking tokens on the Masa Oracle Node is a straightforward process that can be accomplished by following the steps outlined in this guide. If you encounter any issues or have questions, consult the project's documentation or contact the development team for assistance.
