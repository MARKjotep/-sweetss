import { CSS, f, med } from "sweetss";
import { __ } from "../@";
import Size from "./size";
import Font from "./font";
import Decoration from "./decoration";

export default (c: CSS) => {
  Size(c);
  Font(c);
  Misc(c);
  Decoration(c);
};

const Misc = (c: CSS) => {
  c.truncate = [
    {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
  ];
};
