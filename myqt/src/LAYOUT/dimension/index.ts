import { CSS } from "sweetss";
import H from "./height";
import W from "./width";
import Margin from "./margin";
import Padding from "./padding";

export default (c: CSS, t: string, m: string) => {
  const TCOL = `${t}col_`;
  [
    //
    A,
  ].forEach((mm) => mm(c, TCOL, m));

  //
  Margin(c);
  Padding(c);

  //
  H(c);
  W(c);
};

const A = (c: CSS, t: string, m: string) => {};
