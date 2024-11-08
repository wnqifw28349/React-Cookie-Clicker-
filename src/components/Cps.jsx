export default function Cps({ setCookies, cps, useEffect }) {
  useEffect(() => {
    const interval = setInterval(() => {
      setCookies((current) => current + cps);
    }, 1000);

    localStorage.setItem("cps", JSON.stringify(cps));

    return () => {
      clearInterval(interval);
    };
  }, [cps]);

  return (
    <div>
      <h2>CPS: {cps}</h2>
    </div>
  );
}
