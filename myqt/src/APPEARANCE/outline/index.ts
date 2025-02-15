import { CSS, med } from "sweetss";
import { PIXEL, ARR } from "../../config";

export default (c: CSS, t: string, m: string) => {
  //

  PIXEL((num, px) => {
    const _V = med({ [m]: px });

    c[`${t}outline${num}`] = {
      outlineWidth: _V,
    };
    c[`${t}outline_offset${num}`] = {
      outlineOffset: _V,
    };
  });

  c[`${t}outline_none`] = {
    outline: med({ [m]: `none` }),
  };

  Style(c, t, m);
};

const Style = (c: CSS, t: string, m: string) => {
  const style =
    "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset";

  ARR((nm, p) => {
    c[`${t}outline_${p}`] = {
      outlineStyle: med({ [m]: p }),
    };
  }, style.split("|"));
};
