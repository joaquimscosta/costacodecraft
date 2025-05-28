import Certificate from '@/components/Certificates';
import Avatar from '@/components/Avatar';
import Skills from '@/components/Skills';
import Sidebar from '@/components/Sidebar';

export default function About() {
  return (
    <div className='flex flex-1 flex-col sm:flex-row md:mx-auto'>
      <Sidebar className='mx-auto w-80 p-4 md:w-1/4'>
        <Avatar />
      </Sidebar>
      <article className='prose md:prose-2xl flex-1 overflow-y-auto p-4'>
        <p>
          Hi, I’m Joaquim Costa — a Staff Software Engineer with over 13 years
          of experience designing and building secure, cloud-native backend
          systems. I specialize in Java, Kotlin, and Spring Boot, with a strong
          focus on microservices architecture, API design, and DevOps
          automation.
        </p>

        <p>
          I spent the majority of my career at <strong>General Electric</strong>
          , where I advanced to Staff Software Engineer and served as the
          backend lead for the company’s internal “Workflows” platform — one of
          the most widely used systems across the organization. I played a
          central role in modernizing the application from a monolith to
          microservices, architecting and delivering robust backend solutions
          that supported high availability and scalability.
        </p>

        <p>
          My work at GE included leading the technical design, optimizing
          performance, and implementing infrastructure improvements such as
          Docker-based local development environments. I also introduced CI/CD
          pipelines and improved test reliability to support faster, more
          dependable releases.
        </p>

        <p>
          Most recently, I worked at <strong>Kroger</strong> as an Advanced
          Software Engineer. There, I helped standardize backend architecture,
          implemented RBAC security using OAuth2, and optimized CI/CD workflows
          with GitHub Actions. I led code review practices and championed
          OpenAPI adoption to align service development with platform-wide
          standards.
        </p>

        <p>
          My time at <strong>Capgemini</strong> gave me additional exposure to
          client-facing enterprise projects, but my core passion is building
          impactful backend systems and engineering infrastructure from within
          product-focused teams.
        </p>

        <Certificate />

        <p>
          Over the past several years, I’ve worked extensively in Azure
          (including AKS) and have recently been diving into Generative AI,
          LLMs, and agentic systems—especially where they intersect with backend
          development, developer tooling, and automation workflows.
        </p>

        <p>
          Outside of engineering, I enjoy traveling, automating my home, playing
          soccer (futebol), and dancing. I’m based in Rhode Island and always
          open to collaboration, mentoring, or solving meaningful technical
          challenges.
        </p>

        <Skills />
      </article>
    </div>
  );
}
