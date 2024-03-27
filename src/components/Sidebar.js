import classNames from "classnames";
function Sidebar({ children, ...rest }) {
  const classes = classNames(rest.className, "sidebar");
  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
}

export default Sidebar;
