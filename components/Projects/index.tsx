import Image from "next/image";
import personal from "public/project_assets/personal-website.png"
import thatdumbguy from "public/project_assets/thatdumbguy.png"
import eVaarta from "public/project_assets/evaarta.png"
import { Project, ProjectBox } from "./ProjectBox/";

const projects: Project[] = [
  {
    name: "Portfolio",
    description: "A personal portfolio website that serves blogging purpose too.",
    image: <Image src={personal} placeholder="blur" alt="Portfolio Project" />,
    sourceLink: "https://github.com/shivang0-0/shivangsharma",
    demoLink: "https://shivangsharma.vercel.app/",
  },
  {
    name: "thatdumbguy",
    description: "A voice based song player written in bash.",
    image: <Image src={thatdumbguy} placeholder="blur" alt="thatdumbguy" />,
    sourceLink: "https://github.com/shivang0-0/thatdumbguy",
    demoLink: "https://github.com/shivang0-0/thatdumbguy/blob/main/README.md",
  },
  {
    name: "eVaarta",
    description: "A webRTC based video calling solution ",
    image: <Image src={eVaarta} placeholder="blur" alt="eVaarta" />,
    sourceLink: "https://github.com/shivang0-0/eVaarta",
    demoLink: "https://github.com/shivang0-0/eVaarta/blob/main/README.md",
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