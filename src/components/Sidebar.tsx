import classNames from 'classnames';
export default function Sidebar({ children, ...rest }) {
  const classes = classNames(rest.className, 'sidebar');
  return (
    <aside {...rest} className={classes}>
      {children}
    </aside>
  );
}
