import { CSS, KFCSS, f, med } from "sweetss";
import { $$, oItems, oVals } from "../../@";

export default (c: CSS, kf: KFCSS, t: string, m: string) => {
  //
  c[`${t}animation_none`] = [
    {
      animation: med({ [m]: "none" }),
    },
  ];

  [
    //
    Bounce,
    Ping,
    Pulse,
    Spin,
  ].forEach((an) => {
    an(c, kf, t, m);
  });
};

const Bounce = (c: CSS, kf: KFCSS, t: string, m: string, name = "bounce") => {
  c[`${t}animation_${name}`] = [
    {
      animation: med({ [m]: [name, "1s", "infinite"] }),
    },
  ];

  kf[name] = {
    "10%, 100%": {
      transform: f.translateY("-25%"),
      animationTimingFunction: f.cubicBezier(0.8, 0, 1, 1),
    },
    "50%": {
      transform: "none",
      animationTimingFunction: f.cubicBezier(0, 0, 0.2, 1),
    },
  };
};

const Ping = (c: CSS, kf: KFCSS, t: string, m: string, name = "ping") => {
  c[`${t}animation_${name}`] = [
    {
      animation: med({
        [m]: [name, "1s", f.cubicBezier(0, 0, 0.2, 1), "infinite"],
      }),
    },
  ];

  kf[name] = {
    "100%, 75%": {
      transform: f.scale(2),
      opacity: 0,
    },
  };
};

const Pulse = (c: CSS, kf: KFCSS, t: string, m: string, name = "pulse") => {
  c[`${t}animation_${name}`] = [
    {
      animation: med({
        [m]: [name, "2s", f.cubicBezier(0.4, 0, 0.6, 1), "infinite"],
      }),
    },
  ];

  kf[name] = {
    "50%": {
      opacity: 0.5,
    },
  };
};

const Spin = (c: CSS, kf: KFCSS, t: string, m: string, name = "spin") => {
  c[`${t}animation_${name}`] = [
    {
      animation: med({ [m]: [name, "1s", "linear", "infinite"] }),
    },
  ];

  kf[name] = {
    "100%": {
      transform: f.rotate(360),
    },
  };
};
