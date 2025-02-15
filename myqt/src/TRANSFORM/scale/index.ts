import { CSS } from "sweetss";
import { $$, __ } from "../../@";
import { qt_scale } from "..";

export default (c: CSS) => {
  Rems(c);
  Pr(c);
};

const Rems = (c: CSS) => {
  let _i = 50;
  __.fill(20).forEach((_, ind) => {
    c[`scale_${ind}`] = [qt_scale.new(`${_i / 100}`)];

    _i += 5;
  });
};

const Pr = (c: CSS) => {
  let pr = 10;
  __.fill(15).forEach((_, i) => {
    c[`scale_${pr}p`] = [qt_scale.new(`${pr}%`)];

    pr += 10;
  });
};
