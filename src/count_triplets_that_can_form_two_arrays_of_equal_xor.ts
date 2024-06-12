/**
 * Count Triplets That Can Form Two Arrays of Equal XOR.
 * Given an array of integers nums.
 * A triplet (i, j, k) is good if the following conditions are true:
 * 0 <= i < j < k < nums.length
 * nums[i] ^ nums[i + 1] ^ ... ^ nums[j - 1] == nums[j] ^ nums[j + 1] ^ ... ^ nums[k]
 * Return the number of good triplets.
 *
 * @param nums array of integers
 * @returns number of triplets that can form two arrays of equal XOR
 */
function CountTripletsThatCanFormTwoArraysOfEqualXor(nums: number[]): number {
    let output = 0,
        current = 0;
    const cnt: Record<number, number> = { 0: 1 },
        total: Record<number, number> = { 0: 0 };
    for (let i = 0; i < nums.length; i++) {
        current ^= nums[i];
        if (current in cnt) {
            output += cnt[current] * i - total[current];
        }

        cnt[current] = (cnt[current] || 0) + 1;
        total[current] = (total[current] || 0) + i + 1;
    }

    return output;
}

export { CountTripletsThatCanFormTwoArraysOfEqualXor };
