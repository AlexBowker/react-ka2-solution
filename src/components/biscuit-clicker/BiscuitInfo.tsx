import { useContext } from "react";
import { BiscuitContext } from "../BiscuitProvider";

function BiscuitInfo() {
  const biscuitContext = useContext(BiscuitContext);

  return (
    <>
      <p>
        Welcome to Biscuit Clicker! Click the biscuit to earn more biscuits.
        Spend 100 biscuits to upgrade your multiplier.
      </p>
      <p>Current biscuit count: {biscuitContext?.biscuitCount}</p>
      <p>Current biscuit multiplier: {biscuitContext?.biscuitMultiplier}x</p>
    </>
  );
}

export default BiscuitInfo;
