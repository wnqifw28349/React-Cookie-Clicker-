export default function CookieCount({ cookies, useEffect }) {
  useEffect(() => {
    localStorage.setItem("cookies", JSON.stringify(cookies));
  }, [cookies]);

  return (
    <div>
      <h2>Cookies: {cookies}</h2>
    </div>
  );
}
