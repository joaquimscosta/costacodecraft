import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa6';

export default function RepositoryIcon({ ...rest }) {
  const classes = classNames(
    rest.className,
    'relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden',
  );
  return (
    <Link
      href='https://github.com/joaquimscosta/costacodecraft'
      className={classes}
    >
      <span className='absolute -inset-1.5' />
      <span className='sr-only'>Code Repo</span>
      <FaGithub className='h-10 w-10' />
    </Link>
  );
}
