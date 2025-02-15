import { CSS } from "sweetss";
import { $$, __ } from "../../../@";
import { DIVIDED_BY } from "../../../config";

export default (c: CSS) => {
  Rems(c);
  Pr(c);
  Divide(c);
};

const dirs = ["top", "bottom", "left", "right"];

const Rems = (c: CSS) => {
  let _i = 0;
  let _x = 0;
  __.fill(65).forEach((_, ind) => {
    //
    const ism0 = ind > 0;
    dirs.forEach((dr) => {
      c[`${dr}_${ind}`] = { [dr]: _i };
      if (ism0) {
        c[`${dr}_n${ind}`] = { [dr]: -_i };
      }
    });

    _i += 0.25;
  });
};

const Pr = (c: CSS) => {
  let pr = 10;
  __.fill(15).forEach((_, ind) => {
    const ism0 = ind > 0;

    dirs.forEach((dr) => {
      c[`${dr}_${pr}p`] = { [dr]: `${pr}%` };
      if (ism0) {
        c[`${dr}_n${pr}p`] = { [dr]: `-${pr}%` };
      }
    });

    pr += 10;
  });
};

const Divide = (c: CSS) => {
  DIVIDED_BY(
    (d: number, t: string, ind: number) => {
      //
      const ism0 = ind > 0;
      let _ind = ind + 1;
      dirs.forEach((dr) => {
        c[`${dr}_${_ind}d${d}`] = { [dr]: t };
        if (ism0) {
          c[`${dr}_n${_ind}d${d}`] = { [dr]: "-" + t };
        }
      });
    },
    [12, 6, 5, 4, 3],
  );
};
