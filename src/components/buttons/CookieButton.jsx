import "../../styles/CookieButton.css";
export default function CookieButton({ cookies, setCookies }) {
  function addCookie() {
    setCookies(cookies + 10);
  }

  return (
    <div>
      <p className="cookie" onClick={addCookie}>
        🍪
      </p>
      <p>Click to make 10 cookies</p>
    </div>
  );
}
