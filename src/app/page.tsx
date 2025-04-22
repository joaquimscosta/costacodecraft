import Link from 'next/link';
export default function Hero() {
  return (
    <div className='greeting flex-1 self-center overflow-y-auto p-4'>
      <div className='hero'>
        <div className='hero-content text-center'>
          <div className='max-w-lg'>
            <h2 className='text-6xl font-bold'>👋 Hi, I&apos;m Joaquim.</h2>
            <h3 className='text-4xl font-thin'>Software Engineer</h3>
            <p className='read-more py-6 text-2xl tracking-wide'>
              Always Meeting End-User Requirements With Innovation. Read more
              <Link className='link link-info m-1' href={'/about'}>
                about me
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
