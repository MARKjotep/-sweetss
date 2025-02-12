import { __ } from "../@";

//
export const INCREMENT = [75, 100, 150, 200, 300, 500, 700, 1000];

export const EASE = ["", "in", "out", "in_out"];

export const TW = __.fill(12).map(
  (_, i) => (((i + 1) / 12) * 100).toFixed(2) + "%",
);

export const REMS = [0.5, 1, 1.5, 2, 2.5];

const borderIncrment = [0, 1, 2, 4, 6, 8];
export const BORDER_PX = (fn: (n: string, index: number) => void) => {
  borderIncrment.forEach((b) => {
    const num = b === 1 ? "" : `_${b}`;
    fn(num, b);
  });
};
