import SocialMedia from './SocialMedia';
import className from 'classnames';

export default function Footer({ ...rest }) {
  const classes = className(rest.className, 'bg-gray-900');

  return (
    <footer className={classes}>
      <div className='mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8'>
        <SocialMedia className='flex justify-center gap-x-6 md:order-2' />
        <p className='mt-8 text-center text-sm/6 text-gray-400 md:order-1 md:mt-0'>
          &copy; {new Date().getFullYear()} Joaquim Costa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
