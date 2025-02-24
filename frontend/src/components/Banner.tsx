// import { HiOutlineArrowSmDown } from "react-icons/hi";
// import { ImFacebook, ImGithub, ImLinkedin, ImTwitter } from "react-icons/im";
// import { NavLink } from "react-router-dom";

// const Banner = () => {
//   return (
//     <div className="max-w-screen-xl w-full h-[760px] mx-auto flex flex-col-reverse sm:flex-row justify-between items-center px-6 sm:px-0 py-8">
//       <div className="max-w-[550px] w-full mt-8 sm:pt-0">
//         <small className="text-sm text-center sm:text-left sm:text-base text-yellow-500 font-semibold mb-2 block font-inter">
//           I'm Rakib Hossen
//         </small>
//         <h1 className="text-2xl sm:text-4xl text-center sm:text-left leading-[42px] text-white  mb-5 font-inter font-bold">
//           Passionate{" "}
//           <span className="text-yellow-500 font-inter">full stack</span>{" "}
//           developer creating seamless web experiences.
//         </h1>
//         <div className="flex justify-center sm:justify-start gap-3">
//           <button className="px-5 py-1 text-lg font-medium bg-yellow-500 border-2 border-transparent rounded-md hover:bg-[#112240] hover:border-yellow-500 text-white transition duration-300">
//             Let's talk
//           </button>
//         </div>
//         <div className="flex justify-center sm:justify-start mt-6 sm:mt-4">
//           <NavLink
//             to="https://www.facebook.com/mrrakibrs/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <ImFacebook className="text-white text-[40px] mx-1 p-2 rounded-full border-2 border-yellow-500 hover:bg-yellow-500 hover:border-white transition duration-300" />
//           </NavLink>
//           <NavLink
//             to="https://www.NavLinkedin.com/in/mrrakibs/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <ImLinkedin className="text-white text-[40px] mx-1 p-2 rounded-full border-2 border-yellow-500 hover:bg-yellow-500 hover:border-white transition duration-300" />
//           </NavLink>
//           <NavLink
//             to="https://github.com/rakib53"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <ImGithub className="text-white text-[40px] mx-1 p-2 rounded-full border-2 border-yellow-500 hover:bg-yellow-500 hover:border-white transition duration-300" />
//           </NavLink>
//           <NavLink
//             to="https://twitter.com/mr_rakibs"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <ImTwitter className="text-white text-[40px] mx-1 p-2 rounded-full border-2 border-yellow-500 hover:bg-yellow-500 hover:border-white transition duration-300" />
//           </NavLink>
//         </div>
//         <a
//           className="hidden sm:flex w-max items-center gap-2 mt-16"
//           href="#service"
//         >
//           <div className="w-6 h-10 border-2 border-white mx-auto mb-3 rounded-full">
//             <div className="w-1 h-2 bg-white rounded-full mt-2 mx-auto animate-bounce"></div>
//           </div>
//           <p className="text-white text-base font-monserrat -mt-2">
//             Scroll down <HiOutlineArrowSmDown className="inline" />
//           </p>
//         </a>
//       </div>
//       <div
//         className="bg-cover bg-center w-full sm:w-[400px] h-[400px] shadow-inner rounded-full animate-[profileAnimate_8s_ease-in-out_infinite_1s] mt-6 sm:mt-0"
//         style={{
//           backgroundImage: 'url("/Rakib.jpg")',
//           boxShadow: "inset 0 0 0 9px #f6c7094a",
//         }}
//       ></div>
//     </div>
//   );
// };

// export default Banner;

