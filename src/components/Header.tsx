import classNames from 'classnames';
import Navbar from './Navbar';
export default function Header({ ...rest }) {
  const classes = classNames(rest.className, 'header');
  return (
    <>
      <header {...rest} className={classes}>
        <Navbar />
      </header>
    </>
  );
}
