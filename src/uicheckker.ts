import { checkOverflow as outCheckOverFlow } from "./helpers/overflow";
import { checkChildren as outCheckChildren } from "./helpers/children";

export class UiCheckker {
  el: object;
  constructor(el: object) {
    this.el = el;
    this.init();
  }
  init = () => {
    let elementName: any = this.el;
    let domEl: string;

    Object.keys(elementName).map((key) => {
      if (key === "el") {
        domEl = elementName[key];
      }
      if (key === "overFlowCheck") {
        if (elementName[key] === true) {
          this.checkOverflow(domEl, null, null);
        }
      }
      if (key === "childrensInRow") {
        let brakepoint: any;
        for (const [wkey, value] of Object.entries(elementName[key])) {
          if (wkey === "brakePoint") {
            console.log(value);
            brakepoint = value;
          }
          if (value === true) {
            this.checkChildren(brakepoint);
          }
        }
      }
    });

    // Osmisliti bolje resenje za ovo iznad. Object.keys

    window.addEventListener("resize", () => {
      let width = document.body.clientWidth;
      let height = document.body.clientHeight;
      this.checkOverflow(domEl, width, height);
    });
  };
  checkOverflow = (el: string, w: number, h: number) => {
    outCheckOverFlow(el, w, h);
  };
  checkChildren = (bp: number) => {
    outCheckChildren(bp);
  };
}
