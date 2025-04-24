import Link from 'next/link';
import { justSans } from '@/styles/fonts';

export default function Logo() {
  return (
    <Link href='/' className='z-10 flex items-center gap-4'>
      {/* <Image src={logo} height='64' width='64' alt='Costa Code Craft logo' /> */}
      <div className={`${justSans.className} text-primary-100 text-3xl`}>
        <span className='font-extrabold'>Code</span>
        <span className='font-thin'>Craft</span>
      </div>
    </Link>
  );
}
