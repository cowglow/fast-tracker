import { createContext, FC, ReactNode, useContext } from "react";
import stateSchema from "../service/state-schema";
import useLocalStorage from "../hook/use-local-storage";

interface AppStateContextProps {}

const defaultValues = stateSchema;

const AppStateContext = createContext<AppStateContextProps>(defaultValues);

/** Provider **/
interface AppStateContextProviderProps {
  children: ReactNode;
  defaultValue?: AppStateContextProps;
}

export const AppStateProvider: FC<AppStateContextProviderProps> = ({
  children,
  defaultValue = defaultValues,
}) => {
  const [storedState, setStoredState] = useLocalStorage("db", {
    ...defaultValue,
  });

  return (
    <AppStateContext.Provider value={{ ...defaultValue, ...storedState }}>
      {children}
    </AppStateContext.Provider>
  );
};

/** Hook **/
export const useAppState = () => {
  return useContext(AppStateContext);
};
