import { CSS, med, _var } from "sweetss";
import { hexToRGBA } from "..";
import { border_opacity } from "../../opacity";

export default (c: CSS, m: string, prop: string, val: string[]) => {
  const _cname = ["border", m, prop].join("");

  const [c1, c2] = val;

  const isM = c1 === c2;

  c[_cname] = [
    border_opacity,
    {
      borderColor: med(hexToRGBA(c1, border_opacity), {
        ...(!isM && { dark: hexToRGBA(c2, border_opacity) }),
      }),
    },
  ];
};
