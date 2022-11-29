import { createMachine } from "xstate";

export const toggleMachine = createMachine({
  initial: "toggledOff",
  states: {
    toggledOff: {
      on: {
        TOGGLE: "toggledOn",
      },
    },
    toggledOn: {
      entry: ["goToOtherPage"],
    },
  },
});
