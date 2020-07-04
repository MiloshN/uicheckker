import { UiCheckker } from "./uicheckker";

let init = new UiCheckker({
  el: "app",
  overFlowCheck: true,
  childrensInRow: {
    keepEqual: true,
    brakePoint: 500,
  },
});
