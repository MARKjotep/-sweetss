import { _var, CSS } from "sweetss";

import { __, obj, oItems } from "../@";

export const fx_shadow = _var({ fx_shadow: "0 1px 2px rgba(0, 0, 0, 0.05)" });
export const fx_ring_shadow = _var({
  fx_ring_shadow: " 0 0 #0000;",
});
export const fx_offset_shadow = _var({
  fx_offset_shadow: "0 0 #000",
});

const shad: obj<string> = {
  sm: `0 1px 2px rgba(0, 0, 0, 0.05)`,
  default: `0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)`,
  md: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
  lg: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
  xl: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`,
  "2xl": `0 25px 50px rgba(0, 0, 0, 0.25)`,
  none: `none`,
};
export default (c: CSS) => {
  //
  oItems(shad).forEach(([k, v]) => {
    const sname = k === "default" ? "" : `_${k}`;
    c[`shadow${sname}`] = [
      fx_shadow.new(v),
      {
        boxShadow: [
          fx_offset_shadow.__(`0 0 #0000`),
          fx_ring_shadow.__(`0 0 #0000`),
          fx_shadow.__(),
        ].join(", "),
      },
    ];
  });
};
