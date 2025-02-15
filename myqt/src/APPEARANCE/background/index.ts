import { CSS, f, med } from "sweetss";
import { DIVIDED_BY, XY, ARR, OBJ } from "../../config";
import { qt_gradient_stops } from "../colors/all";

export default (c: CSS, t: string, m: string) => {
  const BVAL = `${t}bg_`;

  [
    Attachment,
    Blend,
    ClipOrigin,
    Gradient,
    Image,
    Position,
    Repeat,
    Size,
  ].forEach((mm) => mm(c, BVAL, m));
};

const Attachment = (c: CSS, t: string, m: string) => {
  ARR(
    (nm, p) => {
      c[`${t}${nm}`] = {
        backgroundAttachment: med({ [m]: p }),
      };
    },
    ["fixed", "local", "scroll"],
  );
};

const Blend = (c: CSS, t: string, m: string) => {
  const syntx =
    "multiply|screen|overlay|darken|lighten|color-dodge|saturation|color|luminosity";
  ARR((nm, p) => {
    c[`${t}blend_${nm}`] = {
      backgroundBlendMode: med({ [m]: p }),
    };
  }, syntx.split("|"));
};

const ClipOrigin = (c: CSS, t: string, m: string) => {
  ARR(
    (n) => {
      OBJ(
        (k, v) => {
          const prp = n === "clip" ? "backgroundClip" : "backgroundOrigin";
          c[`${t}${n}_${k}`] = {
            [prp]: med({ [m]: v }),
          };
        },
        {
          border: "border-box",
          padding: "padding-box",
          content: "content-box",
          text: "text",
        },
      );
    },
    ["clip", "origin"],
  );
};

const Gradient = (c: CSS, t: string, m: string) => {
  OBJ(
    (k, v) => {
      c[`${t}gradient_to_${k}`] = {
        backgroundImage: med({
          [m]: f.linearGradient(`to ${v}`, qt_gradient_stops),
        }),
      };
    },
    {
      b: "bottom",
      bl: "bottom left",
      br: "bottom right",
      l: "left",
      r: "right",
      t: "top",
      tl: "top left",
      tr: "top right",
    },
  );
};

const Image = (c: CSS, t: string, m: string) => {
  ARR(
    (nm, p) => {
      c[`${t}${nm}`] = {
        backgroundImage: med({ [m]: p }),
      };
    },
    ["none"],
  );
};

const Position = (c: CSS, t: string, m: string) => {
  OBJ(
    (k, v) => {
      c[`${t}${k}`] = {
        backgroundPosition: med({ [m]: v }),
      };
    },
    {
      bottom: "bottom",
      center: "center",
      left: "left",
      left_bottom: "left-bottom",
      left_top: "left-top",
      right: "right",
      right_bottom: "right-bottom",
      right_top: "right-top",
      top: "top",
    },
  );

  XY((xy) => {
    ARR(
      (nm, p) => {
        c[`${t}${xy}_${nm}`] = {
          [`backgroundPosition${xy}`]: med({ [m]: p }),
        };
      },
      ["left", "right", "center"],
    );
    //
    DIVIDED_BY((d: number, p: string, i: number) => {
      let _ind = i + 1;
      c[`${t}${xy}_${_ind}d${d}`] = {
        [`backgroundPosition${xy}`]: med({ [m]: p }),
      };
    });
  });
};

const Repeat = (c: CSS, t: string, m: string) => {
  ARR(
    (nm, p) => {
      c[`${t}${nm}`] = {
        backgroundRepeat: med({ [m]: p }),
      };
    },
    ["repeat", "repeat-x", "repeat-y", "no-repeat", "round", "space"],
  );
};

const Size = (c: CSS, t: string, m: string) => {
  ARR(
    (nm, p) => {
      c[`${t}${nm}`] = {
        backgroundSize: med({ [m]: p }),
      };
    },
    ["auto", "contain", "cover"],
  );
};

//
