import styles from "../styles/Copyright.module.css";

export default function Copyright() {
  return (
    <div className={styles.copyrightWrapper}>
      <p className={styles.copyrightText}>
        &copy; Design & Maintenance by Rakib Hossen.
      </p>
    </div>
  );
}
