
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
    'roots': [
        '<rootDir>/src'
    ],
    "testEnvironment": "jsdom",
    'transform': {
        '.*.tsx?$': 'ts-jest'
    },
    'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    'moduleFileExtensions': [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node'
    ],
    "moduleNameMapper": pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
}
