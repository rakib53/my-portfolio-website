import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";
import { MdOutlineMarkEmailRead, MdOutlineWhatsapp } from "react-icons/md";
import styles from "../styles/ContactForm.module.css";

export default function ContactForm() {
  return (
    <section className="sectionMargin" id="contact">
      <div className={styles.contactSection}>
        <h2 className="sectionTitle">Get in touch</h2>
        <p className="sectionDesc">Let's build something amazing together!</p>
        <div className={styles.formContactWrapper}>
          <div className={styles.formInfoWrapper}>
            <h3 className={styles.title}>Talk to me</h3>
            <div className={styles.infoCardWrapper}>
              <div className={styles.infoCard}>
                <MdOutlineMarkEmailRead className={styles.infoIcon} />
                <h4 className={styles.infoTitle}>Email</h4>
                <p className={styles.contactLine}>rakibdev53@gmail.com</p>
                <span className={styles.getInText}>
                  Write me <BsArrowRightShort className={styles.arrow} />
                </span>
              </div>
              <div className={styles.infoCard}>
                <MdOutlineWhatsapp className={styles.infoIcon} />
                <h4 className={styles.infoTitle}>Whatsapp</h4>
                <p className={styles.contactLine}>+8801980551313</p>
                <span className={styles.getInText}>
                  <Link
                    href={"https://wa.me/01980551313"}
                    target=" "
                    className={styles.getInText}
                  >
                    Whatsapp me
                    <BsArrowRightShort className={styles.arrow} />
                  </Link>
                </span>
              </div>
              <div className={styles.infoCard}>
                <BiPhoneCall className={styles.infoIcon} />
                <h4 className={styles.infoTitle}>Phone</h4>
                <p className={styles.contactLine}>+8801980551313</p>
                <span className={styles.getInText}>
                  Call me <BsArrowRightShort className={styles.arrow} />
                </span>
              </div>
            </div>
          </div>
          <div className={styles.formWrapper}>
            <h3 className={styles.title}>Write me your project</h3>
            <form action="" className={styles.form}>
              <div className={styles.inputParentWrapper}>
                <div className={styles.inputWrapper}>
                  <label htmlFor="" className={styles.label}>
                    Full Name*
                  </label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div className={styles.inputParentWrapper}>
                <div className={styles.inputWrapper}>
                  <label htmlFor="" className={styles.label}>
                    Email*
                  </label>
                  <input
                    type="email"
                    className={styles.input}
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className={styles.inputParentWrapper}>
                <div className={styles.inputWrapper}>
                  <label htmlFor="" className={styles.label}>
                    First Name
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className={styles.input}
                    style={{ resize: "none" }}
                    placeholder="Enter your query"
                  ></textarea>
                </div>
              </div>
              <div className={styles.submitBtnWrapper}>
                <button className={styles.submit}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
