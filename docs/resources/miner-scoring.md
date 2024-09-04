---
id: miner-scoring
title: Miner Scoring System
---

# Understanding the Masa Network's Miner Scoring System

Masa's SN42 uses a sophisticated scoring system to evaluate and reward miners based on their tweet volume. This system incentivizes consistent and valuable contributions while discouraging extreme fluctuations or gaming attempts.

## The Kurtosis-Based Scoring Function

At the core of our scoring system is the `kurtosis_based_score` function. Here's how it works:

1. **Measuring Relative Performance**: Compare each miner's tweet volume to the average volume of all miners.
2. **Standardization**: Use z-score to standardize comparisons.
3. **Probability Transformation**: Convert z-score to probability using a normal distribution curve.

:::info
The probability transformation "squishes" extreme values towards the middle, reducing the impact of outliers.
:::

## Advantages of This Approach

- **Fairness**: Accounts for network-wide trends.
- **Consistency Rewarded**: Consistent above-average performers score well.
- **Outlier Management**: Extremely high volumes don't result in proportionally high scores.
- **Adaptability**: Automatically adjusts to changing network conditions.

## In Practice

Consider three miners:

1. **Average Alice**: Volume at network average.
2. **Consistent Carl**: Always about 20% above average.
3. **Sporadic Sam**: Fluctuates wildly, sometimes 5x average, sometimes near zero.

:::tip
Our scoring system would likely rank them: Carl > Alice > Sam. Carl's consistency is rewarded, while Sam's extreme fluctuations are dampened.
:::

## Security Considerations

- The system is designed to be manipulation-resistant.
- The scoring mechanism naturally discourages extreme fluctuations in tweet volume.
- The scoring system is designed to be transparent and verifiable, with all scores and calculations being made public.
- Validators spot check miners tweets using tweet IDs against the Twitter API to ensure the tweets are real and not duplicate tweets.
- Organic tweets are currently not scored.

:::warning
Attempts to game the system through sporadic bursts of activity are unlikely to result in high scores. Additionaly validators spot check miners tweets using tweet IDs against the Twitter API to ensure the tweets are real and not duplicate tweets.
:::

## Conclusion

This scoring mechanism balances rewarding high performance with maintaining a fair system. It encourages miners to strive for consistent, above-average contributions rather than sporadic bursts of activity.

:::note
By using this approach, the Masa Network aims to create a stable, reliable ecosystem where genuine value creation is recognized and rewarded.
:::

For more information on miner operations, refer to:

- [Miner Setup Guide](../masa-subnet/miner/0-intro.md)
- [Protocol Setup Guide](../masa-protocol/protocol-digital-ocean-setup.md)
