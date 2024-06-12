import { SingleNumberIII } from "../src/single_number_iii";

describe("SingleNumberIII", () => {
    it("test case I", () => {
        let result = SingleNumberIII([1, 2, 1, 3, 2, 5]);
        let expected = [3, 5];
        result.sort();
        expect(result).toStrictEqual(expected);
    });

    it("test case II", () => {
        let result = SingleNumberIII([-1, 0]);
        let expected = [-1, 0];
        result.sort();
        expect(result).toStrictEqual(expected);
    });

    it("test case III", () => {
        let result = SingleNumberIII([0, 1]);
        let expected = [0, 1];
        result.sort();
        expect(result).toStrictEqual(expected);
    });
});
