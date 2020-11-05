// jest.config.js
module.exports = {
    roots: ['<rootDir>'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
    testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next|coverage|.vscode)[/\\\\]'],
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
    transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest',
    },
    watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    },
    coverageDirectory: "coverage",
    collectCoverageFrom: [
        '<rootDir>/**/*.{ts, tsx}',
        //     "lib/**",
        //     "pages/**",
        //     "public/**",
        //     "posts/**",
        //     "styles/**",
    ],
    // roots: ['<rootDir>'],
    // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx)$',
    // coveragePathIgnorePatterns: [
    //     "/node_modules",
    //     "**/test.ts",
    //     "**/test.tsx",
    //     "**/test/*",
    // ],
    collectCoverage: true,
    coverageReporters: [
        "lcov",
        "text-summary",
        "json-summary"
    ]
}