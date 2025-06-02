import Link from 'next/link';
import { justSans } from '@/styles/fonts';

export default function Logo() {
  return (
    <Link href='/' className='z-10 flex items-center gap-4'>
      <div className={`${justSans.className} text-2xl text-sky-400`}>
        <span className='font-extrabold'>Code</span>
        <span className='font-thin'>Craft</span>
      </div>
    </Link>
  );
}
