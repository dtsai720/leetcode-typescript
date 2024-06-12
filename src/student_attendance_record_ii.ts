/**
 * Given a positive integer n, return the number of all possible attendance records with length n,
 * which will be regarded as rewardable. The answer may be very large, return it after mod 109 + 7.
 * @param n The length of the attendance record.
 * @return The number of all possible attendance records with length n.
 */
function StudentAttendanceRecordII(n: number): number {
    const MOD = 1e9 + 7;
    const MaxAbsent = 2;
    const MaxLate = 3;
    let dp: number[][][] = Array.from({ length: n + 1 }, () =>
        Array.from({ length: MaxAbsent }, () =>
            Array.from({ length: MaxLate }, () => 0)
        )
    );
    dp[0][0][0] = 1;

    for (let i = 0; i < n; i++) {
        for (let absent = 0; absent < MaxAbsent; absent++) {
            for (let late = 0; late < MaxLate; late++) {
                dp[i + 1][absent][0] =
                    (dp[i + 1][absent][0] + dp[i][absent][late]) % MOD;

                if (absent < 1) {
                    dp[i + 1][absent + 1][0] =
                        (dp[i + 1][absent + 1][0] + dp[i][absent][late]) % MOD;
                }
                if (late < 2) {
                    dp[i + 1][absent][late + 1] =
                        (dp[i + 1][absent][late + 1] + dp[i][absent][late]) %
                        MOD;
                }
            }
        }
    }

    let output = 0;
    for (let absent = 0; absent < MaxAbsent; absent++) {
        for (let late = 0; late < MaxLate; late++) {
            output = (output + dp[n][absent][late]) % MOD;
        }
    }

    return output;
}

export { StudentAttendanceRecordII };
