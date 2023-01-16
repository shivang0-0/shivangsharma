import Link from "next/link";

export default function Home() {
  return (
    <div className="container w-[80%] sm:w-[60%] mx-auto py-[5rem]">
      <div className="logo mb-12 h-16 w-16 p-2 sm:h-24 sm:w-24 rounded-full bg-gradient-to-r from-[#50AEF1] to-[#EE5DB4] flex items-center justify-center">
        <img src="/shivang-ico.png" alt="My Photo" className="object-cover" />
      </div>
      <h1 className="text-xl sm:text-3xl text-white my-5">
        Hi, I am <span className="text-[#50AEF1] font-bold">Shivang Sharma</span>👋️
      </h1>
      <p className="text-white sm:w-3/4 text-base sm:text-xl">
        I am a{" "} 
        <span className="text-[#50AEF1] font-bold">Front-End Developer</span>,&nbsp;
        <span className="text-[#50AEF1] font-bold">Programmer</span> & a&nbsp;
        <span className="text-[#50AEF1] font-bold">Problem Solver</span>. I like 
        to code in my free time and have an immense passion for coding and an&nbsp;
        <span className="text-[#50AEF1] font-bold">Open-Source Enthusiast.</span>
      </p>
      <p className="text-white sm:w-3/4 text-base sm:text-xl my-4">
        I am currently a student at&nbsp;
        <span className="text-[#50AEF1] font-bold">JIIT</span>, studying&nbsp;
        <span className="text-[#50AEF1] font-bold">B.Tech Computer Science Engineering.</span>
      </p>
      <div className="links my-12 flex sm:justify-between sm:w-1/4">
        <Link href="/projects">
        <div className="link flex items-center justify-start sm:text-xl text-base text-[#ccc] font-bold cursor-pointer mr-4 sm:mr-0">
          <img src="/icons/code-24.ico" alt="code icon" />
          &nbsp; Projects
        </div>
        </Link>
        <Link href="/blog">
        <div className="link flex items-center justify-start sm:text-xl text-base text-[#ccc] font-bold cursor-pointer">
          <img src="/icons/pencil-16.ico" alt="code icon" />
          &nbsp; Blog
        </div>
        </Link>
      </div>
    </div>
  );
}
