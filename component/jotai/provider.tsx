import { Provider, useStore } from "jotai";
import { FC, ReactNode } from "react";

const JotaiProvider: FC<IJotaiProvider> = ({ children }) => {
  const jotaiStore = useStore();
  return <Provider store={jotaiStore}>{children}</Provider>;
};

interface IJotaiProvider {
  children: ReactNode;
}

export default JotaiProvider;
