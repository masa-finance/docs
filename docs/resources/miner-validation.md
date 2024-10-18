---
id: miner-validation
title: Miner Validation
---

# Validating Miner Work

:::tip
Masa's SN42 uses a sophisticated validation system to evaluate the work of miners, and validate that they are acting in a benevolent fashion
:::

## Explanation

Validators on the Masa Subnet utilize the **[Masa SDK](https://pypi.org/project/masa-ai/)** to validate the work of miners. They randomly spot check miner data to ensure that it is accurate, and relevant to the validator's initial request. In the case of Twitter data, this means:

1. Randomly selecting a tweet from a miner's response

2. Validating that the tweet does indeed exist on Twitter

3. Ensuring the query requested is present in the tweet

4. Confirming the tweet was posted within the requested time range (today)

:::note
If a miner does _not_ pass the spot check, they are assumed malicious and are given a score of 0.
:::

:::note
If a miner _does_ pass the spot check, the validator then goes through each "Tweet" of the miner's repsponse, and validates that it _looks like_ a Tweet. Validators use an `all-MiniLM-L6-v2` LLM model to confirm that each Tweet passes a similiarity test, i.e. looks similar enough to an example Tweet. Only those Tweets that pass are considered valid.
:::

## Conclusion

This validation mechanism ensures that miners are acting in a benevolent manner. It encourages miners to scrape live, accurate data and submit it to the network.

:::note
By using this approach, the Masa Network aims to create a stable, reliable ecosystem where genuine value creation is recognized and rewarded.
:::

For more information on miner operations, refer to:

- [Miner Setup Guide](../masa-subnet/miner/0-intro.md)
- [Protocol Setup Guide](../masa-protocol/protocol-digital-ocean-setup.md)
