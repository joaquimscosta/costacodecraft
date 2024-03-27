import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function SocialMedia() {
  return (
    <nav className="flex text-2xl justify-center gap-2 social-media">
      <a href="https://github.com/joaquimscosta">
        <FaGithub size="" style={{ color: "#333" }} />
      </a>
      <a href="https://www.linkedin.com/in/joaquimscosta">
        <FaLinkedin size="" style={{ color: "#0077B5" }} />
      </a>
    </nav>
  );
}

export default SocialMedia;
