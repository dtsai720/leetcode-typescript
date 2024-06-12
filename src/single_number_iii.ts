/**
 * Given an integer array nums, in which exactly two elements appear only once
 * and all the other elements appear exactly twice.
 * Find the two elements that appear only once. You can return the answer in any order.
 *
 * @param nums
 * @returns An array containing the two elements that appear only once.
 */
function SingleNumberIII(nums: number[]): number[] {
    let myset = new Set<number>();
    for (let num of nums) {
        if (myset.has(num)) {
            myset.delete(num);
        } else {
            myset.add(num);
        }
    }

    return Array.from(myset);
}

export { SingleNumberIII };
