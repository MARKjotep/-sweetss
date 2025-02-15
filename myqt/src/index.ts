import { fileName, SweetSS, CSS } from "sweetss";
import { $$ } from "./@";
import Anim from "./ANIMATION";
// Appearance
import Appearance from "./APPEARANCE";
import Animation from "./ANIMATION";
import Layout from "./LAYOUT";

export class Flexed extends SweetSS {
  constructor({ filename }: { filename: string }) {
    super({
      name: filename.includes("/") ? fileName(filename) : filename,
      webkitKeyframes: false,
    });
  }
  get all() {
    this.animation.appearance;
    return this;
  }
  colors(...colors: string[]) {}
  root() {}
  get layout() {
    Layout(this.cx);
    return this;
  }
  get animation() {
    Animation(this.cx, this.kf);
    return this;
  }
  get appearance() {
    Appearance(this.cx);

    return this;
  }
}

const BoxSizng = (c: CSS) => {
  c.box_border = {
    boxSizing: "border-box",
  };
  c.box_content = {
    boxSizing: "content-box",
  };
};
