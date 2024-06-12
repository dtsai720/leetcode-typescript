/**
 * @brief A doubly linked list node
 * @details The node contains a key-value pair and pointers to the previous and next nodes.
 *         The key is used to identify the node in the cache.
 *        The value is the value associated with the key.
 *       The prev pointer points to the previous node in the list.
 *     The next pointer points to the next node in the list.
 *   The node is used in the least recently used (LRU) cache.
 * @param key The key of the node
 * @param value The value of the node
 * @param prev The previous node in the list
 * @param next The next node in the list
 * @return The doubly linked list node
 */
class DListNode {
    public key: number;
    public value: number;
    public prev: DListNode | null;
    public next: DListNode | null;

    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

/**
 * @brief A least recently used (LRU) cache
 * @details The cache has a fixed capacity and will evict the least recently used
 *         item when the capacity is exceeded.
 */
class LRUCache {
    private capacity: number;
    private head: DListNode;
    private tail: DListNode;
    private cache: Record<number, DListNode>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.head = new DListNode(0, 0);
        this.tail = new DListNode(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.cache = {};
    }

    /**
     * @brief Add a node to the end of the list
     * @param node The node to add
     */
    addNode(node: DListNode) {
        let prev = this.tail.prev;
        if (prev === null) {
            throw new Error("prev is null");
        }

        prev.next = node;
        node.prev = prev;
        node.next = this.tail;
        this.tail.prev = node;
    }

    /**
     * @brief Remove a node from the list
     * @param node The node to remove
     */
    removeNode(node: DListNode) {
        let prev = node.prev;
        let next = node.next;

        if (prev === null || next === null) {
            throw new Error("prev or next is null");
        }

        prev.next = next;
        next.prev = prev;
    }

    /**
     * @brief Get the value of a key
     * @param key The key to get
     * @returns The value of the key, -1 if the key is not found
     */
    get(key: number): number {
        if (key in this.cache) {
            const node = this.cache[key];
            this.removeNode(node);
            this.addNode(node);
            return node.value;
        }

        return -1;
    }

    /**
     * @brief Put a key-value pair into the cache
     * @param key The key to put
     * @param value The value to put
     */
    put(key: number, value: number): void {
        if (key in this.cache) {
            let node = this.cache[key];
            this.removeNode(node);
        } else if (Object.keys(this.cache).length == this.capacity) {
            const node = this.head.next;
            if (node === null) {
                throw new Error("node is null");
            }

            this.removeNode(node);
            delete this.cache[node.key];
        }

        const node = new DListNode(key, value);
        this.cache[key] = node;
        this.addNode(node);
    }
}

export { LRUCache };
