import { CSS } from "sweetss";

export default (c: CSS) => {
  const syntx =
    "multiply|screen|overlay|darken|lighten|color-dodge|saturation|color|luminosity";

  syntx.split("|").forEach((p) => {
    c[`bg_blend_${p.replaceAll("-", "_")}`] = {
      backgroundBlendMode: p,
    };
  });
};
