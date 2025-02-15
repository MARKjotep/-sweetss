import { CSS, f } from "sweetss";
import { __ } from "../../@";

export default (c: CSS) => {
  def(c);
  wrap(c);

  c.overflow_anchor = {
    overflowAnchor: "auto",
  };
};

const def = (c: CSS) => {
  ["hidden", "clip", "scroll", "auto"].forEach((d) => {
    c[`overflow_${d}`] = {
      overflow: d,
    };

    c[`overflow_x_${d}`] = {
      overflowX: d,
    };
    c[`overflow_y_${d}`] = {
      overflowY: d,
    };
  });
};

const wrap = (c: CSS) => {
  ["normal", "anywhere", "break-word"].forEach((d) => {
    c[`overflow_wrap_${d.replace("-", "_")}`] = {
      overflowWrap: d,
    };
  });
};
