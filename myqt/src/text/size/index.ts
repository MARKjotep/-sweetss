import { CSS } from "sweetss";
import { $$, __ } from "../../@";
import { DIVIDED_BY } from "../../config";

export default (c: CSS) => {
  Rems(c);
};

const Rems = (c: CSS) => {
  let _i = 0;
  let _x = 0;
  __.fill(30).forEach((_, ind) => {
    c[`text_${ind}`] = { width: _i };

    //

    _i += 0.25;
    if (ind < 7) {
      const ind2 = ind + 1;
      _x += 10;
      c[`text_${ind2}xl`] = { width: _x };
    }
  });
};
