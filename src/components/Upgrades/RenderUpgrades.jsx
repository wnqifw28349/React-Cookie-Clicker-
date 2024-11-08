import { UpgradeButton } from "./UpgradeButton.jsx";

export default function RenderUpgrades({
  useEffect,
  upgrades,
  setUpgrades,
  cookies,
  setCookies,
  cps,
  setCps,
}) {
  useEffect(() => {
    async function fetchUpgrades() {
      const response = await fetch(
        "https://cookie-upgrade-api.vercel.app/api/upgrades"
      );
      const data = await response.json();
      setUpgrades(data);
    }
    fetchUpgrades();
  }, [setUpgrades]);

  return (
    <div>
      <h2>Upgrades</h2>
      <ol>
        {upgrades.map((upgrade) => (
          <li key={upgrade.id}>
            {upgrade.name} - Cost: {upgrade.cost} Cookies - CPS Increase:{" "}
            {upgrade.increase}
            <UpgradeButton
              cookies={cookies}
              setCookies={setCookies}
              cps={cps}
              setCps={setCps}
              upgrade={upgrade}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
