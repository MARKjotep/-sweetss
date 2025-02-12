import { _var, CSS, med } from "sweetss";
import { hexToRGBA } from "..";
import { col_opacity } from "../../opacity";

export default (c: CSS, m: string, prop: string, val: string[]) => {
  const _cname = ["col_rule", m, prop].join("");

  const [c1, c2] = val;

  const isM = c1 === c2;
  c[_cname] = [
    col_opacity,
    {
      columnRuleColor: med(hexToRGBA(c1, col_opacity), {
        ...(!isM && { dark: hexToRGBA(c2, col_opacity) }),
      }),
    },
  ];
};
