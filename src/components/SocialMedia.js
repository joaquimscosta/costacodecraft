import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function SocialMedia() {
  return (
    <nav className="social-media">
      <a href="https://github.com/joaquimscosta">
        <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: "#333" }} />
      </a>
      <a href="https://www.linkedin.com/in/joaquimscosta">
        <FontAwesomeIcon
          icon={faLinkedin}
          size="2x"
          style={{ color: "#0077B5" }}
        />
      </a>
    </nav>
  );
}

export default SocialMedia;
