import { Var, CSS, join, med } from "sweetss";
import { __, obj, oItems } from "../../@";
import { OBJ } from "../../config";

export const qt_shadow = Var(
  { qt_shadow: "0 1px 2px rgba(0, 0, 0, 0.05)" },
  "0 1px 2px rgba(0, 0, 0, 0.05)",
);
export const qt_ring_shadow = Var(
  {
    qt_ring_shadow: "0 0 #0000",
  },
  "0 0 #0000",
);
export const qt_off_shadow = Var(
  {
    qt_off_shadow: "0 0 #000",
  },
  "0 0 #000",
);

export default (c: CSS, t: string, m: string) => {
  OBJ(
    (k, v) => {
      const sname = k === "default" ? "" : `_${k}`;

      const bshad = join([qt_off_shadow, qt_ring_shadow, qt_shadow]);

      c[`${t}shadow${sname}`] = [
        qt_shadow.new(med({ [m]: v })),
        {
          boxShadow: med({ [m]: bshad }),
        },
      ];
    },
    {
      sm: `0 1px 2px rgba(0, 0, 0, 0.05)`,
      default: `0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)`,
      md: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
      lg: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
      xl: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`,
      "2xl": `0 25px 50px rgba(0, 0, 0, 0.25)`,
      none: `none`,
    },
  );
};
