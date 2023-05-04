import NavLinks from "./NavLinks";

const Header = () => {
  function act()
  {
    window.location.href="/";
  }
  return (
    <header className="header">
    <h1 onClick={act}>yuba</h1>
      <NavLinks />
    </header>
  );
};

export default Header;
