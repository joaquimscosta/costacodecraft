import Image from 'next/image';
import img1 from '@/assets/images/under-construction.png';

export default function Projects() {
  return (
    <div className='flex flex-1 flex-col sm:flex-row md:mx-auto'>
      <div className='relative w-screen flex-1 overflow-y-auto p-4'>
        <Image
          src={img1}
          alt='Page under construction'
          fill
          className='object-cover'
          placeholder='blur'
        />
      </div>
    </div>
  );
}
