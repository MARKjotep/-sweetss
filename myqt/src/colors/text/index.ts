import { CSS, med, _var } from "sweetss";
import { hexToRGBA } from "..";
import { text_opacity } from "../../opacity";

export default (c: CSS, m: string, prop: string, val: string[]) => {
  const _cname = ["text", m, prop].join("");

  const [c1, c2] = val;

  const isM = c1 === c2;
  c[_cname] = [
    text_opacity,
    {
      color: med(hexToRGBA(c1, text_opacity), {
        ...(!isM && { dark: hexToRGBA(c2, text_opacity) }),
      }),
    },
  ];
};
