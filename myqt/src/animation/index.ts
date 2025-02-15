import { CSS, KFCSS, f, ps, __, med } from "sweetss";
import { ANIMATE_INCREMENT, MEDIA, OBJ, ARR, FILL } from "../config";
import ANIM from "./animate";
import { $$ } from "../@";

export default (c: CSS, kf: KFCSS) => {
  // Hover
  //

  MEDIA((t, m) => {
    [
      //
      MS,
      Timing,
      ALL,
      Iterations,
    ].forEach((ap) => {
      //
      ap(c, t, m);
      ANIM(c, kf, t, m);
    });
  });
  //
};

const MS = (c: CSS, t: string, m: string) => {
  ANIMATE_INCREMENT.forEach((i) => {
    const ims = med({ [m]: `${i}ms` });
    OBJ(
      (k, v) => {
        c[`${t}${k}_${i}`] = {
          [v]: ims,
        };
      },
      {
        delay: "animationDelay",
        duration: "animationDuration",
      },
    );
  });
};

const Timing = (c: CSS, t: string, m: string) => {
  ARR(
    (n, p) => {
      //
      c[`${t}timing_${n}`] = {
        transitionTimingFunction: med({ [m]: p }),
      };
    },
    [
      "ease",
      "ease-in",
      "ease-out",
      "ease-in-out",
      "linear",
      "step-start",
      "step-end",
    ],
  );
};

const ALL = (c: CSS, t: string, m: string) => {
  OBJ(
    (k, v) => {
      const nm = `${t}${k}`;
      OBJ((k2, v2: any) => {
        OBJ((k3, v3: any) => {
          c[`${nm}_${k3}`] = {
            [k2]: med({ [m]: v3 }),
          };
        }, v2 as any);
      }, v as any);
    },
    {
      transition: {
        transitionProperty: {
          none: ["none"],
          all: ["all"],
          colors: [
            "background-color",
            "border-color",
            "color",
            "fill",
            "stroke",
          ],
          opacity: ["opacity"],
          shadow: ["box-shadow"],
          transform: ["transform"],
        },
      },
      direction: {
        animationDirection: {
          normal: "normal",
          reverse: "reverse",
          alter: "alternate",
          alter_reverse: "alternate-reverse",
        },
      },
      fill: {
        animationFillMode: {
          none: "none",
          forwards: "forwards",
          backwards: "backwards",
          both: "both",
        },
      },
    },
  );
};

const Iterations = (c: CSS, t: string, m: string) => {
  //
  c[`${t}iteration_infinite`] = {
    animationIterationCount: med({ [m]: "infinite" }),
  };
  FILL(
    (_, incr) => {
      c[`${t}iteration_${incr}`] = {
        animationIterationCount: med({ [m]: incr }),
      };
    },
    {
      count: 10,
      increment: 1,
      initial: 1,
    },
  );
};
