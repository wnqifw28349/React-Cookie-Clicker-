import "../styles/MakeCookie.css";
export default function MakeCookie({ cookies, setCookies }) {
  function addCookie() {
    setCookies(cookies + 100);
  }
  return (
    <div>
      <p>Cookies: {cookies}</p>
      <p className="cookie" onClick={addCookie}>
        🍪
      </p>
    </div>
  );
}
