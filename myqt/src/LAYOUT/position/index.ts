import { CSS } from "sweetss";
import Directions from "./direction";

export default (c: CSS) => {
  ["static", "absolute", "fixed", "relative", "sticky"].forEach((p) => {
    c[p] = {
      position: p,
    };
  });

  Directions(c);
};
