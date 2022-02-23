import typescript from 'rollup-plugin-typescript2'
import * as path from 'path'

const cwd = __dirname

const baseConfig = {
  plugins: [typescript()],
}

const comileConfig = {
  input: path.join(cwd, 'src/index.ts'),
  output: {
    file: path.join(cwd, 'dist/index.js'),
    format: 'esm', // esm: es6模块系统 cjs: node模块系统
    // sourcemap: true,
    exports: 'named',
  },
}

const watchOption = {
  watch: {
    buildDelay: 500,
    clearScreen: true,
    include: path.resolve(cwd, 'src/**'),
  },
}

module.exports = {
  ...baseConfig,
  ...comileConfig,
  ...watchOption,
}
