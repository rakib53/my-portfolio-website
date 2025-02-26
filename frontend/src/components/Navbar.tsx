import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import NavLogo from "./NavLogo";

const Navbar: React.FC = () => {
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const expandMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerMenuRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth(); // Assuming `user` has a specific structure

  const handleExpandMenu = () => {
    setIsExpand(!isExpand);
  };

  useEffect(() => {
    function handleClickOutSide(event: MouseEvent) {
      if (
        expandMenuRef.current &&
        !expandMenuRef.current.contains(event.target as Node)
      ) {
        setIsExpand(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [expandMenuRef, isExpand]);

  return (
    <div className="px-4 pt-5">
      <div className="max-w-[1440px] w-full mx-auto h-[60px] rounded-full px-[40px] py-[10px] glass-effect flex items-center justify-between font-inter overflow-hidden">
        <NavLogo />
        <div
          className={`fixed md:static p-5 md:p-0 ${
            isExpand
              ? "w-[70%] md:w-full h-full top-0 left-0 bg-[#2e2e2e] md:bg-transparent flex flex-col items-center justify-between  z-[999999] shadow-[30px_0_180px_#000000] transition-all duration-300 ease-in-out"
              : "min-h-screen md:min-h-full md:h-full top-0 left-[-1000px] bg-[#555353] md:bg-transparent flex flex-col items-start justify-between transition-all duration-500"
          }`}
          ref={expandMenuRef}
        >
          <div className="block md:hidden">
            <NavLogo />
          </div>
          <ul className="flex flex-col md:flex-row items-stretch md:items-center space-y-4 md:space-y-0 list-none">
            {user?.email && (
              <li className="p-[10px_20px] bg-[#525252] md:bg-transparent text-center rounded-[5px] transition-all duration-500 hover:bg-[#8a8686] md:hover:bg-transparent cursor-pointer">
                <NavLink to="/dashboard" className="text-white text-[16px]">
                  Dashboard
                </NavLink>
              </li>
            )}
            <li className="p-[10px_20px] bg-[#525252] md:bg-transparent text-center rounded-[5px] transition-all duration-500 hover:bg-[#8a8686] md:hover:bg-transparent cursor-pointer">
              <a href="#services" className="text-white text-[16px]">
                Services
              </a>
            </li>
            <li className="p-[10px_20px] bg-[#525252] md:bg-transparent text-center rounded-[5px] transition-all duration-500 hover:bg-[#8a8686] md:hover:bg-transparent cursor-pointer">
              <a href="#skills" className="text-white text-[16px]">
                Skills
              </a>
            </li>
            <li className="p-[10px_20px] bg-[#525252] md:bg-transparent text-center rounded-[5px] transition-all duration-500 hover:bg-[#8a8686] md:hover:bg-transparent cursor-pointer">
              <a href="#projects" className="text-white text-[16px]">
                Projectsssss
              </a>
            </li>
            <li className="p-[10px_20px] bg-[#525252] md:bg-transparent text-center rounded-[5px] transition-all duration-500 hover:bg-[#8a8686] md:hover:bg-transparent cursor-pointer">
              <a href="#testimonials" className="text-white text-[16px]">
                Testimonial
              </a>
            </li>
            {/* <li className="p-[10px_20px] bg-[#525252] md:bg-transparent text-center rounded-[5px] transition-all duration-500 hover:bg-[#8a8686] md:hover:bg-transparent cursor-pointer">
              <a href="#about" className="text-white text-[16px]">
                About me
              </a>
            </li> */}
            {/* <li className="p-[10px_20px] bg-[#525252] md:bg-transparent text-center rounded-[5px] transition-all duration-500 hover:bg-[#8a8686] md:hover:bg-transparent cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1eC6_lOj0bZegZKN5wlPWeXPxA_t3ki8n/view?usp=drive_link"
                target="_blank"
                className="text-white text-[16px]"
              >
                Resume
              </a>
            </li> */}
          </ul>
          <div className="block md:hidden mt-5">
            <a
              href="#contact"
              className="rounded-full py-3 px-[30px] text-white text-[16px] font-medium bg-[var(--navbarButton-bg)] border border-[#868181] transition-all duration-300 ease-in-out hover:border-[var(--primary-color)]"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          {/* <a
            href="#contact"
            className="rounded-full py-3 px-[30px] text-white text-[16px] font-medium bg-[var(--navbarButton-bg)] border border-[#868181] transition-all duration-300 ease-in-out hover:border-[var(--primary-color)]"
          >
            Contact Me
          </a> */}

          <a
            href="#contact"
            className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
          >
            Contact Me
          </a>
        </div>
        <div
          className="flex flex-col w-[30px] cursor-pointer md:hidden"
          onClick={handleExpandMenu}
          ref={hamburgerMenuRef}
        >
          <span
            className={`${
              isExpand
                ? "translate-y-[5px] rotate-[45deg]"
                : "block w-full h-[3px] bg-white my-1 rounded transition-all duration-500"
            }`}
          ></span>
          <span
            className={`${
              isExpand
                ? "hidden"
                : "block w-full h-[3px] bg-white my-1 rounded transition-all duration-500"
            }`}
          ></span>
          <span
            className={`${
              isExpand
                ? "translate-y-[-4px] rotate-[135deg]"
                : "block w-full h-[3px] bg-white my-1 rounded transition-all duration-500"
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
