import { useEffect, useRef, useState } from "react";
import styles from "../styles/Navbar.module.css";
import NavLogo from "./NavLogo";

const Navbar = () => {
  const [isExpand, setIsExpand] = useState(false);
  const expandMenuRef = useRef(null);
  const humburgerMenuRef = useRef(null);

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
    <div className={styles.parentNavbar}>
      <div className={styles.navbarWrapper}>
        <NavLogo />
        <div
          className={`${
            isExpand ? styles.isMobileMenuWrapper : styles.mobileMenuWrapper
          }`}
          ref={expandMenuRef}
        >
          <div className={styles.mobileLogo}>
            <NavLogo />
          </div>
          <ul className={styles.navbarList}>
            <li className={styles.navbarItem}>
              <a href="#skills" className={styles.navbarLink}>
                Skills
              </a>
            </li>
            <li className={styles.navbarItem}>
              <a href="#projects" className={styles.navbarLink}>
                Projects
              </a>
            </li>
            <li className={styles.navbarItem}>
              <a href="#testmonials" className={styles.navbarLink}>
                Testmonial
              </a>
            </li>
            <li className={styles.navbarItem}>
              <a href="" className={styles.navbarLink}>
                About me
              </a>
            </li>
            <li className={styles.navbarItem}>
              <a
                href="https://drive.google.com/file/d/1eC6_lOj0bZegZKN5wlPWeXPxA_t3ki8n/view?usp=drive_link"
                target=" "
                className={styles.navbarLink}
              >
                Resume
              </a>
            </li>
          </ul>
          <div className={styles.mobileContactMeBTn}>
            <a href="#contact" className={`btn ${styles.navbarButton}`}>
              Contact Me
            </a>
          </div>
        </div>

        <div className={styles.contactMeBTn}>
          <a href="#contact" className={`btn ${styles.navbarButton}`}>
            Contact Me
          </a>
        </div>
        <div
          className={styles.mobileMenu}
          onClick={handleExpandMenu}
          ref={humburgerMenuRef}
        >
          <span
            className={`${isExpand ? styles.menuXTop : styles.menuItem}`}
          ></span>
          <span
            className={`${isExpand ? styles.menuXVanish : styles.menuItem}`}
          ></span>
          <span
            className={`${isExpand ? styles.menuXBottom : styles.menuItem}`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
