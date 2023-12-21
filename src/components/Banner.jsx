import React from "react";
import ImgHome1 from "../assets/images/home/image-home-1.svg";
import ImgHome2 from "../assets/images/home/image-home-2.svg";
import ImgHome3 from "../assets/images/home/image-home-3.svg";
import BannerImage from "../assets/images/banner.png";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="w-full h-[100vh] relative flex">
      <div className="w-full h-full">
        <img className="w-full h-full" src={BannerImage} alt="image-banner" />
      </div>
      <div className="absolute bottom-5 flex mx-20 gap-5">
        <Link className="relative">
          <img className="w-full" src={ImgHome1} alt="image-home" />
          <div
            className="absolute bottom-5 right-0 px-10 py-2 font-semibold text-text-color-first"
            style={{ backgroundColor: "rgb(0,0,0,0.7)" }}
          >
            <p>ອຸປະກອນເສີມ</p>
          </div>
        </Link>
        <Link className="relative">
          <img className="w-full" src={ImgHome2} alt="image-home" />
          <div
            className="absolute bottom-5 right-0 px-10 py-2 font-semibold text-text-color-first"
            style={{ backgroundColor: "rgb(0,0,0,0.7)" }}
          >
            <p>ສາລະໜ້າຮູ້</p>
          </div>
        </Link>
        <Link className="relative">
          <img className="w-full" src={ImgHome3} alt="image-home" />
          <div
            className="absolute bottom-5 right-0 px-10 py-2 font-semibold text-text-color-first"
            style={{ backgroundColor: "rgb(0,0,0,0.7)" }}
          >
            <p>ສົ່ງມອບລົດ</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
