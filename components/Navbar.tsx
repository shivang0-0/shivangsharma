import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0  left-[50%] right-[50%] translate-x-[-50%] flex items-center bg-[#181818] w-[80%] md:w-[60%] backdrop-filler backdrop-blur-xl mx-auto rounded-2xl  my-4 py-6 px-4 bg-gradient-to-r from-[#3d3d3d] to-[#c4c4c400] bg-opacity-10">
      <ul className="flex">
        <Link href="/">
          <li className="mr-4 flex items-center text-white text-lg cursor-pointer">
            <img src="/icons/home-7-16.ico" alt="project icon" />
            &nbsp;&nbsp;Home
          </li>
        </Link>
        <Link href="https://github.com/shivang0-0">
          <li className="mr-4 flex items-center text-white text-lg cursor-pointer">
            <img src="/icons/code-24.ico" alt="project icon" />
            &nbsp;&nbsp;Projects
          </li>
        </Link>
        <Link href="/blog">
          <li className="mr-4 flex items-center text-white text-lg cursor-pointer">
            <img src="/icons/pencil-16.ico" alt="project icon" />
            &nbsp;&nbsp;Blog
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
