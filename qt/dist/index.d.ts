import { Medyas, CSSProps, KFCSS, media, CSSValue } from 'sweetss';

declare class PROXY<T extends Medyas<T>, Q = Record<string, any>> extends Medyas<T, Q> {
    protected prop: string;
    protected propFN?: (p: string) => string;
    protected valFN?: (val: any) => any;
    protected string: boolean;
    constructor({ prefix, data, values }?: {
        prefix?: string | undefined;
        data?: {} | undefined;
        values?: {} | undefined;
    });
}

declare class PROP extends PROXY<PROP, {}> {
    protected prop: string;
    none: this;
    all: this;
    colors: this;
    font: this;
    background: this;
    opacity: this;
    shadow: this;
    transform: this;
    protected valFN: (val: string) => string[];
}
declare class TIMING extends PROXY<TIMING, {
    prop: string;
}> {
    ease: this;
    ease_in: this;
    ease_out: this;
    ease_in_out: this;
    linear: this;
    step_start: this;
    step_end: this;
    protected propFN: () => string;
    cubicBezier(x1: any, y1: any, x2: any, y2: any): this;
    steps(n: number, position: "start" | "end" | "no" | "jump-start" | "jump-end" | "jump-none" | "jump-both"): this;
}
declare class DELAY_DUR extends PROXY<DELAY_DUR, {
    prop: string;
}> {
    [k: number]: this;
    0.25: this;
    0.5: this;
    0.75: this;
    1: this;
    1.5: this;
    2: this;
    2.5: this;
    3: this;
    3.5: this;
    4: this;
    4.5: this;
    5: this;
    protected valFN: (val: string) => string;
    protected propFN: () => string;
}
declare class TRANS_ANIM {
    private isAnim;
    constructor(isAnim?: boolean);
    get TIMING(): TIMING;
    get DELAY(): DELAY_DUR;
    get DURATION(): DELAY_DUR;
}
declare class TRANSITION extends TRANS_ANIM {
    get PROPERTY(): PROP;
}

declare class PRESET extends Medyas<PRESET, {
    kf: KFCSS;
}> {
    constructor({ prefix, data, values }: {
        prefix?: string | undefined;
        data?: {
            kf: {};
        } | undefined;
        values?: {} | undefined;
    });
    get bounce(): this;
    get ping(): this;
    get pulse(): this;
    get spin(): this;
}
declare class DIRECTION extends PROXY<DIRECTION> {
    protected prop: string;
    normal: this;
    reverse: this;
    alternate: this;
    alternate_reverse: this;
}
declare class FILL extends PROXY<FILL> {
    protected prop: string;
    none: this;
    forwards: this;
    backwards: this;
    both: this;
}
declare class ITER extends PROXY<ITER, {}> {
    protected prop: string;
    [k: number]: this;
    1: this;
    2: this;
    3: this;
    4: this;
    5: this;
    6: this;
    7: this;
    8: this;
    9: this;
    10: this;
    get infinite(): this;
}
declare class ANIM extends Medyas<ANIM, {}> {
    constructor({ prefix, data, values }?: {
        prefix?: string | undefined;
        data?: {} | undefined;
        values?: {} | undefined;
    });
    animation(val: CSSProps): this;
    name(name: string): this;
    duration(n: number): this;
    get paused(): this;
    get running(): this;
}
declare class ANIMATION extends TRANS_ANIM {
    SET(kf: KFCSS): PRESET;
    name(name: string): ANIM;
    animation(val: CSSProps): ANIM;
    get DIRECTION(): DIRECTION;
    get FILL(): FILL;
    get ITERATION(): ITER;
}

