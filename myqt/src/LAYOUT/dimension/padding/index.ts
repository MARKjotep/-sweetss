import { CSS } from "sweetss";
import { $$, __, obj, oItems } from "../../../@";

export default (c: CSS) => {
  Rems(c);
};

const gname: obj<string> = {
  b: "Bottom",
  l: "Left",
  r: "Right",
  t: "Top",
};
const Rems = (c: CSS) => {
  let _i = 0;
  __.fill(65).forEach((_, ind) => {
    const ism0 = ind > 0;
    c[`p_${ind}`] = { padding: _i };

    c[`px_${ind}`] = {
      paddingRight: _i,
      paddingLeft: _i,
    };
    c[`py_${ind}`] = {
      paddingTop: _i,
      paddingBottom: _i,
    };

    if (ism0) {
      c[`p_n${ind}`] = { margin: -_i };

      c[`px_n${ind}`] = {
        paddingRight: -_i,
        paddingLeft: -_i,
      };
      c[`py_n${ind}`] = {
        paddingTop: -_i,
        paddingBottom: -_i,
      };
    }
    //

    oItems(gname).forEach(([k, v]) => {
      c[`p${k}_${ind}`] = { [`padding${v}`]: _i };
      if (ism0) c[`p${k}_n${ind}`] = { [`padding${v}`]: -_i };
    });
    _i += 0.25;
  });

  c[`px_auto`] = {
    paddingRight: "auto",
    paddingLeft: "auto",
  };
  c[`py_auto`] = {
    paddingTop: "auto",
    paddingBottom: "auto",
  };
  oItems(gname).forEach(([k, v]) => {
    c[`p${k}_auto`] = { [`padding${v}`]: "auto" };
  });
};
