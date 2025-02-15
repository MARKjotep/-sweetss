import { CSS, med } from "sweetss";
import { __, obj } from "../../@";
import { OBJ } from "../../config";

export default (c: CSS, t: string, m: string) => {
  OBJ((k, v) => {
    //
    c[`${t}cursor_${k}`] = {
      cursor: med({ [m]: v }),
    };

    ["auto", "none"].forEach((an) => {
      //
      c[`${t}pointer_ev_${an}`] = {
        pointerEvents: med({ [m]: an }),
      };
      c[`${t}select_${an}`] = {
        userSelect: med({ [m]: an }),
      };
    });
  }, gname);
};

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