declare class SCB {
    protected TH: Flex;
    protected prop: string;
    protected startEnd: [string, string];
    protected _none: string;
    protected _auto: string;
    constructor(TH: Flex, prop: string, startEnd?: [string, string], _none?: string, _auto?: string);
    get start(): Flex;
    get center(): Flex;
    get end(): Flex;
    get none(): Flex;
}
declare class SPACE extends SCB {
    get around(): Flex;
    get between(): Flex;
    get even(): Flex;
}
declare class STRECHED extends SCB {
    get stretch(): Flex;
    get baseline(): Flex;
    get auto(): Flex;
}
declare class GAP extends Medyas<Flex, {
    direction: string;
    reversed: boolean;
}> {
    constructor({ prefix, data, values, }?: {
        prefix?: string | undefined;
        data?: {
            direction: string;
            reversed: boolean;
        } | undefined;
        values?: {} | undefined;
    });
    gap(gap: number): Flex;
    get gap0(): Flex;
    get gap1(): Flex;
    get gap2(): Flex;
    get gap3(): Flex;
    get gap4(): Flex;
    get gap5(): Flex;
    rowGap(gap: number): Flex;
    colGap(gap: number): Flex;
}
declare class Flex extends GAP {
    constructor({ prefix, data, values, }?: {
        prefix?: string | undefined;
        data?: {
            direction: string;
            reversed: boolean;
        } | undefined;
        values?: {} | undefined;
    });
    get BASELINE(): SPACE;
    get STRETCH(): SPACE;
    get CENTER(): SPACE;
    get START(): SPACE;
    get END(): SPACE;
    get column(): this;
    get columnReverse(): this;
    get row(): this;
    get rowReverse(): this;
    get wrap(): this;
    get noWrap(): this;
    get wrapReverse(): this;
    get WRAPPED(): SPACE;
    get SELF(): STRECHED;
    shrink(value?: number): this;
    grow(value?: number): this;
    basis(value?: number): this;
    flex(grow: number, shrink: number, basis: string): this;
}

declare class WH extends PROXY<WH, {
    wh: string;
    first: string;
}> {
    protected prop: string;
    [k: number]: this;
    1: this;
    2: this;
    3: this;
    4: this;
    5: this;
    6: this;
    7: this;
    8: this;
    9: this;
    10: this;
    protected valFN: (val: any) => any;
    constructor({ prefix, data, values, }?: {
        prefix?: string | undefined;
        data?: {
            wh: string;
            first: string;
        } | undefined;
        values?: {} | undefined;
    });
    get pr100(): this;
    get auto(): this;
    get screen(): this;
    /**
     * Pixel
     * @param val number
     */
    px(val: number): this;
    /**
     * Percent
     * @param val number
     */
    pr(val: number): this;
    /**
     * Rem
     * @param val number
     */
    rm(val: number): this;
}

declare class MP extends PROXY<MP, {
    mp: string;
    side: string;
}> {
    [k: number]: this;
    0: this;
    1: this;
    2: this;
    3: this;
    4: this;
    5: this;
    6: this;
    7: this;
    8: this;
    9: this;
    10: this;
    protected valFN: (val: any) => any;
    protected propFN: () => string;
    get auto(): this;
    /**
     * Pixel
     * @param val number
     */
    px(val: number): this;
    /**
     * Rem
     * @param val number
     */
    rm(val: number): this;
    get TOP(): MP;
    get RIGHT(): MP;
    get LEFT(): MP;
    get BOTTOM(): MP;
    get BLOCK(): INLINEBLOCK;
    get INLINE(): INLINEBLOCK;
}
declare class INLINEBLOCK extends PROXY<INLINEBLOCK, {
    bin: string;
    side: "";
}> {
    protected prop: string;
    [k: number]: this;
    0: this;
    1: this;
    2: this;
    3: this;
    4: this;
    5: this;
    6: this;
    7: this;
    8: this;
    9: this;
    10: this;
    protected valFN: (val: any) => any;
    constructor({ prefix, data, values }?: {
        prefix?: string | undefined;
        data?: {
            bin: string;
            side: string;
        } | undefined;
        values?: {} | undefined;
    });
    /**
     * Pixel
     * @param val number
     */
    px(val: number): this;
    /**
     * Percent
     * @param val number
     */
    pr(val: number): this;
    /**
     * Rem
     * @param val number
     */
    rm(val: number): this;
    get END(): INLINEBLOCK;
    get START(): INLINEBLOCK;
}

