/**
 * Coin Change II.
 * You are given an integer array coins representing coins of different denominations and
 * an integer amount representing a total amount of money.
 * Return the number of combinations that make up that amount. If that amount of money cannot be made up by
 * any combination of the coins, return 0.
 * You may assume that you have an infinite number of each kind of coin.
 * The answer is guaranteed to fit into a signed 32-bit integer.
 *
 * @param coins Array of coins.
 * @param amount Amount of money.
 * @returns Number of combinations that make up that amount.
 */
function CoinChangeII(coins: number[], amount: number): number {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin];
        }
    }

    return dp[amount];
}

export { CoinChangeII };
