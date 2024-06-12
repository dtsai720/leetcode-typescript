import { HandOfStraights } from "../src/hand_of_straights";

describe("HandOfStraights", () => {
    it("Example 1", () => {
        expect(HandOfStraights([1, 2, 3, 6, 2, 3, 4, 7, 8], 3)).toBe(true);
    });

    it("Example 2", () => {
        expect(HandOfStraights([1, 2, 3, 4, 5], 4)).toBe(false);
    });
});
