import { CSS, ps } from "sweetss";
import { $$, __ } from "../../@";
import { DIVIDED_BY } from "../../config";

export default (c: CSS) => {
  Rems(c);

  c[`f_basis_auto`] = {
    flexBasis: "auto",
  };
};

const Rems = (c: CSS) => {
  let _i = 0;
  __.fill(40).forEach((_, ind) => {
    c[`space_x_${ind}`] = [
      ps.child("* + *")({
        marginLeft: _i,
      }),
    ];

    c[`space_x_${ind}_rev`] = [
      { flexDirection: "row-reverse" },
      ps.child("* + *")({
        marginLeft: _i,
      }),
    ];

    c[`space_y_${ind}`] = [
      ps.child("* + *")({
        marginTop: _i,
      }),
    ];

    c[`space_y_${ind}_rev`] = [
      { flexDirection: "column-reverse" },
      ps.child("* + *")({
        marginTop: _i,
      }),
    ];
    //
    _i += 0.25;
  });
};
