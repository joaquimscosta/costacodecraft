import { NavLink } from "react-router-dom";

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
  return <nav className="navbar bg-base-500">{renderedLinks}</nav>;
}

export default Navbar;
