import Image from "next/image";
import personal from "public/project_assets/personal-website.png"
import { Project, ProjectBox } from "./ProjectBox/";

const projects: Project[] = [
  {
    name: "Portfolio",
    description: "A personal portfolio website that serves blogging purpose too.",
    image: <Image src={personal} placeholder="blur" alt="Portfolio Project" />,
    sourceLink: "https://github.com/shivang0-0/shivangsharma",
    demoLink: "https://shivangsharma.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectBox
          key={index}
          name={project.name}
          image={project.image}
          description={project.description}
          demoLink={project.demoLink}
          sourceLink={project.sourceLink}
        />
      ))}
    </div>
  );
}