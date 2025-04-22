import Certificate from '@components/Certificates';
import Avatar from '@components/Avatar';
import Skills from '@components/Skills';
import Sidebar from '@components/Sidebar';

export default function About() {
  return (
    <>
      <Sidebar className='w-full p-4 md:min-h-full md:w-64'>
        <Avatar />
      </Sidebar>
      <article className='prose md:prose-2xl aboutme flex-1 overflow-y-auto p-4'>
        <p>
          Hello! I am Joaquim Costa. I am an avid Software Engineer who
          specializes in building cloud native, resilient and secure
          application. I&apos;ve been developing software for over 13 years,
          most recently as a Staff Software Engineer. I worked at Capgemini,
          between May 2023 to May 2024. Previously, I worked at General Electric
          where I was the Lead developer for the &quot;Workflows&quot;
          application and contributed to the development of the company&apos;s
          most widely used internal application.
        </p>
        <p>
          My focus areas include Java, Kotlin, Spring Boot, DevOps, and Cloud
          Native technologies in general. I support continuous delivery
          practices and believe in a culture of collaboration aimed at
          delivering value to users, customers, and businesses.
        </p>
        <Certificate />
        <p>
          I am proficient in multiple Azure services. In the past seven years, I
          have been deploying applications in Azure (AKS), and I continue to
          upskill in Azure AI Services. In addition, since last year (2023), I
          have immersed myself in the world of Android and mobile development.
        </p>
        <p>
          When I am not programming, I enjoy traveling, automating my house,
          playing soccer (Futebol), and dancing. I am based in Rhode Island.
        </p>
        <Skills />
      </article>
    </>
  );
}