declare class CLIST extends PROXY<CLIST, {
    prop: string;
}> {
    protected prop: string;
    aliceblue: this;
    antiquewhite: this;
    aqua: this;
    aquamarine: this;
    azure: this;
    beige: this;
    bisque: this;
    black: this;
    blanchedalmond: this;
    blue: this;
    blueviolet: this;
    brown: this;
    burlywood: this;
    cadetblue: this;
    chartreuse: this;
    chocolate: this;
    coral: this;
    cornflowerblue: this;
    cornsilk: this;
    crimson: this;
    cyan: this;
    darkblue: this;
    darkcyan: this;
    darkgoldenrod: this;
    darkgray: this;
    darkgreen: this;
    darkmagenta: this;
    darkorange: this;
    darkorchid: this;
    darkred: this;
    darksalmon: this;
    darkslategray: this;
    darkturquoise: this;
    deeppink: this;
    deepskyblue: this;
    dimgray: this;
    dodgerblue: this;
    firebrick: this;
    forestgreen: this;
    gainsboro: this;
    ghostwhite: this;
    gold: this;
    goldenrod: this;
    gray: this;
    green: this;
    honeydew: this;
    hotpink: this;
    indianred: this;
    indigo: this;
    ivory: this;
    khaki: this;
    lavender: this;
    lavenderblush: this;
    lawngreen: this;
    lemonchiffon: this;
    lightblue: this;
    lightcoral: this;
    lightcyan: this;
    lightgoldenrodyellow: this;
    lightgray: this;
    lightgreen: this;
    lightskyblue: this;
    lightslategray: this;
    lightsteelblue: this;
    lightyellow: this;
    lime: this;
    linen: this;
    maroon: this;
    mediumaquamarine: this;
    mediumblue: this;
    mediumorchid: this;
    mediumseagreen: this;
    mediumslateblue: this;
    mediumspringgreen: this;
    mediumturquoise: this;
    mediumvioletred: this;
    midnightblue: this;
    mintcream: this;
    mistyrose: this;
    moccasin: this;
    navajowhite: this;
    oldlace: this;
    olive: this;
    olivedrab: this;
    orange: this;
    orangered: this;
    orchid: this;
    palegoldenrod: this;
    palegreen: this;
    paleturquoise: this;
    palevioletred: this;
    papayawhip: this;
    peachpuff: this;
    peru: this;
    pink: this;
    plum: this;
    powderblue: this;
    purple: this;
    rebeccapurple: this;
    red: this;
    rosybrown: this;
    royalblue: this;
    saddlebrown: this;
    salmon: this;
    sandybrown: this;
    seagreen: this;
    seashell: this;
    sienna: this;
    silver: this;
    skyblue: this;
    slategray: this;
    snow: this;
    springgreen: this;
    steelblue: this;
    tan: this;
    teal: this;
    thistle: this;
    tomato: this;
    turquoise: this;
    violet: this;
    wheat: this;
    white: this;
    whitesmoke: this;
    yellow: this;
    yellowgreen: this;
    constructor({ prefix, data, values }?: {
        prefix?: string | undefined;
        data?: {
            prop: string;
        } | undefined;
        values?: {} | undefined;
    });
}
declare class AUTODARK extends CLIST {
    protected valFN: (p: string) => media;
    get random(): this;
}
declare class AUTOLIGHT extends CLIST {
    protected valFN: (p: string) => media;
    get random(): this;
}
declare class COLOR extends CLIST {
    protected valFN: (p: string) => string;
    color(color: any): this;
    rgba(R: any, G: any, B: any, A?: any): this;
    get random(): this;
    get transparent(): this;
    get current(): this;
    get AUTOLIGHT(): AUTOLIGHT;
    get AUTODARK(): AUTODARK;
}

