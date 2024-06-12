import { replaceWords } from "../src/replace_words";

describe("Replace Words", () => {
    test("Test case 1", () => {
        const dictionary = ["cat", "bat", "rat"];
        const sentence = "the cattle was rattled by the battery";
        const output = replaceWords(dictionary, sentence);
        const expected = "the cat was rat by the bat";
        expect(output).toStrictEqual(expected);
    });

    test("Test case 2", () => {
        const dictionary = ["a", "b", "c"];
        const sentence = "aadsfasf absbs bbab cadsfafs";
        const output = replaceWords(dictionary, sentence);
        const expected = "a a b c";
        expect(output).toStrictEqual(expected);
    });
});
