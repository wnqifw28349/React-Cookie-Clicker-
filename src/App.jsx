import { useState, useEffect } from "react";
import MakeCookie from "./components/MakeCookie.jsx";
import Cps from "./components/Cps.jsx";
import RenderUpgrades from "./components/Upgrades/RenderUpgrades.jsx";

export default function App() {
  const [cookies, setCookies] = useState(0);
  const [cps, setCps] = useState(1);
  const [upgrades, setUpgrades] = useState([]);

  return (
    <>
      <div>
        <h1>Cookie Clicker</h1>
        <MakeCookie
          cookies={cookies}
          useEffect={useEffect}
          setCookies={setCookies}
        />
        <Cps setCookies={setCookies} cps={cps} useEffect={useEffect} />
        <RenderUpgrades
          useEffect={useEffect}
          upgrades={upgrades}
          setUpgrades={setUpgrades}
          cookies={cookies}
          setCookies={setCookies}
          cps={cps}
          setCps={setCps}
        />
      </div>
    </>
  );
}
