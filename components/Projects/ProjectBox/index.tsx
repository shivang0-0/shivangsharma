import { BsArrowRightShort } from "react-icons/bs";
import styles from "./style.module.css";

export interface Project {
  name: string;
  description: string;
  image: any;
  sourceLink: string;
  demoLink: string;
}

export function ProjectBox({
  name,
  description,
  image,
  sourceLink,
  demoLink,
}: Project) {
  return (
    <div className={styles.projectBoxContainer}>
      <div className={styles.projectBox}>
        <div className={styles.imageContainer}>{image}</div>
        <div className={styles.projectInfoContainer}>
          <h3 className={styles.name}>{name}</h3> <br />
          <p className={styles.description}>{description}</p> <br />
          <a
            href={demoLink}
            className={`${styles.styledLink} ${styles.demoLink}`}
            target="_blank"
            rel="noreferrer"
          >
            <BsArrowRightShort className="arrow" />
            <span>&nbsp;Demo</span>
          </a>
          <a
            href={sourceLink}
            className={`${styles.styledLink} ${styles.sourceLink}`}
            target="_blank"
            rel="noreferrer"
          >
            <BsArrowRightShort className="arrow" />
            <span>&nbsp;Source</span>
          </a>
        </div>
      </div>
    </div>
  );
}
