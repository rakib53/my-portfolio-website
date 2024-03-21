import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { HiOutlineArrowSmDown } from "react-icons/hi";
import { ImFacebook, ImGithub, ImLinkedin, ImTwitter } from "react-icons/im";
import styles from "../styles/Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerInfo}>
        <small className={styles.myName}>I'm Rakib Hossen</small>
        <h1 className={styles.bannerTitle}>
          Passionate <b className={styles.full_stack}>full stack</b> developer
          creating seamless web experiences.
        </h1>
        <div className={styles.bannerBtnGroup}>
          <button className={styles.letsTalk}>Let's talk</button>
        </div>
        <div className={styles.socialIconWrapper}>
          <Link href={"https://www.facebook.com/mrrakibrs/"} target=" ">
            <ImFacebook className={styles.socialIcon} />
          </Link>

          <Link href={"https://www.linkedin.com/in/mrrakibs/"} target=" ">
            <ImLinkedin className={styles.socialIcon} />
          </Link>

          <Link href={"https://github.com/rakib53"} target=" ">
            <ImGithub className={styles.socialIcon} />
          </Link>

          <Link href={"https://twitter.com/mr_rakibs"} target=" ">
            <ImTwitter className={styles.socialIcon} />
          </Link>
        </div>

        <a className="scrollDownWrapper" href="#service">
          <div className="field">
            <div className="mouse"></div>
          </div>
          <p className="scrollDownText">
            Scroll down <HiOutlineArrowSmDown />
          </p>
        </a>
      </div>

      <div className={styles.bannerImage}></div>
    </div>
  );
};

export default Banner;
