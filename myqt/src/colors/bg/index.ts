import { _var, CSS, med } from "sweetss";
import { hexToRGBA } from "..";
import { bg_opacity } from "../../opacity";

export default (c: CSS, m: string, prop: string, val: string[]) => {
  const _cname = ["bg", m, prop].join("");

  const [c1, c2] = val;

  const isM = c1 === c2;
  c[_cname] = [
    bg_opacity,
    {
      backgroundColor: med(hexToRGBA(c1, bg_opacity), {
        ...(!isM && { dark: hexToRGBA(c2, bg_opacity) }),
      }),
    },
  ];
};
