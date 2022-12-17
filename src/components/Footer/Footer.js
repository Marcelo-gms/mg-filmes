// styles
import "./Footer.css";

// icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>Criado por: Marcelo Gomes &copy;</p>

      <div className="social-icons">
        <a
          href="https://github.com/Marcelo-gms"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/marcelo-gomes-90099b235/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
