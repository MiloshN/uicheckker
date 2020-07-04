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
      }
    }
  }
};
