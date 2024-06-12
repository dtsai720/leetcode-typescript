/**
 * @description
 * Given an array of integers nums and a positive integer k, find whether it's possible to divide
 * this array into sets of k consecutive numbers
 * Return True if its possible otherwise return False.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function HandOfStraights(nums: number[], k: number): boolean {
    if (nums.length % k !== 0) return false;
    const mp: Map<number, number> = new Map();
    nums.sort((a, b) => a - b);
    for (const num of nums) {
        mp.set(num, (mp.get(num) || 0) + 1);
    }
    for (const num of nums) {
        if (mp.get(num) === 0) continue;
        for (let i = 0; i < k; i++) {
            if ((mp.get(num + i) || 0) === 0) return false;
            mp.set(num + i, (mp.get(num + i) || 0) - 1);
        }
    }

    return true;
}

export { HandOfStraights };
