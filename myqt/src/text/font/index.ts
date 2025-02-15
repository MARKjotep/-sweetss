import { CSS } from "sweetss";
import { $$, __ } from "../../@";
import { DIVIDED_BY } from "../../config";

export default (c: CSS) => {
  c.font_smoothing = {
    webkitFontSmoothing: "auto",
  };
};
