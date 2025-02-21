import { $$, media, Medyas, f, CSSValue } from "sweetss";

export interface TRANSX<T = CSSValue> {
  matrix?: T;
  matrix3d?: T;
  translate?: T;
  translate3d?: T;
  translateX?: T;
  translateY?: T;
  translateZ?: T;
  scale?: T;
  scale3d?: T;
  scaleX?: T;
  scaleY?: T;
  scaleZ?: T;
  rotate?: T;
  rotate3d?: T;
  rotateX?: T;
  rotateY?: T;
  rotateZ?: T;
  skew?: T;
  skewX?: T;
  skewY?: T;
  perspective?: T;
}

export class TRANSFORM extends Medyas<TRANSFORM, {}> {
  constructor({ prefix = "", data = {}, values = {} } = {}) {
    super({ prefix, data, values });
    //
  }
  origin(...origin: [string, string, string]) {
    this._value = {
      transformOrigin: origin,
    };
  }
  get flat() {
    this._value = {
      transformStyle: "flat",
    };
    return this;
  }
  get preserve3d() {
    this._value = {
      transformStyle: "preserve-3d",
    };
    return this;
  }
  get none() {
    this._value = {
      transform: "none",
    };
    return this;
  }

  transform(tran: TRANSX) {
    const transi: any[] = [];
    Object.entries(tran).forEach(([pr, vl]) => {
      if (pr in f) {
        const fn = f[pr as keyof f] as Function;
        transi.push(fn(vl));
      }
    });

    if (transi.length) {
      this._value = {
        transform: transi,
      };
    }
    //
    return this;
  }
}
