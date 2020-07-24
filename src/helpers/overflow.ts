export const checkOverflow = (el: string, w: number, h: number) => {
  let domEl: any;
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
      if (item !== null) {
        if (item.offsetLeft > domEl.offsetLeft) {
          const info = {
            followItem: el,
            width: w,
            height: h,
          };
          errArr.push(item);
        }
      }
    }
  }
};
