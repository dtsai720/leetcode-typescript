import { WordBreakII } from "../src/word_break_ii";

describe("WordBreakII", () => {
    it("example 1", () => {
        const output = WordBreakII("catsanddog", [
            "cat",
            "cats",
            "and",
            "sand",
            "dog",
        ]);
        const expected = ["cat sand dog", "cats and dog"];
        output.sort();
        expected.sort();

        expect(output).toStrictEqual(expected);
    });

    it("example 2", () => {
        const output = WordBreakII("pineapplepenapple", [
            "apple",
            "pen",
            "applepen",
            "pine",
            "pineapple",
        ]);
        const expected = [
            "pine apple pen apple",
            "pine applepen apple",
            "pineapple pen apple",
        ];
        output.sort();
        expected.sort();

        expect(output).toStrictEqual(expected);
    });

    it("example 3", () => {
        const output = WordBreakII("catsandog", [
            "cats",
            "dog",
            "sand",
            "and",
            "cat",
        ]);
        const expected: string[] = [];
        expect(output).toStrictEqual(expected);
    });
});
