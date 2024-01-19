import Navbar from "./Navbar";
import PageTitle from "./PageTitle";

function Header() {
  return (
    <>
      <header className="header">
        <h1 className="brand">Costa Code Craft</h1>
        <Navbar />
      </header>
      <PageTitle />
    </>
  );
}

export default Header;
