import { $$, media, Medyas, f } from "sweetss";
import { COLOR, RANDOM } from "../color";

/*
-------------------------
block
color
collapse
image
inline
-------------------------
*/

const borStyle = (TH: BORDER, style: string) => {
  const PR = ["border", TH["data"].side, "Style"].join("");
  TH._value = {
    [PR]: style,
  };
  return TH;
};

export class BORDER extends Medyas<BORDER, { side: string }> {
  constructor({
    prefix = "",
    data = {
      side: "",
    },
    values = {},
  } = {}) {
    super({ prefix, data, values });
    //
  }
  color(color: any) {
    const PR = ["border", this.data.side, "Color"].join("");
    this._value = {
      [PR]: color,
    };
    return this;
  }
  width(width: any) {
    const PR = ["border", this.data.side, "Width"].join("");
    this._value = {
      [PR]: width,
    };
    return this;
  }
  image(source: string, ...etc: any[]) {
    const PR = ["border", this.data.side, "Image"].join("");
    this._value = {
      [PR]: [source, ...etc.map(String)],
    };
    return this;
  }
  get solid() {
    return borStyle(this, "solid");
  }
  get dotted() {
    return borStyle(this, "dotted");
  }
  get none() {
    return borStyle(this, "none");
  }
  get hidden() {
    return borStyle(this, "hidden");
  }
  get dashed() {
    return borStyle(this, "dashed");
  }
  get double() {
    return borStyle(this, "double");
  }
  get groove() {
    return borStyle(this, "groove");
  }
  get ridge() {
    return borStyle(this, "ridge");
  }
  get inset() {
    return borStyle(this, "inset");
  }
  get outset() {
    return borStyle(this, "outset");
  }
  get TOP() {
    return new BORDER({
      values: this["_values"],
      data: { side: "Top" },
    });
  }
  get RIGHT() {
    return new BORDER({
      values: this["_values"],
      data: { side: "Right" },
    });
  }
  get LEFT() {
    return new BORDER({
      values: this["_values"],
      data: { side: "Left" },
    });
  }
  get BOTTOM() {
    return new BORDER({
      values: this["_values"],
      data: { side: "Bottom" },
    });
  }
  // SET
  get b1() {
    const PR = ["border", this.data.side, ""].join("");
    this._value = {
      [PR]: "1px solid currentColor",
    };
    return this;
  }
  get bRed() {
    const PR = ["border", this.data.side, ""].join("");
    this._value = {
      [PR]: "1px solid red",
    };
    return this;
  }
  get bRandom() {
    const PR = ["border", this.data.side, ""].join("");
    this._value = {
      [PR]: ["1px solid", RANDOM()[0]],
    };
    return this;
  }

  get COLOR() {
    const PR = ["border", this.data.side, "Color"].join("");
    return new COLOR({
      values: this._value,
      data: { prop: PR },
    });
  }
}

export class RADIUS extends Medyas<RADIUS, {}> {
  constructor({ prefix = "", data = {}, values = {} } = {}) {
    super({ prefix, data, values });
  }
  v(val: any | any[]) {
    this._value = {
      borderRadius: val,
    };
  }
  tL(val: any) {
    this._value = {
      borderTopLeftRadius: val,
    };
    return this;
  }
  tR(val: any) {
    this._value = {
      borderTopRightRadius: val,
    };
    return this;
  }
  bR(val: any) {
    this._value = {
      borderBottomRightRadius: val,
    };
    return this;
  }
  bL(val: any) {
    this._value = {
      borderBottomLeftRadius: val,
    };
    return this;
  }
  x(val: any) {
    this._value = {
      borderTopLeftRadius: val,
      borderTopRightRadius: val,
    };
    return this;
  }
  y(val: any) {
    this._value = {
      borderBottomLeftRadius: val,
      borderBottomRightRadius: val,
    };
    return this;
  }
  get b0() {
    this._value = {
      borderRadius: 0,
    };
    return this;
  }
  get b0p5() {
    this._value = {
      borderRadius: 0.5,
    };
    return this;
  }
  get b1() {
    this._value = {
      borderRadius: 1,
    };
    return this;
  }
  get b1p5() {
    this._value = {
      borderRadius: 1.5,
    };
    return this;
  }
  get b2() {
    this._value = {
      borderRadius: 2,
    };
    return this;
  }
}
