import { CSS, f, med } from "sweetss";

import Attachment from "./attachment";
import Blend from "./blend";
import Clip from "./clip_origin";
import Gradient from "./gradient";
import Image from "./image";
import Position from "./position";
import Repeat from "./repeat";
import Size from "./size";

import { $$ } from "../@";

export default (c: CSS) => {
  Attachment(c);
  Blend(c);
  Clip(c);
  Gradient(c);
  Image(c);
  Position(c);
  Repeat(c);
  Size(c);
};
