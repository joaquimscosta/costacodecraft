import { PropsWithChildren } from 'react';

export default function Sidebar({
  children,
  ...rest
}: PropsWithChildren<{ className?: string }>) {
  return (
    <aside {...rest} className={rest.className}>
      {children}
    </aside>
  );
}
