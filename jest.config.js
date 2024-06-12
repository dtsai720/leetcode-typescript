module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    roots: ["<rootDir>"],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testMatch: ["**/tests/*.test.ts"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    coverageReporters: ["text", "lcov", "cobertura"],
    coverageDirectory: "<rootDir>/coverage",
};
