import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="w-[80%] md:w-[60%] backdrop-blur-xl mx-auto rounded-2xl  my-4 py-6 px-4 bg-gradient-to-r from-[#575757] to-[#c4c4c400]">
            <ul className="flex">
                <Link href="/projects">
                    <li className="mr-4 flex items-center text-white text-lg cursor-pointer">
                        <img src="/icons/code-24.ico" alt="project icon"/>
                        &nbsp;&nbsp;Projects
                    </li>
                </Link>
                <Link href="/blog">
                    <li className="mr-4 flex items-center text-white text-lg cursor-pointer">
                        <img src="/icons/pencil-16.ico" alt="project icon"/>
                        &nbsp;&nbsp;Blog
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar;