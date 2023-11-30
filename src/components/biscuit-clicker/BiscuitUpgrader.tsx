import { useContext } from "react";
import { BiscuitContext } from "../BiscuitProvider";

function BiscuitUpgrader() {
  const biscuitContext = useContext(BiscuitContext);

  const handleClick = () => {
    biscuitContext?.setBiscuitMultiplier(biscuitContext?.biscuitMultiplier + 1);
    biscuitContext?.setBiscuitCount(biscuitContext?.biscuitCount - 100);
  };

  return (
    <>
      {Number(biscuitContext?.biscuitCount) >= 100 && (
        <button type="button" onClick={handleClick}>
          Upgrade Biscuit Multiplier
        </button>
      )}
    </>
  );
}

export default BiscuitUpgrader;
