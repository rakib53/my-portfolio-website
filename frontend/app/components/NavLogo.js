import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo/logo.png";
import styles from "../styles/Navbar.module.css";

const NavLogo = ({ hidden }) => {
  return (
    <Link href={"/"} className={styles.logoWrapper}>
      <Image className={styles.logo} src={logo} alt="Rakib Dev Logo" />
      <h1 className={styles.logoText}>DevCraft</h1>
    </Link>
  );
};

export default NavLogo;
