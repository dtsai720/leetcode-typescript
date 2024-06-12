import { CoinChangeII } from "../src/coin_change_ii";

describe("CoinChangeII", () => {
    it("test case I", () => {
        let result = CoinChangeII([1, 2, 5], 5);
        let expected = 4;
        expect(result).toStrictEqual(expected);
    });

    it("test case II", () => {
        let result = CoinChangeII([2], 3);
        let expected = 0;
        expect(result).toStrictEqual(expected);
    });

    it("test case III", () => {
        let result = CoinChangeII([10], 10);
        let expected = 1;
        expect(result).toStrictEqual(expected);
    });
});
