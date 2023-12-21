import React from "react";
import IconLine from "../assets/icons/icon-line.svg";
import IconFacebook from "../assets/icons/icon-feacbook.svg";
import IconWhatsapp from "../assets/icons/icon-whatsapp.svg";
import IconTikTok from "../assets/icons/icon-tiktok.svg";
import IconInstagram from "../assets/icons/icon-instagram.svg";
import LogoFooter from "../assets/images/home/logo-footer.svg";
import IconAddress from "../assets/icons/icon-address.svg";
import IconPhone from "../assets/icons/icon-phone.svg";
import IconMessage from "../assets/icons/icon-messager.svg";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="header px-36 flex items-end py-5 gap-5 text-bg-color-four font-semibold">
      <div className="w-[20%]">
        <img className="w-full" src={LogoFooter} alt="logo" />
      </div>
      <div className="w-[40%]">
        <div className="flex items-center mb-2">
          <Link>
            <img className="w-10" src={IconFacebook} alt="icon" />
          </Link>
          <Link>
            <img className="w-10" src={IconWhatsapp} alt="icon" />
          </Link>
          <Link>
            <img className="w-10" src={IconLine} alt="icon" />
          </Link>
          <Link>
            <img className="w-10" src={IconInstagram} alt="icon" />
          </Link>
          <Link>
            <img className="w-10" src={IconTikTok} alt="icon" />
          </Link>
        </div>
        <h1 className="text-[14px]">
          © 2023 LaoEVCar. All Rights Reserved. Web design by SVENG IT.
        </h1>
      </div>
      <div className="w-[40%] text-[14px] flex flex-col items-end gap-2">
        <Link className="flex gap-3">
          <p className="text-end">
            Buratino Cafe, Dongpalaeb village, Chanthabouly district, Vientiane
            Capital, Lao PDR
          </p>
          <img className="w-5" src={IconAddress} alt="icon" />
        </Link>
        <Link className="flex gap-3">
          <p className="text-end">020 5444 9954</p>
          <img className="w-5" src={IconPhone} alt="icon" />
        </Link>
        <Link className="flex gap-3">
          <p className="text-end">laoevcar@gmail.com</p>
          <img className="w-5" src={IconMessage} alt="icon" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
