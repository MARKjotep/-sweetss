import { CSS, _var } from "sweetss";
import { __, obj } from "../@";
import { REMS } from "../config";
import Rule from "./rule";
import Width from "./width";

const gname: obj<string> = {
  count: "border-box",
};

//
const pre = "col";
//
export default (c: CSS) => {
  Count(c);
  Fill(c);
  Gap(c);

  Rule(c);
  Width(c);

  c[`${pre}_span`] = {
    columnSpan: "all",
  };
};

//
const Count = (c: CSS) => {
  __.fill(5).forEach((_, ind) => {
    const _i = ind + 1;
    c[`${pre}_count_${_i}`] = {
      columnCount: _i,
    };
  });
};

const Fill = (c: CSS) => {
  ["balance", "auto"].forEach((cl) => {
    c[`${pre}_${cl}`] = {
      columnFill: cl,
    };
  });
};

const Gap = (c: CSS) => {
  REMS.forEach((r, ind) => {
    const _i = ind + 1;
    c[`${pre}_gap_${_i}`] = {
      columnGap: r,
    };
  });
};
