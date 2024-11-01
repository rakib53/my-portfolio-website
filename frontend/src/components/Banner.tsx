import { HiOutlineArrowSmDown } from "react-icons/hi";
import { ImFacebook, ImGithub, ImLinkedin, ImTwitter } from "react-icons/im";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="max-w-screen-xl w-full h-[760px] mx-auto flex justify-between items-center">
      <div className="max-w-[550px] w-full">
        <small className="text-base text-yellow-500 font-semibold mb-2 block font-inter">
          I'm Rakib Hossen
        </small>
        <h1 className="text-white text-4xl leading-[42px] mb-5 font-inter font-bold">
          Passionate{" "}
          <span className="text-yellow-500 font-inter">full stack</span>{" "}
          developer creating seamless web experiences.
        </h1>
        <div className="flex gap-3">
          <button className="px-5 py-1 text-lg font-medium bg-yellow-500 border-2 border-transparent rounded-md hover:bg-[#112240] hover:border-yellow-500 text-white transition duration-300">
            Let's talk
          </button>
        </div>
        <div className="flex mt-4">
          <NavLink
            to="https://www.facebook.com/mrrakibrs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImFacebook className="text-white text-[40px] mx-1 p-2 rounded-full border-2 border-yellow-500 hover:bg-yellow-500 hover:border-white transition duration-300" />
          </NavLink>
          <NavLink
            to="https://www.NavLinkedin.com/in/mrrakibs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImLinkedin className="text-white text-[40px] mx-1 p-2 rounded-full border-2 border-yellow-500 hover:bg-yellow-500 hover:border-white transition duration-300" />
          </NavLink>
          <NavLink
            to="https://github.com/rakib53"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImGithub className="text-white text-[40px] mx-1 p-2 rounded-full border-2 border-yellow-500 hover:bg-yellow-500 hover:border-white transition duration-300" />
          </NavLink>
          <NavLink
            to="https://twitter.com/mr_rakibs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImTwitter className="text-white text-[40px] mx-1 p-2 rounded-full border-2 border-yellow-500 hover:bg-yellow-500 hover:border-white transition duration-300" />
          </NavLink>
        </div>
        <a className="flex w-max items-center gap-2 mt-16" href="#service">
          <div className="w-6 h-10 border-2 border-white mx-auto mb-3 rounded-full">
            <div className="w-1 h-2 bg-white rounded-full mt-2 mx-auto animate-bounce"></div>
          </div>
          <p className="text-white text-base font-monserrat -mt-2">
            Scroll down <HiOutlineArrowSmDown className="inline" />
          </p>
        </a>
      </div>
      <div
        className="bg-cover bg-center w-[400px] h-[400px] shadow-inner rounded-full animate-[profileAnimate_8s_ease-in-out_infinite_1s]"
        style={{
          backgroundImage: 'url("/Rakib.jpg")',
          boxShadow: "inset 0 0 0 9px #f6c7094a",
        }}
      ></div>
    </div>
  );
};

export default Banner;
