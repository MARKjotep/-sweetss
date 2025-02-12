import { CSS, f } from "sweetss";
import { __ } from "../@";

export default (c: CSS) => {
  __.fill(6).forEach((_, ind) => {
    let _i = ind + 1;
    Backdrop(c, _i);
    Blur(c, _i);
  });
};

const Backdrop = (c: CSS, ind: number) => {
  c[`backdrop_${ind}`] = {
    backdropFilter: `${ind}px`,
    webkitBackdropFilter: `${ind}px`,
  };
};

const Blur = (c: CSS, ind: number) => {
  c[`blur_${ind}`] = {
    filter: `blur(${ind}px)`,
  };
};
