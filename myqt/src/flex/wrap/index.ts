import { CSS } from "sweetss";
import { $$, __, obj, oItems } from "../../@";

const gname: obj<string> = {
  nowrap: "nowrap",
  wrap: "wrap",
  wrap_rev: "wrap-reverse",
};

export default (c: CSS) => {
  oItems(gname).forEach(([k, v]) => {
    c[`f_${k}`] = { flexWrap: v };
  });
};
