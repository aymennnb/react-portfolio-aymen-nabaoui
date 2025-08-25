import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

import { Socials, Contacts } from "../constants";
import '../i18n'
import { useTranslation } from "react-i18next"

function Navbar() {
  const {t, i18n} = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <nav className="mb-20 flex items-center justify-between py-5">
      <div className="flex flex-shrink-0 items-center p-2">
        <p style={{fontSize:'43px'}}><a href="#">NA</a></p>
      </div>
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-2xl sm:text-3xl">
        <a href={Socials.linkdin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href={Socials.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href={`https://wa.me/${Socials.whatsapp}`} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        <a href={`mailto:${Contacts.email}`}><IoMail /></a>
        <div className="w-16 sm:w-20 md:w-24">
          <select  value={i18n.language} onChange={(e) => changeLanguage(e.target.value)} className="ml-1 flex items-center cursor-pointer rounded-lg border border-gray-700 bg-gray-800 px-2 py-1 text-sm text-white focus:outline-none">
          <option value="en">EN</option>
          <option value="fr">FR</option>
          <option value="de">DE</option>
        </select>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
