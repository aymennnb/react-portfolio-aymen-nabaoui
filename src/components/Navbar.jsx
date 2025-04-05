import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

import { Socials, Contacts } from "../constants";
import '../i18n'
import Cookies from 'js-cookie';
import { useTranslation } from "react-i18next"
import { useEffect } from "react";

function Navbar() {
  const {t, i18n} = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  // const lang = Cookies.get('i18next') || "en";

  // useEffect(()=>{
  //   window.document.dir = i18n.dir();
  // },[lang])

  return (
    <nav className="mb-20 flex items-center justify-between py-5">
      <div className="flex flex-shrink-0 items-center p-2">
        <p style={{fontSize:'43px'}}><a href="#">NA</a></p>
      </div>
      <div className="m-8 flex items-center justify-content gap-4 text-3xl">
        <a href={Socials.linkdin}><FaLinkedin /></a>
        <a href={Socials.github}><FaGithub /></a>
        <a href={`https://wa.me/${Socials.whatsapp}`}><FaWhatsapp /></a>
        <a href={`mailto:${Contacts.email}`}><IoMail /></a>
        <select  value={i18n.language} onChange={(e) => changeLanguage(e.target.value)} className="ml-1 cursor-pointer rounded-lg border border-gray-700 bg-gray-800 px-2 py-1 text-sm text-white focus:outline-none">
          <option value="en">EN</option>
          <option value="fr">FR</option>
          <option value="de">DE</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
