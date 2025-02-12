import { CSS } from "sweetss";
import { $$, obj, oItems } from "../../@";

const gname: obj<string> = {
  border: "border-box",
  padding: "padding-box",
  content: "content-box",
  text: "text",
};

export default (c: CSS) => {
  oItems(gname).forEach(([k, v]) => {
    c[`bg_clip_${k}`] = {
      backgroundClip: v,
    };

    c[`bg_origin_${k}`] = {
      backgroundOrigin: v,
    };
  });
};
