import { createContext, ReactNode, useCallback, useMemo, useState } from 'react';

interface IMenuRoutesContextProps {
  push: (url: string) => void;
  goBack: () => void;
  history: string[];
  current: string;
}

export const MenuRouteContext = createContext({} as IMenuRoutesContextProps);

interface IMenuRoutesProviderProps {
  children: ReactNode;
}

export const MenuRouteProvider = ({ children }: IMenuRoutesProviderProps) => {
  const [history, setHistory] = useState<string[]>(['']);

  const push = useCallback((url: string) => {
      setHistory((oldState) => [...oldState, url]);
  }, []);

  const goBack = useCallback(() => {
    const newHistory = [...history];
    newHistory.pop();
    setHistory(newHistory);
  }, [history]);

  const contextValues = useMemo(() => ({
    push,
    goBack,
    history,
    current: history[history.length - 1],
  }), [push, goBack, history]);

  return (
    <MenuRouteContext.Provider value={contextValues}>
      {children}
    </MenuRouteContext.Provider>
  )
}

type WithMenuRouteProviderProps<T> = T & {
  children?: React.ReactNode;
};

export const withMenuRouteContextProvider = <T,>(Component: React.ComponentType<T>) => {
  // eslint-disable-next-line react/display-name
  return function (props: WithMenuRouteProviderProps<T>) {
    return (
      <MenuRouteProvider>
        <Component {...props}>{props.children}</Component>
      </MenuRouteProvider>
    );
  };
};