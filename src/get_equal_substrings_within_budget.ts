/**
 * Given two strings s and t, find the maximum length of a substring of s that can be changed to be equal to t.
 * @param s string
 * @param t string
 * @param maxCost number
 * @returns number
 */
function GetEqualSubstringsWithinBudget(
    s: string,
    t: string,
    maxCost: number
): number {
    if (s.length != t.length)
        throw new Error("s and t must have the same length");

    let maxLen = 0;
    for (let fast = 0, slow = -1; fast < s.length; fast++) {
        maxCost -= Math.abs(s.charCodeAt(fast) - t.charCodeAt(fast));

        while (maxCost < 0) {
            slow++;
            maxCost += Math.abs(s.charCodeAt(slow) - t.charCodeAt(slow));
        }

        maxLen = Math.max(maxLen, fast - slow);
    }

    return maxLen;
}

export { GetEqualSubstringsWithinBudget };
