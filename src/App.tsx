import { Routes, Route } from "react-router-dom";
import BiscuitProvider from "./components/BiscuitProvider";
import Navbar from "./components/navbar/Navbar";
import BiscuitClickerPage from "./components/biscuit-clicker/BiscuitClicker";
import Home from "./components/home/Home";
import TemperatureChecker from "./components/temperature-checker/TemperatureChecker";
import PATHS from "./constants/paths";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <BiscuitProvider>
        <Routes>
          <Route path={PATHS.home} element={<Navbar />}>
            <Route path={PATHS.home} element={<Home />} />
            <Route
              path={PATHS.biscuitClicker}
              element={<BiscuitClickerPage />}
            />
            <Route
              path={PATHS.temperatureChecker}
              element={<TemperatureChecker />}
            />
            <Route path={PATHS.notFound} element={<NotFound />} />
          </Route>
        </Routes>
      </BiscuitProvider>
    </>
  );
}

export default App;
