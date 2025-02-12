import { CSS, med, _var } from "sweetss";
import { hexToRGBA } from "..";
import { outline_opacity } from "../../opacity";

export default (c: CSS, m: string, prop: string, val: string[]) => {
  const _cname = ["outline", m, prop].join("");

  const [c1, c2] = val;

  const isM = c1 === c2;

  c[_cname] = [
    outline_opacity,
    {
      borderColor: med(hexToRGBA(c1, outline_opacity), {
        ...(!isM && { dark: hexToRGBA(c2, outline_opacity) }),
      }),
    },
  ];
};
