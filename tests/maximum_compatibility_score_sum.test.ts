import { MaximumCompatibilityScoreSum } from "../src/maximum_compatibility_score_sum";

describe("MaximumCompatibilityScoreSum", () => {
    test("Test case 1", () => {
        const students = [
            [1, 1, 0],
            [1, 0, 1],
            [0, 0, 1],
        ];
        const mentors = [
            [1, 0, 0],
            [0, 0, 1],
            [1, 1, 0],
        ];
        const result = MaximumCompatibilityScoreSum(students, mentors);
        expect(result).toStrictEqual(8);
    });

    test("Test case 2", () => {
        const students = [
            [0, 0],
            [0, 0],
            [0, 0],
        ];
        const mentors = [
            [1, 1],
            [1, 1],
            [1, 1],
        ];
        const result = MaximumCompatibilityScoreSum(students, mentors);
        expect(result).toStrictEqual(0);
    });
});
