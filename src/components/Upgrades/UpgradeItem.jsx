export function UpgradeItem({ cookies, setCookies, cps, setCps, upgrade }) {
  const buyUpgrade = () => {
    if (cookies >= upgrade.cost) {
      setCps(cps + upgrade.increase);
      setCookies(cookies - upgrade.cost);
    }
  };

  return (
    <li key={upgrade.id}>
      {upgrade.name} - Cost: {upgrade.cost} Cookies - CPS Increase:{" "}
      {upgrade.increase}
      <button onClick={buyUpgrade} disabled={cookies < upgrade.cost}>
        Buy
      </button>
    </li>
  );
}
