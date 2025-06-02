'use client';
import ThemeMode from './ThemeMode';
import Link from 'next/link';
import Logo from './Logo';
import classNames from 'classnames';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import RepositoryIcon from './RepositoryIcon';

export default function Navbar() {
  const pathname = usePathname();
  const navigation = [
    { name: 'About', href: '/about', current: pathname === '/about' },
    { name: 'Projects', href: '/projects', current: pathname === '/projects' },
    { name: 'Blog', href: '/blog', current: pathname === '/blog' },
    { name: 'Contact', href: '/contact', current: pathname === '/contact' },
  ];

  const mobileNavigation = [
    ...navigation,
    {
      name: 'Github Repo',
      href: 'https://github.com/joaquimscosta/costacodecraft',
      current: false,
    },
  ];
  const mobileNavigationRender = mobileNavigation.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      aria-current={item.current ? 'page' : undefined}
      className={classNames(
        item.current
          ? 'bg-gray-900 text-white'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
        'block rounded-md px-3 py-2 text-sm font-medium',
      )}
    >
      {item.name}
    </Link>
  ));

  const navigationRender = navigation.map((item) => (
    <DisclosureButton
      key={item.name}
      as='a'
      href={item.href}
      aria-current={item.current ? 'page' : undefined}
      className={classNames(
        item.current
          ? 'bg-gray-900 text-white'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
        'rounded-md px-3 py-2 text-base font-medium',
      )}
    >
      {item.name}
    </DisclosureButton>
  ));

  return (
    <Disclosure as='nav' className='bg-gray-800'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            {/* Mobile menu button*/}
            <DisclosureButton className='group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset'>
              <span className='absolute -inset-0.5' />
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon
                aria-hidden='true'
                className='block size-6 group-data-open:hidden'
              />
              <XMarkIcon
                aria-hidden='true'
                className='hidden size-6 group-data-open:block'
              />
            </DisclosureButton>
          </div>
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex shrink-0 items-center'>
              <Logo />
            </div>
            <div className='hidden sm:ml-6 sm:block'>
              <div className='flex space-x-4'>{navigationRender}</div>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center gap-1 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <ThemeMode />
            <RepositoryIcon className='hidden md:block' />
          </div>
        </div>
      </div>
      <DisclosurePanel className='sm:hidden'>
        <div className='space-y-1 px-2 pt-2 pb-3'>{mobileNavigationRender}</div>
      </DisclosurePanel>
    </Disclosure>
  );
}
