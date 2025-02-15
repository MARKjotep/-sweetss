import { CSS } from "sweetss";
import { $$, __ } from "../../@";
import { DIVIDED_BY } from "../../config";

export default (c: CSS) => {
  Rems(c);
  Pr(c);
  Divide(c);

  c[`f_basis_auto`] = {
    flexBasis: "auto",
  };
};

const Rems = (c: CSS) => {
  let _i = 0;
  let _x = 0;
  __.fill(65).forEach((_, ind) => {
    c[`f_basis_${ind}`] = { flexBasis: _i };

    _i += 0.25;
    if (ind < 7) {
      const ind2 = ind + 1;
      _x += 15;
      c[`f_basis_${ind2}xl`] = { flexBasis: _x };
    }
  });
};

const Pr = (c: CSS) => {
  let pr = 10;
  __.fill(10).forEach((_, i) => {
    c[`f_basis_${pr}p`] = {
      flexBasis: `${pr}%`,
    };
    pr += 10;
  });
};

const Divide = (c: CSS) => {
  DIVIDED_BY(
    (d: number, t: string, ind: number) => {
      //
      let _ind = ind + 1;
      c[`f_basis_${_ind}d${d}`] = { flexBasis: t };
    },
    [12, 6, 5, 4, 3],
  );
};
