export default function MakeCookie({ cookies, setCookies }) {
  function addCookie() {
    setCookies(cookies + 100);
  }
  return (
    <div>
      <p>Cookies: {cookies}</p>
      <button onClick={addCookie}>Make a cookie</button>
    </div>
  );
}
