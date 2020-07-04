import { checkOverflow as outCheckOverFlow } from "./helpers/overflow";

export class UiCheckker {
  el: object;
  constructor(el: object) {
    this.el = el;
    this.init();
  }
  init = () => {
    let elementName: any = this.el;
    let domEl: string;

    const { el, overFlowCheck } = elementName;

    if (el) {
      domEl = el;
    }
    if (overFlowCheck) {
      this.checkOverflow(domEl, null, null);
    }

    window.addEventListener("resize", () => {
      let width = document.body.clientWidth;
      let height = document.body.clientHeight;
      this.checkOverflow(domEl, width, height);
    });
  };
  checkOverflow = (el: string, w: number, h: number) => {
    outCheckOverFlow(el, w, h);
  };
}
