import classNames from "classnames";
import Navbar from "./Navbar";
import PageTitle from "./PageTitle";

function Header({ ...rest }) {
  const classes = classNames(rest.className, "header");
  return (
    <>
      <header {...rest} className={classes}>
        <h1 className="text-5xl lg:text-7xl font-bold brand">
          Costa Code Craft
        </h1>
        <Navbar />
      </header>
      <PageTitle />
    </>
  );
}

export default Header;
