import { CSS, Var, med } from "sweetss";
import { __, $$, obj, oItems } from "../../../@";
import { PIXEL } from "../../../config";

export const qt_ring_off_width = Var({
  qt_ring_off_width: `${0}px`,
});

export default (c: CSS) => {
  //

  PIXEL((num, px) => {
    c[`ring_offset_width${num}`] = [qt_ring_off_width.new(px)];
  });
};
