import { BinarySearch } from "./common";

/**
 * The number of beautiful subsets
 * @param nums The input array
 * @param k The input number
 * @returns The number of beautiful subsets
 */
function TheNumberOfBeautifulSubset(nums: number[], k: number): number {
    nums.sort();

    const f = (idx: number, array: number[]): number => {
        if (idx == nums.length) return 0;
        let count = f(idx + 1, array);

        if (BinarySearch(array, nums[idx] - k) == -1) {
            array.push(nums[idx]);
            count += 1 + f(idx + 1, array);
            array.pop();
        }

        return count;
    };

    return f(0, []);
}

export { TheNumberOfBeautifulSubset };
