import { createContext } from "react";
import useRequestsProvider from "../hooks/useRequestsProvider";

export const ContextRequests = createContext({});

export default function Provider({ children }) {
  const RequestsProvider = useRequestsProvider();
  return (
    <ContextRequests.Provider value={RequestsProvider}>
      {children}
    </ContextRequests.Provider>
  );
}
