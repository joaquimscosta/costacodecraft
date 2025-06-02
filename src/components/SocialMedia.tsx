import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

export default function SocialMedia({ ...rest }) {
  const navigation = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/joaquimscosta',
      icon: () => <FaLinkedin size={24} fill='currentColor' />,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/joaquimscosta',
      icon: () => <FaGithub size={24} fill='currentColor' />,
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@codekumano',
      icon: () => <FaYoutube size={24} fill='currentColor' />,
    },
  ];
  return (
    <nav {...rest} className={rest.className}>
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className='text-gray-400 hover:text-gray-300'
        >
          <span className='sr-only'>{item.name}</span>
          {/* @ts-expect-error - React Icons function components don't accept className prop */}
          <item.icon aria-hidden='true' className='size-6' />
        </Link>
      ))}
    </nav>
  );
}
