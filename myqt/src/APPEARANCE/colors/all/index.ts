import { CSS, med, VarType, Var, value, join, media, $$, ps } from "sweetss";
import {
  qt_bg_opacity,
  qt_border_opacity,
  qt_col_opacity,
  qt_outline_opacity,
  qt_placeholder_opacity,
  qt_ring_opacity,
  qt_text_opacity,
} from "../../opacity";
import { hexToRGBA } from "..";
import { OBJ, MEDIA_DEFAULT } from "../../../config";

export default (
  c: CSS,
  t: string,
  m: string,
  clr: string,
  prop: string,
  val: string[],
) => {
  //
  const isM = val[0] === val[1];
  const _media = HexRGB(val, m, isM);

  OBJ(
    (k, v) => {
      const _cname = [`${t}${k}`, clr, prop].join("");
      c[_cname] = [
        v.v,
        {
          [v.p]: _media(v.v),
        },
      ];
    },
    {
      bg: {
        p: "backgroundColor",
        v: qt_bg_opacity,
      },
      border: {
        p: "borderColor",
        v: qt_border_opacity,
      },
      col_rule: {
        p: "columnRuleColor",
        v: qt_col_opacity,
      },
      outline: {
        p: "outlineColor",
        v: qt_outline_opacity,
      },
      text: {
        p: "color",
        v: qt_text_opacity,
      },
    },
  );

  PLACEHOLDER(c, t, clr, prop, _media);
  RING(c, t, clr, prop, _media);
  GRADIENT(c, t, m, clr, prop, val, isM);
};

const HexRGB = (
  colors: string[],
  m: string = MEDIA_DEFAULT,
  isM: boolean = false,
) => {
  const [c1, c2] = colors;
  return (v: VarType) => {
    return med({
      [m]: hexToRGBA(c1, v),
      ...(!isM && { dark: med({ [m]: hexToRGBA(c2, v) }) }),
    });
  };
};

//

const basic = med("#000", { dark: "#fff" });

export const qt_gradient_from = Var({
  qt_gradient_from: basic,
});
//
export const qt_gradient_to = Var({ qt_gradient_to: basic }, basic);
//
export const qt_gradient_stops = Var({
  qt_gradient_stops: join([qt_gradient_from, qt_gradient_to]),
});

const GRADIENT = (
  c: CSS,
  mt: string,
  m: string,
  clr: string,
  prop: string,
  val: string[],
  isM: boolean,
) => {
  const _to = [`${mt}to`, clr, prop].join("");
  const _from = [`${mt}from`, clr, prop].join("");
  const _via = [`${mt}via`, clr, prop].join("");

  const [c1, c2] = val;

  const color = med({ [m]: c1, ...(!isM && { dark: med({ [m]: c2 }) }) });

  c[_to] = [qt_gradient_to.new(color)];

  c[_from] = [
    qt_gradient_from.new(color),
    qt_gradient_stops.new(join([qt_gradient_from, qt_gradient_to])),
  ];

  c[_via] = [
    qt_gradient_stops.new(
      med({
        [m]: join([qt_gradient_from, c1, qt_gradient_to]),
        ...(!isM && {
          dark: med({
            [m]: join([qt_gradient_from, c2, qt_gradient_to]),
          }),
        }),
      }),
    ),
  ];
};

const PLACEHOLDER = (
  c: CSS,
  t: string,
  clr: string,
  prop: string,
  _media: (v: VarType) => media,
) => {
  const _cname = [`${t}placeholder`, clr, prop].join("");
  c[_cname] = [
    qt_placeholder_opacity,
    ps.placeholder()({
      color: _media(qt_placeholder_opacity),
    }),
  ];
};

const def_ring_color = HexRGB(["#000000", "#ffffff"])(qt_ring_opacity);
export const qt_ring_color = Var({
  qt_ring_color: def_ring_color,
});

export const qt_ring_off_color = Var({
  qt_ring_off_color: def_ring_color,
});

export const qt_ring_inset = Var({
  qt_ring_inset: "",
});

const RING = (
  c: CSS,
  t: string,
  clr: string,
  prop: string,
  _media: (v: VarType) => media,
) => {
  const _cname = [`${t}ring`, clr, prop].join("");
  const _cname2 = [`${t}ring_offset`, clr, prop].join("");

  const def_hex = _media(qt_ring_opacity);
  //
  c[_cname] = [qt_ring_opacity, qt_ring_color.new(def_hex)];
  c[_cname2] = [qt_ring_opacity, qt_ring_off_color.new(def_hex)];
};
