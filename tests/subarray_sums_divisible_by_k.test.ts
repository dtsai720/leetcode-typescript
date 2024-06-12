import { SubarraySumsDivisibleByK } from "../src/subarray_sums_divisible_by_k";

describe("SubarraySumsDivisibleByK", () => {
    it("Example 1", () => {
        const expected = 7;
        const input = [4, 5, 0, -2, -3, 1];
        const result = SubarraySumsDivisibleByK(input, 5);
        expect(result).toStrictEqual(expected);
    });

    it("Example 2", () => {
        const expected = 0;
        const input = [5];
        const result = SubarraySumsDivisibleByK(input, 9);
        expect(result).toStrictEqual(expected);
    });
});
