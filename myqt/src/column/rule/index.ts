import { CSS } from "sweetss";
import { BORDER_PX } from "../../config";

const pre = "col";
export default (c: CSS) => {
  Style(c);
  Width(c);
};

const Style = (c: CSS) => {
  const style = "hidden|dotted|dashed|solid|double|groove|ridge|inset|outset";
  style.split("|").forEach((st) => {
    c[`${pre}_rule_${st}`] = {
      columnRuleStyle: st,
    };
  });
};

const Width = (c: CSS) => {
  BORDER_PX((n, px) => {
    c[`${pre}_rule${n}`] = {
      columnRuleWidth: `${px}px`,
    };
  });
};
