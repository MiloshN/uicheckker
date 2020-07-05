export const checkFont = (domEl: string, arr: Array<any>, w: number) => {
  let el: HTMLElement;

  el = document.getElementById(domEl);
  arr.map((a) => {
    for (const item of el.children) {
      if (w === a.bp) {
        console.log(a.bp);
      }
    }
  });
};
