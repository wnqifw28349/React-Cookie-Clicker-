export default function ResetButton({ setCookies, setCps }) {
  const resetLocalStorage = () => {
    setCookies(0);
    setCps(1);
  };
  return <button onClick={resetLocalStorage}>RESET GAME</button>;
}