declare class BORDER extends Medyas<BORDER, {
    side: string;
}> {
    constructor({ prefix, data, values, }?: {
        prefix?: string | undefined;
        data?: {
            side: string;
        } | undefined;
        values?: {} | undefined;
    });
    color(color: any): this;
    width(width: any): this;
    image(source: string, ...etc: any[]): this;
    get solid(): BORDER;
    get dotted(): BORDER;
    get none(): BORDER;
    get hidden(): BORDER;
    get dashed(): BORDER;
    get double(): BORDER;
    get groove(): BORDER;
    get ridge(): BORDER;
    get inset(): BORDER;
    get outset(): BORDER;
    get TOP(): BORDER;
    get RIGHT(): BORDER;
    get LEFT(): BORDER;
    get BOTTOM(): BORDER;
    get b1(): this;
    get bRed(): this;
    get bRandom(): this;
    get COLOR(): COLOR;
}
declare class RADIUS extends Medyas<RADIUS, {}> {
    constructor({ prefix, data, values }?: {
        prefix?: string | undefined;
        data?: {} | undefined;
        values?: {} | undefined;
    });
    v(val: any | any[]): void;
    tL(val: any): this;
    tR(val: any): this;
    bR(val: any): this;
    bL(val: any): this;
    x(val: any): this;
    y(val: any): this;
    get b0(): this;
    get b0p5(): this;
    get b1(): this;
    get b1p5(): this;
    get b2(): this;
}

declare class CURSOR extends PROXY<CURSOR, {}> {
    protected prop: string;
    alias: this;
    all_scroll: this;
    auto: this;
    cell: this;
    col_resize: this;
    context_menu: this;
    copy: this;
    crosshair: this;
    default: this;
    e_resize: this;
    ew_resize: this;
    grab: this;
    grabbing: this;
    help: this;
    move: this;
    n_resize: this;
    ne_resize: this;
    nesw_resize: this;
    ns_resize: this;
    nw_resize: this;
    nwse_resize: this;
    no_drop: this;
    none: this;
    not_allowed: this;
    pointer: this;
    progress: this;
    row_resize: this;
    s_resize: this;
    se_resize: this;
    sw_resize: this;
    text: this;
    vertical_text: this;
    w_resize: this;
    wait: this;
    zoom_in: this;
    zoom_out: this;
}
declare class DISPLAY extends PROXY<DISPLAY> {
    protected prop: string;
    inline: this;
    block: this;
    contents: this;
    flex: this;
    grid: this;
    inline_block: this;
    inline_flex: this;
    inline_grid: this;
    inline_table: this;
    list_item: this;
    run_in: this;
    table: this;
    table_caption: this;
    table_column_group: this;
    table_header_group: this;
    table_footer_group: this;
    table_row_group: this;
    table_cell: this;
    table_column: this;
    table_row: this;
    none: this;
}
declare class POSITION extends PROXY<POSITION> {
    protected prop: string;
    static: this;
    absolute: this;
    fixed: this;
    relative: this;
    sticky: this;
}
declare class OVERFLOW extends Medyas<OVERFLOW, {
    xy: string;
}> {
    xy: string;
    constructor({ prefix, data, values, }?: {
        prefix?: string | undefined;
        data?: {
            xy: string;
        } | undefined;
        values?: {} | undefined;
    });
    get visible(): this;
    get hidden(): this;
    get scroll(): this;
    get auto(): this;
    get X(): OVERFLOW;
    get Y(): OVERFLOW;
}
declare class OPACITY extends PROXY<OPACITY> {
    protected prop: string;
    [k: number]: this;
    1: this;
    0.9: this;
    0.8: this;
    0.7: this;
    0.6: this;
    0.5: this;
    0.4: this;
    0.3: this;
    0.2: this;
    0.1: this;
    0: this;
    protected valFN: (p: any) => any;
    /**
     * Percent
     * @param val number
     */
    pr(val: number): this;
}
declare class ZINDEX extends PROXY<ZINDEX> {
    protected prop: string;
    [k: number]: this;
    0: this;
    1: this;
    2: this;
    3: this;
    4: this;
    5: this;
    6: this;
    7: this;
    8: this;
    9: this;
    10: this;
}
declare class WHITESPACE extends PROXY<WHITESPACE> {
    protected prop: string;
    normal: this;
    nowrap: this;
    pre: this;
    pre_line: this;
    pre_wrap: this;
}
declare class VISIBLE extends PROXY<VISIBLE> {
    get visible(): this;
    get hidden(): this;
    get collapse(): this;
}
declare class VERTICAL extends PROXY<VERTICAL> {
    protected prop: string;
    baseline: this;
    sub: this;
    super: this;
    top: this;
    text_top: this;
    middle: this;
    bottom: this;
    text_bottom: this;
    [k: number]: this;
    0: this;
    1: this;
    2: this;
    3: this;
    4: this;
    5: this;
    6: this;
    7: this;
    8: this;
    9: this;
    10: this;
    protected valFN: (val: any) => any;
    /**
     * Pixel
     * @param val number
     */
    px(val: number): this;
    /**
     * Percent
     * @param val number
     */
    pr(val: number): this;
}
declare class SELECT extends PROXY<SELECT> {
    get select(): this;
    get none(): this;
}
declare class LINEHEIGHT extends PROXY<LINEHEIGHT> {
    protected prop: string;
    [k: number]: this;
    0: this;
    1: this;
    2: this;
    3: this;
    4: this;
    5: this;
    6: this;
    7: this;
    8: this;
    9: this;
    10: this;
    protected valFN: (val: any) => any;
}
declare class OVERSCROLL extends PROXY<OVERSCROLL, {}> {
    get auto(): this;
    get contain(): this;
    get none(): this;
    get XAuto(): this;
    get XContain(): this;
    get XNone(): this;
    get YAuto(): this;
    get YContain(): this;
    get YNone(): this;
    get INLINEAuto(): this;
    get INLINEContain(): this;
    get INLINENone(): this;
    get BLOCKAuto(): this;
    get BLOCKContain(): this;
    get BLOCKNone(): this;
}

