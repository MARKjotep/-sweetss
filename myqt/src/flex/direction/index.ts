import { CSS } from "sweetss";
import { $$, __, obj, oItems } from "../../@";

const gname: obj<string> = {
  row: "row",
  row_rev: "row-reverse",
  column: "column",
  column_rev: "column-reverse",
};

export default (c: CSS) => {
  oItems(gname).forEach(([k, v]) => {
    c[`f_${k}`] = { flexDirection: v };
  });
};
