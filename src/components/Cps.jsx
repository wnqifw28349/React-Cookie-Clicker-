export default function Cps({ setCookies, cps, useEffect }) {
  useEffect(() => {
    const interval = setInterval(() => {
      setCookies((current) => current + cps);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [cps]);

  return (
    <div>
      <p>CPS: {cps}</p>
    </div>
  );
}
