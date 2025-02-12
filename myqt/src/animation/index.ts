import { CSS, KFCSS, f, __ } from "sweetss";
import { INCREMENT, EASE } from "../config";
import { $$, obj, oItems, oVals } from "../@";
import ANIM from "./animate";

export default (c: CSS, kf: KFCSS) => {
  INCREMENT.forEach((i) => {
    Delay(c, i);
    Duration(c, i);
  });

  EASE.forEach((e) => {
    Ease(c, e);
  });

  ["linear", "step-start", "step-end"].forEach((e) => {
    Misc(c, e);
  });

  Transition(c);
  Direction(c);
  FillMode(c);
  Iteration(c);

  ANIM(c, kf);
};

const Delay = (c: CSS, i: number) => {
  c[`delay_${i}`] = {
    animationDelay: `${i}ms`,
  };
};

const Duration = (c: CSS, i: number) => {
  c[`duration_${i}`] = {
    animationDuration: `${i}ms`,
  };
};

const Ease = (c: CSS, e: string) => {
  let es = `ease_${e}`;
  if (!e) {
    es = "ease";
  }
  c[es] = {
    transitionTimingFunction: e ? `ease-${e.replace("_", "-")}` : "ease",
  };
};

const Misc = (c: CSS, e: string) => {
  c[`animation_${e.replaceAll("-", "_")}`] = {
    transitionTimingFunction: e.replace("_", "-"),
  };
};

const trans = {
  none: ["none"],
  all: ["all"],
  colors: ["background-color", "border-color", "color", "fill", "stroke"],
  opacity: ["opacity"],
  shadow: ["box-shadow"],
  transform: ["transform"],
};

const Transition = (c: CSS) => {
  oItems(trans).forEach(([k, v]) => {
    c[`transition_${k}`] = {
      transitionProperty: v,
    };
  });
  oVals(trans)
    .flat()
    .filter((f) => !["none", "all"].includes(f));
};

const Direction = (c: CSS) => {
  const gname: obj<string> = {
    normal: "normal",
    _reverse: "reverse",
    _alter: "alternate",
    _alter_reverse: "alternate-reverse",
  };
  //
  oItems(gname).forEach(([k, v]) => {
    //
    c[`direction${k}`] = {
      animationDirection: v,
    };
  });
};

const FillMode = (c: CSS) => {
  const gname: obj<string> = {
    none: "none",
    forwards: "forwards",
    backwards: "backwards",
    both: "both",
  };
  oItems(gname).forEach(([k, v]) => {
    //
    c[`anim_fill_${k}`] = {
      animationFillMode: v,
    };
  });
};

const Iteration = (c: CSS) => {
  __.fill(10).forEach((_, ind) => {
    const cnt = ind + 1;
    c[`iteration_${cnt}`] = {
      animationIterationCount: cnt,
    };
  });

  c[`iteration_infinite`] = {
    animationIterationCount: "infinite",
  };
};
