import { GetEqualSubstringsWithinBudget } from "../src/get_equal_substrings_within_budget";

describe("GetEqualSubstringsWithinBudget", () => {
    test("Example 1", () => {
        const output = GetEqualSubstringsWithinBudget("abcd", "bcdf", 3);
        const expected = 3;
        expect(output).toStrictEqual(expected);
    });

    test("Example 2", () => {
        const output = GetEqualSubstringsWithinBudget("abcd", "cdef", 3);
        const expected = 1;
        expect(output).toStrictEqual(expected);
    });

    test("Example 3", () => {
        const output = GetEqualSubstringsWithinBudget("abcd", "acde", 0);
        const expected = 1;
        expect(output).toStrictEqual(expected);
    });
});
