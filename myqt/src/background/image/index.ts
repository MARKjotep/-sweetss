import { CSS } from "sweetss";

export default (c: CSS) => {
  ["none"].forEach((p) => {
    c[`bg_${p}`] = {
      backgroundImage: "none",
    };
  });
};
