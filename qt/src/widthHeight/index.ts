import { $$, media, Medyas, f } from "sweetss";
import { isNum, PROXY } from "../proxy";

export class WH extends PROXY<WH, { wh: string; first: string }> {
  protected prop: string = "";
  //
  [k: number]: this;
  declare 1: this;
  declare 2: this;
  declare 3: this;
  declare 4: this;
  declare 5: this;
  declare 6: this;
  declare 7: this;
  declare 8: this;
  declare 9: this;
  declare 10: this;

  protected valFN = isNum;

  constructor({
    prefix = "",
    data = {
      wh: "",
      first: "",
    },
    values = {},
  } = {}) {
    super({ prefix, data, values });
    //
    this.prop = this.data.wh;
  }
  get pr100() {
    this._value = {
      [this.data.wh]: "100%",
    };
    return this;
  }
  get auto() {
    this._value = {
      [this.data.wh]: "auto",
    };
    return this;
  }
  get screen() {
    const l = this.data.first;
    this._value = {
      [this.data.wh]: f.clamp("100v" + l, "100dv" + l, "100lv" + l),
    };
    return this;
  }

  /**
   * Pixel
   * @param val number
   */
  px(val: number) {
    this._value = {
      [this.data.wh]: `${val}px`,
    };
    return this;
  }
  /**
   * Percent
   * @param val number
   */
  pr(val: number) {
    this._value = {
      [this.data.wh]: `${val}%`,
    };
    return this;
  }
  /**
   * Rem
   * @param val number
   */
  rm(val: number) {
    this._value = {
      [this.data.wh]: val,
    };
    return this;
  }
  /**
   * value
   * @param val number
   */
  value(val: any) {
    this._value = {
      [this.data.wh]: val,
    };
    return this;
  }
  /**
   * variable
   * @param val string
   */
  var(val: string, optional?: any) {
    this._value = {
      [this.data.wh]: f.var(val, optional),
    };
    return this;
  }
}
