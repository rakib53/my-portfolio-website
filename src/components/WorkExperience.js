import styles from "../styles/WorkExperience.module.css";

const WorkExperience = () => {
  return (
    <section className={styles.WorkExperienceSection}>
      <div className="container">
        <div className={styles.WorkExperienceWrapper}>
          <div className={styles.WorkExperienceCard}>
            <h3 className={styles.workCount}>18+</h3>
            <p className={styles.workTitle}>Clients</p>
          </div>
          <div className={styles.WorkExperienceCard}>
            <h3 className={styles.workCount}>34+</h3>
            <p className={styles.workTitle}>Projects</p>
          </div>
          <div className={styles.WorkExperienceCard}>
            <h3 className={styles.workCount}>16</h3>
            <p className={styles.workTitle}>Awards</p>
          </div>
          <div className={styles.WorkExperienceCard}>
            <h3 className={styles.workCount}>03</h3>
            <p className={styles.workTitle}>Years of Experiences</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
