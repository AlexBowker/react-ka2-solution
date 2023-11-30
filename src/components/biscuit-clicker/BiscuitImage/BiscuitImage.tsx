import { useContext } from "react";
import biscuitImage from "../../../assets/biscuit.png";
import { BiscuitContext } from "../../BiscuitProvider";
import "./BiscuitImage.css";

function Biscuit() {
  const biscuitContext = useContext(BiscuitContext);

  const handleClick = () => {
    biscuitContext?.setBiscuitCount(
      biscuitContext?.biscuitCount + biscuitContext?.biscuitMultiplier
    );
  };

  return <img src={biscuitImage} onClick={handleClick} />;
}

export default Biscuit;
