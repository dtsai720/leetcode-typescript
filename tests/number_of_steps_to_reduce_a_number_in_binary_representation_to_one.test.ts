import { NumberOfStepsToReduceANumberInBinaryRepresentationToOne } from "../src/number_of_steps_to_reduce_a_number_in_binary_representation_to_one";

describe("NumberOfStepsToReduceANumberInBinaryRepresentationToOne", () => {
    it("test case 1", () => {
        const result =
            NumberOfStepsToReduceANumberInBinaryRepresentationToOne("1101");
        const expected = 6;
        expect(result).toStrictEqual(expected);
    });

    it("test case 2", () => {
        const result =
            NumberOfStepsToReduceANumberInBinaryRepresentationToOne("10");
        const expected = 1;
        expect(result).toStrictEqual(expected);
    });

    it("test case 3", () => {
        const result =
            NumberOfStepsToReduceANumberInBinaryRepresentationToOne("1");
        const expected = 0;
        expect(result).toStrictEqual(expected);
    });
});
