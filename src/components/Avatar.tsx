import React from 'react';
import me from '@/assets/images/me-avatar.jpg';
import Image from 'next/image';

export default function Avatar() {
  return (
    <div className='justify-self-center text-center'>
      <div>
        <Image
          className='inline-block max-w-full rounded-full'
          src={me}
          placeholder='blur'
          alt='My Avatar'
        />
      </div>
      <div className='pt-4'>
        <h2 className='avatar-name text-4xl font-thin'>Joaquim Costa</h2>
        <h3 className='text-2xl font-light'>Software Engineer</h3>
      </div>
    </div>
  );
}
