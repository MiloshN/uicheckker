export const checkMargins = (el: string, arr: Array<any>, w: number) => {
  // debugger;
  let root: HTMLElement;
  root = document.getElementById(el);
  arr.map((item) => {
    // debugger;
    const { brakePoint, settings } = item;
    if (brakePoint === w) {
      // debugger;
      const { margin, units } = settings;
      const returnVal = (side: string, margin: number) => {
        // debugger;
        let getMargin = window
          .getComputedStyle(root)
          .getPropertyValue(`margin-${side}`);
        let marginUnits = getMargin.replace(/[0-9]/g, "");
        if (marginUnits === units) {
          let marginValue = getMargin.replace(/[^\d.-]/g, "");
          let numMarginValue = parseInt(marginValue);
          if (numMarginValue !== margin) {
            console.log(
              `Za element sa ID: ${el}: Ocekujete da vrednost margine - ${side.toUpperCase()} bude ${margin}px a ona je na rezoluciji od ${brakePoint}px sirine zapravo ${numMarginValue}px `
            );
          }
        }
      };
      for (let i = 0; i <= margin.length; i++) {
        // debugger;
        if (margin[i] != null) {
          switch (i) {
            case 0:
              returnVal("top", margin[i]);
              i++;
            case 1:
              returnVal("right", margin[i]);
              i++;
            case 2:
              returnVal("bottom", margin[i]);
              i++;
            case 3:
              returnVal("left", margin[i]);
              i++;
            default:
              null;
          }
        }
      }
    }
  });
};
