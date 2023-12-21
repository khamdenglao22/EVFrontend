import React from 'react'
import Logo from "../assets/images/Logo.svg";
import IconLine from "../assets/icons/icon-line.svg";
import IconFacebook from "../assets/icons/icon-feacbook.svg";
import IconWhatsapp from "../assets/icons/icon-whatsapp.svg";
import IconTikTok from "../assets/icons/icon-tiktok.svg";
import IconInstagram from "../assets/icons/icon-instagram.svg";
import { Link } from 'react-router-dom';

function Header({checkScroll}) {
  return (
    <>
        <Link to={'/'} className="h-16">
          <img className="h-full w-full" src={Logo} alt="img-logo" />
        </Link>
        <div className="flex flex-col gap-2">
          <ul className="flex text-text-color-first font-semibold">
            <li>
              <Link
                className={`px-2 py-1 text-[14px]  ${
                  checkScroll
                    ? "hover:bg-text-color-first hover:text-bg-color-secondary"
                    : "hover:bg-text-color-first hover:text-bg-color-secondary"
                }`}
                to="/model"
              >
                MODEL
              </Link>
            </li>
            <li>
              <Link
                className={`px-2 py-1 text-[14px]  ${
                  checkScroll
                    ? "hover:bg-text-color-first hover:text-bg-color-secondary"
                    : "hover:bg-text-color-first hover:text-bg-color-secondary"
                }`}
                to="/accessories"
              >
                ACCESSORIES
              </Link>
            </li>
            <li>
              <Link
                className={`px-2 py-1 text-[14px] ${
                  checkScroll
                    ? "hover:bg-text-color-first hover:text-bg-color-secondary"
                    : "hover:bg-text-color-first hover:text-bg-color-secondary"
                }`}
                to="/contact"
              >
                CONTACT US
              </Link>
            </li>
          </ul>

          <div className="flex gap-2 items-center justify-end">
            <Link to="#">
              <img className="w-7" src={IconFacebook} alt="icon" />
            </Link>
            <Link to="#">
              <img className="w-7" src={IconWhatsapp} alt="icon" />
            </Link>
            <Link to="#">
              <img className="w-7" src={IconLine} alt="icon" />
            </Link>
            <Link to="#">
              <img className="w-7" src={IconInstagram} alt="icon" />
            </Link>
            <Link to="#">
              <img className="w-7" src={IconTikTok} alt="icon" />
            </Link>
          </div>
        </div>
    </>
  )
}

export default Header