import { CSS, _var } from "sweetss";
import { __ } from "../@";

export const bg_opacity = _var({ bg_opacity: "1" });
export const border_opacity = _var({ border_opacity: "1" });
export const col_opacity = _var({ col_opacity: "1" });
export const outline_opacity = _var({ outline_opacity: "1" });
export const text_opacity = _var({ text_opacity: "1" });

export default (c: CSS) => {
  let _ind = 0;

  __.fill(5).forEach((_) => {
    const val = (_ind / 100).toString();

    c[`bg_opacity_${_ind}`] = [bg_opacity.new(val)];
    c[`border_opacity_${_ind}`] = [border_opacity.new(val)];
    c[`col_opacity_${_ind}`] = [col_opacity.new(val)];
    c[`outline_opacity_${_ind}`] = [outline_opacity.new(val)];
    c[`text_opacity_${_ind}`] = [text_opacity.new(val)];
    //

    _ind += 25;
  });
};
