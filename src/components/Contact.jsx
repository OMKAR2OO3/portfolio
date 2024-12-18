import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Swal from 'sweetalert2'

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7aeaf544-74cf-45cd-8fb1-25af258a4897");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message  Send Successfully!",
        icon: "success"
      });
    }
  }
  return (
    <div id="contact" className="contact bg-black py-10">
      <h4 className="font-semibold text-3xl text-[#00af73] text-center pb-12">
        Contact Me
      </h4>
      <div className="grid grid-cols-2 gap-40 items-start mx-auto w-[90%] max-w-[1200px] max-sm:grid-cols-none max-sm:gap-[40px]">
        <div data-aos="flip-up" className=" w-full social-contact font-medium text-lg max-sm:w-full max-sm:text-sm shadow-md  shadow-[#00af73] basis-[45%] p-6 bg-[#111111] rounded-lg h-full pt-12 max-sm:p-2 ">
          <div className="linkedin flex items-center mb-6"> 
            <FaLinkedin className="text-[#00af73] text-2xl" />
            <a
              href="https://www.linkedin.com/in/omkar-murugesan-a85144302/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00af73] ml-4 hover:underline"
            >
              LinkedIn Profile
              <p className="text-sm text-white">Omkar Murugesan</p>
            </a>
          </div>
          <div className="email flex items-center mb-6">
            <HiOutlineMail className="text-[#00af73] text-2xl" />
            <a
              href="mailto:omkarmurugasan@gmail.com"
              className="text-[#00af73] ml-4 hover:underline"
            >
              Email
              <p className="text-sm text-white">omkarmurugasan@gmail.com</p>
            </a>
          </div>
          <div className="phone flex items-center mb-6">
            <FaPhoneAlt className="text-[#00af73] text-2xl" />
            <a
              href="tel:7997448091"
              className="text-[#00af73] ml-4 hover:underline"
            >
              Phone No
              <p className="text-sm text-white">7997448091</p>
            </a>
          </div>
          <div className="phone flex items-center mb-6">
            <FaWhatsapp className="text-[#00af73] text-3xl" />
            <a href="https://wa.me/7997448091" className="text-[#00af73] ml-4 hover:underline">
              Whatapp
              <p className="text-sm text-white">Message on WhatsApp</p>
            </a>
            <a  target="_blank">
              
            </a>
          </div>

          <div className="phone flex items-center">
            <FaAddressBook className="text-[#00af73] text-2xl" />
            <a href="" className="text-[#00af73] ml-4 hover:underline">
              Address
              <p className="text-sm text-white">Guindy,Chennai</p>
            </a>
          </div>
        </div>

        <div data-aos="flip-up" className="form shadow-md  shadow-[#00af73] basis-[45%] p-6 bg-[#111111] rounded-lg  max-sm:w-full ">
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-[#00af73] mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                name="name"
                required
                className="w-full bg-black border-2 border-[#00af73] text-white p-2 rounded"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-[#00af73] mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                name="email"
                className="w-full bg-black border-2 border-[#00af73] text-white p-2 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-[#00af73] mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Enter your message"
                name="message"
                required
                className="w-full bg-black border-2 border-[#00af73] text-white p-2 rounded"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full text-[#00af73] border-2 border-[#00af73] p-2 rounded hover:bg-[#00af73] hover:text-black transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <footer>
        <p className="text-[#00af73] mt-9 text-center">&copy; 2024 omkar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;
