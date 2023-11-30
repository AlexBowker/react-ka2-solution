import { useState } from "react";
import BiscuitData from "../types/BiscuitData";

function getBiscuitDataElement(storageKey: string, defaultValue: number) {
  const dataString = localStorage.getItem(storageKey);
  const dataNumber = dataString ? Number(dataString) : defaultValue;

  const [data, setData] = useState(dataNumber);

  const saveData = (data: number) => {
    localStorage.setItem(storageKey, data.toString());
    setData(data);
  };

  return { data, saveData };
}

function useBiscuit(): BiscuitData {
  const { data: biscuitCount, saveData: setBiscuitCount } =
    getBiscuitDataElement("biscuit-count", 0);
  const { data: biscuitMultiplier, saveData: setBiscuitMultiplier } =
    getBiscuitDataElement("biscuit-multiplier", 1);

  return {
    biscuitCount,
    setBiscuitCount,
    biscuitMultiplier,
    setBiscuitMultiplier,
  };
}

export default useBiscuit;
