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
  extends?: MCXFile<"event">[];
  tick?: number
}
declare class Event {
  constructor(opt: EventOpt);
  subscribe(...events: string[]): boolean;
  unscribe(...events: string[]): boolean;
  useWorld(_world: World): void;
}
type MCXFileType = "app" | "component" | "event";
/** runtime context passed into `setup` */
type MCXCtx = {
  type: MCXFileType;
  data?: Event;
};

interface MCXFileBase {
  type: MCXFileType;
  setup: (ctx: MCXCtx) => void;
}
interface AppMCXContent {
  event: MCXFile<"event">[]
}
interface EventMCXContent {
  event: EventOpt
}
interface MCXFile<T extends MCXFileType> extends MCXFileBase {
  app: T extends "app" ? AppMCXContent :
  T extends "event" ? EventMCXContent : void
}
export type { CompileOpt, CompileUserConfig, MCXFile, EventOpt, MCXCtx };
