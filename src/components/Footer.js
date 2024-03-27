import SocialMedia from "./SocialMedia";
import className from "classnames";

function Footer({ ...rest }) {
  const classes = className(rest.className, "footer");
  return (
    <footer {...rest} className={classes}>
      <SocialMedia />
      <p className="copyright">&copy; 2024 Joaquim Costa</p>
    </footer>
  );
}

export default Footer;
