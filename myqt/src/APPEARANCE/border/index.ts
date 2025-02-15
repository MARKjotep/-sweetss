import { CSS, med, ps } from "sweetss";
import { PIXEL, OBJ, XY, FILL, PERCENT, ARR } from "../../config";

export default (c: CSS, t: string, m: string) => {
  [
    //
    Divide,
    Radius,
    Sides,
    Style,
  ].forEach((mm) => mm(c, t, m));
};

const Divide = (c: CSS, t: string, m: string) => {
  PIXEL((num, px) => {
    XY((xy) => {
      c[`${t}divide_${xy}${num}`] = [
        ps.child("*")(
          ps.not(":first-child")({
            [xy == "X" ? "borderLeftWidth" : "borderTopWidth"]: med({
              [m]: px,
            }),
          }),
        ),
      ];
    });
    //
  });
};

const Radius = (c: CSS, t: string, m: string) => {
  //
  const _tt = `${t}radius_`;
  const _REOBJ = (pre: string, val: any, isp: boolean = false) => {
    //
    const _v = med({ [m]: val });
    //
    c[`${_tt}${pre}`] = {
      borderRadius: _v,
    };

    OBJ(
      (nm, v) => {
        c[`${_tt}${nm}_${pre}`] = {
          [`border${v}Radius`]: _v,
        };
      },
      {
        bl: "BottomLeft",
        br: "BottomRight",
        tl: "TopLeft",
        tr: "TopRight",
      },
    );

    OBJ(
      (nm, v) => {
        //
        c[`${_tt}${nm}_${pre}`] = {
          borderRadius: med({
            [m]: v.map((mj) => (mj ? val : isp ? `${mj}%` : mj)),
          }),
        };
      },
      {
        b: [0, 0, 1, 1],
        t: [1, 1, 0, 0],
        l: [1, 0, 0, 1],
        r: [0, 1, 1, 0],
      },
    );
  };

  //
  PERCENT((n, pr) => _REOBJ(`${n}p`, pr, true), {
    min: 0,
    max: 50,
  });
  FILL((i, incr) => _REOBJ(`${i}x`, incr), {
    count: 5,
    increment: 0.5,
    initial: 0.5,
  });
};

const Sides = (c: CSS, t: string, m: string) => {
  const _tt = `${t}border`;
  PIXEL((num, px) => {
    const PX = med({ [m]: px });
    c[`${_tt}${num}`] = {
      borderWidth: PX,
    };

    OBJ(
      (k, v) => {
        c[`${_tt}_${k}${num}`] = {
          [`border${v}Width`]: PX,
        };
      },
      {
        b: "Bottom",
        l: "Left",
        r: "Right",
        t: "Top",
      },
    );
  });
};

const Style = (c: CSS, t: string, m: string) => {
  const style =
    "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset";

  ARR((n, p) => {
    c[`${t}border_${n}`] = {
      borderStyle: med({ [m]: p }),
    };
  }, style.split("|"));
};
