/**
 * You are given two integer arrays students and mentors. Each students[i] is a binary array of length n,
 * which represents the answers of the ith student (0-indexed).
 * Each mentors[j] is a binary array of length n, which represents the answers of the jth mentor (0-indexed).
 *
 * @param students 2D integer array where students[i] is an integer array that contains the answers of
 * the ith student (0-indexed).
 * @param mentors 2D integer array where mentors[j] is an integer array that contains the answers of
 * the jth mentor (0-indexed).
 * @returns the maximum compatibility score sum that can be achieved.
 */
function MaximumCompatibilityScoreSum(
    students: number[][],
    mentors: number[][]
): number {
    if (students.length != mentors.length) {
        throw new Error("Students and mentors must have the same length");
    }

    let array: number[][] = Array.from({ length: students.length }, () =>
        Array(students.length).fill(0)
    );

    for (let x = 0; x < students.length; x++) {
        for (let y = 0; y < students.length; y++) {
            if (students[x].length != mentors[y].length) {
                throw new Error(
                    "Students and mentors must have the same length"
                );
            }

            for (let z = 0; z < students[0].length; z++) {
                array[x][y] += students[x][z] == mentors[y][z] ? 1 : 0;
            }
        }
    }

    let visited: boolean[] = Array(students.length).fill(false);
    let output = 0;

    const dfs = (index: number, sum: number): void => {
        if (index == students.length) {
            output = Math.max(output, sum);
            return;
        }

        for (let i = 0; i < students.length; i++) {
            if (visited[i]) continue;

            visited[i] = true;
            dfs(index + 1, sum + array[index][i]);
            visited[i] = false;
        }
    };

    dfs(0, 0);

    return output;
}

export { MaximumCompatibilityScoreSum };
