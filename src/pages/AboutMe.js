import Certificate from "../components/Certificates";
import Avatar from "../components/Avatar";
import Skills from "../components/Skills";
import Sidebar from "../components/Sidebar";

function AboutMe({ ...rest }) {
  console.log(rest);

  return (
    <>
      <Sidebar className="w-full md:w-64 p-4 md:min-h-full">
        <Avatar />
      </Sidebar>
      <article className="flex-1 p-4 overflow-y-auto aboutme">
        <p>
          I've been developing software for about 13 years, most recently as a
          staff software engineer. I currently work at Capgemini, a new role I
          started May 1st, 2023. I have completed my Azure certifications in
          "Azure DevOps engineer expert", and "Azure developers associate".
          Currently, I have been upskilling to become a Pythonista.
        </p>
        <Certificate />
        <p>
          My primary interests include DevOps, (particularly around
          implementation and transformation of teams to use DevOps effectively)
          and developing Cloud Native application using Java development in the
          Azure cloud. When I am not programming, I enjoy traveling, automating
          my house, playing soccer (<button>Futebol</button>), and dancing (
          <button>Kizomba</button>).
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
