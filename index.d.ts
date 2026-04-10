import type { ParserOptions } from "@babel/parser";
import type { RollupOptions } from "rollup";
import type { World } from "@minecraft/server";
interface CompileUserConfig {
  babelParser?: ParserOptions;
  rollupOptions?: RollupOptions;
}
interface CompileOpt {
  moduleDir: string;
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
  unsubscribe(...events: string[]): boolean;
  useWorld(_world: World): void;
}
type MCXFileType = "app" | "component" | "event";
/** runtime context passed into `setup` */
type MCXCtx = {
  event?: Event[];
};

interface MCXFileBase {
  type: MCXFileType;
  setup: (ctx: MCXCtx) => any;
}
interface AppMCXContent {
  event: MCXFile<"event">[]
}
interface MCXEventData extends Omit<EventOpt, 'data'> {
  data: Record<string, string>
}
interface MCXFile<T extends MCXFileType> extends MCXFileBase {
  app: T extends "app" ? AppMCXContent :
  T extends "event" ? MCXEventData : void
}
export type { CompileOpt, CompileUserConfig, MCXFile, EventOpt, MCXCtx, MCXFileBase };
