import { CSS } from "sweetss";
import AlignJustify from "./align_justify";
import Order from "./order";
import Gap from "./gap";
import Grow from "./grow";
import Shrink from "./shrink";
import Space from "./space";
import Basis from "./basis";
import Direction from "./direction";
import Wrap from "./wrap";

export default (c: CSS) => {
  AlignJustify(c);
  Direction(c);
  Gap(c);
  Grow(c);
  Shrink(c);
  Space(c);
  Basis(c);
  Wrap(c);
  Order(c);

  c.f_auto = {
    flex: [1, 1, "auto"],
  };
  c.f_1 = {
    flex: [1, 1, "0%"],
  };
};
