import React, { useState } from "react";
import Header from "../components/Header";
import IconNext from "../assets/icons/icon-next.svg";
import ImageModel1 from "../assets/images/model/image-model-1.svg";
import ImageModel2 from "../assets/images/model/image-model-2.svg";
import ImageModel3 from "../assets/images/model/image-model-3.svg";

import CarLogo1 from "../assets/images/model/car-logo-1.svg";
import CarLogo2 from "../assets/images/model/car-logo-2.svg";
import CarLogo3 from "../assets/images/model/car-logo-3.svg";

import ModelLogo1 from "../assets/images/model/model-logo-1.png";
import ModelLogo2 from "../assets/images/model/model-logo-2.png";
import ModelLogo3 from "../assets/images/model/model-logo-3.png";
import ModelLogo4 from "../assets/images/model/model-logo-4.png";
import ModelLogo5 from "../assets/images/model/model-logo-5.png";
import ModelLogo6 from "../assets/images/model/model-logo-6.png";
import ModelLogo7 from "../assets/images/model/model-logo-7.png";
import ModelLogo8 from "../assets/images/model/model-logo-8.png";
import ModelLogo9 from "../assets/images/model/model-logo-9.png";
import ModelLogo10 from "../assets/images/model/model-logo-10.png";
import ModelLogo11 from "../assets/images/model/model-logo-11.png";
import ModelLogo12 from "../assets/images/model/model-logo-12.png";
import ModelLogo13 from "../assets/images/model/model-logo-13.png";
import ModelLogo14 from "../assets/images/model/model-logo-14.png";
import ModelLogo15 from "../assets/images/model/model-logo-15.png";
import { Link } from "react-router-dom";

function Model() {
  const [checkScroll, setCheckScroll] = useState(false);

  return (
    <>
      <header
        className={`flex justify-between items-center py-5 px-20 sticky z-10 top-0 left-0 right-0 header`}
      >
        {/* <header className={`header flex justify-between items-center py-7 px-20`}> */}
        <Header checkScroll={checkScroll} />
      </header>

      <div className="flex gap-2 mx-20 mt-7 mb-5 font-semibold text-bg-color-secondary text-[15px]">
        <Link to={"/"}>Home</Link>
        <img className="w-2" src={IconNext} alt="icon" />
        <span>Models</span>
      </div>

      <div className="mx-20 flex items-center gap-5">
        <div className="w-[60%] relative">
          <div className="w-full">
            <img className="w-full" src={ImageModel1} alt="image-model" />
          </div>
          <div className="absolute bottom-5 left-0">
            <img className="w-44" src={CarLogo1} alt="image-model" />
          </div>
        </div>
        <div className="w-[40%] ">
          <div className="relative mb-5">
            <div>
              <img src={ImageModel2} alt="image-model" />
            </div>
            <div className="absolute bottom-5 left-0">
              <img className="w-44" src={CarLogo2} alt="image-model" />
            </div>
          </div>
          <div className="relative">
            <div>
              <img src={ImageModel3} alt="image-model" />
            </div>
            <div className="absolute bottom-5 left-0">
              <img className="w-44" src={CarLogo3} alt="image-model" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-20 grid grid-cols-3 gap-5 my-5">
        <Link to={"/model/detail"}>
          <img src={ModelLogo1} alt="model-logo" />
        </Link>
        <Link to={"/model/detail"}>
          <img src={ModelLogo2} alt="model-logo" />
        </Link>
        <Link to={"/model/detail"}>
          <img src={ModelLogo3} alt="model-logo" />
        </Link>
        <Link to={"/model/detail"}>
          <img src={ModelLogo4} alt="model-logo" />
        </Link>
        <Link to={"/model/detail"}>
          <img src={ModelLogo5} alt="model-logo" />
        </Link>
        <Link>
          <img src={ModelLogo6} alt="model-logo" />
        </Link>
        <Link>
          <img src={ModelLogo7} alt="model-logo" />
        </Link>
        <Link>
          <img src={ModelLogo8} alt="model-logo" />
        </Link>
        <Link>
          <img src={ModelLogo9} alt="model-logo" />
        </Link>
        <Link>
          <img src={ModelLogo10} alt="model-logo" />
        </Link>
        <Link>
          <img src={ModelLogo11} alt="model-logo" />
        </Link>
        <Link>
          <img src={ModelLogo12} alt="model-logo" />
        </Link>
        <Link>
          <img src={ModelLogo13} alt="model-logo" />
        </Link>
        <Link>
          <img src={ModelLogo14} alt="model-logo" />
        </Link>
        <Link>
          <img src={ModelLogo15} alt="model-logo" />
        </Link>
      </div>
    </>
  );
}

export default Model;
