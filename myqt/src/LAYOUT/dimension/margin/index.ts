import { CSS } from "sweetss";
import { $$, __, obj, oItems } from "../../../@";

export default (c: CSS) => {
  Rems(c);

  c[`margin_0_auto`] = {
    margin: [0, "auto"],
  };
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
    c[`m_${ind}`] = { margin: _i };

    c[`mx_${ind}`] = {
      marginRight: _i,
      marginLeft: _i,
    };
    c[`my_${ind}`] = {
      marginTop: _i,
      marginBottom: _i,
    };

    if (ism0) {
      c[`m_n${ind}`] = { margin: -_i };

      c[`mx_${ind}`] = {
        marginRight: -_i,
        marginLeft: -_i,
      };
      c[`my_${ind}`] = {
        marginTop: -_i,
        marginBottom: -_i,
      };
    }
    //

    oItems(gname).forEach(([k, v]) => {
      c[`m${k}_${ind}`] = { [`margin${v}`]: _i };
      if (ism0) c[`m${k}_n${ind}`] = { [`margin${v}`]: -_i };
    });

    _i += 0.25;
  });

  oItems(gname).forEach(([k, v]) => {
    c[`m${k}_auto`] = { [`margin${v}`]: "auto" };
  });

  c[`mx_auto`] = {
    marginRight: "auto",
    marginLeft: "auto",
  };
  c[`my_auto`] = {
    marginTop: "auto",
    marginBottom: "auto",
  };
  //
};
