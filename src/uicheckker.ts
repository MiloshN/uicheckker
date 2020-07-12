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
    
    const { el, overFlowCheck } = elementName;
    if (el) {
      window.addEventListener("resize", () => {
        let width = document.body.clientWidth;
        let height = document.body.clientHeight;
        if (overFlowCheck) {
          this.checkOverflow(el, width, height);
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
