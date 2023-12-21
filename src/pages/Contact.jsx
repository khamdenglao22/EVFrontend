import React, { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import IconNext from "../assets/icons/icon-next.svg";
import IconDropDown from "../assets/images/model/icon-dropdown.svg";

function Contact() {
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
        <span>Contact Us</span>
      </div>

      <div className="px-96 py-7 bg-bg-color-four w-full">
        <form>
          <h1 className="text-[18px] font-semibold mb-5">ຕິດ​ຕໍ່</h1>
          <div className="flex flex-col gap-1 mb-2">
            <label className="flex gap-1">
              ຊື່​ ແລະ ນາມສະກຸນ{" "}
              <span className="text-[red] text-[18px]">*</span>
            </label>
            <input
              className="outline-none border-[1px] border-bg-color-three px-3 py-1 text-[16px]"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-1 mb-2">
            <label className="flex gap-1">
              ເບີໂທຕິດຕໍ່ <span className="text-[red] text-[18px]">*</span>
            </label>
            <input
              className="outline-none border-[1px] border-bg-color-three px-3 py-1 text-[16px]"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-1 mb-2">
            <label className="flex gap-1">
              ອີເມວ <span className="text-[red] text-[18px]">*</span>
            </label>
            <input
              className="outline-none border-[1px] border-bg-color-three px-3 py-1 text-[16px]"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-1 mb-2">
            <label className="flex gap-1">ລາຍລະອຽດ</label>
            <textarea
              rows={4}
              className="outline-none border-[1px] border-bg-color-three px-3 py-1 text-[16px]"
              type="text"
            />
          </div>
          <div className="w-full flex justify-center gap-3 font-semibold mt-5">
            <button className="header text-bg-color-four py-1 px-10 rounded-[25px] text-[14px]">
              ສົ່ງ
            </button>
            <button className="border-2 border-bg-color-three py-1 px-7 rounded-[25px]">
              ຍົກເລີກ
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
