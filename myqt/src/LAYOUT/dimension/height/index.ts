import { CSS } from "sweetss";
import { $$, __ } from "../../../@";
import { DIVIDED_BY } from "../../../config";

export default (c: CSS) => {
  Rems(c);
  Pr(c);
  Divide(c);

  c[`h_screen`] = {
    height: "100dvh",
  };

  c[`h_auto`] = {
    height: "100dvh",
  };

  c[`max_h_auto`] = {
    maxHeight: "auto",
  };

  c[`max_h_screen`] = {
    maxHeight: "100dvh",
  };

  c[`min_h_auto`] = {
    minHeight: "auto",
  };
  c[`min_h_screen`] = {
    minHeight: "100dvh",
  };
};

const Rems = (c: CSS) => {
  let _i = 0;
  let _x = 0;
  __.fill(65).forEach((_, ind) => {
    c[`h_${ind}`] = { height: _i };
    c[`max_h_${ind}`] = { maxHeight: _i };
    c[`min_h_${ind}`] = { minHeight: _i };
    //
    _i += 0.25;
    if (ind < 7) {
      const ind2 = ind + 1;
      _x += 15;
      //
      c[`h_${ind2}xl`] = { height: _x };
      c[`max_h_${ind2}xl`] = { maxHeight: _x };
      c[`min_h_${ind2}xl`] = { minHeight: _x };
    }
  });
};

const Pr = (c: CSS) => {
  let pr = 10;
  __.fill(10).forEach((_, i) => {
    c[`h_${pr}p`] = {
      height: `${pr}%`,
    };

    c[`max_h_${pr}p`] = {
      maxHeight: `${pr}%`,
    };
    c[`min_h_${pr}p`] = {
      minHeight: `${pr}%`,
    };

    pr += 10;
  });
};

const Divide = (c: CSS) => {
  DIVIDED_BY(
    (d: number, t: string, ind: number) => {
      //
      let _ind = ind + 1;
      c[`h_${_ind}d${d}`] = { height: t };
      c[`max_h_${_ind}d${d}`] = { maxHeight: t };
      c[`min_h_${_ind}d${d}`] = { minHeight: t };
    },
    [12, 6, 5, 4, 3],
  );
};
