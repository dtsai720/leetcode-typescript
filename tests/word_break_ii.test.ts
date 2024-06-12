import { WordBreakII } from "../src/word_break_ii";

describe("WordBreakII", () => {
    it("example 1", () => {
        let output = WordBreakII("catsanddog", [
            "cat",
            "cats",
            "and",
            "sand",
            "dog",
        ]);
        let expected = ["cat sand dog", "cats and dog"];
        output.sort();
        expected.sort();

        expect(output).toStrictEqual(expected);
    });

    it("example 2", () => {
        let output = WordBreakII("pineapplepenapple", [
            "apple",
            "pen",
            "applepen",
            "pine",
            "pineapple",
        ]);
        let expected = [
            "pine apple pen apple",
            "pine applepen apple",
            "pineapple pen apple",
        ];
        output.sort();
        expected.sort();

        expect(output).toStrictEqual(expected);
    });

    it("example 3", () => {
        let output = WordBreakII("catsandog", [
            "cats",
            "dog",
            "sand",
            "and",
            "cat",
        ]);
        let expected: string[] = [];
        expect(output).toStrictEqual(expected);
    });
});
