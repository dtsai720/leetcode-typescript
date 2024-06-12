import { LowerBound } from "./common";

/**
 * Special Array With X Elements Greater Than or Equal X
 * @param nums Array of numbers.
 * @returns An integer x such that x is the minimum possible value of x.
 * @description An array is special if there are x elements that are greater than or equal to x.
 */
function SpecialArrayWithXElementsGreaterThanOrEqualX(nums: number[]): number {
    if (nums.length == 0) return -1;

    nums.sort();
    let min_value = 0,
        max_value = nums[nums.length - 1];
    while (min_value < max_value) {
        let mid = min_value + Math.floor((max_value - min_value) / 2);
        let idx = LowerBound(nums, mid);

        if (nums.length - idx == mid) return mid;
        if (nums.length - idx > mid) min_value = mid + 1;
        else max_value = mid - 1;
    }

    return -1;
}

export { SpecialArrayWithXElementsGreaterThanOrEqualX };
