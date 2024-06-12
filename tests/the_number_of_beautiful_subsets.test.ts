import { TheNumberOfBeautifulSubset } from "../src/the_number_of_beautiful_subsets";

describe("TheNumberOfBeautifulSubset", () => {
    it("example 1", () => {
        const output = TheNumberOfBeautifulSubset([2, 4, 6], 2);
        const expected = 4;
        expect(output).toStrictEqual(expected);
    });

    it("example 2", () => {
        const output = TheNumberOfBeautifulSubset([1], 1);
        const expected = 1;
        expect(output).toStrictEqual(expected);
    });
});
