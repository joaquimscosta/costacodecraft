import Certificate from "../components/Certificates";
import Avatar from "../components/Avatar";
import Skills from "../components/Skills";
import Sidebar from "../components/Sidebar";

function AboutMe() {
  return (
    <>
      <Sidebar className="w-full md:w-64 p-4 md:min-h-full">
        <Avatar />
      </Sidebar>
      <article className="flex-1 p-4 overflow-y-auto aboutme">
        <p>
          Hello! I am Joaquim Costa. I am an avid Software Engineer who
          specializes in building cloud native, resilient and secure
          application. I've been developing software for over 13 years, most
          recently as a Staff Software Engineer. I currently work at Capgemini,
          a role I started May 1st, 2023. Previously, I worked at General
          Electric where I was the Lead developer for the "Workflows"
          application and contributed to the development of the most popular
          application platform.
        </p>
        <p>
          My focus areas include Java, Kotlin, Spring Boot, DevOps, and Cloud
          Native technologies in general. I support continuous delivery
          practices and believe in a culture of collaboration aimed at
          delivering value to users, customers, and businesses.
        </p>
        <Certificate />
        <p>
          I am proficient in multiple Azure services. In the past 7 years, I
          have been deploying application in Azure (AKS), and I continue to
          upskill in Azure AI Services, and Azure Machine Learning. In addition,
          since last year (2023) I have immersed myself in the world of Python
          programming.
        </p>
        <p>
          When I am not programming, I enjoy traveling, automating my house,
          playing soccer (Futebol), and dancing. I am based in Rhode Island.
        </p>
        <Skills />

        <p>
          <ul className="ml-4">
            <li>
              Connect with me on LinkedIn:
              <a
                className="link m-2"
                href="https://www.linkedin.com/in/joaquimscosta/"
              >
                https://www.linkedin.com/in/joaquimscosta/
              </a>
            </li>
            <li>
              See what I have been working on:
              <a className="link m-2" href="https://github.com/joaquimscosta">
                https://github.com/joaquimscosta
              </a>
            </li>
          </ul>
        </p>
      </article>
    </>
  );
}

export default AboutMe;
