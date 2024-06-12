import { ContinuousSubarraySum } from "../src/continuous_subarray_sum";

describe("ContinuousSubarraySum", () => {
    it("should return true for [23, 2, 4, 6, 7] and 6", () => {
        const nums = [23, 2, 4, 6, 7];
        const k = 6;
        const result = ContinuousSubarraySum(nums, k);
        expect(result).toBe(true);
    });

    it("should return true for [23, 2, 6, 4, 7] and 6", () => {
        const nums = [23, 2, 6, 4, 7];
        const k = 6;
        const result = ContinuousSubarraySum(nums, k);
        expect(result).toBe(true);
    });

    it("should return false for [23, 2, 6, 4, 7] and 13", () => {
        const nums = [23, 2, 6, 4, 7];
        const k = 13;
        const result = ContinuousSubarraySum(nums, k);
        expect(result).toBe(false);
    });
});
