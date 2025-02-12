import { CSS } from "sweetss";

export default (c: CSS) => {
  ["auto", "contain", "cover"].forEach((p) => {
    c[`bg_${p}`] = {
      backgroundSize: p,
    };
  });
};
