import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaSquareXTwitter} from "react-icons/fa6";
import { Socials } from "../constants";

function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-5">
      <div className="flex flex-shrink-0 items-center p-2">
        {/* <img src={logo} alt="Logo" /> */}
        {/* <img src={logoNA} alt="Logo" /> */}
        <p style={{fontSize:'43px'}}><a href="#">NA</a></p>
      </div>
      <div className="m-8 flex items-center justify-content gap-4 text-3xl">
        <a href={Socials.linkdin}><FaLinkedin /></a>
        <a href={Socials.github}><FaGithub /></a>
        <a href={`https://wa.me/${Socials.whatsapp}`}><FaWhatsapp /></a>
      </div>
    </nav>
  );
}

export default Navbar;
