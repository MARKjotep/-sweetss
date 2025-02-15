import { CSS } from "sweetss";
import { $$, __ } from "../../@";
import { DIVIDED_BY } from "../..//config";

export default (c: CSS) => {
  Rems(c);
};

const Rems = (c: CSS) => {
  let _i = 0;
  let _x = 0;
  __.fill(40).forEach((_, ind) => {
    c[`gap_${ind}`] = { gap: _i };
    c[`row_gap_${ind}`] = { rowGap: _i };
    c[`col_gap_${ind}`] = { columnGap: _i };
    //
    _i += 0.25;
  });
};
