export default function Contact() {
  return (
    <div className='prose md:prose-2xl contact flex-1 overflow-y-auto p-4'>
      <p>
        Thank you for visiting my page! I truly appreciate your interest. If
        you&apos;d like to connect, please use the channels below:
      </p>

      <h2>
        LinkedIn:{' '}
        <a
          className='link link-info m-1'
          href='https://www.linkedin.com/in/joaquimscosta'
        >
          joaquimscosta
        </a>
      </h2>
      <p>
        Explore my professional background on LinkedIn. I typically accept
        connection requests from individuals I&apos;ve interacted with in some
        capacity. Feel free to send an InMail message as well.
      </p>

      <h2>
        GitHub:{' '}
        <a
          className='link link-info m-1'
          href='https://github.com/joaquimscosta'
        >
          joaquimscosta
        </a>
      </h2>
      <p>
        Discover my projects and source code on GitHub, including tutorials,
        demo projects, and examples primarily using Java, Kotlin, Spring,
        Python, and Cloud Native technologies.
      </p>
    </div>
  );
}
