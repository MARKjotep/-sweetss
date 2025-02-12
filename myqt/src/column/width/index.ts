import { __, CSS } from "sweetss";

export default (c: CSS) => {
  let _i = 10;
  __.fill(9).forEach((_, i) => {
    c[`col_wid_${_i}`] = {
      columnWidth: _i,
    };
    _i += 10;
  });
};
