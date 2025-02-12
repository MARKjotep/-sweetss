import { _var, CSS, med } from "sweetss";

import { hexToRGBA } from "..";

const basic = med("#000", { dark: "#fff" });

export const fx_gradient_from = _var({
  fx_gradient_from: basic,
});
//
export const fx_gradient_to = _var({ fx_gradient_to: basic });
//
export const fx_gradient_stops = _var({
  fx_gradient_stops: [
    fx_gradient_from.__(),
    fx_gradient_to.__(`rgba(52, 211, 153, 0)`),
  ].join(", "),
});

export default (c: CSS, m: string, prop: string, val: string[]) => {
  const _to = ["to", m, prop].join("");
  const _from = ["from", m, prop].join("");
  const _via = ["via", m, prop].join("");

  const [c1, c2] = val;

  const isM = c1 === c2;
  const color = med(c1, { ...(!isM && { dark: c2 }) });

  c[_to] = [fx_gradient_to.new(color)];

  c[_from] = [
    fx_gradient_from.new(color),
    fx_gradient_stops.new(
      [fx_gradient_from.__(), fx_gradient_to.__()].join(", "),
    ),
  ];

  c[_via] = [
    fx_gradient_stops.new(
      med([fx_gradient_from.__(), c1, fx_gradient_to.__()].join(", "), {
        ...(!isM && {
          dark: [fx_gradient_from.__(), c2, fx_gradient_to.__()].join(", "),
        }),
      }),
    ),
  ];
};
