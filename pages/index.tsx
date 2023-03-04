import Link from "next/link";

export default function Home() {
  return (
    <div className="container w-[80%] sm:w-[60%] mx-auto py-[5rem]">
      <div className="logo mb-12 h-16 w-16 p-2 sm:h-24 sm:w-24 rounded-full bg-gradient-to-r from-[#50AEF1] to-[#EE5DB4] flex items-center justify-center">
        <img src="/shivang-ico.png" alt="My Photo" className="object-cover" />
      </div>
      <h1 className="text-xl sm:text-3xl text-white my-5 font-display">
        Hi, I am <span className="text-[#50AEF1] font-bold">Shivang Sharma</span>👋️
      </h1>
      <p className="text-white sm:w-3/4 text-base sm:text-xl font-body">
        I am a{" "} 
        <span className="text-[#50AEF1] font-bold">Front-End Developer,</span>&nbsp;
        <span className="text-[#50AEF1] font-bold">Programmer</span> & a&nbsp;
        <span className="text-[#50AEF1] font-bold">Problem Solver</span>&nbsp;and have passion for coding.&nbsp;
        I have a strong interest in&nbsp;
        <span className="text-[#50AEF1] font-bold">Research</span>&nbsp;and I am an&nbsp;
        <span className="text-[#50AEF1] font-bold">Open-Source Enthusiast.</span>
      </p>
      <p className="text-white sm:w-3/4 text-base sm:text-xl my-4 font-body">
        I am currently a student at&nbsp;
        <span className="text-[#50AEF1] font-bold">JIIT</span>, studying&nbsp;
        <span className="text-[#50AEF1] font-bold">B.Tech Computer Science Engineering.</span>
      </p>
      <div className="links my-12 flex sm:justify-between sm:w-1/4">
        <Link href="https://github.com/shivang0-0">
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
      <div className="social-links flex justify-start">
        <a href="https://github.com/shivang0-0" >
          <img src="/icons/github-32.png" alt="Github Icon" style={{marginRight: '30px'}}/>
        </a>
        <a href="https://www.linkedin.com/in/shivang-sharma-218058220/">
          <img src="/icons/linkedin-32.png" alt="LinkedIn Icon" style={{marginRight: '30px'}}/>
        </a>
        <a href="mailto:shivang.sharma11@pm.me">
          <img src="/icons/envelope-32.png" alt="Mail Icon" style={{marginRight: '30px'}}/>
        </a>
        <a href="https://www.instagram.com/shivang.sharma_/">
          <img src="/icons/instagram-32-v2.png" alt="Instagram Icon" style={{marginRight: '30px'}}/>
        </a>
      </div>
    </div>
  );
}
