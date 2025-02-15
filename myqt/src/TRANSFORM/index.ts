import { CSS, Var, f } from "sweetss";
import Translate from "./translate";
import Rotate from "./rotate";
import Skew from "./skew";
import Scale from "./scale";

//
export const qt_translate_x = Var({ qt_translate_x: 0 });
export const qt_translate_y = Var({ qt_translate_y: 0 });
export const qt_skew_x = Var({ qt_skew_x: "0deg" });
export const qt_skew_y = Var({ qt_skew_y: "0deg" });
export const qt_rotate = Var({ qt_rotate: "0deg" });
export const qt_scale = Var({ qt_scale: "1" });

export default (c: CSS) => {
  //
  c.transform = [
    qt_translate_x,
    qt_translate_y,
    qt_skew_x,
    qt_skew_y,
    qt_rotate,
    qt_scale,
    {
      transform: [
        //
        f.translateX(qt_translate_x),
        f.translateY(qt_translate_y),
        f.rotate(qt_rotate),
        f.scale(qt_scale),
        f.skewX(qt_skew_x),
        f.skewY(qt_skew_y),
      ],
    },
  ];

  Translate(c);
  Rotate(c);
  Skew(c);
  Scale(c);
};
