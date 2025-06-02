import img1 from '@/assets/images/under-construction.png';
import Image from 'next/image';
export default function UnderConstructor({ title }) {
  return (
    <>
      <div className='flex flex-1 flex-col sm:flex-row md:mx-auto'>
        <div className='relative w-svh flex-1 overflow-y-auto p-4'>
          <Image
            src={img1}
            alt='Page under construction'
            quality={80}
            fill
            className='object-cover object-top'
            placeholder='blur'
          />
        </div>
      </div>
      <div className='z-10 content-center text-center'>
        <h1 className='mb-10 text-3xl tracking-tight md:text-5xl'>{title}</h1>
      </div>
    </>
  );
}
