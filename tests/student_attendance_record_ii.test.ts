import { StudentAttendanceRecordII } from "../src/student_attendance_record_ii";

describe("StudentAttendanceRecordII", () => {
    it("example 1", () => {
        const output = StudentAttendanceRecordII(2);
        const expected = 8;
        expect(output).toStrictEqual(expected);
    });

    it("example 2", () => {
        const output = StudentAttendanceRecordII(1);
        const expected = 3;
        expect(output).toStrictEqual(expected);
    });

    it("example 3", () => {
        const output = StudentAttendanceRecordII(10101);
        const expected = 183236316;
        expect(output).toStrictEqual(expected);
    });
});
