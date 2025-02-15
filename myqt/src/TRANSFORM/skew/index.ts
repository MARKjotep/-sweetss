import { CSS } from "sweetss";
import { $$, __ } from "../../@";
import { qt_skew_x, qt_skew_y } from "..";

export default (c: CSS) => {
  Rems(c);
  Pr(c);
};

const Rems = (c: CSS) => {
  let _i = 0;
  __.fill(12).forEach((_, ind) => {
    const ism0 = ind > 0;
    const skw = `${_i}deg`;
    c[`skew_x_${ind}`] = [qt_skew_x.new(skw)];
    c[`skew_y_${ind}`] = [qt_skew_y.new(skw)];
    //=
    if (ism0) {
      c[`skew_x_n${ind}`] = [qt_skew_x.new("-" + skw)];
      c[`skew_y_n${ind}`] = [qt_skew_y.new("-" + skw)];
    }
    _i += 1;
  });
};

const Pr = (c: CSS) => {
  let pr = 10;
  __.fill(10).forEach((_, i) => {
    const ism0 = i > 0;
    c[`skew_x_${pr}p`] = [qt_skew_x.new(`${pr}%`)];
    c[`skew_y_${pr}p`] = [qt_skew_y.new(`${pr}%`)];
    if (ism0) {
      c[`skew_x_n${pr}p`] = [qt_skew_x.new(`-${pr}%`)];
      c[`skew_y_n${pr}p`] = [qt_skew_y.new(`-${pr}%`)];
    }
    pr += 10;
  });
};
