import React from "react";
import unilinks from "../images/0e742b66-cf12-404e-a4a9-340c5cf35985-transformed.webp";
import plusgen from "../images/Pills-a_d.webp";
import shoe from "../images/shoe.jpg";
import weather from "../images/unnamed.jpg";
import curd from "../images/1709731391691.jpg";
import portfolio from "../images/images.jpg";

function Portfolio() {
  return (
    <>
      <div id="portfolio" className="portfolio bg-[#000000] w-[full] ">
        <h1 className="text-center pt-[2rem] mb-[3rem] font-semibold text-[36px] text-[#00af73]">
          Portfolio
        </h1>
        <div className="flex flex-wrap justify-between ml-[7rem]  max-sm:flex-col max-sm:ml-0 max-md:ml-[3rem]  ">
          <div
            data-aos="flip-left"
            className="unilinks basis-[30%] mb-[60px] max-md:basis-[50%] max-lg:basis-[50%]  relative group "
          >
            <img
              src={unilinks}
              alt="unilinks"
              className="w-[300px] h-[200px]  rounded-[10px] max-sm:w-full max-sm:p-[10px] "
            />
            <div className="p-[20px]  text-[#ffffff] absolute inset-0 bg-[#000000bb] rounded-[10px] opacity-0 group-hover:opacity-80 transition-opacity duration-300 w-[300px] max-sm:w-full">
              <h4 className="font-semibold text-[#00af73]">unilinks</h4>
              <p className="text-[14px] mb-[20px]">
                Optimized the website for desktop, tablet, and mobile devices,
                ensuring a smooth user experience on any screen size.
              </p>
              <a
                href="https://omkar2oo3.github.io/unislinkfromomkar/"
                target="_blank"
                className=" border-2 p-1 rounded-[4px] "
              >
                vist website
              </a>
            </div>
          </div>
          <div
            data-aos="flip-up"
            className="plusgen basis-[30%] mb-[60px] max-md:basis-[50%] max-lg:basis-[50%]  relative group"
          >
            {/* Image */}

            <img
              src={plusgen}
              alt="plusgen"
              className="w-[300px] h-[200px] max-sm:w-full rounded-[10px] max-sm:p-[10px]"
            />

            {/* Background Overlay */}
            <div className=" p-[20px]  text-[#ffffff] absolute inset-0 bg-[#000000bb] rounded-[10px] opacity-0 group-hover:opacity-80 transition-opacity duration-300 w-[300px] max-sm:w-full  ">
              <h4 className="font-semibold text-[#00af73]">plusgen</h4>
              <p className="text-[14px] mb-[20px]">
                Optimized the website for desktop, tablet, and mobile devices,
                ensuring a smooth user experience on any screen size.
              </p>
              <a
                href="https://omkar2oo3.github.io/plusgin/"
                target="_blank"
                className="border-2 p-1 rounded-[4px]"
              >
                vist website
              </a>
            </div>
          </div>
          <div
            data-aos="flip-right"
            className="to-do-list basis-[30%] mb-[60px] max-md:basis-[50%] max-lg:basis-[50%]  relative group"
          >
            <img
              src={shoe}
              alt="shoe"
              className="w-[300px] h-[200px] rounded-[10px] max-sm:w-full max-md:w-[full] max-sm:p-[10px]"
            />
            <div className=" p-[20px]  text-[#ffffff] absolute inset-0 bg-[#000000bb] rounded-[10px] opacity-0 group-hover:opacity-80  duration-300 w-[300px] max-sm:w-full">
              <h4 className="font-semibold text-[#00af73]"> Ecommerce</h4>
              <p className="text-[14px] mb-[20px]">
                Optimized the website for desktop, tablet, and mobile devices,
                ensuring a smooth user experience on any screen size.
              </p>
              <a
                href="https://omkar2oo3.github.io/Rocket-shoes/"
                target="_blank"
                className="border-2 p-1 rounded-[4px]"
              >
                vist website
              </a>
            </div>
          </div>
          <div
            data-aos="flip-left"
            className="weather-app basis-[30%] mb-[60px] max-md:basis-[50%] max-lg:basis-[50%]  relative group"
          >
            <img
              src={weather}
              alt="weather"
              className="w-[300px] h-[200px] rounded-[10px] max-sm:w-full max-sm:p-[10px]"
            />
            <div className=" p-[20px]  text-[#ffffff] absolute inset-0 bg-[#000000bb] rounded-[10px] opacity-0 group-hover:opacity-80 transition-opacity duration-300 w-[300px] max-sm:w-full">
              <h4 className="font-semibold text-[#00af73]">Weather App</h4>
              <p className="text-[14px] mb-[20px]">
                Optimized the website for desktop, tablet, and mobile devices,
                ensuring a smooth user experience on any screen size.
              </p>
              <a
                href="https://omkar2oo3.github.io/weatherapp/"
                target="_blank"
                className="border-2 p-1 rounded-[4px]"
              >
                vist website
              </a>
            </div>
          </div>
          <div
            data-aos="flip-down"
            className="portfolio basis-[30%] mb-[60px] max-md:basis-[50%]  max-lg:basis-[50%] relative group"
          >
            <img
              src={curd}
              alt="curd"
              className="w-[300px] h-[200px] rounded-[10px] max-sm:w-full max-sm:p-[10px]  "
            />
            <div className=" p-[20px]  text-[#ffffff] absolute inset-0 bg-[#000000bb] rounded-[10px] opacity-0 group-hover:opacity-80 transition-opacity duration-300 w-[300px] max-sm:w-full">
              <h4 className="font-semibold text-[#00af73]">CURD</h4>
              <p className="text-[14px] mb-[20px]">
                Optimized the website for desktop, tablet, and mobile devices,
                ensuring a smooth user experience on any screen size.
              </p>
              <a
                href="https://omkar2oo3.github.io/react-curd-/"
                target="blank"
                className="border-2 p-1 rounded-[4px]"
              >
                vist website
              </a>
            </div>
          </div>
          <div
            data-aos="flip-right"
            className="curd-operater basis-[30%] mb-[60px] max-md:basis-[50%] max-lg:basis-[50%] relative group"
          >
            <img
              src={portfolio}
              alt="portfolio"
              className="w-[300px] h-[200px] rounded-[10px] max-sm:w-full max-sm:p-[10px] "
            />
            <div className=" p-[20px]  text-[#ffffff] absolute inset-0 bg-[#000000bb] rounded-[10px] opacity-0 group-hover:opacity-80 transition-opacity duration-300 w-[300px] max-sm:w-full">
              <h4 className="font-semibold text-[#00af73]">Portfolio</h4>
              <p className="text-[14px] mb-[20px]">
                Optimized the website for desktop, tablet, and mobile devices,
                ensuring a smooth user experience on any screen size.
              </p>
              <a href="" className="border-2 p-1 rounded-[4px] ">
                vist website
              </a>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Portfolio;
