import { NavLink } from "react-router-dom";
import logo from "/logo/logo.png";

const NavLogo = () => {
  return (
    <NavLink to={"/"} className="flex items-center gap-1.5">
      <img
        className="w-[35px] sm:w-[40px] h-auto"
        src={logo}
        alt="Rakib Dev Logo"
      />
      <h1 className="text-white text-2xl font-bold">DevCraft</h1>
    </NavLink>
  );
};

export default NavLogo;
