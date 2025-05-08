import Link from 'next/link';

export default function Hero() {
  // return (
  //   <div className='greeting hero flex-1 self-center overflow-y-auto'>
  //     <div className='hero-content text-center'>
  //       <div className='max-w-lg'>
  //         <h2 className='pb-4 text-6xl font-bold'>👋 Hi, I&apos;m Joaquim.</h2>
  //         <h3 className='text-4xl font-thin'>Software Engineer</h3>
  //         <p className='read-more py-6 text-2xl tracking-wide'>
  //           Always Meeting End-User Requirements With Innovation. Read more
  //           <Link className='link link-info m-1' href='/about'>
  //             about me
  //           </Link>
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className='bg-white'>
      <div className='relative'>
        <div className='mx-auto max-w-7xl'>
          <div className='relative z-10 pt-14 lg:w-full lg:max-w-2xl'>
            <svg
              viewBox='0 0 100 100'
              preserveAspectRatio='none'
              aria-hidden='true'
              className='absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block'
            >
              <polygon points='0,0 90,0 50,100 0,100' />
            </svg>

            <div className='relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0'>
              <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-xl'>
                <h1 className='pb-4 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl'>
                  👋 Hi, I&apos;m Joaquim.
                </h1>
                <h3 className='text-3xl font-thin'>Staff Software Engineer</h3>
                <p className='mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8'>
                  I build scalable, high-performance systems using Java, Kotlin,
                  and Spring Boot. I specialize in backend architecture,
                  microservices, and DevOps automation to help teams ship
                  reliable, cloud-native software—fast.
                </p>
                <div className='mt-10 flex items-center gap-x-6'>
                  <Link
                    href='#'
                    className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    Hire me
                  </Link>
                  <Link
                    href='/about'
                    className='text-sm/6 font-semibold text-gray-900'
                  >
                    Learn more <span aria-hidden='true'>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
          <img
            alt=''
            src='https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80'
            className='aspect-3/2 object-cover lg:aspect-auto lg:size-full'
          />
        </div>
      </div>
    </div>
  );
}
