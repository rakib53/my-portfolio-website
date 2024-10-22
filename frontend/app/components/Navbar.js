"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import useAuth from "../hooks/useAuth";
import NavLogo from "./NavLogo";

const Navbar = () => {
  const [isExpand, setIsExpand] = useState(false);
  const expandMenuRef = useRef(null);
  const humburgerMenuRef = useRef(null);
  const { user } = useAuth();

  const handleExpandMenu = () => {
    setIsExpand(!isExpand);
  };

  // checking if the user click outside of the time popup will disappear
  useEffect(() => {
    function handleClickOutSide(event) {
      if (
        expandMenuRef.current &&
        !expandMenuRef.current.contains(event.target)
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
    <div className="px-4">
      <div className="max-w-[1440px] w-full mx-auto h-[60px] rounded-full px-[40px] py-[10px] bg-[var(--navbar-bg)] flex items-center justify-between font-inter overflow-hidden">
        <NavLogo />
        <div
          className={`fixed ${
            isExpand
              ? "w-[70%] h-full top-0 left-0 bg-[#2e2e2e] flex flex-col items-center justify-between p-5 z-[999999] shadow-[30px_0_180px_#000000] transition-all duration-300 ease-in-out"
              : "min-h-screen top-0 left-[-1000px] bg-[#555353] flex flex-col items-start justify-between p-5 transition-all duration-500"
          }`}
          ref={expandMenuRef}
        >
          <div className="block md:hidden">
            <NavLogo />
          </div>
          <ul className="flex flex-col md:flex-row items-stretch md:items-center space-y-4 md:space-y-0 list-none">
            {user?.email && (
              <li className="p-[10px_20px] bg-[#525252] text-center rounded-[5px] transition-all duration-500 hover:bg-[#8a8686] cursor-pointer">
                <Link href="/dashboard" className="text-white text-[16px]">
                  Dashboard
                </Link>
              </li>
            )}
            <li className="p-[10px_20px] bg-[#525252] text-center rounded-[5px] transition-all duration-500 hover:bg-[#8a8686] cursor-pointer">
              <a href="#skills" className="text-white text-[16px]">
                Skills
              </a>
            </li>
            <li className="p-[10px_20px] bg-[#525252] text-center rounded-[5px] transition-all duration-500 hover:bg-[#8a8686] cursor-pointer">
              <a href="#projects" className="text-white text-[16px]">
                Projects
              </a>
            </li>
            <li className="p-[10px_20px] bg-[#525252] text-center rounded-[5px] transition-all duration-500 hover:bg-[#8a8686] cursor-pointer">
              <a href="#testmonials" className="text-white text-[16px]">
                Testmonial
              </a>
            </li>
            <li className="p-[10px_20px] bg-[#525252] text-center rounded-[5px] transition-all duration-500 hover:bg-[#8a8686] cursor-pointer">
              <a href="#about" className="text-white text-[16px]">
                About me
              </a>
            </li>
            <li className="p-[10px_20px] bg-[#525252] text-center rounded-[5px] transition-all duration-500 hover:bg-[#8a8686] cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1eC6_lOj0bZegZKN5wlPWeXPxA_t3ki8n/view?usp=drive_link"
                target="_blank"
                className="text-white text-[16px]"
              >
                Resume
              </a>
            </li>
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
          <a
            href="#contact"
            className="rounded-full py-3 px-[30px] text-white text-[16px] font-medium bg-[var(--navbarButton-bg)] border border-[#868181] transition-all duration-300 ease-in-out hover:border-[var(--primary-color)]"
          >
            Contact Me
          </a>
        </div>
        <div
          className="flex flex-col w-[30px] cursor-pointer md:hidden"
          onClick={handleExpandMenu}
          ref={humburgerMenuRef}
        >
          <span
            className={`${
              isExpand
                ? "translate-y-[5px] rotate-[45deg]"
                : "block w-full h-[3px] bg-white my-1.5 rounded transition-all duration-500"
            }`}
          ></span>
          <span
            className={`${
              isExpand
                ? "hidden"
                : "block w-full h-[3px] bg-white my-1.5 rounded transition-all duration-500"
            }`}
          ></span>
          <span
            className={`${
              isExpand
                ? "translate-y-[-4px] rotate-[135deg]"
                : "block w-full h-[3px] bg-white my-1.5 rounded transition-all duration-500"
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
