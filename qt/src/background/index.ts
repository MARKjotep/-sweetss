import { $$, media, Medyas, f } from "sweetss";
import { COLOR } from "../color";
import { PROXY } from "../proxy";

/*
-------------------------
block
color
collapse
image
inline
-------------------------
*/

export class BG extends Medyas<BG, { side: string }> {
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
}

export class ATTACH extends PROXY<ATTACH, {}> {
  protected prop: string = "backgroundAttachment";
  //
  declare fixed: this;
  declare local: this;
  declare scroll: this;
}

export class BLEND extends PROXY<BLEND, {}> {
  protected prop: string = "backgroundBlendMode";
  //
  declare normal: this;
  declare multiply: this;
  declare screen: this;
  declare overlay: this;
  declare darken: this;
  declare lighten: this;
  declare color_dodge: this;
  declare saturation: this;
  declare color: this;
  declare luminosity: this;
}

export class CLIPOR extends PROXY<CLIPOR, { name: string }> {
  //
  declare border_box: this;
  declare padding_box: this;
  declare content_box: this;
  declare text: this;
  constructor({ prefix = "", data = { name: "" }, values = {} } = {}) {
    super({ prefix, data, values });
    this.prop = this.data.name;
  }
}

//

export class BACKGROUND {
  get ATTACH() {
    return new ATTACH();
  }
  get BLEND() {
    return new BLEND();
  }
  get CLIP() {
    return new CLIPOR({ data: { name: "backgroundClip" } });
  }
  get ORIG() {
    return new CLIPOR({ data: { name: "backgroundOrigin" } });
  }
  get COLOR() {
    return new COLOR({ data: { prop: "backgroundColor" } });
  }
  color(color: any) {
    return new COLOR({ data: { prop: "backgroundColor" } }).color(color);
  }
}
