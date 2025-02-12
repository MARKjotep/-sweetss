import { CSS } from "sweetss";
import { __, obj, oItems } from "../@";

const gname: obj<string> = {
  alias: "alias",
  all_scroll: "all-scroll",
  auto: "auto",
  cell: "cell",
  col_resize: "col-resize",
  context_menu: "context-menu",
  copy: "copy",
  crosshair: "crosshair",
  default: "default",
  e_resize: "e-resize",
  ew_resize: "ew-resize",
  grab: "grab",
  grabbing: "grabbing",
  help: "help",
  move: "move",
  n_resize: "n-resize",
  ne_resize: "ne-resize",
  nesw_resize: "nesw-resize",
  ns_resize: "ns-resize",
  nw_resize: "nw-resize",
  nwse_resize: "nwse-resize",
  no_drop: "no-drop",
  none: "none",
  not_allowed: "not-allowed",
  pointer: "pointer",
  progress: "progress",
  row_resize: "row-resize",
  s_resize: "s-resize",
  se_resize: "se-resize",
  sw_resize: "sw-resize",
  text: "text",
  vertical_text: "vertical-text",
  w_resize: "w-resize",
  wait: "wait",
  zoom_in: "zoom-in",
  zoom_out: "zoom-out",
};

export default (c: CSS) => {
  oItems(gname).forEach(([k, v]) => {
    c[`cursor_${k}`] = {
      display: v,
    };
  });
};
