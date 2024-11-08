export function UpgradeButton({ cookies, setCookies, cps, setCps, upgrade }) {
  const buyUpgrade = () => {
    if (cookies >= upgrade.cost) {
      setCps(cps + upgrade.increase);
      setCookies(cookies - upgrade.cost);
    }
  };
  return (
    <button onClick={buyUpgrade} disabled={cookies < upgrade.cost}>
      Buy
    </button>
  );
}
