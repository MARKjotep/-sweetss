import { CSS, KFCSS, f } from "sweetss";

import { $$, oItems, oVals } from "../../@";

export default (c: CSS, kf: KFCSS) => {
  c[`animation_none`] = [
    {
      animation: "none",
    },
  ];
  //
  Bounce(c, kf);
  Ping(c, kf);
  Pulse(c, kf);
  Spin(c, kf);
};

const Bounce = (c: CSS, kf: KFCSS, name = "bounce") => {
  c[`animation_${name}`] = [
    {
      animation: [name, "1s", "infinite"],
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

const Ping = (c: CSS, kf: KFCSS, name = "ping") => {
  c[`animation_${name}`] = [
    {
      animation: [name, "1s", f.cubicBezier(0, 0, 0.2, 1), "infinite"],
    },
  ];

  kf[name] = {
    "100%, 75%": {
      transform: f.scale(2),
      opacity: 0,
    },
  };
};

const Pulse = (c: CSS, kf: KFCSS, name = "pulse") => {
  c[`animation_${name}`] = [
    {
      animation: [name, "2s", f.cubicBezier(0.4, 0, 0.6, 1), "infinite"],
    },
  ];

  kf[name] = {
    "50%": {
      opacity: 0.5,
    },
  };
};

const Spin = (c: CSS, kf: KFCSS, name = "spin") => {
  c[`animation_${name}`] = [
    {
      animation: [name, "1s", "linear", "infinite"],
    },
  ];

  kf[name] = {
    "100%": {
      transform: f.rotate(360),
    },
  };
};
