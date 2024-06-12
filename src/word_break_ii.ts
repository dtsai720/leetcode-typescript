/**
Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence
where each word is a valid dictionary word. Return all such possible sentences in any order.
 * @param s {string} The input string.
 * @param words {string[]} The dictionary of strings.
 * @return {string[]} All possible sentences.
*/
function WordBreakII(s: string, words: string[]): string[] {
    const output: string[] = [];
    const dict: Set<string> = new Set(words);
    const sizes: Set<number> = new Set();
    for (const word of words) {
        sizes.add(word.length);
    }

    const f = (idx: number, array: string[]) => {
        if (idx === s.length) {
            output.push(array.join(" "));
            return;
        }

        for (const size of sizes) {
            const word = s.slice(idx, idx + size);
            if (dict.has(word)) {
                f(idx + size, [...array, word]);
            }
        }
    };

    f(0, []);

    return output;
}

export { WordBreakII };
