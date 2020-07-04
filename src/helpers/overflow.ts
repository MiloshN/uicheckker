export const checkOverflow = (el: string, w: number, h: number) => {
  let domEl: HTMLElement;
  let overflowRes: boolean;
  let errArr: Array<string> = [];

  domEl = document.getElementById(el);
  const isOverflown = ({
    clientWidth,
    clientHeight,
    scrollWidth,
    scrollHeight,
  }: any) => {
    return scrollHeight > clientHeight || scrollWidth > clientWidth;
  };
  overflowRes = isOverflown(domEl);
  if (overflowRes) {
    for (const item of domEl.children) {
      if (item.offsetLeft > domEl.offsetLeft) {
        errArr.push(
          `Element koji se prati id: ${el} je probio na rezoluciji w: ${w}, h: ${h}, dok element koji je izleteo je: ${item.nodeName}`
        );
        // let bdy: any = document.body;
        // bdy.innerHTML = `<div id="hide-error" style="position:absolute;width:100%;height:100vh;background:white;top:0;left:0;padding:20px;">
        //          <h1 style="display:table;margin:auto;color:red;">You have overflow in your "${el}" element.</h1>
        //          <h2 style="display:table;margin:auto;color:red;">Problem on resolution: w: ${w} / h: ${h}</h2>
        //          <h3 style="display:table;margin:auto;color:red;">Name of problem element: ${item.nodeName}</h3>
        //      </div>`;
      }
    }
    // Detektovati koji element je probio
  }
};
