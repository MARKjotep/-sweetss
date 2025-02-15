import { CSS } from "sweetss";
import { __ } from "../../@";

export default (c: CSS) => {
  __.fill(20).forEach((_, i) => {
    let _i = i + 1;
    c[`order_${_i}`] = {
      order: _i,
    };
  });
};
