import { PROXY } from "../proxy";
import { $$, join, value } from "sweetss";

export interface shadowCFG {
  x: any;
  y: any;
  blur?: any;
  spread?: any;
  color?: any;
  inset?: boolean;
}

export class SHADOW extends PROXY<SHADOW, {}> {
  protected shadows = new Set<string>();
  value(shadow: any) {
    this.shadows.add(value(shadow, { rem: true }));
    //
    this._value = {
      boxShadow: [...this.shadows].join(", "),
    };
    return this;
  }
  set(shadow: shadowCFG) {
    //
    const { x, y, blur, spread, color, inset } = shadow;
    const vv = value([x, y, blur, spread, color, inset ? "inset" : undefined], {
      rem: true,
    });
    this.shadows.add(vv);
    this._value = {
      boxShadow: [...this.shadows].join(", "),
    };

    return this;
  }
  get none() {
    //
    this._value = {
      boxShadow: "none",
    };
    return this;
  }
}

export class BOX extends PROXY<BOX, {}> {
  //

  get slice() {
    this._value = {
      webkitBoxDecorationBreak: "slice",
      boxDecorationBreak: "slice",
    };
    return this;
  }
  get clone() {
    this._value = {
      webkitBoxDecorationBreak: "clone",
      boxDecorationBreak: "clone",
    };
    return this;
  }
  get content() {
    this._value = {
      boxSizing: "content-box",
    };
    return this;
  }
  get border() {
    this._value = {
      boxSizing: "border-box",
    };
    return this;
  }
}
