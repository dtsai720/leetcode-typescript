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
     * Get the current node
     * @returns current node
     */
    currentNode(): Trie {
        return this;
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
        let node: Trie = this.currentNode();
        for (const c of word) {
            if (!node.children.has(c)) {
                node.children.set(c, new Trie());
            }
            const childNode = node.children.get(c);
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
        let node: Trie = this.currentNode();
        for (let i = 0; i < word.length; i++) {
            const c = word[i];
            const childNode = node.children.get(c);
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
    const trie = new Trie();
    for (const word of dictionary) {
        trie.insert(word);
    }
    const output: string[] = [];
    for (const word of sentence.split(" ")) {
        output.push(trie.getRoot(word));
    }

    return output.join(" ");
}

export { replaceWords };
