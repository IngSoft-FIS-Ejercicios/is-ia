import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      reporter: ['text', 'lcov'],
      include: ['domain/**/*.js'],
      exclude: ['domain/tests/**'],
    },
  },
});
