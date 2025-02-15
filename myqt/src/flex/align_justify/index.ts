import { __, CSS } from "sweetss";
import { obj, oItems } from "../../@";

export default (c: CSS) => {
  Item(c);
  Content(c);
  Self(c);
};

const Item = (c: CSS) => {
  const gname: obj<string> = {
    stretch: "stretch",
    center: "center",
    start: "start",
    end: "end",
    f_start: "flex-start",
    f_end: "flex-end",
    baseline: "baseline",
  };

  oItems(gname).forEach(([k, v]) => {
    c[`align_items_${k}`] = {
      alignItems: v,
    };
  });

  const gname2: obj<string> = {
    stretch: "stretch",
    center: "center",
    start: "start",
    end: "end",
    left: "left",
    right: "right",
  };

  oItems(gname2).forEach(([k, v]) => {
    c[`jstfy_items_${k}`] = {
      justifyItems: v,
    };
  });
};

const Content = (c: CSS) => {
  const gname: obj<string> = {
    stretch: "stretch",
    center: "center",
    start: "flex-start",
    end: "flex-end",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly",
  };
  oItems(gname).forEach(([k, v]) => {
    c[`align_content_${k}`] = {
      alignContent: v,
    };
    c[`jstfy_content_${k}`] = {
      justifyContent: v,
    };
  });
};

const Self = (c: CSS) => {
  const gname: obj<string> = {
    stretch: "stretch",
    center: "center",
    f_start: "flex-start",
    f_end: "flex-end",
    baseline: "baseline",
  };

  oItems(gname).forEach(([k, v]) => {
    c[`align_self_${k}`] = {
      alignSelf: v,
    };
  });

  const gname2: obj<string> = {
    stretch: "stretch",
    center: "center",
    start: "start",
    end: "end",
    left: "left",
    right: "right",
    f_start: "flex-start",
    f_end: "flex-end",
    baseline: "baseline",
  };

  oItems(gname2).forEach(([k, v]) => {
    c[`jstfy_self_${k}`] = {
      justifySelf: v,
    };
  });
};
