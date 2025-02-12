import { CSS } from "sweetss";

export default (c: CSS) => {
  ["fixed", "local", "scroll"].forEach((p) => {
    //
    c[`bg_${p}`] = {
      backgroundAttachment: p,
    };
  });
};
