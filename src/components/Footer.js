import SocialMedia from "./SocialMedia";
import className from "classnames";

function Footer({ ...rest }) {
  const classes = className(
    rest.className,
    "footer items-center p-4 bg-neutral text-neutral-content text-lg"
  );
  return (
    <footer {...rest} className={classes}>
      <aside className="items-center grid-flow-col"></aside>
      <p>&copy; 2024 Joaquim Costa</p>
      <SocialMedia className="grid-flow-col gap-4 md:place-self-center md:justify-self-end" />
    </footer>
  );
}

export default Footer;
