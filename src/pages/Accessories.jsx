import React, { useState } from "react";
import IconNext from "../assets/icons/icon-next.svg";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Accessories() {
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
        <span>Accessories</span>
      </div>

      <div className="px-20 min-h-[70vh]">
      </div>

    </>
  );
}

export default Accessories;
