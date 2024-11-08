import "../styles/Upgrade.css";

export default function Upgrade({ cookies, setCookies, cps, setCps }) {
  function buyUpgrade() {
    if (cookies >= 10) {
      setCps(cps + 1);
      setCookies(cookies - 10);
    }
  }

  return (
    <div className="upgrade-container">
      <p>Upgrade cps +1</p>
      <button onClick={buyUpgrade}>Buy</button>
    </div>
  );
}
