import { CSS } from "sweetss";
import { $$, __ } from "../../@";
import { DIVIDED_BY } from "../../config";
import { qt_translate_x, qt_translate_y } from "..";

export default (c: CSS) => {
  Pr(c);
  Rems(c);
  Divide(c);
};

const Rems = (c: CSS) => {
  let _i = 0;
  __.fill(65).forEach((_, ind) => {
    const ism0 = ind > 0;
    c[`translate_x_${ind}`] = [qt_translate_x.new(_i)];
    c[`translate_y_${ind}`] = [qt_translate_y.new(_i)];
    //=
    if (ism0) {
      c[`translate_x_n${ind}`] = [qt_translate_x.new(-_i)];
      c[`translate_y_n${ind}`] = [qt_translate_y.new(-_i)];
    }
    _i += 0.25;
  });
};

const Pr = (c: CSS) => {
  let pr = 10;
  __.fill(10).forEach((_, i) => {
    const ism0 = i > 0;
    c[`translate_x_${pr}p`] = [qt_translate_x.new(`${pr}%`)];
    c[`translate_y_${pr}p`] = [qt_translate_y.new(`${pr}%`)];
    if (ism0) {
      c[`translate_x_n${pr}p`] = [qt_translate_x.new(`-${pr}%`)];
      c[`translate_y_n${pr}p`] = [qt_translate_y.new(`-${pr}%`)];
    }
    pr += 10;
  });
};

const Divide = (c: CSS) => {
  DIVIDED_BY(
    (d: number, t: string, ind: number) => {
      //
      const ism0 = ind > 0;
      let _ind = ind + 1;

      c[`translate_x_${_ind}d${d}`] = [qt_translate_x.new(t)];
      c[`translate_y_${_ind}d${d}`] = [qt_translate_y.new(t)];

      if (ism0) {
        c[`translate_x_n${_ind}d${d}`] = [qt_translate_x.new("-" + t)];
        c[`translate_y_n${_ind}d${d}`] = [qt_translate_y.new("-" + t)];
      }
    },
    [12, 6, 5, 4, 3],
  );
};
