import { CSS } from "sweetss";
import { __, $$, obj, oItems } from "../../@";

const gname: obj<string> = {
  bl: "BottomLeft",
  br: "BottomRight",

  tl: "TopLeft",
  tr: "TopRight",
};

const rad2: obj<number[]> = {
  b: [0, 0, 1, 1],
  t: [1, 1, 0, 0],
  l: [1, 0, 0, 1],
  r: [0, 1, 1, 0],
};

export default (c: CSS) => {
  //

  let _i = 0.5;
  __.fill(5).forEach((_, ind) => {
    //
    oItems(gname).forEach(([k, v]) => {
      //
      c[`radius_${k}_${ind + 1}x`] = {
        [`border${v}Radius`]: _i,
      };
    });

    oItems(rad2).forEach(([k, v]) => {
      c[`radius_${k}_${ind + 1}x`] = {
        borderRadius: v.map((m) => (m ? _i : m)),
      };
    });

    _i += 0.5;
  });
};
