import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo/logo.png";

const NavLogo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-1.5">
      <Image
        className="w-[35px] sm:w-[40px] h-auto"
        src={logo}
        alt="Rakib Dev Logo"
      />
      <h1 className="text-white text-2xl font-bold">DevCraft</h1>
    </Link>
  );
};

export default NavLogo;
