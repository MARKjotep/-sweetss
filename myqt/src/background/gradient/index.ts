import { CSS, f } from "sweetss";
import { $$, obj, oItems } from "../../@";
import { fx_gradient_stops } from "../../colors/gradient";

const gname: obj<string> = {
  b: "bottom",
  bl: "bottom left",
  br: "bottom right",
  l: "left",
  r: "right",
  t: "top",
  tl: "top left",
  tr: "top right",
};

export default (c: CSS) => {
  oItems(gname).forEach(([k, v]) => {
    //
    c[`bg_gradient_to_${k}`] = {
      backgroundImage: f.linearGradient(`to ${v}`, fx_gradient_stops),
    };
  });
};
