import { CSS, med, f } from "sweetss";
import {
  qt_bg_opacity,
  qt_border_opacity,
  qt_text_opacity,
  qt_outline_opacity,
} from "../APPEARANCE/opacity";

import {
  qt_gradient_from,
  qt_gradient_stops,
  qt_gradient_to,
} from "../APPEARANCE/colors/gradient";
import { qt_off_shadow, qt_ring_shadow, qt_shadow } from "../APPEARANCE/shadow";

/*
-------------------------

-------------------------
*/

export default (c: CSS, d: CSS) => {
  //
  d[":root"] = [
    // bg_opacity,
    // text_opacity,
    // border_opacity,
    // outline_opacity,
    // //
    // qt_gradient_from,
    // qt_gradient_to,
    // qt_gradient_stops,
    // // shadow,
    // qt_shadow,
    // qt_ring_shadow,
    // qt_offset_shadow,
  ];

  //
};
