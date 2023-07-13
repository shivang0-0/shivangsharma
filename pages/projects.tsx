import Projects from "../components/Projects/";
import styles from "../styles/ProjectsPage.module.css";

export default function ProjectsPage() {
  return (
    <>
      <div className={`${styles.container} ${styles.pageWrapper}`}>
        <h1>Projects</h1>
        <p className={styles.paragraph}>Take a look at my showcased projects!!</p>
        <Projects />
      </div>
    </>
  );
}
