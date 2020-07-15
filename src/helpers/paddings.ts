export const checkPaddings = (el: string, arr: Array<any>, w: number) => {
  let root: HTMLElement;
  root = document.getElementById(el);
  arr.map((item) => {
    const { brakePoint, settings } = item;
    console.log(brakePoint, w);
    if (brakePoint == w) {
      const { padding, units } = settings;
      const returnVal = (side: string, num: number) => {
        let val = window
          .getComputedStyle(root)
          .getPropertyValue(`padding-${side}`);
        let un = val.replace(/[0-9]/g, "");
        if (un === units) {
          let vall = val.replace(/[^\d.-]/g, "");
          let value = parseInt(vall);
          if (value !== num) {
            console.log(
              `Za element sa ID: ${el}: Ocekujete da vrednost padding - ${side.toUpperCase()} bude ${num}px a ona je na rezoluciji od ${brakePoint}px sirine zapravo ${value}px `
            );
          }
        } else {
          return new Error(
            "Your units in settings object do not exist in margin units !"
          );
        }
      };
      padding.map((m: number, i: number) => {
        switch (i) {
          case 0:
            returnVal("top", m);
          case 1:
            returnVal("right", m);
          case 2:
            returnVal("bottom", m);
          case 3:
            returnVal("left", m);
          default:
            null;
        }
      });
    }
  });
};
