import React, { createContext, PropsWithChildren } from "react";
import { useInterpret, useSelector } from "@xstate/react";
import { toggleMachine } from "./toggleMachine";
import { InterpreterFrom, StateFrom } from "xstate";

export const GlobalStateContext = createContext<{
  service: InterpreterFrom<typeof toggleMachine>;
}>({ service: {} as any });

export const GlobalStateProvider = (props: PropsWithChildren) => {
  const service = useInterpret(toggleMachine);

  return (
    <GlobalStateContext.Provider value={{ service }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export function useAppSelector<T>(
  selector: (state: StateFrom<typeof toggleMachine>) => T
) {
  const { service } = React.useContext(GlobalStateContext);
  return useSelector(service, selector);
}
