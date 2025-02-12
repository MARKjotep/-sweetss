import { CSS } from "sweetss";
import { $$, obj, oItems } from "../../@";

const gname: obj<string> = {
  repeat: "repeat",
  repeat_x: "repeat-x",
  repeat_y: "repeat-y",
  no_repeat: "no-repeat",
  repeat_round: "round",
  repeat_space: "space",
};
export default (c: CSS) => {
  oItems(gname).forEach(([k, v]) => {
    c[`bg_${k}`] = {
      backgroundRepeat: v,
    };
  });
};
