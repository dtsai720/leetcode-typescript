import { CountTripletsThatCanFormTwoArraysOfEqualXor } from "../src/count_triplets_that_can_form_two_arrays_of_equal_xor";

describe("CountTripletsThatCanFormTwoArraysOfEqualXor", () => {
    test("Test case 1", () => {
        const result = CountTripletsThatCanFormTwoArraysOfEqualXor([
            2, 3, 1, 6, 7,
        ]);
        const expected = 4;
        expect(result).toStrictEqual(expected);
    });

    test("Test case 2", () => {
        const result = CountTripletsThatCanFormTwoArraysOfEqualXor([
            1, 1, 1, 1, 1,
        ]);
        const expected = 10;
        expect(result).toStrictEqual(expected);
    });
});
