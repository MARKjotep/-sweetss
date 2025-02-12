import { CSS, __ } from "sweetss";
import { $$, obj, oItems } from "../../@";
import { BORDER_PX } from "../../config";

const gname: obj<string> = {
  b: "Bottom",
  l: "Left",
  r: "Right",
  t: "Top",
};

export default (c: CSS) => {
  //

  BORDER_PX((num, bin) => {
    c[`border${num}`] = {
      borderWidth: `${bin}px`,
    };

    oItems(gname).forEach(([k, v]) => {
      //
      c[`border_${k}${num}`] = {
        [`border${v}Width`]: `${bin}px`,
      };
    });
  });
};