declare class ATTACH extends PROXY<ATTACH, {}> {
    protected prop: string;
    fixed: this;
    local: this;
    scroll: this;
}
declare class BLEND extends PROXY<BLEND, {}> {
    protected prop: string;
    normal: this;
    multiply: this;
    screen: this;
    overlay: this;
    darken: this;
    lighten: this;
    color_dodge: this;
    saturation: this;
    color: this;
    luminosity: this;
}
declare class CLIPOR extends PROXY<CLIPOR, {
    name: string;
}> {
    border_box: this;
    padding_box: this;
    content_box: this;
    text: this;
    constructor({ prefix, data, values }?: {
        prefix?: string | undefined;
        data?: {
            name: string;
        } | undefined;
        values?: {} | undefined;
    });
}
declare class BACKGROUND {
    get ATTACH(): ATTACH;
    get BLEND(): BLEND;
    get CLIP(): CLIPOR;
    get ORIG(): CLIPOR;
    get COLOR(): COLOR;
    color(color: any): COLOR;
}

declare class ALIGN extends PROXY<ALIGN, {
    wh: string;
    first: string;
}> {
    protected prop: string;
    left: this;
    right: this;
    center: this;
    justify: this;
}
declare class DECOR extends PROXY<DECOR, {}> {
    solid: this;
    double: this;
    dotted: this;
    dashed: this;
    wavy: this;
    none: this;
    underline: this;
    overline: this;
    line_through: this;
    protected propFN: (p: string) => "textDecorationLine" | "textDecorationStyle";
    get COLOR(): COLOR;
    thickness(len: any): this;
    get auto(): this;
    get font(): this;
}
declare class EMPH extends PROXY<EMPH, {
    wh: string;
    first: string;
}> {
    protected prop: string;
    over: this;
    under: this;
    left: this;
    right: this;
    none: this;
    filled: this;
    open: this;
    dot: this;
    circle: this;
    double_circle: this;
    triangle: this;
    sesame: this;
    protected propFN: (p: string) => "textEmphasisPosition" | "textEmphasisStyle";
    char(char: string): this;
    get COLOR(): COLOR;
}
declare class INDENT extends PROXY<INDENT, {
    mp: string;
    side: string;
}> {
    protected prop: string;
    [k: number]: this;
    1: this;
    2: this;
    3: this;
    4: this;
    5: this;
    6: this;
    7: this;
    8: this;
    9: this;
    10: this;
    protected valFN: (val: any) => any;
}
declare class JUSTIFY extends PROXY<JUSTIFY, {
    wh: string;
    first: string;
}> {
    protected prop: string;
    auto: this;
    inter_word: this;
    inter_character: this;
    none: this;
}
declare class ORIENTATION extends PROXY<JUSTIFY, {
    wh: string;
    first: string;
}> {
    protected prop: string;
    mixed: this;
    upright: this;
    sideways: this;
    sideways_right: this;
    use_glyph_orientation: this;
}
declare class UNDERLINE extends PROXY<UNDERLINE, {
    wh: string;
    first: string;
}> {
    auto: this;
    under: this;
    from_font: this;
    left: this;
    right: this;
    [k: number]: this;
    1: this;
    2: this;
    3: this;
    4: this;
    5: this;
    6: this;
    7: this;
    8: this;
    9: this;
    10: this;
    protected propFN: (p: string) => "textUnderlinePosition" | "textUnderlineOffset";
    protected valFN: (val: any) => any;
    get autoOffset(): this;
}
declare class TEXT extends PROXY<TEXT> {
    get ALIGN(): ALIGN;
    get DECOR(): DECOR;
    get EMPHASIS(): EMPH;
    get INDENT(): INDENT;
    get JUSTIFY(): JUSTIFY;
    get ORIENTATION(): ORIENTATION;
    get UNDERLINE(): UNDERLINE;
    get clip(): this;
    get ellipsis(): this;
    overflow(custom: string): this;
    decor(val: CSSProps): this;
    get capitalize(): this;
    get uppercase(): this;
    get lowercase(): this;
    get noTransform(): this;
    get COLOR(): COLOR;
}

