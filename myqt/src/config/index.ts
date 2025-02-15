import { media, CSS, CSSinR } from "sweetss";
import { $$, __, isArr, oItems, oKeys, obj } from "../@";

//
const _MEDIA = oKeys(media.breakpoints);
export const MEDIA_DEFAULT = media.default as string;
export const MEDIA = (fn: (t: string, m: string) => void) => {
  _MEDIA.forEach((m) => {
    const _m = m !== MEDIA_DEFAULT ? `${m}_` : "";
    fn(_m, m);
  });
  return;
};

export const XY = (fn: (xy: "X" | "Y") => void) => {
  const _xy: ["X", "Y"] = ["X", "Y"];
  //
  _xy.forEach((xy) => {
    fn(xy);
  });
};

export const ARR = <T>(fn: (nm: string, p: T) => void, arr: T[]) => {
  arr.forEach((p) => {
    fn(String(p).replaceAll("-", "_"), p);
  });
};

export const OBJ = <T>(fn: (k: string, v: T) => void, obj: obj<T>) => {
  oItems(obj).forEach((k) => {
    fn(...k);
  });
};

export const FILL = (
  fn: (i: number, incr: number) => void,
  { count = 0, increment = 1, initial = 0, index = 1 },
) => {
  let _i = initial;
  __.fill(Math.round(count)).forEach((_, ind) => {
    fn(ind + index, _i);
    _i += increment;
  });

  return;
};

export const ANIMATE_INCREMENT = [
  50, 75, 100, 125, 150, 175, 200, 300, 400, 500, 600, 700, 800, 900, 1000,
];

export const EASE = ["", "in", "out", "in-out"];

export const DIVIDED_BY = (
  fn: (divisor: number, pr: string, index: number) => void,
  divisor: number[] = [12, 6, 5, 4, 3],
) => {
  divisor.forEach((dv) => {
    __.fill(dv)
      .map((_, i) => (((i + 1) / dv) * 100).toFixed(2) + "%")
      .forEach((ff, ind) => {
        fn(dv, ff, ind);
      });
  });
};

export const PERCENT = (
  fn: (n: number, pr: string) => void,
  { min = 0, max = 100, increment = 10 } = {},
) => {
  const mm = max - min;
  if (mm >= increment) {
    FILL(
      (i, incr) => {
        //
        fn(incr, `${incr}%`);
      },
      {
        count: mm / increment + 1,
        initial: min,
        increment,
        index: 0,
      },
    );
  }
  return;
};

export const PIXEL = (fn: (n: string, px: string) => void) => {
  FILL(
    (i) => {
      const num = i === 1 ? "" : `_${i}px`;
      fn(num, `${i}px`);
    },
    {
      count: 10,
    },
  );
};
