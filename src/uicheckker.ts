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
    } = elementName;

    if (el) {
      window.addEventListener("resize", () => {
        let width = document.body.clientWidth;
        let height = document.body.clientHeight;
        if (overFlowCheck) {
          // if (typeof overFlowCheck !== "boolean") {
          //   console.error(
          //     "ERROR: ``overflowCheck`` must be boolean value, true or false!"
          //   );
          //   console.warn("Please visit example: *");
          // }
          this.checkOverflow(el, width, height);
        }

        if (marginCheck) {
          // if (typeof marginCheck !== "object") {
          //   console.error(
          //     "ERROR: ``marginCheck`` must be object value with settings"
          //   );
          //   console.warn("Please visit example: *");
          // }
          this.checkMargins(el, settings, width);
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
  checkMargins = (el: string, settings: Array<any>, w: number) => {
    outCheckMargins(el, settings, w);
  };
  checkPaddings = (el: string, settings: Array<any>, w: number) => {
    outCheckPaddings(el, settings, w);
  };
}
