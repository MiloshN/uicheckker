import { checkOverflow as outCheckOverFlow } from "./helpers/overflow";
import { checkFont as outCheckFont } from "./helpers/font";

export class UiCheckker {
  el: object;
  constructor(el: object) {
    this.el = el;
    this.init();
  }
  init = () => {
    let elementName: any = this.el;
    let domEl: string;

    const { el, overFlowCheck, fontCheck } = elementName;
    if (el) {
      domEl = el;
      window.addEventListener("resize", () => {
        let width = document.body.clientWidth;
        let height = document.body.clientHeight;

        if (overFlowCheck) {
          this.checkOverflow(domEl, width, width);
        }
        if (fontCheck) {
          this.checkFont(domEl, fontCheck, width);
        }
      });
    }
  };
  checkOverflow = (el: string, w: number, h: number) => {
    outCheckOverFlow(el, w, h);
  };
  checkFont = (el: string, arr: Array<any>, w: number) => {
    outCheckFont(el, arr, w);
  };
}
