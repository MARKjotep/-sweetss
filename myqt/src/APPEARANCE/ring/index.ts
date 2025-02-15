import { CSS, med, Var, f, join } from "sweetss";
import Width, { qt_ring_off_width } from "./width";
import { PIXEL } from "../../config";
import { qt_ring_off_color } from "../colors/all";

export const qt_shadow = Var({ qt_shadow: "0 1px 2px rgba(0, 0, 0, 0.05)" });
export const qt_ring_off_shadow = Var({
  qt_ring_off_shadow: `${0}px`,
});
export const qt_ring_shadow = Var({
  qt_ring_shadow: `${0}px`,
});
export const qt_ring_inset = Var({
  qt_ring_inset: ``,
});

export default (c: CSS, t: string, m: string) => {
  //

  Width(c);
  Ring(c);
};

const Ring = (c: CSS) => {
  PIXEL((n, px) => {
    c[`ring${n}`] = [
      qt_ring_off_shadow.new([
        qt_ring_inset,
        0,
        0,
        0,
        qt_ring_off_width,
        qt_ring_off_color,
      ]),
      qt_ring_shadow.new([
        qt_ring_inset,
        0,
        0,
        0,
        f.calc(px, `+`, qt_ring_off_width),
        qt_ring_off_color,
      ]),
      {
        boxShadow: join([qt_ring_off_shadow, qt_ring_shadow, qt_shadow]),
      },
    ];
  });
};
