import { _var, CSS, med, f } from "sweetss";
import {
  bg_opacity,
  border_opacity,
  text_opacity,
  outline_opacity,
} from "../opacity";

import {
  fx_gradient_from,
  fx_gradient_stops,
  fx_gradient_to,
} from "../colors/gradient";
import { fx_offset_shadow, fx_ring_shadow, fx_shadow } from "../shadow";

/*
-------------------------

-------------------------
*/

export default (c: CSS, d: CSS) => {
  //
  d[":root"] = [
    bg_opacity,
    text_opacity,
    border_opacity,
    outline_opacity,

    //
    fx_gradient_from,
    fx_gradient_to,
    fx_gradient_stops,

    // shadow,
    fx_shadow,
    fx_ring_shadow,
    fx_offset_shadow,
  ];

  //
};
