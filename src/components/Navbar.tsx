import { HiMenuAlt1 } from 'react-icons/hi';
import ThemeMode from './ThemeMode';
import Link from 'next/link';

export default function Navbar() {
  const links = [
    { label: 'Home', path: '/' },
    // { label: "Blog", path: "/blog" },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];
  const renderedNavbarLinks = links.map((link) => {
    return (
      <Link className='btn btn-ghost text-xl' href={link.path} key={link.label}>
        {link.label}
      </Link>
    );
  });

  const renderedDropdownMenuLinks = links.map((link) => {
    return (
      <li key={link.label}>
        <Link href={link.path}>{link.label}</Link>
      </li>
    );
  });

  return (
    <nav className='navbar bg-neutral text-neutral-content'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost text-xl lg:hidden'
          >
            <HiMenuAlt1 className='h-5 w-5' />
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-neutral bg-opacity-80 rounded-box z-[1] mt-3 w-52 p-2 shadow'
          >
            {renderedDropdownMenuLinks}
          </ul>
        </div>
      </div>
      <div className='navbar-center hidden lg:flex'>{renderedNavbarLinks}</div>
      <div className='navbar-end'>
        <ThemeMode className='btn btn-ghost' />
      </div>
    </nav>
  );
}
