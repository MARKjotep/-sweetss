import { CSS } from "sweetss";
import { $$, __ } from "../../@";
import { qt_rotate } from "..";

export default (c: CSS) => {
  Rems(c);
  Pr(c);
};

const Rems = (c: CSS) => {
  let _i = 0;
  __.fill(8).forEach((_, ind) => {
    const ism0 = ind > 0;
    c[`rotate_${ind}`] = [qt_rotate.new(`${_i}deg`)];

    //=
    if (ism0) {
      c[`rotate_n${ind}`] = [qt_rotate.new(`${-_i}deg`)];
    }
    _i += 45;
  });
};

const Pr = (c: CSS) => {
  let pr = 10;
  __.fill(10).forEach((_, i) => {
    const ism0 = i > 0;

    c[`rotate_${pr}p`] = [qt_rotate.new(`${pr}%`)];
    if (ism0) {
      c[`rotate_n${pr}p`] = [qt_rotate.new(`-${pr}%`)];
    }
    pr += 10;
  });
};
