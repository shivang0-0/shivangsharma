import Navbar from "../components/Navbar";
import Post from "../components/Post";

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto w-[80%] md:w-[60%] my-12">
        <h1 className="text-white font-bold text-2xl">
          Posts
        </h1>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
};

export default Blog;
