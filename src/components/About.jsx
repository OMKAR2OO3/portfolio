import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
function About() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 80 },
    { name: "JavaScript", level: 80 },
    { name: "Tailwind ", level: 85 },
    { name: "Bootstrap ", level: 75 },
    { name: "Jquery", level: 70 },
    { name: "React.js", level: 85 },
    { name: "Github", level: 70 },
  ];

  return (
    <>
      <div id="about" className="about-container bg-[#000000]  w-[full]">
        <h3 className="text-[36px] text-[#00af73] font-semibold text-center pt-10">
          About me
        </h3>
        <div className="flex   justify-around  mt-10 max-sm:flex-col	">
          <div data-aos="zoom-in-right" className="  basis-[45%] ">
            <div className="details">
              <p className="p-2 text-justify text-[#ffffff]">
                Hi! My name is Omkar . I am a Web Developer, and I m very
                passionate and dedicated to my work. With Intenship experience
                as a professional Web developer, I have acquired the skills and
                knowledge necessary to make your project a success. I enjoy
                every step of the design process, from discussion and
                collaboration.
              </p>
            </div>
            <div className="eduction flex mt-8 justify-around ml-[20px] max-sm:flex-col ">
              <div className="w-full p-4   ">
                <h5 className="font-semibold text-[18px] text-center text-[#00af73] mb-3">
                  Eduction
                </h5>
                <ul className="w-full border-l-[3px]	 border-[#00af73]">
                  <div className=" relative">
                    <p className="bg-[#00af73] w-4 h-4 rounded-full absolute -left-2 top-[0.5]"></p>
                    <MdOutlineDateRange className="absolute left-5 top-0 text-[#00af73] text-[20px]" />
                    <li className="ml-[40px] text-[#ffffff]">2021-2025</li>
                    <span className="ml-[20px] font-semibold text-[#ffffff]">
                      Bachelor of Technology
                    </span>
                    <p className="ml-[20px] text-justify text-[#ffffff] ">Anna University</p>
                    <p className="ml-[20px] text-justify text-[#ffffff] ">
                      Meenakshi college of Engineering Chennai
                    </p>
                  </div>

                  <div className=" relative  ">
                    <p className="bg-[#00af73] w-4 h-4 rounded-full absolute -left-2 top-[0.5]"></p>
                    <MdOutlineDateRange className="absolute left-5 top-0 text-[#00af73] text-[20px]" />
                    <li className="ml-[40px] mt-[20px]  text-[#ffffff]">2024</li>
                    <span className="ml-[20px] font-semibold text-[#ffffff] ">
                      special coures
                    </span>
                    <p className="ml-[20px] text-justify text-[#ffffff] ">Courseinn Academy</p>
                    <p className="ml-[20px] text-justify text-[#ffffff] ">
                      Front-End Development <br /> June 2024-November 2024
                    </p>
                  </div>
                </ul>
              </div>

              <div className="experience  w-full  mt-[20px]   relative ">
                <h3 className="font-semibold text-[18px] text-center text-[#00af73] mb-3 relative">
                  Experience
                </h3>
                <MdOutlineDateRange className="absolute left-4 top-[42px text-[#00af73] text-[20px] max-sm:left-0" />
                <span className="pl-[40px] pb-4 text-[#ffffff] ">
                  Octobe 2024 - November 2025
                </span>
                <p className="pl-6 font-semibold text-[#ffffff] max-sm:pl-0">
                  Bigziel Technologies Pvt Ltd, Chennai
                </p>
                <p className="pl-6 pr-3 text-justify mt-2 text-[#ffffff] max-sm:pl-0">
                  Design and develop user interfaces that are visually
                  appealing, user-friendly, and responsive across different
                  devices
                  <br /> Work closely with web designers to translate design
                  mockups into functional code.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="flip-right"
            className="skill basis-[45%] max-sm:mt-10  "
          >
            <div className="max-w-3xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-medium text-[#00af73] ">Skills</h2>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2  ">
                    <div className="flex justify-between ">
                      <span className="text-lg font-medium text-[#ffffff] ">
                        {skill.name}
                      </span>
                      <span className="text-lg font-medium text-[#ffffff] ">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2 ">
                      <div
                        className="bg-[#00af73] h-2 rounded-full "
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
