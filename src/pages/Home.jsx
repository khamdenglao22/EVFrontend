import React, { useEffect, useState } from "react";
import Logo from "../assets/images/Logo.svg";
// import Banner from "../assets/images/banner.png";
import IconLine from "../assets/icons/icon-line.svg";
import IconFacebook from "../assets/icons/icon-feacbook.svg";
import IconWhatsapp from "../assets/icons/icon-whatsapp.svg";
import IconTikTok from "../assets/icons/icon-tiktok.svg";
import IconInstagram from "../assets/icons/icon-instagram.svg";
import ImgHome1 from "../assets/images/home/image-home-1.svg";
import ImgHome2 from "../assets/images/home/image-home-2.svg";
import ImgHome3 from "../assets/images/home/image-home-3.svg";
import ImgHome4 from "../assets/images/home/image-home-4.png";
import ImgHome5 from "../assets/images/home/image-home-5.svg";
import IconPrevious1 from "../assets/images/home/icon-previous-1.svg";
import IconNext1 from "../assets/images/home/icon-next-1.svg";
import { Link } from "react-router-dom";
import IconNext from "../assets/icons/icon-next.svg";
import IconPrevious from "../assets/icons/icon-previous.svg";
import Video1 from "../assets/images/home/video-1.svg";
import Video2 from "../assets/images/home/video-2.svg";
import Video3 from "../assets/images/home/video-3.svg";
import Video4 from "../assets/images/home/video-4.svg";
import LogoFooter from "../assets/images/home/logo-footer.svg";

import IconAddress from "../assets/icons/icon-address.svg";
import IconPhone from "../assets/icons/icon-phone.svg";
import IconMessage from "../assets/icons/icon-messager.svg";
import Header from "../components/Header";
import Banner from "../components/Banner";

function Home() {
  const [checkScroll, setCheckScroll] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "scroll",
      function (event) {
        var top = this.scrollY;
        // console.log(top);
        if (top > 10) {
          setCheckScroll(true);
        } else {
          setCheckScroll(false);
        }
      },
      false
    );
  }, []);

  console.log(checkScroll);

  return (
    <>
      <header className={`flex justify-between items-center py-5 px-20 fixed z-10 top-0 left-0 right-0 ${checkScroll ? 'header':''}`}>
      {/* <header
        className={`flex justify-between items-center py-7 px-20 absolute z-10 top-0 right-0 left-0`}
      > */}
        <Header checkScroll={checkScroll} />
      </header>

      <Banner />

      <div className="w-full relative">
        <div className="w-full flex justify-center items-center gap-10 absolute top-10 left-0 right-0">
          <img className="w-4" src={IconPrevious} alt="icon" />
          <div className="py-2 px-32 border-bg-color-three border-solid border-2 text-bg-color-three font-semibold">
            <p>2WD Long Range Pro</p>
          </div>
          <img className="w-4" src={IconNext} alt="" />
        </div>
        <div className="h-full flex">
          <img className="w-full" src={ImgHome4} alt="image-home" />
        </div>
        <div className="grid grid-cols-4 px-32 border-y-[1px] bg-bg-color-four border-text-color-three py-5 absolute bottom-5 left-0 right-0">
          <div className="border-solid border-e-[1px] border-text-color-three mr-5">
            <h1 className="text-[18px] font-semibold text-bg-color-secondary">
              TOYOTA BZ4X
            </h1>
            <p className="text-text-color-three text-[12px]">
              Dual Motor All-Wheel Drive{" "}
            </p>
          </div>
          <div className="border-solid border-e-[1px] border-text-color-three mr-5">
            <h1 className="text-[18px] font-semibold text-bg-color-secondary">
              66.7 kWh
            </h1>
            <p className="text-text-color-three text-[12px]">
              ຄວາມຈຸແບັດເຕີລີ່
            </p>
          </div>
          <div className="border-solid border-e-[1px] border-text-color-three mr-5">
            <h1 className="text-[18px] font-semibold text-bg-color-secondary">
              615 km
            </h1>
            <p className="text-text-color-three text-[12px]">
              ໄລຍະທາງແລ່ນໄດ້ໄກສຸດ CLTC
            </p>
          </div>
          <div>
            <h1 className="text-[18px] font-semibold text-bg-color-secondary">
              160 kW
            </h1>
            <p className="text-text-color-three text-[12px]">ກຳລັງມໍເຕີ</p>
          </div>
        </div>
      </div>
      <div className="px-36 py-7 border-y-[1px] bg-bg-color-four border-text-color-three w-full">
        <div className="flex items-center mb-6 w-full">
          <div className="w-[50%] mr-20">
            <h1 className="font-semibold text-bg-color-secondary mb-4 text-[18px]">
              A Place For Everything
            </h1>
            <button className="bg-bg-color-secondary w-full py-2 text-bg-color-four font-semibold text-[18px]">
              ເລືອກຍີ່ຫໍ້-ລຸ້ນ
            </button>
          </div>
          <p className="font-semibold text-[14px]">
            Model Y provides maximum versatility—able to carry 7 passengers and
            their cargo. Each second row seat folds flat independently, creating
            flexible storage for skis, furniture, luggage and more. The liftgate
            opens to a low trunk floor that makes loading and unloading easy and
            quick.
          </p>
        </div>
        <div className="w-full relative">
          <div className="w-full">
            <img className="w-full" src={ImgHome5} alt="image-home" />
          </div>
          <div className="w-full absolute top-[50%] -translate-y-[50%]">
            <div className="flex justify-between px-10">
              <img className="w-14" src={IconPrevious1} alt="image-home" />
              <img className="w-14" src={IconNext1} alt="image-home" />
            </div>
          </div>
        </div>
      </div>

      <div className="px-36 my-7 w-full">
        <div className="w-full mb-5">
          <img className="w-full h-full" src={Video1} alt="video-home" />
        </div>
        <div className="flex gap-5">
          <div>
            <img src={Video2} alt="video-home" />
          </div>
          <div>
            <img src={Video3} alt="video-home" />
          </div>
          <div>
            <img src={Video4} alt="video-home" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