declare class OUTLINE extends Medyas<OUTLINE, {}> {
    constructor({ prefix, data, values }?: {
        prefix?: string | undefined;
        data?: {} | undefined;
        values?: {} | undefined;
    });
    color(color: any): this;
    width(width: any): this;
    get solid(): OUTLINE;
    get dotted(): OUTLINE;
    get none(): OUTLINE;
    get hidden(): OUTLINE;
    get dashed(): OUTLINE;
    get double(): OUTLINE;
    get groove(): OUTLINE;
    get ridge(): OUTLINE;
    get inset(): OUTLINE;
    get outset(): OUTLINE;
    get b1(): this;
    get bRed(): this;
    get bRandom(): this;
    get COLOR(): COLOR;
    off(off: number): OUTLINE;
    get off0(): OUTLINE;
    get off1(): OUTLINE;
    get off2(): OUTLINE;
    get off3(): OUTLINE;
    get off4(): OUTLINE;
    get off5(): OUTLINE;
}

declare class RULE extends Medyas<RULE, {}> {
    constructor({ prefix, data, values }?: {
        prefix?: string | undefined;
        data?: {} | undefined;
        values?: {} | undefined;
    });
    color(color: any): this;
    width(width: any): this;
    get solid(): RULE;
    get dotted(): RULE;
    get none(): RULE;
    get hidden(): RULE;
    get dashed(): RULE;
    get double(): RULE;
    get groove(): RULE;
    get ridge(): RULE;
    get inset(): RULE;
    get outset(): RULE;
    get COLOR(): COLOR;
}
declare class COUNTR extends PROXY<COUNTR, {
    prop: string;
}> {
    [k: number]: this;
    1: this;
    2: this;
    3: this;
    4: this;
    5: this;
    6: this;
    7: this;
    8: this;
    9: this;
    10: this;
    constructor({ prefix, data, values }?: {
        prefix?: string | undefined;
        data?: {
            prop: string;
        } | undefined;
        values?: {} | undefined;
    });
}
declare class COLUMN extends Medyas<COLUMN, {
    wh: string;
    first: string;
}> {
    constructor({ prefix, data, values }?: {
        prefix?: string | undefined;
        data?: {} | undefined;
        values?: {} | undefined;
    });
    width(width: any): this;
    get COUNT(): COUNTR;
    count(count: any): this;
    get GAP(): COUNTR;
    gap(gap: any): this;
    get balance(): this;
    get auto(): this;
    get span(): this;
    get noSpan(): this;
    rule(rule: any): this;
    get RULE(): RULE;
}