import {
  Boxes,
  ChevronDown,
  Github,
  Linkedin,
  Sparkles,
  Twitter,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

function Banner() {
  return (
    <div className="gradient-bg text-white relative overflow-hidden">
      {/* Noise overlay */}
      <div className="fixed inset-0 noise-bg pointer-events-none"></div>

      {/* Pattern grid */}
      <div className="fixed inset-0 pattern-grid pointer-events-none"></div>

      <Navbar />

      {/* Banner Content */}
      <div className="container mx-auto px-6 flex items-center justify-center relative z-10">
        <div className="max-w-4xl py-10 mt-10 md:mt-0 md:py-[150px] mb-10">
          <div className="text-center space-y-8">
            {/* <div className="inline-block glass-effect px-6 py-2 rounded-full mb-4">
              <h2 className="text-blue-400 text-xl font-medium flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                I'm Rakib Hossen
              </h2>
            </div> */}

            <div className="inline-block glass-effect px-6 py-2 rounded-full mb-4 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 animate-float">
              <h2 className="text-blue-400 text-xl font-medium flex items-center gap-2">
                <Sparkles className="w-5 h-5 animate-pulse-slow" />
                I'm Rakib Hossen
              </h2>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-glow">
              Passionate <span className="text-gradient">full stack</span>{" "}
              developer
            </h1>

            <p className="text-blue-100/80 text-lg sm:text-xl max-w-2xl mx-auto">
              Transforming ideas into elegant, scalable solutions with modern
              technologies and best practices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8">
              <NavLink
                to={"https://cal.com/rakib53"}
                target="_blank"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 group"
              >
                <span className="flex items-center justify-center gap-2">
                  Let's talk
                  <Boxes className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </NavLink>
              <NavLink
                to="https://drive.google.com/file/d/1eC6_lOj0bZegZKN5wlPWeXPxA_t3ki8n/view?usp=drive_link"
                target="_blank"
                className="px-6 sm:px-8 py-3 sm:py-4 glass-effect text-white rounded-full font-semibold hover:bg-blue-900/20 transition-all group border border-blue-500/20"
              >
                View Resume
              </NavLink>
            </div>

            <div className="flex items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-12">
              <NavLink
                to="https://github.com/rakib53"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 sm:w-12 h-10 sm:h-12 rounded-full glass-effect flex items-center justify-center hover:text-blue-400 hover:border-blue-400/50 transition-all transform hover:scale-110 hover:rotate-12 border border-blue-500/20"
              >
                <Github className="w-5 sm:w-6 h-5 sm:h-6" />
              </NavLink>

              <NavLink
                to="https://www.linkedin.com/in/mrrakibs/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 sm:w-12 h-10 sm:h-12 rounded-full glass-effect flex items-center justify-center hover:text-blue-400 hover:border-blue-400/50 transition-all transform hover:scale-110 hover:rotate-12 border border-blue-500/20"
              >
                <Linkedin className="w-5 sm:w-6 h-5 sm:h-6" />
              </NavLink>
              <NavLink
                to="https://twitter.com/mr_rakibs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 sm:w-12 h-10 sm:h-12 rounded-full glass-effect flex items-center justify-center hover:text-blue-400 hover:border-blue-400/50 transition-all transform hover:scale-110 hover:rotate-12 border border-blue-500/20"
              >
                <Twitter className="w-5 sm:w-6 h-5 sm:h-6" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile */}
      <div className="hidden md:flex absolute bottom-4 left-1/2 transform -translate-x-1/2 flex-col items-center gap-2 z-10">
        <span className="text-sm text-blue-200/60">Scroll down</span>
        <ChevronDown className="w-6 h-6 animate-bounce text-blue-400" />
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Animated geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-900/20 to-blue-600/20 rounded-full blur-3xl animate-rotate-slow"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/20 to-blue-900/20 rounded-full blur-3xl animate-rotate-slow"
          style={{ animationDirection: "reverse" }}
        ></div>

        {/* Morphing shapes */}
        <div className="absolute top-20 right-32 w-32 h-32 border border-blue-500/20 animate-morph"></div>
        <div
          className="absolute bottom-32 left-20 w-24 h-24 border border-blue-400/20 animate-morph"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Additional decorative elements */}
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-blue-400/30 rounded-full animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-blue-400/30 rounded-full animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </div>
  );
}

export default Banner;
