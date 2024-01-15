import az204 from "../assets/images/azure-developer-associate-600x600.png";
import az400 from "../assets/images/azure-devops-engineer-expert-600x600.png";
function AboutMe() {
  return (
    <div>
      <p>
        I've been developing software for about 13 years, most recently as a
        staff software engineer. I currently work at Capgemini, a new role I
        started May 1st, 2023. I have completed my Azure certifications in
        "Azure DevOps engineer expert", and "Azure developers associate".
        Currently, I have been upskilling to become a Pythonista.
      </p>
      <p className="certificates">
        <a href="https://learn.microsoft.com/api/credentials/share/en-us/41012948/33F48BE03911C07C?sharingId=117A2EE4C23A5BEA">
          <img src={az204} alt="Azure Developer Certificate" />
        </a>
        <a href="https://learn.microsoft.com/api/credentials/share/en-us/41012948/738E6B3882D9F840?sharingId=117A2EE4C23A5BEA">
          <img src={az400} alt="Azure DevOps Engineer Certificate" />
        </a>
      </p>
      <p>
        My primary interests include DevOps, (particularly around implementation
        and transformation of teams to use DevOps effectively) and developing
        Cloud Native application using Java development in the Azure cloud. When
        I am not programming, I enjoy traveling, automating my house, playing
        soccer (<button>Futebol</button>), and dancing (<button>Kizomba</button>
        ).
      </p>
      {/* <p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            Connect with me on LinkedIn:
            <a href="https://www.linkedin.com/in/joaquimscosta/">
              https://www.linkedin.com/in/joaquimscosta/
            </a>
          </li>
          <li>
            See what I have been working on:
            <a href="https://github.com/joaquimscosta">
              https://github.com/joaquimscosta
            </a>
          </li>
        </ul>
      </p> */}
    </div>
  );
}

export default AboutMe;