interface TRANSX<T = CSSValue> {
    matrix?: T;
    matrix3d?: T;
    translate?: T;
    translate3d?: T;
    translateX?: T;
    translateY?: T;
    translateZ?: T;
    scale?: T;
    scale3d?: T;
    scaleX?: T;
    scaleY?: T;
    scaleZ?: T;
    rotate?: T;
    rotate3d?: T;
    rotateX?: T;
    rotateY?: T;
    rotateZ?: T;
    skew?: T;
    skewX?: T;
    skewY?: T;
    perspective?: T;
}
declare class TRANSFORM extends Medyas<TRANSFORM, {}> {
    constructor({ prefix, data, values }?: {
        prefix?: string | undefined;
        data?: {} | undefined;
        values?: {} | undefined;
    });
    origin(...origin: [string, string, string]): void;
    get flat(): this;
    get preserve3d(): this;
    get none(): this;
    transform(tran: TRANSX): this;
}

declare class WORD extends PROXY<WORD, {
    wh: string;
    first: string;
}> {
    break_all: this;
    keep_all: this;
    [k: number]: this;
    1: this;
    2: this;
    3: this;
    4: this;
    5: this;
    6: this;
    7: this;
    8: this;
    9: this;
    10: this;
    protected propFN: (p: string) => "wordBreak" | "wordSpacing";
    protected valFN: (val: any) => any;
    get normalBreak(): this;
    get normalWrap(): this;
    get break(): this;
}

declare class LIST extends PROXY<LIST, {
    wh: string;
    first: string;
}> {
    protected prop: string;
    disc: this;
    armenian: this;
    circle: this;
    cjk_ideographic: this;
    decimal: this;
    decimal_leading_zero: this;
    georgian: this;
    hebrew: this;
    hiragana: this;
    hiragana_iroha: this;
    katakana: this;
    katakana_iroha: this;
    lower_alpha: this;
    lower_greek: this;
    lower_latin: this;
    lower_roman: this;
    none: this;
    square: this;
    upper_alpha: this;
    upper_greek: this;
    upper_latin: this;
    upper_roman: this;
    [k: number]: this;
    1: this;
    image(img: any): this;
    get noImage(): this;
    get inside(): this;
    get outside(): this;
}

declare class SIZE extends PROXY<SIZE> {
    protected prop: string;
    [k: number]: this;
    0: this;
    1: this;
    2: this;
    3: this;
    4: this;
    5: this;
    6: this;
    7: this;
    8: this;
    9: this;
    10: this;
    protected valFN: (val: any) => any;
    /**
     * Pixel
     * @param val number
     */
    px(val: number): this;
    /**
     * Percent
     * @param val number
     */
    pr(val: number): this;
    /**
     * Rem
     * @param val number
     */
    rm(val: number): this;
}
declare class FONTY extends PROXY<FONTY, {}> {
    font(font: any): this;
    stretch(stretch: any): this;
    family(family: any): this;
    sizeAdjust(size: any): this;
    get arial(): this;
    get brushScript(): this;
    get comicSans(): this;
    get courier(): this;
    get georgia(): this;
    get google(): this;
    get monaco(): this;
    get palatino(): this;
    get system(): this;
    get timesNew(): this;
    get trebuchet(): this;
    get verdana(): this;
    get normalStretch(): this;
    get normalStyle(): this;
    get italic(): this;
    get oblique(): this;
    get normalVariant(): this;
    get smallCaps(): this;
    caps(cap: any): this;
    get normalWeight(): this;
    get bold(): this;
    get bolder(): this;
    get lighter(): this;
    get SIZE(): SIZE;
}

