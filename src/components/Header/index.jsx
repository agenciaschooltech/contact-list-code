import "./styles.scss";

// eslint-disable-next-line react/prop-types
function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>

      <nav>
        <a href="/">List contacts</a>
        <a href="/new_contact">New Contact</a>
      </nav>
    </header>
  );
}

export default Header;
