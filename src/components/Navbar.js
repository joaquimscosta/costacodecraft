import { NavLink } from "react-router-dom";
function Navbar() {
  const handleActive = (match, location) => {
    console.log(match, location);
  };
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}

export default Navbar;
