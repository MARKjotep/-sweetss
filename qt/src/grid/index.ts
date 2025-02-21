import { PROXY } from "../proxy";

class GRID extends PROXY<GRID, { wh: string; first: string }> {
  protected prop: string = "zIndex";
  //
  [k: number]: this;
  declare 1: this;
}
