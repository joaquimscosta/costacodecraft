import { NavLink } from "react-router-dom";
import ThemeMode from "./ThemeMode";

function Navbar() {
  const links = [
    { label: "Home", path: "/" },
    { label: "Blog", path: "/blog" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];
  const renderedLinks = links.map((link) => {
    return (
      <NavLink
        className="btn btn-ghost text-xl"
        to={link.path}
        key={link.label}
      >
        {link.label}
      </NavLink>
    );
  });
  return (
    <nav className="navbar bg-neutral text-neutral-content">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-xl lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <div className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral bg-opacity-80 rounded-box w-52">
            {renderedLinks}
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">{renderedLinks}</div>
      <div className="navbar-end">
        <ThemeMode className="btn btn-ghost text-xl" />
      </div>
    </nav>
  );
}

export default Navbar;
