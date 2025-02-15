import { CSS, f, med } from "sweetss";
import { __ } from "../../@";
import { MEDIA, PIXEL } from "../../config";

export default (c: CSS, t: string, m: string) => {
  PIXEL((n, px) => {
    const BD = med({ [m]: px });
    //
    c[`${t}backdrop${n}`] = {
      backdropFilter: BD,
      webkitBackdropFilter: BD,
    };

    c[`${t}blur${n}`] = {
      filter: med({ [m]: `blur(${px})` }),
    };
    //
  });
};
