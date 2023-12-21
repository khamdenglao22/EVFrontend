import React, { useState } from "react";
import IconNext from "../assets/icons/icon-next.svg";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import IconDropDown from "../assets/images/model/icon-dropdown.svg";
import ImageModelDetail1 from "../assets/images/model/image-model-detail-1.png";
import ImageModelDetail2 from "../assets/images/model/image-model-detail-2.svg";
import ImageModelDetail3 from "../assets/images/model/image-model-detail-3.svg";
import IconPrevious1 from "../assets/images/home/icon-previous-1.svg";
import IconNext1 from "../assets/images/home/icon-next-1.svg";
import IconClose from "../assets/images/model/icon-close.svg";

function ModelDetail() {
  const [checkScroll, setCheckScroll] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  return (
    <>
      {/* <header className={`flex justify-between items-center py-7 px-20 fixed z-10 top-0 left-0 right-0 ${checkScroll ? 'header':''}`}> */}
      {/* <header className={`header flex justify-between items-center py-7 px-20`}> */}
      <header
        className={`flex justify-between items-center py-5 px-20 sticky z-10 top-0 left-0 right-0 header`}
      >
        <Header checkScroll={checkScroll} />
      </header>

      <div className="flex gap-2 mx-20 mt-7 mb-3 font-semibold text-bg-color-secondary text-[15px]">
        <Link to={"/"}>Home</Link>
        <img className="w-2" src={IconNext} alt="icon" />
        <Link to={"/model"}>Models</Link>
        <img className="w-2" src={IconNext} alt="icon" />
        <span>KIA</span>
      </div>
      <div className="mx-20 mb-5">
        <form className="flex items-center gap-3">
          <div className="relative">
            <select className="border-2 border-bg-color-secondary outline-none cursor-pointer pl-7 pr-10 py-1 font-semibold text-bg-color-secondary appearance-none">
              <option value="volvo">EV9</option>
              <option value="saab">EV8</option>
            </select>
            <img
              className="w-3 absolute top-[50%] -translate-y-[50%] right-3 pointer-events-none"
              src={IconDropDown}
              alt="icon"
            />
          </div>
          <div className="relative">
            <select className="border-2 border-bg-color-secondary outline-none cursor-pointer pl-7 pr-10 py-1 font-semibold text-bg-color-secondary appearance-none">
              <option value="volvo">2023</option>
              <option value="saab">2022</option>
            </select>
            <img
              className="w-3 absolute top-[50%] -translate-y-[50%] right-3 pointer-events-none"
              src={IconDropDown}
              alt="icon"
            />
          </div>
          <div className="relative">
            <select className="border-2 border-bg-color-secondary outline-none cursor-pointer pl-7 pr-10 py-1 font-semibold text-bg-color-secondary appearance-none">
              <option value="volvo">Land AWD</option>
            </select>
            <img
              className="w-3 absolute top-[50%] -translate-y-[50%] right-3 pointer-events-none"
              src={IconDropDown}
              alt="icon"
            />
          </div>
        </form>
      </div>

      <div className="w-full px-20">
        <div className="w-full relative">
          <div className="w-full">
            <img
              className="w-full"
              src={ImageModelDetail1}
              alt="image-detail"
            />
          </div>
          <div className="absolute top-[27%] -translate-y-[73%] left-[50%] -translate-x-[50%]">
            <div className="flex items-center text-text-color-first text-[22px] gap-5">
              <p className="text-[24px]">119,000 US$</p>
              <button
                className="px-20 header py-1 border-2 border-[#007471]"
                onClick={() => setOpenModel(!openModel)}
              >
                ສັ່ງຊື້
              </button>
            </div>
          </div>
          <div className="absolute top-[50%] -translate-y-[50%] w-full">
            <div className="flex justify-between w-full px-10">
              <img className="w-20" src={IconPrevious1} alt="icon" />
              <img className="w-20" src={IconNext1} alt="icon" />
            </div>
          </div>
          <div className="absolute bottom-20 w-full">
            <div className="flex items-center justify-around text-bg-color-four">
              <div>
                <h1 className="text-[28px] font-semibold">480 km</h1>
                <p className="text-[20px] font-semibold">ໄລຍະທາງແລ່ນໄດ້ໄກສຸດ</p>
              </div>
              <div>
                <h1 className="text-[28px] font-semibold">149 KW (200 HP)</h1>
                <p className="text-[20px] font-semibold">ກຳລັງມໍເຕີ</p>
              </div>
              <div>
                <h1 className="text-[28px] font-semibold">99.8 kWh</h1>
                <p className="text-[20px] font-semibold">ຄວາມຈຸແບັດເຕີລີ່</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-7 font-semibold">
          <div className="flex w-full gap-5 mb-5">
            <div className="w-[40%]">
              <img
                className="w-full"
                src={ImageModelDetail2}
                alt="image-detail"
              />
            </div>
            <div className="w-[60%]">
              <h1 className="text-bg-color-three text-[18px] mb-2">KIA EV9</h1>
              <p className="text-[17px]">
                Having been tested in some of the coldest climates on the
                planet, the EV6 is designed to handle the elements. Even in
                challenging weather, the EV6 can help keep you comfortable and
                in control with no sacrifice to speed.
              </p>
            </div>
          </div>
          <div className="flex w-full gap-5">
            <div className="w-[40%]">
              <img
                className="w-full"
                src={ImageModelDetail3}
                alt="image-detail"
              />
            </div>
            <div className="w-[60%]">
              <h1 className="text-bg-color-three text-[18px] mb-2">
                KIA Niro EV
              </h1>
              <p className="text-[17px]">
                The Niro EV is a sustainable way to have a good time on the
                road. This capable all-electric crossover offers utility,
                convenience, and a thrilling experience behind the wheel.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------- Start Model ---------------------------------------- */}
      <div
        className={`fixed top-0 left-0 right-0 w-full h-[100vh] z-10 ${
          openModel ? "block" : "hidden"
        }`}
        style={{ backgroundColor: "rgb(0,0,0,0.7)" }}
        onClick={() => setOpenModel(!openModel)}
      ></div>

      <div
        className={`fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[40%] z-20 ${
          openModel ? "block" : "hidden"
        }`}
      >
        <div className="bg-bg-color-four px-20 py-10 w-full rounded-[20px] relative">
          <button
            className="absolute top-5 right-5"
            onClick={() => setOpenModel(!openModel)}
          >
            <img className="w-7" src={IconClose} alt="icon" />
          </button>
          <div className="text-bg-color-three">
            <form>
              <h1 className="text-[18px] font-semibold mb-5">ປ້ອນຂໍ້ມູນ</h1>
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
              <div className="mb-1">
                <label>ເລືອກຍີ່ຫໍ້</label>
                <div className="mt-1 relative">
                  <select className="w-full border-[1px] border-bg-color-secondary outline-none cursor-pointer pl-7 pr-10 py-1 text-bg-color-secondary appearance-none">
                    <option value="volvo"></option>
                    <option value="saab">EV8</option>
                  </select>
                  <img
                    className="w-3 absolute top-[50%] -translate-y-[50%] right-3 pointer-events-none"
                    src={IconDropDown}
                    alt="icon"
                  />
                </div>
              </div>
              <div className="mb-1">
                <label>ເລືອກ model</label>
                <div className="mt-1 relative">
                  <select className="w-full border-[1px] border-bg-color-secondary outline-none cursor-pointer pl-7 pr-10 py-1 text-bg-color-secondary appearance-none">
                    <option value="volvo"></option>
                    <option value="saab">EV8</option>
                  </select>
                  <img
                    className="w-3 absolute top-[50%] -translate-y-[50%] right-3 pointer-events-none"
                    src={IconDropDown}
                    alt="icon"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 mb-2">
                <label className="flex gap-1">
                ລາຍລະອຽດ
                </label>
                <textarea
                  rows={4}
                  className="outline-none border-[1px] border-bg-color-three px-3 py-1 text-[16px]"
                  type="text"
                />
              </div>
              <div className="w-full flex justify-center gap-3 font-semibold mt-5">
                <button className="header text-bg-color-four py-1 px-10 rounded-[25px] text-[14px]">
                  ສັ່ງຊື້
                </button>
                <button className="border-2 border-bg-color-three py-1 px-7 rounded-[25px]">
                  ຍົກເລີກ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModelDetail;
