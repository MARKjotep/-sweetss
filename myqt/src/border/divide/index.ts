import { CSS, __, ps } from "sweetss";
import { $$, obj, oItems } from "../../@";
import { BORDER_PX } from "../../config";

export default (c: CSS) => {
  //

  BORDER_PX((num, bin) => {
    c[`divide_x${num}`] = [
      ps.child("*")(ps.not(":first-child")({ borderLeftWidth: `${bin}px` })),
    ];

    c[`divide_y${num}`] = [
      ps.child("*")(ps.not(":first-child")({ borderTopWidth: `${bin}px` })),
    ];
  });
};
