import classNames from "classnames";
function Sidebar({ children, ...rest }) {
  const classes = classNames(rest.className, "sidebar");
  return (
    <aside {...rest} className={classes}>
      {children}
    </aside>
  );
}

export default Sidebar;
