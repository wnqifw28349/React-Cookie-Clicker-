import { useState, useEffect } from "react";
import CookieCount from "./components/CookieCount.jsx";
import Cps from "./components/Cps.jsx";
import RenderUpgrades from "./components/upgrades/RenderUpgrades.jsx";
import ResetButton from "./components/buttons/ResetButton.jsx";
import CookieButton from "./components/buttons/CookieButton.jsx";
import "./styles/App.css";

export default function App() {
  const localStorageCps = Number(localStorage.getItem("cps")) || 1;
  const localStorageCookies = Number(localStorage.getItem("cookies")) || 0;
  const [cookies, setCookies] = useState(localStorageCookies);
  const [cps, setCps] = useState(localStorageCps);
  const [upgrades, setUpgrades] = useState([]);

  return (
    <>
      <div className="game-container">
        <h1>Cookie Clicker</h1>

        <CookieCount
          cookies={cookies}
          useEffect={useEffect}
          setCookies={setCookies}
        />
        <Cps setCookies={setCookies} cps={cps} useEffect={useEffect} />
        <CookieButton cookies={cookies} setCookies={setCookies} />
        <RenderUpgrades
          useEffect={useEffect}
          upgrades={upgrades}
          setUpgrades={setUpgrades}
          cookies={cookies}
          setCookies={setCookies}
          cps={cps}
          setCps={setCps}
        />
        <ResetButton setCookies={setCookies} setCps={setCps} />
      </div>
      <footer>Made with ReactJS</footer>
    </>
  );
}
