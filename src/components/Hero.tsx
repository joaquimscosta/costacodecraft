import Link from 'next/link';
import { roketto } from '@/styles/fonts';
import heroImage from '@/assets/images/DJI_0205.jpg';
import Image from 'next/image';

export default function Hero() {
  return (
    <div>
      <div className='relative'>
        <div className='mx-auto max-w-7xl'>
          <div className='relative z-10 pt-14 lg:w-full lg:max-w-2xl'>
            <svg
              viewBox='0 0 100 100'
              preserveAspectRatio='none'
              aria-hidden='true'
              className='fill-base-100 absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform lg:block'
            >
              <polygon points='0,0 90,0 50,100 0,100' />
            </svg>

            <div className='relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0'>
              <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-xl'>
                <h1
                  className={`${roketto.className} pb-4 text-5xl font-semibold tracking-tight text-pretty sm:text-7xl`}
                >
                  Hi, I’m Joaquim.
                </h1>
                <h2 className='text-xl font-medium text-sky-600 sm:text-2xl'>
                  Staff Software Engineer · Backend Specialist
                </h2>
                <p className='mt-8 text-lg font-medium text-pretty sm:text-xl/8'>
                  I specialize in building scalable, high-performance backend
                  systems using Java, Kotlin, and Spring Boot. I focus on
                  microservices architecture, DevOps automation, and
                  cloud-native design to help teams ship reliable software—fast.
                </p>

                <div className='mt-10 flex items-center gap-x-6'>
                  <Link
                    href='/contact'
                    className='rounded-md bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600'
                  >
                    Let’s Work Together
                  </Link>
                  <Link
                    href='/about'
                    className='text-sm font-semibold hover:underline'
                  >
                    More About Me <span aria-hidden='true'>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
          <Image
            alt='Volcano of Fogo'
            src={heroImage}
            className='aspect-3/2 object-cover lg:aspect-auto lg:size-full'
          />
        </div>
      </div>
    </div>
  );
}
