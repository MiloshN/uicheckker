import { UiCheckker } from "./uicheckker";

let init = new UiCheckker({
  el: "app",
  overFlowCheck: true,
  marginCheck: {
    settings: [
      {
        brakePoint: 500,
        settings: {
          margin: [10, 20, 30, 40], // px, % i auto support
          units: "px", // support single unit, later more of one
        },
      },
    ],
  },
});
