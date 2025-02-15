import { CSS } from "sweetss";
import { MEDIA } from "../config";
import Bg from "./background";
import Border from "./border";
import Color from "./colors";
import Cursor from "./cursor";
import Display from "./display";
import Filter from "./filter";
import Opacity from "./opacity";
import Outline from "./outline";
import Placeholder from "./placeholder";
import Ring from "./ring";
import Shadow from "./shadow";

export default (c: CSS) => {
  MEDIA((t, m) => {
    [
      //
      Bg,
      Border,
      Color,
      Cursor,
      Display,
      Filter,
      Opacity,
      Outline,
      Placeholder,
      Shadow,
    ].forEach((ap) => {
      //
      ap(c, t, m);
    });
  });
};
