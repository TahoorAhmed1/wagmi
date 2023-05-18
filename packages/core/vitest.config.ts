import path from 'path'
import { defineProject } from 'vitest/config'

// https://vitest.dev/config/
export default defineProject({
  resolve: {
    alias: {
      '@wagmi/chains': path.resolve(
        __dirname,
        '../../references/packages/chains/src',
      ),
      '@wagmi/connectors': path.resolve(
        __dirname,
        '../../references/packages/connectors/src',
      ),
      '@wagmi/test': path.resolve(__dirname, '../test/src'),
    },
  },
  test: {
    name: '@wagmi/core',
    testTimeout: 10_000,
  },
})
