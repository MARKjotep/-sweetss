import { CSS, __ } from "sweetss";
import { TW } from "../../config";
import { $$ } from "../../@";

export default (c: CSS) => {
  [
    "bottom",
    "center",
    "left",
    "left_bottom",
    "left_top",
    "right",
    "right_bottom",
    "right_top",
    "top",
  ].forEach((p) => {
    //
    c[`bg_${p}`] = {
      backgroundPosition: p.replaceAll("_", " "),
    };
  });

  XY(c);
};

const XY = (c: CSS) => {
  ["left", "right", "center"].forEach((p) => {
    c[`bg_x_${p}`] = {
      backgroundPositionX: p,
    };
    c[`bg_y_${p}`] = {
      backgroundPositionY: p,
    };
  });

  TW.forEach((t, ind) => {
    let _ind = ind + 1;

    c[`bg_x_${_ind}`] = {
      backgroundPositionX: t,
    };
    c[`bg_y_${_ind}`] = {
      backgroundPositionY: t,
    };
  });
};
