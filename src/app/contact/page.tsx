import Link from 'next/link';

export default function Contact() {
  return (
    <div className='flex flex-1 flex-col sm:flex-row md:mx-auto'>
      <div className='prose md:prose-2xl contact flex-1 overflow-y-auto p-4'>
        <p>
          Thanks for visiting! If you&apos;d like to connect or collaborate,
          feel free to reach out through any of the platforms below.
        </p>

        <h2 className='mt-4'>LinkedIn</h2>
        <p>
          <Link
            className='link link-info m-1'
            href='https://www.linkedin.com/in/joaquimscosta'
          >
            linkedin.com/in/joaquimscosta
          </Link>
        </p>
        <p>
          Explore my professional background, projects, and recommendations.
        </p>

        <h2 className='mt-4'>GitHub</h2>
        <p>
          <Link
            className='link link-info m-1'
            href='https://github.com/joaquimscosta'
          >
            github.com/joaquimscosta
          </Link>
        </p>
        <p>
          Check out my open-source work, tutorials, and demo apps—mostly around
          Java, Kotlin, Spring Boot, Python, and cloud-native engineering.
        </p>
      </div>
    </div>
  );
}
