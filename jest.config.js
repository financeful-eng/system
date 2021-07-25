module.exports = {
  roots: ['<rootDir>/src/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: { '\\.(css|less)$': 'identity-obj-proxy' },
  testEnvironment: 'jsdom',
  // This tells jest to use the exports from src/utils/teste-utils.tsx
  moduleDirectories: ['utils', __dirname, 'node_modules'],
};
