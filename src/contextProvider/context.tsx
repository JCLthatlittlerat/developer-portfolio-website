import { useContext, createContext, useState } from "react";
import type { ReactNode } from "react";

interface DataContextType {
  submitted: boolean;
  setSubmitted: (value: boolean) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataContextProviderProps {
  children: ReactNode;
}

export function DataContextProvider({ children }: DataContextProviderProps) {
  const [submitted, setSubmitted] = useState(false);

  const value = {
    submitted,
    setSubmitted,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useDataContext(): DataContextType {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useDataContext must be used within a DataContextProvider");
  }
  return context;
}