interface shadowCFG {
    x: any;
    y: any;
    blur?: any;
    spread?: any;
    color?: any;
    inset?: boolean;
}
declare class SHADOW extends PROXY<SHADOW, {}> {
    protected shadows: Set<string>;
    value(shadow: any): this;
    set(shadow: shadowCFG): this;
    get none(): this;
}
declare class BOX extends PROXY<BOX, {}> {
    get slice(): this;
    get clone(): this;
    get content(): this;
    get border(): this;
}

declare class SCROLL extends PROXY<SCROLL, {}> {
    get MARGIN(): MP;
    get PADDING(): MP;
    get SNAP(): SNAP;
    get auto(): this;
    get smooth(): this;
}
declare class SNAP extends PROXY<SNAP, {}> {
    get normalStop(): this;
    get alwaysStop(): this;
    get noType(): this;
    get x(): this;
    get y(): this;
    get block(): this;
    get inline(): this;
    get both(): this;
    get mandatory(): this;
    get proximity(): this;
    get none(): this;
    get start(): this;
    get end(): this;
    get center(): this;
    align(align: any): this;
    type(stop: any): this;
}

declare class MISC {
    static get visible(): VISIBLE;
    static get hidden(): VISIBLE;
    static get select(): SELECT;
    static get noSelect(): SELECT;
}
declare class _ANIMATION extends MISC {
    static get TRANSITION(): TRANSITION;
    static get ANIMATION(): ANIMATION;
    static animation(val: CSSProps): ANIM;
}
declare class APPEARANCE extends _ANIMATION {
    static get BG(): BACKGROUND;
    static get COLOR(): COLOR;
    static get TEXT(): TEXT;
    static get FONT(): FONTY;
    static get VALIGN(): VERTICAL;
    static get WORD(): WORD;
    static get CURSOR(): CURSOR;
    static get DISPLAY(): DISPLAY;
    static get POSITION(): POSITION;
    static get RADIUS(): RADIUS;
    static get BORDER(): BORDER;
    static get OUTLINE(): OUTLINE;
    static get COLUMN(): COLUMN;
    static get OVERFLOW(): OVERFLOW;
    static get OPACITY(): OPACITY;
    static get ZIndex(): ZINDEX;
    static get LINE(): LINEHEIGHT;
    static get WHITESPACE(): WHITESPACE;
}
declare class $ extends APPEARANCE {
    static get FLEX(): Flex;
    static get WIDTH(): WH;
    static get HEIGHT(): WH;
    static get TOP(): WH;
    static get LEFT(): WH;
    static get RIGHT(): WH;
    static get BOTTOM(): WH;
    static get MAX(): {
        readonly WIDTH: WH;
        readonly HEIGHT: WH;
        readonly BLOCK: INLINEBLOCK;
        readonly INLINE: INLINEBLOCK;
    };
    static get MIN(): {
        readonly WIDTH: WH;
        readonly HEIGHT: WH;
        readonly BLOCK: INLINEBLOCK;
        readonly INLINE: INLINEBLOCK;
    };
    static get MARGIN(): MP;
    static get PADDING(): MP;
    static get TRANSFORM(): TRANSFORM;
    static transform(tran: TRANSX): TRANSFORM;
    static get LIST(): LIST;
    static get BOX(): BOX;
    static get SHADOW(): SHADOW;
    static get SCROLL(): SCROLL;
    static get OVERSCROLL(): OVERSCROLL;
}

export { $ };
