import React from 'react';
import me from '@assets/images/me-avatar.jpg';
import Image from 'next/image';

export default function Avatar() {
  return (
    <div className='justify-self-center text-center'>
      <div className='avatar'>
        <div className='max-w-sm rounded-full'>
          <Image
            className='max-w-full'
            src={me}
            placeholder='blur'
            alt='My Avatar'
          />
        </div>
      </div>
      <div>
        <h2 className='avatar-name text-4xl font-thin'>Joaquim Costa</h2>
        <h3 className='avatar-title text-2xl font-light'>Software Engineer</h3>
        {/* <h3 className="text-xl avatar-company">Capgemini</h3> */}
      </div>
    </div>
  );
}
