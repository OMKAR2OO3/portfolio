import React, { useState } from "react";
import bgimg from "../images/Banner.639c4fdafdd800760cb8-removebg.png";

import { IoMdClose } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div id="home" className="forwidth">
        {/* Header */}
        <div className="flex justify-between items-center p-3 bg-[#282727e3] fixed w-full max-sm:p-0 z-[100]">
          <div className="logo">
            <h3>
              <a
                href="#home "
                className="text-[30px] font-semibold text-[#00af73] max-sm:text-[25px] pt-[40px]"
              >
                // OMKAR //
              </a>
            </h3>
          </div>
          {/* Desktop Navigation */}
          <div className="navebar max-sm:hidden">
            <ul className="flex gap-[80px] text-[#ffffff]">
              <li className="font-medium text-[20px] hover:text-[#00af73]">
                <a href="#home"> Home</a>
              </li>
              <li className="font-medium text-[20px] hover:text-[#00af73]">
                <a href="#about"> About</a>
              </li>
              <li className="font-medium text-[20px] hover:text-[#00af73]">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="font-medium text-[20px] hover:text-[#00af73]">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          {/* Mobile Menu Icon */}
          <button className="max-sm:block md:hidden  mr-3 ]" onClick={toggleMenu}>
            {isMenuOpen ? (
              <IoMdClose className="  text-[24px] text-[#ffffff] " />
            ) : (
              <AiOutlineMenu className="text-[24px] text-[#ffffff]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {/* {isMenuOpen && ( */}
          <>
            {/*    */}
            <ul className={`max-sm:block  text-left bg-[#ffffffe7] p-3 shadow-md fixed w-[200px]  h-full top-0  z-[99] transition-all ease-linear duration-300  ${isMenuOpen?"left-0":"left-[-100%]"}`} >
              <li className="font-medium text-[16px] text-[#000000] hover:text-[#00af73] pb-[50px] mt-[40px]">
                <a href="#home"> Home</a>
              </li>
              <li className="font-medium text-[16px] text-[#000000] hover:text-[#00af73] pb-[50px]">
                <a href="#about">About</a>
              </li>
              <li className="font-medium text-[16px] text-[#000000] hover:text-[#00af73] pb-[50px]">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="font-medium text-[16px] text-[#000000] hover:text-[#00af73] pb-[50px]">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </>
        {/* )} */}

        {/* Banner Section */}
        <div className="bannerpage pt-[80px] bg-[#000000] flex justify-between items-center  px-[10px] lg:px-0 ">
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            className="bgtext lg:ml-[12rem] w-full lg:w-2/4 max-sm:pt-0 max-lg:pt-[42px]"
          >
            <h3 className="text-[45px] max-sm:mb-[0] mb-[10px] text-[#00af73] font-[500] max-sm:text-center">
              Hello, I am Omkar
            </h3>
            <p className="leading-loose text-[16px]  text-[#ffffff] md:text-[26px] lg:text-[26px] max-sm:text-justify">
              I am a frontend web developer. I can provide clean code and pixel
              perfect design. I also make websites more & more interactive with
              web animations.
            </p>
            <a
              href="#"
              className="bg-[#00af73] p-[10px] block w-[110px] text-center mt-[20px] rounded-lg max-sm:w-full "
            >
              Hire me
            </a>
          </div>
          <div
            data-aos="fade-left"
            className="bgimg pr-5 w-[40%] hidden  md:block"
          >
            <img src={bgimg} alt="bgimg" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
