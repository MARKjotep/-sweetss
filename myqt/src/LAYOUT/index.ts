import { CSS } from "sweetss";
import { MEDIA } from "../config";
import Column from "./column";

export default (c: CSS) => {
  MEDIA((t, m) => {
    [
      Column,
      //
    ].forEach((ap) => {
      //
      ap(c, t, m);
    });
  });
};
