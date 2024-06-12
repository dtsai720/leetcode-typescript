/**
 * Given a list of non-negative numbers and a target integer k, write a function to check
 * if the array has a continuous subarray of size at least 2 that sums up to a multiple of k,
 * that is, sums up to n*k where n is also an integer.
 *
 * @param nums
 * @param k
 * @returns boolean
 */
function ContinuousSubarraySum(nums: number[], k: number): boolean {
    let sum = 0;
    let set = new Set<number>();
    for (let num of nums) {
        sum = (sum + num) % k;
        if (set.has(sum)) return true;
        set.add((((sum - num) % k) + k) % k);
    }

    return false;
}

export { ContinuousSubarraySum };
