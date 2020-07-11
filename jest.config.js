module.exports = {

    testPathIgnorePatterns: ['/utils/'],
    testEnvironment: 'node',
    collectCoverage: true,
    coverageReporters: ["json", "lcov", "text", "clover"],
    testMatch: [
        "**/__tests__/**/*.spec.js"
    ]
}