import { CSS, f, med } from "sweetss";

import { __, $$ } from "../../@";

export default (c: CSS) => {
  let _i = -1;
  __.fill(22).forEach((_, i) => {
    c[`z_${_i < 0 ? "n1" : _i}`] = {
      zIndex: _i,
    };
    _i += 1;
  });
};
