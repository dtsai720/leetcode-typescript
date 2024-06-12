/**
 * Given a number s in their binary representation. Return the number of steps to reduce it to
 * 1 under the following rules:
 *
 * If the current number is even, you have to divide it by 2.
 * If the current number is odd, you have to add 1 to it.
 * It's guaranteed that you can always reach to one for all testcases.
 *
 * @param s string
 * @returns number
 */
function NumberOfStepsToReduceANumberInBinaryRepresentationToOne(
    s: string
): number {
    let count = 0,
        carry = 0;
    for (let i = s.length - 1; i > 0; i--) {
        count++;
        if (s.charCodeAt(i) - "0".charCodeAt(0) + carry === 1) {
            carry = 1;
            count++;
        }
    }

    return count + carry;
}

export { NumberOfStepsToReduceANumberInBinaryRepresentationToOne };
