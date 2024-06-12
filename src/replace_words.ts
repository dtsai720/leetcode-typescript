/**
 * Trie class
 * @description - Trie class to store the words in the dictionary
 * and get the shortest prefix of the words in the dictionary
 */
class Trie {
    children: Map<string, Trie>;
    isEnd: boolean;
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }

    /**
     * Insert word into the trie
     * @param word - word to insert
     * @returns void
     * @description - insert the word into the trie
     * by creating a new node for each character in the word
     * and marking the last node as the end of the word
     */
    insert(word: string) {
        let node: Trie = this;
        for (let c of word) {
            if (!node.children.has(c)) {
                node.children.set(c, new Trie());
            }
            let childNode = node.children.get(c);
            if (childNode) {
                node = childNode;
            }
        }
        node.isEnd = true;
    }

    /**
     * Get the root of the word
     * @param word - word to get the root
     * @returns root of the word
     * @description - get the shortest prefix of the word
     * by traversing the trie and returning the prefix
     */
    getRoot(word: string): string {
        let node: Trie = this;
        for (let i = 0; i < word.length; i++) {
            let c = word[i];
            let childNode = node.children.get(c);
            if (!childNode) break;
            if (childNode.isEnd) {
                return word.slice(0, i + 1);
            }
            node = childNode;
        }

        return word;
    }
}

/**
 * Replace Words
 * @param dictionary - list of words
 * @param sentence - sentence to replace
 * @returns replaced sentence
 * @description - replace the words in the sentence with the shortest prefix of the words in the dictionary
 */
function replaceWords(dictionary: string[], sentence: string): string {
    let trie = new Trie();
    for (let word of dictionary) {
        trie.insert(word);
    }
    let output: string[] = [];
    for (let word of sentence.split(" ")) {
        output.push(trie.getRoot(word));
    }

    return output.join(" ");
}

export { replaceWords };
