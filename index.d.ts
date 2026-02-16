import type { ParserOptions } from "@babel/parser";
import type { RollupOptions } from "rollup";
import type { World } from "@minecraft/server";
interface CompileUserConfig {
  babelParser?: ParserOptions;
  rollupOptions?: RollupOptions;
}
interface CompileOpt {
  main: string;
  ProjectDir: string;
  moduleDir: string;
  output: string;
  config?: Partial<CompileUserConfig>;
}
interface EventOpt {
  on: "after" | "before";
  data: Record<string, (event: any) => void>;
  extends ?: MCXFile<"event">;
  tick ?: number
}
declare class Event {
  subscribe(...events: string[]): boolean;
  /**
   * unscribe
   */
  unscribe(...events: string[]): boolean;
  useWorld(_world: World): void;
}
type MCXFileType = "app" | "component" | "event";
interface MCXFileBase {
  type: MCXFileType;
  setup: Record<string, any>;
}
interface MCXFile<T extends MCXFileType> extends MCXFileBase {
  app: T extends "app"
    ? {
        event ?: Event;
      }
    : never;
  event: T extends "event" ? Event : never;
}
export type { CompileOpt, CompileUserConfig, MCXFile, EventOpt };
