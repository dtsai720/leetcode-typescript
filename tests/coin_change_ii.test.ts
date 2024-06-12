import { CoinChangeII } from "../src/coin_change_ii";

describe("CoinChangeII", () => {
    it("test case I", () => {
        const result = CoinChangeII([1, 2, 5], 5);
        const expected = 4;
        expect(result).toStrictEqual(expected);
    });

    it("test case II", () => {
        const result = CoinChangeII([2], 3);
        const expected = 0;
        expect(result).toStrictEqual(expected);
    });

    it("test case III", () => {
        const result = CoinChangeII([10], 10);
        const expected = 1;
        expect(result).toStrictEqual(expected);
    });
});
