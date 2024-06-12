import { SpecialArrayWithXElementsGreaterThanOrEqualX } from "../src/special_array_with_x_elements_greater_than_or_equal_x";

describe("SpecialArrayWithXElementsGreaterThanOrEqualX", () => {
    it("example 1", () => {
        const output = SpecialArrayWithXElementsGreaterThanOrEqualX([3, 5]);
        const expected = 2;
        expect(output).toStrictEqual(expected);
    });

    it("example 2", () => {
        const output = SpecialArrayWithXElementsGreaterThanOrEqualX([0, 0]);
        const expected = -1;
        expect(output).toStrictEqual(expected);
    });

    it("example 3", () => {
        const output = SpecialArrayWithXElementsGreaterThanOrEqualX([
            0, 4, 3, 0, 4,
        ]);
        const expected = 3;
        expect(output).toStrictEqual(expected);
    });
});
