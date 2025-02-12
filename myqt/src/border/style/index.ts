import { CSS, __ } from "sweetss";
import { $$, obj, oItems } from "../../@";

const gname: obj<string> = {
  b: "Bottom",
  l: "Left",
  r: "Right",
  t: "Top",
};

export default (c: CSS) => {
  //
  const style =
    "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset";
  style.split("|").forEach((b) => {
    c[`border_${b}`] = {
      borderStyle: b,
    };
  });
};
