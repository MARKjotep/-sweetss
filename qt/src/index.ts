import { $$, CSS, CSSProps, KFCSS } from "sweetss";
import { Flex } from "./flex";
import { WH } from "./widthHeight";
import { INLINEBLOCK, MP } from "./marginPadding";
import { RADIUS, BORDER } from "./border";
import {
  CURSOR,
  DISPLAY,
  OVERFLOW,
  POSITION,
  OPACITY,
  ZINDEX,
  WHITESPACE,
  VISIBLE,
  VERTICAL,
  SELECT,
  LINEHEIGHT,
  OVERSCROLL,
} from "./appearance";
import { TRANSITION } from "./transitionAnim";
import { ANIMATION } from "./animation";
import { BACKGROUND } from "./background";
import { COLOR } from "./color";
import { TEXT } from "./text";
import { OUTLINE } from "./outline";
import { COLUMN } from "./column";
import { TRANSFORM, TRANSX } from "./transform";
import { WORD } from "./word";
import { LIST } from "./list";
import { FONTY } from "./font";
import { BOX, SHADOW } from "./box";
import { SCROLL } from "./scroll";

/*
-------------------------

-------------------------
*/

class MISC {
  static get visible() {
    return new VISIBLE().visible;
  }
  static get hidden() {
    return new VISIBLE().hidden;
  }
  static get select() {
    return new SELECT().select;
  }
  static get noSelect() {
    return new SELECT().none;
  }
}

class _ANIMATION extends MISC {
  static get TRANSITION() {
    return new TRANSITION();
  }
  static get ANIMATION() {
    return new ANIMATION(true);
  }
  static animation(val: CSSProps) {
    return new ANIMATION(true).animation(val);
  }
}

class APPEARANCE extends _ANIMATION {
  static get BG() {
    return new BACKGROUND();
  }
  static get COLOR() {
    return new COLOR({ data: { prop: "color" } });
  }
  static get TEXT() {
    return new TEXT();
  }
  static get FONT() {
    return new FONTY();
  }
  static get VALIGN() {
    return new VERTICAL();
  }
  static get WORD() {
    return new WORD();
  }
  static get CURSOR() {
    return new CURSOR();
  }
  static get DISPLAY() {
    return new DISPLAY();
  }
  static get POSITION() {
    return new POSITION();
  }
  static get RADIUS() {
    return new RADIUS();
  }
  static get BORDER() {
    return new BORDER();
  }
  static get OUTLINE() {
    return new OUTLINE();
  }
  static get COLUMN() {
    return new COLUMN();
  }
  static get OVERFLOW() {
    return new OVERFLOW();
  }
  static get OPACITY() {
    return new OPACITY();
  }
  static get ZIndex() {
    return new ZINDEX();
  }
  static get LINE() {
    return new LINEHEIGHT();
  }
  static get WHITESPACE() {
    return new WHITESPACE();
  }
}

export class $ extends APPEARANCE {
  static get FLEX() {
    return new Flex();
  }
  static get WIDTH() {
    return new WH({ data: { wh: "width", first: "" } });
  }
  static get HEIGHT() {
    return new WH({ data: { wh: "height", first: "" } });
  }
  static get TOP() {
    return new WH({ data: { wh: "top", first: "" } });
  }
  static get LEFT() {
    return new WH({ data: { wh: "left", first: "" } });
  }
  static get RIGHT() {
    return new WH({ data: { wh: "right", first: "" } });
  }
  static get BOTTOM() {
    return new WH({ data: { wh: "bottom", first: "" } });
  }
  static get MAX() {
    return {
      get WIDTH() {
        return new WH({ data: { wh: "maxWidth", first: "w" } });
      },
      get HEIGHT() {
        return new WH({ data: { wh: "maxHeight", first: "h" } });
      },
      get BLOCK() {
        return new INLINEBLOCK({
          data: { bin: "maxBlockSize", side: "" },
        });
      },
      get INLINE() {
        return new INLINEBLOCK({
          data: { bin: "maxInlineSize", side: "" },
        });
      },
    };
  }
  static get MIN() {
    return {
      get WIDTH() {
        return new WH({ data: { wh: "minWidth", first: "w" } });
      },
      get HEIGHT() {
        return new WH({ data: { wh: "minHeight", first: "h" } });
      },
      get BLOCK() {
        return new INLINEBLOCK({
          data: { bin: "minBlockSize", side: "" },
        });
      },
      get INLINE() {
        return new INLINEBLOCK({
          data: { bin: "minInlineSize", side: "" },
        });
      },
    };
  }
  static get MARGIN() {
    return new MP({ data: { mp: "margin", side: "" } });
  }
  static get PADDING() {
    return new MP({ data: { mp: "padding", side: "" } });
  }
  static get TRANSFORM() {
    return new TRANSFORM();
  }
  static transform(tran: TRANSX) {
    return new TRANSFORM().transform(tran);
  }
  static get LIST() {
    return new LIST();
  }
  static get BOX() {
    return new BOX();
  }
  static get SHADOW() {
    return new SHADOW();
  }
  static get SCROLL() {
    return new SCROLL();
  }
  static get OVERSCROLL() {
    return new OVERSCROLL();
  }
}
