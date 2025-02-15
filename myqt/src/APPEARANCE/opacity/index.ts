import { CSS, Var, med } from "sweetss";
import { $$, __ } from "../../@";
import { FILL, OBJ } from "../../config";

export const qt_bg_opacity = Var({ qt_bg_opacity: "1" });
export const qt_border_opacity = Var({ qt_border_opacity: "1" });
export const qt_col_opacity = Var({ qt_col_opacity: "1" });
export const qt_outline_opacity = Var({ qt_outline_opacity: "1" });
export const qt_ring_opacity = Var({ qt_ring_opacity: "1" });
export const qt_text_opacity = Var({ qt_text_opacity: "1" });
export const qt_placeholder_opacity = Var({ qt_placeholder_opacity: "1" });

export default (c: CSS, t: string, m: string) => {
  FILL(
    (_, inc) => {
      const val = (inc / 100).toString();

      const _V = med({ [m]: val });

      c[`${t}opacity_${inc}`] = {
        opacity: _V,
      };
      //
      OBJ(
        (k, v) => {
          //
          c[`${t}${k}_${inc}`] = [v.new(_V)];
        },
        {
          border_opacity: qt_border_opacity,
          col_opacity: qt_col_opacity,
          outline_opacity: qt_outline_opacity,
          text_opacity: qt_text_opacity,
          ring_opacity: qt_ring_opacity,
          placeholder_opacity: qt_placeholder_opacity,
        },
      );
    },
    {
      count: 5,
      increment: 25,
    },
  );
};
