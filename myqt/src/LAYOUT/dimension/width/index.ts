import { CSS } from "sweetss";
import { $$, __ } from "../../../@";
import { DIVIDED_BY } from "../../../config";

export default (c: CSS) => {
  Rems(c);
  Pr(c);
  Divide(c);

  c[`w_screen`] = {
    width: "100dvw",
  };

  c[`w_auto`] = {
    width: "auto",
  };

  c[`max_w_auto`] = {
    maxWidth: "auto",
  };

  c[`max_w_screen`] = {
    maxWidth: "100dvw",
  };

  c[`min_w_auto`] = {
    minWidth: "auto",
  };

  c[`min_w_screen`] = {
    minWidth: "100dvw",
  };
};

const Rems = (c: CSS) => {
  let _i = 0;
  let _x = 0;
  __.fill(65).forEach((_, ind) => {
    c[`w_${ind}`] = { width: _i };
    c[`max_w_${ind}`] = { maxWidth: _i };
    c[`min_w_${ind}`] = { minWidth: _i };
    //

    _i += 0.25;
    if (ind < 7) {
      const ind2 = ind + 1;
      _x += 15;
      c[`w_${ind2}xl`] = { width: _x };
      c[`max_w_${ind2}xl`] = { maxWidth: _x };
      c[`min_w_${ind2}xl`] = { minWidth: _x };
    }
  });
};

const Pr = (c: CSS) => {
  let pr = 10;
  __.fill(10).forEach((_, i) => {
    c[`w_${pr}p`] = {
      width: `${pr}%`,
    };
    c[`max_w_${pr}p`] = {
      maxWidth: `${pr}%`,
    };
    c[`min_w_${pr}p`] = {
      minWidth: `${pr}%`,
    };

    pr += 10;
  });
};

const Divide = (c: CSS) => {
  DIVIDED_BY(
    (d: number, t: string, ind: number) => {
      //
      let _ind = ind + 1;
      c[`w_${_ind}d${d}`] = { width: t };
      c[`max_w_${_ind}d${d}`] = { maxWidth: t };
      c[`min_w_${_ind}d${d}`] = { minWidth: t };
    },
    [12, 6, 5, 4, 3],
  );
};
