import classNames from 'classnames';
import { PropsWithChildren } from 'react';

export default function Sidebar({
  children,
  ...rest
}: PropsWithChildren<{ className?: string }>) {
  const classes = classNames(rest.className, 'sidebar');
  return (
    <aside {...rest} className={classes}>
      {children}
    </aside>
  );
}
