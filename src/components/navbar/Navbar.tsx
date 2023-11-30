import { Outlet, Link } from "react-router-dom";
import PATHS from "../../constants/paths";
import { BiscuitContext } from "../BiscuitProvider";
import { useContext } from "react";
import "./Navbar.css";

function Navbar() {
  const biscuitContext = useContext(BiscuitContext);

  return (
    <>
      <div className="navbar">
        <Link to={PATHS.home}>Home</Link>
        <Link to={PATHS.biscuitClicker}>Biscuit Clicker</Link>
        <Link to={PATHS.temperatureChecker}>Temperature Checker</Link>
        <span id="right-float">Biscuits: {biscuitContext?.biscuitCount}</span>
      </div>

      <Outlet />
    </>
  );
}

export default Navbar;
