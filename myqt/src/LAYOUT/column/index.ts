import { CSS, med } from "sweetss";
import { $$, __, obj } from "../../@";
import { FILL, ARR, PIXEL } from "../../config";

export default (c: CSS, t: string, m: string) => {
  const TCOL = `${t}col_`;
  [
    //
    Count,
    Gap,
    Fill,
    Rule_Style,
    Rule_Width,
    Colum_Width,
  ].forEach((mm) => mm(c, TCOL, m));

  c[`${TCOL}span`] = {
    columnSpan: med({ [m]: "all" }),
  };
};

//
const Count = (c: CSS, t: string, m: string) => {
  FILL(
    (i) => {
      c[`${t}count_${i}`] = {
        columnCount: med({ [m]: i }),
      };
    },
    {
      count: 5,
    },
  );
};

const Gap = (c: CSS, t: string, m: string) => {
  FILL(
    (i, incr) => {
      c[`${t}gap_${i}`] = {
        columnGap: med({ [m]: incr }),
      };
    },
    {
      count: 5,
      increment: 0.5,
      initial: 0.5,
    },
  );
};

const Fill = (c: CSS, t: string, m: string) => {
  ARR(
    (nm, p) => {
      c[`${t}${nm}`] = {
        columnFill: med({ [m]: p }),
      };
    },
    ["balance", "auto"],
  );
};

const Rule_Style = (c: CSS, t: string, m: string) => {
  const style = "hidden|dotted|dashed|solid|double|groove|ridge|inset|outset";

  ARR((n, p) => {
    c[`${t}rule_${n}`] = {
      columnRuleStyle: med({ [m]: p }),
    };
  }, style.split("|"));
};

const Rule_Width = (c: CSS, t: string, m: string) => {
  PIXEL((n, px) => {
    c[`${t}rule${n}`] = {
      columnRuleWidth: med({ [m]: px }),
    };
  });
};

const Colum_Width = (c: CSS, t: string, m: string) => {
  FILL(
    (i, incr) => {
      c[`${t}wid_${incr}`] = {
        columnWidth: med({ [m]: incr }),
      };
    },
    {
      count: 10,
      increment: 10,
      initial: 10,
    },
  );
};
