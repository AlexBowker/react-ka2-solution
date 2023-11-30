import { ReactNode, createContext } from "react";
import BiscuitData from "../types/BiscuitData";
import useBiscuit from "../hooks/useBiscuit";

export const BiscuitContext = createContext<BiscuitData | null>(null);

function BiscuitProvider({ children }: { children: ReactNode }) {
  const biscuitData = useBiscuit();

  return (
    <BiscuitContext.Provider value={biscuitData}>
      {children}
    </BiscuitContext.Provider>
  );
}

export default BiscuitProvider;
