import React from "react";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const ContactSection = () => {
  return (
    <div 
      data-aos="fade-left"
      className="flex flex-col lg:flex-row lg:items-center mb-20 lg:mb-36 "
    >
      <span className="uppercase text-3xl lg:text-2xl font-bold gradient-text mb-8 lg:mb-0 rotate-0 lg:-rotate-90">
        Get Started!
        <hr />
      </span>
      <div className="flex flex-col lg:flex-row lg:ml-20 lg:gap-36">
        <div className="mb-5 lg:mb-0">
          <h1 className="text-5xl lg:text-6xl gradient-text mb-5 lg:mb-10">
            Contact me
          </h1>
          <hr />
          <div className="flex flex-col gap-2">
            <a
              href="mailto:coder29yt@gmail.com"
              className="text-gray-600 font-mono underline text-lg lg:text-2xl"
            >
              shrimalirohit501@gmail.com
            </a>
            <a
              href="tel:+919898988989"
              className="text-gray-600 font-mono underline text-lg lg:text-2xl"
            >
              +91 7224970873
            </a>
          </div>
          <div className="flex gap-2 mt-2">
            <a href="https://github.com/" target="_blank" rel="noreferrer"><AiFillGithub className="text-gray-600 text-2xl" /></a>
            <a href="https://www.linkedin.com/in/rohit-shrimali" target="_blank" rel="noreferrer"><AiFillLinkedin className="text-gray-600 text-2xl" /></a>
            <a href="/"><AiFillInstagram className="text-gray-600 text-2xl" /></a>
          </div>
          <h2 className="text-2xl font-bold font-mono text-gray-600 text-center">
            OR
          </h2>
        </div>
        <div>
          <form className="flex flex-col p-3">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg border-gray-950 gradient-text font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg border-gray-950 gradient-text font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]"
            />
            <textarea
              name="message"
              id="message"
              rows="3"
              className="bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg border-gray-950 gradient-text font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]"
              placeholder="Enter your message"
            />
            <button
              type="submit"
              className="px-3 py-2 text-lg lg:text-2xl bg-indigo-700 hover:bg-indigo-500 border font-bold text-slate-200 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
