import { SingleNumberIII } from "../src/single_number_iii";

describe("SingleNumberIII", () => {
    it("test case I", () => {
        const result = SingleNumberIII([1, 2, 1, 3, 2, 5]);
        const expected = [3, 5];
        result.sort();
        expect(result).toStrictEqual(expected);
    });

    it("test case II", () => {
        const result = SingleNumberIII([-1, 0]);
        const expected = [-1, 0];
        result.sort();
        expect(result).toStrictEqual(expected);
    });

    it("test case III", () => {
        const result = SingleNumberIII([0, 1]);
        const expected = [0, 1];
        result.sort();
        expect(result).toStrictEqual(expected);
    });
});
