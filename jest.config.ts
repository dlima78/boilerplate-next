import type { Config } from 'jest'

const config: Config = {
  clearMocks: true,
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageProvider: 'v8',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  }
}

export default config
