import { checkOverflow as outCheckOverFlow } from "./helpers/overflow";
import { checkFont as outCheckFont } from "./helpers/font";
import { checkMargins as outCheckMargins } from "./helpers/margins";
import { checkPaddings as outCheckPaddings } from "./helpers/paddings";

export class UiCheckker {
  el: object;
  constructor(el: object) {
    this.el = el;
    this.init();
  }
  init = () => {
    let elementName: any = this.el;

    const {
      el,
      overFlowCheck,
      marginCheck,
      marginCheck: { settings },
      // paddingCheck,
      // paddingCheck: { psettings },
    } = elementName;
    if (el) {
      window.addEventListener("resize", () => {
        let width = document.body.clientWidth;
        let height = document.body.clientHeight;
        if (overFlowCheck) {
          this.checkOverflow(el, width, height);
        }
        if (marginCheck) {
          this.checkMargins(el, settings, width);
        }
        // if (paddingCheck) {
        //   this.checkPaddings(el, psettings, width);
        // }
      });
    }
  };
  checkOverflow = (el: string, w: number, h: number) => {
    outCheckOverFlow(el, w, h);
  };
  checkFont = (el: string, arr: Array<any>, w: number) => {
    outCheckFont(el, arr, w);
  };
  checkMargins = (el: string, settings: Array<any>, w: number) => {
    outCheckMargins(el, settings, w);
  };
  checkPaddings = (el: string, settings: Array<any>, w: number) => {
    outCheckPaddings(el, settings, w);
  };
}
