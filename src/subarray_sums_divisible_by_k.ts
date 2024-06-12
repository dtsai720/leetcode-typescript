/**
 * Subarray Sums Divisible by K
 * Given an array A of integers, return the number of (contiguous, non-empty) subarrays
 * that have a sum divisible by K.
 *
 * @param nums array of integers
 * @param k integer
 * @returns number of subarrays that have a sum divisible by K
 */
function SubarraySumsDivisibleByK(nums: number[], k: number): number {
    let output = 0;
    let sum = 0;
    let array = new Array(k).fill(0);
    array[0] = 1;
    for (const num of nums) {
        sum = (sum + (num % k) + k) % k;
        output += array[sum];
        array[sum]++;
    }

    return output;
}

export { SubarraySumsDivisibleByK };
