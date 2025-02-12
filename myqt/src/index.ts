import { fileName, SweetSS, _var, CSS } from "sweetss";
import Anim from "./animation";
import Bg from "./background";
import Colors from "./colors";
import Column from "./column";
import Display from "./display";
import Cursor from "./cursor";
import Text from "./text";
import Filter from "./filter";
import Border from "./border";
import Dom from "./dom";
import Vars from "./var";
import Opacity from "./opacity";
import Shadow from "./shadow";

import { $$ } from "./@";

export class Flexed extends SweetSS {
  constructor({ filename }: { filename: string }) {
    super({
      name: filename.includes("/") ? fileName(filename) : filename,
      webkitKeyframes: false,
    });
    // Dom(this.dom);

    // Colors(this.cx);

    // Text(this.cx);

    // Border(this.cx);
    // Column(this.cx);
    // Display(this.cx);
    // Cursor(this.cx);

    //
    // Anim(this.cx, this.kf);
    // Bg(this.cx);
    Filter(this.cx);
    // Opacity(this.cx);
    // Shadow(this.cx);
    // Vars(this.cx, this.dom);
  }
  colors(...colors: string[]) {}
  root() {}
  animation() {
    // custom
  }
  animations() {}
  background() {}
}
