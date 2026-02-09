import type { ParserOptions } from "@babel/parser"
import type { RollupOptions } from "rollup"

interface CompileUserConfig {
  babelParser ?: ParserOptions
  rollupOptions ?: RollupOptions 
}
interface CompileOpt {
  main: string
  ProjectDir: string
  moduleDir: string
  output: string
  config ?: Partial<CompileUserConfig>
}

export type {
  CompileOpt,
  CompileUserConfig
}