import Projects from "../components/Projects/";
import Navbar from "../components/Navbar";
import styles from "../styles/ProjectsPage.module.css";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto w-[80%] md:w-[60%] mt-40 mb-8">
      <div className={`${styles.container} ${styles.pageWrapper}`}>
        <h1>Projects</h1>
        <p className={styles.paragraph}>Take a look at my showcased projects!!</p>
        <Projects />
      </div>
      </div>
    </>
  );
}
