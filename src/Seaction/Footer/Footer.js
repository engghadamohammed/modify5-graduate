import "./Footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div class="social">
          <span>
            <FaLinkedinIn />
          </span>

          <span>
            <FaPaperPlane />
          </span>

          <span>
            <FaWhatsapp />
          </span>

          <span>
            <FaWordpress />
          </span>
        </div>

        <p class="copyright">Company Name © 2022</p>
      </div>
    </>
  );
};

export default Footer;
